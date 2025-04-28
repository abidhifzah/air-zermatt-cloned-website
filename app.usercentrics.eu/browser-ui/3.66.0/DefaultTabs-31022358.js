import {
    bv as e,
    aB as s,
    bx as t,
    aE as i,
    aD as a,
    aP as r,
    y as l,
    b$ as o,
    aI as c,
    g as n,
    by as d,
    bt as S,
    bB as g,
    h as u,
    aM as y,
    aQ as T,
    aR as b,
    cy as v,
    bo as I,
    aT as m,
    br as f,
    bz as E,
    bJ as L
} from "./index.module.js";
import {
    M as R,
    e as h,
    f as C,
    h as p,
    x as P,
    k as V,
    i as z,
    s as O,
    r as w,
    t as D,
    v as A,
    w as x,
    y as B,
    z as _,
    A as k,
    F as $,
    D as F,
    G
} from "./VirtualServiceItem-a3049bfc.js";
const N = e((({
    controllerIdLabel: e = "",
    hideDataProcessingServices: s = !1,
    isVisible: g,
    showServicesToggles: u = !0,
    stickyRef: y
}, T) => {
    const b = R(t()),
        v = s ? 1 : 0,
        I = b.length + 1 + v,
        {
            getItemSize: m,
            setItemSize: f
        } = h(I, 50),
        {
            clearCategoryPurposeScrollToId: E,
            scrollToIdTabViewCategoryPurpose: L,
            previousView: O
        } = i(),
        {
            ui: w
        } = a(),
        D = r();
    if (l((() => {
            g && E()
        }), [g]), !w || o(w)) return null;
    const A = O !== c.FIRST_LAYER && L;
    return n(z, d({
        "data-testid": "uc-virtual-list",
        ref: T,
        estimatedItemSize: 50,
        marginBottom: D.spacing.base.lg,
        isVisible: g,
        itemCount: I,
        itemSize: m,
        stickyRef: y
    }, A && {
        scrollToIndex: (() => {
            if (L && "string" == typeof L) {
                const e = b.findIndex((e => e.category.slug === L));
                if (e >= 0) return e + 1
            }
            return -1
        })()
    }, {
        renderItem: ({
            index: t,
            style: i
        }) => n(C, {
            key: t,
            style: p(i)
        }, v && t === I - 1 ? n(P, {
            titleAriaLevel: 2,
            getItemSize: m,
            itemCount: I,
            setItemSize: f,
            title: e
        }) : n(V, d({
            titleAriaLevel: 2,
            "data-testid": `uc-virtual-list-item-${t}`,
            categories: b,
            getItemSize: m,
            hasTopSpace: !0,
            hideDataProcessingServices: s,
            index: t,
            id: t
        }, A && {
            scrollToId: L
        }, {
            setItemSize: f,
            showToggles: !S(w) || !w.secondLayer.hideToggles,
            showServicesToggles: u
        }))),
        width: "100%"
    }))
}));
var U = s(N);
var j = s(e((({
    controllerIdLabel: e,
    filterByThirdCountry: s,
    isVisible: a,
    showServicesToggles: o = !0,
    title: c,
    stickyRef: S
}, u) => {
    const {
        categories: y,
        onServiceToggle: T,
        services: b
    } = O(t()), v = s ? b.filter((e => e.usesThirdCountry)) : b, I = v.length + 1 + 1, m = null == c ? I : I + 1, {
        getItemSize: f,
        setItemSize: E
    } = h(m, 50), {
        clearServiceVendorScrollToId: L,
        scrollToIdTabViewServiceVendors: R
    } = i(), {
        onCloseSubServiceDetail: V,
        onOpenSubServiceDetail: B
    } = w(), _ = r();
    l((() => {
        a && (V(), L())
    }), [a]);
    return n(A, null, n(D, null, n(z, d({
        "data-testid": "uc-virtual-list",
        ref: u,
        estimatedItemSize: 50,
        isVisible: a,
        itemCount: m,
        itemSize: f,
        marginBottom: _.spacing.base.lg,
        stickyRef: S
    }, R && {
        scrollToIndex: (() => {
            if (R && "string" == typeof R) {
                const e = v.findIndex((e => e.id === R));
                if (e >= 0) return e + 1
            }
            return -1
        })()
    }, {
        renderItem: ({
            index: s,
            style: t
        }) => n(C, {
            "data-testid": `uc-virtual-list-item-${s}`,
            key: s,
            style: p(t)
        }, (s => s === m - 1 ? n(P, {
            titleAriaLevel: 2,
            getItemSize: f,
            itemCount: m,
            setItemSize: E,
            title: e
        }) : g(v) ? n(x, d({
            titleAriaLevel: 2,
            categories: y,
            hideToggle: !o,
            hasTopSpace: !0,
            index: s,
            id: s,
            onOpenSubServiceDetail: B,
            onToggleService: T,
            getItemSize: f,
            setItemSize: E,
            services: v,
            title: c
        }, R && {
            scrollToId: R
        })) : null)(s)),
        width: "100%"
    }))))
})));
const M = s((({
    scrollerRef: e
}) => {
    const {
        services: s
    } = O(t()), {
        labels: r,
        ui: d
    } = a(), {
        selected: g,
        select: R
    } = B(), [h, C] = u(!1), p = y.CATEGORIES_PURPOSES, P = E(), {
        view: V
    } = i(), z = V === c.SECOND_LAYER, {
        rules: w
    } = T(b.TAB_CONTENT);
    l((() => {
        g || R(p)
    }), []);
    const D = () => !L(d) || !d.secondLayer.hideTogglesForServices;
    if (r && d && v(r) && !I(r) && !S(d) && !o(d)) {
        const {
            hideDataProcessingServices: t
        } = d.secondLayer;
        return t ? n(_, {
            style: z ? m({}, w) : {},
            "data-testid": "uc-tab-content-container"
        }, n(U, {
            controllerIdLabel: r.general.controllerId,
            hideDataProcessingServices: t,
            ref: e,
            stickyRef: P,
            isVisible: g === y.CATEGORIES_PURPOSES,
            showServicesToggles: D()
        })) : n(f, null, n(F, {
            ariaLabel: "SettingsTabs",
            ref: P
        }, n(G, {
            ariaControls: "uc-panel-categories",
            testid: "uc-tab-categories",
            forPanel: y.CATEGORIES_PURPOSES,
            id: `${r.secondLayer.categoryTab}-id`,
            ariaLabel: `${r.secondLayer.categoryTab}`
        }, r.secondLayer.categoryTab), n(G, {
            ariaControls: "uc-panel-services",
            testid: "uc-tab-services",
            forPanel: y.SERVICES_VENDORS,
            ariaLabel: `${r.secondLayer.serviceTab}`,
            id: `${r.secondLayer.serviceTab}-id`
        }, r.secondLayer.serviceTab)), n(_, {
            style: z ? m({}, w) : {},
            "data-testid": "uc-tab-content-container"
        }, n(k, {
            id: y.CATEGORIES_PURPOSES,
            testid: "uc-panel-categories",
            ariaLabelledBy: `${r.secondLayer.categoryTab}-id`
        }, n(U, {
            ref: e,
            stickyRef: P,
            isVisible: g === y.CATEGORIES_PURPOSES,
            showServicesToggles: D()
        })), n(k, {
            id: y.SERVICES_VENDORS,
            testid: "uc-panel-services",
            ariaLabelledBy: `${r.secondLayer.serviceTab}-id`
        }, r.secondLayer.dataTransferFilter && s.some((e => e.usesThirdCountry)) && n($, {
            ariaControls: "uc-panel-services",
            labels: r.secondLayer.dataTransferFilter,
            filterByThirdCountry: h,
            setFilterByThirdCountry: C
        }), n(j, {
            ref: e,
            stickyRef: P,
            controllerIdLabel: r.general.controllerId,
            filterByThirdCountry: h,
            isVisible: g === y.SERVICES_VENDORS,
            showServicesToggles: D()
        }))))
    }
    return null
}));
export {
    M as D
};