import {
    aB as a,
    aC as e,
    h as l,
    aD as n,
    aE as o,
    aF as t,
    aG as c,
    g as s,
    aH as i,
    aI as r,
    aJ as d,
    aK as A,
    aL as u,
    aM as C
} from "./index.module.js";
const g = e((() => dynamicImportPolyfill("./index-d475cc15.js",
        import.meta.url))),
    p = e((() => dynamicImportPolyfill("./index-74498589.js",
        import.meta.url))),
    m = e((() => dynamicImportPolyfill("./index-4cfad323.js",
        import.meta.url)));
var y = a((({
    acceptAllDefault: a,
    acceptAllTCF: e,
    denyAllDefault: y,
    denyAllTCF: F,
    showSecondLayer: I,
    onClose: L,
    onLanguageChange: T,
    UC: f
}) => {
    const [E, S] = l(!1), {
        ui: D
    } = n(), {
        abTestVariant: h,
        isAmpEnabled: w,
        setIsInFullScreen: N,
        setTabView: O,
        setView: R,
        uiVariant: k,
        view: x
    } = o(), [V, {
        loading: _
    }] = t(f.enterFullscreenAmp, f), [, {
        loading: b
    }] = t(f.acceptAllServices, f), [, {
        loading: P
    }] = t(f.acceptAllForTCF, f), [, {
        loading: M
    }] = t(f.acceptAllAmp, f), [, {
        loading: U
    }] = t(f.denyAllServices, f), [, {
        loading: j
    }] = t(f.denyAllForTCF, f), [, {
        loading: v
    }] = t(f.denyAllAmp, f), z = () => {
        _ || V().then((async () => {
            await R(r.SECOND_LAYER), N(!0)
        }))
    }, K = async () => {
        _ || (d(x, A.MORE_INFORMATION_LINK, h, f.setTrackingPixel), w && (await V(), N(!0)), O(u(D, k)), I())
    }, H = async () => {
        _ || (w && (await V(), N(!0)), d(x, A.MORE_INFORMATION_LINK, h, f.setTrackingPixel), O(C.SERVICES_VENDORS), await R(r.SECOND_LAYER))
    };
    switch (k) {
        case c.CCPA:
            return s(i, {
                fallback: null
            }, s(p, {
                onClose: L,
                onCustomize: K,
                onLanguageChange: T,
                setToggleCcpaChecked: S,
                toggleCcpaChecked: E,
                UC: f
            }));
        case c.DEFAULT:
            return s(i, {
                fallback: null
            }, s(m, {
                onClose: L,
                onCustomize: K,
                onFullScreenAmp: z,
                onLanguageChange: T,
                onAcceptAll: a,
                onDenyAll: y,
                isAcceptDenyAllLoading: b || U || v,
                UC: f
            }));
        case c.TCF:
            return s(i, {
                fallback: null
            }, s(g, {
                onCustomize: K,
                onFullScreenAmp: z,
                onLanguageChange: T,
                onShowVendorsHandler: H,
                onAcceptAll: e,
                onDenyAll: F,
                isAcceptDenyAllLoading: U || j || b || P || M,
                UC: f
            }));
        default:
            return null
    }
}));
export {
    y as
    default
};