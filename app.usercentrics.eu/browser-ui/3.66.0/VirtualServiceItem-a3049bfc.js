import {
    h as e,
    bK as t,
    aE as i,
    y as o,
    bL as n,
    bp as r,
    aN as a,
    aO as l,
    aB as s,
    aP as d,
    aQ as c,
    aR as u,
    g as p,
    by as h,
    bM as g,
    aT as m,
    bN as f,
    bO as b,
    bA as y,
    br as v,
    bP as x,
    bE as w,
    bQ as C,
    aJ as T,
    aG as k,
    bR as L,
    ax as S,
    bC as E,
    bS as I,
    bT as A,
    bs as R,
    aI as z,
    bU as O,
    bV as P,
    bW as N,
    bX as $,
    R as _,
    bY as D,
    bZ as B,
    aD as M,
    aS as H,
    b_ as F,
    b$ as j,
    c0 as G,
    c1 as V,
    c2 as U,
    c3 as W,
    bw as K,
    c4 as X,
    c5 as Y,
    c6 as Z,
    c7 as q,
    aC as J,
    aH as Q,
    c8 as ee,
    bJ as te,
    bt as ie,
    at as oe,
    bo as ne,
    c9 as re,
    b9 as ae,
    ca as le,
    cb as se,
    cc as de,
    bz as ce,
    bx as ue,
    aK as pe,
    bD as he,
    bI as ge,
    cd as me,
    ce as fe,
    cf as be,
    cg as ye,
    b2 as ve,
    ch as xe,
    ci as we,
    cj as Ce,
    ck as Te,
    cl as ke,
    bv as Le,
    cm as Se,
    cn as Ee,
    co as Ie,
    cp as Ae,
    cq as Re,
    cr as ze,
    cs as Oe,
    ct as Pe,
    cu as Ne,
    cv as $e,
    bq as _e
} from "./index.module.js";
const De = (t, i) => {
        const [o, n] = e(new Array(t).fill(i)), a = r(((e, t) => {
            o[e] !== t && n((i => {
                const o = i.slice();
                return o[e] = t, o
            }))
        }), [o]);
        return {
            getItemSize: r((e => o[e]), [o]),
            itemSize: o,
            setItemSize: a
        }
    },
    Be = ({
        itemRef: r,
        index: a,
        getItemSize: l,
        setItemSize: s
    }) => {
        var d;
        const [c, u] = e(t), {
            previousLanguage: p,
            currentLanguage: h
        } = i();
        o((() => {
            r.current && setTimeout((() => {
                var e;
                const i = null === (e = r.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height;
                i && c === t && (u(i), s(a, i))
            }), 200)
        }), []), n((() => {
            let e;
            var i;
            c === t || "" !== h && h !== p ? (e = null === (i = r.current) || void 0 === i ? void 0 : i.getBoundingClientRect().height, e && (u(e), s(a, e))) : e = l(a)
        }), [h, null === (d = r.current) || void 0 === d ? void 0 : d.offsetHeight]);
        const g = () => {
            var e;
            const t = null == r || null === (e = r.current) || void 0 === e ? void 0 : e.offsetHeight;
            t && s(a, t)
        };
        return o((() => {
            const e = () => {
                g()
            };
            return window.addEventListener("resize", e, !0), () => {
                window.removeEventListener("resize", e, !0)
            }
        }), []), {
            updateComponentSize: g
        }
    };

function Me({
    targetKey: t
}) {
    const [i, n] = e(!1), a = r((({
        key: e
    }) => {
        e === t && n(!0)
    }), [t]), l = r((({
        key: e
    }) => {
        e === t && n(!1)
    }), [t]);
    return o((() => (window.addEventListener("keydown", a), window.addEventListener("keyup", l), () => {
        window.removeEventListener("keydown", a), window.removeEventListener("keyup", l)
    })), [a, l]), i
}
var He = a.button(["align-items:center;content:none;background:", ";border:none;border-radius:", ";color:", ";display:flex;justify-content:center;flex:1 1 auto;font-size:", ";font-weight:", ";padding:", ";width:", ";&:focus{background:", ";}&:focus-visible{outline-style:auto;outline-width:5px;}&:hover{background:", ";", ";}", "{padding:", ";}", "{padding:", ";}"], (({
    backgroundColor: e
}) => e.default), (({
    theme: e
}) => e.ui.buttons.borderRadius), (({
    textColor: e
}) => e), (({
    theme: e
}) => e.typography.size.medium), (({
    theme: e
}) => e.typography.weight.bold), (({
    theme: e
}) => `${e.spacing.base.sm} ${e.spacing.base.md}`), (({
    fullWidth: e
}) => e ? "100%" : "auto"), (({
    backgroundColor: e
}) => e.dark), (({
    backgroundColor: e
}) => e.dark), (({
    buttonHoverRules: e
}) => e), l.mobilePortrait, (({
    theme: e
}) => `${e.spacing.mobile.md} ${e.spacing.mobile.md}`), l.mobileLandscape, (({
    theme: e
}) => `${e.spacing.mobile.md} ${e.spacing.mobile.md}`));
const Fe = s((({
        ariaLabel: e = "",
        backgroundColor: t,
        buttonRef: i,
        buttonTypeRules: o = null,
        buttonHoverRules: n = null,
        disabled: r = !1,
        fullWidth: a = !0,
        label: l,
        marginStyle: s,
        onClick: f,
        testid: b,
        textColor: y
    }) => {
        const v = d(),
            {
                rules: x
            } = c(u.BUTTONS),
            {
                rules: w
            } = c(u.BUTTONS, !0);
        return p(He, h({}, e && "" !== e && {
            "aria-label": e
        }, {
            role: "button",
            backgroundColor: t,
            disabled: r,
            "data-testid": b,
            fullWidth: a,
            onClick: e => {
                f && setTimeout((() => f(e)), 0)
            },
            ref: i,
            textColor: (null == y ? void 0 : y.default) || g(t.default, v.typography.color),
            style: m(m(m({}, x), o), !(null != x && x.margin) && !!s && {
                margin: s
            }),
            buttonHoverRules: m(m({}, w), n)
        }), l)
    })),
    je = a.button(["align-items:center;border:none;display:flex;background:none;justify-content:center;height:", ";min-height:", ";min-width:", ";outline:none;padding:0;width:", ";", "{height:", ";width:", ";}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        size: e
    }) => "small" === e ? "16px" : "20px"), (({
        size: e
    }) => "small" === e ? "16px" : "20px"), (({
        size: e
    }) => "small" === e ? "32px" : "40px"), (({
        size: e
    }) => "small" === e ? "32px" : "40px"), l.mobilePortrait, (({
        size: e
    }) => "small" === e ? "16px" : "24px"), (({
        size: e
    }) => "small" === e ? "32px" : "48px")),
    Ge = a.label(["color:", ";cursor:pointer;display:inline-flex;flex:1 1 auto;flex-wrap:wrap;font-weight:", ";", ";white-space:nowrap;", "{align-items:center;", ";+ div{", ";}}"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.weight.regular), (({
        hideToggle: e,
        theme: t
    }) => f(t, b.MARGIN_RIGHT, e ? 0 : t.spacing.base.xxs)), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.mobile.xl)), (({
        theme: e
    }) => f(e, b.MARGIN_LEFT, e.spacing.mobile.xl))),
    Ve = a.div(["align-items:center;display:flex;width:100%;&:not(:last-child){", ";}", "{&:not(:last-child){", ";}}"], (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xs)), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, 0))),
    Ue = a.div(["display:flex;flex-direction:column;flex:1;"]),
    We = () => {
        const e = d();
        return p("svg", {
            "aria-hidden": !0,
            width: "42px",
            height: "21px",
            viewBox: "0 0 42 23",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, p("g", {
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            transform: "translate(-86.000000, -31.000000)"
        }, p("g", {
            transform: "translate(87.000000, 32.949632)"
        }, p("path", {
            d: "M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z",
            stroke: "#ffffff",
            fill: e.ui.toggle.disabled.backgroundColor
        }), p("path", {
            d: "M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z",
            fill: e.ui.toggle.disabled.iconColor
        }), p("path", {
            d: "M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z",
            fill: e.ui.toggle.disabled.iconColor
        })))))
    },
    Ke = () => {
        const e = d();
        return p("svg", {
            "aria-hidden": !0,
            width: "42px",
            height: "21px",
            viewBox: "0 0 42 23",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, p("g", {
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            transform: "translate(-86.000000, -31.000000)"
        }, p("g", {
            transform: "translate(87.000000, 32.949632)"
        }, p("path", {
            d: "M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z",
            stroke: "#ffffff",
            fill: e.ui.toggle.inactive.backgroundColor
        }), p("path", {
            d: "M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z",
            fill: e.ui.toggle.inactive.iconColor
        }), p("path", {
            d: "M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z",
            fill: e.ui.toggle.inactive.iconColor,
            fillRule: "nonzero"
        })))))
    },
    Xe = () => {
        const e = d();
        return p("svg", {
            "aria-hidden": !0,
            width: "42px",
            height: "21px",
            viewBox: "0 0 42 23",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, p("g", {
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            transform: "translate(-86.000000, -31.000000)"
        }, p("g", {
            transform: "translate(87.000000, 32.949632)"
        }, p("path", {
            d: "M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z",
            stroke: "#ffffff",
            fill: e.ui.toggle.active.backgroundColor
        }), p("path", {
            d: "M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z",
            fill: e.ui.toggle.active.iconColor
        }), p("path", {
            d: "M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z",
            fill: e.ui.toggle.active.iconColor
        })))))
    },
    Ye = ({
        checked: t = !1,
        disableFocus: i = !1,
        hideToggle: n = !1,
        id: r = x(),
        isDisabled: a = !1,
        label: l,
        labelExtraInfo: s = null,
        labelActionComponent: d = null,
        labelledBy: c = "",
        describedBy: u = "",
        onToggle: g,
        size: m = "regular"
    }) => {
        const [f, b] = e(null);
        o((() => {
            f && f.focus({
                preventScroll: !0
            })
        }), [t]);
        const w = y(`${r}`),
            C = p(v, null, s ? p(Ue, null, l && p(Ge, {
                id: `toggle-label-${w}`,
                key: r,
                hideToggle: n
            }, l), s) : l && p(Ge, {
                id: `toggle-label-${w}`,
                key: r,
                hideToggle: n
            }, l), d);
        return p(Ve, null, C, !n && (a ? p(je, h({
            id: `toggle-${w}`,
            tabIndex: -1,
            size: m,
            role: "switch",
            "aria-disabled": a ? "true" : "false",
            "aria-checked": t ? "true" : "false",
            "aria-readonly": a ? "true" : "false"
        }, (!l || "" === l) && c && "" !== c && {
            "aria-labelledby": y(c)
        }, u && "" !== u && {
            "aria-describedby": y(u)
        }, l && {
            "aria-labelledby": `toggle-label-${w}`
        }, l && c && {
            "aria-describedby": `toggle-label-${w}`,
            "aria-labelledby": y(c)
        }), p(We, null)) : p(je, h({
            id: `toggle-${w}`,
            "data-testid": `uc-toggle-${w}`,
            onClick: () => {
                if (!a) {
                    let i = null;
                    try {
                        var e;
                        i = null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(":focus-visible")
                    } catch (e) {
                        i = null
                    }
                    i && b(i), g(!t)
                }
            },
            size: m,
            role: "switch",
            "aria-disabled": a ? "true" : "false",
            "aria-checked": t ? "true" : "false",
            "aria-readonly": a ? "true" : "false"
        }, (!l || "" === l) && c && "" !== c && {
            "aria-labelledby": y(c)
        }, u && "" !== u && {
            "aria-describedby": y(u)
        }, l && {
            "aria-labelledby": `toggle-label-${w}`
        }, i && {
            tabIndex: -1
        }, l && c && {
            "aria-describedby": `toggle-label-${w}`,
            "aria-labelledby": y(c)
        }), p(t ? Xe : Ke, null))))
    },
    Ze = a.div(["height:20px;width:40px;", "{height:24px;width:48px;}"], l.mobilePortrait),
    qe = ({
        checked: e,
        id: t,
        isDisabled: i = !1,
        label: o,
        labelledBy: n,
        onToggle: r
    }) => p(Ze, null, p(Ye, {
        checked: e,
        id: t,
        isDisabled: i,
        label: o,
        onToggle: r,
        labelledBy: n
    })),
    Je = (e, t) => `\n    background-color: white;\n    border-bottom-color: ${e.color.primary.default};\n    border-bottom-style: solid;\n    border-bottom-width: ${t?"4px":"0"};\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    z-index: 2147483640;\n  `,
    Qe = a.div(["left:0;", " ", " ", ";align-self:center;max-width:", ";max-height:100%;width:100%;display:flex;flex-direction:column;height:", ";pointer-events:auto;border-top-left-radius:", ";border-top-right-radius:", ";box-shadow:", ";", "{border-bottom:0;}", "{border-bottom:0;}"], (({
        isIE: e
    }) => e && "position: relative;"), (({
        isIE: e
    }) => e && "flex: 0 0 auto;"), (({
        layerPlacement: e
    }) => e === w.BOTTOM ? "bottom: 0" : "top: 0"), (({
        theme: e
    }) => `${e.uiSizes.maxBannerWidth}px`), (({
        isAmpEnabled: e
    }) => e ? "100%" : "auto"), (({
        theme: e
    }) => e.ui.layer.borderRadius), (({
        theme: e
    }) => e.ui.layer.borderRadius), (({
        theme: e
    }) => e.ui.useBackgroundShadow ? "0 3px 7px rgba(0, 0, 0, 0.8)" : "none"), l.mobilePortrait, l.mobileLandscape),
    et = a.div(["", " ", ";pointer-events:", ";flex-direction:column-reverse;align-items:center;background-color:transparent;box-shadow:", ";left:0px;margin:auto;outline:none;right:0;width:100%;overflow-y:auto;max-height:100%;height:", ";", " min-height:100%;", "{border-bottom:0;}", "{border-bottom:0;}", "{width:100%;}&:focus-visible{outline-width:0px;outline-color:transparent;}"], (({
        showBorderBottom: e,
        theme: t
    }) => Je(t, e)), (({
        layerPlacement: e
    }) => e === w.BOTTOM ? "bottom: 0" : "top: 0"), (({
        clickThrough: e
    }) => e ? "none" : "auto"), (({
        theme: e
    }) => e.ui.useBackgroundShadow ? "0 3px 7px rgba(0, 0, 0, 0.8)" : "none"), (({
        isAmpEnabled: e
    }) => e ? "100%" : "auto"), (({
        isIE: e
    }) => e && "height: 100%;"), l.mobilePortrait, l.mobileLandscape, l.ie11),
    tt = a.div(["pointer-events:", ";position:fixed;width:100%;height:100%;top:0;right:0;display:flex;z-index:2147483640;"], (({
        clickThrough: e
    }) => e ? "none" : "auto")),
    it = a.div(["", " background-color:", ";align-self:center;border-radius:", ";box-shadow:", ";height:", ";margin-left:", ";margin-right:", ";max-height:", ";max-width:", ";outline:none;overflow:hidden;width:100%;pointer-events:auto;position:relative;", "{align-self:flex-end;bottom:0;border-bottom:0;border-radius:", " ", " 0 0;max-width:auto;max-width:initial;top:auto;transform:initial;width:100%;}", "{border-bottom:0;max-height:", ";max-width:", ";}", "{min-height:200px;}@supports (-webkit-hyphens:none){max-height:", ";}&:focus-visible{outline-style:auto;outline-width:0px;outline-color:transparent;}"], (({
        showBorderBottom: e,
        theme: t
    }) => Je(t, e)), (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => e.ui.layer.borderRadius), (({
        theme: e
    }) => e.ui.useBackgroundShadow ? "0 5px 26px 0px rgba(0, 0, 0, 0.22), 0 20px 28px 0px rgba(0, 0, 0, 0.3)" : "none"), (({
        isAmpEnabled: e,
        withInitialHeight: t
    }) => ((e, t) => t ? "100%" : e ? "initial" : "auto")(t, e)), (({
        isAmpEnabled: e
    }) => e ? "initial" : "auto"), (({
        isAmpEnabled: e
    }) => e ? "initial" : "auto"), (({
        isAmpEnabled: e
    }) => e ? "initial" : "80vh"), (({
        isAmpEnabled: e,
        theme: t
    }) => e ? "initial" : `${t.uiSizes.maxSideAndCenterContainerWidth}px`), l.mobilePortrait, (({
        theme: e
    }) => e.ui.layer.borderRadius), (({
        theme: e
    }) => e.ui.layer.borderRadius), l.mobileLandscape, (({
        isAmpEnabled: e
    }) => e ? "initial" : "100vh"), (({
        isAmpEnabled: e,
        theme: t
    }) => e ? "initial" : `${t.uiSizes.maxSideAndCenterContainerWidth}px`), l.ie11, (({
        isAmpEnabled: e
    }) => e ? "initial" : "85vh")),
    ot = a.div(["display:flex;flex-direction:row;flex-wrap:wrap;", "{display:block;}"], l.mobilePortrait),
    nt = a.div(["display:flex;flex-direction:column;flex:1 1 auto;", "{display:block;}"], l.mobilePortrait),
    rt = a.div(["display:flex;flex-direction:column;align-items:stretch;width:100%;height:100%;", ";"], (({
        useBackgroundColor: e,
        theme: t
    }) => e && `color: ${t.ui.text.color}`)),
    at = a.div(["display:flex;flex-direction:column;background-color:", ";padding:", ";", "{padding:", ";}"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => `0 ${e.spacing.base.xl}`), l.mobilePortrait, (({
        theme: e
    }) => `0 ${e.spacing.mobile.xxxl}`)),
    lt = a.div(["display:flex;flex-direction:row;flex-wrap:wrap;"]),
    st = a.div(["border-top-left-radius:", ";border-top-right-radius:", ";display:flex;flex-direction:column;height:100%;overflow:hidden;z-index:101;"], (({
        theme: e
    }) => e.ui.layer.borderRadius), (({
        theme: e
    }) => e.ui.layer.borderRadius)),
    dt = a.div(["display:flex;flex-direction:column;flex:1 1 auto;padding-top:1px;position:relative;overflow:hidden;", "{padding-top:0;padding-bottom:0;}"], l.mobilePortrait || l.mobileLandscape || l.mobilePortraitXS),
    ct = a.div(["", " background-color:", ";border-radius:", ";bottom:0;box-shadow:0 3px 7px rgba(0,0,0,0.8);height:100%;left:", ";max-width:", ";outline:none;padding-bottom:10px;pointer-events:auto;right:", ";width:50%;", "{border-bottom:0;transform:initial;width:100%;padding-bottom:0px;}", "{border-bottom:0;transform:initial;width:95%;padding-bottom:0px;}"], (({
        showBorderBottom: e,
        theme: t
    }) => Je(t, e)), (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        privacyButtonPosition: e
    }) => "br" === e ? "8px 0 0 0" : "0 8px 0 0"), (({
        side: e
    }) => e && e === C.LEFT ? "0" : "initial"), (({
        theme: e
    }) => `${e.uiSizes.maxSideAndCenterContainerWidth}px`), (({
        side: e
    }) => e && e === C.RIGHT ? "0" : "initial"), l.mobilePortrait, l.mobileLandscape),
    ut = a.div(["display:flex;align-items:center;margin-top:10px;"]),
    pt = a.div(["width:18px;height:18px;margin-right:4px;"]),
    ht = a.div(["color:", ";"], (({
        theme: e
    }) => e.ui.text.color)),
    gt = a.div(["display:flex;flex-direction:row;margin-bottom:", ";padding-top:", ";", "{flex-wrap:wrap;padding-top:0;}", "{padding-top:", ";}"], (({
        theme: e,
        withoutMargin: t
    }) => t ? "0" : e.spacing.base.sm), (({
        theme: e
    }) => e.spacing.base.xs), l.mobilePortrait, l.mobileLandscape, (({
        theme: e
    }) => e.spacing.base.sm)),
    mt = a.div(["display:flex;flex-direction:row;"]),
    ft = a.a(["align-items:center;color:", ";cursor:pointer;display:flex;flex-direction:row;padding-top:", ";font-size:", ";font-weight:", ";", ";outline:none;text-decoration:none;word-break:break-word;&:hover{text-decoration:underline;}&:focus-visible{outline-style:auto;outline-width:5px;}", "{", ";}"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => e.spacing.base.xxs), (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.typography.weight.regular), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.sm)), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.mobile.lg))),
    bt = a.i(["display:flex;height:16px;", ";width:16px;"], (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xxs))),
    yt = a.div(["display:flex;"]);

