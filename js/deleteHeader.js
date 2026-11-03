/***********************************************
> deleteHeader by duyvinh09
***********************************************/	

const version = "V2.0.0";

if (typeof $request === "undefined" || !$request || !$request.headers) {
    $done({});
}

const headersToStrip = new Set(["x-revenuecat-etag", "if-none-match", "if-modified-since", "x-goog-if-none-match"]);

let modifiedHeaders = { ...$request.headers };

for (let key in modifiedHeaders) {
    if (headersToStrip.has(key.toLowerCase())) {
        modifiedHeaders[key] = undefined; 
        delete modifiedHeaders[key];
    }
}

$done({ headers: modifiedHeaders });