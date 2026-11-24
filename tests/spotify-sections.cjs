const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..');
const host='https://gae2-spclient.spotify.com:443';
function run(file,url,body,headers={},method='GET') {
 let result,count=0;
 vm.runInNewContext(fs.readFileSync(path.join(root,'js',file),'utf8'),{Uint8Array,ArrayBuffer,DataView,console:{log(){}},$request:{url:host+url,method},$response:{status:200,body,headers},$done(value){result=value;count++;}});
 assert.equal(count,1);return result;
}
for(const file of ['spotify-json.js','spotify-request.js','spotify-state.js','spotify-proto.js']) new vm.Script(fs.readFileSync(path.join(root,'js',file),'utf8'));
const capabilities=JSON.parse(run('spotify-request.js','/device-capabilities/v1/capabilities').response.body);
assert.equal(capabilities.device_type,'tablet');assert.equal(capabilities.capabilities.supports_high_bitrate,false);
for(const endpoint of ['ads','ad-logic','pendragon']) assert.equal(run('spotify-request.js','/'+endpoint+'/v1').response.status,204);
assert.equal(run('spotify-request.js','/speechless/v1').response.body,'');
assert.equal(JSON.parse(run('spotify-request.js','/track-error/v1/errors',undefined,{},'POST').response.body).status,'ok');
assert.equal(run('spotify-json.js','/artistview/v1/artist/a?platform=iphone&device_type=smartphone').url,host+'/artistview/v1/artist/a?platform=ipad&device_type=tablet');
const source=fs.readFileSync(path.join(root,'js/spotify-proto.js'),'utf8');
const context={Uint8Array,ArrayBuffer,DataView};vm.createContext(context);
vm.runInContext(source.slice(0,source.indexOf('// ==================== ĐIỀU PHỐI CHÍNH'))+'\nthis.types=protobuf.Root.fromJSON(spotifyJson);',context);
const type=context.types.lookupType('UcsResponseWrapper');
const fixture={success:{accountAttributesSuccess:{accountAttributes:{ads:{boolValue:true},'smart-shuffle':{stringValue:'AVAILABLE'}}},resolveSuccess:{configuration:{assignedValues:[{propertyId:{scope:'test',name:'ads'},boolValue:{value:true}}]}}}};
const input=type.encode(type.create(fixture)).finish();
function verify(success) {
 const map=success.accountAttributesSuccess.accountAttributes;
 assert.equal(map.ads.boolValue,false);assert.equal(map.type.stringValue,'premium');assert.equal(map.name.stringValue,'duyvinh09');
 assert.equal(map['audio-quality'].stringValue,'0');assert.equal(map['high-bitrate'].boolValue,false);assert.equal(map.tablet.boolValue,true);assert(!Object.hasOwn(map,'smart-shuffle'));
 assert.equal(success.resolveSuccess.configuration.assignedValues[0].boolValue.value,false);
}
for(const bytes of [Uint8Array.from(input),Array.from(input),Uint8Array.from(input).buffer]) verify(type.decode(run('spotify-proto.js','/user-customization-service/v1/customize',bytes,{},'POST').body).success);
const bootstrap=context.types.lookupType('BootstrapResponse');
const bootIn=bootstrap.encode(bootstrap.create({ucsResponseV0:{success:{customization:fixture}}})).finish();
verify(bootstrap.decode(run('spotify-proto.js','/bootstrap/v1/bootstrap',Uint8Array.from(bootIn),{},'POST').body).ucsResponseV0.success.customization.success);
function frame(flag,bytes){return new Uint8Array([flag,(bytes.length>>>24)&255,(bytes.length>>>16)&255,(bytes.length>>>8)&255,bytes.length&255,...bytes]);}
const trailer=frame(128,Buffer.from('grpc-status:0\r\n'));
const grpc=run('spotify-proto.js','/user-customization-service/v1/customize',new Uint8Array([...frame(0,input),...trailer]),{'content-type':'application/grpc-web+proto'},'POST').body;
const size=new DataView(grpc.buffer,grpc.byteOffset+1,4).getUint32(0);verify(type.decode(grpc.subarray(5,5+size)).success);
assert.deepEqual(Array.from(grpc.subarray(5+size)),Array.from(trailer));
const badge=run('spotify-proto.js','/pam-view-service/v1/views/GetYourPremiumBadge',new Uint8Array()).body;
assert.equal(badge[1],9);assert.equal(Buffer.from(badge.subarray(2,11)).toString(),'duyvinh09');
const nebula=run('spotify-proto.js','/nebula/v1/attributes',Uint8Array.from(Buffer.from('{"attributes":{"ads":true,"custom":42}}')),{'content-type':'application/json'},'POST');
assert.equal(JSON.parse(nebula.body).attributes.ads,false);assert.equal(JSON.parse(nebula.body).attributes.custom,42);
for(const file of ['modules/SpotifyPremium.sgmodule']) {
 const text=fs.readFileSync(path.join(root,file),'utf8');
 const patterns=[...text.matchAll(/^spotify-[\w-]+ = .*?pattern=(.*?),requires-body/gm)].map(m=>new RegExp(m[1]));assert.equal(patterns.length,4);
 for(const endpoint of ['/device-capabilities/v1/capabilities','/ads/a','/speechless/a','/track-error/v1/errors','/pam-view-service/v1/GetPremiumPlanRow?locale=vi','/bootstrap/v1/bootstrap','/nebula/v1/attributes','/configuration/attributes','/product-state/v1/values']) assert(patterns.some(p=>p.test(host+endpoint)),endpoint);
 for(const endpoint of ['/playplay/v1/playable/a','/storage-resolve/a','/widevine-license/a','/login','/auth','/token','/metadata/a','/playlist/a']) {assert(!patterns.some(p=>p.test(host+endpoint)),endpoint);assert.equal(Object.keys(run('spotify-request.js',endpoint)).length,0);}
}
console.log('PASS: routes, ad responses, tablet, Bootstrap/Customize, byte formats, assigned values, gRPC, PAM, Nebula JSON, protected endpoints.');
