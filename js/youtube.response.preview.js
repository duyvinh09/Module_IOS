// Build: 2024/11/24 11:47:49
(() => {
    var qt = Object.defineProperty;
    var Xt = (t, e, n) => e in t ? qt(t, e, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: n
    }) : t[e] = n;
    var Q = (t, e, n) => {
      Xt(t, typeof e != "symbol" ? e + "" : e, n);
      return n;
    };
    (function (t) {
      function e() {}
      function n() {}
      var r = String.fromCharCode;
      var s = {}.toString;
      var o = s.call(t.SharedArrayBuffer);
      var i = s();
      var a = t.Uint8Array;
      var c = a || Array;
      var d = a ? ArrayBuffer : c;
      var f = d.isView || function (h) {
        return h && "length" in h;
      };
      var l = s.call(d.prototype);
      d = n.prototype;
      var g = t.TextEncoder;
      var p = new (a ? Uint16Array : c)(32);
      e.prototype.decode = function (h) {
        if (!f(h)) {
          var R = s.call(h);
          if (R !== l && R !== o && R !== i) {
            throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
          }
          h = a ? new c(h) : h || [];
        }
        var N = R = "";
        for (var k = 0, T = h.length | 0, z = T - 32 | 0, x, w, F = 0, _ = 0, M, B = 0, O = -1; k < T;) {
          for (x = k <= z ? 32 : T - k | 0; B < x; k = k + 1 | 0, B = B + 1 | 0) {
            w = h[k] & 255;
            switch (w >> 4) {
              case 15:
                M = h[k = k + 1 | 0] & 255;
                if (M >> 6 !== 2 || w > 247) {
                  k = k - 1 | 0;
                  break;
                }
                F = (w & 7) << 6 | M & 63;
                _ = 5;
                w = 256;
              case 14:
                M = h[k = k + 1 | 0] & 255;
                F <<= 6;
                F |= (w & 15) << 6 | M & 63;
                _ = M >> 6 === 2 ? _ + 4 | 0 : 24;
                w = w + 256 & 768;
              case 13:
              case 12:
                M = h[k = k + 1 | 0] & 255;
                F <<= 6;
                F |= (w & 31) << 6 | M & 63;
                _ = _ + 7 | 0;
                if (k < T && M >> 6 === 2 && F >> _ && F < 1114112) {
                  w = F;
                  F = F - 65536 | 0;
                  if (F >= 0) {
                    O = (F >> 10) + 55296 | 0;
                    w = (F & 1023) + 56320 | 0;
                    if (B < 31) {
                      p[B] = O;
                      B = B + 1 | 0;
                      O = -1;
                    } else {
                      M = O;
                      O = w;
                      w = M;
                    }
                  }
                } else {
                  w >>= 8;
                  k = k - w - 1 | 0;
                  w = 65533;
                }
                F = _ = 0;
                x = k <= z ? 32 : T - k | 0;
              default:
                p[B] = w;
                continue;
              case 11:
              case 10:
              case 9:
              case 8:
            }
            p[B] = 65533;
          }
          N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]);
          if (B < 32) {
            N = N.slice(0, B - 32 | 0);
          }
          if (k < T) {
            p[0] = O;
            B = ~O >>> 31;
            O = -1;
            if (N.length < R.length) {
              continue;
            }
          } else if (O !== -1) {
            N += r(O);
          }
          R += N;
          N = "";
        }
        return R;
      };
      d.encode = function (h) {
        h = h === undefined ? "" : "" + h;
        var R = h.length | 0;
        var N = new c((R << 1) + 8 | 0);
        var k;
        var T = 0;
        var z = !a;
        for (k = 0; k < R; k = k + 1 | 0, T = T + 1 | 0) {
          var x = h.charCodeAt(k) | 0;
          if (x <= 127) {
            N[T] = x;
          } else {
            if (x <= 2047) {
              N[T] = x >> 6 | 192;
            } else {
              e: {
                if (x >= 55296) {
                  if (x <= 56319) {
                    var w = h.charCodeAt(k = k + 1 | 0) | 0;
                    if (w >= 56320 && w <= 57343) {
                      x = (x << 10) + w - 56613888 | 0;
                      if (x > 65535) {
                        N[T] = x >> 18 | 240;
                        N[T = T + 1 | 0] = x >> 12 & 63 | 128;
                        N[T = T + 1 | 0] = x >> 6 & 63 | 128;
                        N[T = T + 1 | 0] = x & 63 | 128;
                        continue;
                      }
                      break e;
                    }
                    x = 65533;
                  } else if (x <= 57343) {
                    x = 65533;
                  }
                }
                if (!z && k << 1 < T && k << 1 < (T - 7 | 0)) {
                  z = true;
                  w = new c(R * 3);
                  w.set(N);
                  N = w;
                }
              }
              N[T] = x >> 12 | 224;
              N[T = T + 1 | 0] = x >> 6 & 63 | 128;
            }
            N[T = T + 1 | 0] = x & 63 | 128;
          }
        }
        if (a) {
          return N.subarray(0, T);
        } else {
          return N.slice(0, T);
        }
      };
      if (!g) {
        t.TextDecoder = e;
        t.TextEncoder = n;
      }
    })(globalThis);
    function I(t, e) {
      if (!t) {
        throw new Error(e);
      }
    }
    var Wt = 3.4028234663852886e+38;
    var jt = -3.4028234663852886e+38;
    var Kt = 4294967295;
    var zt = 2147483647;
    var Qt = -2147483648;
    function Y(t) {
      if (typeof t != "number") {
        throw new Error("invalid int 32: " + typeof t);
      }
      if (!Number.isInteger(t) || t > zt || t < Qt) {
        throw new Error("invalid int 32: " + t);
      }
    }
    function H(t) {
      if (typeof t != "number") {
        throw new Error("invalid uint 32: " + typeof t);
      }
      if (!Number.isInteger(t) || t > Kt || t < 0) {
        throw new Error("invalid uint 32: " + t);
      }
    }
    function se(t) {
      if (typeof t != "number") {
        throw new Error("invalid float 32: " + typeof t);
      }
      if (Number.isFinite(t) && (t > Wt || t < jt)) {
        throw new Error("invalid float 32: " + t);
      }
    }
    var je = Symbol("@bufbuild/protobuf/enum-type");
    function Ke(t) {
      let e = t[je];
      I(e, "missing enum type on enum object");
      return e;
    }
    function Re(t, e, n, r) {
      t[je] = Be(e, n.map(s => ({
        no: s.no,
        name: s.name,
        localName: t[s.no]
      })), r);
    }
    function Be(t, e, n) {
      let r = Object.create(null);
      let s = Object.create(null);
      let o = [];
      for (let i of e) {
        let a = Qe(i);
        o.push(a);
        r[i.name] = a;
        s[i.no] = a;
      }
      return {
        typeName: t,
        values: o,
        findName(i) {
          return r[i];
        },
        findNumber(i) {
          return s[i];
        }
      };
    }
    function ze(t, e, n) {
      let r = {};
      for (let s of e) {
        let o = Qe(s);
        r[o.localName] = o.no;
        r[o.no] = o.localName;
      }
      Re(r, t, e, n);
      return r;
    }
    function Qe(t) {
      if ("localName" in t) {
        return t;
      } else {
        return Object.assign(Object.assign({}, t), {
          localName: t.name
        });
      }
    }
    var E = class {
      equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e, n) {
        let r = this.getType();
        let s = r.runtime.bin;
        let o = s.makeReadOptions(n);
        s.readMessage(this, o.readerFactory(e), e.byteLength, o);
        return this;
      }
      fromJson(e, n) {
        let r = this.getType();
        let s = r.runtime.json;
        let o = s.makeReadOptions(n);
        s.readMessage(r, e, o, this);
        return this;
      }
      fromJsonString(e, n) {
        let r;
        try {
          r = JSON.parse(e);
        } catch (s) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`);
        }
        return this.fromJson(r, n);
      }
      toBinary(e) {
        let n = this.getType();
        let r = n.runtime.bin;
        let s = r.makeWriteOptions(e);
        let o = s.writerFactory();
        r.writeMessage(this, o, s);
        return o.finish();
      }
      toJson(e) {
        let n = this.getType();
        let r = n.runtime.json;
        let s = r.makeWriteOptions(e);
        return r.writeMessage(this, s);
      }
      toJsonString(e) {
        let r = this.toJson(e);
        return JSON.stringify(r, null, e?.prettySpaces ?? 0);
      }
      toJSON() {
        return this.toJson({
          emitDefaultValues: true
        });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
    function He(t, e, n, r) {
      let o = r?.localName ?? e.substring(e.lastIndexOf(".") + 1);
      let i = {
        [o]: function (a) {
          t.util.initFields(this);
          t.util.initPartial(a, this);
        }
      }[o];
      Object.setPrototypeOf(i.prototype, new E());
      Object.assign(i, {
        runtime: t,
        typeName: e,
        fields: t.util.newFieldList(n),
        fromBinary(a, c) {
          return new i().fromBinary(a, c);
        },
        fromJson(a, c) {
          return new i().fromJson(a, c);
        },
        fromJsonString(a, c) {
          return new i().fromJsonString(a, c);
        },
        equals(a, c) {
          return t.util.equals(i, a, c);
        }
      });
      return i;
    }
    var u;
    (function (t) {
      t[t.DOUBLE = 1] = "DOUBLE";
      t[t.FLOAT = 2] = "FLOAT";
      t[t.INT64 = 3] = "INT64";
      t[t.UINT64 = 4] = "UINT64";
      t[t.INT32 = 5] = "INT32";
      t[t.FIXED64 = 6] = "FIXED64";
      t[t.FIXED32 = 7] = "FIXED32";
      t[t.BOOL = 8] = "BOOL";
      t[t.STRING = 9] = "STRING";
      t[t.BYTES = 12] = "BYTES";
      t[t.UINT32 = 13] = "UINT32";
      t[t.SFIXED32 = 15] = "SFIXED32";
      t[t.SFIXED64 = 16] = "SFIXED64";
      t[t.SINT32 = 17] = "SINT32";
      t[t.SINT64 = 18] = "SINT64";
    })(u ||= {});
    var C;
    (function (t) {
      t[t.BIGINT = 0] = "BIGINT";
      t[t.STRING = 1] = "STRING";
    })(C ||= {});
    function et() {
      let t = 0;
      let e = 0;
      for (let r = 0; r < 28; r += 7) {
        let s = this.buf[this.pos++];
        t |= (s & 127) << r;
        if (!(s & 128)) {
          this.assertBounds();
          return [t, e];
        }
      }
      let n = this.buf[this.pos++];
      t |= (n & 15) << 28;
      e = (n & 112) >> 4;
      if (!(n & 128)) {
        this.assertBounds();
        return [t, e];
      }
      for (let r = 3; r <= 31; r += 7) {
        let s = this.buf[this.pos++];
        e |= (s & 127) << r;
        if (!(s & 128)) {
          this.assertBounds();
          return [t, e];
        }
      }
      throw new Error("invalid varint");
    }
    function ie(t, e, n) {
      for (let o = 0; o < 28; o = o + 7) {
        let i = t >>> o;
        let a = !!(i >>> 7) || e != 0;
        let c = (a ? i | 128 : i) & 255;
        n.push(c);
        if (!a) {
          return;
        }
      }
      let r = t >>> 28 & 15 | (e & 7) << 4;
      let s = !!(e >> 3);
      n.push((s ? r | 128 : r) & 255);
      if (s) {
        for (let o = 3; o < 31; o = o + 7) {
          let i = e >>> o;
          let a = !!(i >>> 7);
          let c = (a ? i | 128 : i) & 255;
          n.push(c);
          if (!a) {
            return;
          }
        }
        n.push(e >>> 31 & 1);
      }
    }
    var oe = 4294967296;
    function Me(t) {
      let e = t[0] === "-";
      if (e) {
        t = t.slice(1);
      }
      let n = 1000000;
      let r = 0;
      let s = 0;
      function o(i, a) {
        let c = Number(t.slice(i, a));
        s *= n;
        r = r * n + c;
        if (r >= oe) {
          s = s + (r / oe | 0);
          r = r % oe;
        }
      }
      o(-24, -18);
      o(-18, -12);
      o(-12, -6);
      o(-6);
      if (e) {
        return nt(r, s);
      } else {
        return Oe(r, s);
      }
    }
    function tt(t, e) {
      let n = Oe(t, e);
      let r = n.hi & -2147483648;
      if (r) {
        n = nt(n.lo, n.hi);
      }
      let s = Ue(n.lo, n.hi);
      if (r) {
        return "-" + s;
      } else {
        return s;
      }
    }
    function Ue(t, e) {
      ({
        lo: t,
        hi: e
      } = Ht(t, e));
      if (e <= 2097151) {
        return String(oe * e + t);
      }
      let n = t & 16777215;
      let r = (t >>> 24 | e << 8) & 16777215;
      let s = e >> 16 & 65535;
      let o = n + r * 6777216 + s * 6710656;
      let i = r + s * 8147497;
      let a = s * 2;
      let c = 10000000;
      if (o >= c) {
        i += Math.floor(o / c);
        o %= c;
      }
      if (i >= c) {
        a += Math.floor(i / c);
        i %= c;
      }
      return a.toString() + Ze(i) + Ze(o);
    }
    function Ht(t, e) {
      return {
        lo: t >>> 0,
        hi: e >>> 0
      };
    }
    function Oe(t, e) {
      return {
        lo: t | 0,
        hi: e | 0
      };
    }
    function nt(t, e) {
      e = ~e;
      if (t) {
        t = ~t + 1;
      } else {
        e += 1;
      }
      return Oe(t, e);
    }
    var Ze = t => {
      let e = String(t);
      return "0000000".slice(e.length) + e;
    };
    function Ce(t, e) {
      if (t >= 0) {
        while (t > 127) {
          e.push(t & 127 | 128);
          t = t >>> 7;
        }
        e.push(t);
      } else {
        for (let n = 0; n < 9; n++) {
          e.push(t & 127 | 128);
          t = t >> 7;
        }
        e.push(1);
      }
    }
    function rt() {
      let t = this.buf[this.pos++];
      let e = t & 127;
      if (!(t & 128)) {
        this.assertBounds();
        return e;
      }
      t = this.buf[this.pos++];
      e |= (t & 127) << 7;
      if (!(t & 128)) {
        this.assertBounds();
        return e;
      }
      t = this.buf[this.pos++];
      e |= (t & 127) << 14;
      if (!(t & 128)) {
        this.assertBounds();
        return e;
      }
      t = this.buf[this.pos++];
      e |= (t & 127) << 21;
      if (!(t & 128)) {
        this.assertBounds();
        return e;
      }
      t = this.buf[this.pos++];
      e |= (t & 15) << 28;
      for (let n = 5; t & 128 && n < 10; n++) {
        t = this.buf[this.pos++];
      }
      if (t & 128) {
        throw new Error("invalid varint");
      }
      this.assertBounds();
      return e >>> 0;
    }
    function Zt() {
      let t = new DataView(new ArrayBuffer(8));
      if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        let s = BigInt("-9223372036854775808");
        let o = BigInt("9223372036854775807");
        let i = BigInt("0");
        let a = BigInt("18446744073709551615");
        return {
          zero: BigInt(0),
          supported: true,
          parse(c) {
            let d = typeof c == "bigint" ? c : BigInt(c);
            if (d > o || d < s) {
              throw new Error(`int64 invalid: ${c}`);
            }
            return d;
          },
          uParse(c) {
            let d = typeof c == "bigint" ? c : BigInt(c);
            if (d > a || d < i) {
              throw new Error(`uint64 invalid: ${c}`);
            }
            return d;
          },
          enc(c) {
            t.setBigInt64(0, this.parse(c), true);
            return {
              lo: t.getInt32(0, true),
              hi: t.getInt32(4, true)
            };
          },
          uEnc(c) {
            t.setBigInt64(0, this.uParse(c), true);
            return {
              lo: t.getInt32(0, true),
              hi: t.getInt32(4, true)
            };
          },
          dec(c, d) {
            t.setInt32(0, c, true);
            t.setInt32(4, d, true);
            return t.getBigInt64(0, true);
          },
          uDec(c, d) {
            t.setInt32(0, c, true);
            t.setInt32(4, d, true);
            return t.getBigUint64(0, true);
          }
        };
      }
      let n = s => I(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`);
      let r = s => I(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
      return {
        zero: "0",
        supported: false,
        parse(s) {
          if (typeof s != "string") {
            s = s.toString();
          }
          n(s);
          return s;
        },
        uParse(s) {
          if (typeof s != "string") {
            s = s.toString();
          }
          r(s);
          return s;
        },
        enc(s) {
          if (typeof s != "string") {
            s = s.toString();
          }
          n(s);
          return Me(s);
        },
        uEnc(s) {
          if (typeof s != "string") {
            s = s.toString();
          }
          r(s);
          return Me(s);
        },
        dec(s, o) {
          return tt(s, o);
        },
        uDec(s, o) {
          return Ue(s, o);
        }
      };
    }
    var S = Zt();
    var b;
    (function (t) {
      t[t.Varint = 0] = "Varint";
      t[t.Bit64 = 1] = "Bit64";
      t[t.LengthDelimited = 2] = "LengthDelimited";
      t[t.StartGroup = 3] = "StartGroup";
      t[t.EndGroup = 4] = "EndGroup";
      t[t.Bit32 = 5] = "Bit32";
    })(b ||= {});
    var ae = class {
      constructor(e) {
        this.stack = [];
        this.textEncoder = e ?? new TextEncoder();
        this.chunks = [];
        this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let s = 0; s < this.chunks.length; s++) {
          e += this.chunks[s].length;
        }
        let n = new Uint8Array(e);
        let r = 0;
        for (let s = 0; s < this.chunks.length; s++) {
          n.set(this.chunks[s], r);
          r += this.chunks[s].length;
        }
        this.chunks = [];
        return n;
      }
      fork() {
        this.stack.push({
          chunks: this.chunks,
          buf: this.buf
        });
        this.chunks = [];
        this.buf = [];
        return this;
      }
      join() {
        let e = this.finish();
        let n = this.stack.pop();
        if (!n) {
          throw new Error("invalid state, fork stack empty");
        }
        this.chunks = n.chunks;
        this.buf = n.buf;
        this.uint32(e.byteLength);
        return this.raw(e);
      }
      tag(e, n) {
        return this.uint32((e << 3 | n) >>> 0);
      }
      raw(e) {
        if (this.buf.length) {
          this.chunks.push(new Uint8Array(this.buf));
          this.buf = [];
        }
        this.chunks.push(e);
        return this;
      }
      uint32(e) {
        for (H(e); e > 127;) {
          this.buf.push(e & 127 | 128);
          e = e >>> 7;
        }
        this.buf.push(e);
        return this;
      }
      int32(e) {
        Y(e);
        Ce(e, this.buf);
        return this;
      }
      bool(e) {
        this.buf.push(e ? 1 : 0);
        return this;
      }
      bytes(e) {
        this.uint32(e.byteLength);
        return this.raw(e);
      }
      string(e) {
        let n = this.textEncoder.encode(e);
        this.uint32(n.byteLength);
        return this.raw(n);
      }
      float(e) {
        se(e);
        let n = new Uint8Array(4);
        new DataView(n.buffer).setFloat32(0, e, true);
        return this.raw(n);
      }
      double(e) {
        let n = new Uint8Array(8);
        new DataView(n.buffer).setFloat64(0, e, true);
        return this.raw(n);
      }
      fixed32(e) {
        H(e);
        let n = new Uint8Array(4);
        new DataView(n.buffer).setUint32(0, e, true);
        return this.raw(n);
      }
      sfixed32(e) {
        Y(e);
        let n = new Uint8Array(4);
        new DataView(n.buffer).setInt32(0, e, true);
        return this.raw(n);
      }
      sint32(e) {
        Y(e);
        e = (e << 1 ^ e >> 31) >>> 0;
        Ce(e, this.buf);
        return this;
      }
      sfixed64(e) {
        let n = new Uint8Array(8);
        let r = new DataView(n.buffer);
        let s = S.enc(e);
        r.setInt32(0, s.lo, true);
        r.setInt32(4, s.hi, true);
        return this.raw(n);
      }
      fixed64(e) {
        let n = new Uint8Array(8);
        let r = new DataView(n.buffer);
        let s = S.uEnc(e);
        r.setInt32(0, s.lo, true);
        r.setInt32(4, s.hi, true);
        return this.raw(n);
      }
      int64(e) {
        let n = S.enc(e);
        ie(n.lo, n.hi, this.buf);
        return this;
      }
      sint64(e) {
        let n = S.enc(e);
        let r = n.hi >> 31;
        let s = n.lo << 1 ^ r;
        let o = (n.hi << 1 | n.lo >>> 31) ^ r;
        ie(s, o, this.buf);
        return this;
      }
      uint64(e) {
        let n = S.uEnc(e);
        ie(n.lo, n.hi, this.buf);
        return this;
      }
    };
    var ce = class {
      constructor(e, n) {
        this.varint64 = et;
        this.uint32 = rt;
        this.buf = e;
        this.len = e.length;
        this.pos = 0;
        this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
        this.textDecoder = n ?? new TextDecoder();
      }
      tag() {
        let e = this.uint32();
        let n = e >>> 3;
        let r = e & 7;
        if (n <= 0 || r < 0 || r > 5) {
          throw new Error("illegal tag: field no " + n + " wire type " + r);
        }
        return [n, r];
      }
      skip(e) {
        let n = this.pos;
        switch (e) {
          case b.Varint:
            while (this.buf[this.pos++] & 128);
            break;
          case b.Bit64:
            this.pos += 4;
          case b.Bit32:
            this.pos += 4;
            break;
          case b.LengthDelimited:
            let r = this.uint32();
            this.pos += r;
            break;
          case b.StartGroup:
            let s;
            while ((s = this.tag()[1]) !== b.EndGroup) {
              this.skip(s);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e);
        }
        this.assertBounds();
        return this.buf.subarray(n, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) {
          throw new RangeError("premature EOF");
        }
      }
      int32() {
        return this.uint32() | 0;
      }
      sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(e & 1);
      }
      int64() {
        return S.dec(...this.varint64());
      }
      uint64() {
        return S.uDec(...this.varint64());
      }
      sint64() {
        let [e, n] = this.varint64();
        let r = -(e & 1);
        e = (e >>> 1 | (n & 1) << 31) ^ r;
        n = n >>> 1 ^ r;
        return S.dec(e, n);
      }
      bool() {
        let [e, n] = this.varint64();
        return e !== 0 || n !== 0;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return S.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return S.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e = this.uint32();
        let n = this.pos;
        this.pos += e;
        this.assertBounds();
        return this.buf.subarray(n, n + e);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
    function v(t, e, n) {
      if (e === n) {
        return true;
      }
      if (t == u.BYTES) {
        if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length) {
          return false;
        }
        for (let r = 0; r < e.length; r++) {
          if (e[r] !== n[r]) {
            return false;
          }
        }
        return true;
      }
      switch (t) {
        case u.UINT64:
        case u.FIXED64:
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          return e == n;
      }
      return false;
    }
    function G(t, e) {
      switch (t) {
        case u.BOOL:
          return false;
        case u.UINT64:
        case u.FIXED64:
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          if (e == 0) {
            return S.zero;
          } else {
            return "0";
          }
        case u.DOUBLE:
        case u.FLOAT:
          return 0;
        case u.BYTES:
          return new Uint8Array(0);
        case u.STRING:
          return "";
        default:
          return 0;
      }
    }
    function Ae(t, e) {
      let n = e === undefined;
      let r = b.Varint;
      let s = e === 0;
      switch (t) {
        case u.STRING:
          s = n || !e.length;
          r = b.LengthDelimited;
          break;
        case u.BOOL:
          s = e === false;
          break;
        case u.DOUBLE:
          r = b.Bit64;
          break;
        case u.FLOAT:
          r = b.Bit32;
          break;
        case u.INT64:
          s = n || e == 0;
          break;
        case u.UINT64:
          s = n || e == 0;
          break;
        case u.FIXED64:
          s = n || e == 0;
          r = b.Bit64;
          break;
        case u.BYTES:
          s = n || !e.byteLength;
          r = b.LengthDelimited;
          break;
        case u.FIXED32:
          r = b.Bit32;
          break;
        case u.SFIXED32:
          r = b.Bit32;
          break;
        case u.SFIXED64:
          s = n || e == 0;
          r = b.Bit64;
          break;
        case u.SINT64:
          s = n || e == 0;
          break;
      }
      let o = u[t].toLowerCase();
      return [r, o, n || s];
    }
    function st(t, e, n, r) {
      let s;
      return {
        typeName: e,
        extendee: n,
        get field() {
          if (!s) {
            let o = typeof r == "function" ? r() : r;
            o.name = e.split(".").pop();
            o.jsonName = `[${e}]`;
            s = t.util.newFieldList([o]).list()[0];
          }
          return s;
        },
        runtime: t
      };
    }
    function ue(t) {
      let e = t.field.localName;
      let n = Object.create(null);
      n[e] = en(t);
      return [n, () => n[e]];
    }
    function en(t) {
      let e = t.field;
      if (e.repeated) {
        return [];
      }
      if (e.default !== undefined) {
        return e.default;
      }
      switch (e.kind) {
        case "enum":
          return e.T.values[0].no;
        case "scalar":
          return G(e.T, e.L);
        case "message":
          let n = e.T;
          let r = new n();
          if (n.fieldWrapper) {
            return n.fieldWrapper.unwrapField(r);
          } else {
            return r;
          }
        case "map":
          throw "map fields are not allowed to be extensions";
      }
    }
    function ot(t, e) {
      if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
        for (let n = t.length - 1; n >= 0; --n) {
          if (t[n].no == e.no) {
            return [t[n]];
          }
        }
        return [];
      }
      return t.filter(n => n.no === e.no);
    }
    function it(t, e, n, r) {
      return {
        syntax: t,
        json: e,
        bin: n,
        util: r,
        makeMessageType(s, o, i) {
          return He(this, s, o, i);
        },
        makeEnum: ze,
        makeEnumType: Be,
        getEnumType: Ke,
        makeExtension(s, o, i) {
          return st(this, s, o, i);
        }
      };
    }
    function de(t, e) {
      if (e instanceof E || !t.fieldWrapper) {
        return e;
      } else {
        return t.fieldWrapper.wrapField(e);
      }
    }
    var ns = {
      "google.protobuf.DoubleValue": u.DOUBLE,
      "google.protobuf.FloatValue": u.FLOAT,
      "google.protobuf.Int64Value": u.INT64,
      "google.protobuf.UInt64Value": u.UINT64,
      "google.protobuf.Int32Value": u.INT32,
      "google.protobuf.UInt32Value": u.UINT32,
      "google.protobuf.BoolValue": u.BOOL,
      "google.protobuf.StringValue": u.STRING,
      "google.protobuf.BytesValue": u.BYTES
    };
    var q = Symbol("@bufbuild/protobuf/unknown-fields");
    var at = {
      readUnknownFields: true,
      readerFactory: t => new ce(t)
    };
    var ct = {
      writeUnknownFields: true,
      writerFactory: () => new ae()
    };
    function tn(t) {
      if (t) {
        return Object.assign(Object.assign({}, at), t);
      } else {
        return at;
      }
    }
    function nn(t) {
      if (t) {
        return Object.assign(Object.assign({}, ct), t);
      } else {
        return ct;
      }
    }
    function dt() {
      return {
        makeReadOptions: tn,
        makeWriteOptions: nn,
        listUnknownFields(t) {
          return t[q] ?? [];
        },
        discardUnknownFields(t) {
          delete t[q];
        },
        writeUnknownFields(t, e) {
          let r = t[q];
          if (r) {
            for (let s of r) {
              e.tag(s.no, s.wireType).raw(s.data);
            }
          }
        },
        onUnknownField(t, e, n, r) {
          let s = t;
          if (!Array.isArray(s[q])) {
            s[q] = [];
          }
          s[q].push({
            no: e,
            wireType: n,
            data: r
          });
        },
        readMessage(t, e, n, r, s) {
          let o = t.getType();
          let i = s ? e.len : e.pos + n;
          let a;
          let c;
          while (e.pos < i && ([a, c] = e.tag(), c != b.EndGroup)) {
            let d = o.fields.find(a);
            if (!d) {
              let f = e.skip(c);
              if (r.readUnknownFields) {
                this.onUnknownField(t, a, c, f);
              }
              continue;
            }
            ut(t, e, d, c, r);
          }
          if (s && (c != b.EndGroup || a !== n)) {
            throw new Error("invalid end group tag");
          }
        },
        readField: ut
      };
    }
    function ut(t, e, n, r, s) {
      let {
        repeated: o,
        localName: i
      } = n;
      if (n.oneof) {
        t = t[n.oneof.localName];
        if (t.case != i) {
          delete t.value;
        }
        t.case = i;
        i = "value";
      }
      switch (n.kind) {
        case "scalar":
        case "enum":
          let a = n.kind == "enum" ? u.INT32 : n.T;
          let c = fe;
          if (n.kind == "scalar" && n.L > 0) {
            c = sn;
          }
          if (o) {
            let g = t[i];
            if (r == b.LengthDelimited && a != u.STRING && a != u.BYTES) {
              let h = e.uint32() + e.pos;
              while (e.pos < h) {
                g.push(c(e, a));
              }
            } else {
              g.push(c(e, a));
            }
          } else {
            t[i] = c(e, a);
          }
          break;
        case "message":
          let d = n.T;
          if (o) {
            t[i].push(me(e, new d(), s, n));
          } else if (t[i] instanceof E) {
            me(e, t[i], s, n);
          } else {
            t[i] = me(e, new d(), s, n);
            if (d.fieldWrapper && !n.oneof && !n.repeated) {
              t[i] = d.fieldWrapper.unwrapField(t[i]);
            }
          }
          break;
        case "map":
          let [f, l] = rn(n, e, s);
          t[i][f] = l;
          break;
      }
    }
    function me(t, e, n, r) {
      let s = e.getType().runtime.bin;
      let o = r?.delimited;
      s.readMessage(e, t, o ? r?.no : t.uint32(), n, o);
      return e;
    }
    function rn(t, e, n) {
      let r = e.uint32();
      let s = e.pos + r;
      let o;
      let i;
      while (e.pos < s) {
        let [a] = e.tag();
        switch (a) {
          case 1:
            o = fe(e, t.K);
            break;
          case 2:
            switch (t.V.kind) {
              case "scalar":
                i = fe(e, t.V.T);
                break;
              case "enum":
                i = e.int32();
                break;
              case "message":
                i = me(e, new t.V.T(), n, undefined);
                break;
            }
            break;
        }
      }
      if (o === undefined) {
        let a = G(t.K, C.BIGINT);
        o = t.K == u.BOOL ? a.toString() : a;
      }
      if (typeof o != "string" && typeof o != "number") {
        o = o.toString();
      }
      if (i === undefined) {
        switch (t.V.kind) {
          case "scalar":
            i = G(t.V.T, C.BIGINT);
            break;
          case "enum":
            i = 0;
            break;
          case "message":
            i = new t.V.T();
            break;
        }
      }
      return [o, i];
    }
    function sn(t, e) {
      let n = fe(t, e);
      if (typeof n == "bigint") {
        return n.toString();
      } else {
        return n;
      }
    }
    function fe(t, e) {
      switch (e) {
        case u.STRING:
          return t.string();
        case u.BOOL:
          return t.bool();
        case u.DOUBLE:
          return t.double();
        case u.FLOAT:
          return t.float();
        case u.INT32:
          return t.int32();
        case u.INT64:
          return t.int64();
        case u.UINT64:
          return t.uint64();
        case u.FIXED64:
          return t.fixed64();
        case u.BYTES:
          return t.bytes();
        case u.FIXED32:
          return t.fixed32();
        case u.SFIXED32:
          return t.sfixed32();
        case u.SFIXED64:
          return t.sfixed64();
        case u.SINT64:
          return t.sint64();
        case u.UINT32:
          return t.uint32();
        case u.SINT32:
          return t.sint32();
      }
    }
    function mt(t, e, n, r, s) {
      t.tag(n.no, b.LengthDelimited);
      t.fork();
      let o = r;
      switch (n.K) {
        case u.INT32:
        case u.FIXED32:
        case u.UINT32:
        case u.SFIXED32:
        case u.SINT32:
          o = Number.parseInt(r);
          break;
        case u.BOOL:
          I(r == "true" || r == "false");
          o = r == "true";
          break;
      }
      X(t, n.K, 1, o, true);
      switch (n.V.kind) {
        case "scalar":
          X(t, n.V.T, 2, s, true);
          break;
        case "enum":
          X(t, u.INT32, 2, s, true);
          break;
        case "message":
          t.tag(2, b.LengthDelimited).bytes(s.toBinary(e));
          break;
      }
      t.join();
    }
    function ve(t, e, n, r) {
      let s = de(n.T, r);
      if (n?.delimited) {
        t.tag(n.no, b.StartGroup).raw(s.toBinary(e)).tag(n.no, b.EndGroup);
      } else {
        t.tag(n.no, b.LengthDelimited).bytes(s.toBinary(e));
      }
    }
    function X(t, e, n, r, s) {
      let [o, i, a] = Ae(e, r);
      if (!a || s) {
        t.tag(n, o)[i](r);
      }
    }
    function ft(t, e, n, r) {
      if (!r.length) {
        return;
      }
      t.tag(n, b.LengthDelimited).fork();
      let [, s] = Ae(e);
      for (let o = 0; o < r.length; o++) {
        t[s](r[o]);
      }
      t.join();
    }
    function pt() {
      return Object.assign(Object.assign({}, dt()), {
        writeField: lt,
        writeMessage(t, e, n) {
          let r = t.getType();
          for (let s of r.fields.byNumber()) {
            let o;
            let i = s.localName;
            if (s.oneof) {
              let a = t[s.oneof.localName];
              if (a.case !== i) {
                continue;
              }
              o = a.value;
            } else {
              o = t[i];
            }
            lt(s, o, e, n);
          }
          if (n.writeUnknownFields) {
            this.writeUnknownFields(t, e);
          }
          return e;
        }
      });
    }
    function lt(t, e, n, r) {
      let s = t.repeated;
      switch (t.kind) {
        case "scalar":
        case "enum":
          let o = t.kind == "enum" ? u.INT32 : t.T;
          if (s) {
            if (t.packed) {
              ft(n, o, t.no, e);
            } else {
              for (let i of e) {
                X(n, o, t.no, i, true);
              }
            }
          } else if (e !== undefined) {
            X(n, o, t.no, e, !!t.oneof || t.opt);
          }
          break;
        case "message":
          if (s) {
            for (let i of e) {
              ve(n, r, t, i);
            }
          } else if (e !== undefined) {
            ve(n, r, t, e);
          }
          break;
        case "map":
          for (let [i, a] of Object.entries(e)) {
            mt(n, r, t, i, a);
          }
          break;
      }
    }
    var P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    var le = [];
    for (let t = 0; t < P.length; t++) {
      le[P[t].charCodeAt(0)] = t;
    }
    le["-".charCodeAt(0)] = P.indexOf("+");
    le["_".charCodeAt(0)] = P.indexOf("/");
    var W = {
      dec(t) {
        let e = t.length * 3 / 4;
        if (t[t.length - 2] == "=") {
          e -= 2;
        } else if (t[t.length - 1] == "=") {
          e -= 1;
        }
        let n = new Uint8Array(e);
        let r = 0;
        let s = 0;
        let o;
        let i = 0;
        for (let a = 0; a < t.length; a++) {
          o = le[t.charCodeAt(a)];
          if (o === undefined) {
            switch (t[a]) {
              case "=":
                s = 0;
              case `
  `:
              case "\r":
              case "\t":
              case " ":
                continue;
              default:
                throw Error("invalid base64 string.");
            }
          }
          switch (s) {
            case 0:
              i = o;
              s = 1;
              break;
            case 1:
              n[r++] = i << 2 | (o & 48) >> 4;
              i = o;
              s = 2;
              break;
            case 2:
              n[r++] = (i & 15) << 4 | (o & 60) >> 2;
              i = o;
              s = 3;
              break;
            case 3:
              n[r++] = (i & 3) << 6 | o;
              s = 0;
              break;
          }
        }
        if (s == 1) {
          throw Error("invalid base64 string.");
        }
        return n.subarray(0, r);
      },
      enc(t) {
        let e = "";
        let n = 0;
        let r;
        let s = 0;
        for (let o = 0; o < t.length; o++) {
          r = t[o];
          switch (n) {
            case 0:
              e += P[r >> 2];
              s = (r & 3) << 4;
              n = 1;
              break;
            case 1:
              e += P[s | r >> 4];
              s = (r & 15) << 2;
              n = 2;
              break;
            case 2:
              e += P[s | r >> 6];
              e += P[r & 63];
              n = 0;
              break;
          }
        }
        if (n) {
          e += P[s];
          e += "=";
          if (n == 1) {
            e += "=";
          }
        }
        return e;
      }
    };
    function gt(t, e, n) {
      ht(e, t);
      let r = e.runtime.bin.makeReadOptions(n);
      let s = ot(t.getType().runtime.bin.listUnknownFields(t), e.field);
      let [o, i] = ue(e);
      for (let a of s) {
        e.runtime.bin.readField(o, r.readerFactory(a.data), e.field, a.wireType, r);
      }
      return i();
    }
    function yt(t, e, n, r) {
      ht(e, t);
      let s = e.runtime.bin.makeReadOptions(r);
      let o = e.runtime.bin.makeWriteOptions(r);
      if (Pe(t, e)) {
        let d = t.getType().runtime.bin.listUnknownFields(t).filter(f => f.no != e.field.no);
        t.getType().runtime.bin.discardUnknownFields(t);
        for (let f of d) {
          t.getType().runtime.bin.onUnknownField(t, f.no, f.wireType, f.data);
        }
      }
      let i = o.writerFactory();
      let a = e.field;
      if (!a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar")) {
        a = Object.assign(Object.assign({}, e.field), {
          opt: true
        });
      }
      e.runtime.bin.writeField(a, n, i, o);
      let c = s.readerFactory(i.finish());
      while (c.pos < c.len) {
        let [d, f] = c.tag();
        let l = c.skip(f);
        t.getType().runtime.bin.onUnknownField(t, d, f, l);
      }
    }
    function Pe(t, e) {
      let n = t.getType();
      return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find(r => r.no == e.field.no);
    }
    function ht(t, e) {
      I(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`);
    }
    var kt = {
      ignoreUnknownFields: false
    };
    var bt = {
      emitDefaultValues: false,
      enumAsInteger: false,
      useProtoFieldName: false,
      prettySpaces: 0
    };
    function on(t) {
      if (t) {
        return Object.assign(Object.assign({}, kt), t);
      } else {
        return kt;
      }
    }
    function an(t) {
      if (t) {
        return Object.assign(Object.assign({}, bt), t);
      } else {
        return bt;
      }
    }
    function xt(t, e) {
      let n = e(cn, wt);
      return {
        makeReadOptions: on,
        makeWriteOptions: an,
        readMessage(r, s, o, i) {
          if (s == null || Array.isArray(s) || typeof s != "object") {
            throw new Error(`cannot decode message ${r.typeName} from JSON: ${A(s)}`);
          }
          i = i ?? new r();
          let a = new Map();
          let c = o.typeRegistry;
          for (let [d, f] of Object.entries(s)) {
            let l = r.fields.findJsonName(d);
            if (l) {
              if (l.oneof) {
                if (f === null && l.kind == "scalar") {
                  continue;
                }
                let g = a.get(l.oneof);
                if (g !== undefined) {
                  throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${g}", "${d}"`);
                }
                a.set(l.oneof, d);
              }
              Tt(i, f, l, o, r, t);
            } else {
              let g = false;
              if (c?.findExtension && d.startsWith("[") && d.endsWith("]")) {
                let p = c.findExtension(d.substring(1, d.length - 1));
                if (p && p.extendee.typeName == r.typeName) {
                  g = true;
                  let [h, R] = ue(p);
                  Tt(h, f, p.field, o, p, true);
                  yt(i, p, R(), o);
                }
              }
              if (!g && !o.ignoreUnknownFields) {
                throw new Error(`cannot decode message ${r.typeName} from JSON: key "${d}" is unknown`);
              }
            }
          }
          return i;
        },
        writeMessage(r, s) {
          let o = r.getType();
          let i = {};
          let a;
          try {
            for (let d of o.fields.byMember()) {
              let f;
              if (d.kind == "oneof") {
                let l = r[d.localName];
                if (l.value === undefined) {
                  continue;
                }
                a = d.findField(l.case);
                if (!a) {
                  throw "oneof case not found: " + l.case;
                }
                f = n(a, l.value, s);
              } else {
                a = d;
                f = n(a, r[a.localName], s);
              }
              if (f !== undefined) {
                i[s.useProtoFieldName ? a.name : a.jsonName] = f;
              }
            }
            let c = s.typeRegistry;
            if (c?.findExtensionFor) {
              for (let d of o.runtime.bin.listUnknownFields(r)) {
                let f = c.findExtensionFor(o.typeName, d.no);
                if (f && Pe(r, f)) {
                  let l = gt(r, f, s);
                  let g = n(f.field, l, s);
                  if (g !== undefined) {
                    i[f.field.jsonName] = g;
                  }
                }
              }
            }
          } catch (c) {
            let d = a ? `cannot encode field ${o.typeName}.${a.name} to JSON` : `cannot encode message ${o.typeName} to JSON`;
            let f = c instanceof Error ? c.message : String(c);
            throw new Error(d + (f.length > 0 ? `: ${f}` : ""));
          }
          return i;
        },
        readScalar: (r, s, o) => Z(r, s, o, t),
        writeScalar: wt,
        debug: A
      };
    }
    function A(t) {
      if (t === null) {
        return "null";
      }
      switch (typeof t) {
        case "object":
          if (Array.isArray(t)) {
            return "array";
          } else {
            return "object";
          }
        case "string":
          if (t.length > 100) {
            return "string";
          } else {
            return `"${t.split("\"").join("\\\"")}"`;
          }
        default:
          return String(t);
      }
    }
    function Tt(t, e, n, r, s, o) {
      let i = n.localName;
      if (n.oneof) {
        if (e === null && n.kind == "scalar") {
          return;
        }
        t = t[n.oneof.localName] = {
          case: i
        };
        i = "value";
      }
      if (n.repeated) {
        if (e === null) {
          return;
        }
        if (!Array.isArray(e)) {
          throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${A(e)}`);
        }
        let a = t[i];
        for (let c of e) {
          if (c === null) {
            throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${A(c)}`);
          }
          let d;
          switch (n.kind) {
            case "message":
              d = n.T.fromJson(c, r);
              break;
            case "enum":
              d = Le(n.T, c, r.ignoreUnknownFields, true);
              if (d === undefined) {
                continue;
              }
              break;
            case "scalar":
              try {
                d = Z(n.T, c, n.L, true);
              } catch (f) {
                let l = `cannot decode field ${s.typeName}.${n.name} from JSON: ${A(c)}`;
                if (f instanceof Error && f.message.length > 0) {
                  l += `: ${f.message}`;
                }
                throw new Error(l);
              }
              break;
          }
          a.push(d);
        }
      } else if (n.kind == "map") {
        if (e === null) {
          return;
        }
        if (typeof e != "object" || Array.isArray(e)) {
          throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${A(e)}`);
        }
        let a = t[i];
        for (let [c, d] of Object.entries(e)) {
          if (d === null) {
            throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
          }
          let f;
          switch (n.V.kind) {
            case "message":
              f = n.V.T.fromJson(d, r);
              break;
            case "enum":
              f = Le(n.V.T, d, r.ignoreUnknownFields, true);
              if (f === undefined) {
                continue;
              }
              break;
            case "scalar":
              try {
                f = Z(n.V.T, d, C.BIGINT, true);
              } catch (l) {
                let g = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${A(e)}`;
                if (l instanceof Error && l.message.length > 0) {
                  g += `: ${l.message}`;
                }
                throw new Error(g);
              }
              break;
          }
          try {
            a[Z(n.K, n.K == u.BOOL ? c == "true" ? true : c == "false" ? false : c : c, C.BIGINT, true).toString()] = f;
          } catch (l) {
            let g = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${A(e)}`;
            if (l instanceof Error && l.message.length > 0) {
              g += `: ${l.message}`;
            }
            throw new Error(g);
          }
        }
      } else {
        switch (n.kind) {
          case "message":
            let a = n.T;
            if (e === null && a.typeName != "google.protobuf.Value") {
              if (n.oneof) {
                throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: null is invalid for oneof field`);
              }
              return;
            }
            if (t[i] instanceof E) {
              t[i].fromJson(e, r);
            } else {
              t[i] = a.fromJson(e, r);
              if (a.fieldWrapper && !n.oneof) {
                t[i] = a.fieldWrapper.unwrapField(t[i]);
              }
            }
            break;
          case "enum":
            let c = Le(n.T, e, r.ignoreUnknownFields, o);
            if (c !== undefined) {
              t[i] = c;
            }
            break;
          case "scalar":
            try {
              t[i] = Z(n.T, e, n.L, o);
            } catch (d) {
              let f = `cannot decode field ${s.typeName}.${n.name} from JSON: ${A(e)}`;
              if (d instanceof Error && d.message.length > 0) {
                f += `: ${d.message}`;
              }
              throw new Error(f);
            }
            break;
        }
      }
    }
    function Z(t, e, n, r) {
      switch (t) {
        case u.DOUBLE:
        case u.FLOAT:
          if (e === null) {
            if (r) {
              return 0;
            } else {
              return undefined;
            }
          }
          if (e === "NaN") {
            return Number.NaN;
          }
          if (e === "Infinity") {
            return Number.POSITIVE_INFINITY;
          }
          if (e === "-Infinity") {
            return Number.NEGATIVE_INFINITY;
          }
          if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") {
            break;
          }
          let s = Number(e);
          if (Number.isNaN(s) || !Number.isFinite(s)) {
            break;
          }
          if (t == u.FLOAT) {
            se(s);
          }
          return s;
        case u.INT32:
        case u.FIXED32:
        case u.SFIXED32:
        case u.SINT32:
        case u.UINT32:
          if (e === null) {
            if (r) {
              return 0;
            } else {
              return undefined;
            }
          }
          let o;
          if (typeof e == "number") {
            o = e;
          } else if (typeof e == "string" && e.length > 0 && e.trim().length === e.length) {
            o = Number(e);
          }
          if (o === undefined) {
            break;
          }
          if (t == u.UINT32) {
            H(o);
          } else {
            Y(o);
          }
          return o;
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          if (e === null) {
            if (r) {
              return S.zero;
            } else {
              return undefined;
            }
          }
          if (typeof e != "number" && typeof e != "string") {
            break;
          }
          let i = S.parse(e);
          if (n) {
            return i.toString();
          } else {
            return i;
          }
        case u.FIXED64:
        case u.UINT64:
          if (e === null) {
            if (r) {
              return S.zero;
            } else {
              return undefined;
            }
          }
          if (typeof e != "number" && typeof e != "string") {
            break;
          }
          let a = S.uParse(e);
          if (n) {
            return a.toString();
          } else {
            return a;
          }
        case u.BOOL:
          if (e === null) {
            if (r) {
              return false;
            } else {
              return undefined;
            }
          }
          if (typeof e != "boolean") {
            break;
          }
          return e;
        case u.STRING:
          if (e === null) {
            if (r) {
              return "";
            } else {
              return undefined;
            }
          }
          if (typeof e != "string") {
            break;
          }
          try {
            encodeURIComponent(e);
          } catch {
            throw new Error("invalid UTF8");
          }
          return e;
        case u.BYTES:
          if (e === null) {
            if (r) {
              return new Uint8Array(0);
            } else {
              return undefined;
            }
          }
          if (e === "") {
            return new Uint8Array(0);
          }
          if (typeof e != "string") {
            break;
          }
          return W.dec(e);
      }
      throw new Error();
    }
    function Le(t, e, n, r) {
      if (e === null) {
        if (r) {
          return t.values[0].no;
        } else {
          return undefined;
        }
      }
      switch (typeof e) {
        case "number":
          if (Number.isInteger(e)) {
            return e;
          }
          break;
        case "string":
          let s = t.findName(e);
          if (s || n) {
            return s?.no;
          }
          break;
      }
      throw new Error(`cannot decode enum ${t.typeName} from JSON: ${A(e)}`);
    }
    function cn(t, e, n, r) {
      if (e === undefined) {
        return e;
      }
      if (!n && t.values[0].no === e) {
        return;
      }
      if (r) {
        return e;
      }
      if (t.typeName == "google.protobuf.NullValue") {
        return null;
      }
      let o = t.findNumber(e);
      return o?.name ?? e;
    }
    function wt(t, e, n) {
      if (e !== undefined) {
        switch (t) {
          case u.INT32:
          case u.SFIXED32:
          case u.SINT32:
          case u.FIXED32:
          case u.UINT32:
            I(typeof e == "number");
            if (e != 0 || n) {
              return e;
            } else {
              return undefined;
            }
          case u.FLOAT:
          case u.DOUBLE:
            I(typeof e == "number");
            if (Number.isNaN(e)) {
              return "NaN";
            } else if (e === Number.POSITIVE_INFINITY) {
              return "Infinity";
            } else if (e === Number.NEGATIVE_INFINITY) {
              return "-Infinity";
            } else if (e !== 0 || n) {
              return e;
            } else {
              return undefined;
            }
          case u.STRING:
            I(typeof e == "string");
            if (e.length > 0 || n) {
              return e;
            } else {
              return undefined;
            }
          case u.BOOL:
            I(typeof e == "boolean");
            if (e || n) {
              return e;
            } else {
              return undefined;
            }
          case u.UINT64:
          case u.FIXED64:
          case u.INT64:
          case u.SFIXED64:
          case u.SINT64:
            I(typeof e == "bigint" || typeof e == "string" || typeof e == "number");
            if (n || e != 0) {
              return e.toString(10);
            } else {
              return undefined;
            }
          case u.BYTES:
            I(e instanceof Uint8Array);
            if (n || e.byteLength > 0) {
              return W.enc(e);
            } else {
              return undefined;
            }
        }
      }
    }
    function It() {
      return xt(true, (t, e) => function (r, s, o) {
        if (r.kind == "map") {
          let i = {};
          switch (r.V.kind) {
            case "scalar":
              for (let [c, d] of Object.entries(s)) {
                let f = e(r.V.T, d, true);
                I(f !== undefined);
                i[c.toString()] = f;
              }
              break;
            case "message":
              for (let [c, d] of Object.entries(s)) {
                i[c.toString()] = d.toJson(o);
              }
              break;
            case "enum":
              let a = r.V.T;
              for (let [c, d] of Object.entries(s)) {
                I(d === undefined || typeof d == "number");
                let f = t(a, d, true, o.enumAsInteger);
                I(f !== undefined);
                i[c.toString()] = f;
              }
              break;
          }
          if (o.emitDefaultValues || Object.keys(i).length > 0) {
            return i;
          } else {
            return undefined;
          }
        } else if (r.repeated) {
          let i = [];
          switch (r.kind) {
            case "scalar":
              for (let a = 0; a < s.length; a++) {
                i.push(e(r.T, s[a], true));
              }
              break;
            case "enum":
              for (let a = 0; a < s.length; a++) {
                i.push(t(r.T, s[a], true, o.enumAsInteger));
              }
              break;
            case "message":
              for (let a = 0; a < s.length; a++) {
                i.push(s[a].toJson(o));
              }
              break;
          }
          if (o.emitDefaultValues || i.length > 0) {
            return i;
          } else {
            return undefined;
          }
        } else {
          if (s === undefined) {
            return;
          }
          switch (r.kind) {
            case "scalar":
              return e(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues);
            case "enum":
              return t(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues, o.enumAsInteger);
            case "message":
              return de(r.T, s).toJson(o);
          }
        }
      });
    }
    function Nt() {
      return {
        setEnumType: Re,
        initPartial(t, e) {
          if (t === undefined) {
            return;
          }
          let n = e.getType();
          for (let r of n.fields.byMember()) {
            let s = r.localName;
            let o = e;
            let i = t;
            if (i[s] !== undefined) {
              switch (r.kind) {
                case "oneof":
                  let a = i[s].case;
                  if (a === undefined) {
                    continue;
                  }
                  let c = r.findField(a);
                  let d = i[s].value;
                  if (c && c.kind == "message" && !(d instanceof c.T)) {
                    d = new c.T(d);
                  } else if (c && c.kind === "scalar" && c.T === u.BYTES) {
                    d = ee(d);
                  }
                  o[s] = {
                    case: a,
                    value: d
                  };
                  break;
                case "scalar":
                case "enum":
                  let f = i[s];
                  if (r.T === u.BYTES) {
                    f = r.repeated ? f.map(ee) : ee(f);
                  }
                  o[s] = f;
                  break;
                case "map":
                  switch (r.V.kind) {
                    case "scalar":
                    case "enum":
                      if (r.V.T === u.BYTES) {
                        for (let [p, h] of Object.entries(i[s])) {
                          o[s][p] = ee(h);
                        }
                      } else {
                        Object.assign(o[s], i[s]);
                      }
                      break;
                    case "message":
                      let g = r.V.T;
                      for (let p of Object.keys(i[s])) {
                        let h = i[s][p];
                        if (!g.fieldWrapper) {
                          h = new g(h);
                        }
                        o[s][p] = h;
                      }
                      break;
                  }
                  break;
                case "message":
                  let l = r.T;
                  if (r.repeated) {
                    o[s] = i[s].map(g => g instanceof l ? g : new l(g));
                  } else if (i[s] !== undefined) {
                    let g = i[s];
                    if (l.fieldWrapper) {
                      if (l.typeName === "google.protobuf.BytesValue") {
                        o[s] = ee(g);
                      } else {
                        o[s] = g;
                      }
                    } else {
                      o[s] = g instanceof l ? g : new l(g);
                    }
                  }
                  break;
              }
            }
          }
        },
        equals(t, e, n) {
          if (e === n) {
            return true;
          } else if (!e || !n) {
            return false;
          } else {
            return t.fields.byMember().every(r => {
              let s = e[r.localName];
              let o = n[r.localName];
              if (r.repeated) {
                if (s.length !== o.length) {
                  return false;
                }
                switch (r.kind) {
                  case "message":
                    return s.every((i, a) => r.T.equals(i, o[a]));
                  case "scalar":
                    return s.every((i, a) => v(r.T, i, o[a]));
                  case "enum":
                    return s.every((i, a) => v(u.INT32, i, o[a]));
                }
                throw new Error(`repeated cannot contain ${r.kind}`);
              }
              switch (r.kind) {
                case "message":
                  return r.T.equals(s, o);
                case "enum":
                  return v(u.INT32, s, o);
                case "scalar":
                  return v(r.T, s, o);
                case "oneof":
                  if (s.case !== o.case) {
                    return false;
                  }
                  let i = r.findField(s.case);
                  if (i === undefined) {
                    return true;
                  }
                  switch (i.kind) {
                    case "message":
                      return i.T.equals(s.value, o.value);
                    case "enum":
                      return v(u.INT32, s.value, o.value);
                    case "scalar":
                      return v(i.T, s.value, o.value);
                  }
                  throw new Error(`oneof cannot contain ${i.kind}`);
                case "map":
                  let a = Object.keys(s).concat(Object.keys(o));
                  switch (r.V.kind) {
                    case "message":
                      let c = r.V.T;
                      return a.every(f => c.equals(s[f], o[f]));
                    case "enum":
                      return a.every(f => v(u.INT32, s[f], o[f]));
                    case "scalar":
                      let d = r.V.T;
                      return a.every(f => v(d, s[f], o[f]));
                  }
                  break;
              }
            });
          }
        },
        clone(t) {
          let e = t.getType();
          let n = new e();
          let r = n;
          for (let s of e.fields.byMember()) {
            let o = t[s.localName];
            let i;
            if (s.repeated) {
              i = o.map(pe);
            } else if (s.kind == "map") {
              i = r[s.localName];
              for (let [a, c] of Object.entries(o)) {
                i[a] = pe(c);
              }
            } else if (s.kind == "oneof") {
              i = s.findField(o.case) ? {
                case: o.case,
                value: pe(o.value)
              } : {
                case: undefined
              };
            } else {
              i = pe(o);
            }
            r[s.localName] = i;
          }
          return n;
        }
      };
    }
    function pe(t) {
      if (t === undefined) {
        return t;
      }
      if (t instanceof E) {
        return t.clone();
      }
      if (t instanceof Uint8Array) {
        let e = new Uint8Array(t.byteLength);
        e.set(t);
        return e;
      }
      return t;
    }
    function ee(t) {
      if (t instanceof Uint8Array) {
        return t;
      } else {
        return new Uint8Array(t);
      }
    }
    var ge = class {
      constructor(e, n) {
        this._fields = e;
        this._normalizer = n;
      }
      findJsonName(e) {
        if (!this.jsonNames) {
          let n = {};
          for (let r of this.list()) {
            n[r.jsonName] = n[r.name] = r;
          }
          this.jsonNames = n;
        }
        return this.jsonNames[e];
      }
      find(e) {
        if (!this.numbers) {
          let n = {};
          for (let r of this.list()) {
            n[r.no] = r;
          }
          this.numbers = n;
        }
        return this.numbers[e];
      }
      list() {
        this.all ||= this._normalizer(this._fields);
        return this.all;
      }
      byNumber() {
        this.numbersAsc ||= this.list().concat().sort((e, n) => e.no - n.no);
        return this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          let e = this.members;
          let n;
          for (let r of this.list()) {
            if (r.oneof) {
              if (r.oneof !== n) {
                n = r.oneof;
                e.push(n);
              }
            } else {
              e.push(r);
            }
          }
        }
        return this.members;
      }
    };
    function De(t, e) {
      let n = Ft(t);
      if (e) {
        return n;
      } else {
        return fn(mn(n));
      }
    }
    function St(t) {
      return De(t, false);
    }
    var Et = Ft;
    function Ft(t) {
      let e = false;
      let n = [];
      for (let r = 0; r < t.length; r++) {
        let s = t.charAt(r);
        switch (s) {
          case "_":
            e = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            n.push(s);
            e = false;
            break;
          default:
            if (e) {
              e = false;
              s = s.toUpperCase();
            }
            n.push(s);
            break;
        }
      }
      return n.join("");
    }
    var un = new Set(["constructor", "toString", "toJSON", "valueOf"]);
    var dn = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]);
    var Rt = t => `${t}$`;
    var mn = t => dn.has(t) ? Rt(t) : t;
    var fn = t => un.has(t) ? Rt(t) : t;
    var ye = class {
      constructor(e) {
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.default = undefined;
        this.fields = [];
        this.name = e;
        this.localName = St(e);
      }
      addField(e) {
        I(e.oneof === this, `field ${e.name} not one of ${this.name}`);
        this.fields.push(e);
      }
      findField(e) {
        if (!this._lookup) {
          this._lookup = Object.create(null);
          for (let n = 0; n < this.fields.length; n++) {
            this._lookup[this.fields[n].localName] = this.fields[n];
          }
        }
        return this._lookup[e];
      }
    };
    var m = it("proto3", It(), pt(), Object.assign(Object.assign({}, Nt()), {
      newFieldList(t) {
        return new ge(t, ln);
      },
      initFields(t) {
        for (let e of t.getType().fields.byMember()) {
          if (e.opt) {
            continue;
          }
          let n = e.localName;
          let r = t;
          if (e.repeated) {
            r[n] = [];
            continue;
          }
          switch (e.kind) {
            case "oneof":
              r[n] = {
                case: undefined
              };
              break;
            case "enum":
              r[n] = 0;
              break;
            case "map":
              r[n] = {};
              break;
            case "scalar":
              r[n] = G(e.T, e.L);
              break;
            case "message":
              break;
          }
        }
      }
    }));
    function ln(t) {
      let o = [];
      let i;
      for (let a of typeof t == "function" ? t() : t) {
        let c = a;
        c.localName = De(a.name, a.oneof !== undefined);
        c.jsonName = a.jsonName ?? Et(a.name);
        c.repeated = a.repeated ?? false;
        if (a.kind == "scalar") {
          c.L = a.L ?? C.BIGINT;
        }
        if (a.oneof !== undefined) {
          let d = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
          if (!i || i.name != d) {
            i = new ye(d);
          }
          c.oneof = i;
          i.addField(c);
        }
        if (a.kind == "message") {
          c.delimited = false;
        }
        c.packed = a.packed ?? (a.kind == "enum" || a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING);
        o.push(c);
      }
      return o;
    }
    var Bt = m.makeMessageType("youtube.component.ResponseContext", () => [{
      no: 6,
      name: "serviceTrackingParams",
      kind: "message",
      T: pn,
      repeated: true
    }]);
    var pn = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [{
      no: 1,
      name: "service",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "params",
      kind: "message",
      T: gn,
      repeated: true
    }]);
    var gn = m.makeMessageType("youtube.component.Param", () => [{
      no: 1,
      name: "key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9
    }]);
    var he = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [{
      no: 1,
      name: "entityBatchUpdate",
      kind: "message",
      T: yn
    }]);
    var yn = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [{
      no: 1,
      name: "mutations",
      kind: "message",
      T: hn,
      repeated: true
    }]);
    var hn = m.makeMessageType("youtube.component.Mutation", () => [{
      no: 1,
      name: "entityKey",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "payload",
      kind: "message",
      T: kn
    }]);
    var kn = m.makeMessageType("youtube.component.Payload", []);
    var Mo = m.makeMessageType("youtube.component.Entity", () => [{
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "targetNo",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "type",
      kind: "scalar",
      T: 5
    }]);
    var U = m.makeMessageType("youtube.component.Label", () => [{
      no: 1,
      name: "runs",
      kind: "message",
      T: $e,
      repeated: true
    }]);
    var $e = m.makeMessageType("youtube.component.Run", () => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
    var Mt = m.makeMessageType("youtube.response.browse.Browse", () => [{
      no: 1,
      name: "responseContext",
      kind: "message",
      T: Bt
    }, {
      no: 9,
      name: "content",
      kind: "message",
      T: V
    }, {
      no: 10,
      name: "onResponseReceivedAction",
      kind: "message",
      T: V
    }, {
      no: 777,
      name: "frameworkUpdateTransport",
      kind: "message",
      T: he
    }]);
    var V = m.makeMessageType("youtube.response.browse.Content", () => [{
      no: 58173949,
      name: "singleColumnResultsRenderer",
      kind: "message",
      T: bn
    }, {
      no: 153515154,
      name: "elementRenderer",
      kind: "message",
      T: Ot
    }, {
      no: 49399797,
      name: "sectionListRenderer",
      kind: "message",
      T: Ve
    }]);
    var bn = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [{
      no: 1,
      name: "tabs",
      kind: "message",
      T: Tn,
      repeated: true
    }]);
    var Tn = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [{
      no: 58174010,
      name: "tabRenderer",
      kind: "message",
      T: wn
    }]);
    var wn = m.makeMessageType("youtube.response.browse.TabRenderer", () => [{
      no: 4,
      name: "content",
      kind: "message",
      T: V
    }]);
    var Ve = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [{
      no: 1,
      name: "sectionListSupportedRenderers",
      kind: "message",
      T: xn,
      repeated: true
    }]);
    var xn = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [{
      no: 50195462,
      name: "itemSectionRenderer",
      kind: "message",
      T: Je
    }, {
      no: 51845067,
      name: "shelfRenderer",
      kind: "message",
      T: Un
    }, {
      no: 221496734,
      name: "musicDescriptionShelfRenderer",
      kind: "message",
      T: An
    }]);
    var Je = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [{
      no: 1,
      name: "richItemContent",
      kind: "message",
      T: Ut,
      repeated: true
    }]);
    var Ut = m.makeMessageType("youtube.response.browse.RichItemContent", () => [{
      no: 153515154,
      name: "videoWithContextRenderer",
      kind: "message",
      T: Ot
    }]);
    var Ot = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [{
      no: 172660663,
      name: "videoRendererContent",
      kind: "message",
      T: In
    }]);
    var In = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [{
      no: 1,
      name: "videoInfo",
      kind: "message",
      T: Nn
    }, {
      no: 2,
      name: "renderInfo",
      kind: "message",
      T: Bn
    }]);
    var Nn = m.makeMessageType("youtube.response.browse.VideoInfo", () => [{
      no: 168777401,
      name: "videoContext",
      kind: "message",
      T: Sn
    }]);
    var Sn = m.makeMessageType("youtube.response.browse.VideoContext", () => [{
      no: 5,
      name: "videoContent",
      kind: "message",
      T: En
    }]);
    var En = m.makeMessageType("youtube.response.browse.VideoContent", () => [{
      no: 465160965,
      name: "timedLyricsRender",
      kind: "message",
      T: Fn
    }]);
    var Fn = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [{
      no: 4,
      name: "timedLyricsContent",
      kind: "message",
      T: Rn
    }]);
    var Rn = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [{
      no: 1,
      name: "runs",
      kind: "message",
      T: $e,
      repeated: true
    }, {
      no: 2,
      name: "footerLabel",
      kind: "scalar",
      T: 9
    }]);
    var Bn = m.makeMessageType("youtube.response.browse.RenderInfo", () => [{
      no: 183314536,
      name: "layoutRender",
      kind: "message",
      T: Mn
    }]);
    var Mn = m.makeMessageType("youtube.response.browse.LayoutRender", () => [{
      no: 1,
      name: "eml",
      kind: "scalar",
      T: 9
    }]);
    var Un = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [{
      no: 5,
      name: "richSectionContent",
      kind: "message",
      T: On
    }]);
    var On = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [{
      no: 51431404,
      name: "reelShelfRenderer",
      kind: "message",
      T: Cn
    }]);
    var Cn = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [{
      no: 1,
      name: "richItemContent",
      kind: "message",
      T: Ut,
      repeated: true
    }]);
    var An = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [{
      no: 3,
      name: "description",
      kind: "message",
      T: U
    }, {
      no: 10,
      name: "footer",
      kind: "message",
      T: U
    }]);
    var ke = m.makeMessageType("youtube.response.next.Next", () => [{
      no: 7,
      name: "content",
      kind: "message",
      T: vn
    }, {
      no: 8,
      name: "onResponseReceivedAction",
      kind: "message",
      T: V
    }, {
      no: 777,
      name: "frameworkUpdateTransport",
      kind: "message",
      T: he
    }]);
    var vn = m.makeMessageType("youtube.response.next.Content", () => [{
      no: 51779735,
      name: "nextResult",
      kind: "message",
      T: Pn
    }]);
    var Pn = m.makeMessageType("youtube.response.next.NextResult", () => [{
      no: 1,
      name: "content",
      kind: "message",
      T: V
    }]);
    var Ct = m.makeMessageType("youtube.response.search.Search", () => [{
      no: 4,
      name: "content",
      kind: "message",
      T: V
    }, {
      no: 7,
      name: "onResponseReceivedCommand",
      kind: "message",
      T: Ln
    }]);
    var Ln = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [{
      no: 50195462,
      name: "itemSectionRenderer",
      kind: "message",
      T: Je
    }, {
      no: 49399797,
      name: "appendContinuationItemsAction",
      kind: "message",
      T: Ve
    }]);
    var At = m.makeMessageType("youtube.response.shorts.Shorts", () => [{
      no: 2,
      name: "entries",
      kind: "message",
      T: Dn,
      repeated: true
    }]);
    var Dn = m.makeMessageType("youtube.response.shorts.Entry", () => [{
      no: 1,
      name: "command",
      kind: "message",
      T: $n
    }]);
    var $n = m.makeMessageType("youtube.response.shorts.Command", () => [{
      no: 139608561,
      name: "reelWatchEndpoint",
      kind: "message",
      T: Vn
    }]);
    var Vn = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [{
      no: 8,
      name: "overlay",
      kind: "message",
      T: Jn
    }]);
    var Jn = m.makeMessageType("youtube.response.shorts.Overlay", () => [{
      no: 139970731,
      name: "reelPlayerOverlayRenderer",
      kind: "message",
      T: _n
    }]);
    var _n = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [{
      no: 12,
      name: "style",
      kind: "scalar",
      T: 5
    }]);
    var Lt = m.makeMessageType("youtube.response.browse.Guide", () => [{
      no: 4,
      name: "items4",
      kind: "message",
      T: vt,
      repeated: true
    }, {
      no: 6,
      name: "items6",
      kind: "message",
      T: vt,
      repeated: true
    }]);
    var vt = m.makeMessageType("youtube.response.browse.Item", () => [{
      no: 117866661,
      name: "guideSectionRenderer",
      kind: "message",
      T: Gn
    }]);
    var Gn = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [{
      no: 1,
      name: "rendererItems",
      kind: "message",
      T: Yn,
      repeated: true
    }]);
    var Yn = m.makeMessageType("youtube.response.browse.RendererItem", () => [{
      no: 318370163,
      name: "iconRender",
      kind: "message",
      T: Pt
    }, {
      no: 117501096,
      name: "labelRender",
      kind: "message",
      T: Pt
    }]);
    var Pt = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [{
      no: 1,
      name: "browseId",
      kind: "scalar",
      T: 9
    }]);
    var be = m.makeMessageType("youtube.response.player.Player", () => [{
      no: 7,
      name: "adPlacements",
      kind: "message",
      T: qn,
      repeated: true
    }, {
      no: 2,
      name: "playabilityStatus",
      kind: "message",
      T: Wn
    }, {
      no: 9,
      name: "playbackTracking",
      kind: "message",
      T: Qn
    }, {
      no: 10,
      name: "captions",
      kind: "message",
      T: Hn
    }, {
      no: 68,
      name: "adSlots",
      kind: "message",
      T: tr,
      repeated: true
    }]);
    var qn = m.makeMessageType("youtube.response.player.AdPlacement", () => [{
      no: 84813246,
      name: "adPlacementRenderer",
      kind: "message",
      T: Xn
    }]);
    var Xn = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [{
      no: 4,
      name: "params",
      kind: "scalar",
      T: 9
    }]);
    var Wn = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [{
      no: 21,
      name: "miniPlayer",
      kind: "message",
      T: jn
    }, {
      no: 11,
      name: "backgroundPlayer",
      kind: "message",
      T: _e
    }]);
    var jn = m.makeMessageType("youtube.response.player.MiniPlayer", () => [{
      no: 151635310,
      name: "miniPlayerRender",
      kind: "message",
      T: Kn
    }]);
    var _e = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [{
      no: 64657230,
      name: "backgroundPlayerRender",
      kind: "message",
      T: zn
    }]);
    var Kn = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [{
      no: 1,
      name: "active",
      kind: "scalar",
      T: 8
    }]);
    var zn = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [{
      no: 1,
      name: "active",
      kind: "scalar",
      T: 8
    }]);
    var Qn = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [{
      no: 1,
      name: "videostatsPlaybackUrl",
      kind: "message",
      T: J
    }, {
      no: 2,
      name: "videostatsDelayplayUrl",
      kind: "message",
      T: J
    }, {
      no: 3,
      name: "videostatsWatchtimeUrl",
      kind: "message",
      T: J
    }, {
      no: 4,
      name: "ptrackingUrl",
      kind: "message",
      T: J
    }, {
      no: 5,
      name: "qoeUrl",
      kind: "message",
      T: J
    }, {
      no: 13,
      name: "atrUrl",
      kind: "message",
      T: J
    }, {
      no: 15,
      name: "videostatsEngageUrl",
      kind: "message",
      T: J
    }, {
      no: 18,
      name: "pageadViewthroughconversion",
      kind: "message",
      T: J
    }]);
    var J = m.makeMessageType("youtube.response.player.Tracking", () => [{
      no: 1,
      name: "baseUrl",
      kind: "scalar",
      T: 9
    }]);
    var Hn = m.makeMessageType("youtube.response.player.Captions", () => [{
      no: 51621377,
      name: "playerCaptionsTrackListRenderer",
      jsonName: "playerCaptionsTracklistRenderer",
      kind: "message",
      T: Zn
    }]);
    var Zn = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [{
      no: 1,
      name: "captionTracks",
      kind: "message",
      T: Ge,
      repeated: true
    }, {
      no: 2,
      name: "audioTracks",
      kind: "message",
      T: er,
      repeated: true
    }, {
      no: 3,
      name: "translationLanguages",
      kind: "message",
      T: Ye,
      repeated: true
    }, {
      no: 4,
      name: "defaultAudioTrackIndex",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "defaultCaptionTrackIndex",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
    var Ge = m.makeMessageType("youtube.response.player.CaptionTrack", () => [{
      no: 1,
      name: "baseUrl",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "message",
      T: U
    }, {
      no: 3,
      name: "vssId",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "languageCode",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "kind",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "rtl",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "isTranslatable",
      kind: "scalar",
      T: 8
    }]);
    var er = m.makeMessageType("youtube.response.player.AudioTrack", () => [{
      no: 2,
      name: "captionTrackIndices",
      kind: "scalar",
      T: 5,
      repeated: true,
      packed: false
    }, {
      no: 3,
      name: "defaultCaptionTrackIndex",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "forcedCaptionTrackIndex",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "visibility",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "hasDefaultTrack",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "hasForcedTrack",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "audioTrackId",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "captionsInitialState",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
    var Ye = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [{
      no: 1,
      name: "languageCode",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "languageName",
      kind: "message",
      T: U
    }]);
    var tr = m.makeMessageType("youtube.response.player.AdSlot", () => [{
      no: 424701016,
      name: "render",
      kind: "message",
      T: nr
    }]);
    var nr = m.makeMessageType("youtube.response.player.AdSlot.Render", [], {
      localName: "AdSlot_Render"
    });
    var $t = m.makeMessageType("youtube.response.setting.Setting", () => [{
      no: 6,
      name: "settingItems",
      kind: "message",
      T: Te,
      repeated: true
    }, {
      no: 7,
      name: "CollectionItems",
      kind: "message",
      T: Te,
      repeated: true
    }]);
    var Te = m.makeMessageType("youtube.response.setting.SettingItem", () => [{
      no: 88478200,
      name: "backgroundPlayBackSettingRenderer",
      kind: "message",
      T: rr
    }, {
      no: 66930374,
      name: "settingCategoryCollectionRenderer",
      kind: "message",
      T: sr
    }]);
    var rr = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [{
      no: 1,
      name: "name",
      kind: "message",
      T: U
    }, {
      no: 2,
      name: "backgroundPlayback",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "download",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "trackingParams",
      kind: "scalar",
      T: 12
    }, {
      no: 9,
      name: "downloadQualitySelection",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "smartDownload",
      kind: "scalar",
      T: 8
    }, {
      no: 14,
      name: "icon",
      kind: "message",
      T: Vt
    }]);
    var sr = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [{
      no: 2,
      name: "name",
      kind: "message",
      T: U
    }, {
      no: 3,
      name: "subSettings",
      kind: "message",
      T: qe,
      repeated: true
    }, {
      no: 4,
      name: "categoryId",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "icon",
      kind: "message",
      T: Vt
    }]);
    var Vt = m.makeMessageType("youtube.response.setting.Icon", () => [{
      no: 1,
      name: "iconType",
      kind: "scalar",
      T: 5
    }]);
    var qe = m.makeMessageType("youtube.response.setting.SubSetting", () => [{
      no: 61331416,
      name: "settingBooleanRenderer",
      kind: "message",
      T: or
    }]);
    var or = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [{
      no: 2,
      name: "title",
      kind: "message",
      T: U
    }, {
      no: 3,
      name: "description",
      kind: "message",
      T: U
    }, {
      no: 5,
      name: "enableServiceEndpoint",
      kind: "message",
      T: Dt
    }, {
      no: 6,
      name: "disableServiceEndpoint",
      kind: "message",
      T: Dt
    }, {
      no: 15,
      name: "itemId",
      kind: "scalar",
      T: 5
    }]);
    var Dt = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [{
      no: 81212182,
      name: "setClientSettingEndpoint",
      kind: "message",
      T: ir
    }]);
    var ir = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [{
      no: 1,
      name: "settingData",
      kind: "message",
      T: ar
    }]);
    var ar = m.makeMessageType("youtube.response.setting.SettingData", () => [{
      no: 1,
      name: "clientSettingEnum",
      kind: "message",
      T: cr
    }, {
      no: 3,
      name: "boolValue",
      kind: "scalar",
      T: 8
    }]);
    var cr = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [{
      no: 1,
      name: "item",
      kind: "scalar",
      T: 5
    }]);
    var Jt = m.makeMessageType("youtube.response.watch.Watch", () => [{
      no: 1,
      name: "contents",
      kind: "message",
      T: ur,
      repeated: true
    }]);
    var ur = m.makeMessageType("youtube.response.watch.Content", () => [{
      no: 2,
      name: "player",
      kind: "message",
      T: be
    }, {
      no: 3,
      name: "next",
      kind: "message",
      T: ke
    }]);
    var hi = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [{
      no: 1,
      name: "entityBatchUpdate",
      kind: "message",
      T: dr
    }]);
    var dr = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [{
      no: 1,
      name: "mutations",
      kind: "message",
      T: mr,
      repeated: true
    }]);
    var mr = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [{
      no: 1,
      name: "entityKey",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "payload",
      kind: "message",
      T: fr
    }]);
    var fr = m.makeMessageType("youtube.response.frameworkUpdate.Payload", []);
    var _t = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [{
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "targetNo",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "type",
      kind: "scalar",
      T: 5
    }]);
    var j = class {
      _times = new Map();
      name;
      isDebug;
      className;
      request;
      response;
      constructor(e, n, r) {
        this.name = e ?? "";
        this.isDebug = r?.debug ?? false;
        if (e) {
          this.debug(`${e} Start`);
        }
        this.className = n ?? "";
        this.init();
      }
      static getInstance(e, n) {
        let r = "Surge";
        if (typeof $loon !== "undefined") {
          r = "Loon";
        } else if (typeof $task !== "undefined") {
          r = "QuanX";
        }
        j.instances[r] ||= j.classNames[r](e, r, n);
        return j.instances[r];
      }
      createProxy(e) {
        return new Proxy(e, {
          get: this.getFn,
          set: this.setFn
        });
      }
      getFn(e, n, r) {
        return e[n];
      }
      setFn(e, n, r, s) {
        e[n] = r;
        return true;
      }
      getJSON(e, n = {}) {
        let r = this.getVal(e);
        if (r) {
          return JSON.parse(r);
        } else {
          return n;
        }
      }
      setJSON(e, n) {
        this.setVal(JSON.stringify(e), n);
      }
      msg(e = this.name, n = "", r = "", s) {}
      debug(e) {
        if (this.isDebug) {
          if (typeof e == "object") {
            e = JSON.stringify(e);
          }
          console.log(e);
        }
      }
      log(e) {
        if (typeof e == "object") {
          e = JSON.stringify(e);
        }
        console.log(e);
      }
      timeStart(e) {
        this._times.set(e, Date.now());
      }
      timeEnd(e) {
        if (this._times.has(e)) {
          let n = this._times.get(e) ?? 0;
          let r = Date.now() - n;
          this.debug(`${e}: ${r}ms`);
          this._times.delete(e);
        } else {
          this.debug(`Timer with label ${e} does not exist.`);
        }
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
      decodeParams(e) {
        return e;
      }
    };
    var D = j;
    Q(D, "instances", {});
    Q(D, "classNames", {
      QuanX: (e, n, r) => new we(e, n, r),
      Surge: (e, n, r) => new te(e, n, r),
      Loon: (e, n, r) => new Xe(e, n, r)
    });
    var xe = class extends D {
      getFn(e, n, r) {
        let s = xe.clientAdapter[n] || n;
        return super.getFn(e, s, r);
      }
      setFn(e, n, r, s) {
        let o = xe.clientAdapter[n] || n;
        return super.setFn(e, o, r, s);
      }
      init() {
        try {
          this.request = this.createProxy($request);
          this.response = this.createProxy($response);
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, n) {
        $persistentStore.write(e, n);
      }
      msg(e = this.name, n = "", r = "", s) {
        $notification.post(e, n, r, {
          url: s ?? ""
        });
      }
      async fetch(e) {
        return await new Promise((n, r) => {
          let {
            method: s,
            body: o,
            bodyBytes: i,
            ...a
          } = e;
          let c = i ?? o;
          let d = c instanceof Uint8Array;
          $httpClient[s.toLowerCase()]({
            ...a,
            body: c,
            "binary-mode": d
          }, (f, l, g) => {
            if (f) {
              r(f);
            }
            let p = d ? "bodyBytes" : "body";
            n({
              status: l.status || l.statusCode,
              headers: l.headers,
              [p]: g
            });
          });
        });
      }
      done(e) {
        let n = e.response ?? e;
        let r;
        let s;
        if (n.bodyBytes) {
          r = n.bodyBytes;
          delete n.bodyBytes;
          s = {
            ...e
          };
          if (s.response) {
            s.response.body = r;
          } else {
            s.body = r;
          }
        } else {
          s = e;
        }
        $done(s);
      }
      decodeParams(e) {
        if (typeof $argument == "string" && !$argument.includes("{{{")) {
          Object.assign(e, JSON.parse($argument));
        }
        return e;
      }
    };
    var te = xe;
    Q(te, "clientAdapter", {
      bodyBytes: "body"
    });
    var L = class extends D {
      static transferBodyBytes(e, n) {
        if (e instanceof ArrayBuffer) {
          if (n === "Uint8Array") {
            return new Uint8Array(e);
          } else {
            return e;
          }
        } else if (e instanceof Uint8Array && n === "ArrayBuffer") {
          return e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
        } else {
          return e;
        }
      }
      init() {
        try {
          this.request = this.createProxy($request);
          this.response = this.createProxy($response);
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getFn(e, n, r) {
        let s = L.clientAdapter[n] || n;
        let o = super.getFn(e, s, r);
        if (n === "bodyBytes") {
          o = L.transferBodyBytes(o, "Uint8Array");
        }
        return o;
      }
      setFn(e, n, r, s) {
        let o = L.clientAdapter[n] || n;
        let i = r;
        if (n === "bodyBytes") {
          i = L.transferBodyBytes(i, "Uint8Array");
        }
        return super.setFn(e, o, i, s);
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, "");
      }
      setVal(e, n) {
        $prefs.setValueForKey(e, n);
      }
      msg(e = this.name, n = "", r = "", s) {
        $notify(e, n, r, {
          "open-url": s ?? ""
        });
      }
      async fetch(e) {
        return await new Promise(n => {
          let r = {
            url: "",
            method: "GET"
          };
          for (let [s, o] of Object.entries(e)) {
            if (s === "id") {
              r.sessionIndex = o;
            } else if (s === "bodyBytes") {
              r.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer");
            } else {
              r[s] = o;
            }
          }
          if (e.bodyBytes) {
            delete r.body;
          }
          $task.fetch(r).then(s => {
            let o = {
              status: 200,
              headers: {}
            };
            for (let [i, a] of Object.entries(s)) {
              if (i === "sessionIndex") {
                o.id = a;
              } else if (i === "bodyBytes") {
                o.bodyBytes = L.transferBodyBytes(a, "Uint8Array");
              } else if (i === "statusCode") {
                o.status = a;
              } else {
                o[i] = a;
              }
            }
            n(o);
          });
        });
      }
      done(e) {
        let n = e.response ?? e;
        let r = {};
        for (let [s, o] of Object.entries(n)) {
          if (s === "status") {
            r.status = `HTTP/1.1 ${o}`;
          } else if (s === "bodyBytes") {
            r.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer");
          } else {
            r[s] = o;
          }
        }
        $done(r);
      }
    };
    var we = L;
    Q(we, "clientAdapter", {
      id: "sessionIndex",
      status: "statusCode"
    });
    var Xe = class extends te {
      decodeParams(e) {
        if (typeof $argument !== "undefined") {
          for (let n of Object.keys(e)) {
            let r = $argument?.[n];
            if (r !== undefined) {
              e[n] = r;
            }
          }
        }
        return e;
      }
    };
    var y = D.getInstance("YouTube");
    var $ = class {
      name;
      needProcess;
      needSave;
      message;
      version = "1.0";
      whiteNo = [];
      blackNo = [];
      whiteEml = [];
      blackEml = ["inline_injection_entrypoint_layout.eml"];
      msgType;
      argument;
      decoder = new TextDecoder("utf-8", {
        fatal: false,
        ignoreBOM: true
      });
      constructor(e, n) {
        this.name = n;
        this.msgType = e;
        this.argument = this.decodeArgument();
        y.isDebug = Boolean(this.argument.debug);
        y.debug(this.name);
        let r = y.getJSON("YouTubeAdvertiseInfo");
        y.debug(`currentVersion:  ${this.version}`);
        y.debug(`storedVersion:  ${r.version}`);
        if (r?.version === this.version) {
          Object.assign(this, r);
        }
      }
      decodeArgument() {
        let e = {
          lyricLang: "vi",
          captionLang: "vi",
          blockUpload: true,
          blockImmersive: true,
          debug: false
        };
        return y.decodeParams(e);
      }
      fromBinary(e) {
        if (e instanceof Uint8Array) {
          this.message = this.msgType.fromBinary(e);
          y.debug(`raw: ${Math.floor(e.length / 1024)} kb`);
          return this;
        } else {
          y.log("YouTube can not get binaryBody");
          y.exit();
          return this;
        }
      }
      async modify() {
        let e = this.pure();
        if (e instanceof Promise) {
          return await e;
        } else {
          return e;
        }
      }
      toBinary() {
        return this.message.toBinary();
      }
      listUnknownFields(e) {
        if (e instanceof E) {
          return e.getType().runtime.bin.listUnknownFields(e);
        } else {
          return [];
        }
      }
      save() {
        if (this.needSave) {
          y.debug("Update Config");
          let e = {
            version: this.version,
            whiteNo: this.whiteNo,
            blackNo: this.blackNo,
            whiteEml: this.whiteEml,
            blackEml: this.blackEml
          };
          y.debug(e);
          y.setJSON(e, "YouTubeAdvertiseInfo");
        }
      }
      done() {
        this.save();
        if (this.needProcess) {
          y.timeStart("toBinary");
          let e = this.toBinary();
          y.timeEnd("toBinary");
          y.debug(`modify: ${Math.floor(e.length / 1024)} kb`);
          y.done({
            bodyBytes: e
          });
        }
        y.debug("use $done({})");
        y.exit();
      }
      iterate(e = {}, n, r) {
        let s = typeof e == "object" ? [e] : [];
        while (s.length) {
          let o = s.pop();
          let i = Object.keys(o);
          for (let a of i) {
            if (a === n) {
              r(o, s);
            } else if (typeof o[a] == "object") {
              s.push(o[a]);
            }
          }
        }
      }
      isAdvertise(e) {
        let n = this.listUnknownFields(e)[0];
        if (n) {
          return this.handleFieldNo(n);
        } else {
          return this.handleFieldEml(e);
        }
      }
      handleFieldNo(e) {
        let n = e.no;
        if (this.whiteNo.includes(n)) {
          return false;
        }
        if (this.blackNo.includes(n)) {
          return true;
        }
        let r = this.checkBufferIsAd(e);
        if (r) {
          this.blackNo.push(n);
        } else {
          this.whiteNo.push(n);
        }
        this.needSave = true;
        return r;
      }
      handleFieldEml(e) {
        let n = false;
        let r = "";
        this.iterate(e, "renderInfo", (s, o) => {
          r = s.renderInfo.layoutRender.eml.split("|")[0];
          if (this.whiteEml.includes(r)) {
            n = false;
          } else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) {
            n = true;
          } else {
            let i = s?.videoInfo?.videoContext?.videoContent;
            if (i) {
              n = this.checkUnknownFiled(i);
              if (n) {
                this.blackEml.push(r);
              } else {
                this.whiteEml.push(r);
              }
              this.needSave = true;
            }
          }
          o.length = 0;
        });
        return n;
      }
      checkBufferIsAd(e) {
        if (!e || e.data.length < 1000) {
          return false;
        } else {
          return this.decoder.decode(e.data).includes("pagead");
        }
      }
      checkUnknownFiled(e) {
        if (e) {
          return this.listUnknownFields(e)?.some(r => this.checkBufferIsAd(r)) ?? false;
        } else {
          return false;
        }
      }
      isShorts(e) {
        let n = false;
        this.iterate(e, "eml", (r, s) => {
          n = /shorts(?!_pivot_item)/.test(r.eml);
          s.length = 0;
        });
        return n;
      }
    };
    function lr(t) {
      let r = ".";
      let s = "+-a^+6";
      let o = "+-3^+b+-f";
      let i;
      let a;
      let c;
      i = [];
      a = 0;
      c = 0;
      for (; c < t.length; c++) {
        let d = t.charCodeAt(c);
        if (d < 128) {
          i[a++] = d;
        } else {
          if (d < 2048) {
            i[a++] = d >> 6 | 192;
          } else {
            if ((d & 64512) == 55296 && c + 1 < t.length && (t.charCodeAt(c + 1) & 64512) == 56320) {
              d = 65536 + ((d & 1023) << 10) + (t.charCodeAt(++c) & 1023);
              i[a++] = d >> 18 | 240;
              i[a++] = d >> 12 & 63 | 128;
            } else {
              i[a++] = d >> 12 | 224;
            }
            i[a++] = d >> 6 & 63 | 128;
          }
          i[a++] = d & 63 | 128;
        }
      }
      t = 406644;
      a = 0;
      for (; a < i.length; a++) {
        t += i[a];
        t = Gt(t, s);
      }
      t = Gt(t, o);
      t ^= 3293161072;
      if (t < 0) {
        t = (t & 2147483647) + 2147483648;
      }
      t %= 1000000;
      return t.toString() + r + (t ^ 406644);
    }
    function Gt(t, e) {
      let n = "a";
      let r = "+";
      let s;
      for (let o = 0; o < e.length - 2; o += 3) {
        s = e.charAt(o + 2);
        s = s >= n ? s.charCodeAt(0) - 87 : Number(s);
        s = e.charAt(o + 1) == r ? t >>> s : t << s;
        t = e.charAt(o) == r ? t + s & -1 : t ^ s;
      }
      return t;
    }
    function Yt(t, e) {
      return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=vi&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${lr(t)}&q=${encodeURIComponent(t)}`;
    }
    var K = class extends $ {
      constructor(e = Mt, n = "Browse") {
        super(e, n);
      }
      async pure() {
        this.iterate(this.message, "sectionListSupportedRenderers", e => {
          for (let n = e.sectionListSupportedRenderers.length - 1; n >= 0; n--) {
            this.removeCommonAD(e, n);
            this.removeShorts(e, n);
          }
        });
        await this.translate();
        return this;
      }
      removeCommonAD(e, n) {
        let s = e.sectionListSupportedRenderers[n]?.itemSectionRenderer?.richItemContent;
        for (let o = s?.length - 1; o >= 0; o--) {
          if (this.isAdvertise(s[o])) {
            s.splice(o, 1);
            this.needProcess = true;
          }
        }
      }
      removeShorts(e, n) {
        let r = e.sectionListSupportedRenderers[n]?.shelfRenderer;
        if (this.isShorts(r)) {
          e.sectionListSupportedRenderers.splice(n, 1);
          this.needProcess = true;
        }
      }
      getBrowseId() {
        let e = "";
        this.iterate(this.message?.responseContext, "key", (n, r) => {
          if (n.key === "browse_id") {
            e = n.value;
            r.length = 0;
          }
        });
        return e;
      }
      async translate() {
        let e = this.argument.lyricLang?.trim();
        if (this.name !== "Browse" || !this.getBrowseId().startsWith("MPLYt") || e === "off") {
          return;
        }
        let n = "";
        let r;
        let s = false;
        this.iterate(this.message, "timedLyricsContent", (c, d) => {
          r = c.timedLyricsContent;
          n = c.timedLyricsContent.runs.map(f => f.text).join(`
  `);
          s = true;
          d.length = 0;
        });
        if (!s) {
          this.iterate(this.message, "description", (c, d) => {
            r = c.description.runs[0];
            n = c.description.runs[0].text;
            d.length = 0;
            s = true;
          });
        }
        if (!s) {
          return;
        }
        let o = e.split("-")[0];
        let i = Yt(n, e);
        let a = await y.fetch({
          method: "GET",
          url: i
        });
        if (a.status === 200 && a.body) {
          let c = JSON.parse(a.body);
          let d = " & Translated by Google";
          let f = c[2].includes(o);
          if (r.text) {
            r.text = c[0].map(l => f ? l[0] : l[1] + l[0] || "").join(`\r
  `);
            this.iterate(this.message, "footer", (l, g) => {
              l.footer.runs[0].text += d;
              g.length = 0;
            });
          } else if (r.runs.length <= c[0].length) {
            r.runs.forEach((l, g) => {
              l.text = f ? c[0][g][0] : `${l.text}
  ${c[0][g][0]}`;
            });
            r.footerLabel += d;
          }
          this.needProcess = true;
        }
      }
      removeFrameworkUpdateAd() {
        let e = this.message?.frameworkUpdateTransport?.entityBatchUpdate?.mutations;
        if (e) {
          for (let n = e.length - 1; n >= 0; n--) {
            let r = e[n];
            let s = _t.fromBinary(W.dec(decodeURIComponent(r.entityKey)));
            let o = this.blackEml.includes(s.name);
            if (!o && this.checkUnknownFiled(r?.payload)) {
              o = true;
              this.blackEml.push(s.name);
              this.needSave = true;
            }
            if (o) {
              e.splice(n, 1);
              this.needProcess = true;
            }
          }
        }
      }
    };
    var ne = class extends K {
      constructor(e = ke, n = "Next") {
        super(e, n);
      }
    };
    var re = class extends $ {
      constructor(e = be, n = "Player") {
        super(e, n);
      }
      pure() {
        if (this.message.adPlacements?.length) {
          this.message.adPlacements.length = 0;
        }
        if (this.message.adSlots?.length) {
          this.message.adSlots.length = 0;
        }
        delete this.message?.playbackTracking?.pageadViewthroughconversion;
        this.addPlayAbility();
        this.addTranslateCaption();
        this.needProcess = true;
        return this;
      }
      addPlayAbility() {
        let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        if (typeof e == "object") {
          e.active = true;
        }
        if (typeof this.message.playabilityStatus == "object") {
          this.message.playabilityStatus.backgroundPlayer = new _e({
            backgroundPlayerRender: {
              active: true
            }
          });
        }
      }
      addTranslateCaption() {
        let e = this.argument.captionLang;
        if (e !== "off") {
          this.iterate(this.message, "captionTracks", (n, r) => {
            let s = n.captionTracks;
            let o = n.audioTracks;
            if (Array.isArray(s)) {
              let a = {
                [e]: 2,
                en: 1
              };
              let c = -1;
              let d = 0;
              for (let f = 0; f < s.length; f++) {
                let l = s[f];
                let g = a[l.languageCode];
                if (g && g > c) {
                  c = g;
                  d = f;
                }
                l.isTranslatable = true;
              }
              if (c !== 2) {
                let f = new Ge({
                  baseUrl: `${s[d].baseUrl}&tlang=${e}`,
                  name: {
                    runs: [{
                      text: `@DoHungx (${e})`
                    }]
                  },
                  vssId: `.${e}`,
                  languageCode: e
                });
                s.push(f);
              }
              if (Array.isArray(o)) {
                let f = c === 2 ? d : s.length - 1;
                for (let l of o) {
                  if (!l.captionTrackIndices?.includes(f)) {
                    l.captionTrackIndices.push(f);
                  }
                  l.defaultCaptionTrackIndex = f;
                  l.captionsInitialState = 3;
                }
              }
            }
            let i = {
              de: "Deutsch",
              ru: "Русский",
              fr: "Français",
              fil: "Filipino",
              ko: "한국어",
              ja: "日本語",
              en: "English",
              vi: "Tiếng Việt",
              "zh-Hant": "中文（繁體）",
              "zh-Hans": "中文（简体）",
              und: "@VirgilClyne"
            };
            n.translationLanguages = Object.entries(i).map(([a, c]) => new Ye({
              languageCode: a,
              languageName: {
                runs: [{
                  text: c
                }]
              }
            }));
            r.length = 0;
          });
        }
      }
    };
    var Ie = class extends K {
      constructor(e = Ct, n = "Search") {
        super(e, n);
      }
    };
    var Ne = class extends $ {
      constructor(e = At, n = "Shorts") {
        super(e, n);
      }
      pure() {
        let e = this.message.entries?.length;
        if (e) {
          for (let n = e - 1; n >= 0; n--) {
            if (!this.message.entries[n].command?.reelWatchEndpoint?.overlay) {
              this.message.entries.splice(n, 1);
              this.needProcess = true;
            }
          }
        }
        return this;
      }
    };
    var Se = class extends $ {
      constructor(e = Lt, n = "Guide") {
        super(e, n);
      }
      pure() {
        let e = ["SPunlimited"];
        if (this.argument.blockUpload) {
          e.push("FEuploads");
        }
        if (this.argument.blockImmersive) {
          e.push("FEmusic_immersive");
        }
        this.iterate(this.message, "rendererItems", n => {
          for (let r = n.rendererItems.length - 1; r >= 0; r--) {
            let s = n.rendererItems[r]?.iconRender?.browseId || n.rendererItems[r]?.labelRender?.browseId;
            if (e.includes(s)) {
              n.rendererItems.splice(r, 1);
              this.needProcess = true;
            }
          }
        });
        return this;
      }
    };
    var Ee = class extends $ {
      constructor(e = $t, n = "Setting") {
        super(e, n);
      }
      pure() {
        this.iterate(this.message.settingItems, "categoryId", n => {
          if (n.categoryId === 10135) {
            let r = new qe({
              settingBooleanRenderer: {
                itemId: 0,
                enableServiceEndpoint: {
                  setClientSettingEndpoint: {
                    settingData: {
                      clientSettingEnum: {
                        item: 151
                      },
                      boolValue: true
                    }
                  }
                },
                disableServiceEndpoint: {
                  setClientSettingEndpoint: {
                    settingData: {
                      clientSettingEnum: {
                        item: 151
                      },
                      boolValue: false
                    }
                  }
                }
              }
            });
            n.subSettings.push(r);
          }
        });
        let e = new Te({
          backgroundPlayBackSettingRenderer: {
            backgroundPlayback: true,
            download: true,
            downloadQualitySelection: true,
            smartDownload: true,
            icon: {
              iconType: 1093
            }
          }
        });
        this.message.settingItems.push(e);
        this.needProcess = true;
        return this;
      }
    };
    var Fe = class extends $ {
      player;
      next;
      constructor(e = Jt, n = "Watch") {
        super(e, n);
        this.player = new re();
        this.next = new ne();
      }
      async pure() {
        for (let e of this.message.contents) {
          if (e.player) {
            this.player.message = e.player;
            await this.player.pure();
          }
          if (e.next) {
            this.next.message = e.next;
            await this.next.pure();
          }
          this.needProcess = true;
        }
        return this;
      }
    };
    var pr = new Map([["browse", K], ["next", ne], ["player", re], ["search", Ie], ["reel_watch_sequence", Ne], ["guide", Se], ["get_setting", Ee], ["get_watch", Fe]]);
    function We(t) {
      for (let [e, n] of pr.entries()) {
        if (t.includes(e)) {
          return new n();
        }
      }
      return null;
    }
    async function gr() {
      let t = We(y.request.url);
      if (t) {
        let e = y.response.bodyBytes;
        y.timeStart("fromBinary");
        t.fromBinary(e);
        y.timeEnd("fromBinary");
        y.timeStart("modify");
        await t.modify();
        y.timeEnd("modify");
        t.done();
      } else {
        y.msg("YouTube Enhance", "脚本需要更新", "外部资源 -> 全部更新");
        y.exit();
      }
    }
    gr().catch(t => {
      y.log(t.toString());
    }).finally(() => {
      y.exit();
    });
  })();
  arrow;