function vt(e, t = "") {
    if (t) return t.endsWith("/") || e.startsWith("/") ? t.endsWith("/") && e.startsWith("/") ? `${t.slice(0,-1)}${e}` : `${t}${e}` : `${t}/${e}`;
    return e.includes("//") || e.startsWith("/") || e.startsWith("#") ? e : `//${e}`
}
const xt = s((({
        buttons: e = [],
        children: t,
        links: o,
        withoutMargin: n = !1,
        setTrackingPixel: r
    }) => {
        const {
            abTestVariant: a,
            baseHref: l,
            view: s
        } = i(), {
            rules: d
        } = c(u.LINKS), g = o.filter((e => e.url && e.label)), f = e.filter((e => e.onClick && e.label));
        return 0 !== g.length || 0 !== f.length || t ? p(gt, {
            withoutMargin: n
        }, p(mt, {
            "data-testid": "uc-anchors"
        }, g.map((e => p(ft, h({}, e.ariaLabel && {
            "aria-label": e.ariaLabel
        }, {
            "data-testid": "uc-anchor-link",
            href: vt(e.url || "", l),
            onClick: t => ((e, t, i) => {
                const o = t && t.match(/^#onUc(.*)Click$/);
                if (T(s, i, a, r), o && o.length) {
                    e.preventDefault();
                    const t = new window.CustomEvent(o[0].substr(1));
                    window.dispatchEvent(t)
                }
            })(t, e.url, e.type),
            target: "_blank",
            rel: "noopener",
            style: m({}, d)
        }), e.label))), f.map((e => p(ft, {
            "data-testid": "uc-anchor-button",
            onClick: e.onClick,
            target: "_blank",
            rel: "noopener",
            style: m({}, d)
        }, p(bt, null, e.icon), e.label)))), p(yt, null, t)) : null
    })),
    wt = a.div(["display:flex;flex:2 1 auto;flex-direction:row;padding:", ";", "{flex-direction:column;}"], (({
        theme: e,
        alignment: t
    }) => `${"vertical"===t?e.spacing.base.xs:e.spacing.base.sm} 0`), l.mobilePortrait),
    Ct = a.div(["display:flex;flex-direction:", ";flex:auto;flex:2 1 auto;"], (({
        alignment: e
    }) => "horizontal" === e ? "row" : "column")),
    Tt = a.div(["display:flex;flex:1 1 auto;flex-direction:", ";"], (({
        direction: e
    }) => e)),
    kt = e => e.reduce(((e, t) => !t || t.props.disabled ? e : [...e, t]), []),
    Lt = e => null != e.CcpaButton,
    St = e => null != e.AcceptAllButton,
    Et = e => null != e.AcceptAllButton,
    It = ({
        isDesktop: e,
        isMobile: t,
        isPortrait: i,
        uiVariant: o,
        firstLayerVariant: n
    }) => t && i || e && o === k.DEFAULT && n === L.WALL,
    At = (e, t, i, o) => i && (e && t || !e && o === S.VERTICAL) ? "vertical" : "horizontal",
    Rt = s((({
        buttons: e = [],
        testid: t = ""
    }) => {
        const o = d(),
            {
                rules: n
            } = c(u.BUTTONS_CONTAINER),
            {
                isDesktop: r,
                isMobile: a,
                isPortrait: l
            } = E(),
            {
                uiVariant: s,
                firstLayerVariant: h
            } = i(),
            {
                alignment: g
            } = o.ui.buttons,
            f = e.reduce(((e, t) => e || null != t.props.label && t.props.label.length > 17), !1),
            b = It({
                firstLayerVariant: h,
                isDesktop: r,
                isMobile: a,
                isPortrait: l,
                uiVariant: s
            }),
            y = At(a, l, b, g);
        return p((({
            children: e,
            id: t
        }) => f ? p("div", {
            style: m({}, n)
        }, e) : p(Ct, {
            "data-testid": t,
            alignment: y,
            style: m(m(m({}, n), "horizontal" === y && s !== k.CCPA && {
                margin: `0 -${o.spacing.mobile.sm}`
            }), !r && s === k.CCPA && {
                marginTop: o.spacing.base.md
            })
        }, e)), {
            id: t
        }, ("horizontal" === y ? e : e.reverse()).map((t => f && a && l || b && (g === S.VERTICAL || a) ? I(t, {
            marginStyle: `${o.spacing.base.xxs} 0`
        }) : s === k.CCPA ? r && e.length > 1 ? I(t, {
            marginStyle: `0 0 0 ${o.spacing.base.xl}`
        }) : t : I(t, {
            marginStyle: `0 ${o.spacing.mobile.sm}`
        }))))
    })),
    zt = s((e => {
        const {
            uiVariant: t
        } = i();
        let o = [];
        switch (t) {
            case k.CCPA:
                if (Lt(e)) {
                    const {
                        CcpaToggle: t,
                        CcpaButton: i
                    } = e;
                    o = kt([t, i])
                }
                break;
            case k.TCF:
                if (St(e)) {
                    const {
                        AcceptAllButton: t,
                        DenyAllButton: i,
                        SaveButton: n
                    } = e;
                    o = kt([n, i, t])
                }
                break;
            case k.DEFAULT:
            default:
                if (Et(e)) {
                    const {
                        AcceptAllButton: t,
                        DenyAllButton: i,
                        SaveButton: n,
                        MoreButton: r
                    } = e;
                    o = kt([r, n, i, t])
                }
        }
        return 0 === o.length ? null : p(Rt, {
            buttons: o,
            testid: "uc-buttons-container"
        })
    })),
    Ot = s((e => {
        const {
            rules: t
        } = c(u.BUTTONS_CONTAINER), {
            uiVariant: o
        } = i();
        let n = [],
            r = [],
            a = !1;
        switch (o) {
            case k.CCPA:
                if (Lt(e)) {
                    const {
                        CcpaToggle: t,
                        CcpaButton: i
                    } = e;
                    a = !0, t ? (n = kt([t]), r = kt([i])) : n = kt([i])
                }
                break;
            case k.TCF:
                if (St(e)) {
                    const {
                        AcceptAllButton: t,
                        DenyAllButton: i,
                        SaveButton: o
                    } = e;
                    n = kt([o, i, t]), a = !0
                }
                break;
            case k.DEFAULT:
            default:
                if (Et(e)) {
                    const {
                        AcceptAllButton: t,
                        DenyAllButton: i,
                        MoreButton: o,
                        SaveButton: r
                    } = e;
                    n = kt([o, r, i, t]), a = !0
                }
        }
        return 0 === n.length ? null : p(Tt, {
            direction: a ? "column" : "row",
            style: m({}, t)
        }, n.length > 0 && p(Rt, {
            testid: "first-line-buttons",
            buttons: n
        }), r.length > 0 && p(Rt, {
            testid: "second-line-buttons",
            buttons: r
        }))
    })),
    Pt = s((e => {
        const t = d(),
            {
                isDesktop: o,
                isMobile: n,
                isPortrait: r
            } = E(),
            {
                uiVariant: a,
                firstLayerVariant: l
            } = i(),
            s = It({
                firstLayerVariant: l,
                isDesktop: o,
                isMobile: n,
                isPortrait: r,
                uiVariant: a
            }),
            h = At(n, r, s, t.ui.buttons.alignment),
            {
                rules: g
            } = c(u.BUTTONS_CONTAINER_WRAPPER);
        return p(wt, {
            alignment: h,
            style: m({}, g)
        }, p(o ? zt : Ot, e))
    })),
    Nt = ({
        fill: e
    }) => {
        const t = d();
        return p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            viewBox: "0 0 24 24"
        }, p("defs", null, p("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM9.55 15.753l-2.906-2.996a.844.844 0 0 1-.236-.588c0-.221.085-.433.236-.589a.79.79 0 0 1 1.142 0l2.34 2.404 5.57-5.742a.79.79 0 0 1 1.141 0 .85.85 0 0 1 0 1.176l-6.145 6.335a.79.79 0 0 1-1.141 0Z",
            id: "checkmark-rounded-icon-path-a"
        })), p("g", {
            fill: "none",
            fillRule: "evenodd"
        }, p("mask", {
            id: "checkmark-rounded-icon-path-b",
            fill: "#fff"
        }, p("use", {
            xlinkHref: "#checkmark-rounded-icon-path-a"
        })), p("g", {
            mask: "url(#checkmark-rounded-icon-path-b)",
            fill: e || t.ui.text.color
        }, p("path", {
            d: "M0 0h24v24H0z"
        }))))
    },
    $t = a.button(["align-items:center;background-color:transparent;border:none;display:flex;flex-direction:row;font-size:", ";font-weight:", ";margin:0;outline:none;padding:", " 0 0;text-decoration:none;", ";&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.typography.weight.regular), (({
        theme: e
    }) => e.spacing.base.xxs), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.sm))),
    _t = a.span(["color:", ";&:hover{text-decoration:underline;}"], (({
        theme: e
    }) => e.ui.links.fontColor)),
    Dt = ({
        ariaLabel: e,
        label: t,
        onClick: i,
        elRef: o
    }) => {
        const {
            rules: n
        } = c(u.LINKS);
        return p($t, {
            "data-testid": "uc-customize-anchor",
            onClick: i,
            "aria-label": e,
            ref: o,
            style: m({}, n)
        }, p(_t, null, t))
    },
    Bt = a.div(["font-size:", ";font-weight:500;margin-right:", ";margin-left:", ";display:flex;align-items:center;"], (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.spacing.base.xxs), (({
        theme: e
    }) => e.spacing.base.xxs)),
    Mt = a.div(["color:", ";cursor:pointer;display:inline-flex;padding:", ";svg path{fill:", ";}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => `${e.spacing.base.sm} ${e.spacing.base.xl}`), (({
        theme: e
    }) => e.ui.links.fontColor)),
    Ht = a.div(["background-color:", ";border-bottom:", ";display:flex;", ";"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), A, (({
        theme: e
    }) => f(e, b.FLEX_ALIGNMENT_RIGHT, 0))),
    Ft = a.div(["display:", ";height:16px;"], (({
        theme: e
    }) => e.typography.rtlEnabled ? "none" : "inline-flex")),
    jt = a.div(["display:", ";height:16px;order:", ";"], (({
        theme: e
    }) => e.typography.rtlEnabled ? "inline-flex" : "none"), (({
        theme: e
    }) => e.typography.rtlEnabled ? 1 : 0)),
    Gt = () => p("svg", {
        "aria-hidden": !0,
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, p("title", null, "arrow_back_black_24dp"), p("g", {
        id: "[AI]-TCF",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, p("g", {
        id: "arrow_back_black_24dp"
    }, p("polygon", {
        id: "Path",
        points: "0 0 16 0 16 16 0 16"
    }), p("path", {
        d: "M12.6666667,7.33333333 L5.22,7.33333333 L8.47333333,4.08 C8.73333333,3.82 8.73333333,3.39333333 8.47333333,3.13333333 C8.21333333,2.87333333 7.79333333,2.87333333 7.53333333,3.13333333 L3.14,7.52666667 C2.88,7.78666667 2.88,8.20666667 3.14,8.46666667 L7.53333333,12.86 C7.79333333,13.12 8.21333333,13.12 8.47333333,12.86 C8.73333333,12.6 8.73333333,12.18 8.47333333,11.92 L5.22,8.66666667 L12.6666667,8.66666667 C13.0333333,8.66666667 13.3333333,8.36666667 13.3333333,8 C13.3333333,7.63333333 13.0333333,7.33333333 12.6666667,7.33333333 Z",
        id: "Path",
        fillRule: "nonzero"
    })))),
    Vt = () => p("svg", {
        "aria-hidden": !0,
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, p("title", null, "arrow_forward_black_24dp"), p("g", {
        id: "[AI]-TCF",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, p("g", {
        id: "arrow_forward_black_24dp"
    }, p("polygon", {
        id: "Path",
        points: "0 0 16 0 16 16 0 16"
    }), p("path", {
        d: "M3.33333333,8.66666667 L10.78,8.66666667 L7.52666667,11.92 C7.26666667,12.18 7.26666667,12.6066667 7.52666667,12.8666667 C7.78666667,13.1266667 8.20666667,13.1266667 8.46666667,12.8666667 L12.86,8.47333333 C13.12,8.21333333 13.12,7.79333333 12.86,7.53333333 L8.47333333,3.13333333 C8.21333333,2.87333333 7.79333333,2.87333333 7.53333333,3.13333333 C7.27333333,3.39333333 7.27333333,3.81333333 7.53333333,4.07333333 L10.78,7.33333333 L3.33333333,7.33333333 C2.96666667,7.33333333 2.66666667,7.63333333 2.66666667,8 C2.66666667,8.36666667 2.96666667,8.66666667 3.33333333,8.66666667 Z",
        id: "Path",
        fillRule: "nonzero"
    })))),
    Ut = s((({
        denyLinkText: e,
        onDenyAllHandler: t
    }) => {
        const {
            rules: i
        } = c(u.LINKS);
        return p(Ht, null, p(Mt, {
            tabIndex: 0,
            "aria-labelledby": "uc-cnil-deny-all",
            role: "button",
            style: m({}, i),
            onClick: t,
            onKeyPress: e => {
                "Enter" === e.code && t()
            },
            "data-testid": "uc-cnil-deny-all"
        }, p(jt, null, p(Gt, null)), p(Bt, {
            id: "uc-cnil-deny-all"
        }, e), p(Ft, null, p(Vt, null))))
    })),
    Wt = a.div(["border-top:", ";background-color:", ";display:block;bottom:0;left:0;width:100%;z-index:100;padding:", ";", "{padding:", ";flex:0 0 auto;}"], (({
        theme: e,
        showBorder: t
    }) => t ? `1px solid ${e.ui.accentColor}` : "none"), (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => `0 ${e.spacing.base.xl} ${e.spacing.base.sm}`), l.mobilePortrait, (({
        theme: e
    }) => `0 ${e.spacing.mobile.xxxl} ${e.spacing.mobile.xxxl}`)),
    Kt = a.div(["display:block;font-weight:", ";justify-content:center;min-height:0px;text-align:center;width:100%;"], (({
        theme: e
    }) => e.typography.weight.regular)),
    Xt = (e, t) => Object.keys(e).filter((e => t.includes(e))).reduce(((t, i) => (t[i] = e[i], t)), {}),
    Yt = s((({
        children: t,
        showBorder: i = !1
    }) => {
        const {
            isLandscape: n
        } = E(), [r, a] = e(0), l = R(null), {
            rules: s
        } = c(u.FOOTER_WRAPPER), {
            rules: d
        } = c(u.BANNER_CONTENT), h = d ? Xt(d, ["border-bottom-left-radius", "border-bottom-right-radius"]) : {};
        return o((() => {
            l && l.current && l.current.offsetHeight !== r && a(l.current.offsetHeight)
        }), [n, r, a]), p(Wt, {
            showBorder: i,
            ref: l,
            style: m(m({}, s), h)
        }, p(Kt, {
            "data-testid": "uc-footer"
        }, t))
    })),
    Zt = a.div(["width:85%;display:flex;flex-direction:column;align-self:", ";"], (({
        alignment: e
    }) => e)),
    qt = a.div(["background-color:", ";display:block;flex:initial;flex-shrink:0;padding:", ";", "{padding:", ";}", "{max-width:", ";}"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        noPadding: e,
        theme: t
    }) => e ? "0" : `${t.spacing.base.xl} ${t.spacing.base.xl} ${t.spacing.base.sm}`), l.mobilePortrait, (({
        noPadding: e,
        theme: t
    }) => e ? "0" : t.spacing.mobile.xxxl), l.ie11, (({
        view: e,
        firstLayerVariant: t
    }) => e === z.FIRST_LAYER && t === L.WALL || e === z.SECOND_LAYER ? "625px" : "initial")),
    Jt = a.div(["color:", ";display:flex;flex:1;flex-shrink:0;flex-direction:column;"], (({
        theme: e
    }) => e.typography.color.primary)),
    Qt = a.div(["align-items:flex-start;display:flex;flex-direction:", ";justify-content:space-between;position:relative;"], (({
        reverseItems: e
    }) => e ? "row-reverse" : "row")),
    ei = a.div(["position:relative;min-height:24px;display:flex;", " ", ""], (({
        position: e,
        theme: t
    }) => ((e, t) => {
        switch (e) {
            case "center":
            case "left":
                return `${f(t,b.POSITION_RIGHT,0)};\n      ${f(t,b.FLEX_ALIGNMENT_RIGHT,0)};`;
            default:
                return `${f(t,b.POSITION_LEFT,0)};\n      ${f(t,b.FLEX_ALIGNMENT_LEFT,0)};`
        }
    })(e, t)), (({
        maxWidth: e
    }) => e && `max-width: ${e}px`)),
    ti = a.button(["align-items:center;background-color:transparent;border:none;display:flex;height:", ";outline:none;", ";", "{", ";padding:0;}", "{padding:0;}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        height: e
    }) => e), (({
        theme: e
    }) => f(e, b.MARGIN_LEFT, e.spacing.base.md)), l.mobilePortraitXS, (({
        theme: e
    }) => f(e, b.MARGIN_LEFT, e.spacing.mobile.md)), l.mobileLandscapeXS),
    ii = a.div(["height:48px;max-height:48px;max-width:300px;width:300px;", ";", "{max-width:180px;width:180px;}"], (({
        position: e,
        theme: t
    }) => ((e, t) => {
        switch (e) {
            case "center":
                return "margin: 0 auto";
            case "right":
                return f(t, b.MARGIN_LEFT, "auto");
            default:
                return f(t, b.MARGIN_RIGHT, "auto")
        }
    })(e, t)), l.mobilePortraitXS),
    oi = a.img(["height:100%;object-fit:contain;", ";width:100%;", "{height:auto;width:auto;max-height:48px;max-width:300px;}"], (({
        position: e,
        theme: t
    }) => ((e, t) => {
        switch (e) {
            case "center":
                return b.OBJECT_POSITION_CENTER;
            case "right":
                return f(t, b.OBJECT_POSITION_RIGHT);
            default:
                return f(t, b.OBJECT_POSITION_LEFT)
        }
    })(e, t)), l.ie11),
    ni = () => {
        const e = d();
        return p("svg", {
            "aria-hidden": !0,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 492 492",
            height: "16px",
            width: "16px"
        }, p("path", {
            d: "M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z",
            fill: e.ui.text.color
        }))
    },
    ri = () => {
        const e = d();
        return p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24"
        }, p("path", {
            d: "M0 0h24v24H0V0z",
            fill: "none"
        }), p("path", {
            fill: e.ui.links.iconColor,
            d: "M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"
        }))
    },
    ai = a.h1(["border:0;color:", ";font-size:", ";font-weight:", ";margin:0;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.large), (({
        theme: e
    }) => e.typography.weight.bold)),
    li = ({
        children: e
    }) => {
        const {
            rules: t
        } = c(u.TITLE);
        return p(ai, {
            "data-testid": O,
            id: O,
            style: m({}, t)
        }, e)
    },
    si = a.button(["display:", ";background:none;border:none;height:24px;min-width:24px;padding:0;width:24px;&:focus-visible{border:", ";}"], (({
        display: e
    }) => e ? "none" : "flex"), (({
        theme: e
    }) => `1px solid ${e.ui.accentColor}`)),
    di = a.div(["align-items:center;border-radius:4px;", " display:flex;line-height:18px;overflow:hidden;position:", ";z-index:2147483643;", " top:", ";"], (({
        dropdownExpanded: e,
        visibility: t
    }) => e && t && "box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.2);"), (({
        dropdownExpanded: e
    }) => e ? "fixed" : "relative"), (({
        dropdownExpanded: e,
        left: t,
        right: i,
        isGlobeOnRight: o
    }) => -1 !== i && e && (i && t ? `left: ${o?i-160:t}px;` : "right: 0px;")), (({
        dropdownExpanded: e,
        top: t
    }) => e ? `${t}px` : "auto")),
    ci = a.div(["display:", ";flex-direction:column;max-height:", "px;min-width:160px;overflow-y:auto;", " width:100%;"], (({
        display: e
    }) => e ? "flex" : "none"), (({
        maxHeight: e
    }) => e || 100), (({
        visibility: e
    }) => !e && "visibility: hidden;")),
    ui = a.button(["align-items:center;background-color:white;border:0;display:flex;font-size:", ";margin:0;outline:none;padding:", ";text-align:left;justify-content:space-between;&:hover{background-color:", ";}", "{min-height:35px;}", "{min-height:35px;}&:focus-visible{background-color:", ";border:", ";}"], (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => `${e.spacing.base.sm} ${e.spacing.base.md}`), (({
        theme: e
    }) => e.color.neutral.default), l.mobilePortrait, l.mobileLandscape, (({
        theme: e
    }) => e.color.neutral.default), (({
        theme: e
    }) => `1px solid ${e.ui.accentColor}`)),
    pi = a(ui)(["border-bottom:1px solid #f4f4f4;"]),
    hi = a.div(["font-weight:600;"]),
    gi = () => p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1"
    }, p("title", null, "Group 3"), p("defs", null, p("path", {
        d: "M3.53623364,7.75586854 L0.266400843,4.75952008 C0.0958479367,4.60358349 0,4.39187701 0,4.17110068 C0,3.95032435 0.0958479367,3.73861786 0.266400843,3.58268127 C0.621619447,3.25717267 1.19543412,3.25717267 1.55065272,3.58268127 L4.18291366,5.98643714 L10.4493342,0.244131455 C10.8045528,-0.0813771518 11.3783674,-0.0813771518 11.733586,0.244131455 C12.0888047,0.569640063 12.0888047,1.09546166 11.733586,1.42097027 L4.82048551,7.75586854 C4.47437508,8.08137715 3.89145224,8.08137715 3.53623364,7.75586854 Z",
        id: "path-1"
    })), p("g", {
        id: "[EUD-935]-Language-Selector",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, p("g", {
        id: "Language-Switch---open",
        transform: "translate(-975.000000, -145.000000)"
    }, p("g", {
        id: "atom/language-switch-new-copy-4",
        transform: "translate(864.000000, 132.000000)"
    }, p("g", {
        id: "Language",
        transform: "translate(0.000000, 4.000000)"
    }, p("g", {
        id: "Group-3",
        transform: "translate(111.000000, 9.000000)"
    }, p("rect", {
        id: "Rectangle",
        fill: "transparent",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
    }), p("g", {
        id: "↳-Color",
        transform: "translate(6.000000, 8.000000)"
    }, p("mask", {
        id: "mask-2",
        fill: "white"
    }, p("use", {
        xlinkHref: "#path-1"
    })), p("g", {
        id: "icon/action/check_circle_24px",
        fillRule: "nonzero"
    }), p("rect", {
        id: "Rectangle",
        fill: "#303030",
        mask: "url(#mask-2)",
        x: "-4.44444444",
        y: "-5.55555556",
        width: "20",
        height: "20"
    })))))))),
    mi = ({
        label: e
    }) => {
        const t = d();
        return p("svg", h({}, e && "" !== e && {
            alt: e
        }, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }), p("defs", null, p("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
            id: "a"
        })), p("g", {
            fill: "none",
            fillRule: "evenodd"
        }, p("mask", {
            id: "b",
            fill: "white"
        }, p("use", {
            xlinkHref: "#a"
        })), p("g", {
            mask: "url(#b)",
            fill: t.ui.text.color
        }, p("path", {
            d: "M0 0h24v24H0z"
        }))))
    };
var fi = {
    exports: {}
};

function bi() {}

function yi() {}
yi.resetWarningCache = bi;
fi.exports = function() {
    function e(e, t, i, o, n, r) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== r) {
            var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation", a
        }
    }

    function t() {
        return e
    }
    e.isRequired = e;
    var i = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: yi,
        resetWarningCache: bi
    };
    return i.PropTypes = i, i
}();
var vi = fi.exports,
    xi = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
    wi = new Uint8Array(16);

function Ci() {
    if (!xi) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return xi(wi)
}
for (var Ti = [], ki = 0; ki < 256; ++ki) Ti[ki] = (ki + 256).toString(16).substr(1);

function Li(e, t, i) {
    var o = t && i || 0;
    "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
    var n = (e = e || {}).random || (e.rng || Ci)();
    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t)
        for (var r = 0; r < 16; ++r) t[o + r] = n[r];
    return t || function(e, t) {
        var i = t || 0,
            o = Ti;
        return [o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]]].join("")
    }(n)
}

function Si(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), i.push.apply(i, o)
    }
    return i
}

function Ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Si(Object(i), !0).forEach((function(t) {
            Ai(e, t, i[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Si(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        }))
    }
    return e
}

function Ii(e, t) {
    for (var i = 0; i < t.length; i++) {
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function Ai(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function Ri() {
    return Ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
        }
        return e
    }, Ri.apply(this, arguments)
}

function zi(e) {
    return zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, zi(e)
}

function Oi(e, t) {
    return Oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, Oi(e, t)
}

function Pi(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }(e)
}

function Ni(e) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }();
    return function() {
        var i, o = zi(e);
        if (t) {
            var n = zi(this).constructor;
            i = Reflect.construct(o, arguments, n)
        } else i = o.apply(this, arguments);
        return Pi(this, i)
    }
}

function $i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
    return o
}

function _i(e, t) {
    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!i) {
        if (Array.isArray(e) || (i = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return $i(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? $i(e, t) : void 0
                }
            }(e)) || t && e && "number" == typeof e.length) {
            i && (e = i);
            var o = 0,
                n = function() {};
            return {
                s: n,
                n: function() {
                    return o >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[o++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: n
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, a = !0,
        l = !1;
    return {
        s: function() {
            i = i.call(e)
        },
        n: function() {
            var e = i.next();
            return a = e.done, e
        },
        e: function(e) {
            l = !0, r = e
        },
        f: function() {
            try {
                a || null == i.return || i.return()
            } finally {
                if (l) throw r
            }
        }
    }
}
var Di = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    Bi = function(e) {
        return e && e.Math == Math && e
    },
    Mi = Bi("object" == typeof globalThis && globalThis) || Bi("object" == typeof window && window) || Bi("object" == typeof self && self) || Bi("object" == typeof Di && Di) || function() {
        return this
    }() || Function("return this")(),
    Hi = {},
    Fi = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    },
    ji = !Fi((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })),
    Gi = !Fi((function() {
        var e = function() {}.bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    })),
    Vi = Gi,
    Ui = Function.prototype.call,
    Wi = Vi ? Ui.bind(Ui) : function() {
        return Ui.apply(Ui, arguments)
    },
    Ki = {},
    Xi = {}.propertyIsEnumerable,
    Yi = Object.getOwnPropertyDescriptor,
    Zi = Yi && !Xi.call({
        1: 2
    }, 1);
Ki.f = Zi ? function(e) {
    var t = Yi(this, e);
    return !!t && t.enumerable
} : Xi;
var qi, Ji, Qi = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    },
    eo = Gi,
    to = Function.prototype,
    io = to.call,
    oo = eo && to.bind.bind(io, io),
    no = function(e) {
        return eo ? oo(e) : function() {
            return io.apply(e, arguments)
        }
    },
    ro = no,
    ao = ro({}.toString),
    lo = ro("".slice),
    so = function(e) {
        return lo(ao(e), 8, -1)
    },
    co = so,
    uo = no,
    po = function(e) {
        if ("Function" === co(e)) return uo(e)
    },
    ho = Fi,
    go = so,
    mo = Object,
    fo = po("".split),
    bo = ho((function() {
        return !mo("z").propertyIsEnumerable(0)
    })) ? function(e) {
        return "String" == go(e) ? fo(e, "") : mo(e)
    } : mo,
    yo = function(e) {
        return null == e
    },
    vo = yo,
    xo = TypeError,
    wo = function(e) {
        if (vo(e)) throw xo("Can't call method on " + e);
        return e
    },
    Co = bo,
    To = wo,
    ko = function(e) {
        return Co(To(e))
    },
    Lo = "object" == typeof document && document.all,
    So = {
        all: Lo,
        IS_HTMLDDA: void 0 === Lo && void 0 !== Lo
    },
    Eo = So.all,
    Io = So.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === Eo
    } : function(e) {
        return "function" == typeof e
    },
    Ao = Io,
    Ro = So.all,
    zo = So.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : Ao(e) || e === Ro
    } : function(e) {
        return "object" == typeof e ? null !== e : Ao(e)
    },
    Oo = Mi,
    Po = Io,
    No = function(e, t) {
        return arguments.length < 2 ? (i = Oo[e], Po(i) ? i : void 0) : Oo[e] && Oo[e][t];
        var i
    },
    $o = po({}.isPrototypeOf),
    _o = Mi,
    Do = No("navigator", "userAgent") || "",
    Bo = _o.process,
    Mo = _o.Deno,
    Ho = Bo && Bo.versions || Mo && Mo.version,
    Fo = Ho && Ho.v8;
