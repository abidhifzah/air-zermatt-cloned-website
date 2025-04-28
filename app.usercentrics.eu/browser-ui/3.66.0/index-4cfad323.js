import {
    aN as e,
    bN as t,
    bO as a,
    g as o,
    aD as s,
    aQ as n,
    aR as r,
    aP as l,
    cw as i,
    bI as c,
    aB as u,
    bC as d,
    bx as g,
    aE as y,
    cx as b,
    aI as L,
    aF as p,
    bs as h,
    y as f,
    bJ as m,
    aT as S,
    ay as C,
    bE as w,
    br as B,
    bD as T,
    bF as E,
    aJ as O,
    aK as A
} from "./index.module.js";
import {
    A as D,
    D as k,
    S as R
} from "./SaveButton-ea5e3a48.js";
import {
    N as x,
    B as I,
    H as v,
    J as F,
    P as N,
    Q as M,
    M as _
} from "./VirtualServiceItem-a3049bfc.js";
import {
    D as P
} from "./DefaultTabs-31022358.js";
const V = e.div(["align-items:center;display:inline-flex;margin-top:", ";margin-bottom:", ";", ";"], (({
        theme: e
    }) => e.spacing.base.xxs), (({
        theme: e
    }) => e.spacing.base.md), (({
        theme: e
    }) => t(e, a.MARGIN_RIGHT, e.spacing.base.md))),
    H = e.div(["color:", ";font-size:", ";display:flex;flex:1 0 auto;"], (({
        theme: e
    }) => e.ui.text.color), (({
        theme: e
    }) => e.typography.size.small)),
    U = ({
        category: e,
        checked: t,
        onCategoryToggle: a
    }) => o(V, {
        "data-testid": "uc-category-toggle"
    }, o(H, null, o(x, {
        checked: t,
        id: e.slug,
        isDisabled: e.isEssential,
        label: e.label,
        onToggle: a
    }))),
    Y = ({
        disabled: e,
        onClick: t,
        buttonRef: a,
        marginStyle: u
    }) => {
        const {
            labels: d
        } = s(), {
            rules: g
        } = n(r.BUTTON_MORE), {
            rules: y
        } = n(r.BUTTON_MORE, !0), b = l();
        return i(d) || c(d) ? o(I, {
            ariaLabel: d.ariaLabels.ccpaMoreInformation,
            backgroundColor: b.ui.buttons.more.bg,
            disabled: e,
            label: (L = d.buttons.showSecondLayer, L.charAt(0).toUpperCase() + L.slice(1)),
            onClick: t,
            testid: "uc-more-button",
            textColor: b.ui.buttons.more.text,
            buttonRef: a,
            buttonTypeRules: g,
            buttonHoverRules: y,
            marginStyle: u
        }) : null;
        var L
    },
    j = {
        firstLayerBanner: "uc-default-banner",
        firstLayerWall: "uc-default-wall",
        secondLayer: "uc-default-settings"
    };
