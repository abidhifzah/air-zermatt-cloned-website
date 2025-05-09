! function(e) {
    "use strict";

    function n(e, n, i) {
        "addEventListener" in window ? e.addEventListener(n, i, !1) : "attachEvent" in window && e.attachEvent("on" + n, i)
    }

    function i(e, n, i) {
        "removeEventListener" in window ? e.removeEventListener(n, i, !1) : "detachEvent" in window && e.detachEvent("on" + n, i)
    }

    function t() {
        var e, n = ["moz", "webkit", "o", "ms"];
        for (e = 0; e < n.length && !A; e += 1) A = window[n[e] + "RequestAnimationFrame"];
        A || r("setup", "RequestAnimationFrame not supported")
    }

    function o(e) {
        return q[e] ? q[e].log : O
    }

    function r(e, n) {
        u("log", e, n, o(e))
    }

    function a(e, n) {
        u("info", e, n, o(e))
    }

    function c(e, n) {
        u("warn", e, n, !0)
    }

    function u(e, n, i, t) {
        !0 === t && "object" == typeof window.console
    }

    function s(e) {
        function t() {
            function e() {
                h(Q), m(X), A("resizedCallback", Q)
            }
            u("Height"), u("Width"), b(e, Q, "init")
        }

        function o() {
            var e = J.substr(S).split(":");
            return {
                iframe: q[e[0]] && q[e[0]].iframe,
                id: e[0],
                height: e[1],
                width: e[2],
                type: e[3]
            }
        }

        function u(e) {
            var n = Number(q[X]["max" + e]),
                i = Number(q[X]["min" + e]),
                t = e.toLowerCase(),
                o = Number(Q[t]);
            r(X, "Checking " + t + " is in range " + i + "-" + n), i > o && (o = i, r(X, "Set " + t + " to min value")), o > n && (o = n, r(X, "Set " + t + " to max value")), Q[t] = "" + o
        }

        function s() {
            function n() {
                function e() {
                    var e = 0,
                        n = !1;
                    for (r(X, "Checking connection is from allowed list of origins: " + t); e < t.length; e++)
                        if (t[e] === i) {
                            n = !0;
                            break
                        }
                    return n
                }

                function n() {
                    var e = q[X] && q[X].remoteHost;
                    return r(X, "Checking connection is from: " + e), i === e
                }
                return t.constructor === Array ? e() : n()
            }
            var i = e.origin,
                t = q[X] && q[X].checkOrigin;
            if (t && "" + i != "null" && !n()) throw new Error("Unexpected message received from: " + i + " for " + Q.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }

        function v() {
            return H === ("" + J).substr(0, S) && J.substr(S).split(":")[0] in q
        }

        function M() {
            var e = Q.type in {
                "true": 1,
                "false": 1,
                undefined: 1
            };
            return e && r(X, "Ignoring init message from meta parent page"), e
        }

        function F(e) {
            return J.substr(J.indexOf(":") + P + e)
        }

        function x(e) {
            r(X, "MessageCallback passed: {iframe: " + Q.iframe.id + ", message: " + e + "}"), A("messageCallback", {
                iframe: Q.iframe,
                message: JSON.parse(e)
            }), r(X, "--")
        }

        function z() {
            var e = document.body.getBoundingClientRect(),
                n = Q.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: n.height,
                iframeWidth: n.width,
                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                offsetTop: parseInt(n.top - e.top, 10),
                offsetLeft: parseInt(n.left - e.left, 10),
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset
            })
        }

        function I(e, n) {
            function i() {
                p("Send Page Info", "pageInfo:" + z(), e, n)
            }
            k(i, 32)
        }

        function R() {
            function e(e, n) {
                function i() {
                    q[a] ? I(q[a].iframe, a) : t()
                }["scroll", "resize"].forEach(function(t) {
                    r(a, e + t + " listener for sendPageInfo"), n(window, t, i)
                })
            }

            function t() {
                e("Remove ", i)
            }

            function o() {
                e("Add ", n)
            }
            var a = X;
            o(), q[a] && (q[a].stopPageInfo = t)
        }

        function C() {
            q[X] && q[X].stopPageInfo && (q[X].stopPageInfo(), delete q[X].stopPageInfo)
        }

        function E() {
            var e = !0;
            return null === Q.iframe && (c(X, "IFrame (" + Q.id + ") not found"), e = !1), e
        }

        function T(e) {
            var n = e.getBoundingClientRect();
            return l(X), {
                x: Math.floor(Number(n.left) + Number(j.x)),
                y: Math.floor(Number(n.top) + Number(j.y))
            }
        }

        function O(e) {
            function n() {
                j = a, W(), r(X, "--")
            }

            function i() {
                return {
                    x: Number(Q.width) + o.x,
                    y: Number(Q.height) + o.y
                }
            }

            function t() {
                window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](a.x, a.y) : c(X, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var o = e ? T(Q.iframe) : {
                    x: 0,
                    y: 0
                },
                a = i();
            r(X, "Reposition requested from iFrame (offset x:" + o.x + " y:" + o.y + ")"), window.top !== window.self ? t() : n()
        }

        function W() {
            !1 !== A("scrollCallback", j) ? m(X) : g()
        }

        function N(e) {
            function n() {
                var e = T(a);
                r(X, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y), j = {
                    x: e.x,
                    y: e.y
                }, W(), r(X, "--")
            }

            function i() {
                window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : r(X, "In page link #" + t + " not found and window.parentIFrame not found")
            }
            var t = e.split("#")[1] || "",
                o = decodeURIComponent(t),
                a = document.getElementById(o) || document.getElementsByName(o)[0];
            a ? n() : window.top !== window.self ? i() : r(X, "In page link #" + t + " not found")
        }

        function A(e, n) {
            return f(X, e, n)
        }

        function L() {
            switch (q[X] && q[X].firstRun && D(), Q.type) {
                case "close":
                    q[X].closeRequestCallback ? f(X, "closeRequestCallback", q[X].iframe) : d(Q.iframe);
                    break;
                case "message":
                    x(F(6));
                    break;
                case "scrollTo":
                    O(!1);
                    break;
                case "scrollToOffset":
                    O(!0);
                    break;
                case "pageInfo":
                    I(q[X] && q[X].iframe, X), R();
                    break;
                case "pageInfoStop":
                    C();
                    break;
                case "inPageLink":
                    N(F(9));
                    break;
                case "reset":
                    w(Q);
                    break;
                case "init":
                    t(), A("initCallback", Q.iframe);
                    break;
                default:
                    t()
            }
        }

        function B(e) {
            var n = !0;
            return q[e] || (n = !1, c(Q.type + " No settings for " + e + ". Message was: " + J)), n
        }

        function U() {
            for (var e in q) p("iFrame requested init", y(e), document.getElementById(e), e)
        }

        function D() {
            q[X] && (q[X].firstRun = !1)
        }
        var J = e.data,
            Q = {},
            X = null;
        "[iFrameResizerChild]Ready" === J ? U() : v() ? (Q = o(), X = V = Q.id, q[X] && (q[X].loaded = !0), !M() && B(X) && (r(X, "Received: " + J), E() && s() && L())) : a(X, "Ignored: " + J)
    }

    function f(e, n, i) {
        var t = null,
            o = null;
        if (q[e]) {
            if (t = q[e][n], "function" != typeof t) throw new TypeError(n + " on iFrame[" + e + "] is not a function");
            o = t(i)
        }
        return o
    }

    function d(e) {
        var n = e.id;
        r(n, "Removing iFrame: " + n), e.parentNode && e.parentNode.removeChild(e), f(n, "closedCallback", n), r(n, "--"), delete q[n]
    }

    function l(n) {
        null === j && (j = {
            x: window.pageXOffset !== e ? window.pageXOffset : document.documentElement.scrollLeft,
            y: window.pageYOffset !== e ? window.pageYOffset : document.documentElement.scrollTop
        }, r(n, "Get page position: " + j.x + "," + j.y))
    }

    function m(e) {
        null !== j && (window.scrollTo(j.x, j.y), r(e, "Set page position: " + j.x + "," + j.y), g())
    }

    function g() {
        j = null
    }

    function w(e) {
        function n() {
            h(e), p("reset", "reset", e.iframe, e.id)
        }
        r(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), l(e.id), b(n, e, "reset")
    }

    function h(e) {
        function n(n) {
            e.iframe.style[n] = e[n] + "px", r(e.id, "IFrame (" + o + ") " + n + " set to " + e[n] + "px")
        }

        function i(n) {
            W || "0" !== e[n] || (W = !0, r(o, "Hidden iFrame detected, creating visibility listener"), M())
        }

        function t(e) {
            n(e), i(e)
        }
        var o = e.iframe.id;
        q[o] && (q[o].sizeHeight && t("height"), q[o].sizeWidth && t("width"))
    }

    function b(e, n, i) {
        i !== n.type && A ? (r(n.id, "Requesting animation frame"), A(e)) : e()
    }

    function p(e, n, i, t, o) {
        function a() {
            var o = q[t] && q[t].targetOrigin;
            r(t, "[" + e + "] Sending msg to iframe[" + t + "] (" + n + ") targetOrigin: " + o), i.contentWindow.postMessage(H + n, o)
        }

        function u() {
            c(t, "[" + e + "] IFrame(" + t + ") not found")
        }

        function s() {
            i && "contentWindow" in i && null !== i.contentWindow ? a() : u()
        }

        function f() {
            function e() {
                !q[t] || q[t].loaded || d || (d = !0, c(t, "IFrame has not responded within " + q[t].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
            }
            o && q[t] && q[t].warningTimeout && (q[t].msgTimeout = setTimeout(e, q[t].warningTimeout))
        }
        var d = !1;
        t = t || i.id, q[t] && (s(), f())
    }

    function y(e) {
        return e + ":" + q[e].bodyMarginV1 + ":" + q[e].sizeWidth + ":" + q[e].log + ":" + q[e].interval + ":" + q[e].enablePublicMethods + ":" + q[e].autoResize + ":" + q[e].bodyMargin + ":" + q[e].heightCalculationMethod + ":" + q[e].bodyBackground + ":" + q[e].bodyPadding + ":" + q[e].tolerance + ":" + q[e].inPageLinks + ":" + q[e].resizeFrom + ":" + q[e].widthCalculationMethod
    }

    function v(i, t) {
        function o() {
            function e(e) {
                1 / 0 !== q[k][e] && 0 !== q[k][e] && (i.style[e] = q[k][e] + "px", r(k, "Set " + e + " = " + q[k][e] + "px"))
            }

            function n(e) {
                if (q[k]["min" + e] > q[k]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
            }
            n("Height"), n("Width"), e("maxHeight"), e("minHeight"), e("maxWidth"), e("minWidth")
        }

        function a() {
            var e = t && t.id || U.id + T++;
            return null !== document.getElementById(e) && (e += T++), e
        }

        function c(e) {
            return V = e, "" === e && (i.id = e = a(), O = (t || {}).log, V = e, r(e, "Added missing iframe ID: " + e + " (" + i.src + ")")), e
        }

        function u() {
            switch (r(k, "IFrame scrolling " + (q[k] && q[k].scrolling ? "enabled" : "disabled") + " for " + k), i.style.overflow = !1 === (q[k] && q[k].scrolling) ? "hidden" : "auto", q[k] && q[k].scrolling) {
                case !0:
                    i.scrolling = "yes";
                    break;
                case !1:
                    i.scrolling = "no";
                    break;
                default:
                    i.scrolling = q[k] ? q[k].scrolling : "no"
            }
        }

        function s() {
            ("number" == typeof(q[k] && q[k].bodyMargin) || "0" === (q[k] && q[k].bodyMargin)) && (q[k].bodyMarginV1 = q[k].bodyMargin, q[k].bodyMargin = "" + q[k].bodyMargin + "px")
        }

        function f() {
            var e = q[k] && q[k].firstRun,
                n = q[k] && q[k].heightCalculationMethod in L;
            !e && n && w({
                iframe: i,
                height: 0,
                width: 0,
                type: "init"
            })
        }

        function l() {
            Function.prototype.bind && q[k] && (q[k].iframe.iFrameResizer = {
                close: d.bind(null, q[k].iframe),
                resize: p.bind(null, "Window resize", "resize", q[k].iframe),
                moveToAnchor: function(e) {
                    p("Move to anchor", "moveToAnchor:" + e, q[k].iframe, k)
                },
                sendMessage: function(e) {
                    e = JSON.stringify(e), p("Send Message", "message:" + e, q[k].iframe, k)
                }
            })
        }

        function m(t) {
            function o() {
                p("iFrame.onload", t, i, e, !0), f()
            }
            n(i, "load", o), p("init", t, i, e, !0)
        }

        function g(e) {
            if ("object" != typeof e) throw new TypeError("Options is not an object")
        }

        function h(e) {
            for (var n in U) U.hasOwnProperty(n) && (q[k][n] = e.hasOwnProperty(n) ? e[n] : U[n])
        }

        function b(e) {
            return "" === e || "file://" === e ? "*" : e
        }

        function v(e) {
            e = e || {}, q[k] = {
                firstRun: !0,
                iframe: i,
                remoteHost: i.src.split("/").slice(0, 3).join("/")
            }, g(e), h(e), q[k] && (q[k].targetOrigin = !0 === q[k].checkOrigin ? b(q[k].remoteHost) : "*")
        }
        var k = c(i.id);
        v(t), u(), o(), s(), m(y(k)), l()
    }

    function k(e, n) {
        null === B && (B = setTimeout(function() {
            B = null, e()
        }, n))
    }

    function M() {
        function e() {
            function e(e) {
                function n(n) {
                    return "0px" === (q[e] && q[e].iframe.style[n])
                }

                function i(e) {
                    return null !== e.offsetParent
                }
                q[e] && i(q[e].iframe) && (n("height") || n("width")) && p("Visibility change", "resize", q[e].iframe, e)
            }
            for (var n in q) e(n)
        }

        function n(n) {
            r("window", "Mutation observed: " + n[0].target + " " + n[0].type), k(e, 16)
        }

        function i() {
            var e = document.querySelector("body"),
                i = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                },
                o = new t(n);
            o.observe(e, i)
        }
        var t = window.MutationObserver || window.WebKitMutationObserver;
        t && i()
    }

    function F(e) {
        function n() {
            z("Window " + e, "resize")
        }
        r("window", "Trigger event: " + e), k(n, 16)
    }

    function x() {
        function e() {
            z("Tab Visable", "resize")
        }
        "hidden" !== document.visibilityState && (r("document", "Trigger event: Visiblity change"), k(e, 16))
    }

    function z(e, n) {
        function i(e) {
            return q[e] && "parent" === q[e].resizeFrom && q[e].autoResize && !q[e].firstRun
        }
        for (var t in q) i(t) && p(e, n, document.getElementById(t), t)
    }

    function I() {
        n(window, "message", s), n(window, "resize", function() {
            F("resize")
        }), n(document, "visibilitychange", x), n(document, "-webkit-visibilitychange", x), n(window, "focusin", function() {
            F("focus")
        }), n(window, "focus", function() {
            F("focus")
        })
    }

    function R(e) {
        try {
            return e instanceof HTMLElement
        } catch (n) {
            return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
        }
    }

    function C() {
        function n(e, n) {
            function i() {
                if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
            }
            R(e) && (n = e, e = {}), n && (i(), v(n, e), o.push(n))
        }

        function i(e) {
            e && e.enablePublicMethods && c("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
        }
        var o;
        return t(), I(),
            function(t, r) {
                switch (o = [], i(t), typeof r) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(r || "iframe"), n.bind(e, t));
                        break;
                    case "object":
                        n(t, r);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof r + ")")
                }
                return o
            }
    }

    function E(e) {
        e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function(e) {
            function n(n, i) {
                v(i, e)
            }
            return this.filter("iframe").each(n).end()
        }) : a("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    if ("undefined" != typeof window) {
        var T = 0,
            O = !1,
            W = !1,
            N = "message",
            P = N.length,
            H = "[iFrameSizer]",
            S = H.length,
            j = null,
            A = window.requestAnimationFrame,
            L = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            },
            q = {},
            B = null,
            V = "Host Page",
            U = {
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !1,
                inPageLinks: !1,
                enablePublicMethods: !0,
                heightCalculationMethod: "bodyOffset",
                id: "iFrameResizer",
                interval: 32,
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                resizeFrom: "parent",
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: "scroll",
                closedCallback: function() {},
                initCallback: function() {},
                messageCallback: function() {
                    c("MessageCallback function not defined")
                },
                resizedCallback: function() {},
                scrollCallback: function() {
                    return !0
                }
            };
        window.jQuery && E(window.jQuery), window.iFrameResize = window.iFrameResize || C()
    }
}();