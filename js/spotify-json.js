// Rewrite only UI device hints; leave authentication and playback untouched.
const isUiView = /^https:\/\/[^/]+\/(artistview|album-entity-view)\//.test($request.url);
const url = (isUiView ? $request.url : '').replace(/([?&])(platform=iphone|device_type=smartphone|is_tablet=false|isTablet=false)(?=&|$)/g,
    (match, separator, value) => separator + ({
        'platform=iphone': 'platform=ipad',
        'device_type=smartphone': 'device_type=tablet',
        'is_tablet=false': 'is_tablet=true',
        'isTablet=false': 'isTablet=true'
    })[value]);
$done(!isUiView || url === $request.url ? {} : {url});