Fo && (Ji = (qi = Fo.split("."))[0] > 0 && qi[0] < 4 ? 1 : +(qi[0] + qi[1])), !Ji && Do && (!(qi = Do.match(/Edge\/(\d+)/)) || qi[1] >= 74) && (qi = Do.match(/Chrome\/(\d+)/)) && (Ji = +qi[1]);
var jo = Ji,
    Go = Fi,
    Vo = !!Object.getOwnPropertySymbols && !Go((function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && jo && jo < 41
    })),
    Uo = Vo && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Wo = No,
    Ko = Io,
    Xo = $o,
    Yo = Object,
    Zo = Uo ? function(e) {
        return "symbol" == typeof e
    } : function(e) {
        var t = Wo("Symbol");
        return Ko(t) && Xo(t.prototype, Yo(e))
    },
    qo = String,
    Jo = Io,
    Qo = function(e) {
        try {
            return qo(e)
        } catch (e) {
            return "Object"
        }
    },
    en = TypeError,
    tn = function(e) {
        if (Jo(e)) return e;
        throw en(Qo(e) + " is not a function")
    },
    on = tn,
    nn = yo,
    rn = Wi,
    an = Io,
    ln = zo,
    sn = TypeError,
    dn = {
        exports: {}
    },
    cn = Mi,
    un = Object.defineProperty,
    pn = function(e, t) {
        try {
            un(cn, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (i) {
            cn[e] = t
        }
        return t
    },
    hn = pn,
    gn = "__core-js_shared__",
    mn = Mi[gn] || hn(gn, {}),
    fn = mn;
(dn.exports = function(e, t) {
    return fn[e] || (fn[e] = void 0 !== t ? t : {})
})("versions", []).push({
    version: "3.25.5",
    mode: "global",
    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var bn = wo,
    yn = Object,
    vn = function(e) {
        return yn(bn(e))
    },
    xn = vn,
    wn = po({}.hasOwnProperty),
    Cn = Object.hasOwn || function(e, t) {
        return wn(xn(e), t)
    },
    Tn = po,
    kn = 0,
    Ln = Math.random(),
    Sn = Tn(1..toString),
    En = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Sn(++kn + Ln, 36)
    },
    In = Mi,
    An = dn.exports,
    Rn = Cn,
    zn = En,
    On = Vo,
    Pn = Uo,
    Nn = An("wks"),
    $n = In.Symbol,
    _n = $n && $n.for,
    Dn = Pn ? $n : $n && $n.withoutSetter || zn,
    Bn = function(e) {
        if (!Rn(Nn, e) || !On && "string" != typeof Nn[e]) {
            var t = "Symbol." + e;
            On && Rn($n, e) ? Nn[e] = $n[e] : Nn[e] = Pn && _n ? _n(t) : Dn(t)
        }
        return Nn[e]
    },
    Mn = Wi,
    Hn = zo,
    Fn = Zo,
    jn = function(e, t) {
        var i = e[t];
        return nn(i) ? void 0 : on(i)
    },
    Gn = function(e, t) {
        var i, o;
        if ("string" === t && an(i = e.toString) && !ln(o = rn(i, e))) return o;
        if (an(i = e.valueOf) && !ln(o = rn(i, e))) return o;
        if ("string" !== t && an(i = e.toString) && !ln(o = rn(i, e))) return o;
        throw sn("Can't convert object to primitive value")
    },
    Vn = TypeError,
    Un = Bn("toPrimitive"),
    Wn = function(e, t) {
        if (!Hn(e) || Fn(e)) return e;
        var i, o = jn(e, Un);
        if (o) {
            if (void 0 === t && (t = "default"), i = Mn(o, e, t), !Hn(i) || Fn(i)) return i;
            throw Vn("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"), Gn(e, t)
    },
    Kn = Zo,
    Xn = function(e) {
        var t = Wn(e, "string");
        return Kn(t) ? t : t + ""
    },
    Yn = zo,
    Zn = Mi.document,
    qn = Yn(Zn) && Yn(Zn.createElement),
    Jn = function(e) {
        return qn ? Zn.createElement(e) : {}
    },
    Qn = Jn,
    er = !ji && !Fi((function() {
        return 7 != Object.defineProperty(Qn("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })),
    tr = ji,
    ir = Wi,
    or = Ki,
    nr = Qi,
    rr = ko,
    ar = Xn,
    lr = Cn,
    sr = er,
    dr = Object.getOwnPropertyDescriptor;
Hi.f = tr ? dr : function(e, t) {
    if (e = rr(e), t = ar(t), sr) try {
        return dr(e, t)
    } catch (e) {}
    if (lr(e, t)) return nr(!ir(or.f, e, t), e[t])
};
var cr = {},
    ur = ji && Fi((function() {
        return 42 != Object.defineProperty((function() {}), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    })),
    pr = zo,
    hr = String,
    gr = TypeError,
    mr = function(e) {
        if (pr(e)) return e;
        throw gr(hr(e) + " is not an object")
    },
    fr = ji,
    br = er,
    yr = ur,
    vr = mr,
    xr = Xn,
    wr = TypeError,
    Cr = Object.defineProperty,
    Tr = Object.getOwnPropertyDescriptor,
    kr = "enumerable",
    Lr = "configurable",
    Sr = "writable";
cr.f = fr ? yr ? function(e, t, i) {
    if (vr(e), t = xr(t), vr(i), "function" == typeof e && "prototype" === t && "value" in i && Sr in i && !i[Sr]) {
        var o = Tr(e, t);
        o && o[Sr] && (e[t] = i.value, i = {
            configurable: Lr in i ? i[Lr] : o[Lr],
            enumerable: kr in i ? i[kr] : o[kr],
            writable: !1
        })
    }
    return Cr(e, t, i)
} : Cr : function(e, t, i) {
    if (vr(e), t = xr(t), vr(i), br) try {
        return Cr(e, t, i)
    } catch (e) {}
    if ("get" in i || "set" in i) throw wr("Accessors not supported");
    return "value" in i && (e[t] = i.value), e
};
var Er = cr,
    Ir = Qi,
    Ar = ji ? function(e, t, i) {
        return Er.f(e, t, Ir(1, i))
    } : function(e, t, i) {
        return e[t] = i, e
    },
    Rr = {
        exports: {}
    },
    zr = ji,
    Or = Cn,
    Pr = Function.prototype,
    Nr = zr && Object.getOwnPropertyDescriptor,
    $r = Or(Pr, "name"),
    _r = {
        EXISTS: $r,
        PROPER: $r && "something" === function() {}.name,
        CONFIGURABLE: $r && (!zr || zr && Nr(Pr, "name").configurable)
    },
    Dr = Io,
    Br = mn,
    Mr = po(Function.toString);
Dr(Br.inspectSource) || (Br.inspectSource = function(e) {
    return Mr(e)
});
var Hr, Fr, jr, Gr = Br.inspectSource,
    Vr = Io,
    Ur = Mi.WeakMap,
    Wr = Vr(Ur) && /native code/.test(String(Ur)),
    Kr = dn.exports,
    Xr = En,
    Yr = Kr("keys"),
    Zr = function(e) {
        return Yr[e] || (Yr[e] = Xr(e))
    },
    qr = {},
    Jr = Wr,
    Qr = Mi,
    ea = zo,
    ta = Ar,
    ia = Cn,
    oa = mn,
    na = Zr,
    ra = qr,
    aa = "Object already initialized",
    la = Qr.TypeError,
    sa = Qr.WeakMap;
if (Jr || oa.state) {
    var da = oa.state || (oa.state = new sa);
    da.get = da.get, da.has = da.has, da.set = da.set, Hr = function(e, t) {
        if (da.has(e)) throw la(aa);
        return t.facade = e, da.set(e, t), t
    }, Fr = function(e) {
        return da.get(e) || {}
    }, jr = function(e) {
        return da.has(e)
    }
} else {
    var ca = na("state");
    ra[ca] = !0, Hr = function(e, t) {
        if (ia(e, ca)) throw la(aa);
        return t.facade = e, ta(e, ca, t), t
    }, Fr = function(e) {
        return ia(e, ca) ? e[ca] : {}
    }, jr = function(e) {
        return ia(e, ca)
    }
}
var ua = {
        set: Hr,
        get: Fr,
        has: jr,
        enforce: function(e) {
            return jr(e) ? Fr(e) : Hr(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var i;
                if (!ea(t) || (i = Fr(t)).type !== e) throw la("Incompatible receiver, " + e + " required");
                return i
            }
        }
    },
    pa = Fi,
    ha = Io,
    ga = Cn,
    ma = ji,
    fa = _r.CONFIGURABLE,
    ba = Gr,
    ya = ua.enforce,
    va = ua.get,
    xa = Object.defineProperty,
    wa = ma && !pa((function() {
        return 8 !== xa((function() {}), "length", {
            value: 8
        }).length
    })),
    Ca = String(String).split("String"),
    Ta = Rr.exports = function(e, t, i) {
        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!ga(e, "name") || fa && e.name !== t) && (ma ? xa(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), wa && i && ga(i, "arity") && e.length !== i.arity && xa(e, "length", {
            value: i.arity
        });
        try {
            i && ga(i, "constructor") && i.constructor ? ma && xa(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var o = ya(e);
        return ga(o, "source") || (o.source = Ca.join("string" == typeof t ? t : "")), e
    };
Function.prototype.toString = Ta((function() {
    return ha(this) && va(this).source || ba(this)
}), "toString");
var ka = Io,
    La = cr,
    Sa = Rr.exports,
    Ea = pn,
    Ia = {},
    Aa = Math.ceil,
    Ra = Math.floor,
    za = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? Ra : Aa)(t)
    },
    Oa = za,
    Pa = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : Oa(t)
    },
    Na = Pa,
    $a = Math.max,
    _a = Math.min,
    Da = Pa,
    Ba = Math.min,
    Ma = function(e) {
        return e > 0 ? Ba(Da(e), 9007199254740991) : 0
    },
    Ha = function(e) {
        return Ma(e.length)
    },
    Fa = ko,
    ja = function(e, t) {
        var i = Na(e);
        return i < 0 ? $a(i + t, 0) : _a(i, t)
    },
    Ga = Ha,
    Va = function(e) {
        return function(t, i, o) {
            var n, r = Fa(t),
                a = Ga(r),
                l = ja(o, a);
            if (e && i != i) {
                for (; a > l;)
                    if ((n = r[l++]) != n) return !0
            } else
                for (; a > l; l++)
                    if ((e || l in r) && r[l] === i) return e || l || 0;
            return !e && -1
        }
    },
    Ua = {
        includes: Va(!0),
        indexOf: Va(!1)
    },
    Wa = Cn,
    Ka = ko,
    Xa = Ua.indexOf,
    Ya = qr,
    Za = po([].push),
    qa = function(e, t) {
        var i, o = Ka(e),
            n = 0,
            r = [];
        for (i in o) !Wa(Ya, i) && Wa(o, i) && Za(r, i);
        for (; t.length > n;) Wa(o, i = t[n++]) && (~Xa(r, i) || Za(r, i));
        return r
    },
    Ja = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Qa = qa,
    el = Ja.concat("length", "prototype");
Ia.f = Object.getOwnPropertyNames || function(e) {
    return Qa(e, el)
};
var tl = {};
tl.f = Object.getOwnPropertySymbols;
var il = No,
    ol = Ia,
    nl = tl,
    rl = mr,
    al = po([].concat),
    ll = il("Reflect", "ownKeys") || function(e) {
        var t = ol.f(rl(e)),
            i = nl.f;
        return i ? al(t, i(e)) : t
    },
    sl = Cn,
    dl = ll,
    cl = Hi,
    ul = cr,
    pl = Fi,
    hl = Io,
    gl = /#|\.prototype\./,
    ml = function(e, t) {
        var i = bl[fl(e)];
        return i == vl || i != yl && (hl(t) ? pl(t) : !!t)
    },
    fl = ml.normalize = function(e) {
        return String(e).replace(gl, ".").toLowerCase()
    },
    bl = ml.data = {},
    yl = ml.NATIVE = "N",
    vl = ml.POLYFILL = "P",
    xl = ml,
    wl = Mi,
    Cl = Hi.f,
    Tl = Ar,
    kl = function(e, t, i, o) {
        o || (o = {});
        var n = o.enumerable,
            r = void 0 !== o.name ? o.name : t;
        if (ka(i) && Sa(i, r, o), o.global) n ? e[t] = i : Ea(t, i);
        else {
            try {
                o.unsafe ? e[t] && (n = !0) : delete e[t]
            } catch (e) {}
            n ? e[t] = i : La.f(e, t, {
                value: i,
                enumerable: !1,
                configurable: !o.nonConfigurable,
                writable: !o.nonWritable
            })
        }
        return e
    },
    Ll = pn,
    Sl = function(e, t, i) {
        for (var o = dl(t), n = ul.f, r = cl.f, a = 0; a < o.length; a++) {
            var l = o[a];
            sl(e, l) || i && sl(i, l) || n(e, l, r(t, l))
        }
    },
    El = xl,
    Il = tn,
    Al = Gi,
    Rl = po(po.bind),
    zl = so,
    Ol = Array.isArray || function(e) {
        return "Array" == zl(e)
    },
    Pl = {};
Pl[Bn("toStringTag")] = "z";
var Nl = "[object z]" === String(Pl),
    $l = Io,
    _l = so,
    Dl = Bn("toStringTag"),
    Bl = Object,
    Ml = "Arguments" == _l(function() {
        return arguments
    }()),
    Hl = po,
    Fl = Fi,
    jl = Io,
    Gl = Nl ? _l : function(e) {
        var t, i, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Bl(e), Dl)) ? i : Ml ? _l(t) : "Object" == (o = _l(t)) && $l(t.callee) ? "Arguments" : o
    },
    Vl = Gr,
    Ul = function() {},
    Wl = [],
    Kl = No("Reflect", "construct"),
    Xl = /^\s*(?:class|function)\b/,
    Yl = Hl(Xl.exec),
    Zl = !Xl.exec(Ul),
    ql = function(e) {
        if (!jl(e)) return !1;
        try {
            return Kl(Ul, Wl, e), !0
        } catch (e) {
            return !1
        }
    },
    Jl = function(e) {
        if (!jl(e)) return !1;
        switch (Gl(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return Zl || !!Yl(Xl, Vl(e))
        } catch (e) {
            return !0
        }
    };
Jl.sham = !0;
var Ql = !Kl || Fl((function() {
        var e;
        return ql(ql.call) || !ql(Object) || !ql((function() {
            e = !0
        })) || e
    })) ? Jl : ql,
    es = Ol,
    ts = Ql,
    is = zo,
    os = Bn("species"),
    ns = Array,
    rs = function(e) {
        var t;
        return es(e) && (t = e.constructor, (ts(t) && (t === ns || es(t.prototype)) || is(t) && null === (t = t[os])) && (t = void 0)), void 0 === t ? ns : t
    },
    as = function(e, t) {
        return Il(e), void 0 === t ? e : Al ? Rl(e, t) : function() {
            return e.apply(t, arguments)
        }
    },
    ls = bo,
    ss = vn,
    ds = Ha,
    cs = function(e, t) {
        return new(rs(e))(0 === t ? 0 : t)
    },
    us = po([].push),
    ps = function(e) {
        var t = 1 == e,
            i = 2 == e,
            o = 3 == e,
            n = 4 == e,
            r = 6 == e,
            a = 7 == e,
            l = 5 == e || r;
        return function(s, d, c, u) {
            for (var p, h, g = ss(s), m = ls(g), f = as(d, c), b = ds(m), y = 0, v = u || cs, x = t ? v(s, b) : i || a ? v(s, 0) : void 0; b > y; y++)
                if ((l || y in m) && (h = f(p = m[y], y, g), e))
                    if (t) x[y] = h;
                    else if (h) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return p;
                case 6:
                    return y;
                case 2:
                    us(x, p)
            } else switch (e) {
                case 4:
                    return !1;
                case 7:
                    us(x, p)
            }
            return r ? -1 : o || n ? n : x
        }
    },
    hs = {
        forEach: ps(0),
        map: ps(1),
        filter: ps(2),
        some: ps(3),
        every: ps(4),
        find: ps(5),
        findIndex: ps(6),
        filterReject: ps(7)
    },
    gs = {},
    ms = qa,
    fs = Ja,
    bs = Object.keys || function(e) {
        return ms(e, fs)
    },
    ys = ji,
    vs = ur,
    xs = cr,
    ws = mr,
    Cs = ko,
    Ts = bs;
gs.f = ys && !vs ? Object.defineProperties : function(e, t) {
    ws(e);
    for (var i, o = Cs(t), n = Ts(t), r = n.length, a = 0; r > a;) xs.f(e, i = n[a++], o[i]);
    return e
};
var ks, Ls = No("document", "documentElement"),
    Ss = mr,
    Es = gs,
    Is = Ja,
    As = qr,
    Rs = Ls,
    zs = Jn,
    Os = "prototype",
    Ps = "script",
    Ns = Zr("IE_PROTO"),
    $s = function() {},
    _s = function(e) {
        return "<" + Ps + ">" + e + "</" + Ps + ">"
    },
    Ds = function(e) {
        e.write(_s("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
    },
    Bs = function() {
        try {
            ks = new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t, i;
        Bs = "undefined" != typeof document ? document.domain && ks ? Ds(ks) : (t = zs("iframe"), i = "java" + Ps + ":", t.style.display = "none", Rs.appendChild(t), t.src = String(i), (e = t.contentWindow.document).open(), e.write(_s("document.F=Object")), e.close(), e.F) : Ds(ks);
        for (var o = Is.length; o--;) delete Bs[Os][Is[o]];
        return Bs()
    };
As[Ns] = !0;
var Ms = Bn,
    Hs = Object.create || function(e, t) {
        var i;
        return null !== e ? ($s[Os] = Ss(e), i = new $s, $s[Os] = null, i[Ns] = e) : i = Bs(), void 0 === t ? i : Es.f(i, t)
    },
    Fs = cr.f,
    js = Ms("unscopables"),
    Gs = Array.prototype;
null == Gs[js] && Fs(Gs, js, {
    configurable: !0,
    value: Hs(null)
});
var Vs = function(e, t) {
        var i, o, n, r, a, l = e.target,
            s = e.global,
            d = e.stat;
        if (i = s ? wl : d ? wl[l] || Ll(l, {}) : (wl[l] || {}).prototype)
            for (o in t) {
                if (r = t[o], n = e.dontCallGetSet ? (a = Cl(i, o)) && a.value : i[o], !El(s ? o : l + (d ? "." : "#") + o, e.forced) && void 0 !== n) {
                    if (typeof r == typeof n) continue;
                    Sl(r, n)
                }(e.sham || n && n.sham) && Tl(r, "sham", !0), kl(i, o, r, e)
            }
    },
    Us = hs.find,
    Ws = function(e) {
        Gs[js][e] = !0
    },
    Ks = "find",
    Xs = !0;
Ks in [] && Array(1)[Ks]((function() {
    Xs = !1
})), Vs({
    target: "Array",
    proto: !0,
    forced: Xs
}, {
    find: function(e) {
        return Us(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}), Ws(Ks);
var Ys = {
        HIDE: "__react_tooltip_hide_event",
        REBUILD: "__react_tooltip_rebuild_event",
        SHOW: "__react_tooltip_show_event"
    },
    Zs = function(e, t) {
        var i;
        "function" == typeof window.CustomEvent ? i = new window.CustomEvent(e, {
            detail: t
        }) : (i = document.createEvent("Event")).initEvent(e, !1, !0, t), window.dispatchEvent(i)
    };
var qs = function(e, t) {
        var i = this.state.show,
            o = this.props.id,
            n = this.isCapture(t.currentTarget),
            r = t.currentTarget.getAttribute("currentItem");
        n || t.stopPropagation(), i && "true" === r ? e || this.hideTooltip(t) : (t.currentTarget.setAttribute("currentItem", "true"), Js(t.currentTarget, this.getTargetArray(o)), this.showTooltip(t))
    },
    Js = function(e, t) {
        for (var i = 0; i < t.length; i++) e !== t[i] ? t[i].setAttribute("currentItem", "false") : t[i].setAttribute("currentItem", "true")
    },
    Qs = {
        id: "9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",
        set: function(e, t, i) {
            this.id in e ? e[this.id][t] = i : Object.defineProperty(e, this.id, {
                configurable: !0,
                value: Ai({}, t, i)
            })
        },
        get: function(e, t) {
            var i = e[this.id];
            if (void 0 !== i) return i[t]
        }
    };
var ed = function(e, t, i) {
        for (var o, n, r = t.respectEffect, a = void 0 !== r && r, l = t.customEvent, s = void 0 !== l && l, d = this.props.id, c = null, u = i.target; null === c && null !== u;) n = u, c = u.getAttribute("data-tip") || null, o = u.getAttribute("data-for") || null, u = u.parentElement;
        if (u = n || i.target, !this.isCustomEvent(u) || s) {
            var p = null == d && null == o || o === d;
            if (null != c && (!a || "float" === this.getEffect(u)) && p) {
                var h = function(e) {
                    var t = {};
                    for (var i in e) "function" == typeof e[i] ? t[i] = e[i].bind(e) : t[i] = e[i];
                    return t
                }(i);
                h.currentTarget = u, e(h)
            }
        }
    },
    td = function(e, t) {
        var i = {};
        return e.forEach((function(e) {
            var o = e.getAttribute(t);
            o && o.split(" ").forEach((function(e) {
                return i[e] = !0
            }))
        })), i
    },
    id = function() {
        return document.getElementsByTagName("body")[0]
    };

function od(e, t, i, o, n, r, a) {
    var l = nd(i),
        s = l.width,
        d = l.height,
        c = nd(t),
        u = c.width,
        p = c.height,
        h = rd(e, t, r),
        g = h.mouseX,
        m = h.mouseY,
        f = ad(r, u, p, s, d),
        b = ld(a),
        y = b.extraOffsetX,
        v = b.extraOffsetY,
        x = window.innerWidth,
        w = window.innerHeight,
        C = sd(i),
        T = C.parentTop,
        k = C.parentLeft,
        L = function(e) {
            var t = f[e].l;
            return g + t + y
        },
        S = function(e) {
            var t = f[e].t;
            return m + t + v
        },
        E = function(e) {
            return function(e) {
                var t = f[e].r;
                return g + t + y
            }(e) > x
        },
        I = function(e) {
            return function(e) {
                var t = f[e].b;
                return m + t + v
            }(e) > w
        },
        A = function(e) {
            return function(e) {
                return L(e) < 0
            }(e) || E(e) || function(e) {
                return S(e) < 0
            }(e) || I(e)
        },
        R = function(e) {
            return !A(e)
        },
        z = {
            top: R("top"),
            bottom: R("bottom"),
            left: R("left"),
            right: R("right")
        };
    var O, P = function() {
            var e, t = _i(n.split(",").concat(o, ["top", "bottom", "left", "right"]));
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var i = e.value;
                    if (z[i]) return i
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            return o
        }(),
        N = !1;
    return P && P !== o && (N = !0, O = P), N ? {
        isNewState: !0,
        newState: {
            place: O
        }
    } : {
        isNewState: !1,
        position: {
            left: parseInt(L(o) - k, 10),
            top: parseInt(S(o) - T, 10)
        }
    }
}
var nd = function(e) {
        var t = e.getBoundingClientRect(),
            i = t.height,
            o = t.width;
        return {
            height: parseInt(i, 10),
            width: parseInt(o, 10)
        }
    },
    rd = function(e, t, i) {
        var o = t.getBoundingClientRect(),
            n = o.top,
            r = o.left,
            a = nd(t),
            l = a.width,
            s = a.height;
        return "float" === i ? {
            mouseX: e.clientX,
            mouseY: e.clientY
        } : {
            mouseX: r + l / 2,
            mouseY: n + s / 2
        }
    },
    ad = function(e, t, i, o, n) {
        var r, a, l, s;
        return "float" === e ? (r = {
            l: -o / 2,
            r: o / 2,
            t: -(n + 3 + 2),
            b: -3
        }, l = {
            l: -o / 2,
            r: o / 2,
            t: 15,
            b: n + 3 + 2 + 12
        }, s = {
            l: -(o + 3 + 2),
            r: -3,
            t: -n / 2,
            b: n / 2
        }, a = {
            l: 3,
            r: o + 3 + 2,
            t: -n / 2,
            b: n / 2
        }) : "solid" === e && (r = {
            l: -o / 2,
            r: o / 2,
            t: -(i / 2 + n + 2),
            b: -i / 2
        }, l = {
            l: -o / 2,
            r: o / 2,
            t: i / 2,
            b: i / 2 + n + 2
        }, s = {
            l: -(o + t / 2 + 2),
            r: -t / 2,
            t: -n / 2,
            b: n / 2
        }, a = {
            l: t / 2,
            r: o + t / 2 + 2,
            t: -n / 2,
            b: n / 2
        }), {
            top: r,
            bottom: l,
            left: s,
            right: a
        }
    },
    ld = function(e) {
        var t = 0,
            i = 0;
        for (var o in "[object String]" === Object.prototype.toString.apply(e) && (e = JSON.parse(e.toString().replace(/'/g, '"'))), e) "top" === o ? i -= parseInt(e[o], 10) : "bottom" === o ? i += parseInt(e[o], 10) : "left" === o ? t -= parseInt(e[o], 10) : "right" === o && (t += parseInt(e[o], 10));
        return {
            extraOffsetX: t,
            extraOffsetY: i
        }
    },
    sd = function(e) {
        for (var t = e; t;) {
            var i = window.getComputedStyle(t);
            if ("none" !== i.getPropertyValue("transform") || "transform" === i.getPropertyValue("will-change")) break;
            t = t.parentElement
        }
        return {
            parentTop: t && t.getBoundingClientRect().top || 0,
            parentLeft: t && t.getBoundingClientRect().left || 0
        }
    };

function dd(e, t, i, o) {
    if (t) return t;
    if (null != i) return i;
    if (null === i) return null;
    var n = /<br\s*\/?>/;
    return o && "false" !== o && n.test(e) ? e.split(n).map((function(e, t) {
        return P.createElement("span", {
            key: t,
            className: "multi-line"
        }, e)
    })) : e
}

function cd(e) {
    var t = {};
    return Object.keys(e).filter((function(e) {
        return /(^aria-\w+$|^role$)/.test(e)
    })).forEach((function(i) {
        t[i] = e[i]
    })), t
}

function ud(e) {
    var t = e.length;
    return e.hasOwnProperty ? Array.prototype.slice.call(e) : new Array(t).fill().map((function(t) {
        return e[t]
    }))
}
var pd = {
    dark: {
        text: "#fff",
        background: "#222",
        border: "transparent",
        arrow: "#222"
    },
    success: {
        text: "#fff",
        background: "#8DC572",
        border: "transparent",
        arrow: "#8DC572"
    },
    warning: {
        text: "#fff",
        background: "#F0AD4E",
        border: "transparent",
        arrow: "#F0AD4E"
    },
    error: {
        text: "#fff",
        background: "#BE6464",
        border: "transparent",
        arrow: "#BE6464"
    },
    info: {
        text: "#fff",
        background: "#337AB7",
        border: "transparent",
        arrow: "#337AB7"
    },
    light: {
        text: "#222",
        background: "#fff",
        border: "transparent",
        arrow: "#fff"
    }
};
var hd, gd, md = "8px 21px",
    fd = {
        tooltip: 3,
        arrow: 0
    };

function bd(e, t, i, o, n, r) {
    return function(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : md,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fd,
            n = t.text,
            r = t.background,
            a = t.border,
            l = t.arrow,
            s = o.arrow,
            d = o.tooltip;
        return "\n  \t.".concat(e, " {\n\t    color: ").concat(n, ";\n\t    background: ").concat(r, ";\n\t    border: 1px solid ").concat(a, ";\n\t    border-radius: ").concat(d, "px;\n\t    padding: ").concat(i, ";\n  \t}\n\n  \t.").concat(e, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(e, '.place-top::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: 2;\n        width: 20px;\n        height: 12px;\n    }\n    .').concat(e, '.place-top::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(s, "px;\n        border: 1px solid ").concat(a, ";\n        background-color: ").concat(l, ";\n        z-index: -2;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(135deg);\n    }\n\n    .").concat(e, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(e, '.place-bottom::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 18px;\n        height: 10px;\n    }\n    .').concat(e, '.place-bottom::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(s, "px;\n        border: 1px solid ").concat(a, ";\n        background-color: ").concat(l, ";\n        z-index: -2;\n        top: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(e, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(e, '.place-left::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .').concat(e, '.place-left::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(s, "px;\n        border: 1px solid ").concat(a, ";\n        background-color: ").concat(l, ";\n        z-index: -2;\n        right: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(e, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(e, '.place-right::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .').concat(e, '.place-right::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(s, "px;\n        border: 1px solid ").concat(a, ";\n        background-color: ").concat(l, ";\n        z-index: -2;\n        left: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(-135deg);\n    }\n  ")
    }(e, function(e, t, i) {
        var o = e.text,
            n = e.background,
            r = e.border,
            a = e.arrow ? e.arrow : e.background,
            l = function(e) {
                return pd[e] ? Ei({}, pd[e]) : void 0
            }(t);
        o && (l.text = o);
        n && (l.background = n);
        i && (l.border = r || ("light" === t ? "black" : "white"));
        a && (l.arrow = a);
        return l
    }(t, i, o), n, r)
}
var yd, vd = function(e) {
    e.hide = function(e) {
        Zs(Ys.HIDE, {
            target: e
        })
    }, e.rebuild = function() {
        Zs(Ys.REBUILD)
    }, e.show = function(e) {
        Zs(Ys.SHOW, {
            target: e
        })
    }, e.prototype.globalRebuild = function() {
        this.mount && (this.unbindListener(), this.bindListener())
    }, e.prototype.globalShow = function(e) {
        if (this.mount) {
            var t = !!(e && e.detail && e.detail.target);
            this.showTooltip({
                currentTarget: t && e.detail.target
            }, !0)
        }
    }, e.prototype.globalHide = function(e) {
        if (this.mount) {
            var t = !!(e && e.detail && e.detail.target);
            this.hideTooltip({
                currentTarget: t && e.detail.target
            }, t)
        }
    }
}(hd = function(e) {
    e.prototype.bindWindowEvents = function(e) {
        window.removeEventListener(Ys.HIDE, this.globalHide), window.addEventListener(Ys.HIDE, this.globalHide, !1), window.removeEventListener(Ys.REBUILD, this.globalRebuild), window.addEventListener(Ys.REBUILD, this.globalRebuild, !1), window.removeEventListener(Ys.SHOW, this.globalShow), window.addEventListener(Ys.SHOW, this.globalShow, !1), e && (window.removeEventListener("resize", this.onWindowResize), window.addEventListener("resize", this.onWindowResize, !1))
    }, e.prototype.unbindWindowEvents = function() {
        window.removeEventListener(Ys.HIDE, this.globalHide), window.removeEventListener(Ys.REBUILD, this.globalRebuild), window.removeEventListener(Ys.SHOW, this.globalShow), window.removeEventListener("resize", this.onWindowResize)
    }, e.prototype.onWindowResize = function() {
        this.mount && this.hideTooltip()
    }
}(hd = function(e) {
    e.prototype.isCustomEvent = function(e) {
        return this.state.event || !!e.getAttribute("data-event")
    }, e.prototype.customBindListener = function(e) {
        var t = this,
            i = this.state,
            o = i.event,
            n = i.eventOff,
            r = e.getAttribute("data-event") || o,
            a = e.getAttribute("data-event-off") || n;
        r.split(" ").forEach((function(i) {
            e.removeEventListener(i, Qs.get(e, i));
            var o = qs.bind(t, a);
            Qs.set(e, i, o), e.addEventListener(i, o, !1)
        })), a && a.split(" ").forEach((function(i) {
            e.removeEventListener(i, t.hideTooltip), e.addEventListener(i, t.hideTooltip, !1)
        }))
    }, e.prototype.customUnbindListener = function(e) {
        var t = this.state,
            i = t.event,
            o = t.eventOff,
            n = i || e.getAttribute("data-event"),
            r = o || e.getAttribute("data-event-off");
        e.removeEventListener(n, Qs.get(e, i)), r && e.removeEventListener(r, this.hideTooltip)
    }
}(hd = function(e) {
    e.prototype.isCapture = function(e) {
        return e && "true" === e.getAttribute("data-iscapture") || this.props.isCapture || !1
    }
}(hd = function(e) {
    e.prototype.getEffect = function(e) {
        return e.getAttribute("data-effect") || this.props.effect || "float"
    }
}(hd = function(e) {
    e.prototype.isBodyMode = function() {
        return !!this.props.bodyMode
    }, e.prototype.bindBodyListener = function(e) {
        var t = this,
            i = this.state,
            o = i.event,
            n = i.eventOff,
            r = i.possibleCustomEvents,
            a = i.possibleCustomEventsOff,
            l = id(),
            s = td(e, "data-event"),
            d = td(e, "data-event-off");
        null != o && (s[o] = !0), null != n && (d[n] = !0), r.split(" ").forEach((function(e) {
            return s[e] = !0
        })), a.split(" ").forEach((function(e) {
            return d[e] = !0
        })), this.unbindBodyListener(l);
        var c = this.bodyModeListeners = {};
        for (var u in null == o && (c.mouseover = ed.bind(this, this.showTooltip, {}), c.mousemove = ed.bind(this, this.updateTooltip, {
                respectEffect: !0
            }), c.mouseout = ed.bind(this, this.hideTooltip, {})), s) c[u] = ed.bind(this, (function(e) {
            var i = e.currentTarget.getAttribute("data-event-off") || n;
            qs.call(t, i, e)
        }), {
            customEvent: !0
        });
        for (var p in d) c[p] = ed.bind(this, this.hideTooltip, {
            customEvent: !0
        });
        for (var h in c) l.addEventListener(h, c[h])
    }, e.prototype.unbindBodyListener = function(e) {
        e = e || id();
        var t = this.bodyModeListeners;
        for (var i in t) e.removeEventListener(i, t[i])
    }
}((gd = function() {
    ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && Oi(e, t)
    }(n, P.Component);
    var e, t, i, o = Ni(n);

    function n(e) {
        var t;
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, n), (t = o.call(this, e)).state = {
            uuid: e.uuid || "t" + Li(),
            place: e.place || "top",
            desiredPlace: e.place || "top",
            type: e.type || "dark",
            effect: e.effect || "float",
            show: !1,
            border: !1,
            borderClass: "border",
            customColors: {},
            customRadius: {},
            offset: {},
            padding: e.padding,
            extraClass: "",
            html: !1,
            delayHide: 0,
            delayShow: 0,
            event: e.event || null,
            eventOff: e.eventOff || null,
            currentEvent: null,
            currentTarget: null,
            ariaProps: cd(e),
            isEmptyTip: !1,
            disable: !1,
            possibleCustomEvents: e.possibleCustomEvents || "",
            possibleCustomEventsOff: e.possibleCustomEventsOff || "",
            originTooltip: null,
            isMultiline: !1
        }, t.bind(["showTooltip", "updateTooltip", "hideTooltip", "hideTooltipOnScroll", "getTooltipContent", "globalRebuild", "globalShow", "globalHide", "onWindowResize", "mouseOnToolTip"]), t.mount = !0, t.delayShowLoop = null, t.delayHideLoop = null, t.delayReshow = null, t.intervalUpdateContent = null, t
    }
    return e = n, t = [{
        key: "bind",
        value: function(e) {
            var t = this;
            e.forEach((function(e) {
                t[e] = t[e].bind(t)
            }))
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var e = this.props;
            e.insecure;
            var t = e.resizeHide,
                i = e.disableInternalStyle;
            this.mount = !0, this.bindListener(), this.bindWindowEvents(t), i || this.injectStyles()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mount = !1, this.clearTimer(), this.unbindListener(), this.removeScrollListener(this.state.currentTarget), this.unbindWindowEvents()
        }
    }, {
        key: "injectStyles",
        value: function() {
            var e = this.tooltipRef;
            if (e) {
                for (var t, i = e.parentNode; i.parentNode;) i = i.parentNode;
                switch (i.constructor.name) {
                    case "Document":
                    case "HTMLDocument":
                    case void 0:
                        t = i.head;
                        break;
                    default:
                        t = i
                }
                if (!t.querySelector("style[data-react-tooltip]")) {
                    var o = document.createElement("style");
                    o.textContent = '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  bottom: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-bottom::before {\n  top: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-left::before {\n  right: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip.place-right::before {\n  left: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}', o.setAttribute("data-react-tooltip", "true"), t.appendChild(o)
                }
            }
        }
    }, {
        key: "mouseOnToolTip",
        value: function() {
            return !(!this.state.show || !this.tooltipRef) && (this.tooltipRef.matches || (this.tooltipRef.msMatchesSelector ? this.tooltipRef.matches = this.tooltipRef.msMatchesSelector : this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector), this.tooltipRef.matches(":hover"))
        }
    }, {
        key: "getTargetArray",
        value: function(e) {
            var t, i = [];
            if (e) {
                var o = e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                t = '[data-tip][data-for="'.concat(o, '"]')
            } else t = "[data-tip]:not([data-for])";
            return ud(document.getElementsByTagName("*")).filter((function(e) {
                return e.shadowRoot
            })).forEach((function(e) {
                i = i.concat(ud(e.shadowRoot.querySelectorAll(t)))
            })), i.concat(ud(document.querySelectorAll(t)))
        }
    }, {
        key: "bindListener",
        value: function() {
            var e = this,
                t = this.props,
                i = t.id,
                o = t.globalEventOff,
                n = t.isCapture,
                r = this.getTargetArray(i);
            r.forEach((function(t) {
                null === t.getAttribute("currentItem") && t.setAttribute("currentItem", "false"), e.unbindBasicListener(t), e.isCustomEvent(t) && e.customUnbindListener(t)
            })), this.isBodyMode() ? this.bindBodyListener(r) : r.forEach((function(t) {
                var i = e.isCapture(t),
                    o = e.getEffect(t);
                e.isCustomEvent(t) ? e.customBindListener(t) : (t.addEventListener("mouseenter", e.showTooltip, i), t.addEventListener("focus", e.showTooltip, i), "float" === o && t.addEventListener("mousemove", e.updateTooltip, i), t.addEventListener("mouseleave", e.hideTooltip, i), t.addEventListener("blur", e.hideTooltip, i))
            })), o && (window.removeEventListener(o, this.hideTooltip), window.addEventListener(o, this.hideTooltip, n)), this.bindRemovalTracker()
        }
    }, {
        key: "unbindListener",
        value: function() {
            var e = this,
                t = this.props,
                i = t.id,
                o = t.globalEventOff;
            this.isBodyMode() ? this.unbindBodyListener() : this.getTargetArray(i).forEach((function(t) {
                e.unbindBasicListener(t), e.isCustomEvent(t) && e.customUnbindListener(t)
            })), o && window.removeEventListener(o, this.hideTooltip), this.unbindRemovalTracker()
        }
    }, {
        key: "unbindBasicListener",
        value: function(e) {
            var t = this.isCapture(e);
            e.removeEventListener("mouseenter", this.showTooltip, t), e.removeEventListener("mousemove", this.updateTooltip, t), e.removeEventListener("mouseleave", this.hideTooltip, t)
        }
    }, {
        key: "getTooltipContent",
        value: function() {
            var e, t = this.props,
                i = t.getContent,
                o = t.children;
            return i && (e = Array.isArray(i) ? i[0] && i[0](this.state.originTooltip) : i(this.state.originTooltip)), dd(this.state.originTooltip, o, e, this.state.isMultiline)
        }
    }, {
        key: "isEmptyTip",
        value: function(e) {
            return "string" == typeof e && "" === e || null === e
        }
    }, {
        key: "showTooltip",
        value: function(e, t) {
            if (this.tooltipRef) {
                if (t && !this.getTargetArray(this.props.id).some((function(t) {
                        return t === e.currentTarget
                    }))) return;
                var i = this.props,
                    o = i.multiline,
                    n = i.getContent,
                    r = e.currentTarget.getAttribute("data-tip"),
                    a = e.currentTarget.getAttribute("data-multiline") || o || !1,
                    l = e instanceof window.FocusEvent || t,
                    s = !0;
                e.currentTarget.getAttribute("data-scroll-hide") ? s = "true" === e.currentTarget.getAttribute("data-scroll-hide") : null != this.props.scrollHide && (s = this.props.scrollHide), e && e.currentTarget && e.currentTarget.setAttribute && e.currentTarget.setAttribute("aria-describedby", this.props.id || this.state.uuid);
                var d = e.currentTarget.getAttribute("data-place") || this.props.place || "top",
                    c = l ? "solid" : this.getEffect(e.currentTarget),
                    u = e.currentTarget.getAttribute("data-offset") || this.props.offset || {},
                    p = od(e, e.currentTarget, this.tooltipRef, d.split(",")[0], d, c, u);
                p.position && this.props.overridePosition && (p.position = this.props.overridePosition(p.position, e, e.currentTarget, this.tooltipRef, d, d, c, u));
                var h = p.isNewState ? p.newState.place : d.split(",")[0];
                this.clearTimer();
                var g = e.currentTarget,
                    m = this.state.show ? g.getAttribute("data-delay-update") || this.props.delayUpdate : 0,
                    f = this,
                    b = function() {
                        f.setState({
                            originTooltip: r,
                            isMultiline: a,
                            desiredPlace: d,
                            place: h,
                            type: g.getAttribute("data-type") || f.props.type || "dark",
                            customColors: {
                                text: g.getAttribute("data-text-color") || f.props.textColor || null,
                                background: g.getAttribute("data-background-color") || f.props.backgroundColor || null,
                                border: g.getAttribute("data-border-color") || f.props.borderColor || null,
                                arrow: g.getAttribute("data-arrow-color") || f.props.arrowColor || null
                            },
                            customRadius: {
                                tooltip: g.getAttribute("data-tooltip-radius") || f.props.tooltipRadius || "3",
                                arrow: g.getAttribute("data-arrow-radius") || f.props.arrowRadius || "0"
                            },
                            effect: c,
                            offset: u,
                            padding: g.getAttribute("data-padding") || f.props.padding,
                            html: (g.getAttribute("data-html") ? "true" === g.getAttribute("data-html") : f.props.html) || !1,
                            delayShow: g.getAttribute("data-delay-show") || f.props.delayShow || 0,
                            delayHide: g.getAttribute("data-delay-hide") || f.props.delayHide || 0,
                            delayUpdate: g.getAttribute("data-delay-update") || f.props.delayUpdate || 0,
                            border: (g.getAttribute("data-border") ? "true" === g.getAttribute("data-border") : f.props.border) || !1,
                            borderClass: g.getAttribute("data-border-class") || f.props.borderClass || "border",
                            extraClass: g.getAttribute("data-class") || f.props.class || f.props.className || "",
                            disable: (g.getAttribute("data-tip-disable") ? "true" === g.getAttribute("data-tip-disable") : f.props.disable) || !1,
                            currentTarget: g
                        }, (function() {
                            s && f.addScrollListener(f.state.currentTarget), f.updateTooltip(e), n && Array.isArray(n) && (f.intervalUpdateContent = setInterval((function() {
                                if (f.mount) {
                                    var e = f.props.getContent,
                                        t = dd(r, "", e[0](), a),
                                        i = f.isEmptyTip(t);
                                    f.setState({
                                        isEmptyTip: i
                                    }), f.updatePosition()
                                }
                            }), n[1]))
                        }))
                    };
                m ? this.delayReshow = setTimeout(b, m) : b()
            }
        }
    }, {
        key: "updateTooltip",
        value: function(e) {
            var t = this,
                i = this.state,
                o = i.delayShow,
                n = i.disable,
                r = this.props,
                a = r.afterShow,
                l = r.disable,
                s = this.getTooltipContent(),
                d = e.currentTarget || e.target;
            if (!this.mouseOnToolTip() && !(this.isEmptyTip(s) || n || l)) {
                var c = this.state.show ? 0 : parseInt(o, 10),
                    u = function() {
                        if (Array.isArray(s) && s.length > 0 || s) {
                            var i = !t.state.show;
                            t.setState({
                                currentEvent: e,
                                currentTarget: d,
                                show: !0
                            }, (function() {
                                t.updatePosition((function() {
                                    i && a && a(e)
                                }))
                            }))
                        }
                    };
                this.delayShowLoop && clearTimeout(this.delayShowLoop), c ? this.delayShowLoop = setTimeout(u, c) : (this.delayShowLoop = null, u())
            }
        }
    }, {
        key: "listenForTooltipExit",
        value: function() {
            this.state.show && this.tooltipRef && this.tooltipRef.addEventListener("mouseleave", this.hideTooltip)
        }
    }, {
        key: "removeListenerForTooltipExit",
        value: function() {
            this.state.show && this.tooltipRef && this.tooltipRef.removeEventListener("mouseleave", this.hideTooltip)
        }
    }, {
        key: "hideTooltip",
        value: function(e, t) {
            var i = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    isScroll: !1
                },
                n = this.state.disable,
                r = o.isScroll ? 0 : this.state.delayHide,
                a = this.props,
                l = a.afterHide,
                s = a.disable,
                d = this.getTooltipContent();
            if (this.mount && !(this.isEmptyTip(d) || n || s)) {
                if (t && (!this.getTargetArray(this.props.id).some((function(t) {
                        return t === e.currentTarget
                    })) || !this.state.show)) return;
                e && e.currentTarget && e.currentTarget.removeAttribute && e.currentTarget.removeAttribute("aria-describedby");
                var c = function() {
                    var t = i.state.show;
                    i.mouseOnToolTip() ? i.listenForTooltipExit() : (i.removeListenerForTooltipExit(), i.setState({
                        show: !1
                    }, (function() {
                        i.removeScrollListener(i.state.currentTarget), t && l && l(e)
                    })))
                };
                this.clearTimer(), r ? this.delayHideLoop = setTimeout(c, parseInt(r, 10)) : c()
            }
        }
    }, {
        key: "hideTooltipOnScroll",
        value: function(e, t) {
            this.hideTooltip(e, t, {
                isScroll: !0
            })
        }
    }, {
        key: "addScrollListener",
        value: function(e) {
            var t = this.isCapture(e);
            window.addEventListener("scroll", this.hideTooltipOnScroll, t)
        }
    }, {
        key: "removeScrollListener",
        value: function(e) {
            var t = this.isCapture(e);
            window.removeEventListener("scroll", this.hideTooltipOnScroll, t)
        }
    }, {
        key: "updatePosition",
        value: function(e) {
            var t = this,
                i = this.state,
                o = i.currentEvent,
                n = i.currentTarget,
                r = i.place,
                a = i.desiredPlace,
                l = i.effect,
                s = i.offset,
                d = this.tooltipRef,
                c = od(o, n, d, r, a, l, s);
            if (c.position && this.props.overridePosition && (c.position = this.props.overridePosition(c.position, o, n, d, r, a, l, s)), c.isNewState) return this.setState(c.newState, (function() {
                t.updatePosition(e)
            }));
            e && "function" == typeof e && e(), d.style.left = c.position.left + "px", d.style.top = c.position.top + "px"
        }
    }, {
        key: "clearTimer",
        value: function() {
            this.delayShowLoop && (clearTimeout(this.delayShowLoop), this.delayShowLoop = null), this.delayHideLoop && (clearTimeout(this.delayHideLoop), this.delayHideLoop = null), this.delayReshow && (clearTimeout(this.delayReshow), this.delayReshow = null), this.intervalUpdateContent && (clearInterval(this.intervalUpdateContent), this.intervalUpdateContent = null)
        }
    }, {
        key: "hasCustomColors",
        value: function() {
            var e = this;
            return Boolean(Object.keys(this.state.customColors).find((function(t) {
                return "border" !== t && e.state.customColors[t]
            })) || this.state.border && this.state.customColors.border)
        }
    }, {
        key: "render",
        value: function() {
            var e = this,
                t = this.state,
                i = t.extraClass,
                o = t.html,
                r = t.ariaProps,
                a = t.disable,
                l = t.uuid,
                s = this.getTooltipContent(),
                d = this.isEmptyTip(s),
                c = this.props.disableInternalStyle ? "" : bd(this.state.uuid, this.state.customColors, this.state.type, this.state.border, this.state.padding, this.state.customRadius),
                u = "__react_component_tooltip" + " ".concat(this.state.uuid) + (!this.state.show || a || d ? "" : " show") + (this.state.border ? " " + this.state.borderClass : "") + " place-".concat(this.state.place) + " type-".concat(this.hasCustomColors() ? "custom" : this.state.type) + (this.props.delayUpdate ? " allow_hover" : "") + (this.props.clickable ? " allow_click" : ""),
                p = this.props.wrapper;
            n.supportedWrappers.indexOf(p) < 0 && (p = n.defaultProps.wrapper);
            var h = [u, i].filter(Boolean).join(" ");
            if (o) {
                var g = "".concat(s).concat(c ? '\n<style aria-hidden="true">'.concat(c, "</style>") : "");
                return P.createElement(p, Ri({
                    className: "".concat(h),
                    id: this.props.id || l,
                    ref: function(t) {
                        return e.tooltipRef = t
                    }
                }, r, {
                    "data-id": "tooltip",
                    dangerouslySetInnerHTML: {
                        __html: g
                    }
                }))
            }
            return P.createElement(p, Ri({
                className: "".concat(h),
                id: this.props.id || l
            }, r, {
                ref: function(t) {
                    return e.tooltipRef = t
                },
                "data-id": "tooltip"
            }), c && P.createElement("style", {
                dangerouslySetInnerHTML: {
                    __html: c
                },
                "aria-hidden": "true"
            }), s)
        }
    }], i = [{
        key: "propTypes",
        get: function() {
            return {
                uuid: vi.string,
                children: vi.any,
                place: vi.string,
                type: vi.string,
                effect: vi.string,
                offset: vi.object,
                padding: vi.string,
                multiline: vi.bool,
                border: vi.bool,
                borderClass: vi.string,
                textColor: vi.string,
                backgroundColor: vi.string,
                borderColor: vi.string,
                arrowColor: vi.string,
                arrowRadius: vi.string,
                tooltipRadius: vi.string,
                insecure: vi.bool,
                class: vi.string,
                className: vi.string,
                id: vi.string,
                html: vi.bool,
                delayHide: vi.number,
                delayUpdate: vi.number,
                delayShow: vi.number,
                event: vi.string,
                eventOff: vi.string,
                isCapture: vi.bool,
                globalEventOff: vi.string,
                getContent: vi.any,
                afterShow: vi.func,
                afterHide: vi.func,
                overridePosition: vi.func,
                disable: vi.bool,
                scrollHide: vi.bool,
                resizeHide: vi.bool,
                wrapper: vi.string,
                bodyMode: vi.bool,
                possibleCustomEvents: vi.string,
                possibleCustomEventsOff: vi.string,
                clickable: vi.bool,
                disableInternalStyle: vi.bool
            }
        }
    }, {
        key: "getDerivedStateFromProps",
        value: function(e, t) {
            var i = t.ariaProps,
                o = cd(e);
            return Object.keys(o).some((function(e) {
                return o[e] !== i[e]
            })) ? Ei(Ei({}, t), {}, {
                ariaProps: o
            }) : null
        }
    }], t && Ii(e.prototype, t), i && Ii(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), n
}(), Ai(gd, "defaultProps", {
    insecure: !0,
    resizeHide: !0,
    wrapper: "div",
    clickable: !1
}), Ai(gd, "supportedWrappers", ["div", "span"]), Ai(gd, "displayName", "ReactTooltip"), (yd = hd = gd).prototype.bindRemovalTracker = function() {
    var e = this,
        t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (null != t) {
        var i = new t((function(t) {
            for (var i = 0; i < t.length; i++)
                for (var o = t[i], n = 0; n < o.removedNodes.length; n++)
                    if (o.removedNodes[n] === e.state.currentTarget) return void e.hideTooltip()
        }));
        i.observe(window.document, {
            childList: !0,
            subtree: !0
        }), this.removalTracker = i
    }
}, hd = void(yd.prototype.unbindRemovalTracker = function() {
    this.removalTracker && (this.removalTracker.disconnect(), this.removalTracker = null)
}) || hd)) || hd) || hd) || hd) || hd) || hd) || hd;

function xd({
    onShowList: t,
    onChange: n,
    items: a,
    ariaLabel: l,
    defaultItem: s,
    id: d,
    isExpandedOnInit: h,
    maxHeight: g,
    testIdContainer: f,
    testIdMenu: b,
    testIdMenuButton: y
}) {
    const [x, w] = e(h), [C, T] = e(s || a[0]), [k, L] = e(!1), [S, I] = e(100 * window.devicePixelRatio), A = Me({
        targetKey: "ArrowUp"
    }), O = Me({
        targetKey: "ArrowDown"
    }), P = Me({
        targetKey: "Escape"
    }), [M, H] = e(0), [F, j] = e(0), G = Me({
        targetKey: "Enter"
    }), [V, U] = e(!0), {
        rules: W
    } = c(u.LANGUAGE_SWITCH), K = R(null), X = R(null), Y = R(null), [Z, q] = e(0), [J, Q] = e(0), [ee, te] = e(0), [ie, oe] = e(!1), [ne, re] = e(!1), {
        isDesktop: ae,
        isIE: le,
        isMobile: se,
        isLandscape: de,
        isPortrait: ce
    } = E(), {
        setBlockFocus: ue,
        setNextFocus: pe,
        setLangSelectorStatus: he
    } = N(), {
        view: ge,
        languageModalRef: me
    } = i(), fe = ge === z.SECOND_LAYER, be = r((e => {
        const t = e.path || e.composedPath && e.composedPath();
        if (t) {
            t.some((e => e.id === d)) || w(!1)
        }
    }), [d]), ye = r((() => {
        if (Y && Y.current) {
            Y.current.setAttribute("aria-describedby", $);
            const e = Y.current.getBoundingClientRect();
            if (0 === e.left && 0 === e.right) return void setTimeout((() => {
                ye()
            }), 2e3);
            Z || q(e.top), J || Q(e.left), ee || te(e.right), U(e.right > window.innerWidth / 2)
        }
    }), [Y]);
    o((() => {
        ye()
    })), o((() => {
        S >= 300 && X && X.current ? X.current.base && (X.current.base.style.maxWidth = "60%") : X && X.current && X.current.base && X.current.base.style.removeProperty("max-width")
    }), [k, S]), o((() => {
        window.addEventListener("resize", (() => {
            const e = Math.round(100 * window.devicePixelRatio);
            I(e)
        }))
    }), []), o((() => {
        P && x && (w(!x), pe(Y)), P && !x && k && (vd.hide(), pe(Y))
    }), [P]), o((() => {
        if (x && O)
            if (document.activeElement) {
                var e;
                const i = null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(":focus-visible");
                var t;
                if ("option" === (null == i ? void 0 : i.getAttribute("role")) && i.nextSibling && i.nextSibling.focus(), null === (null == i ? void 0 : i.nextElementSibling))(null === (t = i.parentElement) || void 0 === t ? void 0 : t.firstChild).focus()
            } else {
                var i;
                null === (i = K.current) || void 0 === i || i.focus()
            }
    }), [O]), o((() => {
        if (x && A)
            if (document.activeElement) {
                var e;
                const i = null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(":focus-visible");
                var t;
                if ("option" === (null == i ? void 0 : i.getAttribute("role")) && i.previousSibling && i.previousSibling.focus(), null === (null == i ? void 0 : i.previousSibling))(null === (t = i.parentElement) || void 0 === t ? void 0 : t.lastChild).focus()
            } else {
                var i;
                null === (i = K.current) || void 0 === i || i.focus()
            }
    }), [A]), o((() => (document.addEventListener("click", be), () => {
        document.removeEventListener("click", be)
    })), [be]);
    const ve = () => {
        x && K && setTimeout((() => {
            var e;
            ue(!0), null === (e = K.current) || void 0 === e || e.focus()
        }), 0), he(x || !1)
    };
    o((() => {
        T(s || a[0])
    }), [s, a]);
    const xe = r(((e, t) => {
        T(e), n(e.value), t && pe(Y)
    }), [n]);
    o((() => {
        X && X.current && X.current.base.addEventListener("mouseenter", (() => {
            ye()
        }))
    }), []);
    const we = r((() => {
            null != (null == X ? void 0 : X.current) && vd.show(X.current)
        }), [X]),
        Ce = r((() => {
            null != (null == X ? void 0 : X.current) && vd.hide(X.current)
        }), [X]),
        Te = r((e => {
            he(e), L(e)
        }), [he]);
    return o((() => {
        oe(!1), w(!1), q(0), re(!1)
    }), [ae, se, de, ce]), o((() => {
        if (fe) return re(!0), oe(!0), void ve();
        if (x) {
            const t = document.getElementById(_),
                i = le ? t : null == t ? void 0 : t.shadowRoot,
                o = (null == i ? void 0 : i.querySelector(`[data-testid=${f}]`)) || null,
                n = (null == i ? void 0 : i.querySelector('[data-testid="uc-container"]')) || null;
            if (o && n) {
                var e;
                let i = 0,
                    r = 0;
                const a = o.offsetHeight,
                    l = null == n ? void 0 : n.offsetHeight,
                    s = (null == t || null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.querySelector('[data-testid="uc-header-wrapper"]')) || null;
                if (s) {
                    const e = window.getComputedStyle(s, null).getPropertyValue("padding-top");
                    r = parseInt(e, 10) || 0, i = l - r
                }
                re(a > i), oe(!0)
            }
            ve()
        } else re(!1)
    }), [x]), x ? p(v, null, me && D(p(di, {
        visibility: ie,
        "data-testid": f,
        dropdownExpanded: x,
        id: d,
        top: Z,
        left: J,
        right: ee,
        isGlobeOnRight: V
    }, p(v, null, p(B, null, p(ci, {
        display: x,
        role: "listbox",
        "data-testid": b,
        maxHeight: ne ? g : 260,
        visibility: ie
    }, p(pi, {
        "aria-label": C.displayName,
        "aria-posinset": 1,
        "aria-selected": !0,
        "aria-setsize": a && a.length,
        "data-testid": `uc-menu-item-${C.value}`,
        lang: `${C.value}`,
        onClick: () => {
            w(!x), G && pe(Y)
        },
        role: "option",
        ref: K,
        style: m({}, W)
    }, p(hi, null, C.displayName), p(gi, null)), a.filter((e => e.value !== C.value)).map(((e, t) => p(ui, {
        "aria-label": e.displayName,
        "aria-posinset": t + 2,
        "aria-setsize": a && a.length,
        "data-testid": `uc-menu-item-${e.value}`,
        lang: `${e.value}`,
        onClick: () => {
            w(!x), xe(e, G)
        },
        role: "option",
        style: m({}, W)
    }, e.displayName))))))), me.current)) : p(di, {
        visibility: ie,
        "data-testid": f,
        dropdownExpanded: x,
        id: d,
        top: 0,
        left: 0,
        right: -1
    }, p(v, null, p(si, {
        display: x,
        "aria-label": l,
        "data-tip": !0,
        "data-for": $,
        "aria-haspopup": "listbox",
        "aria-describedby": $,
        "data-testid": y,
        onFocus: we,
        onBlur: Ce,
        onMouseEnter: we,
        onMouseLeave: Ce,
        onClick: () => {
            t(), Ce(), w(!0)
        },
        ref: Y
    }, p(mi, {
        label: l
    }))), !x && p(vd, {
        arrowColor: "transparent",
        ref: X,
        clickable: !0,
        disable: !0,
        id: $,
        effect: "solid",
        place: "left",
        role: "tooltip",
        uuid: $,
        delayShow: 100,
        overridePosition: ({
            left: e,
            top: t
        }) => (0 === M && 0 === F && (H(e), j(t)), {
            left: M,
            top: F
        }),
        afterShow: () => Te(!0),
        afterHide: () => Te(!1)
    }, p("div", {
        onMouseEnter: ye,
        onFocus: ye,
        lang: "en"
    }, "Selecting an option will immediately change the language")))
}
xd.defaultProps = {
    ariaLabel: null,
    defaultItem: null,
    id: "",
    isExpandedOnInit: !1,
    maxHeight: 100,
    testIdContainer: "",
    testIdMenu: "",
    testIdMenuButton: ""
};
const wd = {
        AF: {
            displayName: "Afrikaans",
            language: "Afrikaans"
        },
        AR: {
            displayName: "العربية",
            language: "Arabic"
        },
        AZ_LATN: {
            displayName: "Azərbaycanca",
            language: "Azerbaijani"
        },
        BE: {
            displayName: "Беларуская",
            language: "Belarusian"
        },
        BG: {
            displayName: "български",
            language: "Bulgarian"
        },
        BS: {
            displayName: "Bosanski",
            language: "Bosnian"
        },
        CA: {
            displayName: "Català",
            language: "Catalan"
        },
        CS: {
            displayName: "Čeština",
            language: "Czech"
        },
        CY: {
            displayName: "Cymraeg",
            language: "Welsh"
        },
        DA: {
            displayName: "Dansk",
            language: "Danish"
        },
        DE: {
            displayName: "Deutsch",
            language: "German"
        },
        EL: {
            displayName: "Ελληνικά",
            language: "Greek"
        },
        EN: {
            displayName: "English",
            language: "English"
        },
        ES: {
            displayName: "Español",
            language: "Spanish"
        },
        ET: {
            displayName: "Eesti",
            language: "Estonian"
        },
        FA: {
            displayName: "فارسی",
            language: "Persian (Farsi)"
        },
        FI: {
            displayName: "Suomi",
            language: "Finnish"
        },
        FR: {
            displayName: "Français",
            language: "French"
        },
        GL: {
            displayName: "Galego",
            language: "Galician"
        },
        HE: {
            displayName: "עברית",
            language: "Hebrew"
        },
        HI: {
            displayName: "हिन्दी",
            language: "Hindi"
        },
        HR: {
            displayName: "Hrvatski",
            language: "Croatian"
        },
        HU: {
            displayName: "Magyar",
            language: "Hungarian"
        },
        HY: {
            displayName: "Հայերեն",
            language: "Armenian"
        },
        ID: {
            displayName: "Bahasa Indonesia",
            language: "Indonesian"
        },
        IS: {
            displayName: "Íslenska",
            language: "Icelandic"
        },
        IT: {
            displayName: "Italiano",
            language: "Italian"
        },
        JA: {
            displayName: "日本語",
            language: "Japanese"
        },
        KA: {
            displayName: "ქართული",
            language: "Georgian"
        },
        KK: {
            displayName: "Қазақ Тілі",
            language: "Kazakh"
        },
        KO: {
            displayName: "한국어",
            language: "Korean"
        },
        LT: {
            displayName: "Lietuvių",
            language: "Lithuanian"
        },
        LV: {
            displayName: "Latviešu",
            language: "Latvian"
        },
        MK: {
            displayName: "Македонски",
            language: "Macedonian"
        },
        MN: {
            displayName: "монгол",
            language: "Mongolian"
        },
        MS: {
            displayName: "Bahasa Melayu",
            language: "Malay"
        },
        NB: {
            displayName: "Norsk (Bokmål)",
            language: "Norwegian (Bokmal)"
        },
        NL: {
            displayName: "Nederlands",
            language: "Dutch"
        },
        NN: {
            displayName: "Norsk (Nynorsk)",
            language: "Norwegian Nynorsk"
        },
        NO: {
            displayName: "Norsk",
            language: "Norwegian"
        },
        PL: {
            displayName: "Polski ",
            language: "Polish"
        },
        PT: {
            displayName: "Português (Portugal)",
            language: "Portuguese"
        },
        PT_BR: {
            displayName: "Português (Brasil)",
            language: "Brazilian Portuguese"
        },
        RO: {
            displayName: "Română",
            language: "Romanian"
        },
        RU: {
            displayName: "Русский",
            language: "Russian"
        },
        SK: {
            displayName: "Slovenčina",
            language: "Slovak"
        },
        SL: {
            displayName: "Slovenščina",
            language: "Slovenian"
        },
        SQ: {
            displayName: "Shqip",
            language: "Albanian"
        },
        SR: {
            displayName: "Српски",
            language: "Serbian (cyrillic)"
        },
        SR_LATN: {
            displayName: "Srpski",
            language: "Serbian (latin)"
        },
        SV: {
            displayName: "Svenska",
            language: "Swedish"
        },
        TH: {
            displayName: "ไทย",
            language: "Thai"
        },
        TR: {
            displayName: "Türkçe",
            language: "Turkish"
        },
        UK: {
            displayName: "Українська",
            language: "Ukrainian"
        },
        UR: {
            displayName: "اردو",
            language: "Urdu"
        },
        UZ_LATN: {
            displayName: "Oʻzbek",
            language: "Uzbek"
        },
        VI: {
            displayName: "Tiếng Việt",
            language: "Vietnamese"
        },
        ZH: {
            displayName: "简体中文",
            language: "Chinese Simplified"
        },
        ZH_HK: {
            displayName: "繁體中文 (香港)",
            language: "Chinese Traditional (Hong Kong)"
        },
        ZH_TW: {
            displayName: "繁體中文",
            language: "Chinese Traditional"
        }
    },
    Cd = s((({
        onChange: t
    }) => {
        var n, r;
        const {
            core: a,
            labels: l
        } = M(), [s, d] = e(260), c = (null == a ? void 0 : a.language.available.sort().map((e => {
            var t, i;
            return {
                ariaLabel: null === (t = wd[e.toUpperCase()]) || void 0 === t ? void 0 : t.language,
                displayName: null === (i = wd[e.toUpperCase()]) || void 0 === i ? void 0 : i.displayName,
                value: e.toUpperCase()
            }
        }))) || [], {
            view: u
        } = i(), h = u === z.SECOND_LAYER, g = () => {
            if (h) d(260);
            else {
                var e;
                const t = document.getElementById(_),
                    i = (null == t || null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.querySelector('[data-testid="uc-header-wrapper"]')) || null;
                if (i && i.clientHeight && s) {
                    const e = i.clientHeight;
                    d(e > 260 ? 260 : e)
                }
            }
        };
        return o((() => {
            g()
        }), []), !a || !l || a.language.available.length <= 1 || H(l) ? null : p(xd, {
            onShowList: g,
            onChange: t,
            items: c,
            ariaLabel: l.ariaLabels.languageSelector,
            defaultItem: {
                ariaLabel: null === (n = wd[a.language.selected.toUpperCase()]) || void 0 === n ? void 0 : n.language,
                displayName: null === (r = wd[a.language.selected.toUpperCase()]) || void 0 === r ? void 0 : r.displayName,
                value: a.language.selected.toUpperCase()
            },
            maxHeight: s,
            id: "usercentrics-language-selector",
            testIdContainer: "uc-language-container",
            testIdMenuButton: "uc-language-button",
            testIdMenu: "uc-language-menu"
        })
    })),
    Td = a.div(["display:block;min-height:", ";"], (({
        custom: e,
        large: t,
        medium: i,
        small: o,
        theme: n
    }) => e ? `${e}px` : t ? n.spacing.base.xl : i ? n.spacing.base.md : n.spacing.base.xs)),
    kd = s((({
        closeAriaLabel: e,
        children: t,
        fullScreenAriaLabel: i,
        logo: n,
        onClose: r,
        onFullScreen: a,
        onLanguageChange: l,
        showCloseButton: s = !1,
        showFullScreenButton: h,
        showLanguage: g = !1,
        title: f
    }) => {
        const b = Me({
                targetKey: "Escape"
            }),
            {
                langSelectorOpen: y
            } = N(),
            {
                isMobileExtraSmall: x,
                isLandscape: w
            } = E(),
            {
                rules: C
            } = c(u.LOGO),
            {
                rules: T
            } = c(u.TITLE_CONTAINER);
        o((() => {
            b && s && r && !y && r()
        }), [b]);
        const k = f && "" !== f && p(Zt, {
            alignment: n.url ? "flex-start" : "center",
            style: m({}, T)
        }, p(li, null, f));
        let L = 0;
        const S = d();
        return F && (g && (L += 24), s && (L += 44, g && (L += Number(x && !w ? S.spacing.mobile.md.replace("px", "") : S.spacing.base.md.replace("px", "")))), h && (L += 24 + Number(S.spacing.mobile.md.replace("px", "")))), p(Jt, {
            "data-testid": "uc-header",
            tabIndex: 0
        }, (n.url || g || s || h || f && "" !== f) && p(Qt, {
            reverseItems: "right" === n.position
        }, n.url ? p(ii, {
            position: n.position,
            style: m({}, C)
        }, n.altTag ? p(oi, {
            position: n.position,
            src: n.url,
            alt: n.altTag
        }) : p(oi, {
            position: n.position,
            src: n.url,
            "aria-hidden": "true",
            alt: ""
        })) : k, (g || s || h) && p(ei, {
            position: n.url ? n.position : "left",
            maxWidth: L > 0 ? L : null
        }, g && p(Cd, {
            onChange: l
        }), s && p(ti, {
            "aria-label": e,
            height: "28px",
            "data-testid": "uc-close-button",
            onClick: r
        }, p(ni, null)), h && p(ti, {
            "aria-label": i,
            height: "24px",
            "data-testid": "uc-fullscreen-button",
            onClick: a
        }, p(ri, null)))), !n.url && p(Td, {
            small: !0
        }), n.url && p(v, null, p(Td, {
            large: !0
        }), k, p(Td, {
            small: !0
        })), t)
    })),
    Ld = a.div(["align-items:center;background-color:", ";opacity:", ";height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:2147483639;overflow:hidden !important;"], (({
        theme: e
    }) => e.ui.overlay.color), (({
        theme: e
    }) => e.ui.overlay.opacity)),
    Sd = () => p(Ld, {
        "data-testid": "uc-overlay"
    }),
    Ed = a.a(["color:", ";font-weight:normal;text-decoration:none;word-break:break-word;&:hover{text-decoration:underline;}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.text.color)),
    Id = e => `\n    align-items: flex-end;\n    color: ${e.ui.text.color};\n    display: flex;\n    flex: 1 1 auto;\n    font-size: ${e.typography.size.xsmall};\n    font-weight: ${e.typography.weight.regular};\n    direction: ltr;\n`,
    Ad = a.div(["", " ", ";justify-content:left;padding:", " 0;", ";", "{justify-content:center;padding:0 0;}"], (({
        theme: e
    }) => Id(e)), (({
        theme: e
    }) => f(e, b.TEXT_ALIGNMENT_LEFT)), (({
        theme: e
    }) => e.spacing.base.sm), (({
        theme: e
    }) => f(e, b.PADDING_RIGHT, e.spacing.base.sm)), l.mobilePortrait),
    Rd = a.div(["", " justify-content:center;padding:0;"], (({
        theme: e
    }) => Id(e))),
    zd = ({
        sidePosition: e = !1
    }) => {
        const {
            labels: t,
            ui: i,
            core: o
        } = M(), {
            rules: n
        } = c(u.POWERED_BY);
        if (!t || !i || j(i) || !i.poweredBy || H(t)) return null;
        const {
            url: r,
            partnerUrl: a
        } = i.poweredBy, {
            label: l,
            partnerUrlLabel: s,
            urlLabel: d
        } = t.poweredBy, h = (null == o ? void 0 : o.language.selected.replace(/_/g, "-")) || "en", g = null == r ? void 0 : r.split("/");
        null == g || g.splice(3, 0, h);
        const f = null == g ? void 0 : g.join("/"),
            b = r ? p(Ed, {
                href: f,
                tabIndex: 0,
                target: "_blank",
                rel: "noopener nofollow"
            }, d) : d,
            y = a ? p(Ed, {
                href: a,
                tabIndex: 0,
                target: "_blank",
                rel: "noopener nofollow"
            }, s) : s,
            x = p("div", {
                tabIndex: -1,
                "aria-label": `${l} ${s&&`${d} & ${s}`||d}`,
                role: "link"
            }, p("span", {
                "aria-hidden": "true"
            }, l, String.fromCharCode(160), d && b, d && s && p(v, null, String.fromCharCode(160), "&", String.fromCharCode(160)), s && y));
        return p(e ? Ad : Rd, {
            style: m({}, n)
        }, x)
    },
    Od = a.button(["background:transparent;border:none;padding:0;", ";", ";text-decoration:underline;"], (({
        theme: e
    }) => f(e, b.TEXT_ALIGNMENT_LEFT)), (({
        theme: e
    }) => "" !== e.ui.links.fontColor && `color: ${e.ui.links.fontColor};`)),
    Pd = a(Od)([""]),
    Nd = a.div(["color:", ";display:flex;flex-direction:column;font-size:", ";line-height:1.25;overflow:auto;", ";padding:", " 0;list-style-position:inside;", "{", ";}", ""], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        maxHeight: e
    }) => e ? `max-height: ${e}px` : ""), (({
        theme: e
    }) => e.spacing.base.xxs), l.ie11, (({
        shouldLimitHeight: e
    }) => e ? "max-height: 60px" : ""), (({
        theme: e
    }) => "" !== e.ui.links.fontColor && `a {\n        color: ${e.ui.links.fontColor};\n      }`)),
    $d = s((({
        enableHTMLTextFormatting: t = !1,
        labelShowLess: n,
        labelShowMore: r,
        longDescription: a,
        maxDescriptionHeight: l,
        shortDescriptionDesktop: s,
        shortDescriptionMobile: d
    }) => {
        const {
            rules: h
        } = c(u.MESSAGE), {
            rules: g
        } = c(u.LINKS), {
            isDesktop: f
        } = E(), {
            uiVariant: b,
            view: y
        } = i(), [x, w] = e(), [C, T] = e(!0), L = R(null);
        o((() => {
            w(!f && d || s)
        }), [f, d, s]);
        const S = b === k.TCF && y === z.FIRST_LAYER;
        return x && C ? p(v, null, p(Nd, {
            "data-testid": "uc-message-container",
            id: G,
            maxHeight: l,
            shouldLimitHeight: S,
            style: m({}, h)
        }, t ? p("div", {
            dangerouslySetInnerHTML: {
                __html: x || ""
            }
        }) : x), p(Od, {
            onClick: () => T(!C),
            "data-testid": "uc-show-more",
            style: m({}, g)
        }, `${r}...`)) : a && "" !== a && p(v, null, p(Nd, {
            id: G,
            "data-testid": "uc-message-container",
            maxHeight: l,
            ref: L,
            shouldLimitHeight: S,
            style: m({}, h)
        }, t ? p("div", {
            dangerouslySetInnerHTML: {
                __html: a || ""
            }
        }) : a), x && p(Pd, {
            id: G,
            onClick: () => T(!C),
            "data-testid": "uc-show-less",
            style: m({}, g)
        }, `${n}...`))
    })),
    _d = a.i(["align-self:center;border:", ";border-width:", ";display:inline-block;height:", ";margin:", ";width:", ";transform:rotate(-45deg);"], (({
        color: e = "rgb(0, 69, 165)"
    }) => `solid ${e}`), (e => (e => {
        const {
            direction: t
        } = e, i = e.weight || "1";
        switch (t) {
            case "left":
                return `${i}px 0 0 ${i}px`;
            case "right":
                return `0 ${i}px ${i}px 0`;
            case "top":
                return `${i}px ${i}px 0 0`;
            case "down":
                return `0 0 ${i}px ${i}px`;
            default:
                return ""
        }
    })(e)), (({
        size: e = 5
    }) => `${e}px`), (({
        theme: e
    }) => `0 ${e.spacing.base.xs}`), (({
        size: e = 5
    }) => `${e}px`)),
    Dd = a.li(["font-size:", ";list-style:", ";margin:", ";max-width:100%;"], (({
        theme: e
    }) => e.typography.size.medium), (({
        showBulletPoints: e
    }) => e ? "initial" : "none"), (({
        addMargin: e,
        theme: t
    }) => e ? `0 ${t.spacing.base.md}` : "0")),
    Bd = a.ul(["max-width:100%;padding:", ";margin:0;"], (({
        noPadding: e,
        theme: t
    }) => e ? "0" : `0 ${t.spacing.base.md}`)),
    Md = a.div(["display:flex;flex-direction:column;height:100%;justify-content:space-between;width:100%;"]),
    Hd = a.div(["border-bottom:1px solid ", ";margin-bottom:", ";width:100%;"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.spacing.base.sm)),
    Fd = a.a(["color:", ";display:flex;font-size:", ";word-break:break-word;&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => e.typography.size.small)),
    jd = a.div(["color:", ";font-size:", ";margin-bottom:", ";width:100%;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.spacing.base.md)),
    Gd = a.div(["color:", ";font-size:", ";font-weight:", ";padding-bottom:", ";opacity:", ";"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.typography.weight.regular), (({
        theme: e
    }) => e.spacing.base.xxs), V);
Gd.defaultProps = {
    "aria-level": 3,
    role: "heading"
};
const Vd = a.div(["color:", ";font-size:", ";padding-bottom:", ";text-overflow:ellipsis;white-space:", ";"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        noPadding: e,
        theme: t
    }) => e ? "0px" : t.spacing.base.xs), (({
        keepLineBreaks: e
    }) => e ? "pre-wrap" : "normal")),
    Ud = a.ul(["display:flex;flex-direction:row;flex-wrap:wrap;width:100%;padding:0;margin:0;"]),
    Wd = a.li(["align-items:center;border:solid ", " 1px;border-radius:4px;color:", ";display:flex;font-size:", ";min-height:32px;", ";margin-bottom:", ";max-width:100%;padding:", ";", "{", ";margin-bottom:", ";}"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xs)), (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => e.spacing.base.xs), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.mobile.xl)), (({
        theme: e
    }) => e.spacing.base.sm)),
    Kd = a.div(["border:solid ", " 1px;border-radius:3px;display:flex;flex-wrap:wrap;font-size:", ";"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.typography.size.medium)),
    Xd = a.div(["display:flex;flex-direction:row;padding-top:", ";padding-bottom:", ";", ";", ";width:100%;"], (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => f(e, b.PADDING_RIGHT, 0)), (({
        theme: e
    }) => f(e, b.PADDING_LEFT, e.spacing.base.sm))),
    Yd = a.div(["width:50%;"]),
    Zd = a.div(["border-top:solid ", " 1px;display:flex;padding-top:", ";padding-bottom:", ";", ";width:100%;"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => f(e, b.PADDING_LEFT, e.spacing.base.sm))),
    qd = a.div(["align-items:center;display:flex;width:50%;"]),
    Jd = a.div(["height:16px;margin-right:", ";width:16px;"], (({
        theme: e
    }) => e.spacing.base.sm)),
    Qd = a.div(["position:relative;"]),
    ec = a.div(["position:relative;z-index:1;"]);
let tc, ic, oc = e => e;
const nc = a.div(["bottom:-1px;overflow:auto;position:absolute;top:-1px;z-index:2465274534753;width:100%;"]),
    rc = U(tc || (tc = oc `
  background-color: #ccc;
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;

  &::after {
    animation: shimmer 3s infinite;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transform: translateX(-100%);
    top: 0;
    z-index: 2;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`)),
    ac = a.div(["display:block;width:100%;"]),
    lc = a(Wd)(["background:transparent;font-size:", ";margin-right:0;padding:", ";width:100%;margin-bottom:", ";"], (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => `${e.spacing.base.sm} ${e.spacing.base.xs}`), (({
        showMarginBottom: e
    }) => `${e} ? 0 : initial`)),
    sc = a.span(["font-size:", ";"], (({
        theme: e
    }) => e.typography.size.small)),
    dc = a.span(["", " height:18px;width:150px;"], rc),
    cc = a.button(["background:transparent;border:0;cursor:pointer;font-size:", ";margin-left:auto;padding:0;outline:none;&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.typography.size.medium)),
    uc = a.span(["color:", ";font-size:", ";"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => e.typography.size.small)),
    pc = a.span(["", " background-color:", ";content:'';display:flex;height:16px;margin-left:auto;opacity:0.5;width:60px;"], rc, (({
        theme: e
    }) => e.color.primary.default)),
    hc = a(_d)(["border-color:", ";margin-bottom:2px;"], (({
        theme: e
    }) => e.ui.links.fontColor)),
    gc = a.div(["background-color:", ";display:flex;flex-direction:column;position:relative;width:100%;"], (({
        theme: e
    }) => e.ui.layer.backgroundColor)),
    mc = a.header(["border-bottom:solid 1px ", ";padding:", ";"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => `${e.spacing.base.xxs} ${e.spacing.base.md}`)),
    fc = a.div(["border:solid 1px ", ";border-radius:4px;box-shadow:0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.2);margin:", ";z-index:9;"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => `0 ${e.spacing.base.xl} ${e.spacing.base.md}`)),
    bc = a.div(["border-top:0;padding:", ";"], (({
        theme: e
    }) => e.spacing.base.md)),
    yc = a.nav(["background-color:", ";margin:0;padding:", ";position:sticky;top:0;width:100%;z-index:10;"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => `${e.spacing.base.lg} ${e.spacing.base.xl} 0`)),
    vc = a.button(["background:transparent;color:", ";border:0;margin-bottom:", ";outline:none;&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => e.spacing.base.md)),
    xc = a(_d)(["border-color:", ";margin:", ";"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => `0 ${e.spacing.base.xs} 2px 0`)),
    wc = a.div(["color:", ";font-weight:", ";font-size:", ";"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium)),
    Cc = a.div(["color:", ";font-size:", ";display:block;margin-top:", ";opacity:", ";min-width:fit-content;", ""], (({
        useLinkColor: e,
        theme: t
    }) => e ? t.ui.links.fontColor : t.ui.text.color), (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.spacing.base.xxs), V, (({
        showBullet: e
    }) => e ? U(ic || (ic = oc `
        &::before {
          background-color: ${0};
          content: '';
          display: inline-block;
          height: 4px;
          margin-bottom: 2px;
          margin-right: ${0};
          width: 4px;
        }
      `), (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.spacing.base.xs)) : "")),
    Tc = a.span(["margin-left:", ";"], (({
        theme: e
    }) => e.spacing.base.xxs)),
    kc = a(_d)(["border:", ";margin:", ";opacity:", ";"], (({
        theme: e
    }) => e.ui.links.fontColor), (({
        theme: e
    }) => `0 0 ${e.spacing.mobile.xxs} ${e.spacing.base.sm}`), V),
    Lc = ["fill"],
    Sc = e => {
        let {
            fill: t
        } = e, i = W(e, Lc);
        const o = d();
        return p("svg", h({
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, i), p("defs", null, p("path", {
            d: "m15.875 9-3.88 3.88L8.115 9a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0Z",
            id: "arrow-path"
        })), p("g", {
            id: "Arrow-Icon",
            fill: "none",
            fillRule: "evenodd"
        }, p("mask", {
            id: "arrow-mask",
            fill: "#fff"
        }, p("use", {
            xlinkHref: "#arrow-path"
        })), p("g", {
            mask: "url(#arrow-mask)",
            fill: t || o.ui.text.color
        }, p("path", {
            d: "M0 0h24v24H0z"
        }))))
    },
    Ec = ({
        fill: e
    }) => {
        const t = d();
        return p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20px",
            height: "22px",
            viewBox: "0 0 24 24",
            version: "1.1"
        }, p("defs", null, p("path", {
            d: "M15.5,1 L4.5,1 C3.4,1 2.5,1.9 2.5,3 L2.5,16 C2.5,16.55 2.95,17 3.5,17 C4.05,17 4.5,16.55 4.5,16 L4.5,4 C4.5,3.45 4.95,3 5.5,3 L15.5,3 C16.05,3 16.5,2.55 16.5,2 C16.5,1.45 16.05,1 15.5,1 Z M19.5,5 L8.5,5 C7.4,5 6.5,5.9 6.5,7 L6.5,21 C6.5,22.1 7.4,23 8.5,23 L19.5,23 C20.6,23 21.5,22.1 21.5,21 L21.5,7 C21.5,5.9 20.6,5 19.5,5 Z M18.5,21 L9.5,21 C8.95,21 8.5,20.55 8.5,20 L8.5,8 C8.5,7.45 8.95,7 9.5,7 L18.5,7 C19.05,7 19.5,7.45 19.5,8 L19.5,20 C19.5,20.55 19.05,21 18.5,21 Z",
            id: "copy-icon-path"
        })), p("g", {
            id: "[EUD-1160]-Copy-Controller-ID",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            id: "Group",
            transform: "translate(-2.000000, -1.000000)"
        }, p("mask", {
            id: "copy-icon-mask",
            fill: "white"
        }, p("use", {
            xlinkHref: "#copy-icon-path"
        })), p("g", {
            fillRule: "nonzero"
        }), p("g", {
            mask: "url(#copy-icon-mask)",
            fill: e || t.ui.text.color
        }, p("rect", {
            x: "0",
            y: "0",
            width: "24",
            height: "24"
        })))))
    },
    Ic = () => {
        const e = d();
        return p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "20",
            viewBox: "0 0 24 24",
            width: "20"
        }, p("path", {
            d: "M0 0h24v24H0V0z",
            fill: "none"
        }), p("path", {
            d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
            fill: e.ui.text.color
        }))
    },
    Ac = () => {
        const e = d();
        return p("svg", {
            width: "16px",
            height: "16px",
            viewBox: "0 0 24 24",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, p("title", null, "icon/no"), p("g", {
            id: "icon/no",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            id: "Group"
        }, p("polygon", {
            id: "Path",
            points: "0 0 24 0 24 24 0 24"
        }), p("path", {
            d: "M18.7,4.51 L12.7,2.26 C12.25,2.09 11.75,2.09 11.3,2.26 L5.3,4.51 C4.52,4.81 4,5.55 4,6.39 L4,11.09 C4,16.03 7.27,20.66 11.71,21.92 C11.9,21.97 12.1,21.97 12.28,21.92 C16.73,20.66 20,16.03 20,11.09 L20,6.39 C20,5.55 19.48,4.81 18.7,4.51 Z M14.8,14.79 L14.8,14.79 C14.41,15.18 13.78,15.18 13.39,14.8 L12,13.42 L10.61,14.8 C10.22,15.19 9.59,15.19 9.2,14.8 L9.2,14.8 C8.81,14.41 8.81,13.78 9.2,13.39 L10.59,12 L9.2,10.61 C8.81,10.22 8.81,9.59 9.2,9.2 C9.59,8.81 10.22,8.81 10.61,9.2 L12,10.59 L13.39,9.2 C13.78,8.81 14.41,8.81 14.8,9.2 L14.8,9.2 C15.19,9.59 15.19,10.22 14.8,10.61 L13.42,12 L14.8,13.38 C15.19,13.77 15.19,14.4 14.8,14.79 Z",
            id: "Shape",
            fill: e.ui.text.color,
            fillRule: "nonzero"
        }))))
    },
    Rc = () => {
        const e = d();
        return p("svg", {
            width: "16px",
            height: "16px",
            viewBox: "0 0 24 24",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, p("title", null, "icon/yes"), p("g", {
            id: "icon/yes",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, p("g", {
            id: "Group"
        }, p("polygon", {
            id: "Path",
            points: "0 0 24 0 24 24 0 24"
        }), p("path", {
            d: "M11.3,2.26 L5.3,4.51 C4.52,4.81 4,5.55 4,6.39 L4,11.1 C4,16.15 7.41,20.86 12,22.01 C16.59,20.86 20,16.15 20,11.1 L20,6.39 C20,5.56 19.48,4.81 18.7,4.52 L12.7,2.27 C12.25,2.09 11.75,2.09 11.3,2.26 Z M10.23,14.83 L8.11,12.71 C7.72,12.32 7.72,11.69 8.11,11.3 L8.11,11.3 C8.5,10.91 9.13,10.91 9.52,11.3 L10.93,12.71 L14.47,9.17 C14.86,8.78 15.49,8.78 15.88,9.17 L15.88,9.17 C16.27,9.56 16.27,10.19 15.88,10.58 L11.64,14.82 C11.26,15.22 10.62,15.22 10.23,14.83 Z",
            id: "Shape",
            fill: e.ui.text.color,
            fillRule: "nonzero"
        }))))
    },
    zc = a.div(["font-size:", ";"], (({
        theme: e
    }) => e.typography.size.medium)),
    Oc = a.button(["align-items:center;background:none !important;border:none;color:", ";cursor:pointer;display:inline-flex;font-size:", ";margin-top:1px;outline:none;padding:0 !important;text-decoration:none;&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.expandableLink.color), (({
        theme: e
    }) => e.typography.size.medium)),
    Pc = a.label(["color:", ";cursor:pointer;font-size:", ";margin-right:", ";text-decoration:none;"], (({
        theme: e
    }) => e.ui.expandableLink.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.spacing.base.xxs)),
    Nc = a(Pc)(["font-size:", ";"], (({
        theme: e
    }) => e.typography.size.small)),
    $c = a.div(["display:flex;flex-direction:column;flex-wrap:wrap;flex:auto;max-height:100%;max-width:100%;padding-top:", ";"], (({
        theme: e
    }) => e.spacing.base.sm)),
    _c = a.div(["align-items:center;display:flex;height:13px;justify-content:center;width:24px;margin:0 -5px;"]),
    Dc = a.div(["align-content:center;border:1px solid ", ";display:inline-flex;flex-direction:row;height:58px;justify-content:center;padding:", ";"], (({
        theme: e
    }) => e.color.neutral.default), (({
        theme: e
    }) => e.spacing.base.sm)),
    Bc = a.div(["align-items:center;display:flex;flex:", ";"], (({
        size: e
    }) => e || "initial")),
    Mc = a(Bc)(["font-size:", ";justify-content:center;"], (({
        theme: e
    }) => e.typography.size.medium)),
    Hc = a(Sc).attrs((e => ({
        fill: e.fill
    })))(["transform:", ";transition:transform 0.2s linear;"], (({
        upDirection: e
    }) => e ? "rotate(180deg)" : "rotate(0deg)"));
let Fc = function(e) {
    return e[e.ERROR = 0] = "ERROR", e[e.LOADED = 1] = "LOADED", e[e.LOADING = 2] = "LOADING", e[e.NOT_CALLED = 3] = "NOT_CALLED", e
}({});
const jc = a.div(["border:", ";border-bottom:", ";display:flex;flex-direction:column;font-size:", ";padding:", ";", "{flex-wrap:wrap;}"], (({
        theme: e
    }) => `1px solid ${e.ui.accentColor}`), (({
        theme: e,
        showBorderBottom: t
    }) => t ? `1px solid ${e.ui.accentColor}` : "none"), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => `${e.spacing.base.xs} ${e.spacing.base.sm}`), l.mobilePortrait),
    Gc = a.div(["display:flex;flex-direction:row;flex:1 1 auto;margin-bottom:", ";"], (({
        theme: e
    }) => e.spacing.base.xxs)),
    Vc = a.div(["width:", ";min-width:", ";"], (({
        isMobile: e
    }) => e ? "40%" : "25%"), (({
        isMobile: e
    }) => e ? "40%" : "25%")),
    Uc = a(Bc)(["font-size:", ";font-weight:bold;margin-bottom:", ";"], (({
        theme: e
    }) => e.typography.size.small), (({
        hasDescription: e,
        theme: t
    }) => e ? t.spacing.base.xxs : t.spacing.base.xs)),
    Wc = a(Bc)(["color:", ";font-size:", ";line-height:normal;margin-bottom:", ";"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.small), (({
        isDescription: e,
        theme: t
    }) => e ? t.spacing.base.xs : t.spacing.base.xxs)),
    Kc = s((({
        labels: e,
        identifier: t = "",
        name: i = "",
        nameId: o,
        description: n = null,
        type: r,
        maxAgeSeconds: a,
        cookieRefresh: l = null,
        domain: s = null,
        purposes: d = null,
        isLast: c
    }) => {
        const {
            isMobile: u
        } = E(), {
            tcfData: g
        } = K(), m = [];
        d && d.length > 0 && d.forEach((e => {
            var t;
            m.push((null == g || null === (t = g.purposes.find((t => t.id === e))) || void 0 === t ? void 0 : t.name) || "")
        }));
        const f = `cookie-information-${y(`${o} ${i&&i.length?`${i}`:`${t}`}-title-id`)}`,
            b = `cookie-information-${y(`${o} ${i&&i.length?`${i}`:`${t}`}-description-id`)}`;
        return p(jc, {
            showBorderBottom: c
        }, (t || i) && p(Uc, {
            id: f,
            hasDescription: !!n
        }, i && i.length ? `${i}` : `${t}`), n && p(Wc, {
            id: b,
            isDescription: !0
        }, n), p(nt, h({
            role: "table"
        }, (t || i) && {
            "aria-labelledby": f
        }, n && {
            "aria-describedby": b
        }), p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: u
        }, p(Wc, {
            role: "rowheader"
        }, `${e.type}:`)), p(Wc, {
            role: "cell"
        }, r)), "cookie" === r.toString() && p(v, null, p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: u
        }, p(Wc, {
            role: "rowheader"
        }, `${e.duration}:`)), p(Wc, {
            role: "cell"
        }, X(a, e))), null != l && p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: u
        }, p(Wc, {
            role: "rowheader"
        }, `${e.cookieRefresh}:`)), p(Wc, {
            role: "cell"
        }, l ? e.yes : e.no))), s && p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: u
        }, p(Wc, {
            role: "rowheader"
        }, `${e.domain}:`)), p(Wc, {
            role: "cell"
        }, Y(s, e.anyDomain, e.multipleDomains))), !!d && d.length > 0 && p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: u
        }, p(Wc, {
            role: "rowheader"
        }, `${e.purposes}:`)), p(Wc, {
            role: "cell"
        }, m.join("; ")))))
    })),
    Xc = s((({
        domain: e,
        labels: t,
        isLast: i,
        nameId: o,
        use: n
    }) => {
        const {
            isMobile: r
        } = E(), a = `cookie-information-domain-${y(`${o} ${e}`)}-title-id`;
        return p(jc, {
            showBorderBottom: i
        }, p(Uc, {
            id: a
        }, e), p(nt, {
            role: "table",
            "aria-labelledby": e
        }, !!n && p(Gc, {
            role: "row"
        }, p(Vc, {
            isMobile: r
        }, p(Wc, {
            role: "rowheader"
        }, `${t.purposes}:`)), p(Wc, {
            role: "cell"
        }, n))))
    }));
