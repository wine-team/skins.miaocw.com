if (typeof JSON2 !== "object") {
    JSON2 = window.JSON || {}
}(function () {
    function d(f) {
        return f < 10 ? "0" + f : f
    }

    function l(n, m) {
        var f = Object.prototype.toString.apply(n);
        if (f === "[object Date]") {
            return isFinite(n.valueOf()) ? n.getUTCFullYear() + "-" + d(n.getUTCMonth() + 1) + "-" + d(n.getUTCDate()) + "T" + d(n.getUTCHours()) + ":" + d(n.getUTCMinutes()) + ":" + d(n.getUTCSeconds()) + "Z" : null
        }
        if (f === "[object String]" || f === "[object Number]" || f === "[object Boolean]") {
            return n.valueOf()
        }
        if (f !== "[object Array]" && typeof n.toJSON === "function") {
            return n.toJSON(m)
        }
        return n
    }
    var c = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"),
        e = '\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',
        i = new RegExp("[" + e, "g"),
        j, b, k = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        h;

    function a(f) {
        i.lastIndex = 0;
        return i.test(f) ? '"' + f.replace(i, function (m) {
            var n = k[m];
            return typeof n === "string" ? n : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + f + '"'
    }

    function g(s, p) {
        var n, m, t, f, q = j,
            o, r = p[s];
        if (r && typeof r === "object") {
            r = l(r, s)
        }
        if (typeof h === "function") {
            r = h.call(p, s, r)
        }
        switch (typeof r) {
        case "string":
            return a(r);
        case "number":
            return isFinite(r) ? String(r) : "null";
        case "boolean":
        case "null":
            return String(r);
        case "object":
            if (!r) {
                return "null"
            }
            j += b;
            o = [];
            if (Object.prototype.toString.apply(r) === "[object Array]") {
                f = r.length;
                for (n = 0; n < f; n += 1) {
                    o[n] = g(n, r) || "null"
                }
                t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
                j = q;
                return t
            }
            if (h && typeof h === "object") {
                f = h.length;
                for (n = 0; n < f; n += 1) {
                    if (typeof h[n] === "string") {
                        m = h[n];
                        t = g(m, r);
                        if (t) {
                            o.push(a(m) + (j ? ": " : ":") + t)
                        }
                    }
                }
            } else {
                for (m in r) {
                    if (Object.prototype.hasOwnProperty.call(r, m)) {
                        t = g(m, r);
                        if (t) {
                            o.push(a(m) + (j ? ": " : ":") + t)
                        }
                    }
                }
            }
            t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
            j = q;
            return t
        }
    }
    if (typeof JSON2.stringify !== "function") {
        JSON2.stringify = function (o, m, n) {
            var f;
            j = "";
            b = "";
            if (typeof n === "number") {
                for (f = 0; f < n; f += 1) {
                    b += " "
                }
            } else {
                if (typeof n === "string") {
                    b = n
                }
            }
            h = m;
            if (m && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) {
                throw new Error("JSON2.stringify")
            }
            return g("", {
                "": o
            })
        }
    }
    if (typeof JSON2.parse !== "function") {
        JSON2.parse = function (o, f) {
            var n;

            function m(s, r) {
                var q, p, t = s[r];
                if (t && typeof t === "object") {
                    for (q in t) {
                        if (Object.prototype.hasOwnProperty.call(t, q)) {
                            p = m(t, q);
                            if (p !== undefined) {
                                t[q] = p
                            } else {
                                delete t[q]
                            }
                        }
                    }
                }
                return f.call(s, r, t)
            }
            o = String(o);
            c.lastIndex = 0;
            if (c.test(o)) {
                o = o.replace(c, function (p) {
                    return "\\u" + ("0000" + p.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if ((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
                n = eval("(" + o + ")");
                return typeof f === "function" ? m({
                    "": n
                }, "") : n
            }
            throw new SyntaxError("JSON2.parse")
        }
    }
}());
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof Piwik !== "object") {
    Piwik = (function () {
        var j, a = {},
            u = document,
            e = navigator,
            K = screen,
            G = window,
            f = G.performance || G.mozPerformance || G.msPerformance || G.webkitPerformance,
            p = false,
            E = [],
            l = G.encodeURIComponent,
            F = G.decodeURIComponent,
            h = unescape,
            L, t, c;

        function w(X) {
            var W = typeof X;
            return W !== "undefined"
        }

        function q(W) {
            return typeof W === "function"
        }

        function J(W) {
            return typeof W === "object"
        }

        function n(W) {
            return typeof W === "string" || W instanceof String
        }

        function R() {
            var W, Y, X;
            for (W = 0; W < arguments.length; W += 1) {
                X = arguments[W];
                Y = X.shift();
                if (n(Y)) {
                    L[Y].apply(L, X)
                } else {
                    Y.apply(L, X)
                }
            }
        }

        function U(Z, Y, X, W) {
            if (Z.addEventListener) {
                Z.addEventListener(Y, X, W);
                return true
            }
            if (Z.attachEvent) {
                return Z.attachEvent("on" + Y, X)
            }
            Z["on" + Y] = X
        }

        function O(X, aa) {
            var W = "",
                Z, Y;
            for (Z in a) {
                if (Object.prototype.hasOwnProperty.call(a, Z)) {
                    Y = a[Z][X];
                    if (q(Y)) {
                        W += Y(aa)
                    }
                }
            }
            return W
        }

        function S() {
            var W;
            O("unload");
            if (j) {
                do {
                    W = new Date()
                } while (W.getTimeAlias() < j)
            }
        }

        function P() {
            var W;
            if (!p) {
                p = true;
                O("load");
                for (W = 0; W < E.length; W++) {
                    E[W]()
                }
            }
            return true
        }

        function o() {
            var X;
            if (u.addEventListener) {
                U(u, "DOMContentLoaded", function W() {
                    u.removeEventListener("DOMContentLoaded", W, false);
                    P()
                })
            } else {
                if (u.attachEvent) {
                    u.attachEvent("onreadystatechange", function W() {
                        if (u.readyState === "complete") {
                            u.detachEvent("onreadystatechange", W);
                            P()
                        }
                    });
                    if (u.documentElement.doScroll && G === G.top) {
                        (function W() {
                            if (!p) {
                                try {
                                    u.documentElement.doScroll("left")
                                } catch (Y) {
                                    setTimeout(W, 0);
                                    return
                                }
                                P()
                            }
                        }())
                    }
                }
            } if ((new RegExp("WebKit")).test(e.userAgent)) {
                X = setInterval(function () {
                    if (p || /loaded|complete/.test(u.readyState)) {
                        clearInterval(X);
                        P()
                    }
                }, 10)
            }
            U(G, "load", P, false)
        }

        function i(Y, X) {
            var W = u.createElement("script");
            W.type = "text/javascript";
            W.src = Y;
            if (W.readyState) {
                W.onreadystatechange = function () {
                    var Z = this.readyState;
                    if (Z === "loaded" || Z === "complete") {
                        W.onreadystatechange = null;
                        X()
                    }
                }
            } else {
                W.onload = X
            }
            u.getElementsByTagName("head")[0].appendChild(W)
        }

        function x() {
            var W = "";
            try {
                W = G.top.document.referrer
            } catch (Y) {
                if (G.parent) {
                    try {
                        W = G.parent.document.referrer
                    } catch (X) {
                        W = ""
                    }
                }
            }
            if (W === "") {
                W = u.referrer
            }
            return W
        }

        function k(W) {
            var Y = new RegExp("^([a-z]+):"),
                X = Y.exec(W);
            return X ? X[1] : null
        }

        function b(W) {
            var Y = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                X = Y.exec(W);
            return X ? X[1] : W
        }

        function I(Y, X) {
            var W = "[\\?&#]" + X + "=([^&#]*)";
            var aa = new RegExp(W);
            var Z = aa.exec(Y);
            return Z ? F(Z[1]) : ""
        }

        function s(W) {
            return h(l(W))
        }

        function T(am) {
            var Z = function (ar, W) {
                    return (ar << W) | (ar >>> (32 - W))
                },
                an = function (au) {
                    var ar = "",
                        at, W;
                    for (at = 7; at >= 0; at--) {
                        W = (au >>> (at * 4)) & 15;
                        ar += W.toString(16)
                    }
                    return ar
                },
                ac, ap, ao, Y = [],
                ag = 1732584193,
                ae = 4023233417,
                ad = 2562383102,
                ab = 271733878,
                aa = 3285377520,
                al, ak, aj, ai, ah, aq, X, af = [];
            am = s(am);
            X = am.length;
            for (ap = 0; ap < X - 3; ap += 4) {
                ao = am.charCodeAt(ap) << 24 | am.charCodeAt(ap + 1) << 16 | am.charCodeAt(ap + 2) << 8 | am.charCodeAt(ap + 3);
                af.push(ao)
            }
            switch (X & 3) {
            case 0:
                ap = 2147483648;
                break;
            case 1:
                ap = am.charCodeAt(X - 1) << 24 | 8388608;
                break;
            case 2:
                ap = am.charCodeAt(X - 2) << 24 | am.charCodeAt(X - 1) << 16 | 32768;
                break;
            case 3:
                ap = am.charCodeAt(X - 3) << 24 | am.charCodeAt(X - 2) << 16 | am.charCodeAt(X - 1) << 8 | 128;
                break
            }
            af.push(ap);
            while ((af.length & 15) !== 14) {
                af.push(0)
            }
            af.push(X >>> 29);
            af.push((X << 3) & 4294967295);
            for (ac = 0; ac < af.length; ac += 16) {
                for (ap = 0; ap < 16; ap++) {
                    Y[ap] = af[ac + ap]
                }
                for (ap = 16; ap <= 79; ap++) {
                    Y[ap] = Z(Y[ap - 3] ^ Y[ap - 8] ^ Y[ap - 14] ^ Y[ap - 16], 1)
                }
                al = ag;
                ak = ae;
                aj = ad;
                ai = ab;
                ah = aa;
                for (ap = 0; ap <= 19; ap++) {
                    aq = (Z(al, 5) + ((ak & aj) | (~ak & ai)) + ah + Y[ap] + 1518500249) & 4294967295;
                    ah = ai;
                    ai = aj;
                    aj = Z(ak, 30);
                    ak = al;
                    al = aq
                }
                for (ap = 20; ap <= 39; ap++) {
                    aq = (Z(al, 5) + (ak ^ aj ^ ai) + ah + Y[ap] + 1859775393) & 4294967295;
                    ah = ai;
                    ai = aj;
                    aj = Z(ak, 30);
                    ak = al;
                    al = aq
                }
                for (ap = 40; ap <= 59; ap++) {
                    aq = (Z(al, 5) + ((ak & aj) | (ak & ai) | (aj & ai)) + ah + Y[ap] + 2400959708) & 4294967295;
                    ah = ai;
                    ai = aj;
                    aj = Z(ak, 30);
                    ak = al;
                    al = aq
                }
                for (ap = 60; ap <= 79; ap++) {
                    aq = (Z(al, 5) + (ak ^ aj ^ ai) + ah + Y[ap] + 3395469782) & 4294967295;
                    ah = ai;
                    ai = aj;
                    aj = Z(ak, 30);
                    ak = al;
                    al = aq
                }
                ag = (ag + al) & 4294967295;
                ae = (ae + ak) & 4294967295;
                ad = (ad + aj) & 4294967295;
                ab = (ab + ai) & 4294967295;
                aa = (aa + ah) & 4294967295
            }
            aq = an(ag) + an(ae) + an(ad) + an(ab) + an(aa);
            return aq.toLowerCase()
        }

        function N(Y, W, X) {
            if (Y === "translate.googleusercontent.com") {
                if (X === "") {
                    X = W
                }
                W = I(W, "u");
                Y = b(W)
            } else {
                if (Y === "cc.bingj.com" || Y === "webcache.googleusercontent.com" || Y.slice(0, 5) === "74.6.") {
                    W = u.links[0].href;
                    Y = b(W)
                }
            }
            return [Y, W, X]
        }

        function y(X) {
            var W = X.length;
            if (X.charAt(--W) === ".") {
                X = X.slice(0, W)
            }
            if (X.slice(0, 2) === "*.") {
                X = X.slice(1)
            }
            return X
        }

        function V(X) {
            X = X && X.text ? X.text : X;
            if (!n(X)) {
                var W = u.getElementsByTagName("title");
                if (W && w(W[0])) {
                    X = W[0].text
                }
            }
            return X
        }

        function C(W) {
            if (!W) {
                return []
            }
            if (!w(W.children) && w(W.childNodes)) {
                return W.children
            }
            if (w(W.children)) {
                return W.children
            }
            return []
        }

        function H(X, W) {
            if (!X || !W) {
                return false
            }
            if (X.contains) {
                return X.contains(W)
            }
            if (X === W) {
                return true
            }
            if (X.compareDocumentPosition) {
                return !!(X.compareDocumentPosition(W) & 16)
            }
            return false
        }

        function z(Y, Z) {
            if (Y && Y.indexOf) {
                return Y.indexOf(Z)
            }
            if (!w(Y) || Y === null) {
                return -1
            }
            if (!Y.length) {
                return -1
            }
            var W = Y.length;
            if (W === 0) {
                return -1
            }
            var X = 0;
            while (X < W) {
                if (Y[X] === Z) {
                    return X
                }
                X++
            }
            return -1
        }

        function g(Y) {
            if (!Y) {
                return false
            }

            function W(aa, ab) {
                if (G.getComputedStyle) {
                    return u.defaultView.getComputedStyle(aa, null)[ab]
                }
                if (aa.currentStyle) {
                    return aa.currentStyle[ab]
                }
            }

            function Z(aa) {
                aa = aa.parentNode;
                while (aa) {
                    if (aa === u) {
                        return true
                    }
                    aa = aa.parentNode
                }
                return false
            }

            function X(ac, ai, aa, af, ad, ag, ae) {
                var ab = ac.parentNode,
                    ah = 1;
                if (!Z(ac)) {
                    return false
                }
                if (9 === ab.nodeType) {
                    return true
                }
                if ("0" === W(ac, "opacity") || "none" === W(ac, "display") || "hidden" === W(ac, "visibility")) {
                    return false
                }
                if (!w(ai) || !w(aa) || !w(af) || !w(ad) || !w(ag) || !w(ae)) {
                    ai = ac.offsetTop;
                    ad = ac.offsetLeft;
                    af = ai + ac.offsetHeight;
                    aa = ad + ac.offsetWidth;
                    ag = ac.offsetWidth;
                    ae = ac.offsetHeight
                }
                if (Y === ac && (0 === ae || 0 === ag) && "hidden" === W(ac, "overflow")) {
                    return false
                }
                if (ab) {
                    if (("hidden" === W(ab, "overflow") || "scroll" === W(ab, "overflow"))) {
                        if (ad + ah > ab.offsetWidth + ab.scrollLeft || ad + ag - ah < ab.scrollLeft || ai + ah > ab.offsetHeight + ab.scrollTop || ai + ae - ah < ab.scrollTop) {
                            return false
                        }
                    }
                    if (ac.offsetParent === ab) {
                        ad += ab.offsetLeft;
                        ai += ab.offsetTop
                    }
                    return X(ab, ai, aa, af, ad, ag, ae)
                }
                return true
            }
            return X(Y)
        }
        var Q = {
            htmlCollectionToArray: function (Y) {
                var W = [],
                    X;
                if (!Y || !Y.length) {
                    return W
                }
                for (X = 0; X < Y.length; X++) {
                    W.push(Y[X])
                }
                return W
            }, find: function (W) {
                if (!document.querySelectorAll || !W) {
                    return []
                }
                var X = document.querySelectorAll(W);
                return this.htmlCollectionToArray(X)
            }, findMultiple: function (Y) {
                if (!Y || !Y.length) {
                    return []
                }
                var X, Z;
                var W = [];
                for (X = 0; X < Y.length; X++) {
                    Z = this.find(Y[X]);
                    W = W.concat(Z)
                }
                W = this.makeNodesUnique(W);
                return W
            }, findNodesByTagName: function (X, W) {
                if (!X || !W || !X.getElementsByTagName) {
                    return []
                }
                var Y = X.getElementsByTagName(W);
                return this.htmlCollectionToArray(Y)
            }, makeNodesUnique: function (W) {
                var ab = [].concat(W);
                W.sort(function (ad, ac) {
                    if (ad === ac) {
                        return 0
                    }
                    var af = z(ab, ad);
                    var ae = z(ab, ac);
                    if (af === ae) {
                        return 0
                    }
                    return af > ae ? -1 : 1
                });
                if (W.length <= 1) {
                    return W
                }
                var X = 0;
                var Z = 0;
                var aa = [];
                var Y;
                Y = W[X++];
                while (Y) {
                    if (Y === W[X]) {
                        Z = aa.push(X)
                    }
                    Y = W[X++] || null
                }
                while (Z--) {
                    W.splice(aa[Z], 1)
                }
                return W
            }, getAttributeValueFromNode: function (aa, Y) {
                if (!this.hasNodeAttribute(aa, Y)) {
                    return
                }
                if (aa && aa.getAttribute) {
                    return aa.getAttribute(Y)
                }
                if (!aa || !aa.attributes) {
                    return
                }
                var Z = (typeof aa.attributes[Y]);
                if ("undefined" === Z) {
                    return
                }
                if (aa.attributes[Y].value) {
                    return aa.attributes[Y].value
                }
                if (aa.attributes[Y].nodeValue) {
                    return aa.attributes[Y].nodeValue
                }
                var X;
                var W = aa.attributes;
                if (!W) {
                    return
                }
                for (X = 0; X < W.length; X++) {
                    if (W[X].nodeName === Y) {
                        return W[X].nodeValue
                    }
                }
                return null
            }, hasNodeAttributeWithValue: function (X, W) {
                var Y = this.getAttributeValueFromNode(X, W);
                return !!Y
            }, hasNodeAttribute: function (Y, W) {
                if (Y && Y.hasAttribute) {
                    return Y.hasAttribute(W)
                }
                if (Y && Y.attributes) {
                    var X = (typeof Y.attributes[W]);
                    return "undefined" !== X
                }
                return false
            }, hasNodeCssClass: function (Y, X) {
                if (Y && X && Y.className) {
                    var W = Y.className.split(" ");
                    if (-1 !== z(W, X)) {
                        return true
                    }
                }
                return false
            }, findNodesHavingAttribute: function (aa, Y, W) {
                if (!W) {
                    W = []
                }
                if (!aa || !Y) {
                    return W
                }
                var Z = C(aa);
                if (!Z || !Z.length) {
                    return W
                }
                var X, ab;
                for (X = 0; X < Z.length; X++) {
                    ab = Z[X];
                    if (this.hasNodeAttribute(ab, Y)) {
                        W.push(ab)
                    }
                    W = this.findNodesHavingAttribute(ab, Y, W)
                }
                return W
            }, findFirstNodeHavingAttribute: function (Y, X) {
                if (!Y || !X) {
                    return
                }
                if (this.hasNodeAttribute(Y, X)) {
                    return Y
                }
                var W = this.findNodesHavingAttribute(Y, X);
                if (W && W.length) {
                    return W[0]
                }
            }, findFirstNodeHavingAttributeWithValue: function (Z, Y) {
                if (!Z || !Y) {
                    return
                }
                if (this.hasNodeAttributeWithValue(Z, Y)) {
                    return Z
                }
                var W = this.findNodesHavingAttribute(Z, Y);
                if (!W || !W.length) {
                    return
                }
                var X;
                for (X = 0; X < W.length; X++) {
                    if (this.getAttributeValueFromNode(W[X], Y)) {
                        return W[X]
                    }
                }
            }, findNodesHavingCssClass: function (aa, Z, W) {
                if (!W) {
                    W = []
                }
                if (!aa || !Z) {
                    return W
                }
                if (aa.getElementsByClassName) {
                    var ab = aa.getElementsByClassName(Z);
                    return this.htmlCollectionToArray(ab)
                }
                var Y = C(aa);
                if (!Y || !Y.length) {
                    return []
                }
                var X, ac;
                for (X = 0; X < Y.length; X++) {
                    ac = Y[X];
                    if (this.hasNodeCssClass(ac, Z)) {
                        W.push(ac)
                    }
                    W = this.findNodesHavingCssClass(ac, Z, W)
                }
                return W
            }, findFirstNodeHavingClass: function (Y, X) {
                if (!Y || !X) {
                    return
                }
                if (this.hasNodeCssClass(Y, X)) {
                    return Y
                }
                var W = this.findNodesHavingCssClass(Y, X);
                if (W && W.length) {
                    return W[0]
                }
            }, isLinkElement: function (X) {
                if (!X) {
                    return false
                }
                var W = String(X.nodeName).toLowerCase();
                var Z = ["a", "area"];
                var Y = z(Z, W);
                return Y !== -1
            }, setAnyAttribute: function (X, W, Y) {
                if (!X || !W) {
                    return
                }
                if (X.setAttribute) {
                    X.setAttribute(W, Y)
                } else {
                    X[W] = Y
                }
            }
        };
        var m = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function () {
                var X = "." + this.CONTENT_CLASS;
                var W = "[" + this.CONTENT_ATTR + "]";
                var Y = Q.findMultiple([X, W]);
                return Y
            }, findContentNodesWithinNode: function (Z) {
                if (!Z) {
                    return []
                }
                var X = Q.findNodesHavingCssClass(Z, this.CONTENT_CLASS);
                var W = Q.findNodesHavingAttribute(Z, this.CONTENT_ATTR);
                if (W && W.length) {
                    var Y;
                    for (Y = 0; Y < W.length; Y++) {
                        X.push(W[Y])
                    }
                }
                if (Q.hasNodeAttribute(Z, this.CONTENT_ATTR)) {
                    X.push(Z)
                } else {
                    if (Q.hasNodeCssClass(Z, this.CONTENT_CLASS)) {
                        X.push(Z)
                    }
                }
                X = Q.makeNodesUnique(X);
                return X
            }, findParentContentNode: function (X) {
                if (!X) {
                    return
                }
                var Y = X;
                var W = 0;
                while (Y && Y !== u && Y.parentNode) {
                    if (Q.hasNodeAttribute(Y, this.CONTENT_ATTR)) {
                        return Y
                    }
                    if (Q.hasNodeCssClass(Y, this.CONTENT_CLASS)) {
                        return Y
                    }
                    Y = Y.parentNode;
                    if (W > 1000) {
                        break
                    }
                    W++
                }
            }, findPieceNode: function (X) {
                var W;
                W = Q.findFirstNodeHavingAttribute(X, this.CONTENT_PIECE_ATTR);
                if (!W) {
                    W = Q.findFirstNodeHavingClass(X, this.CONTENT_PIECE_CLASS)
                }
                if (W) {
                    return W
                }
                return X
            }, findTargetNodeNoDefault: function (W) {
                if (!W) {
                    return
                }
                var X = Q.findFirstNodeHavingAttributeWithValue(W, this.CONTENT_TARGET_ATTR);
                if (X) {
                    return X
                }
                X = Q.findFirstNodeHavingAttribute(W, this.CONTENT_TARGET_ATTR);
                if (X) {
                    return X
                }
                X = Q.findFirstNodeHavingClass(W, this.CONTENT_TARGET_CLASS);
                if (X) {
                    return X
                }
            }, findTargetNode: function (W) {
                var X = this.findTargetNodeNoDefault(W);
                if (X) {
                    return X
                }
                return W
            }, findContentName: function (X) {
                if (!X) {
                    return
                }
                var aa = Q.findFirstNodeHavingAttributeWithValue(X, this.CONTENT_NAME_ATTR);
                if (aa) {
                    return Q.getAttributeValueFromNode(aa, this.CONTENT_NAME_ATTR)
                }
                var W = this.findContentPiece(X);
                if (W) {
                    return this.removeDomainIfIsInLink(W)
                }
                if (Q.hasNodeAttributeWithValue(X, "title")) {
                    return Q.getAttributeValueFromNode(X, "title")
                }
                var Y = this.findPieceNode(X);
                if (Q.hasNodeAttributeWithValue(Y, "title")) {
                    return Q.getAttributeValueFromNode(Y, "title")
                }
                var Z = this.findTargetNode(X);
                if (Q.hasNodeAttributeWithValue(Z, "title")) {
                    return Q.getAttributeValueFromNode(Z, "title")
                }
            }, findContentPiece: function (X) {
                if (!X) {
                    return
                }
                var Z = Q.findFirstNodeHavingAttributeWithValue(X, this.CONTENT_PIECE_ATTR);
                if (Z) {
                    return Q.getAttributeValueFromNode(Z, this.CONTENT_PIECE_ATTR)
                }
                var W = this.findPieceNode(X);
                var Y = this.findMediaUrlInNode(W);
                if (Y) {
                    return this.toAbsoluteUrl(Y)
                }
            }, findContentTarget: function (Y) {
                if (!Y) {
                    return
                }
                var Z = this.findTargetNode(Y);
                if (Q.hasNodeAttributeWithValue(Z, this.CONTENT_TARGET_ATTR)) {
                    return Q.getAttributeValueFromNode(Z, this.CONTENT_TARGET_ATTR)
                }
                var X;
                if (Q.hasNodeAttributeWithValue(Z, "href")) {
                    X = Q.getAttributeValueFromNode(Z, "href");
                    return this.toAbsoluteUrl(X)
                }
                var W = this.findPieceNode(Y);
                if (Q.hasNodeAttributeWithValue(W, "href")) {
                    X = Q.getAttributeValueFromNode(W, "href");
                    return this.toAbsoluteUrl(X)
                }
            }, isSameDomain: function (W) {
                if (!W || !W.indexOf) {
                    return false
                }
                if (0 === W.indexOf(this.getLocation().origin)) {
                    return true
                }
                var X = W.indexOf(this.getLocation().host);
                if (8 >= X && 0 <= X) {
                    return true
                }
                return false
            }, removeDomainIfIsInLink: function (Y) {
                var X = "^https?://[^/]+";
                var W = "^.*//[^/]+";
                if (Y && Y.search && -1 !== Y.search(new RegExp(X)) && this.isSameDomain(Y)) {
                    Y = Y.replace(new RegExp(W), "");
                    if (!Y) {
                        Y = "/"
                    }
                }
                return Y
            }, findMediaUrlInNode: function (aa) {
                if (!aa) {
                    return
                }
                var Y = ["img", "embed", "video", "audio"];
                var W = aa.nodeName.toLowerCase();
                if (-1 !== z(Y, W) && Q.findFirstNodeHavingAttributeWithValue(aa, "src")) {
                    var Z = Q.findFirstNodeHavingAttributeWithValue(aa, "src");
                    return Q.getAttributeValueFromNode(Z, "src")
                }
                if (W === "object" && Q.hasNodeAttributeWithValue(aa, "data")) {
                    return Q.getAttributeValueFromNode(aa, "data")
                }
                if (W === "object") {
                    var ab = Q.findNodesByTagName(aa, "param");
                    if (ab && ab.length) {
                        var X;
                        for (X = 0; X < ab.length; X++) {
                            if ("movie" === Q.getAttributeValueFromNode(ab[X], "name") && Q.hasNodeAttributeWithValue(ab[X], "value")) {
                                return Q.getAttributeValueFromNode(ab[X], "value")
                            }
                        }
                    }
                    var ac = Q.findNodesByTagName(aa, "embed");
                    if (ac && ac.length) {
                        return this.findMediaUrlInNode(ac[0])
                    }
                }
            }, trim: function (W) {
                if (W && String(W) === W) {
                    return W.replace(/^\s+|\s+$/g, "")
                }
                return W
            }, isOrWasNodeInViewport: function (ab) {
                if (!ab || !ab.getBoundingClientRect || ab.nodeType !== 1) {
                    return true
                }
                var aa = ab.getBoundingClientRect();
                var Z = u.documentElement || {};
                var Y = aa.top < 0;
                if (Y && ab.offsetTop) {
                    Y = (ab.offsetTop + aa.height) > 0
                }
                var X = Z.clientWidth;
                if (G.innerWidth && X > G.innerWidth) {
                    X = G.innerWidth
                }
                var W = Z.clientHeight;
                if (G.innerHeight && W > G.innerHeight) {
                    W = G.innerHeight
                }
                return ((aa.bottom > 0 || Y) && aa.right > 0 && aa.left < X && ((aa.top < W) || Y))
            }, isNodeVisible: function (X) {
                var W = g(X);
                var Y = this.isOrWasNodeInViewport(X);
                return W && Y
            }, buildInteractionRequestParams: function (W, X, Y, Z) {
                var aa = "";
                if (W) {
                    aa += "c_i=" + l(W)
                }
                if (X) {
                    if (aa) {
                        aa += "&"
                    }
                    aa += "c_n=" + l(X)
                }
                if (Y) {
                    if (aa) {
                        aa += "&"
                    }
                    aa += "c_p=" + l(Y)
                }
                if (Z) {
                    if (aa) {
                        aa += "&"
                    }
                    aa += "c_t=" + l(Z)
                }
                return aa
            }, buildImpressionRequestParams: function (W, X, Y) {
                var Z = "c_n=" + l(W) + "&c_p=" + l(X);
                if (Y) {
                    Z += "&c_t=" + l(Y)
                }
                return Z
            }, buildContentBlock: function (Y) {
                if (!Y) {
                    return
                }
                var W = this.findContentName(Y);
                var X = this.findContentPiece(Y);
                var Z = this.findContentTarget(Y);
                W = this.trim(W);
                X = this.trim(X);
                Z = this.trim(Z);
                return {
                    name: W || "Unknown",
                    piece: X || "Unknown",
                    target: Z || ""
                }
            }, collectContent: function (Z) {
                if (!Z || !Z.length) {
                    return []
                }
                var Y = [];
                var W, X;
                for (W = 0; W < Z.length; W++) {
                    X = this.buildContentBlock(Z[W]);
                    if (w(X)) {
                        Y.push(X)
                    }
                }
                return Y
            }, setLocation: function (W) {
                this.location = W
            }, getLocation: function () {
                var W = this.location || G.location;
                if (!W.origin) {
                    W.origin = W.protocol + "//" + W.hostname + (W.port ? ":" + W.port : "")
                }
                return W
            }, toAbsoluteUrl: function (X) {
                if ((!X || String(X) !== X) && X !== "") {
                    return X
                }
                if ("" === X) {
                    return this.getLocation().href
                }
                if (X.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + X
                }
                if (X.search(/:\/\//) !== -1) {
                    return X
                }
                if (0 === X.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + X
                }
                if (0 === X.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + X
                }
                if (0 === X.search("^[a-zA-Z]{2,11}:")) {
                    return X
                }
                if (X.search(/^\//) !== -1) {
                    return this.getLocation().origin + X
                }
                var W = "(.*/)";
                var Y = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(W))[0];
                return Y + X
            }, isUrlToCurrentDomain: function (X) {
                var Y = this.toAbsoluteUrl(X);
                if (!Y) {
                    return false
                }
                var W = this.getLocation().origin;
                if (W === Y) {
                    return true
                }
                if (0 === String(Y).indexOf(W)) {
                    if (":" === String(Y).substr(W.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            }, setHrefAttribute: function (X, W) {
                if (!X || !W) {
                    return
                }
                Q.setAnyAttribute(X, "href", W)
            }, shouldIgnoreInteraction: function (Y) {
                var X = Q.hasNodeAttribute(Y, this.CONTENT_IGNOREINTERACTION_ATTR);
                var W = Q.hasNodeCssClass(Y, this.CONTENT_IGNOREINTERACTION_CLASS);
                return X || W
            }
        };

        function B(W, X) {
            if (X) {
                return X
            }
            if (W.slice(-9) === "piwik.php") {
                W = W.slice(0, W.length - 9)
            }
            return W
        }

        function A(aa) {
            var W = "Piwik_Overlay";
            var ad = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
            var Y = ad.exec(u.referrer);
            if (Y) {
                var Z = Y[1];
                if (Z !== String(aa)) {
                    return false
                }
                var ac = Y[2],
                    X = Y[3];
                G.name = W + "###" + ac + "###" + X
            }
            var ab = G.name.split("###");
            return ab.length === 3 && ab[0] === W
        }

        function M(X, ac, Z) {
            var ab = G.name.split("###"),
                aa = ab[1],
                W = ab[2],
                Y = B(X, ac);
            i(Y + "plugins/Overlay/client/client.js?v=1", function () {
                Piwik_Overlay_Client.initialize(Y, Z, aa, W)
            })
        }

        function D(aE, bn) {
            var ad = N(u.domain, G.location.href, x()),
                bN = y(ad[0]),
                b7 = F(ad[1]),
                bv = F(ad[2]),
                cb = false,
                br = "GET",
                bt = br,
                bc = "application/x-www-form-urlencoded; charset=UTF-8",
                aK = bc,
                aa = aE || "",
                ax = "",
                bp = "",
                bU = bn || "",
                aJ = "",
                a2 = "",
                a7, aS = u.title,
                aU = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                bq = [bN],
                ai = [],
                bg = [],
                aC = [],
                bo = 500,
                aj, aG, ak, an, aY = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                aP = ["pk_kwd", "piwik_kwd", "utm_term"],
                b5 = "_pk_",
                aq, b6, ao = false,
                bY, a0, a5, aw = 33955200000,
                az = 1800000,
                ba = 15768000000,
                a1 = true,
                aI = 0,
                a6 = false,
                ag = false,
                au, bh = {},
                ab = {},
                bZ = 200,
                bG = {},
                bV = {},
                ah = [],
                ay = false,
                a9 = false,
                bA = false,
                bW = false,
                bx = false,
                bu, bk, at, aX = T,
                bz;

            function bI(ck, ch, cg, cj, cf, ci) {
                if (ao) {
                    return
                }
                var ce;
                if (cg) {
                    ce = new Date();
                    ce.setTime(ce.getTime() + cg)
                }
                u.cookie = ck + "=" + l(ch) + (cg ? ";expires=" + ce.toGMTString() : "") + ";path=" + (cj || "/") + (cf ? ";domain=" + cf : "") + (ci ? ";secure" : "")
            }

            function av(cg) {
                if (ao) {
                    return 0
                }
                var ce = new RegExp("(^|;)[ ]*" + cg + "=([^;]*)"),
                    cf = ce.exec(u.cookie);
                return cf ? F(cf[2]) : 0
            }

            function b0(ce) {
                var cf;
                if (ak) {
                    cf = new RegExp("#.*");
                    return ce.replace(cf, "")
                }
                return ce
            }

            function bM(cg, ce) {
                var ch = k(ce),
                    cf;
                if (ch) {
                    return ce
                }
                if (ce.slice(0, 1) === "/") {
                    return k(cg) + "://" + b(cg) + ce
                }
                cg = b0(cg);
                cf = cg.indexOf("?");
                if (cf >= 0) {
                    cg = cg.slice(0, cf)
                }
                cf = cg.lastIndexOf("/");
                if (cf !== cg.length - 1) {
                    cg = cg.slice(0, cf + 1)
                }
                return cg + ce
            }

            function bs(ch) {
                var cf, ce, cg;
                for (cf = 0; cf < bq.length; cf++) {
                    ce = y(bq[cf].toLowerCase());
                    if (ch === ce) {
                        return true
                    }
                    if (ce.slice(0, 1) === ".") {
                        if (ch === ce.slice(1)) {
                            return true
                        }
                        cg = ch.length - ce.length;
                        if ((cg > 0) && (ch.slice(cg) === ce)) {
                            return true
                        }
                    }
                }
                return false
            }

            function cd(ce, cg) {
                var cf = new Image(1, 1);
                cf.onload = function () {
                    t = 0;
                    if (typeof cg === "function") {
                        cg()
                    }
                };
                cf.src = aa + (aa.indexOf("?") < 0 ? "?" : "&") + ce
            }

            function bJ(cf, ci, ce) {
                if (!w(ce) || null === ce) {
                    ce = true
                }
                try {
                    var ch = G.XMLHttpRequest ? new G.XMLHttpRequest() : G.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    ch.open("POST", aa, true);
                    ch.onreadystatechange = function () {
                        if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && ce) {
                            cd(cf, ci)
                        } else {
                            if (typeof ci === "function") {
                                ci()
                            }
                        }
                    };
                    ch.setRequestHeader("Content-Type", aK);
                    ch.send(cf)
                } catch (cg) {
                    if (ce) {
                        cd(cf, ci)
                    }
                }
            }

            function b1(cf) {
                var ce = new Date();
                var cg = ce.getTime() + cf;
                if (!j || cg > j) {
                    j = cg
                }
            }

            function aD(ci) {
                var cf = new Date();
                var ce = cf.getTime();
                if (a9 && ce < a9) {
                    var cg = a9 - ce;
                    setTimeout(ci, cg);
                    b1(cg + 50);
                    a9 += 50;
                    return
                }
                if (a9 === false) {
                    var ch = 800;
                    a9 = ce + ch
                }
                ci()
            }

            function aZ(cf, ce, cg) {
                if (!bY && cf) {
                    aD(function () {
                        if (bt === "POST") {
                            bJ(cf, cg)
                        } else {
                            cd(cf, cg)
                        }
                        b1(ce)
                    })
                }
            }

            function bb(ce) {
                if (bY) {
                    return false
                }
                return (ce && ce.length)
            }

            function ap(cg, ce) {
                if (!bb(cg)) {
                    return
                }
                var cf = '{"requests":["?' + cg.join('","?') + '"]}';
                aD(function () {
                    bJ(cf, null, false);
                    b1(ce)
                })
            }

            function bH(ce) {
                return b5 + ce + "." + bU + "." + bz
            }

            function ae() {
                if (ao) {
                    return "0"
                }
                if (!w(e.cookieEnabled)) {
                    var ce = bH("testcookie");
                    bI(ce, "1");
                    return av(ce) === "1" ? "1" : "0"
                }
                return e.cookieEnabled ? "1" : "0"
            }

            function bl() {
                bz = aX((aq || bN) + (b6 || "/")).slice(0, 4)
            }

            function ar() {
                var cf = bH("cvar"),
                    ce = av(cf);
                if (ce.length) {
                    ce = JSON2.parse(ce);
                    if (J(ce)) {
                        return ce
                    }
                }
                return {}
            }

            function Z() {
                if (ag === false) {
                    ag = ar()
                }
            }

            function bS() {
                var ce = new Date();
                bu = ce.getTime()
            }

            function b3() {
                return aX((e.userAgent || "") + (e.platform || "") + JSON2.stringify(bV) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function Y() {
                var cg = new Date(),
                    ce = Math.round(cg.getTime() / 1000),
                    cf = bH("id"),
                    cj = av(cf),
                    ci, ch;
                if (cj) {
                    ci = cj.split(".");
                    ci.unshift("0");
                    if (a2.length) {
                        ci[1] = a2
                    }
                    return ci
                }
                if (a2.length) {
                    ch = a2
                } else {
                    if ("0" === ae()) {
                        ch = ""
                    } else {
                        ch = b3()
                    }
                }
                ci = ["1", ch, ce, 0, ce, "", ""];
                return ci
            }

            function bC() {
                var cl = Y(),
                    ch = cl[0],
                    ci = cl[1],
                    cf = cl[2],
                    ce = cl[3],
                    cj = cl[4],
                    cg = cl[5];
                if (!w(cl[6])) {
                    cl[6] = ""
                }
                var ck = cl[6];
                return {
                    newVisitor: ch,
                    uuid: ci,
                    createTs: cf,
                    visitCount: ce,
                    currentVisitTs: cj,
                    lastVisitTs: cg,
                    lastEcommerceOrderTs: ck
                }
            }

            function aL() {
                var ch = new Date(),
                    cf = ch.getTime(),
                    ci = bC().createTs;
                var ce = parseInt(ci, 10);
                var cg = (ce * 1000) + aw - cf;
                return cg
            }

            function am(ce) {
                if (!bU) {
                    return
                }
                var cg = new Date(),
                    cf = Math.round(cg.getTime() / 1000);
                if (!w(ce)) {
                    ce = bC()
                }
                var ch = ce.uuid + "." + ce.createTs + "." + ce.visitCount + "." + cf + "." + ce.lastVisitTs + "." + ce.lastEcommerceOrderTs;
                bI(bH("id"), ch, aL(), b6, aq)
            }

            function X() {
                var ce = av(bH("ref"));
                if (ce.length) {
                    try {
                        ce = JSON2.parse(ce);
                        if (J(ce)) {
                            return ce
                        }
                    } catch (cf) {}
                }
                return ["", "", 0, ""]
            }

            function bT(cg, cf, ce) {
                bI(cg, "", -86400, cf, ce)
            }

            function bf(cf) {
                var ce = "testvalue";
                bI("test", ce, 10000, null, cf);
                if (av("test") === ce) {
                    bT("test", null, cf);
                    return true
                }
                return false
            }

            function W() {
                var ce = ao;
                ao = false;
                bT(bH("id"), b6, aq);
                bT(bH("ses"), b6, aq);
                bT(bH("cvar"), b6, aq);
                bT(bH("ref"), b6, aq);
                ao = ce
            }

            function ca(ce) {
                bU = ce;
                am()
            }

            function bR(ci) {
                if (!ci || !J(ci)) {
                    return
                }
                var ch = [];
                var cg;
                for (cg in ci) {
                    if (Object.prototype.hasOwnProperty.call(ci, cg)) {
                        ch.push(cg)
                    }
                }
                var cj = {};
                ch.sort();
                var ce = ch.length;
                var cf;
                for (cf = 0; cf < ce; cf++) {
                    cj[ch[cf]] = ci[ch[cf]]
                }
                return cj
            }

            function a4() {
                bI(bH("ses"), "*", az, b6, aq)
            }

            function aT(cg, cz, cA, ch) {
                var cy, cf = new Date(),
                    cn = Math.round(cf.getTime() / 1000),
                    ck, cx, ci = 1024,
                    cE, co, cv = ag,
                    cj = bH("ses"),
                    ct = bH("ref"),
                    cq = bH("cvar"),
                    cr = av(cj),
                    cw = X(),
                    cC = a7 || b7,
                    cl, ce;
                if (ao) {
                    W()
                }
                if (bY) {
                    return ""
                }
                var cs = bC();
                if (!w(ch)) {
                    ch = ""
                }
                var cp = u.characterSet || u.charset;
                if (!cp || cp.toLowerCase() === "utf-8") {
                    cp = null
                }
                cl = cw[0];
                ce = cw[1];
                ck = cw[2];
                cx = cw[3];
                if (!cr) {
                    var cB = az / 1000;
                    if (!cs.lastVisitTs || (cn - cs.lastVisitTs) > cB) {
                        cs.visitCount++;
                        cs.lastVisitTs = cs.currentVisitTs
                    }
                    if (!a5 || !cl.length) {
                        for (cy in aY) {
                            if (Object.prototype.hasOwnProperty.call(aY, cy)) {
                                cl = I(cC, aY[cy]);
                                if (cl.length) {
                                    break
                                }
                            }
                        }
                        for (cy in aP) {
                            if (Object.prototype.hasOwnProperty.call(aP, cy)) {
                                ce = I(cC, aP[cy]);
                                if (ce.length) {
                                    break
                                }
                            }
                        }
                    }
                    cE = b(bv);
                    co = cx.length ? b(cx) : "";
                    if (cE.length && !bs(cE) && (!a5 || !co.length || bs(co))) {
                        cx = bv
                    }
                    if (cx.length || cl.length) {
                        ck = cn;
                        cw = [cl, ce, ck, b0(cx.slice(0, ci))];
                        bI(ct, JSON2.stringify(cw), ba, b6, aq)
                    }
                }
                cg += "&idsite=" + bU + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cf.getHours() + "&m=" + cf.getMinutes() + "&s=" + cf.getSeconds() + "&url=" + l(b0(cC)) + (bv.length ? "&urlref=" + l(b0(bv)) : "") + ((aJ && aJ.length) ? "&uid=" + l(aJ) : "") + "&_id=" + cs.uuid + "&_idts=" + cs.createTs + "&_idvc=" + cs.visitCount + "&_idn=" + cs.newVisitor + (cl.length ? "&_rcn=" + l(cl) : "") + (ce.length ? "&_rck=" + l(ce) : "") + "&_refts=" + ck + "&_viewts=" + cs.lastVisitTs + (String(cs.lastEcommerceOrderTs).length ? "&_ects=" + cs.lastEcommerceOrderTs : "") + (String(cx).length ? "&_ref=" + l(b0(cx.slice(0, ci))) : "") + (cp ? "&cs=" + l(cp) : "") + "&send_image=0";
                for (cy in bV) {
                    if (Object.prototype.hasOwnProperty.call(bV, cy)) {
                        cg += "&" + cy + "=" + bV[cy]
                    }
                }
                if (cz) {
                    cg += "&data=" + l(JSON2.stringify(cz))
                } else {
                    if (an) {
                        cg += "&data=" + l(JSON2.stringify(an))
                    }
                }

                function cm(cF, cG) {
                    var cH = JSON2.stringify(cF);
                    if (cH.length > 2) {
                        return "&" + cG + "=" + l(cH)
                    }
                    return ""
                }
                var cD = bR(bh);
                var cu = bR(ab);
                cg += cm(cD, "cvar");
                cg += cm(cu, "e_cvar");
                if (ag) {
                    cg += cm(ag, "_cvar");
                    for (cy in cv) {
                        if (Object.prototype.hasOwnProperty.call(cv, cy)) {
                            if (ag[cy][0] === "" || ag[cy][1] === "") {
                                delete ag[cy]
                            }
                        }
                    }
                    if (a6) {
                        bI(cq, JSON2.stringify(ag), az, b6, aq)
                    }
                }
                if (a1) {
                    if (aI) {
                        cg += "&gt_ms=" + aI
                    } else {
                        if (f && f.timing && f.timing.requestStart && f.timing.responseEnd) {
                            cg += "&gt_ms=" + (f.timing.responseEnd - f.timing.requestStart)
                        }
                    }
                }
                cs.lastEcommerceOrderTs = w(ch) && String(ch).length ? ch : cs.lastEcommerceOrderTs;
                am(cs);
                a4();
                cg += O(cA);
                if (bp.length) {
                    cg += "&" + bp
                }
                if (q(au)) {
                    cg = au(cg)
                }
                return cg
            }

            function bL(ch, cg, cl, ci, ce, co) {
                var cj = "idgoal=0",
                    ck, cf = new Date(),
                    cm = [],
                    cn;
                if (String(ch).length) {
                    cj += "&ec_id=" + l(ch);
                    ck = Math.round(cf.getTime() / 1000)
                }
                cj += "&revenue=" + cg;
                if (String(cl).length) {
                    cj += "&ec_st=" + cl
                }
                if (String(ci).length) {
                    cj += "&ec_tx=" + ci
                }
                if (String(ce).length) {
                    cj += "&ec_sh=" + ce
                }
                if (String(co).length) {
                    cj += "&ec_dt=" + co
                }
                if (bG) {
                    for (cn in bG) {
                        if (Object.prototype.hasOwnProperty.call(bG, cn)) {
                            if (!w(bG[cn][1])) {
                                bG[cn][1] = ""
                            }
                            if (!w(bG[cn][2])) {
                                bG[cn][2] = ""
                            }
                            if (!w(bG[cn][3]) || String(bG[cn][3]).length === 0) {
                                bG[cn][3] = 0
                            }
                            if (!w(bG[cn][4]) || String(bG[cn][4]).length === 0) {
                                bG[cn][4] = 1
                            }
                            cm.push(bG[cn])
                        }
                    }
                    cj += "&ec_items=" + l(JSON2.stringify(cm))
                }
                cj = aT(cj, an, "ecommerce", ck);
                aZ(cj, bo)
            }

            function bK(ce, ci, ch, cg, cf, cj) {
                if (String(ce).length && w(ci)) {
                    bL(ce, ci, ch, cg, cf, cj)
                }
            }

            function b4(ce) {
                if (w(ce)) {
                    bL("", ce, "", "", "", "")
                }
            }

            function be(ch, ci) {
                var ce = new Date(),
                    cg = aT("action_name=" + l(V(ch || aS)), ci, "log");
                aZ(cg, bo);
                if (aj && aG && !bx) {
                    bx = true;
                    U(u, "click", bS);
                    U(u, "mouseup", bS);
                    U(u, "mousedown", bS);
                    U(u, "mousemove", bS);
                    U(u, "mousewheel", bS);
                    U(G, "DOMMouseScroll", bS);
                    U(G, "scroll", bS);
                    U(u, "keypress", bS);
                    U(u, "keydown", bS);
                    U(u, "keyup", bS);
                    U(G, "resize", bS);
                    U(G, "focus", bS);
                    U(G, "blur", bS);
                    bu = ce.getTime();
                    setTimeout(function cf() {
                        var cj;
                        ce = new Date();
                        if ((bu + aG) > ce.getTime()) {
                            if (aj < ce.getTime()) {
                                cj = aT("ping=1", ci, "ping");
                                aZ(cj, bo)
                            }
                            setTimeout(cf, aG)
                        }
                    }, aG)
                }
            }

            function aH(cg, cf) {
                var ch, ce = "(^| )(piwik[_-]" + cf;
                if (cg) {
                    for (ch = 0; ch < cg.length; ch++) {
                        ce += "|" + cg[ch]
                    }
                }
                ce += ")( |$)";
                return new RegExp(ce)
            }

            function bE(ce) {
                return (aa && ce && 0 === String(ce).indexOf(aa))
            }

            function bQ(ci, ce, cj, cf) {
                if (bE(ce)) {
                    return 0
                }
                var ch = aH(bg, "download"),
                    cg = aH(aC, "link"),
                    ck = new RegExp("\\.(" + aU.join("|") + ")([?&#]|$)", "i");
                if (cg.test(ci)) {
                    return "link"
                }
                if (cf || ch.test(ci) || ck.test(ce)) {
                    return "download"
                }
                if (cj) {
                    return 0
                }
                return "link"
            }

            function a8(cf) {
                var ce;
                ce = cf.parentNode;
                while (ce !== null && w(ce)) {
                    if (Q.isLinkElement(cf)) {
                        break
                    }
                    cf = ce;
                    ce = cf.parentNode
                }
                return cf
            }

            function bj(ci) {
                ci = a8(ci);
                if (!Q.hasNodeAttribute(ci, "href")) {
                    return
                }
                if (!w(ci.href)) {
                    return
                }
                var ch = Q.getAttributeValueFromNode(ci, "href");
                if (bE(ch)) {
                    return
                }
                var cj = ci.hostname || b(ci.href);
                var ck = cj.toLowerCase();
                var cf = ci.href.replace(cj, ck);
                var cg = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                if (!cg.test(cf)) {
                    var ce = bQ(ci.className, cf, bs(ck), Q.hasNodeAttribute(ci, "download"));
                    if (ce) {
                        return {
                            type: ce,
                            href: cf
                        }
                    }
                }
            }

            function b9(ce, cf, cg, ch) {
                var ci = m.buildInteractionRequestParams(ce, cf, cg, ch);
                if (!ci) {
                    return
                }
                return aT(ci, null, "contentInteraction")
            }

            function b8(cg, ch, cl, ce, cf) {
                if (!w(cg)) {
                    return
                }
                if (bE(cg)) {
                    return cg
                }
                var cj = m.toAbsoluteUrl(cg);
                var ci = "redirecturl=" + l(cj) + "&";
                ci += b9(ch, cl, ce, (cf || cg));
                var ck = "&";
                if (aa.indexOf("?") < 0) {
                    ck = "?"
                }
                return aa + ck + ci
            }

            function a3(ce, cf) {
                if (!ce || !cf) {
                    return false
                }
                var cg = m.findTargetNode(ce);
                if (m.shouldIgnoreInteraction(cg)) {
                    return false
                }
                cg = m.findTargetNodeNoDefault(ce);
                if (cg && !H(cg, cf)) {
                    return false
                }
                return true
            }

            function aR(cg, cf, ci) {
                if (!cg) {
                    return
                }
                var ce = m.findParentContentNode(cg);
                if (!ce) {
                    return
                }
                if (!a3(ce, cg)) {
                    return
                }
                var ch = m.buildContentBlock(ce);
                if (!ch) {
                    return
                }
                if (!ch.target && ci) {
                    ch.target = ci
                }
                return m.buildInteractionRequestParams(cf, ch.name, ch.piece, ch.target)
            }

            function aO(cf) {
                if (!ah || !ah.length) {
                    return false
                }
                var ce, cg;
                for (ce = 0; ce < ah.length; ce++) {
                    cg = ah[ce];
                    if (cg && cg.name === cf.name && cg.piece === cf.piece && cg.target === cf.target) {
                        return true
                    }
                }
                return false
            }

            function ac(ch) {
                if (!ch) {
                    return false
                }
                var ck = m.findTargetNode(ch);
                if (!ck || m.shouldIgnoreInteraction(ck)) {
                    return false
                }
                var cl = bj(ck);
                if (bW && cl && cl.type) {
                    return false
                }
                if (Q.isLinkElement(ck) && Q.hasNodeAttributeWithValue(ck, "href")) {
                    var ce = String(Q.getAttributeValueFromNode(ck, "href"));
                    if (0 === ce.indexOf("#")) {
                        return false
                    }
                    if (bE(ce)) {
                        return true
                    }
                    if (!m.isUrlToCurrentDomain(ce)) {
                        return false
                    }
                    var ci = m.buildContentBlock(ch);
                    if (!ci) {
                        return
                    }
                    var cg = ci.name;
                    var cm = ci.piece;
                    var cj = ci.target;
                    if (!Q.hasNodeAttributeWithValue(ck, m.CONTENT_TARGET_ATTR) || ck.wasContentTargetAttrReplaced) {
                        ck.wasContentTargetAttrReplaced = true;
                        cj = m.toAbsoluteUrl(ce);
                        Q.setAnyAttribute(ck, m.CONTENT_TARGET_ATTR, cj)
                    }
                    var cf = b8(ce, "click", cg, cm, cj);
                    m.setHrefAttribute(ck, cf);
                    return true
                }
                return false
            }

            function af(cf) {
                if (!cf || !cf.length) {
                    return
                }
                var ce;
                for (ce = 0; ce < cf.length; ce++) {
                    ac(cf[ce])
                }
            }

            function bi(ce) {
                return function (cf) {
                    if (!ce) {
                        return
                    }
                    var ci = m.findParentContentNode(ce);
                    var cj;
                    if (cf) {
                        cj = cf.target || cf.srcElement
                    }
                    if (!cj) {
                        cj = ce
                    }
                    if (!a3(ci, cj)) {
                        return
                    }
                    b1(bo);
                    if (Q.isLinkElement(ce) && Q.hasNodeAttributeWithValue(ce, "href") && Q.hasNodeAttributeWithValue(ce, m.CONTENT_TARGET_ATTR)) {
                        var cg = Q.getAttributeValueFromNode(ce, "href");
                        if (!bE(cg) && ce.wasContentTargetAttrReplaced) {
                            Q.setAnyAttribute(ce, m.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var cn = bj(ce);
                    if (bA && cn && cn.type) {
                        return cn.type
                    }
                    if (ac(ci)) {
                        return "href"
                    }
                    var ck = m.buildContentBlock(ci);
                    if (!ck) {
                        return
                    }
                    var ch = ck.name;
                    var co = ck.piece;
                    var cm = ck.target;
                    var cl = b9("click", ch, co, cm);
                    aZ(cl, bo);
                    return cl
                }
            }

            function aF(cg) {
                if (!cg || !cg.length) {
                    return
                }
                var ce, cf;
                for (ce = 0; ce < cg.length; ce++) {
                    cf = m.findTargetNode(cg[ce]);
                    if (cf && !cf.contentInteractionTrackingSetupDone) {
                        cf.contentInteractionTrackingSetupDone = true;
                        U(cf, "click", bi(cf))
                    }
                }
            }

            function aB(cg, ch) {
                if (!cg || !cg.length) {
                    return []
                }
                var ce, cf;
                for (ce = 0; ce < cg.length; ce++) {
                    if (aO(cg[ce])) {
                        cg.splice(ce, 1);
                        ce--
                    } else {
                        ah.push(cg[ce])
                    }
                }
                if (!cg || !cg.length) {
                    return []
                }
                af(ch);
                aF(ch);
                var ci = [];
                for (ce = 0; ce < cg.length; ce++) {
                    cf = aT(m.buildImpressionRequestParams(cg[ce].name, cg[ce].piece, cg[ce].target), undefined, "contentImpressions");
                    ci.push(cf)
                }
                return ci
            }

            function aW(cf) {
                var ce = m.collectContent(cf);
                return aB(ce, cf)
            }

            function bD(cf) {
                if (!cf || !cf.length) {
                    return []
                }
                var ce;
                for (ce = 0; ce < cf.length; ce++) {
                    if (!m.isNodeVisible(cf[ce])) {
                        cf.splice(ce, 1);
                        ce--
                    }
                }
                if (!cf || !cf.length) {
                    return []
                }
                return aW(cf)
            }

            function bO(cg, ce, cf) {
                var ch = m.buildImpressionRequestParams(cg, ce, cf);
                return aT(ch, null, "contentImpression")
            }

            function aV(ch, cf) {
                if (!ch) {
                    return
                }
                var ce = m.findParentContentNode(ch);
                var cg = m.buildContentBlock(ce);
                if (!cg) {
                    return
                }
                if (!cf) {
                    cf = "Unknown"
                }
                return b9(cf, cg.name, cg.piece, cg.target)
            }

            function by(cf, ch, ce, cg) {
                return "e_c=" + l(cf) + "&e_a=" + l(ch) + (w(ce) ? "&e_n=" + l(ce) : "") + (w(cg) ? "&e_v=" + l(cg) : "")
            }

            function al(cg, ci, ce, ch, cj) {
                if (String(cg).length === 0 || String(ci).length === 0) {
                    return false
                }
                var cf = aT(by(cg, ci, ce, ch), cj, "event");
                aZ(cf, bo)
            }

            function aN(ce, ch, cf, ci) {
                var cg = aT("search=" + l(ce) + (ch ? "&search_cat=" + l(ch) : "") + (w(cf) ? "&search_count=" + cf : ""), ci, "sitesearch");
                aZ(cg, bo)
            }

            function bm(ce, ch, cg) {
                var cf = aT("idgoal=" + ce + (ch ? "&revenue=" + ch : ""), cg, "goal");
                aZ(cf, bo)
            }

            function bP(ch, ce, cl, ck, cg) {
                var cj = ce + "=" + l(b0(ch));
                var cf = aR(cg, "click", ch);
                if (cf) {
                    cj += "&" + cf
                }
                var ci = aT(cj, cl, "link");
                aZ(ci, (ck ? 0 : bo), ck)
            }

            function bX(cf, ce) {
                if (cf !== "") {
                    return cf + ce.charAt(0).toUpperCase() + ce.slice(1)
                }
                return ce
            }

            function aM(cj) {
                var ci, ce, ch = ["", "webkit", "ms", "moz"],
                    cg;
                if (!a0) {
                    for (ce = 0; ce < ch.length; ce++) {
                        cg = ch[ce];
                        if (Object.prototype.hasOwnProperty.call(u, bX(cg, "hidden"))) {
                            if (u[bX(cg, "visibilityState")] === "prerender") {
                                ci = true
                            }
                            break
                        }
                    }
                }
                if (ci) {
                    U(u, cg + "visibilitychange", function cf() {
                        u.removeEventListener(cg + "visibilitychange", cf, false);
                        cj()
                    });
                    return
                }
                cj()
            }

            function aQ(ce) {
                if (u.readyState === "complete") {
                    ce()
                } else {
                    if (G.addEventListener) {
                        G.addEventListener("load", ce)
                    } else {
                        if (G.attachEvent) {
                            G.attachEvent("onLoad", ce)
                        }
                    }
                }
            }

            function aA(cf) {
                var ce = false;
                if (u.attachEvent) {
                    ce = u.readyState === "complete"
                } else {
                    ce = u.readyState !== "loading"
                } if (ce) {
                    cf()
                } else {
                    if (u.addEventListener) {
                        u.addEventListener("DOMContentLoaded", cf)
                    } else {
                        if (u.attachEvent) {
                            u.attachEvent("onreadystatechange", cf)
                        }
                    }
                }
            }

            function bF(ce) {
                var cf = bj(ce);
                if (cf && cf.type) {
                    cf.href = h(cf.href);
                    bP(cf.href, cf.type, undefined, null, ce)
                }
            }

            function cc(ce) {
                var cf, cg;
                ce = ce || G.event;
                cf = ce.which || ce.button;
                cg = ce.target || ce.srcElement;
                if (ce.type === "click") {
                    if (cg) {
                        bF(cg)
                    }
                } else {
                    if (ce.type === "mousedown") {
                        if ((cf === 1 || cf === 2) && cg) {
                            bk = cf;
                            at = cg
                        } else {
                            bk = at = null
                        }
                    } else {
                        if (ce.type === "mouseup") {
                            if (cf === bk && cg === at) {
                                bF(cg)
                            }
                            bk = at = null
                        }
                    }
                }
            }

            function bB(cf, ce) {
                if (ce) {
                    U(cf, "mouseup", cc, false);
                    U(cf, "mousedown", cc, false)
                } else {
                    U(cf, "click", cc, false)
                }
            }

            function bd(cf) {
                if (!bA) {
                    bA = true;
                    var cg, ce = aH(ai, "ignore"),
                        ch = u.links;
                    if (ch) {
                        for (cg = 0; cg < ch.length; cg++) {
                            if (!ce.test(ch[cg].className)) {
                                bB(ch[cg], cf)
                            }
                        }
                    }
                }
            }

            function bw(cg, ci, cj) {
                if (ay) {
                    return true
                }
                ay = true;
                var ck = false;
                var ch, cf;

                function ce() {
                    ck = true
                }
                aQ(function () {
                    function cl(cn) {
                        setTimeout(function () {
                            if (!ay) {
                                return
                            }
                            ck = false;
                            cj.trackVisibleContentImpressions();
                            cl(cn)
                        }, cn)
                    }

                    function cm(cn) {
                        setTimeout(function () {
                            if (!ay) {
                                return
                            }
                            if (ck) {
                                ck = false;
                                cj.trackVisibleContentImpressions()
                            }
                            cm(cn)
                        }, cn)
                    }
                    if (cg) {
                        ch = ["scroll", "resize"];
                        for (cf = 0; cf < ch.length; cf++) {
                            if (u.addEventListener) {
                                u.addEventListener(ch[cf], ce)
                            } else {
                                G.attachEvent("on" + ch[cf], ce)
                            }
                        }
                        cm(100)
                    }
                    if (ci && ci > 0) {
                        ci = parseInt(ci, 10);
                        cl(ci)
                    }
                })
            }

            function b2() {
                var cf, cg, ch = {
                        pdf: "application/pdf",
                        qt: "video/quicktime",
                        realp: "audio/x-pn-realaudio-plugin",
                        wma: "application/x-mplayer2",
                        dir: "application/x-director",
                        fla: "application/x-shockwave-flash",
                        java: "application/x-java-vm",
                        gears: "application/x-googlegears",
                        ag: "application/x-silverlight"
                    },
                    ce = (new RegExp("Mac OS X.*Safari/")).test(e.userAgent) ? G.devicePixelRatio || 1 : 1;
                if (!((new RegExp("MSIE")).test(e.userAgent))) {
                    if (e.mimeTypes && e.mimeTypes.length) {
                        for (cf in ch) {
                            if (Object.prototype.hasOwnProperty.call(ch, cf)) {
                                cg = e.mimeTypes[ch[cf]];
                                bV[cf] = (cg && cg.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && w(e.javaEnabled) && e.javaEnabled()) {
                        bV.java = "1"
                    }
                    if (q(G.GearsFactory)) {
                        bV.gears = "1"
                    }
                    bV.cookie = ae()
                }
                bV.res = K.width * ce + "x" + K.height * ce
            }
            b2();
            bl();
            am();
            return {
                getVisitorId: function () {
                    return bC().uuid
                }, getVisitorInfo: function () {
                    return Y()
                }, getAttributionInfo: function () {
                    return X()
                }, getAttributionCampaignName: function () {
                    return X()[0]
                }, getAttributionCampaignKeyword: function () {
                    return X()[1]
                }, getAttributionReferrerTimestamp: function () {
                    return X()[2]
                }, getAttributionReferrerUrl: function () {
                    return X()[3]
                }, setTrackerUrl: function (ce) {
                    aa = ce
                }, getTrackerUrl: function () {
                    return aa
                }, getSiteId: function () {
                    return bU
                }, setSiteId: function (ce) {
                    ca(ce)
                }, setUserId: function (ce) {
                    if (!w(ce) || !ce.length) {
                        return
                    }
                    aJ = ce;
                    a2 = aX(aJ).substr(0, 16)
                }, getUserId: function () {
                    return aJ
                }, setCustomData: function (ce, cf) {
                    if (J(ce)) {
                        an = ce
                    } else {
                        if (!an) {
                            an = {}
                        }
                        an[ce] = cf
                    }
                }, getCustomData: function () {
                    return an
                }, setCustomRequestProcessing: function (ce) {
                    au = ce
                }, appendToTrackingUrl: function (ce) {
                    bp = ce
                }, getRequest: function (ce) {
                    return aT(ce)
                }, addPlugin: function (ce, cf) {
                    a[ce] = cf
                }, setCustomVariable: function (cf, ce, ci, cg) {
                    var ch;
                    if (!w(cg)) {
                        cg = "visit"
                    }
                    if (!w(ce)) {
                        return
                    }
                    if (!w(ci)) {
                        ci = ""
                    }
                    if (cf > 0) {
                        ce = !n(ce) ? String(ce) : ce;
                        ci = !n(ci) ? String(ci) : ci;
                        ch = [ce.slice(0, bZ), ci.slice(0, bZ)];
                        if (cg === "visit" || cg === 2) {
                            Z();
                            ag[cf] = ch
                        } else {
                            if (cg === "page" || cg === 3) {
                                bh[cf] = ch
                            } else {
                                if (cg === "event") {
                                    ab[cf] = ch
                                }
                            }
                        }
                    }
                }, getCustomVariable: function (cf, cg) {
                    var ce;
                    if (!w(cg)) {
                        cg = "visit"
                    }
                    if (cg === "page" || cg === 3) {
                        ce = bh[cf]
                    } else {
                        if (cg === "event") {
                            ce = ab[cf]
                        } else {
                            if (cg === "visit" || cg === 2) {
                                Z();
                                ce = ag[cf]
                            }
                        }
                    } if (!w(ce) || (ce && ce[0] === "")) {
                        return false
                    }
                    return ce
                }, deleteCustomVariable: function (ce, cf) {
                    if (this.getCustomVariable(ce, cf)) {
                        this.setCustomVariable(ce, "", "", cf)
                    }
                }, storeCustomVariablesInCookie: function () {
                    a6 = true
                }, setLinkTrackingTimer: function (ce) {
                    bo = ce
                }, setDownloadExtensions: function (ce) {
                    if (n(ce)) {
                        ce = ce.split("|")
                    }
                    aU = ce
                }, addDownloadExtensions: function (cf) {
                    var ce;
                    if (n(cf)) {
                        cf = cf.split("|")
                    }
                    for (ce = 0; ce < cf.length; ce++) {
                        aU.push(cf[ce])
                    }
                }, removeDownloadExtensions: function (cg) {
                    var cf, ce = [];
                    if (n(cg)) {
                        cg = cg.split("|")
                    }
                    for (cf = 0; cf < aU.length; cf++) {
                        if (z(cg, aU[cf]) === -1) {
                            ce.push(aU[cf])
                        }
                    }
                    aU = ce
                }, setDomains: function (ce) {
                    bq = n(ce) ? [ce] : ce;
                    bq.push(bN)
                }, setIgnoreClasses: function (ce) {
                    ai = n(ce) ? [ce] : ce
                }, setRequestMethod: function (ce) {
                    bt = ce || br
                }, setRequestContentType: function (ce) {
                    aK = ce || bc
                }, setReferrerUrl: function (ce) {
                    bv = ce
                }, setCustomUrl: function (ce) {
                    a7 = bM(b7, ce)
                }, setDocumentTitle: function (ce) {
                    aS = ce
                }, setAPIUrl: function (ce) {
                    ax = ce
                }, setDownloadClasses: function (ce) {
                    bg = n(ce) ? [ce] : ce
                }, setLinkClasses: function (ce) {
                    aC = n(ce) ? [ce] : ce
                }, setCampaignNameKey: function (ce) {
                    aY = n(ce) ? [ce] : ce
                }, setCampaignKeywordKey: function (ce) {
                    aP = n(ce) ? [ce] : ce
                }, discardHashTag: function (ce) {
                    ak = ce
                }, setCookieNamePrefix: function (ce) {
                    b5 = ce;
                    ag = ar()
                }, setCookieDomain: function (ce) {
                    var cf = y(ce);
                    if (bf(cf)) {
                        aq = cf;
                        bl()
                    }
                }, setCookiePath: function (ce) {
                    b6 = ce;
                    bl()
                }, setVisitorCookieTimeout: function (ce) {
                    aw = ce * 1000
                }, setSessionCookieTimeout: function (ce) {
                    az = ce * 1000
                }, setReferralCookieTimeout: function (ce) {
                    ba = ce * 1000
                }, setConversionAttributionFirstReferrer: function (ce) {
                    a5 = ce
                }, disableCookies: function () {
                    ao = true;
                    bV.cookie = "0"
                }, deleteCookies: function () {
                    W()
                }, setDoNotTrack: function (cf) {
                    var ce = e.doNotTrack || e.msDoNotTrack;
                    bY = cf && (ce === "yes" || ce === "1");
                    if (bY) {
                        this.disableCookies()
                    }
                }, addListener: function (cf, ce) {
                    bB(cf, ce)
                }, enableLinkTracking: function (ce) {
                    bW = true;
                    if (p) {
                        bd(ce)
                    } else {
                        E.push(function () {
                            bd(ce)
                        })
                    }
                }, enableJSErrorTracking: function () {
                    if (cb) {
                        return
                    }
                    cb = true;
                    var ce = G.onerror;
                    G.onerror = function (cj, ch, cg, ci, cf) {
                        aM(function () {
                            var ck = "JavaScript Errors";
                            var cl = ch + ":" + cg;
                            if (ci) {
                                cl += ":" + ci
                            }
                            al(ck, cl, cj)
                        });
                        if (ce) {
                            return ce(cj, ch, cg, ci, cf)
                        }
                        return false
                    }
                }, disablePerformanceTracking: function () {
                    a1 = false
                }, setGenerationTimeMs: function (ce) {
                    aI = parseInt(ce, 10)
                }, setHeartBeatTimer: function (cg, cf) {
                    var ce = new Date();
                    aj = ce.getTime() + cg * 1000;
                    aG = cf * 1000
                }, killFrame: function () {
                    if (G.location !== G.top.location) {
                        G.top.location = G.location
                    }
                }, redirectFile: function (ce) {
                    if (G.location.protocol === "file:") {
                        G.location = ce
                    }
                }, setCountPreRendered: function (ce) {
                    a0 = ce
                }, trackGoal: function (ce, cg, cf) {
                    aM(function () {
                        bm(ce, cg, cf)
                    })
                }, trackLink: function (cf, ce, ch, cg) {
                    aM(function () {
                        bP(cf, ce, ch, cg)
                    })
                }, trackPageView: function (ce, cf) {
                    ah = [];
                    if (A(bU)) {
                        aM(function () {
                            M(aa, ax, bU)
                        })
                    } else {
                        aM(function () {
                            be(ce, cf)
                        })
                    }
                }, trackAllContentImpressions: function () {
                    if (A(bU)) {
                        return
                    }
                    aM(function () {
                        aA(function () {
                            var ce = m.findContentNodes();
                            var cf = aW(ce);
                            ap(cf, bo)
                        })
                    })
                }, trackVisibleContentImpressions: function (ce, cf) {
                    if (A(bU)) {
                        return
                    }
                    if (!w(ce)) {
                        ce = true
                    }
                    if (!w(cf)) {
                        cf = 750
                    }
                    bw(ce, cf, this);
                    aM(function () {
                        aQ(function () {
                            var cg = m.findContentNodes();
                            var ch = bD(cg);
                            ap(ch, bo)
                        })
                    })
                }, trackContentImpression: function (cg, ce, cf) {
                    if (A(bU)) {
                        return
                    }
                    if (!cg) {
                        return
                    }
                    ce = ce || "Unknown";
                    aM(function () {
                        var ch = bO(cg, ce, cf);
                        aZ(ch, bo)
                    })
                }, trackContentImpressionsWithinNode: function (ce) {
                    if (A(bU) || !ce) {
                        return
                    }
                    aM(function () {
                        if (ay) {
                            aQ(function () {
                                var cf = m.findContentNodesWithinNode(ce);
                                var cg = bD(cf);
                                ap(cg, bo)
                            })
                        } else {
                            aA(function () {
                                var cf = m.findContentNodesWithinNode(ce);
                                var cg = aW(cf);
                                ap(cg, bo)
                            })
                        }
                    })
                }, trackContentInteraction: function (cg, ch, ce, cf) {
                    if (A(bU)) {
                        return
                    }
                    if (!cg || !ch) {
                        return
                    }
                    ce = ce || "Unknown";
                    aM(function () {
                        var ci = b9(cg, ch, ce, cf);
                        aZ(ci, bo)
                    })
                }, trackContentInteractionNode: function (cf, ce) {
                    if (A(bU) || !cf) {
                        return
                    }
                    aM(function () {
                        var cg = aV(cf, ce);
                        aZ(cg, bo)
                    })
                }, trackEvent: function (cf, ch, ce, cg) {
                    aM(function () {
                        al(cf, ch, ce, cg)
                    })
                }, trackSiteSearch: function (ce, cg, cf) {
                    aM(function () {
                        aN(ce, cg, cf)
                    })
                }, setEcommerceView: function (ch, ce, cg, cf) {
                    if (!w(cg) || !cg.length) {
                        cg = ""
                    } else {
                        if (cg instanceof Array) {
                            cg = JSON2.stringify(cg)
                        }
                    }
                    bh[5] = ["_pkc", cg];
                    if (w(cf) && String(cf).length) {
                        bh[2] = ["_pkp", cf]
                    }
                    if ((!w(ch) || !ch.length) && (!w(ce) || !ce.length)) {
                        return
                    }
                    if (w(ch) && ch.length) {
                        bh[3] = ["_pks", ch]
                    }
                    if (!w(ce) || !ce.length) {
                        ce = ""
                    }
                    bh[4] = ["_pkn", ce]
                }, addEcommerceItem: function (ci, ce, cg, cf, ch) {
                    if (ci.length) {
                        bG[ci] = [ci, ce, cg, cf, ch]
                    }
                }, trackEcommerceOrder: function (ce, ci, ch, cg, cf, cj) {
                    bK(ce, ci, ch, cg, cf, cj)
                }, trackEcommerceCartUpdate: function (ce) {
                    b4(ce)
                }
            }
        }

        function v() {
            return {
                push: R
            }
        }
        U(G, "beforeunload", S, false);
        o();
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        L = new D();
        var r = {
            setTrackerUrl: 1,
            setAPIUrl: 1,
            setUserId: 1,
            setSiteId: 1,
            disableCookies: 1,
            enableLinkTracking: 1
        };
        var d;
        for (t = 0; t < _paq.length; t++) {
            d = _paq[t][0];
            if (r[d]) {
                R(_paq[t]);
                delete _paq[t];
                if (r[d] > 1) {
                    if (console !== undefined && console && console.error) {
                        console.error("The method " + d + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                    }
                }
                r[d]++
            }
        }
        for (t = 0; t < _paq.length; t++) {
            if (_paq[t]) {
                R(_paq[t])
            }
        }
        _paq = new v();
        c = {
            addPlugin: function (W, X) {
                a[W] = X
            }, getTracker: function (W, X) {
                if (!w(X)) {
                    X = this.getAsyncTracker().getSiteId()
                }
                if (!w(W)) {
                    W = this.getAsyncTracker().getTrackerUrl()
                }
                return new D(W, X)
            }, getAsyncTracker: function () {
                return L
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function () {
                return c
            })
        }
        return c
    }())
}
if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit()
}(function () {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function (b, f, d, g) {
        function a(h) {
            try {
                return eval("piwik_" + h)
            } catch (i) {}
            return
        }
        var c, e = Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function (i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    };
};