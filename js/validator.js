/*!
 * Copyright (c) 2016 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.validator = t() }(this, function() { "use strict";

  function e(e) { if (!("string" == typeof e || e instanceof String)) throw new TypeError("This library (validator.js) validates strings only") }

  function t(t) { return e(t), t = Date.parse(t), isNaN(t) ? null : new Date(t) }

  function r(t) { return e(t), parseFloat(t) }

  function o(e) { return "object" === (void 0 === e ? "undefined" : _(e)) && null !== e ? e = "function" == typeof e.toString ? e.toString() : "[object Object]" : (null === e || void 0 === e || isNaN(e) && !e.length) && (e = ""), String(e) }

  function i() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments[1]; for (var r in t) void 0 === e[r] && (e[r] = t[r]); return e }

  function n(t, r) { e(t); var o = void 0,
      i = void 0; "object" === (void 0 === r ? "undefined" : _(r)) ? (o = r.min || 0, i = r.max) : (o = arguments[1], i = arguments[2]); var n = encodeURI(t).split(/%..|./).length - 1; return n >= o && (void 0 === i || n <= i) }

  function a(t, r) { e(t), (r = i(r, v)).allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1)); var o = t.split("."); if (r.require_tld) { var n = o.pop(); if (!o.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n)) return !1; if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(n)) return !1 } for (var a, l = 0; l < o.length; l++) { if (a = o[l], r.allow_underscores && (a = a.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(a)) return !1; if (/[\uff01-\uff5e]/.test(a)) return !1; if ("-" === a[0] || "-" === a[a.length - 1]) return !1 } return !0 }

  function l(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; if (e(t), !(r = String(r))) return l(t, 4) || l(t, 6); if ("4" === r) { if (!E.test(t)) return !1; return t.split(".").sort(function(e, t) { return e - t })[3] <= 255 } if ("6" === r) { var o = t.split(":"),
        i = !1,
        n = l(o[o.length - 1], 4),
        a = n ? 7 : 8; if (o.length > a) return !1; if ("::" === t) return !0; "::" === t.substr(0, 2) ? (o.shift(), o.shift(), i = !0) : "::" === t.substr(t.length - 2) && (o.pop(), o.pop(), i = !0); for (var s = 0; s < o.length; ++s)
        if ("" === o[s] && s > 0 && s < o.length - 1) { if (i) return !1;
          i = !0 } else if (n && s === o.length - 1);
      else if (!y.test(o[s])) return !1; return i ? o.length >= 1 : o.length === a } return !1 }

  function s(e) { return "[object RegExp]" === Object.prototype.toString.call(e) }

  function u(e, t) { for (var r = 0; r < t.length; r++) { var o = t[r]; if (e === o || s(o) && o.test(e)) return !0 } return !1 }

  function d(t, r) { e(t); var o = (r = r || {}).hasOwnProperty("allow_leading_zeroes") && !r.allow_leading_zeroes ? K : H,
      i = !r.hasOwnProperty("min") || t >= r.min,
      n = !r.hasOwnProperty("max") || t <= r.max,
      a = !r.hasOwnProperty("lt") || t < r.lt,
      l = !r.hasOwnProperty("gt") || t > r.gt; return o.test(t) && i && n && a && l }

  function c(t) { return e(t), Q.test(t) }

  function f(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; if (e(t), !(r = String(r))) return f(t, 10) || f(t, 13); var o = t.replace(/[\s-]+/g, ""),
      i = 0,
      n = void 0; if ("10" === r) { if (!ae.test(o)) return !1; for (n = 0; n < 9; n++) i += (n + 1) * o.charAt(n); if ("X" === o.charAt(9) ? i += 100 : i += 10 * o.charAt(9), i % 11 == 0) return !!o } else if ("13" === r) { if (!le.test(o)) return !1; for (n = 0; n < 12; n++) i += se[n % 2] * o.charAt(n); if (o.charAt(12) - (10 - i % 10) % 10 == 0) return !!o } return !1 }

  function p(t, r) { e(t); var o = r ? new RegExp("^[" + r + "]+", "g") : /^\s+/g; return t.replace(o, "") }

  function g(t, r) { e(t); for (var o = r ? new RegExp("[" + r + "]") : /\s/, i = t.length - 1; i >= 0 && o.test(t[i]);) i--; return i < t.length ? t.substr(0, i + 1) : t }

  function h(t, r) { return e(t), t.replace(new RegExp("[" + r + "]+", "g"), "") } for (var m, _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, v = { require_tld: !0, allow_underscores: !1, allow_trailing_dot: !1 }, $ = { allow_display_name: !1, require_display_name: !1, allow_utf8_local_part: !0, require_tld: !0 }, F = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i, A = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, x = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, S = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, w = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, E = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/, y = /^[0-9A-F]{1,4}$/i, b = { protocols: ["http", "https", "ftp"], require_tld: !0, require_protocol: !1, require_host: !0, require_valid_protocol: !0, allow_underscores: !1, allow_trailing_dot: !1, allow_protocol_relative_urls: !1 }, Z = /^\[([^\]]+)\](?::([0-9]+))?$/, R = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/, C = { "en-US": /^[A-Z]+$/i, "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i, "da-DK": /^[A-ZÆØÅ]+$/i, "de-DE": /^[A-ZÄÖÜß]+$/i, "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i, "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i, "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i, "nb-NO": /^[A-ZÆØÅ]+$/i, "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i, "nn-NO": /^[A-ZÆØÅ]+$/i, "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i, "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i, "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i, "ru-RU": /^[А-ЯЁ]+$/i, "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i, "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i, "sv-SE": /^[A-ZÅÄÖ]+$/i, "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i, "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i, ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/ }, D = { "en-US": /^[0-9A-Z]+$/i, "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i, "da-DK": /^[0-9A-ZÆØÅ]+$/i, "de-DE": /^[0-9A-ZÄÖÜß]+$/i, "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i, "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i, "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i, "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i, "nb-NO": /^[0-9A-ZÆØÅ]+$/i, "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i, "nn-NO": /^[0-9A-ZÆØÅ]+$/i, "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i, "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i, "ru-RU": /^[0-9А-ЯЁ]+$/i, "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i, "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i, "sv-SE": /^[0-9A-ZÅÄÖ]+$/i, "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i, "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i, ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/ }, I = { "en-US": ".", ar: "٫" }, O = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"], N = 0; N < O.length; N++) C[m = "en-" + O[N]] = C["en-US"], D[m] = D["en-US"], I[m] = I["en-US"]; for (var k, T = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"], P = 0; P < T.length; P++) C[k = "ar-" + T[P]] = C.ar, D[k] = D.ar, I[k] = I.ar; for (var B = [], U = ["cs-CZ", "da-DK", "de-DE", "es-ES", "fr-FR", "it-IT", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-Pl", "pt-PT", "ru-RU", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA"], L = 0; L < B.length; L++) I[B[L]] = I["en-US"]; for (var M = 0; M < U.length; M++) I[U[M]] = ",";
  C["pt-BR"] = C["pt-PT"], D["pt-BR"] = D["pt-PT"], I["pt-BR"] = I["pt-PT"]; var G = /^[-+]?[0-9]+$/,
    K = /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
    H = /^[-+]?[0-9]+$/,
    z = /^[\x00-\x7F]+$/,
    j = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
    q = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
    W = /[^\x00-\x7F]/,
    J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
    V = { force_decimal: !1, decimal_digits: "1,", locale: "en-US" },
    Y = ["", "-", "+"],
    Q = /^[0-9A-F]+$/i,
    X = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    ee = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/,
    te = /^[a-f0-9]{32}$/,
    re = { md5: 32, md4: 32, sha1: 40, sha256: 64, sha384: 96, sha512: 128, ripemd128: 32, ripemd160: 40, tiger128: 32, tiger160: 40, tiger192: 48, crc32: 8, crc32b: 8 },
    oe = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i },
    ie = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/,
    ne = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/,
    ae = /^(?:[0-9]{9}X|[0-9]{10})$/,
    le = /^(?:[0-9]{13})$/,
    se = [1, 3],
    ue = "^\\d{4}-?\\d{3}[\\dX]$",
    de = { "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/, "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/, "ar-EG": /^((\+?20)|0)?1[012]\d{8}$/, "ar-JO": /^(\+?962|0)?7[789]\d{7}$/, "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/, "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/, "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/, "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/, "de-DE": /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/, "el-GR": /^(\+?30)?(69\d{8})$/, "en-AU": /^(\+?61|0)4\d{8}$/, "en-GB": /^(\+?44|0)7\d{9}$/, "en-HK": /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/, "en-IN": /^(\+?91|0)?[789]\d{9}$/, "en-KE": /^(\+?254|0)?[7]\d{8}$/, "en-NG": /^(\+?234|0)?[789]\d{9}$/, "en-NZ": /^(\+?64|0)2\d{7,9}$/, "en-PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/, "en-RW": /^(\+?250|0)?[7]\d{8}$/, "en-SG": /^(\+65)?[89]\d{7}$/, "en-TZ": /^(\+?255|0)?[67]\d{8}$/, "en-UG": /^(\+?256|0)?[7]\d{8}$/, "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, "en-ZA": /^(\+?27|0)\d{9}$/, "en-ZM": /^(\+?26)?09[567]\d{7}$/, "es-ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/, "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/, "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/, "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/, "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/, "fr-FR": /^(\+?33|0)[67]\d{8}$/, "he-IL": /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/, "hu-HU": /^(\+?36)(20|30|70)\d{7}$/, "id-ID": /^(\+?62|0[1-9])[\s|\d]+$/, "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/, "ja-JP": /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/, "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/, "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/, "lt-LT": /^(\+370|8)\d{8}$/, "ms-MY": /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/, "nb-NO": /^(\+?47)?[49]\d{7}$/, "nl-BE": /^(\+?32|0)4?\d{8}$/, "nn-NO": /^(\+?47)?[49]\d{7}$/, "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/, "pt-BR": /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/, "pt-PT": /^(\+?351)?9[1236]\d{7}$/, "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/, "ru-RU": /^(\+?7|8)?9\d{9}$/, "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/, "sr-RS": /^(\+3816|06)[- \d]{5,9}$/, "tr-TR": /^(\+?90|0)?5\d{9}$/, "uk-UA": /^(\+?38|8)?0\d{9}$/, "vi-VN": /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/, "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/, "zh-TW": /^(\+?886\-?|0)?9\d{8}$/ };
  de["en-CA"] = de["en-US"], de["fr-BE"] = de["nl-BE"], de["zh-HK"] = de["en-HK"]; var ce = { symbol: "$", require_symbol: !1, allow_space_after_symbol: !1, symbol_after_digits: !1, allow_negatives: !0, parens_for_negatives: !1, negative_sign_before_digits: !1, negative_sign_after_digits: !1, allow_negative_sign_placeholder: !1, thousands_separator: ",", decimal_separator: ".", allow_decimal: !0, require_decimal: !1, digits_after_decimal: [2], allow_space_after_digits: !1 },
    fe = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
    pe = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"],
    ge = /[^A-Z0-9+\/=]/i,
    he = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i,
    me = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
    _e = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
    ve = /^\d{4}$/,
    $e = /^\d{5}$/,
    Fe = /^\d{6}$/,
    Ae = { AT: ve, AU: ve, BE: ve, CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, CH: ve, CZ: /^\d{3}\s?\d{2}$/, DE: $e, DK: ve, DZ: $e, ES: $e, FI: $e, FR: /^\d{2}\s?\d{3}$/, GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i, GR: /^\d{3}\s?\d{2}$/, IL: $e, IN: Fe, IS: /^\d{3}$/, IT: $e, JP: /^\d{3}\-\d{4}$/, KE: $e, LI: /^(948[5-9]|949[0-7])$/, MX: $e, NL: /^\d{4}\s?[a-z]{2}$/i, NO: ve, PL: /^\d{2}\-\d{3}$/, PT: /^\d{4}\-\d{3}?$/, RO: Fe, RU: Fe, SA: $e, SE: /^\d{3}\s?\d{2}$/, TW: /^\d{3}(\d{2})?$/, US: /^\d{5}(-\d{4})?$/, ZA: ve, ZM: $e },
    xe = { all_lowercase: !0, gmail_lowercase: !0, gmail_remove_dots: !0, gmail_remove_subaddress: !0, gmail_convert_googlemaildotcom: !0, outlookdotcom_lowercase: !0, outlookdotcom_remove_subaddress: !0, yahoo_lowercase: !0, yahoo_remove_subaddress: !0, icloud_lowercase: !0, icloud_remove_subaddress: !0 },
    Se = ["icloud.com", "me.com"],
    we = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"],
    Ee = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"]; return { version: "9.1.2", toDate: t, toFloat: r, toInt: function(t, r) { return e(t), parseInt(t, r || 10) }, toBoolean: function(t, r) { return e(t), r ? "1" === t || "true" === t : "0" !== t && "false" !== t && "" !== t }, equals: function(t, r) { return e(t), t === r }, contains: function(t, r) { return e(t), t.indexOf(o(r)) >= 0 }, matches: function(t, r, o) { return e(t), "[object RegExp]" !== Object.prototype.toString.call(r) && (r = new RegExp(r, o)), r.test(t) }, isEmail: function(t, r) { if (e(t), (r = i(r, $)).require_display_name || r.allow_display_name) { var o = t.match(F); if (o) t = o[1];
        else if (r.require_display_name) return !1 } var l = t.split("@"),
        s = l.pop(),
        u = l.join("@"),
        d = s.toLowerCase(); if ("gmail.com" !== d && "googlemail.com" !== d || (u = u.replace(/\./g, "").toLowerCase()), !n(u, { max: 64 }) || !n(s, { max: 254 })) return !1; if (!a(s, { require_tld: r.require_tld })) return !1; if ('"' === u[0]) return u = u.slice(1, u.length - 1), r.allow_utf8_local_part ? w.test(u) : x.test(u); for (var c = r.allow_utf8_local_part ? S : A, f = u.split("."), p = 0; p < f.length; p++)
        if (!c.test(f[p])) return !1; return !0 }, isURL: function(t, r) { if (e(t), !t || t.length >= 2083 || /[\s<>]/.test(t)) return !1; if (0 === t.indexOf("mailto:")) return !1;
      r = i(r, b); var o = void 0,
        n = void 0,
        s = void 0,
        d = void 0,
        c = void 0,
        f = void 0,
        p = void 0,
        g = void 0; if (p = t.split("#"), t = p.shift(), p = t.split("?"), t = p.shift(), (p = t.split("://")).length > 1) { if (o = p.shift(), r.require_valid_protocol && -1 === r.protocols.indexOf(o)) return !1 } else { if (r.require_protocol) return !1;
        r.allow_protocol_relative_urls && "//" === t.substr(0, 2) && (p[0] = t.substr(2)) } if ("" === (t = p.join("://"))) return !1; if (p = t.split("/"), "" === (t = p.shift()) && !r.require_host) return !0; if ((p = t.split("@")).length > 1 && (n = p.shift()).indexOf(":") >= 0 && n.split(":").length > 2) return !1;
      f = null, g = null; var h = (d = p.join("@")).match(Z); return h ? (s = "", g = h[1], f = h[2] || null) : (s = (p = d.split(":")).shift(), p.length && (f = p.join(":"))), !(null !== f && (c = parseInt(f, 10), !/^[0-9]+$/.test(f) || c <= 0 || c > 65535) || !(l(s) || a(s, r) || g && l(g, 6)) || (s = s || g, r.host_whitelist && !u(s, r.host_whitelist) || r.host_blacklist && u(s, r.host_blacklist))) }, isMACAddress: function(t) { return e(t), R.test(t) }, isIP: l, isFQDN: a, isBoolean: function(t) { return e(t), ["true", "false", "1", "0"].indexOf(t) >= 0 }, isAlpha: function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US"; if (e(t), r in C) return C[r].test(t); throw new Error("Invalid locale '" + r + "'") }, isAlphanumeric: function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US"; if (e(t), r in D) return D[r].test(t); throw new Error("Invalid locale '" + r + "'") }, isNumeric: function(t) { return e(t), G.test(t) }, isPort: function(e) { return d(e, { min: 0, max: 65535 }) }, isLowercase: function(t) { return e(t), t === t.toLowerCase() }, isUppercase: function(t) { return e(t), t === t.toUpperCase() }, isAscii: function(t) { return e(t), z.test(t) }, isFullWidth: function(t) { return e(t), j.test(t) }, isHalfWidth: function(t) { return e(t), q.test(t) }, isVariableWidth: function(t) { return e(t), j.test(t) && q.test(t) }, isMultibyte: function(t) { return e(t), W.test(t) }, isSurrogatePair: function(t) { return e(t), J.test(t) }, isInt: d, isFloat: function(t, r) { e(t), r = r || {}; var o = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\" + (r.locale ? I[r.locale] : ".") + "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"); return "" !== t && "." !== t && "-" !== t && "+" !== t && o.test(t) && (!r.hasOwnProperty("min") || t >= r.min) && (!r.hasOwnProperty("max") || t <= r.max) && (!r.hasOwnProperty("lt") || t < r.lt) && (!r.hasOwnProperty("gt") || t > r.gt) }, isDecimal: function(t, r) { if (e(t), (r = i(r, V)).locale in I) return !Y.includes(t.replace(/ /g, "")) && function(e) { return new RegExp("^[-+]?([0-9]+)?(\\" + I[e.locale] + "[0-9]{" + e.decimal_digits + "})" + (e.force_decimal ? "" : "?") + "$") }(r).test(t); throw new Error("Invalid locale '" + r.locale + "'") }, isHexadecimal: c, isDivisibleBy: function(t, o) { return e(t), r(t) % parseInt(o, 10) == 0 }, isHexColor: function(t) { return e(t), X.test(t) }, isISRC: function(t) { return e(t), ee.test(t) }, isMD5: function(t) { return e(t), te.test(t) }, isHash: function(t, r) { return e(t), new RegExp("^[a-f0-9]{" + re[r] + "}$").test(t) }, isJSON: function(t) { e(t); try { var r = JSON.parse(t); return !!r && "object" === (void 0 === r ? "undefined" : _(r)) } catch (e) {} return !1 }, isEmpty: function(t) { return e(t), 0 === t.length }, isLength: function(t, r) { e(t); var o = void 0,
        i = void 0; "object" === (void 0 === r ? "undefined" : _(r)) ? (o = r.min || 0, i = r.max) : (o = arguments[1], i = arguments[2]); var n = t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
        a = t.length - n.length; return a >= o && (void 0 === i || a <= i) }, isByteLength: n, isUUID: function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
      e(t); var o = oe[r]; return o && o.test(t) }, isMongoId: function(t) { return e(t), c(t) && 24 === t.length }, isAfter: function(r) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : String(new Date);
      e(r); var i = t(o),
        n = t(r); return !!(n && i && n > i) }, isBefore: function(r) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : String(new Date);
      e(r); var i = t(o),
        n = t(r); return !!(n && i && n < i) }, isIn: function(t, r) { e(t); var i = void 0; if ("[object Array]" === Object.prototype.toString.call(r)) { var n = []; for (i in r)({}).hasOwnProperty.call(r, i) && (n[i] = o(r[i])); return n.indexOf(t) >= 0 } return "object" === (void 0 === r ? "undefined" : _(r)) ? r.hasOwnProperty(t) : !(!r || "function" != typeof r.indexOf) && r.indexOf(t) >= 0 }, isCreditCard: function(t) { e(t); var r = t.replace(/[- ]+/g, ""); if (!ie.test(r)) return !1; for (var o = 0, i = void 0, n = void 0, a = void 0, l = r.length - 1; l >= 0; l--) i = r.substring(l, l + 1), n = parseInt(i, 10), o += a && (n *= 2) >= 10 ? n % 10 + 1 : n, a = !a; return !(o % 10 != 0 || !r) }, isISIN: function(t) { if (e(t), !ne.test(t)) return !1; for (var r = t.replace(/[A-Z]/g, function(e) { return parseInt(e, 36) }), o = 0, i = void 0, n = void 0, a = !0, l = r.length - 2; l >= 0; l--) i = r.substring(l, l + 1), n = parseInt(i, 10), o += a && (n *= 2) >= 10 ? n + 1 : n, a = !a; return parseInt(t.substr(t.length - 1), 10) === (1e4 - o) % 10 }, isISBN: f, isISSN: function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      e(t); var o = ue; if (o = r.require_hyphen ? o.replace("?", "") : o, !(o = r.case_sensitive ? new RegExp(o) : new RegExp(o, "i")).test(t)) return !1; var i = t.replace("-", ""),
        n = 8,
        a = 0,
        l = !0,
        s = !1,
        u = void 0; try { for (var d, c = i[Symbol.iterator](); !(l = (d = c.next()).done); l = !0) { var f = d.value;
          a += ("X" === f.toUpperCase() ? 10 : +f) * n, --n } } catch (e) { s = !0, u = e } finally { try {!l && c.return && c.return() } finally { if (s) throw u } } return a % 11 == 0 }, isMobilePhone: function(t, r) { if (e(t), r in de) return de[r].test(t); if ("any" === r) { for (var o in de)
          if (de.hasOwnProperty(o) && de[o].test(t)) return !0; return !1 } throw new Error("Invalid locale '" + r + "'") }, isPostalCode: function(t, r) { if (e(t), r in Ae) return Ae[r].test(t); if ("any" === r) { for (var o in Ae)
          if (Ae.hasOwnProperty(o) && Ae[o].test(t)) return !0; return !1 } throw new Error("Invalid locale '" + r + "'") }, isCurrency: function(t, r) { return e(t), r = i(r, ce),
        function(e) { var t = "\\d{" + e.digits_after_decimal[0] + "}";
          e.digits_after_decimal.forEach(function(e, r) { 0 !== r && (t = t + "|\\d{" + e + "}") }); var r = "(\\" + e.symbol.replace(/\./g, "\\.") + ")" + (e.require_symbol ? "" : "?"),
            o = "(" + ["0", "[1-9]\\d*", "[1-9]\\d{0,2}(\\" + e.thousands_separator + "\\d{3})*"].join("|") + ")?",
            i = "(\\" + e.decimal_separator + "(" + t + "))" + (e.require_decimal ? "" : "?"),
            n = o + (e.allow_decimal || e.require_decimal ? i : ""); return e.allow_negatives && !e.parens_for_negatives && (e.negative_sign_after_digits ? n += "-?" : e.negative_sign_before_digits && (n = "-?" + n)), e.allow_negative_sign_placeholder ? n = "( (?!\\-))?" + n : e.allow_space_after_symbol ? n = " ?" + n : e.allow_space_after_digits && (n += "( (?!$))?"), e.symbol_after_digits ? n += r : n = r + n, e.allow_negatives && (e.parens_for_negatives ? n = "(\\(" + n + "\\)|" + n + ")" : e.negative_sign_before_digits || e.negative_sign_after_digits || (n = "-?" + n)), new RegExp("^(?!-? )(?=.*\\d)" + n + "$") }(r).test(t) }, isISO8601: function(t) { return e(t), fe.test(t) }, isISO31661Alpha2: function(t) { return e(t), pe.includes(t.toUpperCase()) }, isBase64: function(t) { e(t); var r = t.length; if (!r || r % 4 != 0 || ge.test(t)) return !1; var o = t.indexOf("="); return -1 === o || o === r - 1 || o === r - 2 && "=" === t[r - 1] }, isDataURI: function(t) { return e(t), he.test(t) }, isLatLong: function(t) { if (e(t), !t.includes(",")) return !1; var r = t.split(","); return me.test(r[0]) && _e.test(r[1]) }, ltrim: p, rtrim: g, trim: function(e, t) { return g(p(e, t), t) }, escape: function(t) { return e(t), t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;") }, unescape: function(t) { return e(t), t.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`") }, stripLow: function(t, r) { return e(t), h(t, r ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F") }, whitelist: function(t, r) { return e(t), t.replace(new RegExp("[^" + r + "]+", "g"), "") }, blacklist: h, isWhitelisted: function(t, r) { e(t); for (var o = t.length - 1; o >= 0; o--)
        if (-1 === r.indexOf(t[o])) return !1; return !0 }, normalizeEmail: function(e, t) { t = i(t, xe); var r = e.split("@"),
        o = r.pop(),
        n = [r.join("@"), o]; if (n[1] = n[1].toLowerCase(), "gmail.com" === n[1] || "googlemail.com" === n[1]) { if (t.gmail_remove_subaddress && (n[0] = n[0].split("+")[0]), t.gmail_remove_dots && (n[0] = n[0].replace(/\./g, "")), !n[0].length) return !1;
        (t.all_lowercase || t.gmail_lowercase) && (n[0] = n[0].toLowerCase()), n[1] = t.gmail_convert_googlemaildotcom ? "gmail.com" : n[1] } else if (~Se.indexOf(n[1])) { if (t.icloud_remove_subaddress && (n[0] = n[0].split("+")[0]), !n[0].length) return !1;
        (t.all_lowercase || t.icloud_lowercase) && (n[0] = n[0].toLowerCase()) } else if (~we.indexOf(n[1])) { if (t.outlookdotcom_remove_subaddress && (n[0] = n[0].split("+")[0]), !n[0].length) return !1;
        (t.all_lowercase || t.outlookdotcom_lowercase) && (n[0] = n[0].toLowerCase()) } else if (~Ee.indexOf(n[1])) { if (t.yahoo_remove_subaddress) { var a = n[0].split("-");
          n[0] = a.length > 1 ? a.slice(0, -1).join("-") : a[0] } if (!n[0].length) return !1;
        (t.all_lowercase || t.yahoo_lowercase) && (n[0] = n[0].toLowerCase()) } else t.all_lowercase && (n[0] = n[0].toLowerCase()); return n.join("@") }, toString: o } });