let Yc, Zc = e => e;
const qc = e => Z(Yc || (Yc = Zc `
  0% {
    background-color: ${0};
  }
  50%,
  100% {
    background-color: ${0};
  }
`), e.default, e.dark),
    Jc = a.div(["align-items:center;animation-delay:0.5s;animation:", " 1s infinite alternate;background-color:", ";border-radius:1.75px;color:", ";display:flex;height:3.5px;justify-content:center;left:-200px;position:relative;top:4px;width:3.5px;&:before,&:after{content:'';display:inline-block;position:absolute;top:0;}&:before{animation-delay:0s;animation:", " 1s infinite alternate;background-color:", ";border-radius:1.75px;color:", ";left:-10px;height:3.5px;width:3.5px;}&:after{animation-delay:1s;animation:", " 1s infinite alternate;background-color:", ";border-radius:1.75px;color:", ";left:10px;height:3.5px;width:3.5px;}"], (({
        theme: e
    }) => qc(e.color.neutral)), (({
        theme: e
    }) => e.typography.color.tertiary), (({
        theme: e
    }) => e.typography.color.tertiary), (({
        theme: e
    }) => qc(e.color.neutral)), (({
        theme: e
    }) => e.color.neutral.default), (({
        theme: e
    }) => e.color.neutral.default), (({
        theme: e
    }) => qc(e.color.neutral)), (({
        theme: e
    }) => e.color.neutral.default), (({
        theme: e
    }) => e.color.neutral.default)),
    Qc = a.div(["display:flex;flex-direction:row;justify-content:center;align-content:center;height:58px;border:1px solid ", ";"], (({
        theme: e
    }) => e.color.neutral.default)),
    eu = a.label(["display:flex;align-items:center;color:", ";font-size:", ";"], (({
        theme: e
    }) => e.typography.color.tertiary), (({
        theme: e
    }) => e.typography.size.medium)),
    tu = a.div(["display:flex;align-items:center;"]),
    iu = ({
        text: e = ""
    }) => p(Qc, null, e && p(eu, null, e), p(tu, null, p(Jc, null))),
    ou = ({
        deviceStorage: t,
        disclosureUrl: i,
        name: n,
        labels: r,
        isNonIabVendor: a,
        onToggleExpandable: l
    }) => {
        var s;
        const c = d(),
            [u, h] = e(!1),
            [g, m] = e({
                state: Fc.NOT_CALLED
            }),
            [f, b] = e(!1),
            {
                core: y
            } = M(),
            [x, w] = e(null == y || null === (s = y.language) || void 0 === s ? void 0 : s.selected),
            C = null == y ? void 0 : y.language.selected,
            {
                state: T
            } = g;
        o((() => {
            x !== C && T === Fc.LOADED && (w(C), m({
                state: Fc.LOADING
            }))
        }), [T, x, C]), o((() => {
            T !== Fc.NOT_CALLED && l && l()
        }), [l, T, u]), o((() => {
            (T === Fc.LOADING || f) && (i && "" !== i ? q(i).then((e => e && e.json())).then((e => {
                if (b(!1), null != e && e.disclosures) {
                    const {
                        disclosures: t,
                        domains: i
                    } = e;
                    m({
                        response: {
                            disclosures: t,
                            domains: i
                        },
                        state: Fc.LOADED
                    })
                } else m({
                    state: Fc.ERROR
                })
            })).catch((() => {
                b(!1), m({
                    state: Fc.ERROR
                })
            })) : t && t.disclosures.length > 0 && m({
                response: {
                    disclosures: t.disclosures,
                    domains: t.domains
                },
                state: Fc.LOADED
            }))
        }), [T, t, f, i]);
        return p(zc, null, p(Oc, {
            "data-testid": "uc-expandable-link",
            onClick: () => {
                h(!u), T === Fc.NOT_CALLED && m({
                    state: Fc.LOADING
                })
            },
            role: "button",
            "aria-expanded": u ? "true" : "false"
        }, p(Nc, null, r.storedInformation), p(_c, null, p(Hc, {
            fill: c.ui.expandableLink.color,
            upDirection: u
        }))), T !== Fc.NOT_CALLED && u && p($c, {
            "data-testid": "uc-expandable-content"
        }, a && p(Vd, null, r.storedInformationDescription), T === Fc.LOADING && p(iu, {
            text: r.loading
        }), T === Fc.LOADED && (e => {
            const {
                response: {
                    disclosures: t,
                    domains: i
                }
            } = e;
            return p(v, null, t && t.map(((e, i) => p(Kc, {
                labels: r,
                identifier: e.identifier,
                nameId: n,
                name: e.name,
                description: e.description,
                type: e.type,
                maxAgeSeconds: e.maxAgeSeconds,
                cookieRefresh: e.cookieRefresh,
                domain: e.domain,
                purposes: e.purposes,
                isLast: i === t.length - 1
            }))), i && !a && p(v, null, p(Td, {
                medium: !0
            }), i.map(((e, t) => p(Xc, {
                labels: r,
                domain: e.domain,
                use: e.use,
                nameId: n,
                isLast: t === i.length - 1
            })))))
        })(g), T === Fc.ERROR && p(Dc, null, p(Mc, null, r.error), p(Oc, {
            onClick: () => b(!0),
            role: "button",
            "aria-label": r.tryAgain
        }, p(Pc, null, r.tryAgain)))))
    },
    nu = a(Gd)(["font-size:", ";padding-top:", ";"], (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.spacing.base.xs)),
    ru = s((({
        ariaLevel: e = 3,
        cookieInformationLabels: t,
        cookieMaxAgeSeconds: i,
        cookieRefresh: o,
        deviceStorage: n,
        deviceStorageDisclosureUrl: r,
        name: a,
        onToggleExpandable: l,
        usesCookies: s,
        usesNonCookieAccess: d,
        isNonIabVendor: c
    }) => {
        const u = null !== i,
            h = null !== d,
            g = (null == n ? void 0 : n.disclosures) && n.disclosures.length > 0,
            m = r && "" !== r;
        return s || c || u || h || g || m ? p(jd, null, (u || h) && p(v, null, p(nu, {
            role: "heading",
            "aria-level": e
        }, t.title), c && p(Vd, null, t.description), p(Bd, null, null !== s && p(Dd, {
            showBulletPoints: !0
        }, `${t.cookieStorage}: ${s?`${t.yes}`:`${t.no}`}`), u && p(Dd, {
            showBulletPoints: !0
        }, `${t.maximumAge}: ${X(i,t)}`), null !== o && p(Dd, {
            showBulletPoints: !0
        }, `${t.cookieRefresh}: ${o?`${t.yes}`:`${t.no}`}`), null !== h && p(Dd, {
            showBulletPoints: !0
        }, `${t.nonCookieStorage}: ${d?`${t.yes}`:`${t.no}`}`))), (g || m) && p(v, null, p(Td, {
            custom: 12
        }), p(ou, {
            name: a,
            onToggleExpandable: l,
            deviceStorage: n,
            disclosureUrl: r,
            labels: t,
            isNonIabVendor: c
        }))) : null
    })),
    au = ({
        size: e
    }) => p(ac, null, Array(e).fill(Math.random()).map(((t, i) => p(lc, {
        key: `sub-placeholder-${t}-${Math.random()}-${i}`,
        showMarginBottom: e - 1 === i
    }, p(dc, null), p(pc, null), p(_d, {
        color: "rgba(0, 69, 165, 0.5)",
        direction: "right"
    }))))),
    lu = e => (e => {
        let t, i = Fc.LOADING;
        const o = e.then((e => {
            i = Fc.LOADED, t = e
        }), (e => {
            i = Fc.ERROR, t = e
        }));
        return {
            read() {
                if (i === Fc.LOADING) throw o;
                if (i === Fc.ERROR) throw t;
                return t
            }
        }
    })(e()),
    su = J((() => dynamicImportPolyfill("./SubServicesList-6b39bdfe.js",
        import.meta.url))),
    du = ({
        fetchSubServices: t,
        onOpenSubServiceDetail: n,
        onToggleExpandable: r,
        size: a
    }) => {
        const l = R(null),
            [s] = e((() => lu(t))),
            {
                scrollToSubServices: d,
                setScrollToSubServices: c
            } = i(),
            {
                labels: u
            } = M();
        return o((() => {
            const e = l.current;
            d && e && (e.scrollIntoView(!0), c(!1))
        }), [d, l]), !u || H(u) ? null : p(jd, {
            ref: l
        }, p(Gd, null, u.general.subservices), p(Vd, null, u.general.subservicesDescription), p(Ud, null, p(Q, {
            fallback: p(au, {
                size: a
            })
        }, p(su, {
            fetchSubServices: t,
            subServicesReader: s,
            onOpenSubServiceDetail: n,
            onToggleExpandable: r
        }))))
    },
    cu = e => {
        let t = e;
        return 1 === t.length && (t = "0".concat(e)), t
    };