var z = u((({
    onClose: e,
    onCustomize: t,
    onFullScreenAmp: a,
    onLanguageChange: n,
    onAcceptAll: r,
    onDenyAll: i,
    isAcceptDenyAllLoading: u,
    UC: x
}) => {
    const {
        core: I,
        labels: V,
        ui: H
    } = s(), {
        isIE: z,
        isMobile: J
    } = d(), {
        categories: K,
        getUpdatedCategories: G,
        setCategories: Q
    } = g(), {
        abTestVariant: W,
        closeView: q,
        firstLayerVariant: X,
        isAmpEnabled: Z,
        isInFullScreen: $,
        secondLayerVariant: ee,
        view: te
    } = y(), ae = b(te === L.FIRST_LAYER ? X : ee, j), oe = l(), [se, {
        loading: ne
    }] = p(x.dismissAmp, x), [re, {
        loading: le
    }] = p(x.updateServices, x), ie = h(null), ce = h(null);
    if (f((() => {
            window.dispatchEvent(new Event("UC_UI_RENDER_DONE"))
        })), !m(H) || !c(V)) return null;
    const ue = () => {
            i().then((() => {
                q()
            }))
        },
        de = le || ne || u,
        ge = o(D, {
            disabled: de,
            onClick: () => {
                r().then((() => {
                    q()
                }))
            },
            isSecondLayerView: te === L.SECOND_LAYER
        }),
        ye = o(k, {
            disabled: de,
            onClick: ue,
            isSecondLayerView: te === L.SECOND_LAYER
        }),
        be = o(R, {
            disabled: de,
            onClick: () => {
                le || ne || !I || re(E(K)).then((async () => {
                    Z && await se(), O(te, A.SAVE, W, x.setTrackingPixel), Q(await G(te)), q()
                }))
            }
        }),
        Le = o(Y, {
            disabled: de,
            onClick: t,
            buttonRef: ie
        }),
        pe = S(S(S({
            AcceptAllButton: ge
        }, !H.firstLayer.hideButtonDeny && {
            DenyAllButton: ye
        }), H.firstLayer.isCategoryTogglesEnabled && {
            SaveButton: be
        }), oe.ui.firstLayer.secondLayerTrigger === C.BUTTON && {
            MoreButton: Le
        });
    let he = {
        AcceptAllButton: ge
    };
    he = Z ? S(S({}, he), {}, {
        DenyAllButton: ye
    }) : H.secondLayer.hideButtonDeny ? S(S({}, he), {}, {
        SaveButton: be
    }) : S(S({}, he), {}, {
        DenyAllButton: ye,
        SaveButton: be
    });
    const fe = ae.layerPlacement === w.BOTTOM || ae.layerPlacement === w.TOP,
        me = oe.ui.firstLayer.secondLayerTrigger === C.LINK ? [{
            ariaLabel: V.buttons.showSecondLayer,
            elRef: ce,
            label: V.buttons.showSecondLayer,
            onClick: t
        }] : [],
        Se = () => {
            switch (H.firstLayer.closeOption) {
                case T.ICON:
                case T.LINK:
                    return ue();
                default:
                    return null
            }
        };
    switch (te) {
        case L.FIRST_LAYER:
            return o(v, {
                customActions: me,
                footer: {
                    buttons: pe,
                    showSecondLayerButtonRef: ie
                },
                header: S(S({}, H.firstLayer.closeOption && {
                    closeOption: {
                        onClose: Se,
                        type: H.firstLayer.closeOption || null
                    }
                }), {}, {
                    description: V.firstLayer.description.default,
                    enableHTMLTextFormatting: !0,
                    functions: {
                        onFullScreenAmp: a,
                        onLanguageChange: n
                    },
                    labelShowLess: V.general.showLess,
                    labelShowMore: V.general.showMore,
                    shortDescriptionDesktop: H.firstLayer.showShortDescriptionOnDesktop ? V.firstLayer.description.shortDesktop : "",
                    shortDescriptionMobile: H.firstLayer.showShortDescriptionOnMobile ? V.firstLayer.description.shortMobile : "",
                    showCloseButton: !(!H.firstLayer.closeOption || H.firstLayer.closeOption !== T.ICON),
                    showFullScreenButton: Z && !$,
                    showLanguageSelector: H.firstLayer.isLanguageSelectorEnabled,
                    title: V.firstLayer.title
                }),
                layerSettings: S(S(S({
                    isOverlayEnabled: H.firstLayer.isOverlayEnabled
                }, (z || J) && {
                    minVerticalScrollerHeight: 100
                }), ae), {}, {
                    placeLinksInFooter: fe,
                    showBorderBottom: !1,
                    withFadingBottom: !1,
                    withInitialHeight: !0
                }),
                useBackgroundColor: !0,
                setTrackingPixel: x.setTrackingPixel
            }, H.firstLayer.isCategoryTogglesEnabled && o(N, null, o(M, null, _({
                categories: K,
                setCategories: Q
            }).map((e => o(U, e))))));
        case L.SECOND_LAYER:
            return o(F, null, o(v, {
                footer: {
                    buttons: he,
                    showBorderBeforeFooter: !0
                },
                header: {
                    closeOption: {
                        onClose: e,
                        type: T.ICON
                    },
                    description: V.secondLayer.description,
                    enableHTMLTextFormatting: !0,
                    functions: {
                        onFullScreenAmp: a,
                        onLanguageChange: n
                    },
                    showCloseButton: Z && $ || !Z,
                    showFullScreenButton: Z && !$,
                    showLanguageSelector: H.secondLayer.isLanguageSelectorEnabled,
                    title: V.secondLayer.title
                },
                layerSettings: S(S(S({
                    isOverlayEnabled: H.secondLayer.isOverlayEnabled
                }, z && {
                    minVerticalScrollerHeight: 350
                }), ae), {}, {
                    placeLinksInFooter: fe,
                    showBorderBottom: !1,
                    side: H.secondLayer.side,
                    withFadingBottom: !0
                }),
                useBackgroundColor: !1,
                setTrackingPixel: x.setTrackingPixel
            }, o(P, null)));
        default:
            return o(B, null)
    }
}));
export {
    z as
    default
};