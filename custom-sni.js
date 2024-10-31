/*!
 substore-tools - Made with ❤️ in Hanoi
 Build fullhash:cad11a01116e878f02a1, chunkhash:557d58c389619718cc2d (2024-06-15 16:01:02)

 Author: Kien Tran
 Decode: Duy Vinh
*/
(() => {
  (() => {
    'use strict';

    const _0x1c5b43 = {
      "3183": (_0x41e50c, _0x19f084, _0x51dc84) => {
        var _0x4bc404;
        if (typeof window != "undefined") {
          _0x4bc404 = window;
        } else if (typeof _0x51dc84.g != "undefined") {
          _0x4bc404 = _0x51dc84.g;
        } else if (typeof self != "undefined") {
          _0x4bc404 = self;
        } else {
          _0x4bc404 = {};
        }
        _0x41e50c.exports = _0x4bc404;
      }
    };
    var _0x152be8 = _0x1c5b43;
    var _0x51a2a6 = {};
    function _0x235664(_0x2cb223) {
      var _0x5c4392 = _0x51a2a6[_0x2cb223];
      if (_0x5c4392 !== undefined) {
        return _0x5c4392.exports;
      }
      var _0x326f42 = _0x51a2a6[_0x2cb223] = {
        exports: {}
      };
      _0x152be8[_0x2cb223](_0x326f42, _0x326f42.exports, _0x235664);
      return _0x326f42.exports;
    }
    _0x235664.n = _0x5b2222 => {
      var _0x2f562a = _0x5b2222 && _0x5b2222.__esModule ? () => _0x5b2222.default : () => _0x5b2222;
      _0x235664.d(_0x2f562a, {
        a: _0x2f562a
      });
      return _0x2f562a;
    };
    _0x235664.d = (_0x3eaa79, _0x325456) => {
      for (var _0x6b7da6 in _0x325456) {
        if (_0x235664.o(_0x325456, _0x6b7da6) && !_0x235664.o(_0x3eaa79, _0x6b7da6)) {
          Object.defineProperty(_0x3eaa79, _0x6b7da6, {
            enumerable: true,
            get: _0x325456[_0x6b7da6]
          });
        }
      }
    };
    _0x235664.g = function () {
      if (typeof globalThis == "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x579e31) {
        if (typeof window == "object") {
          return window;
        }
      }
    }();
    _0x235664.o = (_0x3e621a, _0x4ceeee) => Object.prototype.hasOwnProperty.call(_0x3e621a, _0x4ceeee);
    var _0x3bece7 = {};
    (() => {
      var _0x3613d1 = _0x235664(3183);
      var _0xe3ce34 = _0x235664.n(_0x3613d1);
      function _0x3c00fa(_0x405c64) {
        return _0x405c64 && _0x405c64 !== "null" && _0x405c64 !== "undefined";
      }
      function _0x521555(_0x1dc01d, _0x2bc84f) {
        return _0x1dc01d.reduce((_0x22ed44, _0x5786d1) => {
          const _0x26ddf8 = _0x5786d1[_0x2bc84f];
          _0x22ed44[_0x26ddf8] ||= [];
          _0x22ed44[_0x26ddf8].push(_0x5786d1);
          return _0x22ed44;
        }, {});
      }
      function _0x9d79b6(_0x3a10f2) {
        return Number.isInteger(_0x3a10f2);
      }
      function _0x2ad09a(_0x9f5103) {
        return typeof _0x9f5103 == "number" && !Number.isNaN(_0x9f5103);
      }
      function _0x3ab44f(_0x12237b) {
        return typeof _0x12237b == "string";
      }
      function _0x1a3ae9(_0x416b7f) {
        return typeof _0x416b7f == "boolean";
      }
      function _0x16f068(_0x2ca7b5) {
        return typeof _0x2ca7b5 == "object" && _0x2ca7b5 !== null;
      }
      const _0x15a5ce = $substore;
      class _0x4ba6bf {
        constructor(_0x22a14d, _0x4308a4) {
          this.key = _0x22a14d;
          this.expires = _0x4308a4;
          const _0x19c637 = _0x15a5ce.read(_0x22a14d);
          if (_0x19c637) {
            this.resourceCache = JSON.parse(_0x19c637);
          } else {
            this.resourceCache = {};
            this._persist();
          }
          this._cleanup();
        }
        _cleanup() {
          let _0x2598b9 = false;
          const _0x5819b8 = new Date().getTime();
          Object.keys(this.resourceCache).forEach(_0x1b51f0 => {
            const _0x1f0e79 = this.resourceCache[_0x1b51f0];
            if (!_0x1f0e79.time || _0x5819b8 - _0x1f0e79.time > this.expires) {
              delete this.resourceCache[_0x1b51f0];
              _0x15a5ce.delete("#" + _0x1b51f0);
              _0x2598b9 = true;
            }
          });
          if (_0x2598b9) {
            this._persist();
          }
        }
        revokeIds(_0x2c187c) {
          let _0x29a09f = false;
          for (const _0x2453ad of _0x2c187c) {
            delete this.resourceCache[_0x2453ad];
            _0x29a09f = true;
          }
          if (_0x29a09f) {
            this._persist();
          }
        }
        revokeAll() {
          this.resourceCache = {};
          this._persist();
        }
        _persist() {
          _0x15a5ce.write(JSON.stringify(this.resourceCache), this.key);
        }
        get(_0x5a07eb) {
          const _0x10d59a = this.resourceCache[_0x5a07eb] && this.resourceCache[_0x5a07eb].time;
          if (_0x10d59a && new Date().getTime() - _0x10d59a <= this.expires) {
            return this.resourceCache[_0x5a07eb].data;
          } else {
            return null;
          }
        }
        set(_0xc61e8b, _0x283ea8) {
          this.resourceCache[_0xc61e8b] = {
            time: new Date().getTime(),
            data: _0x283ea8
          };
          this._persist();
        }
      }
      const _0x4a138d = _0x4ba6bf;
      const _0x27f6c7 = "schemaVersion";
      const _0x5f5264 = "settings";
      const _0x44d232 = "subs";
      const _0x475f62 = "collections";
      const _0x40ad59 = "files";
      const _0x46a0e5 = "modules";
      const _0x333d44 = "artifacts";
      const _0xaaa89c = "#sub-store-cached-dns";
      const _0x25b654 = "#sub-store-cached-isp";
      const _0x28e934 = "#sub-store-cached-region";
      const _0x15bd61 = "#sub-store-cached-country";
      const _0x4836a8 = 604800000;
      const _0x5a8eb4 = new _0x4a138d(_0xaaa89c, _0x4836a8);
      const _0x268c6f = new _0x4a138d(_0x15bd61, _0x4836a8);
      const _0x2423f2 = new _0x4a138d(_0x25b654, _0x4836a8);
      const _0x2743e7 = new _0x4a138d(_0x28e934, _0x4836a8);
      const _0x10d36c = {
        "🏳️‍🌈": ["流量", "时间", "过期", "Bandwidth", "Expire"],
        "🇸🇱": ["应急", "测试节点"],
        "🇦🇩": ["Andorra", "安道尔"],
        "🇦🇪": ["United Arab Emirates", "阿联酋", "迪拜"],
        "🇦🇫": ["Afghanistan", "阿富汗"],
        "🇦🇱": ["Albania", "阿尔巴尼亚", "阿爾巴尼亞"],
        "🇦🇲": ["Armenia", "亚美尼亚"],
        "🇦🇷": ["Argentina", "阿根廷"],
        "🇦🇹": ["Austria", "Úc", "奥地利", "奧地利", "维也纳"],
        "🇦🇺": ["Australia", "澳大利亚", "澳洲", "墨尔本", "悉尼", "土澳", "京澳", "廣澳", "滬澳", "沪澳", "广澳", "Sydney"],
        "🇦🇿": ["Azerbaijan", "阿塞拜疆"],
        "🇧🇦": ["Bosnia and Herzegovina", "波黑共和国", "波黑"],
        "🇧🇩": ["Bangladesh", "孟加拉国", "孟加拉"],
        "🇧🇪": ["Belgium", "比利时", "比利時"],
        "🇧🇬": ["Bulgaria", "保加利亚", "保加利亞"],
        "🇧🇭": ["Bahrain", "巴林"],
        "🇧🇷": ["Brazil", "巴西", "圣保罗"],
        "🇧🇾": ["Belarus", "白俄罗斯", "白俄"],
        "🇨🇦": ["Canada", "加拿大", "蒙特利尔", "温哥华", "楓葉", "枫叶", "滑铁卢", "多伦多", "Waterloo"],
        "🇨🇭": ["Switzerland", "瑞士", "苏黎世", "Zurich"],
        "🇨🇱": ["Chile", "智利"],
        "🇨🇴": ["Colombia", "哥伦比亚"],
        "🇨🇷": ["Costa Rica", "哥斯达黎加"],
        "🇨🇾": ["Cyprus", "塞浦路斯"],
        "🇨🇿": ["Czechia", "捷克"],
        "🇩🇪": ["German", "德国", "德國", "京德", "滬德", "廣德", "沪德", "广德", "法兰克福", "Frankfurt"],
        "🇩🇰": ["Denmark", "丹麦", "丹麥"],
        "🇪🇨": ["Ecuador", "厄瓜多尔"],
        "🇪🇪": ["Estonia", "爱沙尼亚"],
        "🇪🇬": ["Egypt", "埃及"],
        "🇪🇸": ["Spain", "西班牙"],
        "🇪🇺": ["European Union", "欧盟", "欧罗巴"],
        "🇫🇮": ["Finland", "芬兰", "芬蘭", "赫尔辛基"],
        "🇫🇷": ["France", "法国", "法國", "巴黎"],
        "🇬🇧": ["Great Britain", "英国", "England", "United Kingdom", "伦敦", "英", "London"],
        "🇬🇪": ["Georgia", "格鲁吉亚", "格魯吉亞"],
        "🇬🇷": ["Greece", "希腊", "希臘"],
        "🇭🇰": ["Hong Kong", "Hongkong", "香港", "HongKong", "HONG KONG", "深港", "沪港", "呼港", "穗港", "京港", "港"],
        "🇭🇷": ["Croatia", "克罗地亚", "克羅地亞"],
        "🇭🇺": ["Hungary", "匈牙利"],
        "🇯🇴": ["Jordan", "约旦"],
        "🇯🇵": ["Japan", "日本", "东京", "大阪", "埼玉", "沪日", "穗日", "川日", "中日", "泉日", "杭日", "深日", "辽日", "广日", "大坂", "Osaka", "Tokyo"],
        "🇰🇪": ["Kenya", "肯尼亚"],
        "🇰🇬": ["Kyrgyzstan", "吉尔吉斯斯坦"],
        "🇰🇭": ["Cambodia", "柬埔寨"],
        "🇰🇵": ["North Korea", "朝鲜"],
        "🇰🇷": ["Korea", "韩国", "韓國", "韩", "韓", "首尔", "春川", "Chuncheon", "Seoul"],
        "🇰🇿": ["Kazakhstan", "哈萨克斯坦", "哈萨克"],
        "🇮🇩": ["Indonesia", "印尼", "印度尼西亚", "雅加达"],
        "🇮🇪": ["Ireland", "爱尔兰", "愛爾蘭", "都柏林"],
        "🇮🇱": ["Israel", "以色列"],
        "🇮🇲": ["Isle of Man", "马恩岛", "馬恩島"],
        "🇮🇳": ["India", "印度", "孟买", "MFumbai"],
        "🇮🇷": ["Iran", "伊朗"],
        "🇮🇸": ["Iceland", "冰岛", "冰島"],
        "🇮🇹": ["Italy", "意大利", "義大利", "米兰", "Nachash"],
        "🇱🇹": ["Lithuania", "立陶宛"],
        "🇱🇺": ["Luxembourg", "卢森堡"],
        "🇱🇻": ["Latvia", "拉脱维亚", "Latvija"],
        "🇲🇦": ["Morocco", "摩洛哥"],
        "🇲🇩": ["Moldova", "摩尔多瓦", "摩爾多瓦"],
        "🇳🇬": ["Nigeria", "尼日利亚", "尼日利亞"],
        "🇲🇰": ["Macedonia", "马其顿", "馬其頓"],
        "🇲🇳": ["Mongolia", "蒙古"],
        "🇲🇴": ["Macao", "澳门", "澳門", "CTM"],
        "🇲🇹": ["Malta", "马耳他"],
        "🇲🇽": ["Mexico", "墨西哥"],
        "🇲🇾": ["Malaysia", "马来", "馬來", "吉隆坡", "大馬"],
        "🇳🇱": ["Netherlands", "荷兰", "荷蘭", "尼德蘭", "阿姆斯特丹"],
        "🇳🇴": ["Norway", "挪威"],
        "🇳🇵": ["Nepal", "尼泊尔"],
        "🇳🇿": ["New Zealand", "新西兰", "新西蘭"],
        "🇵🇦": ["Panama", "巴拿马"],
        "🇵🇪": ["Peru", "秘鲁", "祕魯"],
        "🇵🇭": ["Philippines", "菲律宾", "菲律賓"],
        "🇵🇰": ["Pakistan", "巴基斯坦"],
        "🇵🇱": ["Poland", "波兰", "波蘭"],
        "🇵🇷": ["Puerto Rico", "波多黎各"],
        "🇵🇹": ["Portugal", "葡萄牙"],
        "🇵🇾": ["Paraguay", "巴拉圭"],
        "🇷🇴": ["Romania", "罗马尼亚"],
        "🇷🇸": ["Serbia", "塞尔维亚"],
        "🇷🇪": ["Réunion", "留尼汪", "法属留尼汪"],
        "🇷🇺": ["Russia", "俄罗斯", "俄国", "俄羅斯", "伯力", "莫斯科", "圣彼得堡", "西伯利亚", "京俄", "杭俄", "廣俄", "滬俄", "广俄", "沪俄", "Moscow"],
        "🇸🇦": ["Saudi", "沙特阿拉伯", "沙特"],
        "🇸🇪": ["Sweden", "瑞典"],
        "🇸🇬": ["Singapore", "Singapo", "新加坡", "狮城", "沪新", "京新", "中新", "泉新", "穗新", "深新", "杭新", "广新", "廣新", "滬新"],
        "🇸🇮": ["Slovenia", "斯洛文尼亚"],
        "🇸🇰": ["Slovakia", "斯洛伐克"],
        "🇹🇭": ["Thailand", "泰国", "泰國", "曼谷"],
        "🇹🇳": ["Tunisia", "突尼斯"],
        "🇹🇷": ["Turkey", "Türkiye", "土耳其", "伊斯坦布尔"],
        "🇹🇼": ["Taiwan", "台湾", "臺灣", "台灣", "中華民國", "中华民国", "台北", "台中", "新北", "彰化", "台", "臺", "Taipei"],
        "🇺🇦": ["Ukraine", "乌克兰", "烏克蘭"],
        "🇺🇸": ["United States", "美国", "America", "美", "京美", "波特兰", "达拉斯", "俄勒冈", "凤凰城", "费利蒙", "硅谷", "矽谷", "拉斯维加斯", "洛杉矶", "圣何塞", "圣克拉拉", "西雅图", "芝加哥", "沪美", "哥伦布", "纽约", "Los Angeles", "San Jose", "Sillicon Valley", "Michigan"],
        "🇺🇾": ["Uruguay", "乌拉圭"],
        "🇻🇪": ["Venezuela", "委内瑞拉"],
        "🇻🇳": ["Viet Nam", "Vietnam", "Việt Nam", "越南", "胡志明"],
        "🇿🇦": ["South Africa", "南非"],
        "🇨🇳": ["China", "中国", "中國", "回国", "回國", "国内", "國內", "华东", "华西", "华南", "华北", "华中", "江苏", "北京", "上海", "广州", "深圳", "杭州", "徐州", "青岛", "宁波", "镇江"]
      };
      const _0x5c4ac0 = {
        "🏳️‍🌈": ["EXP", "BAND"],
        "🇸🇱": ["TEST", "SOS"],
        "🇦🇩": ["AD", "AND"],
        "🇦🇪": ["AE", "ARE"],
        "🇦🇫": ["AF", "AFG"],
        "🇦🇱": ["AL", "ALB"],
        "🇦🇲": ["AM", "ARM"],
        "🇦🇷": ["AR", "ARG"],
        "🇦🇹": ["AT", "AUT"],
        "🇦🇺": ["AU", "AUS"],
        "🇦🇿": ["AZ", "AZE"],
        "🇧🇦": ["BA", "BIH"],
        "🇧🇩": ["BD", "BGD"],
        "🇧🇪": ["BE", "BEL"],
        "🇧🇬": ["BG", "BGR"],
        "🇧🇭": ["BH", "BHR"],
        "🇧🇷": ["BR", "BRA"],
        "🇧🇾": ["BY", "BLR"],
        "🇨🇦": ["CA", "CAN"],
        "🇨🇭": ["CH", "CHE"],
        "🇨🇱": ["CL", "CHL"],
        "🇨🇴": ["CO", "COL"],
        "🇨🇷": ["CR", "CRI"],
        "🇨🇾": ["CY", "CYP"],
        "🇨🇿": ["CZ", "CZE"],
        "🇩🇪": ["DE", "DEU"],
        "🇩🇰": ["DK", "DNK"],
        "🇪🇨": ["EC", "ECU"],
        "🇪🇪": ["EE", "EST"],
        "🇪🇬": ["EG", "EGY"],
        "🇪🇸": ["ES", "ESP"],
        "🇪🇺": ["EU"],
        "🇫🇮": ["FI", "FIN"],
        "🇫🇷": ["FR", "FRA"],
        "🇬🇧": ["GB", "GBR", "UK"],
        "🇬🇪": ["GE", "GEO"],
        "🇬🇷": ["GR", "GRC"],
        "🇭🇰": ["HK", "HKG", "HKT", "HKBN", "HGC", "WTT", "CMI"],
        "🇭🇷": ["HR", "HRV"],
        "🇭🇺": ["HU", "HUN"],
        "🇯🇴": ["JO", "JOR"],
        "🇯🇵": ["JP", "JPN"],
        "🇰🇪": ["KE", "KEN"],
        "🇰🇬": ["KG", "KGZ"],
        "🇰🇭": ["KH", "KGZ"],
        "🇰🇵": ["KP", "PRK"],
        "🇰🇷": ["KR", "KOR"],
        "🇰🇿": ["KZ", "KAZ"],
        "🇮🇩": ["ID", "IDN"],
        "🇮🇪": ["IE", "IRL"],
        "🇮🇱": ["IL", "ISR"],
        "🇮🇲": ["IM", "IMN"],
        "🇮🇳": ["IN", "IND"],
        "🇮🇷": ["IR", "IRN"],
        "🇮🇸": ["IS", "ISL"],
        "🇮🇹": ["IT", "ITA"],
        "🇱🇹": ["LT", "LTU"],
        "🇱🇺": ["LU", "LUX"],
        "🇱🇻": ["LV", "LVA"],
        "🇲🇦": ["MA", "MAR"],
        "🇲🇩": ["MD", "MDA"],
        "🇳🇬": ["NG", "NGA"],
        "🇲🇰": ["MK", "MKD"],
        "🇲🇳": ["MN", "MNG"],
        "🇲🇴": ["MO", "MAC", "CTM"],
        "🇲🇹": ["MT", "MLT"],
        "🇲🇽": ["MX", "MEX"],
        "🇲🇾": ["MY", "MYS"],
        "🇳🇱": ["NL", "NLD"],
        "🇳🇴": ["NO", "NOR"],
        "🇳🇵": ["NP", "NPL"],
        "🇳🇿": ["NZ", "NZL"],
        "🇵🇦": ["PA", "PAN"],
        "🇵🇪": ["PE", "PER"],
        "🇵🇭": ["PH", "PHL"],
        "🇵🇰": ["PK", "PAK"],
        "🇵🇱": ["PL", "POL"],
        "🇵🇷": ["PR", "PRI"],
        "🇵🇹": ["PT", "PRT"],
        "🇵🇾": ["PY", "PRY"],
        "🇷🇴": ["RO", "ROU"],
        "🇷🇸": ["RS", "SRB"],
        "🇷🇪": ["RE", "REU"],
        "🇷🇺": ["RU", "RUS"],
        "🇸🇦": ["SA", "SAU"],
        "🇸🇪": ["SE", "SWE"],
        "🇸🇬": ["SG", "SGP"],
        "🇸🇮": ["SI", "SVN"],
        "🇸🇰": ["SK", "SVK"],
        "🇹🇭": ["TH", "THA"],
        "🇹🇳": ["TN", "TUN"],
        "🇹🇷": ["TR", "TUR"],
        "🇹🇼": ["TW", "TWN", "CHT", "HINET", "ROC"],
        "🇺🇦": ["UA", "UKR"],
        "🇺🇸": ["US", "USA", "LAX", "SFO"],
        "🇺🇾": ["UY", "URY"],
        "🇻🇪": ["VE", "VEN"],
        "🇻🇳": ["VN", "VNM"],
        "🇿🇦": ["ZA", "ZAF"],
        "🇨🇳": ["CN", "CHN", "BACK"]
      };
      function _0x2a8497(_0x345793) {
        var _0x3e5702;
        let _0x3f67f8 = ((_0x3e5702 = _0x345793.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/)) == null ? undefined : _0x3e5702[0]) || "";
        for (const _0x2d120e of Object.keys(_0x10d36c)) {
          if (_0x10d36c[_0x2d120e].some(_0x31b6a4 => RegExp("" + _0x31b6a4, "i").test(_0x345793))) {
            return _0x3f67f8 = _0x2d120e;
          }
        }
        for (const _0x454fdd of Object.keys(_0x5c4ac0)) {
          if (_0x5c4ac0[_0x454fdd].some(_0x5df370 => RegExp("(^|[^a-zA-Z:])" + _0x5df370 + "([^a-zA-Z:]|$)").test(_0x345793) && !/(\d+)\s*([MG]B)/.test(_0x345793))) {
            return _0x3f67f8 = _0x454fdd;
          }
        }
        return _0x3f67f8;
      }
      function _0xb7eb69(_0x3335a4) {
        return /^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(_0x3335a4);
      }
      function _0x54dc99(_0x195448) {
        return /^[A-Z]{2}$/.test(_0x195448);
      }
      function _0x44970b(_0x34242d) {
        return _0x34242d.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim();
      }
      var _0x5799ff = Math.pow;
      var _0x4f5cef = (_0x3599e5, _0x583e93, _0x5cf8bc) => new Promise((_0x5360ab, _0x139f91) => {
        var _0x17ff5f = _0x52ae8e => {
          try {
            _0xc51415(_0x5cf8bc.next(_0x52ae8e));
          } catch (_0x50662a) {
            _0x139f91(_0x50662a);
          }
        };
        var _0x3c26c4 = _0x3097d6 => {
          try {
            _0xc51415(_0x5cf8bc.throw(_0x3097d6));
          } catch (_0x1f96cd) {
            _0x139f91(_0x1f96cd);
          }
        };
        var _0xc51415 = _0x5e275d => _0x5e275d.done ? _0x5360ab(_0x5e275d.value) : Promise.resolve(_0x5e275d.value).then(_0x17ff5f, _0x3c26c4);
        _0xc51415((_0x5cf8bc = _0x5cf8bc.apply(_0x3599e5, _0x583e93)).next());
      });
      const _0x33987e = null;
      const _0x2c83d3 = {
        viettel: ["Viettel Group", "VIETTEL", "AS7552 Viettel Group", "VIETEL-AS-AP"],
        vnpt: ["Vietnam Posts and Telecommunications Group", "VNPT", "AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP", "VNPT-AS-VN"],
        mobifone: ["MOBIFONE", "Mobifone Corporation", "AS131429 MOBIFONE Corporation", "MOBIFONE-AS-VN"],
        fpt: ["FPT Telecom Company", "AS18403 FPT Telecom Company", "FPT-AS-AP"],
        google: ["Google LLC", "Google Cloud", "AS15169 Google LLC"],
        mcloud: ["MCLOUD", "1mcloud Technology Company Limited", "S149078 VPSMMO TECHNOLOGY COMPANY LIMITED", "VPSMMO-AS-VN"],
        gnetwork: ["GNETWORK", "Gnetwork Company Limited", "AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED", "VIETSERVER-AS-VN"],
        akamai: ["Akamai Technologies", "Linode", "AS63949 Akamai Connected Cloud", "AKAMAI-LINODE-AP"],
        cloviet: ["CLOVIET", "Cloud Viet ONE Member Company Limited", "AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY", "DVS-AS-VN"],
        vietDigital: ["Viet Digital Technology Liability Company", "Mailand Technology Trading Services Company Limited", "AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY", "DVS-AS-VN"],
        vietServer: ["Vietserver Services Technology Company Limited", "T-media Digital Technology Company Limited", "AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED", "VIETSERVER-AS-VN"],
        digitalOcean: ["DigitalOcean, LLC", "AS14061 DigitalOcean, LLC", "DIGITALOCEAN-ASN"],
        cloudfly: ["Cloudfly Corporation", "AS149089 CLOUDFLY CORPORATION", "CLOUDFLY-VN"],
        vpsmmo: ["Vpsmmo Technology Company Limited", "1mcloud Technology Company Limited", "AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED", "VPSMMO-AS-VN"],
        litespeed: ["LITESPEED-COM", "Litespeed Technology Company Limited", "AS140810 Megacore Technology Company Limited"],
        m247: ["M247 Europe SRL", "3NT SOLUTIONS LLP", "IROKO Networks Corporation", "AS9009 M247 Europe SRL"],
        vermos: ["VERMOS", "Vermos Company Limited"],
        idata: ["Idata Technology Solutions Company Limited"]
      };
      const _0x21a702 = {
        hn: ["HN", "Hanoi"],
        dn: ["DN", "Da Nang"],
        sg: ["SG", "Ho Chi Minh"]
      };
      function _0x3f6d83(_0x5be9bb) {
        return _0x4f5cef(this, null, function* () {
          let _0x43890f = _0x5be9bb;
          if (_0x19822f(_0x5be9bb)) {
            const _0x41425a = DNS_CACHE.get(_0x5be9bb);
            if (_0x41425a) {
              _0x43890f = _0x41425a;
            } else {
              const _0x13ad12 = yield _0x48a6d0(_0x5be9bb);
              _0x43890f = _0x13ad12;
              if (_0x13ad12) {
                DNS_CACHE.set(_0x5be9bb, _0x13ad12);
              }
            }
          }
          return _0x43890f;
        });
      }
      function _0x316eaa(_0xc70e2c) {
        return _0x4f5cef(this, null, function* () {
          const _0x17f645 = yield _0x3f6d83(_0xc70e2c);
          let _0x1249ff = "";
          const _0x4a090f = COUNTRY_CACHE.get(_0x17f645);
          if (_0x4a090f) {
            _0x1249ff = getFlag(_0x4a090f);
          } else {
            const _0x3dbb2b = yield _0x4c5191(_0x17f645);
            _0x1249ff = getFlag(_0x3dbb2b);
            if (_0x1249ff) {
              COUNTRY_CACHE.set(_0x17f645, _0x3dbb2b);
            }
          }
          return _0x1249ff;
        });
      }
      function _0x48a6d0(_0x5d29cd) {
        return _0x4f5cef(this, null, function* () {
          const _0x46c03d = "https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(_0x5d29cd) + "&type=A";
          const _0x5ec1a2 = {
            Accept: "application/dns-json"
          };
          try {
            const _0x300710 = {
              url: _0x46c03d,
              headers: _0x5ec1a2
            };
            const _0x29a347 = yield _0x33987e.http.get(_0x300710);
            const _0x172c50 = JSON.parse(_0x29a347.body);
            if (_0x172c50.Status !== 0) {
              throw new Error("HTTP error! status: " + _0x172c50.Status);
            }
            if (_0x172c50.Answer) {
              return _0x172c50.Answer.map(_0x310949 => "" + _0x310949.data)[0];
            } else {
              return "";
            }
          } catch (_0x1f507b) {
            return "";
          }
        });
      }
      function _0x35888d(_0x113c50) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.get("https://dns.google/resolve?name=" + _0x113c50).then(_0x14a9f9 => {
            const _0x359a8f = JSON.parse(_0x14a9f9.body);
            if (_0x359a8f.Status === 0) {
              const _0x439240 = _0x359a8f.Answer.find(_0x4698e0 => _0x4698e0.type === 1);
              if (_0x439240) {
                return _0x439240.data;
              } else {
                return "";
              }
            }
            return "";
          });
        });
      }
      function _0x4c5191(_0x3af05c) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.get("http://ip-api.com/json/" + _0x3af05c + "?fields=country").then(_0x5e9fad => JSON.parse(_0x5e9fad.body).country || "");
        });
      }
      function _0x264a69(_0x13984b) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.get("http://ip-api.com/json/" + _0x13984b + "?fields=region,regionName").then(_0x1dd1a4 => {
            const _0xc7a520 = JSON.parse(_0x1dd1a4.body);
            if (_0xc7a520.regionName && _0xc7a520.region) {
              return _0xc7a520.regionName + " (" + _0xc7a520.region + ")";
            } else {
              return "";
            }
          });
        });
      }
      function _0xea5fa6(_0x60f312) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.get("http://ip-api.com/json/" + _0x60f312 + "?fields=isp").then(_0xbe43a6 => JSON.parse(_0xbe43a6.body).isp || "");
        });
      }
      function _0x35eb15(_0x253b3f) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.post({
            url: "http://ip-api.com/batch?fields=isp",
            body: JSON.stringify(_0x253b3f)
          }).then(_0xd3d493 => JSON.parse(_0xd3d493.body).map(_0x17fe00 => _0x17fe00.isp));
        });
      }
      function _0x1ef0c0(_0x1e0c2e) {
        return _0x4f5cef(this, null, function* () {
          return yield _0x33987e.http.get("http://ip-api.com/json/" + _0x1e0c2e + "?fields=isp,org").then(_0x1b2664 => {
            const _0x22c936 = JSON.parse(_0x1b2664.body);
            return [_0x22c936.isp || "", _0x22c936.org || ""].join(",");
          });
        });
      }
      function _0x30e7b2(_0xf453ef, _0x208439) {
        let _0x1bdd9d;
        let _0x148186;
        const _0x1c5051 = _0x4b1b7a(_0xf453ef);
        if ((_0x1bdd9d = _0x208439.match(/^(.*?)\/(\d{1,2})$/)) && (_0x148186 = _0x4b1b7a(_0x1bdd9d[1])) >= 0) {
          const _0x499664 = _0x5799ff(2, 32 - parseInt(_0x1bdd9d[2]));
          return _0x1c5051 >= _0x148186 && _0x1c5051 <= _0x148186 + _0x499664 - 1;
        }
        return false;
      }
      function _0x4b1b7a(_0x227a12) {
        let _0xb9438;
        if (_0xb9438 = _0x227a12.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)) {
          let _0x2ef94e = 0;
          let _0x527800 = 1;
          for (let _0x52b7cb = 4; _0x52b7cb >= 1; _0x52b7cb -= 1) {
            _0x2ef94e += _0x527800 * parseInt(_0xb9438[_0x52b7cb]);
            _0x527800 *= 256;
          }
          return _0x2ef94e;
        }
        return -1;
      }
      function _0x19822f(_0x2c17a7) {
        return !!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(_0x2c17a7);
      }
      function _0x138088(_0x23bd83) {
        return !!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(_0x23bd83);
      }
      function _0x4ecd6a(_0x151add, _0x446268) {
        const _0x2ac49c = _0x151add.split(".");
        const _0x1be420 = _0x446268.split(".");
        if (_0x2ac49c.length < 3 || _0x1be420.length < 3) {
          return false;
        }
        for (let _0x3e2f55 = 0; _0x3e2f55 < 3; _0x3e2f55++) {
          if (_0x2ac49c[_0x3e2f55] !== _0x1be420[_0x3e2f55]) {
            return false;
          }
        }
        return true;
      }
      function _0x4218bc(_0x8f0019) {
        const _0x522823 = _0x8f0019.split(".");
        return _0x522823[_0x522823.length - 1];
      }
      var _0x2ae462 = Math.pow;
      var _0x1b8c66 = (_0x502fad, _0x343c53, _0x4239e5) => new Promise((_0x48aa0d, _0x49ecb8) => {
        var _0x2c9695 = _0x3d5295 => {
          try {
            _0x34b785(_0x4239e5.next(_0x3d5295));
          } catch (_0x23b1b4) {
            _0x49ecb8(_0x23b1b4);
          }
        };
        var _0x39a5d5 = _0x2924aa => {
          try {
            _0x34b785(_0x4239e5.throw(_0x2924aa));
          } catch (_0x15c976) {
            _0x49ecb8(_0x15c976);
          }
        };
        var _0x34b785 = _0xce4b97 => _0xce4b97.done ? _0x48aa0d(_0xce4b97.value) : Promise.resolve(_0xce4b97.value).then(_0x2c9695, _0x39a5d5);
        _0x34b785((_0x4239e5 = _0x4239e5.apply(_0x502fad, _0x343c53)).next());
      });
      function _0xa0826a(_0x2adf26, _0x47d600) {
        for (const _0x7ef019 of _0x2adf26) {
          _0x5057e9(_0x7ef019, _0x47d600);
        }
      }
      function _0x5057e9(_0x231c7d, _0x59b98c) {
        if (_0x231c7d.type === "vmess" || _0x231c7d.type === "vless" || _0x231c7d.type === "trojan") {
          if (_0x231c7d.network === "ws" && _0x231c7d.port === 80) {
            _0x231c7d["ws-opts"] = _0x231c7d["ws-opts"] || {};
            _0x231c7d["ws-opts"].headers = _0x231c7d["ws-opts"].headers || {};
            _0x231c7d["ws-opts"].headers.Host = _0x59b98c;
          } else if (_0x231c7d.network === "grpc" && _0x231c7d.port === 80) {
            _0x231c7d["grpc-opts"] = _0x231c7d["grpc-opts"] || {};
            _0x231c7d["grpc-opts"]["grpc-service-name"] = _0x231c7d["grpc-opts"]["grpc-service-name"] || "";
            _0x231c7d.servername = _0x59b98c;
          } else if (_0x231c7d.network === "tcp") {
            _0x231c7d.servername = _0x59b98c;
          } else {
            _0x231c7d.sni = _0x59b98c;
          }
          _0x231c7d._sni = _0x59b98c;
        }
        if (!_0x3c00fa(_0x231c7d["skip-cert-verify"])) {
          _0x231c7d["skip-cert-verify"] = true;
        }
      }
      function _0xf0f66c(_0x5a99c7) {
        const _0x401c34 = [];
        if (isRealValue(_0x5a99c7.regex)) {
          _0x401c34.push(_0x272e20);
        }
        if (isRealValue(_0x5a99c7.ports)) {
          _0x401c34.push(_0x4cb497);
        }
        if (isRealValue(_0x5a99c7.ips)) {
          _0x401c34.push(_0x5c0f4a);
        }
        if (isRealValue(_0x5a99c7.isps)) {
          _0x401c34.push(_0x6b5b18);
        }
        if (isRealValue(_0x5a99c7.regions)) {
          _0x401c34.push(_0x53d48f);
        }
        if (isRealValue(_0x5a99c7.countries)) {
          _0x401c34.push(_0x5e6591);
        }
        if (isRealValue(_0x5a99c7.subs)) {
          _0x401c34.push(_0x2b6b4a);
        }
        if (isRealValue(_0x5a99c7.tags)) {
          _0x401c34.push(_0x3f853f);
        }
        if (isRealValue(_0x5a99c7.types)) {
          _0x401c34.push(_0x242296);
        }
        if (isRealValue(_0x5a99c7.transports)) {
          _0x401c34.push(_0x217cb7);
        }
        return _0x401c34;
      }
      function _0xe9d1b0(_0x36782d, _0x2f1244, _0x1d9225) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x36782d.map(_0x3c6327 => _0x3c6327(_0x2f1244, _0x1d9225)))).every(_0x4a9973 => _0x4a9973);
        });
      }
      function _0x272e20(_0x25a3cb, _0x3e6f7a) {
        return parseRegex(_0x25a3cb.regex).test(_0x3e6f7a.name);
      }
      function _0x4cb497(_0x5279e0, _0x1738ec) {
        return _0x5279e0.ports.some(_0x43eee2 => {
          if (isInteger(_0x43eee2)) {
            return _0x43eee2 === _0x1738ec.port;
          }
          const _0x2419c6 = /^(\d+)\.\.(\d+)$/;
          const _0xb97c00 = _0x43eee2.match(_0x2419c6);
          if (isString(_0x43eee2) && _0xb97c00) {
            const _0x5354f7 = parseInt(_0xb97c00[1], 10);
            const _0x356dbb = parseInt(_0xb97c00[2], 10);
            if (_0x5354f7 < _0x356dbb) {
              return _0x1738ec.port >= _0x5354f7 && _0x1738ec.port <= _0x356dbb;
            }
          }
          return false;
        });
      }
      function _0x5c0f4a(_0x1e2809, _0x536e46) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x1e2809.ips.map(_0x14fdf2 => _0x1ceab9(_0x536e46.server, _0x14fdf2)))).some(_0xac170 => _0xac170);
        });
      }
      function _0x6b5b18(_0x2dc993, _0x1b4910) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x2dc993.isps.map(_0x1c74c6 => _0x3c11c3(_0x1b4910.server, _0x1c74c6)))).some(_0x5b80d2 => _0x5b80d2);
        });
      }
      function _0x53d48f(_0x4a9222, _0xb81f79) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x4a9222.regions.map(_0x2a0c5a => _0x540a21(_0xb81f79.server, _0x2a0c5a)))).some(_0x2f0669 => _0x2f0669);
        });
      }
      function _0x5e6591(_0x5ea65f, _0x34966f) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x5ea65f.countries.map(_0x8cdcdf => _0x3fee51(_0x34966f, _0x8cdcdf)))).some(_0x5edc82 => _0x5edc82);
        });
      }
      function _0x2b6b4a(_0x5b7839, _0x3d218b) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x5b7839.subs.map(_0x4be056 => _0x39eea8(_0x3d218b, _0x4be056)))).some(_0x208ebf => _0x208ebf);
        });
      }
      function _0x3f853f(_0x37a4f8, _0x1bfe0a) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x37a4f8.tags.map(_0x4ac37b => _0x2e13ba(_0x1bfe0a, _0x4ac37b)))).some(_0x5044ff => _0x5044ff);
        });
      }
      function _0x242296(_0x361af2, _0x15fd19) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x361af2.types.map(_0xb2bad3 => _0x27acc1(_0x15fd19, _0xb2bad3)))).some(_0x214478 => _0x214478);
        });
      }
      function _0x217cb7(_0x1d8bb7, _0x58c824) {
        return _0x1b8c66(this, null, function* () {
          return (yield Promise.all(_0x1d8bb7.transports.map(_0x37bcbb => _0x2cf695(_0x58c824, _0x37bcbb)))).some(_0x481845 => _0x481845);
        });
      }
      function _0x2cf695(_0x98c787, _0x4a208f) {
        return _0x1b8c66(this, null, function* () {
          return (_0x98c787.network || "tls").toLowerCase() === _0x4a208f.toLowerCase();
        });
      }
      function _0x27acc1(_0x4d3cbc, _0x16885e) {
        return _0x1b8c66(this, null, function* () {
          return _0x4d3cbc.type.toLowerCase() === _0x16885e.toLowerCase();
        });
      }
      function _0x2e13ba(_0x4e1858, _0x55f0e0) {
        return _0x1b8c66(this, null, function* () {
          return _0x4e1858.tags && _0x4e1858.tags.some(_0x3e9875 => RegExp("" + _0x3e9875, "i").test(_0x55f0e0));
        });
      }
      function _0x39eea8(_0x425b41, _0x4ab908) {
        return _0x1b8c66(this, null, function* () {
          return _0x425b41.subName === _0x4ab908;
        });
      }
      function _0x3fee51(_0x123716, _0x20f2e2) {
        return _0x1b8c66(this, null, function* () {
          if (isFlagEmoji(_0x20f2e2)) {
            return _0x123716.countryFlag === _0x20f2e2;
          } else if (isFlagISO(_0x20f2e2)) {
            return _0x123716.countryCode === _0x20f2e2;
          } else {
            return false;
          }
        });
      }
      function _0x540a21(_0x192cbf, _0x369965) {
        return _0x1b8c66(this, null, function* () {
          const _0x1ae076 = yield resolveDomainIfNot(_0x192cbf);
          try {
            let _0x5f5381 = "";
            const _0x5f2da0 = REGION_CACHE.get(_0x1ae076);
            if (_0x5f2da0) {
              _0x5f5381 = _0x5f2da0;
            } else {
              _0x5f5381 = yield getRegionFromIp(_0x1ae076);
              if (_0x5f5381) {
                REGION_CACHE.set(_0x1ae076, _0x5f5381);
              }
            }
            const _0x43a2a7 = parseNameAndCode(_0x5f5381);
            if (_0x43a2a7) {
              const {
                name: _0x429fd5,
                code: _0x230dc3
              } = _0x43a2a7;
              const _0xd53ba1 = REGION[_0x369965.toLowerCase()];
              if (isRealValue(_0xd53ba1) && (_0xd53ba1.some(_0x190b7d => RegExp("" + _0x190b7d, "i").test(_0x230dc3)) || _0xd53ba1.some(_0x90846a => RegExp("" + _0x90846a, "i").test(_0x429fd5)))) {
                return true;
              }
            }
          } catch (_0x23e21d) {
            return false;
          }
          return false;
        });
      }
      function _0x3c11c3(_0x19eb70, _0x30f23) {
        return _0x1b8c66(this, null, function* () {
          const _0x5d58ae = yield resolveDomainIfNot(_0x19eb70);
          let _0x42e2ef = "";
          const _0x4c1503 = ISP_CACHE.get(_0x5d58ae);
          if (_0x4c1503) {
            _0x42e2ef = _0x4c1503;
          } else {
            _0x42e2ef = yield getISPAndOrgFromIp(_0x5d58ae);
            if (_0x42e2ef) {
              ISP_CACHE.set(_0x5d58ae, _0x42e2ef);
            }
          }
          const _0x217bd0 = ISP[_0x30f23];
          const _0x390a2e = _0x42e2ef.split(",");
          for (const _0x42ebf4 of _0x390a2e) {
            if (_0x42ebf4 && _0x217bd0.some(_0x3ae31e => RegExp("" + _0x3ae31e, "i").test(_0x42ebf4))) {
              return true;
            }
          }
          return false;
        });
      }
      function _0x1ceab9(_0x4e29e6, _0x115cba) {
        return _0x1b8c66(this, null, function* () {
          const _0x3d38a8 = yield resolveDomainIfNot(_0x4e29e6);
          if (!isValidIpAddress(_0x3d38a8)) {
            return false;
          }
          if (_0x115cba.indexOf("/") < 0) {
            return _0x3d38a8 === _0x115cba || !!areFirstThreePartsEqual(_0x3d38a8, _0x115cba) && getLastPartOfIP(_0x115cba) === "*";
          }
          let _0x57bf61;
          let _0x5b0e30;
          const _0x11a229 = _0x8c4860(_0x3d38a8);
          if ((_0x57bf61 = _0x115cba.match(/^(.*?)\/(\d{1,2})$/)) && (_0x5b0e30 = _0x8c4860(_0x57bf61[1])) >= 0) {
            const _0x5b8710 = _0x2ae462(2, 32 - parseInt(_0x57bf61[2]));
            return _0x11a229 >= _0x5b0e30 && _0x11a229 <= _0x5b0e30 + _0x5b8710 - 1;
          }
          return false;
        });
      }
      function _0x8c4860(_0x514e94) {
        let _0xa727a1;
        if (_0xa727a1 = _0x514e94.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)) {
          let _0x303ef1 = 0;
          let _0x1fa09b = 1;
          for (let _0x4b6796 = 4; _0x4b6796 >= 1; _0x4b6796 -= 1) {
            _0x303ef1 += _0x1fa09b * parseInt(_0xa727a1[_0x4b6796]);
            _0x1fa09b *= 256;
          }
          return _0x303ef1;
        }
        return -1;
      }
      function _0x16c0d1(_0xce151d = []) {
        const {
          sni: _0x1d8ecf,
          uuid: _0xa2eb97
        } = $arguments;
        return _0xce151d.map(_0x5f110c => {
          if (_0x3c00fa(_0x1d8ecf)) {
            _0x5057e9(_0x5f110c, _0x1d8ecf);
          }
          if (_0x3c00fa(_0xa2eb97)) {
            _0x5f110c.uuid &&= _0xa2eb97;
            _0x5f110c.password &&= _0xa2eb97;
          }
          return _0x5f110c;
        });
      }
      _0xe3ce34().operator = _0x16c0d1;
    })();
  })();
})();