var uu = s((({
    ariaLevel: t = 3,
    onOpenSubServiceDetail: n,
    onToggleExpandable: r,
    service: a
}) => {
    var l, s, d, c, u, g;
    const {
        uiVariant: m
    } = i(), {
        labels: f,
        ui: b
    } = M(), {
        consent: v,
        cookieMaxAgeSeconds: x,
        cookieRefresh: w,
        dataCollected: C,
        dataDistribution: T,
        dataProtectionOfficer: L,
        dataPurposes: S,
        dataRecipients: E,
        description: I,
        deviceStorage: A,
        deviceStorageDisclosureUrl: R,
        fetchSubServices: z,
        legalBasis: O,
        name: P,
        retentionPeriodDescription: N,
        technologiesUsed: $,
        usesCookies: _,
        usesNonCookieAccess: D
    } = a, B = a.subServicesLength, [F, j] = e(null), G = (ee(b) || te(b) || ie(b) ? b.secondLayer.dpsDisplayFormat : oe.ALL) === oe.ALL;
    if (o((() => {
            F && F.focus()
        }), [F]), !f || H(f)) return null;
    const V = e => {
            e.preventDefault(), e.stopImmediatePropagation(), e.currentTarget && j(e.currentTarget)
        },
        {
            cookieInformationLabels: U,
            general: W,
            serviceLabels: K
        } = (m === k.TCF && ne(f), {
            cookieInformationLabels: f.cookieInformation,
            general: f.general,
            serviceLabels: f.service
        });
    return p(Md, null, I && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.descriptionTitle), p(Vd, {
        keepLineBreaks: !0,
        noPadding: !0
    }, I)), ((null === (l = a.processingCompany) || void 0 === l ? void 0 : l.name) || (null === (s = a.processingCompany) || void 0 === s ? void 0 : s.address)) && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.processingCompanyTitle), p(Vd, {
        noPadding: !0
    }, a.processingCompany.name, a.processingCompany.name && p("br", null), a.processingCompany.address)), G && L && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataProtectionOfficer.title), p(Vd, null, K.dataProtectionOfficer.description), p(Fd, {
        target: "_blank",
        rel: "noopener",
        onFocus: V,
        href: ae(L) ? `mailto:${L}` : L,
        tabIndex: 0
    }, L)), S.length > 0 && "" !== S[0] && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataPurposes.title), p(Vd, null, K.dataPurposes.description), p(Ud, null, S.map((e => p(Wd, null, e))))), G && $.length > 0 && "" !== $[0] && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.technologiesUsed.title), p(Vd, null, K.technologiesUsed.description), p(Ud, null, $.map((e => p(Wd, null, e))))), C.length > 0 && "" !== C[0] && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataCollected.title), p(Vd, null, K.dataCollected.description), p(Ud, null, C.map((e => p(Wd, null, e))))), G && O.length > 0 && "" !== O[0] && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.legalBasis.title), p(Vd, null, K.legalBasis.description), p(Ud, null, O.map((e => p(Wd, null, e))))), G && (null == T ? void 0 : T.processingLocation) && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataDistribution.processingLocationTitle), p(Vd, null, K.dataDistribution.processingLocationDescription), p(Bd, null, p(Dd, {
        showBulletPoints: !0
    }, p(Vd, null, T.processingLocation)))), G && N && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.retentionPeriod.title), p(Vd, null, K.retentionPeriod.description), p(Bd, null, p(Dd, {
        showBulletPoints: !0
    }, p(Vd, null, N)))), G && (null == T ? void 0 : T.thirdPartyCountries) && (null == T || null === (d = T.thirdPartyCountries) || void 0 === d ? void 0 : d.length) > 0 && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataDistribution.thirdPartyCountriesTitle), p(Vd, null, K.dataDistribution.thirdPartyCountriesDescription), p(Ud, null, T.thirdPartyCountries.map((e => p(Wd, null, e))))), E.length > 0 && "" !== E[0] && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.dataRecipients.title), p(Vd, null, K.dataRecipients.description), p(Ud, null, E.map((e => p(Wd, null, e))))), G && (null === (c = a.urls) || void 0 === c ? void 0 : c.privacyPolicy) && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.urls.privacyPolicyTitle), p(Fd, {
        onFocus: V,
        target: "_blank",
        rel: "noopener",
        href: a.urls.privacyPolicy,
        tabIndex: 0
    }, a.urls.privacyPolicy)), G && (null === (u = a.urls) || void 0 === u ? void 0 : u.cookiePolicy) && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.urls.cookiePolicyTitle), p(Fd, {
        onFocus: V,
        target: "_blank",
        rel: "noopener",
        "data-testid": "uc-settings-cookie-link",
        href: a.urls.cookiePolicy,
        tabIndex: 0
    }, a.urls.cookiePolicy)), G && (null === (g = a.urls) || void 0 === g ? void 0 : g.optOut) && p(jd, null, p(Gd, {
        "aria-level": t
    }, K.urls.optOutTitle), p(Fd, {
        onFocus: V,
        target: "_blank",
        rel: "noopener",
        "data-testid": "uc-settings-output-link",
        href: a.urls.optOut,
        tabIndex: 0
    }, a.urls.optOut)), G && p(ru, {
        name: P,
        ariaLevel: t,
        cookieInformationLabels: U,
        cookieMaxAgeSeconds: x,
        cookieRefresh: w,
        deviceStorage: A,
        deviceStorageDisclosureUrl: R,
        onToggleExpandable: r,
        isNonIabVendor: !0,
        usesCookies: _,
        usesNonCookieAccess: D
    }), G && B > 0 && n ? p(du, {
        fetchSubServices: z,
        onOpenSubServiceDetail: n,
        onToggleExpandable: r,
        size: B
    }) : p(Hd, null), v.history.length > 0 && p(jd, null, p(Gd, {
        "aria-level": t,
        id: `${y(P)}-history-title-id`
    }, K.history.title), p(Vd, {
        id: `${y(P)}-history-description-id`
    }, K.history.description), p(Kd, h({
        role: "table",
        "aria-labelledby": `${y(P)}-history-title-id`
    }, K.history.description && "" !== K.history.description && {
        "aria-describedby": `${y(P)}-history-description-id`
    }), p(Xd, {
        role: "row"
    }, p(Yd, {
        role: "columnheader"
    }, W.decision), p(Yd, {
        role: "columnheader"
    }, W.date)), v.history.map((e => {
        let t = "";
        switch (e.type) {
            case re.EXPLICIT:
                t = e.status ? W.consentGiven : W.consentNotGiven;
                break;
            case re.IMPLICIT:
                t = e.status ? W.implicitYes : W.implicitNo
        }
        return p(Zd, {
            role: "row"
        }, p(qd, {
            role: "cell"
        }, p(Jd, null, e.status ? p(Rc, null) : p(Ac, null)), t), p(qd, {
            role: "cell"
        }, (e => {
            let t = `${e.getDate()}`,
                i = `${e.getMonth()+1}`,
                o = `${e.getFullYear()}`,
                n = `${e.getHours()}`,
                r = `${e.getMinutes()}`;
            return t = cu(t), i = cu(i), o = cu(o), n = cu(n), r = cu(r), `${t}.${i}.${o}, ${n}:${r}`
        })(new Date(e.timestamp))))
    })))))
}));
const pu = ({
        subService: e,
        onCloseDetail: t
    }) => {
        const {
            uiVariant: o
        } = i(), {
            labels: n
        } = M();
        if (!n || H(n)) return null;
        const r = (o === k.TCF && ne(n), n.general.back);
        return p(gc, null, p(yc, null, p(vc, {
            type: "button",
            onClick: t
        }, p(xc, {
            direction: "left"
        }), r)), p(fc, null, p(mc, null, p(wc, {
            role: "heading",
            "aria-level": 3
        }, e.name)), p(bc, null, p(uu, {
            ariaLevel: 3,
            service: e
        }))))
    },
    hu = a.div(["display:block;height:100%;position:relative;overflow-y:auto;", ";scrollbar-width:thin;z-index:1;max-height:", ";", ";", "{overflow:auto;min-height:", ";}", "{", ";}::-webkit-scrollbar{width:8px;", ";}::-webkit-scrollbar-thumb{", ";-webkit-border-radius:1ex;}"], (({
        theme: e
    }) => `scrollbar-color: ${e.ui.scroll.color} ${e.ui.scroll.background}`), (({
        layerPlacement: e,
        isMobile: t
    }) => e === w.SIDE || t ? "initial" : "65vh"), (({
        theme: e,
        useBackgroundColor: t
    }) => t ? `background-color: ${e.ui.layer.backgroundColor}` : `background-color: ${e.ui.secondLayer.backgroundColor}`), l.ie11, (({
        minHeight: e
    }) => e ? `${e}px` : "80px"), l.mobileLandscape || l.mobilePortrait || l.mobilePortraitXS, (({
        useColor: e,
        theme: t
    }) => e && `color: ${t.ui.text.color}`), (({
        theme: e
    }) => `background: ${e.ui.scroll.background}`), (({
        theme: e
    }) => `background: ${e.ui.scroll.color}`)),
    gu = ({
        children: e,
        layerPlacement: t,
        minHeight: i,
        useBackgroundColor: o = !1,
        useColor: n = !1
    }) => {
        const r = ce(),
            {
                isDesktop: a
            } = E(),
            l = le(e).map((e => se(e) ? I(e, {
                scrollerRef: r
            }) : e));
        return p(hu, {
            ref: r,
            "data-testid": de,
            layerPlacement: t,
            minHeight: i,
            useBackgroundColor: o,
            useColor: n,
            isMobile: !a,
            tabIndex: -1
        }, p(rt, {
            tabIndex: -1,
            useBackgroundColor: o
        }, l))
    },
    mu = () => {
        const {
            selectedSubService: e,
            setSelectedSubService: t
        } = ue();
        return {
            onCloseSubServiceDetail: () => {
                e && t(null)
            },
            onOpenSubServiceDetail: e => {
                t(e)
            }
        }
    },
    fu = s((({
        children: e,
        customActions: t,
        footer: n,
        header: r,
        layerSettings: a,
        useBackgroundColor: l = !1,
        setTrackingPixel: s
    }) => {
        var d, h, g;
        const {
            core: f,
            labels: b,
            ui: y
        } = M(), {
            isAmpEnabled: x,
            view: C,
            firstLayerVariant: T
        } = i(), {
            isDesktop: k,
            isIE: L,
            isMobile: S,
            isPortrait: I,
            isLandscape: A
        } = E(), P = R(null), {
            rules: $
        } = c(u.LAYER), {
            rules: D
        } = c(u.SECOND_LAYER), {
            rules: V
        } = c(u.BANNER_CONTENT), {
            rules: U
        } = c(u.BANNER_FOOTER_CONTENT), W = V ? Xt(V, ["border-top-left-radius", "border-top-right-radius"]) : {}, K = V ? Xt(V, ["border-bottom-left-radius", "border-bottom-right-radius"]) : {}, {
            rules: X
        } = c(u.MESSAGE), Y = Me({
            targetKey: "Enter"
        }), {
            blockConsumeFocus: Z,
            blockFocus: q,
            consumeNextFocus: J,
            nextFocus: Q,
            setNextFocus: ee
        } = N(), {
            onCloseSubServiceDetail: te
        } = mu(), {
            selectedSubService: ie
        } = ue(), oe = R(null);
        let ne = $;
        if (C === z.SECOND_LAYER && (ne = D), o((() => {
                if (Y && C === z.FIRST_LAYER) {
                    let t = null;
                    try {
                        var e;
                        t = null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(":focus-visible")
                    } catch (e) {
                        t = null
                    }
                    if (t) {
                        const e = t.getAttribute("data-testid");
                        null !== e && ee(e)
                    }
                }
            }), [Y]), o((() => {
                const e = document.documentElement.clientHeight <= document.body.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
                (() => {
                    if (F && e > window.innerHeight && !document.hidden && S) {
                        var t;
                        const i = document.getElementById(_),
                            o = (null == i || null === (t = i.shadowRoot) || void 0 === t ? void 0 : t.querySelector(`#${ye}`)) || null;
                        null !== o && (o.style.bottom = e - window.innerHeight + "px")
                    }
                })()
            }), []), o((() => {
                "string" != typeof Q ? null === Q ? q || Q || setTimeout((() => {
                    P.current && P.current.focus({
                        preventScroll: !0
                    })
                }), 300) : J() : Z || J()
            }), [t, n.showSecondLayerButtonRef, Q, C]), !f || !y || !b || H(b)) return null;
        const re = p(Pt, n.buttons),
            ae = p(zd, {
                sidePosition: a.placeLinksInFooter
            }),
            le = [{
                ariaLabel: b.links.privacyPolicy.label ? `${b.links.privacyPolicy.label}` : b.ariaLabels.privacyPolicyButton,
                label: b.links.privacyPolicy.label,
                type: pe.PRIVACY_POLICY_LINK,
                url: b.links.privacyPolicy.url
            }, {
                ariaLabel: b.links.cookiePolicy.label ? `${b.links.cookiePolicy.label}` : b.ariaLabels.cookiePolicyButton,
                label: b.links.cookiePolicy.label,
                type: pe.COOKIE_POLICY_LINK,
                url: b.links.cookiePolicy.url
            }, {
                ariaLabel: b.links.imprint.label ? `${b.links.imprint.label}` : b.ariaLabels.imprintButton,
                label: b.links.imprint.label,
                type: pe.IMPRINT_LINK,
                url: b.links.imprint.url
            }];
        C === z.FIRST_LAYER && b.integrationLinks && Object.entries(b.integrationLinks).forEach((([, e]) => {
            le.push({
                label: e.label,
                type: pe.INTEGRATIONS_LINK,
                url: e.url
            })
        }));
        const se = j(y) ? null : p(xt, {
                links: [...le],
                withoutMargin: !0,
                setTrackingPixel: s
            }, t && t.map((e => p(Dt, {
                ariaLabel: e.ariaLabel,
                label: e.label,
                onClick: e.onClick,
                elRef: e.elRef
            })))),
            de = C !== z.FIRST_LAYER || j(y) ? "left" : y.logo.position,
            ce = j(y) ? null : p(qt, {
                view: C,
                tabIndex: -1,
                firstLayerVariant: T,
                "data-testid": "uc-header-wrapper"
            }, p(kd, {
                closeAriaLabel: b.ariaLabels.closeButton,
                fullScreenAriaLabel: b.ariaLabels.fullscreenButton,
                onClose: () => {
                    var e;
                    te(), null === (e = r.closeOption) || void 0 === e || e.onClose()
                },
                logo: m(m({}, y.logo), {}, {
                    position: de
                }),
                onFullScreen: r.functions.onFullScreenAmp,
                onLanguageChange: r.functions.onLanguageChange,
                showCloseButton: (null === (d = r.closeOption) || void 0 === d ? void 0 : d.type) === he.ICON || r.showCloseButton && !ie,
                showFullScreenButton: r.showFullScreenButton,
                showLanguage: r.showLanguageSelector && f.language.available.length > 1,
                title: r.title
            }, p($d, {
                enableHTMLTextFormatting: r.enableHTMLTextFormatting,
                longDescription: r.description,
                maxDescriptionHeight: r.maxDescriptionHeight,
                shortDescriptionDesktop: r.shortDescriptionDesktop,
                shortDescriptionMobile: r.shortDescriptionMobile,
                labelShowLess: r.labelShowLess,
                labelShowMore: r.labelShowMore,
                withFading: !0
            }), r.showGlobalPrivacyControl && p(ut, {
                "data-testid": "uc-global-privacy-control-message"
            }, p(pt, {
                style: m({}, X)
            }, p(Nt, {
                fill: X && X.color ? X.color : ""
            })), p(ht, {
                style: m({}, X)
            }, b.general.gpcSignalHonored)), !a.placeLinksInFooter && p(v, null, p(Td, {
                small: !0
            }), se))),
            ve = p(Yt, {
                showBorder: n.showBorderBeforeFooter
            }, a.placeLinksInFooter ? p(ot, {
                style: m({}, U)
            }, p(nt, null, se, (k || A) && ae), re, S && I && ae) : p(v, null, re, ae)),
            xe = p(v, null, p(st, {
                tabIndex: -1,
                "data-testid": "uc-container",
                style: m({}, W)
            }, p(dt, {
                id: "uc-fading-wrapper",
                tabIndex: -1,
                isMobile: S,
                withFadingBottom: a.withFadingBottom,
                withFadingTop: a.withFadingTop,
                useBackgroundColor: l
            }, ge(b) && (null === (h = r.closeOption) || void 0 === h ? void 0 : h.type) === he.LINK && (null === (g = r.closeOption) || void 0 === g ? void 0 : g.onClose) && p(Ut, {
                denyLinkText: b.buttons.cnilDeny,
                onDenyAllHandler: r.closeOption.onClose
            }), p(gu, {
                minHeight: a.minVerticalScrollerHeight,
                useBackgroundColor: l,
                layerPlacement: a.layerPlacement
            }, ce, e), ie && p(nc, {
                ref: oe,
                tabIndex: 0
            }, ce, p(pu, {
                subService: ie,
                onCloseDetail: () => {
                    te()
                }
            })))), ve),
            we = a.isOverlayEnabled && !x,
            Ce = me.includes(f.language.selected);
        switch (a.layerPlacement) {
            case w.CENTER:
                return p(B, null, we && p(Sd, null), p(tt, {
                    clickThrough: !we
                }, p(it, {
                    lang: f.language.selected,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-labelledby": O,
                    "aria-describedby": G,
                    tabIndex: 0,
                    ref: P,
                    id: ye,
                    "data-testid": a.testId,
                    isAmpEnabled: x,
                    showBorderBottom: a.showBorderBottom || !1,
                    withInitialHeight: a.withInitialHeight || !1,
                    style: m({}, ne),
                    dir: Ce ? "rtl" : "ltr"
                }, xe)));
            case w.SIDE:
                return p(B, null, we && p(Sd, null), p(ct, {
                    clickThrough: !we,
                    lang: f.language.selected,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-labelledby": O,
                    tabIndex: 0,
                    ref: P,
                    id: be,
                    "data-testid": a.testId,
                    privacyButtonPosition: j(y) ? y.position : "",
                    showBorderBottom: a.showBorderBottom || !1,
                    side: a.side,
                    style: m({}, ne),
                    dir: Ce ? "rtl" : "ltr"
                }, xe));
            case w.TOP:
            case w.BOTTOM:
                return p(B, null, we && p(Sd, null), p(et, {
                    isIE: L,
                    tabIndex: 0,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-labelledby": O,
                    clickThrough: !we,
                    ref: P,
                    showBorderBottom: a.showBorderBottom || !1,
                    layerPlacement: a.layerPlacement,
                    isAmpEnabled: x,
                    "data-testid": a.testId,
                    style: m(m({}, ne), K),
                    dir: Ce ? "rtl" : "ltr"
                }, p(Qe, {
                    isIE: L,
                    isSafari: F,
                    lang: f.language.selected,
                    "data-testid": fe,
                    tabIndex: -1,
                    showBorderBottom: a.showBorderBottom || !1,
                    layerPlacement: a.layerPlacement,
                    isAmpEnabled: x,
                    style: m({}, V)
                }, xe)));
            default:
                return p(v, null)
        }
    })),
    bu = (...e) => e.reduce(((e, t, i) => {
        if (0 === i) return [...e, {
            end: t,
            start: 0
        }];
        const o = e[i - 1];
        return [...e, {
            end: o.end + t,
            start: o.end
        }]
    }), []),
    yu = (e, t, i, o) => {
        const n = t.length > 0 ? t.length + e : 0,
            r = i ? i.length : 0,
            a = o ? o.length : 0,
            l = 0 === n && r > 0 ? r + e : r;
        return [n, l, 0 === n && 0 === l && a > 0 ? a + e : a]
    },
    vu = e => m(m(m(m({}, e.height ? {
        height: e.height
    } : {}), e.width ? {
        width: e.width
    } : {}), e.position ? {
        position: e.position
    } : {}), e.top ? {
        top: e.top
    } : {}),
    xu = ({
        categories: e,
        setCategories: t
    }) => {
        const i = r((e => !!e.isEssential || e.services.some((e => e.consent.status))), []),
            o = r(((i, o) => {
                t(e.map((e => e.slug === o ? m(m({}, e), {}, {
                    services: e.services.map((e => {
                        const t = e;
                        return t.consent = m(m({}, e.consent), {}, {
                            status: i
                        }), t
                    }))
                }) : e)))
            }), [e, t]),
            n = r((i => {
                t(e.map((e => e.services.find((e => i.id === e.id)) ? m(m({}, e), {}, {
                    services: e.services.map((e => {
                        if (e === i) {
                            const t = e;
                            return t.consent = m(m({}, e.consent), {}, {
                                status: !e.consent.status
                            }), t
                        }
                        return e
                    }))
                }) : e)))
            }), [e, t]);
        return e.map((e => {
            const t = i(e),
                {
                    slug: r
                } = e;
            return {
                category: e,
                checked: t,
                onCategoryToggle: () => {
                    o(!t, r)
                },
                onServiceToggle: n
            }
        }))
    },
    wu = a.div(["display:flex;justify-content:space-between;"]),
    Cu = a.div(["padding:", ";", "{padding:", ";}"], (({
        theme: e
    }) => `0 ${e.spacing.base.xl}`), l.mobilePortrait, (({
        theme: e
    }) => `0 ${e.spacing.mobile.xxxl}`)),
    Tu = a.div(["font-size:", ";padding-top:", ";", ";width:100%;", "{", ";padding-top:0;}"], (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.spacing.base.xxs), (({
        theme: e
    }) => f(e, b.PADDING_RIGHT, e.spacing.base.xxxxl)), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.PADDING_RIGHT, e.spacing.mobile.xxxl))),
    ku = a.div(["align-items:center;border-bottom:1px solid ", ";display:inline-flex;margin-bottom:", ";padding-bottom:", ";width:100%;", "{margin-bottom:", ";padding-bottom:", ";}"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.spacing.base.sm), (({
        theme: e
    }) => e.spacing.base.sm), l.mobilePortrait, (({
        theme: e
    }) => e.spacing.mobile.xl), (({
        theme: e
    }) => e.spacing.mobile.xl)),
    Lu = a.div(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;+ div{margin-top:", ";}"], (({
        theme: e
    }) => e.spacing.base.sm)),
    Su = a.button(["align-self:center;background-color:", ";border:none;display:flex;flex-direction:row;margin-left:auto;margin-right:", ";outline:none;padding:0;text-decoration:none;&:hover{text-decoration:underline;}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => e.spacing.base.xs)),
    Eu = a.div(["color:", ";display:block;font-size:", ";width:100%;white-space:normal;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium)),
    Iu = a.div([""]),
    Au = a.button(["background:transparent;border:0;display:inline-block;padding:0;&:hover{cursor:pointer;}"]),
    Ru = ({
        useLinkColor: e = !1,
        divider: t = "arrow",
        size: i
    }) => {
        const {
            labels: o
        } = M();
        if (!o || H(o)) return null;
        const n = 1 === i ? o.general.subservice : o.general.subservices;
        return p(Cc, {
            useLinkColor: e,
            showBullet: "bullet" === t
        }, i, p(Tc, null, n), "arrow" === t && p(kc, {
            color: "rgb(48, 48, 48)",
            direction: "right"
        }))
    };
var zu = s((({
    category: e,
    detailedCategoryToggleAriaLabel: t,
    onToggle: n,
    showServicesToggles: r,
    service: a
}) => {
    const {
        uiVariant: l,
        isAmpEnabled: s,
        setScrollToIdTabViewCategoryPurpose: d,
        setScrollToSubServices: c
    } = i(), {
        ui: u
    } = M(), g = Me({
        targetKey: "Enter"
    }), {
        setNextFocus: m,
        setBlockConsumeFocus: f
    } = N(), b = l === k.CCPA, v = l === k.TCF, x = (ee(u) || te(u) || ie(u) ? u.secondLayer.dpsDisplayFormat : oe.ALL) === oe.ALL;
    o((() => {
        if (g) {
            let t = null;
            try {
                var e;
                t = null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(":focus-visible")
            } catch (e) {
                t = null
            }
            if (t) {
                const e = `uc-info-icon-${y(a.name)}`;
                (t.getAttribute("data-testid") || "") === e && (f(!0), m(y(a.name)))
            }
        }
    }), [g]);
    const w = async () => {
        const t = window[ve];
        t && await t.showSecondLayer(a.id), d(e.slug)
    };
    return p(Lu, null, p(Ye, h({
        checked: a.consent.status,
        id: `${a.id}`,
        isDisabled: a.isEssential,
        hideToggle: !r || b || s && !v,
        label: p(Eu, null, a.name)
    }, x && {
        labelExtraInfo: (() => {
            const {
                subServicesLength: e
            } = a;
            return e > 0 ? p(Iu, null, p(Au, {
                onClick: e => {
                    e.stopPropagation(), (async () => {
                        await w(), setTimeout((() => {
                            c(!0)
                        }))
                    })()
                }
            }, p(Ru, {
                useLinkColor: !0,
                size: a.subServicesLength
            }))) : null
        })()
    }, {
        labelActionComponent: p(Su, {
            "data-testid": `uc-info-icon-${y(a.name)}`,
            onClick: w,
            "aria-label": t
        }, p(Ic, null)),
        onToggle: () => {
            a.isEssential || n(a)
        },
        size: "small"
    })))
}));
let Ou, Pu, Nu, $u, _u, Du, Bu, Mu, Hu, Fu, ju = e => e;
const Gu = a.div(["border-bottom:1px solid ", ";margin:0;", ""], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.uiVariant !== k.CCPA && U(Ou || (Ou = ju `
      ${0} {
        margin: 0;
      }
    `), l.mobilePortrait))),
    Vu = a.div(["background-color:", ";border:1px solid ", ";border-radius:4px;display:flex;padding:2px;flex:initial;-ms-flex:1 0 auto;flex-direction:column;margin-bottom:", ";max-width:100%;width:100%;", ""], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.spacing.base.sm), (({
        theme: e
    }) => e.uiVariant !== k.CCPA && U(Pu || (Pu = ju `
      ${0} {
        padding: 0;
      }
    `), l.mobilePortrait))),
    Uu = a.div(["display:flex;flex-direction:row;", " ", ""], (({
        hasToggle: e,
        hideToggles: t,
        theme: i
    }) => i.uiVariant !== k.CCPA && U(Nu || (Nu = ju `
      ${0} {
        align-items: center;
        display: ${0};
      }
    `), l.mobilePortrait, ((e, t) => t ? "inline-flex" : e ? "block" : "flex")(e, t))), (({
        disableExpanding: e
    }) => e && U($u || ($u = ju `
      button {
        cursor: default;
      }
    `)))),
    Wu = a.button(["", ";background-color:transparent;border:none;color:", ";display:flex;font-size:", ";flex:1 1 40%;flex-direction:column;", ";outline:none;padding:", ";word-break:break-word;vertical-align:middle;&:focus-visible{outline-style:auto;outline-width:5px;}", ""], (({
        theme: e
    }) => f(e, b.TEXT_ALIGNMENT_LEFT)), (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xs)), (({
        theme: e
    }) => e.spacing.base.sm), (({
        hasToggle: e,
        hideToggles: t,
        theme: i
    }) => i.uiVariant !== k.CCPA && U(_u || (_u = ju `
      ${0} {
        border-bottom: ${0};
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        margin: 0;
        padding: ${0};
        width: 100%;
      }
    `), l.mobilePortrait, ((e, t, i) => t || !e ? "none" : `1px solid ${i}`)(e, t, i.ui.accentColor), i.spacing.mobile.xl))),
    Ku = a.div(["color:", ";font-size:", ";font-weight:", ";margin-top:2px;", ""], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e,
        useBoldTitle: t
    }) => t ? e.typography.weight.bold : e.typography.weight.regular), (({
        theme: e
    }) => e.uiVariant !== k.CCPA && U(Du || (Du = ju `
      ${0} {
        margin: 0;
      }
    `), l.mobilePortrait))),
    Xu = a.div(["font-size:", ";margin-top:", ";opacity:", ";"], (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.spacing.base.xxs), V),
    Yu = a.div(["color:", ";display:flex;margin-top:", ";width:100%;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.spacing.base.xxs)),
    Zu = a.div(["align-items:center;display:flex;", ";", ""], (({
        theme: e
    }) => f(e, b.PADDING_RIGHT, e.spacing.base.sm)), (({
        hideToggles: e,
        theme: t
    }) => t.uiVariant !== k.CCPA && U(Bu || (Bu = ju `
      ${0} {
        justify-content: space-between;
        height: ${0};
        ${0};
      }
    `), l.mobilePortrait, e ? "100%" : "initial", f(t, b.MARGIN_LEFT, t.spacing.base.sm)))),
    qu = a.button(["align-items:center;background-color:transparent;border:none;display:flex;height:100%;justify-content:center;", ";", ";outline:none;padding:", ";width:20px;&:focus-visible{outline-style:auto;outline-width:5px;}", ""], (({
        theme: e
    }) => f(e, b.MARGIN_LEFT, e.spacing.base.xs)), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xs)), (({
        theme: e
    }) => e.spacing.base.sm), (({
        hasToggle: e,
        hideToggles: t,
        theme: i
    }) => i.uiVariant !== k.CCPA && U(Mu || (Mu = ju `
      ${0} {
        ${0};
        ${0};
        height: auto; // IE11 fix
        height: ${0};
        margin: 0;
        padding: 10px;
        width: auto; // IE11 fix
        width: initial;
      }

      ${0} {
        ${0};
      }
    `), l.mobilePortrait, f(i, b.BORDER_RADIUS_BOTTOM_RIGHT, 4), e ? f(i, b.BORDER_LEFT, 1, xe.NONE, i.typography.color.tertiary) : f(i, b.BORDER_LEFT, 0, xe.NONE), t ? "100%" : "initial", l.mobilePortraitXS, f(i, b.BORDER_LEFT, 0, xe.NONE)))),
    Ju = a.div(["align-items:center;display:flex;height:15px;justify-content:center;width:15px;margin-bottom:6px;", ";"], (({
        theme: e
    }) => e.uiVariant !== k.CCPA && U(Hu || (Hu = ju `
      ${0} {
        height: 24px;
        width: 24px;
      }
    `), l.mobilePortrait))),
    Qu = (e, t) => `\n    border: solid ${t||e.ui.text.color};\n    padding: ${e.spacing.base.xxs};\n    border-width: 0 1.5px 1.5px 0;\n    height: 8px;\n    width: 8px;\n`,
    ep = a.i(["transform:translate(0,3.3px) rotate(-135deg);", ""], (({
        theme: e,
        ctrlIconColor: t
    }) => Qu(e, t))),
    tp = a.i(["transform:rotate(45deg);", ""], (({
        theme: e,
        ctrlIconColor: t
    }) => Qu(e, t))),
    ip = a.div(["display:flex;flex-direction:column;font-size:", ";padding:", ";flex:auto;flex-wrap:wrap;max-width:100%;max-height:100%;", ""], (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.spacing.base.sm), (({
        theme: e
    }) => e.uiVariant !== k.CCPA && U(Fu || (Fu = ju `
      ${0} {
        padding: ${0};
      }
    `), l.mobilePortrait, e.spacing.mobile.xl))),
    op = a.div(["align-items:center;display:flex;flex-direction:row;font-size:", ";", "{", ";flex:2;flex-wrap:wrap;> div{margin-top:", ";}div:last-child{margin-bottom:", ";}}"], (({
        theme: e
    }) => e.typography.size.small), l.mobilePortraitXS, (({
        theme: e
    }) => f(e, b.BORDER_RIGHT, 1, xe.SOLID, e.ui.accentColor)), (({
        theme: e
    }) => e.spacing.mobile.lg), (({
        theme: e
    }) => e.spacing.mobile.lg)),
    np = ({
        children: e,
        reverseDirection: t = !1
    }) => p(op, null, t ? e.reverse() : e),
    rp = s((({
        ariaLevel: t,
        children: n,
        description: a,
        disableExpanding: l = !1,
        label: s,
        onToggleExpandable: d,
        title: g,
        testid: f = "uc-expandable-card",
        hideToggle: b = !1,
        toggles: x,
        useBoldTitle: w = !0,
        isExpandedOnInit: C = !1,
        toggleDescribedBy: T,
        ctrlCardStyles: L,
        ctrlTitleStyles: S,
        ctrlIconColor: I
    }) => {
        const [A, z] = e(C), [O, P] = e(null), [$, _] = e(!1), D = Me({
            targetKey: "Tab"
        }), B = R(null), {
            isMobile: H
        } = E(), {
            uiVariant: F,
            isAmpEnabled: j
        } = i(), G = R(null), {
            labels: V
        } = M(), {
            blockConsumeFocus: U,
            setBlockConsumeFocus: W
        } = N(), {
            rules: K
        } = c(u.CARD_TITLE), {
            rules: X
        } = c(u.CARD_DESCRIPTION), Y = F === k.CCPA, Z = F === k.TCF, q = x && x.length > 0, J = y(g), Q = r((() => {
            var e;
            const t = null === (e = G.current) || void 0 === e ? void 0 : e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video');
            0 === (null == t ? void 0 : t.length) && _(!1)
        }), [G]), ee = r((() => {
            z(!A), P(!A)
        }), [A]);
        return o((() => {
            if (C && U) {
                var e;
                const t = null === (e = G.current) || void 0 === e ? void 0 : e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video');
                t && (null == t ? void 0 : t.length) > 0 && (t[0].focus(), W(!1), _(!1)), t && 0 === (null == t ? void 0 : t.length) && B.current && (B.current.focus(), W(!1), _(!1))
            }
        }), []), o((() => {
            null != O && d && d()
        }), [O, A, d]), o((() => {
            U || (_(A), Q())
        }), [A]), o((() => {
            A && D && _(!1)
        }), [D]), V ? p(Vu, {
            "data-testid": f,
            style: m({}, L)
        }, p(Uu, {
            hasToggle: q,
            hideToggles: j && !Z,
            disableExpanding: l
        }, p(Wu, h({
            ref: B,
            "data-testid": J,
            "aria-labelledby": `${J}-id`,
            hasToggle: q,
            hideToggles: j && !Z,
            onClick: () => {
                l || ee()
            },
            "aria-expanded": A ? "true" : "false"
        }, (a || T) && {
            "aria-describedby": `${J}-description-id`
        }), p(Ku, {
            id: `${J}-id`,
            "data-testid": `${J}-id`,
            role: "heading",
            "aria-level": t,
            useBoldTitle: w,
            style: m(m({}, K), S)
        }, g), a && p(Xu, {
            id: `${J}-description-id`,
            style: m({}, X)
        }, a), s && p(Yu, null, s)), p(Zu, {
            hideToggles: j && !Z
        }, x && p(np, {
            reverseDirection: H
        }, x.map((e => p(Ye, h({
            disableFocus: $,
            labelledBy: `${J}-id`
        }, a && {
            describedBy: `${J}-description-id`
        }, T && {
            describedBy: T
        }, {
            checked: null === e.checked ? e.defaultChecked : e.checked,
            hideToggle: b || Y || j && !Z,
            id: `toggle-${e.id}`,
            isDisabled: e.isDisabled,
            label: e.label,
            onToggle: e.onToggle
        }))))), !l && p(qu, h({}, $ && {
            tabIndex: -1
        }, {
            "data-testid": `uc-expandable-button-${y(g.toLowerCase())}`,
            hasToggle: q,
            hideToggles: j && !Z,
            onClick: () => {
                ee()
            },
            role: "button",
            "aria-labelledby": `${J}-id`
        }, a && {
            "aria-describedby": `${J}-description-id`
        }, T && {
            "aria-describedby": `${J}-description-id`
        }, {
            "aria-expanded": A ? "true" : "false"
        }), p(Ju, null, p(A ? ep : tp, {
            ctrlIconColor: I
        }))))), A && p(v, null, p(Gu, {
            style: m({}, L)
        }), p(ip, {
            ref: G,
            "data-testid": "uc-expandable-content"
        }, n))) : null
    })),
    ap = a.div(["background-color:", ";border-bottom:1px solid ", ";padding:", ";top:-2px;z-index:2147483641;position:sticky;position:-webkit-sticky;width:100%;"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => `${e.spacing.base.xxs} ${e.spacing.base.xl} 0`)),
    lp = a.button(["background-color:", ";border:none;border-bottom:", ";color:", ";cursor:pointer;font:inherit;font-size:", ";font-weight:", ";outline:none;padding:", ";width:50%;", "{padding-bottom:", ";}&:focus-visible{outline-style:auto;outline-width:5px;}"], (({
        theme: e
    }) => e.ui.layer.backgroundColor), (({
        active: e,
        theme: t
    }) => e ? ` 2px solid ${t.ui.tabs.color}` : " none"), (({
        theme: e,
        active: t
    }) => t ? e.ui.tabs.color : e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        active: e
    }) => e ? we : Ce), (({
        theme: e
    }) => `${e.spacing.base.xs} 0`), l.mobilePortrait, (({
        theme: e
    }) => e.spacing.base.md)),
    sp = a.div(["display:", ";flex:1 1 auto;outline:none;", "{flex:1 1 auto;}"], (({
        active: e
    }) => e ? "flex" : "none"), l.mobilePortrait),
    dp = a.div(["background-color:", ";flex:1;"], (({
        theme: e
    }) => e.ui.secondLayer.backgroundColor)),
    cp = a.div(["display:flex;flex:1 1 auto;flex-direction:column;min-height:100%;height:inherit;overflow:hidden;width:100%;padding-top:0px;"]),
    up = a.div(["color:", ";font-size:", ";font-weight:", ";margin:", ";"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => e.typography.weight.bold), (({
        theme: e
    }) => `${e.spacing.base.sm} 0`)),
    pp = a.div(["color:", ";margin-left:8px;display:inline;font-weight:500;"], (({
        theme: e
    }) => e.ui.text.color)),
    hp = Te({
        panelRefs: [],
        panels: null,
        registerPanel: () => null,
        registerRef: () => null,
        select: () => null,
        selected: null
    });
