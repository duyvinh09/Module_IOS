/** GUI_ANH_VU.md sections 4, 5, 8; Shadowrocket request responses. */
(function () {
    const match = /^https?:\/\/([^/:]+)(?::\d+)?(\/[^?#]*)/.exec($request.url);
    if (!match) return $done({});
    const host = match[1], path = match[2];
    const method = String($request.method || 'GET').toUpperCase();
    const spotify = /^(?:spclient\.wg\.spotify\.com|[\w-]+-spclient\.spotify\.com)$/.test(host);
    function reply(status, body, type) {
        const response = {status, headers:{'Content-Type':type || 'application/json', 'Cache-Control':'no-store'},body};
        $done({response});
    }
    if (/(^|\.)akamaized\.net$/.test(host)) return reply(204, '', 'text/plain');
    if (host === 'apresolve.spotify.com' && path === '/resolve' && method === 'GET') {
        return reply(200, JSON.stringify({spclient:['spclient.wg.spotify.com:443'], dealer:['dealer.spotify.com:443']}));
    }
    if (!spotify) return $done({});
    if (/^\/(ads|ad-logic|pendragon)(?:\/|$)/.test(path)) return reply(204,'','text/plain');
    if (/^\/speechless(?:\/|$)/.test(path)) return reply(200,'','application/x-protobuf');
    if (path === '/track-error/v1/errors' && method === 'POST') return reply(200,JSON.stringify({status:'ok'}));
    if (path === '/reachability/check') return reply(200,'','text/plain');
    if (/\/recommendations-in-free-tier-playlist(?:\/|$)/.test(path)) return reply(200,JSON.stringify({items:[]}));
    if (path === '/device-capabilities/v1/capabilities' && method === 'GET') return reply(200,JSON.stringify({"effective_license":"premium","supports_hifi":{"fully_supported":false,"user_eligible":false},"capabilities":{"can_play_on_demand":true,"can_seek":true,"can_skip_next":true,"can_skip_prev":true,"unlimited_skips":true,"is_tablet":true,"is_desktop":false,"supports_video":true,"supports_offline":true,"supports_high_bitrate":false,"supports_crossfade":true,"supports_gapless":true,"supports_autoplay":true,"autoplay":true,"supports_transfer":true},"device_type":"tablet","can_play_on_demand":true,"can_seek":true,"can_skip_next":true,"can_skip_prev":true,"is_tablet":true,"is_desktop":false,"status":"OK"}));
    $done({});
})();
