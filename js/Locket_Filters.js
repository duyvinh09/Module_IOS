// ============================================================
// Locket Filters & PhotoBooth Bridge
// Endpoint: api.locketcamera.com/generateFilteredImage
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Tác giả: @duyvinh09
// Vui lòng khi chia sẽ hoặc lấy về, làm ơn để nguồn giúp mình. Mình cảm ơn
// ============================================================
var WORKER = "https://locket.dinhduyvinh.tech/generateFilteredImage";
var NATIVE_API = /^https:\/\/(?:api\.locketcamera\.com|us-central1-locket-4252a\.cloudfunctions\.net)\/(?:[^?#]*\/)?generateFilteredImage(?:\?|$)/i;
var finished = false;

function done(value) {
    if (finished) return;
    finished = true;
    $done(value);
}
function respondError(code, message) {
    done({ response: {
        status: code,
        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
        body: JSON.stringify({ error: { status: "FILTER_BACKEND_ERROR", message: message } })
    }});
}
function getHeader(source, name) {
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key) && key.toLowerCase() === name.toLowerCase()) return source[key];
    }
    return "";
}

(function run() {
    if (!NATIVE_API.test($request.url || "")) return done({});
    if (($request.method || "POST").toUpperCase() !== "POST") return done({});

    var original;
    try {
        original = JSON.parse($request.body || "{}");
        if (!original || !original.data || typeof original.data !== "object") throw Error("INVALID_DATA");
        if (typeof original.data.image_url !== "string" || !original.data.image_url) throw Error("IMAGE_URL_MISSING");
    } catch (e) {
        return respondError(400, "INVALID_NATIVE_REQUEST");
    }

    // Fake request: preserve native image_url (real Firebase input URL),
    // prompt, filter_id, filter_type, and analytics from Locket_Unlocked flow.
    // Timestamp at capture request arrival, before network and processing delays.
    if (!original.data.captured_at) original.data.captured_at = new Date().toISOString();
    var forwardedBody = JSON.stringify(original);
    var nativeHeaders = $request.headers || {};
    var workerHeaders = { "Content-Type": "application/json", "Accept": "application/json" };

    // Forward native credentials only to this Worker's configured HTTPS endpoint.
    // Completed results upload to Locket Firebase; pending previews stay on R2.
    var FORWARD_FIREBASE_AUTH = true;
    if (FORWARD_FIREBASE_AUTH) {
        var auth = getHeader(nativeHeaders, "authorization");
        var appCheck = getHeader(nativeHeaders, "x-firebase-appcheck");
        if (auth) workerHeaders.Authorization = auth;
        if (appCheck) workerHeaders["X-Firebase-AppCheck"] = appCheck;
    }

    if (typeof $httpClient === "undefined" || typeof $httpClient.post !== "function") {
        return respondError(503, "HTTPCLIENT_UNAVAILABLE");
    }
    $httpClient.post({
        url: WORKER,
        headers: workerHeaders,
        body: forwardedBody,
        timeout: 95
    }, function (error, response, responseBody) {
        if (error || !response) return respondError(502, "WORKER_CONNECTION_FAILED");
        var status = Number(response.status || response.statusCode || 0);
        var result;
        try { result = JSON.parse(String(responseBody || "")); }
        catch (e) { return respondError(502, "WORKER_INVALID_JSON"); }

        if (status === 202 || result.status === "waiting" || result.result && result.result.data && result.result.data.phase === "pending") {
            // Native filter API has no verified intermediate-response contract.
            return respondError(409, "PHOTOBOOTH_WAITING_FOR_SHOTS");
        }
        if (status !== 200) {
            return respondError(status >= 400 && status < 600 ? status : 502,
            String(result.error && result.error.message || "WORKER_HTTP_" + status));
        }

        var imageUrl = result.result && result.result.data && result.result.data.output_url;
        if (typeof imageUrl !== "string") return respondError(502, "WORKER_OUTPUT_URL_MISSING");
        try {
            var parsed = new URL(imageUrl);
            if (parsed.protocol !== "https:") throw Error("NOT_HTTPS");
            var allowedWorker = parsed.hostname === "locket.dinhduyvinh.tech" && /^\/locket-filters\/[0-9a-f-]{36}\.jpg$/.test(parsed.pathname);
            var allowedFirebase = parsed.hostname === "firebasestorage.googleapis.com" && parsed.pathname.indexOf("/v0/b/locket-filters/o/") === 0;
            if (!allowedWorker && !allowedFirebase) throw Error("OUTPUT_HOST_DENIED");
        } catch (e) { return respondError(502, "WORKER_OUTPUT_URL_INVALID"); }

        // Fake response: app receives only the expected response schema.
        // The URL is the exact real URL from the Worker, with no string substitution.
        done({ response: {
            status: 200,
            headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
            body: JSON.stringify({ result: { data: { output_url: imageUrl } } })
        }});
    });
})();