hp.displayName = "TabsContext";
const gp = s((({
        children: t
    }) => {
        const {
            tabView: n,
            setTabView: a
        } = i(), [l, s] = e(n), [d, c] = e([]), [u, h] = e(), [g, m] = e([]), f = r((() => {
            var e;
            h(null === (e = document.activeElement) || void 0 === e || null === (e = e.shadowRoot) || void 0 === e ? void 0 : e.querySelector(`[data-testid=${de}]`)), u && (u.scrollTop = 0)
        }), [u]);
        o((() => {
            l && l === n || s(n)
        }), [l, n]);
        return p(hp.Provider, {
            value: {
                panelRefs: g,
                panels: d,
                registerPanel: e => {
                    c((t => [...t, e]))
                },
                registerRef: e => {
                    m((t => [...t, e]))
                },
                select: e => {
                    s(e), a(e), f()
                },
                selected: l
            }
        }, t)
    })),
    mp = () => ke(hp),
    fp = ({
        ariaControls: e,
        ariaLabel: t,
        children: i,
        forPanel: n,
        testid: a,
        id: l
    }) => {
        const {
            panelRefs: s,
            panels: d,
            select: h,
            selected: g,
            registerRef: f
        } = mp(), b = g === n, {
            rules: y
        } = c(u.TAB_BUTTON), {
            rules: v
        } = c(u.TAB_BUTTON_ACTIVE), {
            blockConsumeFocus: x
        } = N(), w = R(null);
        o((() => {
            if (s && s.length > 0 && b && d) {
                const t = d.indexOf(n);
                var e;
                if (!x) null === (e = s[t].current) || void 0 === e || e.focus()
            }
        }), [g]), o((() => {
            null !== w && f(w)
        }), []);
        const C = r((e => {
            if (d && s) {
                const t = d.indexOf(n),
                    i = t === d.length - 1,
                    o = 0 === t;
                "ArrowLeft" === e && (i && h(d[t - 1]), o && h(d[d.length - 1])), "ArrowRight" === e && (i && h(d[0]), o && h(d[t + 1]))
            }
        }), [n, s, d, h]);
        return p(lp, {
            "aria-controls": e,
            tabIndex: b ? 0 : -1,
            ref: w,
            onKeyDown: e => C(e.key),
            id: l,
            active: b,
            "aria-selected": b,
            "aria-label": t,
            "data-testid": a,
            type: "button",
            role: "tab",
            onClick: () => {
                h(n)
            },
            style: m({}, b ? v : y)
        }, i)
    },
    bp = Le((({
        children: e,
        ariaLabel: t
    }, i) => {
        const {
            isDesktop: o
        } = E(), {
            rules: n
        } = c(u.TAB_BUTTONS_CONTAINER);
        return p(ap, {
            id: Se,
            isMobile: !o,
            ref: i,
            "data-aria-label": t,
            role: "tablist",
            "aria-labelledby": O,
            style: m({}, n)
        }, e)
    })),
    yp = ({
        children: e,
        id: t,
        testid: i,
        ariaLabelledBy: n
    }) => {
        const {
            registerPanel: r,
            selected: a
        } = mp(), {
            isMobile: l
        } = E();
        o((() => {
            r(t)
        }), []);
        return p(sp, {
            id: i,
            active: a === t,
            "data-testid": i,
            role: "tabpanel",
            tabIndex: -1,
            "aria-labelledby": n
        }, p(cp, {
            withFadingTop: !l
        }, e))
    },
    vp = s((({
        categories: e,
        hasTopSpace: t = !1,
        id: i,
        hideDataProcessingServices: o = !1,
        index: n,
        scrollToId: r,
        getItemSize: a,
        setItemSize: l,
        showToggles: s,
        title: d,
        showOnlyConsentToggle: c = !1,
        showServicesToggles: u,
        titleAriaLevel: h
    }) => {
        const g = R(null),
            {
                updateComponentSize: m
            } = Be({
                getItemSize: a,
                index: n,
                itemRef: g,
                setItemSize: l
            }),
            {
                labels: f,
                ui: b
            } = M();
        if (!f || !b || j(b) || H(f)) return null;
        if (t && 0 === n) return p(wu, {
            ref: g
        }, p(Td, {
            custom: 16
        }));
        if (null != d && (!t && 0 === i || t && 1 === i)) return p(wu, {
            ref: g
        }, p(up, {
            role: "heading",
            "aria-level": h
        }, d));
        let v = i;
        t && (v -= 1), null != d && (v -= 1);
        const {
            category: x,
            checked: w,
            onCategoryToggle: C,
            onServiceToggle: T
        } = e[v], k = [];
        return s && k.push({
            checked: w,
            id: x.slug,
            isDisabled: x.isEssential,
            onToggle: C
        }), p(wu, {
            ref: g
        }, c ? p(ku, {
            "data-testid": "uc-tcf-categories"
        }, p(Tu, {
            role: "heading",
            "aria-level": h + 1,
            id: `uc-tcf-category-${y(x.label)}-id`
        }, x.label), !x.isEssential && !b.firstLayer.hideToggles && p(qe, {
            checked: w,
            id: x.slug,
            onToggle: C,
            labelledBy: `uc-tcf-category-${y(x.label)}-id`
        })) : p(rp, {
            ariaLevel: h + 1,
            description: x.description,
            disableExpanding: o,
            onToggleExpandable: m,
            isExpandedOnInit: r === x.slug,
            title: x.label,
            hideToggle: !1,
            toggles: k
        }, x.services.sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => p(zu, {
            category: x,
            detailedCategoryToggleAriaLabel: `${f.ariaLabels.serviceInCategoryDetails}: ${e.name}`,
            onToggle: T,
            service: e,
            showServicesToggles: u
        })))))
    }));
