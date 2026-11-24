/** JSON account state and PAM fallback. Unknown shapes remain unchanged. */
(function () {
    const status = String($response.statusCode || $response.status);
    if (!/(?:^|\s)200(?:\s|$)/.test(status)) return $done({});
    const path = $request.url.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
    try {
        const data = JSON.parse($response.body);
        const attributes = {"type":{"stringValue":"premium"},"license":{"stringValue":"premium"},"player-license":{"stringValue":"premium"},"player-license-v2":{"stringValue":"premium"},"catalogue":{"stringValue":"premium"},"name":{"stringValue":"duyvinh09"},"plan-name":{"stringValue":"duyvinh09"},"current-plan":{"stringValue":"duyvinh09"},"financial-product":{"stringValue":"pr:premium,tc:0"},"payment-state":{"stringValue":"paid"},"audio-quality":{"stringValue":"0"},"jam-social-session":{"stringValue":"EXPANDED"},"mixing-tools":{"stringValue":"EDIT"},"on-demand":{"boolValue":true},"can_play_on_demand":{"boolValue":true},"unlimited":{"boolValue":true},"unlimited_skips":{"boolValue":true},"unrestricted":{"boolValue":true},"offline":{"boolValue":true},"lyrics-offline":{"boolValue":true},"tablet":{"boolValue":true},"social-session":{"boolValue":true},"com.spotify.madprops.use.ucs.product.state":{"boolValue":true},"com.spotify.madprops.delivered.by.ucs":{"boolValue":true},"shuffle":{"boolValue":false},"pick-and-shuffle":{"boolValue":false},"shuffle-eligible":{"boolValue":false},"mobile":{"boolValue":false},"ads":{"boolValue":false},"high-bitrate":{"boolValue":false},"supports_high_bitrate":{"boolValue":false}};
        const removed = ["on-demand-trial","on-demand-trial-in-progress","smart-shuffle","ad-use-adlogic","ad-catalogues","at-signal","is-eligible-for-trial","is-eligible-for-upsell","upsell-state","ad-session-persistence","ad-formats-preroll-video","is-premium-eligible","is-premium-eligible-v1","is-premium-eligible-v2","is-premium-eligible-v3","is-premium-eligible-v4","is-premium-eligible-v5","is-premium-eligible-v6","is-premium-eligible-v7","is-premium-eligible-v8","is-premium-eligible-v9","is-premium-eligible-v10","is-premium-eligible-v11","is-premium-eligible-v12","is-premium-eligible-v13","is-premium-eligible-v14","is-premium-eligible-v15","is-premium-eligible-v16","is-premium-eligible-v17","is-premium-eligible-v18","is-premium-eligible-v19","is-premium-eligible-v20","is-premium-eligible-v21","is-premium-eligible-v22","is-premium-eligible-v23","is-premium-eligible-v24","is-premium-eligible-v25","is-premium-eligible-v26","is-premium-eligible-v27","is-premium-eligible-v28","is-premium-eligible-v29","is-premium-eligible-v30","is-premium-eligible-v31","is-premium-eligible-v32","is-premium-eligible-v33","is-premium-eligible-v34","is-premium-eligible-v35","is-premium-eligible-v36","is-premium-eligible-v37","is-premium-eligible-v38","is-premium-eligible-v39","is-premium-eligible-v40","is-premium-eligible-v41","is-premium-eligible-v42","is-premium-eligible-v43","is-premium-eligible-v44","is-premium-eligible-v45","is-premium-eligible-v46","is-premium-eligible-v47","is-premium-eligible-v48","is-premium-eligible-v49","is-premium-eligible-v50","is-premium-eligible-v51","is-premium-eligible-v52","is-premium-eligible-v53","is-premium-eligible-v54","is-premium-eligible-v55","is-premium-eligible-v56","is-premium-eligible-v57","is-premium-eligible-v58","is-premium-eligible-v59","is-premium-eligible-v60","is-premium-eligible-v61","is-premium-eligible-v62","is-premium-eligible-v63","is-premium-eligible-v64","is-premium-eligible-v65","is-premium-eligible-v66","is-premium-eligible-v67","is-premium-eligible-v68","is-premium-eligible-v69","is-premium-eligible-v70","is-premium-eligible-v71","is-premium-eligible-v72","is-premium-eligible-v73","is-premium-eligible-v74","is-premium-eligible-v75","is-premium-eligible-v76","is-premium-eligible-v77","is-premium-eligible-v78","is-premium-eligible-v79","is-premium-eligible-v80","is-premium-eligible-v81","is-premium-eligible-v82","is-premium-eligible-v83","is-premium-eligible-v84","is-premium-eligible-v85","is-premium-eligible-v86","is-premium-eligible-v87","is-premium-eligible-v88","is-premium-eligible-v89","is-premium-eligible-v90","is-premium-eligible-v91","is-premium-eligible-v92","is-premium-eligible-v93","is-premium-eligible-v94","is-premium-eligible-v95","is-premium-eligible-v96","is-premium-eligible-v97","is-premium-eligible-v98","is-premium-eligible-v99","is-premium-eligible-v100"];
        function patch(map) {
            removed.forEach(key => delete map[key]);
            Object.keys(attributes).forEach(key => {
                const value = attributes[key];
                const scalar = Object.prototype.hasOwnProperty.call(value,'boolValue') ? value.boolValue : value.stringValue;
                const prior = map[key];
                map[key] = prior && typeof prior === 'object' ? value : typeof prior === 'string' && typeof scalar === 'boolean' ? String(scalar) : scalar;
            });
        }
        if (/\/pam-view-service\//.test(path)) {
            function labels(value) {
                if (typeof value === 'string') return ({'Spotify Free':'duyvinh09','Spotify Premium':'duyvinh09','#B3B3B3':'#FFD700','#1DB954':'#FFD700'})[value] || value;
                if (value && typeof value === 'object') Object.keys(value).forEach(key => value[key] = labels(value[key]));
                return value;
            }
            labels(data);
        } else if (data && typeof data === 'object' && !Array.isArray(data)) {
            const map = data.accountAttributes || data.attributes || data.values || data;
            if (!map || typeof map !== 'object' || Array.isArray(map)) return $done({});
            patch(map);
            if (path === '/melody/v1/check_product_state') data.product = 'premium';
        } else return $done({});
        $done({body:JSON.stringify(data)});
    } catch (e) { console.log('[Spotify] JSON preserved: ' + e); $done({}); }
})();
