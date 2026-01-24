console.log(`spotify-json-2023.06.13`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('Không cần xử lý gì cả.');
}
$done({
    url
});