class xp {
    constructor({
        itemCount: e,
        itemSizeGetter: t,
        estimatedItemSize: i
    }) {
        Ee(this, "itemSizeGetter", void 0), Ee(this, "itemCount", void 0), Ee(this, "estimatedItemSize", void 0), Ee(this, "lastMeasuredIndex", void 0), Ee(this, "itemSizeAndPositionData", void 0), this.itemSizeGetter = t, this.itemCount = e, this.estimatedItemSize = i, this.itemSizeAndPositionData = {}, this.lastMeasuredIndex = -1
    }
    updateConfig({
        itemCount: e,
        itemSizeGetter: t,
        estimatedItemSize: i
    }) {
        null != e && (this.itemCount = e), null != i && (this.estimatedItemSize = i), null != t && (this.itemSizeGetter = t)
    }
    getLastMeasuredIndex() {
        return this.lastMeasuredIndex
    }
    getSizeAndPositionForIndex(e) {
        if (e < 0 || e >= this.itemCount) throw Error(`Requested index ${e} is outside of range 0..${this.itemCount}`);
        if (e > this.lastMeasuredIndex) {
            const t = this.getSizeAndPositionOfLastMeasuredItem();
            let i = t.offset + t.size;
            for (let t = this.lastMeasuredIndex + 1; t <= e; t++) {
                const e = this.itemSizeGetter(t);
                if (null == e || isNaN(e)) throw Error(`Invalid size returned for index ${t} of value ${e}`);
                this.itemSizeAndPositionData[t] = {
                    offset: i,
                    size: e
                }, i += e
            }
            this.lastMeasuredIndex = e
        }
        return this.itemSizeAndPositionData[e]
    }
    getSizeAndPositionOfLastMeasuredItem() {
        return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : {
            offset: 0,
            size: 0
        }
    }
    getTotalSize() {
        const e = this.getSizeAndPositionOfLastMeasuredItem();
        return e.offset + e.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize
    }
    getUpdatedOffsetForIndex({
        align: e = Ie.START,
        containerSize: t,
        currentOffset: i,
        targetIndex: o,
        extraOffset: n = 0
    }) {
        if (t <= 0) return 0;
        const r = this.getSizeAndPositionForIndex(o);
        let a = 0;
        for (let e = o - 1; e >= 0; e--) a += this.getSizeAndPositionForIndex(e).size;
        const l = n,
            s = l - t + r.size;
        let d;
        switch (e) {
            case Ie.END:
                d = s;
                break;
            case Ie.CENTER:
                d = l - (t - r.size) / 2;
                break;
            case Ie.START:
                d = l + a;
                break;
            default:
                d = Math.max(s, Math.min(l, i))
        }
        return Math.max(0, d)
    }
    getVisibleRange({
        containerSize: e,
        offset: t,
        overscanCount: i
    }) {
        if (0 === this.getTotalSize()) return {};
        const o = t + e;
        let n = this.findNearestItem(t);
        if (void 0 === n) throw Error(`Invalid offset ${t} specified`);
        const r = this.getSizeAndPositionForIndex(n);
        t = r.offset + r.size;
        let a = n;
        for (; t < o && a < this.itemCount - 1;) t += this.getSizeAndPositionForIndex(a).size;
        return i && (n = Math.max(0, n - i), a = Math.min(a + i, this.itemCount - 1)), {
            start: n,
            stop: a
        }
    }
    resetItem(e) {
        this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, e - 1)
    }
    findNearestItem(e) {
        if (isNaN(e)) throw Error(`Invalid offset ${e} specified`);
        e = Math.max(0, e);
        const t = this.getSizeAndPositionOfLastMeasuredItem(),
            i = Math.max(0, this.lastMeasuredIndex);
        return t.offset >= e ? this.binarySearch({
            high: i,
            low: 0,
            offset: e
        }) : this.exponentialSearch({
            index: i,
            offset: e
        })
    }
    binarySearch({
        low: e,
        high: t,
        offset: i
    }) {
        let o = 0,
            n = 0;
        for (; e <= t;) {
            if (o = e + Math.floor((t - e) / 2), n = this.getSizeAndPositionForIndex(o).offset, n === i) return o;
            n < i ? e = o + 1 : n > i && (t = o - 1)
        }
        return e > 0 ? e - 1 : 0
    }
    exponentialSearch({
        index: e,
        offset: t
    }) {
        let i = 1;
        for (; e < this.itemCount && this.getSizeAndPositionForIndex(e).offset < t;) e += i, i *= 2;
        return this.binarySearch({
            high: Math.min(e, this.itemCount - 1),
            low: Math.floor(e / 2),
            offset: t
        })
    }
}
const wp = ["estimatedItemSize", "height", "itemCount", "itemSize", "onItemsRendered", "onScroll", "overscanCount", "renderItem", "scrollDirection", "scrollOffset", "scrollToAlignment", "scrollToIndex", "stickyIndices", "style", "width", "marginBottom", "scrollerRef"],
    Cp = {
        willChange: "transform"
    },
    Tp = {
        minHeight: "100%",
        position: "relative",
        width: "100%"
    },
    kp = {
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
    },
    Lp = m(m({}, kp), {}, {
        position: "sticky"
    });
class Sp extends Re {
    constructor(...e) {
        super(...e), Ee(this, "itemSizeGetter", (e => t => this.getSize(t, e))), Ee(this, "sizeAndPositionManager", new xp({
            estimatedItemSize: this.getEstimatedItemSize(),
            itemCount: this.props.itemCount,
            itemSizeGetter: this.itemSizeGetter(this.props.itemSize)
        })), Ee(this, "state", {
            offset: this.props.scrollOffset || null != this.props.scrollToIndex && this.getOffsetForIndex(this.props.scrollToIndex) || 0,
            scrollChangeReason: ze.REQUESTED
        }), Ee(this, "rootNode", null), Ee(this, "styleCache", {}), Ee(this, "handleScroll", (e => {
            const {
                onScroll: t
            } = this.props, i = this.getNodeOffset();
            !i || i < 0 || this.state.offset === i || e.target !== this.rootNode || (this.setState({
                offset: i,
                scrollChangeReason: ze.OBSERVED
            }), "function" == typeof t && t(i, e))
        }))
    }
    componentWillReceiveProps(e) {
        const {
            estimatedItemSize: t,
            itemCount: i,
            itemSize: o,
            scrollOffset: n,
            scrollToAlignment: r,
            scrollToIndex: a
        } = this.props, l = e.scrollToIndex !== a || e.scrollToAlignment !== r, s = e.itemCount !== i || e.itemSize !== o || e.estimatedItemSize !== t;
        e.itemSize !== o && this.sizeAndPositionManager.updateConfig({
            itemSizeGetter: this.itemSizeGetter(e.itemSize)
        }), e.itemCount === i && e.estimatedItemSize === t || this.sizeAndPositionManager.updateConfig({
            estimatedItemSize: this.getEstimatedItemSize(e),
            itemCount: e.itemCount
        }), s && this.recomputeSizes(), e.scrollOffset !== n ? this.setState({
            offset: e.scrollOffset || 0,
            scrollChangeReason: ze.REQUESTED
        }) : "number" == typeof e.scrollToIndex && (l || s) && this.setState({
            offset: this.getOffsetForIndex(e.scrollToIndex, e.scrollToAlignment, e.itemCount),
            scrollChangeReason: ze.REQUESTED
        })
    }
    componentDidMount() {
        const {
            scrollOffset: e,
            scrollToIndex: t,
            scrollerRef: i
        } = this.props;
        var o;
        i && i.current && null == this.rootNode && (this.rootNode = i.current, null === (o = this.rootNode) || void 0 === o || o.addEventListener("scroll", this.handleScroll, {
            passive: !0
        }), null != e ? this.scrollTo(e) : null != t && this.scrollTo(this.getOffsetForIndex(t)))
    }
    componentDidUpdate(e, t) {
        const {
            offset: i,
            scrollChangeReason: o
        } = this.state, {
            scrollOffset: n,
            scrollToIndex: r,
            scrollerRef: a
        } = this.props;
        var l;
        a && a.current && null == this.rootNode && (this.rootNode = a.current, null === (l = this.rootNode) || void 0 === l || l.addEventListener("scroll", this.handleScroll, {
            passive: !0
        }), null != n ? this.scrollTo(n) : null != r && this.scrollTo(this.getOffsetForIndex(r)));
        t.offset !== i && o === ze.REQUESTED && this.scrollTo(i)
    }
    componentWillUnmount() {
        var e;
        null === (e = this.rootNode) || void 0 === e || e.removeEventListener("scroll", this.handleScroll)
    }
    scrollTo(e) {
        const {
            scrollDirection: t = Ae.VERTICAL
        } = this.props;
        this.rootNode && (t === Ae.VERTICAL ? setTimeout((() => {
            this.rootNode && (this.rootNode.scrollTop = e)
        })) : this.rootNode.scrollLeft = e)
    }
    getOffsetForIndex(e, t = this.props.scrollToAlignment, i = this.props.itemCount) {
        var o, n;
        const r = document.getElementById(_),
            a = (null == r || null === (o = r.shadowRoot) || void 0 === o ? void 0 : o.querySelector(`[id="${ye}"]`)) || null,
            l = (null == r || null === (n = r.shadowRoot) || void 0 === n ? void 0 : n.querySelector('[data-testid="uc-header-wrapper"]')) || null,
            s = this.sizeAndPositionManager.getUpdatedOffsetForIndex({
                align: t || Ie.START,
                containerSize: null != a && a.clientHeight ? a.clientHeight : Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
                currentOffset: this.state && this.state.offset || 0,
                extraOffset: (null == l ? void 0 : l.clientHeight) || 0,
                targetIndex: e
            });
        return (e < 0 || e >= i) && (e = 0), s
    }
    recomputeSizes(e = 0) {
        this.styleCache = {}, this.sizeAndPositionManager.resetItem(e)
    }
    render() {
        const e = this.props,
            {
                estimatedItemSize: t,
                height: i,
                itemCount: o,
                itemSize: n,
                onItemsRendered: r,
                onScroll: a,
                overscanCount: l = 50,
                renderItem: s,
                scrollDirection: d = Ae.VERTICAL,
                scrollOffset: c,
                scrollToAlignment: u,
                scrollToIndex: g,
                stickyIndices: f,
                style: b,
                width: y,
                marginBottom: v,
                scrollerRef: x
            } = e,
            w = W(e, wp),
            {
                offset: C
            } = this.state,
            T = d === Ae.HORIZONTAL ? y : i,
            {
                start: k,
                stop: L
            } = this.sizeAndPositionManager.getVisibleRange({
                containerSize: T ? Number(T) : 0,
                offset: C,
                overscanCount: l
            }),
            S = [],
            E = m(m({}, Tp), {}, {
                [Oe[d]]: this.sizeAndPositionManager.getTotalSize()
            });
        if (null != f && 0 !== f.length && (f.forEach((e => S.push(s({
                index: e,
                style: this.getStyle(e, !0)
            })))), d === Ae.HORIZONTAL && (E.display = "flex")), void 0 !== k && void 0 !== L) {
            for (let e = k; e <= L; e++) null != f && f.includes(e) || S.push(s({
                index: e,
                style: this.getStyle(e, !1)
            }));
            "function" == typeof r && r({
                startIndex: k,
                stopIndex: L
            })
        }
        return p("div", h({
            ref: x
        }, w, {
            style: m(m(m({}, Cp), {}, {
                marginBottom: v
            }, b), {}, {
                [Oe[d]]: this.sizeAndPositionManager.getTotalSize(),
                width: y
            })
        }), p("div", {
            style: E
        }, S))
    }
    getNodeOffset() {
        const {
            scrollDirection: e = Ae.VERTICAL
        } = this.props;
        return this.rootNode ? e === Ae.VERTICAL ? this.rootNode.scrollTop : this.rootNode.scrollLeft : null
    }
    getEstimatedItemSize(e = this.props) {
        return e.estimatedItemSize || "number" == typeof e.itemSize && e.itemSize || 50
    }
    getSize(e, t) {
        return "function" == typeof t ? t(e) : Array.isArray(t) ? t[e] : t
    }
    getStyle(e, t) {
        const i = this.styleCache[e];
        if (i) return i;
        const {
            scrollDirection: o = Ae.VERTICAL
        } = this.props, {
            size: n,
            offset: r
        } = this.sizeAndPositionManager.getSizeAndPositionForIndex(e);
        return this.styleCache[e] = t ? m(m({}, Lp), {}, {
            [Oe[o]]: n,
            [Pe[o]]: r,
            [Ne[o]]: -(r + n),
            zIndex: 1
        }) : m(m({}, kp), {}, {
            [Oe[o]]: n,
            [$e[o]]: r
        })
    }
}
Ee(Sp, "defaultProps", {
    overscanCount: 50,
    scrollDirection: Ae.VERTICAL,
    width: "100%"
});
const Ep = ["estimatedItemSize", "isVisible", "overscanCount", "scrollDirection", "scrollToIndex", "stickyRef"];
var Ip = s(Le(((t, i) => {
    let {
        estimatedItemSize: o = 50,
        isVisible: r,
        overscanCount: a = 50,
        scrollDirection: l = Ae.VERTICAL,
        scrollToIndex: s,
        stickyRef: d
    } = t, c = W(t, Ep);
    const [u, g] = e(300), {
        isDesktop: m
    } = E(), f = ce();
    return n((() => {
        if (r && f.current) {
            const {
                offsetHeight: e
            } = f.current;
            if (e < 50) return;
            e !== u && g(e)
        }
    }), [r, u, f]), p(wu, {
        ref: f
    }, r && p(Sp, h({
        scrollerRef: i,
        stickyRef: d,
        virtualListRef: f,
        estimatedItemSize: o,
        height: u,
        overscanCount: a,
        scrollDirection: l,
        scrollToIndex: s,
        isDesktop: m
    }, c)))
})));
const Ap = a.div(["display:flex;flex-direction:row;flex-wrap:wrap;width:100%;padding:0;margin:0;"]),
    Rp = a.button(["align-items:center;border:solid ", " 1px;border-radius:4px;color:", ";display:flex;font-size:", ";min-height:32px;", ";margin-bottom:", ";max-width:100%;padding:", ";", "{", ";margin-bottom:", ";}"], (({
        theme: e
    }) => e.ui.accentColor), (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.xs)), (({
        theme: e
    }) => e.spacing.base.xs), (({
        theme: e
    }) => e.spacing.base.xs), l.mobilePortrait, (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.mobile.xl)), (({
        theme: e
    }) => e.spacing.base.sm)),
    zp = a(Ap)(["padding:", ";", "{font-size:", ";padding:", ";}"], (({
        theme: e
    }) => `${e.spacing.base.xl} ${e.spacing.base.xl} 0`), l.mobilePortraitXS, (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => `${e.spacing.base.md} ${e.spacing.base.md} 0`)),
    Op = a(Rp)(["border:solid 1px ", ";border-radius:16px;padding:6px 12px;", ";", ";", ";font-weight:", ";", "{flex-wrap:nowrap;max-width:calc(60vw);overflow-y:auto;white-space:nowrap;}"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => f(e, b.MARGIN_RIGHT, e.spacing.base.sm)), (({
        active: e
    }) => !e && "cursor: pointer;opacity: 0.7;"), (({
        theme: e,
        active: t
    }) => t && `outline: 1px solid ${e.ui.text.color};`), (({
        active: e
    }) => e ? 700 : 400), l.mobilePortraitXS),
    Pp = s((({
        ariaControls: e,
        labels: t,
        filterByThirdCountry: i,
        setFilterByThirdCountry: o
    }) => {
        const {
            rules: n
        } = c(u.THIRD_COUNTRY_FILTER), r = n ? Xt(n, ["border-color"]) : {}, [a] = Object.values(r);
        return p(zp, {
            role: "radiogroup",
            "aria-label": "Filters",
            "aria-controls": e
        }, p(Op, {
            style: m(m({}, n), r && {
                outlineColor: a
            }),
            active: !i,
            role: "radio",
            name: t.all,
            "aria-checked": !i,
            onClick: () => o(!1),
            "data-testid": "service-filter-all"
        }, t.all), p(Op, {
            active: !!i,
            role: "radio",
            name: "labels.thirdCountry",
            "aria-checked": !!i,
            onClick: () => o(!0),
            "data-testid": "service-filter-thirdcountry",
            style: m(m({}, n), r && {
                outlineColor: a
            })
        }, t.thirdCountry))
    })),
    Np = ({
        categories: e,
        services: t,
        setCategories: i
    }) => {
        const o = _e((() => t.sort(((e, t) => e.isEssential && t.isEssential ? e.name.toLowerCase() > t.name.toLowerCase() ? 1 : -1 : e.isEssential && !t.isEssential ? -1 : !e.isEssential && t.isEssential || e.name.toLowerCase() > t.name.toLowerCase() ? 1 : -1))), [t]),
            n = r(((t, o) => {
                i(e.reduce(((e, i) => [...e, m(m({}, i), {}, {
                    services: i.services.map((e => {
                        if (e.id === o) {
                            const i = e;
                            return i.consent = m(m({}, i.consent), {}, {
                                status: t
                            }), i
                        }
                        return e
                    }))
                })]), []))
            }), [e, i]);
        return {
            categories: e,
            onServiceToggle: n,
            services: o,
            setCategories: i
        }
    },
    $p = a.button(["background:none;border:none;height:20px;padding:0;width:20px;display:flex;align-items:center;justify-content:end;"]),
    _p = a.div(["border-radius:4px;display:flex;flex:initial;-ms-flex:1 0 auto;flex-direction:column;max-width:100%;width:100%;"]),
    Dp = a.div(["color:", ";text-overflow:ellipsis;overflow:hidden;width:75%;"], (({
        theme: e
    }) => e.ui.text.color)),
    Bp = a.div(["display:flex;flex-direction:row;font-size:", ";justify-content:space-between;align-items:center;"], (({
        theme: e
    }) => e.typography.size.medium)),
    Mp = a.label(["display:flex;color:", ";font-size:", ";justify-content:flex-end;margin-right:8px;flex:1;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.medium)),
    Hp = s((({
        customIconColor: t,
        customColor: i
    }) => {
        const {
            data: n,
            labels: r,
            core: a
        } = M(), [l, s] = e(!1), {
            isIE: d
        } = E();
        return o((() => {
            let e;
            return l && (e = setTimeout((() => s(!1)), 3e3)), () => {
                clearTimeout(e)
            }
        }), [l, null == n ? void 0 : n.controllerId]), n && r && !H(r) ? p(_p, null, p(Bp, null, p(Dp, {
            "data-testid": "uc-controller-id",
            style: i
        }, n.controllerId), l && p(Mp, {
            htmlFor: "uc-controller-item-button",
            "data-testid": "uc-controller-item-copy-text",
            style: i
        }, r.general.copied), p($p, {
            "aria-label": r.ariaLabels.copyControllerId,
            "data-testid": "uc-controller-item-button",
            title: "Copy",
            onClick: () => (() => {
                const e = null != n && n.controllerId ? `${n.controllerId}:${null==a?void 0:a.id}` : "";
                if (d) {
                    const t = i => {
                        var o;
                        const n = i;
                        null === (o = n.clipboardData) || void 0 === o || o.setData("text/plain", e), n.preventDefault(), document.removeEventListener("copy", t, !0)
                    };
                    document.addEventListener("copy", t, !0), document.execCommand("copy")
                } else navigator.clipboard.writeText(e);
                s(!0)
            })()
        }, !l && p(Ec, {
            fill: t,
            "data-testid": "uc-controller-item-copy-icon"
        }), l && p(Nt, {
            fill: t,
            "data-testid": "uc-controller-item-checkmark-icon"
        })))) : null
    })),
    Fp = s((({
        itemCount: e,
        getItemSize: t,
        setItemSize: i,
        title: o,
        titleAriaLevel: n
    }) => {
        const r = R(null),
            {
                rules: a
            } = c(u.CONTROLLER_ID_CARD),
            {
                updateComponentSize: l
            } = Be({
                getItemSize: t,
                index: e - 1,
                itemRef: r,
                setItemSize: i
            }),
            s = a ? Xt(a, ["color"]) : {},
            d = a ? Xt(a, ["background-color", "border-color"]) : {},
            [h] = Object.values(s);
        return p(wu, {
            ref: r
        }, p(rp, {
            ariaLevel: n + 1,
            title: o,
            hideToggle: !0,
            onToggleExpandable: l,
            ctrlCardStyles: d,
            ctrlTitleStyles: s,
            ctrlIconColor: h
        }, p(Hp, {
            customIconColor: h,
            customColor: s,
            "data-testid": "controller-id"
        })))
    })),
    jp = a.div(["font-size:", ";margin-right:", ";margin-top:", ";opacity:", ";white-space:pre-wrap;"], (({
        theme: e
    }) => e.typography.size.small), (({
        theme: e
    }) => e.spacing.base.sm), (({
        theme: e
    }) => e.spacing.base.xxs), V),
    Gp = s((({
        categories: e,
        hasTopSpace: t = !1,
        hideToggle: i = !1,
        id: o,
        index: n,
        onOpenSubServiceDetail: r,
        onToggleService: a,
        onToggleAllServices: l = () => {},
        services: s,
        getItemSize: d,
        setItemSize: c,
        title: u,
        titleAriaLevel: h = 2,
        showToggles: g = !0,
        scrollToId: m,
        totalVendorCount: f
    }) => {
        const b = R(null),
            {
                updateComponentSize: x
            } = Be({
                getItemSize: d,
                index: n,
                itemRef: b,
                setItemSize: c
            }),
            {
                labels: w,
                ui: C
            } = M(),
            T = (ee(C) || te(C) || ie(C) ? C.secondLayer.dpsDisplayFormat : oe.ALL) === oe.ALL;
        if (!w || !C || j(C) || H(w)) return null;
        const k = ne(w) ? w.secondLayer.vendorsTab : w.secondLayer.serviceTab;
        if (t && 0 === n) return p(wu, {
            ref: b
        }, p(Td, {
            custom: 16
        }));
        if (null != u && "" !== u && (!t && 0 === o || t && 1 === o) && ne(w) && ie(C)) return p(wu, {
            ref: b
        }, p(up, {
            role: "heading",
            "aria-level": h
        }, u, f && p(pp, null, "(", f, ")")), C.secondLayer.showToggleAllVendors && p(Oc, {
            "data-testid": "uc-toggle-all-non-iab-vendors",
            onClick: l
        }, p(Pc, null, w.vendor.toggleAll)));
        let L = o;
        t && (L -= 1), null != u && (L -= 1);
        const S = s[L],
            E = e => {
                a(e, S.id)
            },
            I = [];
        return g && I.push({
            ariaLabel: `${S.name} ${k} ${w.ariaLabels.vendorConsentToggle}`,
            checked: S.consent.status,
            id: S.id,
            isDisabled: S.isEssential,
            onToggle: E
        }), p(wu, {
            ref: b
        }, p(rp, {
            ariaLevel: h + 1,
            hideToggle: i,
            label: (t => {
                const i = e.find((e => e.slug === t));
                return p(v, null, i && p(jp, {
                    id: `${y(S.name)}-description-id`
                }, i.label), T && S.subServicesLength > 0 && p(Ru, {
                    divider: "bullet",
                    size: S.subServicesLength
                })) || ""
            })(S.categorySlug),
            onToggleExpandable: x,
            isExpandedOnInit: m === S.id,
            title: S.name,
            toggles: I,
            toggleDescribedBy: `${y(S.name)}-description-id`
        }, p(uu, {
            ariaLevel: h + 2,
            service: S,
            onOpenSubServiceDetail: r,
            onToggleExpandable: x
        })))
    }));
export {
    yp as A, Fe as B, Md as C, bp as D, rp as E, Pp as F, fp as G, fu as H, qe as I, gp as J, Ke as K, Bd as L, xu as M, Ye as N, Xe as O, at as P, lt as Q, wu as R, jd as S, Gd as T, lc as U, Td as V, sc as W, cc as X, uc as Y, hc as Z, Dd as a, up as b, Tu as c, ku as d, De as e, Cu as f, yu as g, vu as h, Ip as i, bu as j, vp as k, pp as l, Fd as m, ru as n, Oc as o, Xt as p, Pc as q, mu as r, Np as s, ec as t, Be as u, Qd as v, Gp as w, Fp as x, mp as y, dp as z
};