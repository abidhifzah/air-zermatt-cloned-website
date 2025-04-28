import {
    aD as e,
    aQ as t,
    aR as l,
    aP as o,
    bo as a,
    bt as n,
    bI as s,
    bJ as u,
    g as b,
    aS as r
} from "./index.module.js";
import {
    B as i
} from "./VirtualServiceItem-a3049bfc.js";
const c = ({
        disabled: r,
        onClick: c,
        isSecondLayerView: d,
        marginStyle: y
    }) => {
        const {
            labels: T,
            ui: C
        } = e(), {
            rules: S
        } = t(l.BUTTON_ACCEPT), {
            rules: g
        } = t(l.BUTTON_ACCEPT, !0), m = o();
        let p = "";
        return a(T) && n(C) || s(T) && u(C) ? (p = s(T) && d && T.secondLayer.acceptButtonLabel ? T.secondLayer.acceptButtonLabel : null == T ? void 0 : T.buttons.acceptAll, b(i, {
            backgroundColor: m.ui.buttons.accept.bg,
            disabled: r,
            label: p,
            onClick: c,
            testid: "uc-accept-all-button",
            textColor: m.ui.buttons.accept.text,
            buttonTypeRules: S,
            buttonHoverRules: g,
            marginStyle: y
        })) : null
    },
    d = ({
        disabled: n,
        onClick: u,
        isSecondLayerView: r,
        marginStyle: c
    }) => {
        const {
            labels: d
        } = e(), {
            rules: y
        } = t(l.BUTTON_DENY), {
            rules: T
        } = t(l.BUTTON_DENY, !0), C = o();
        let S = "";
        return a(d) || s(d) ? (S = s(d) && r && d.secondLayer.denyButtonLabel ? d.secondLayer.denyButtonLabel : null == d ? void 0 : d.buttons.denyAll, b(i, {
            backgroundColor: C.ui.buttons.deny.bg,
            disabled: n,
            label: S,
            onClick: u,
            testid: "uc-deny-all-button",
            textColor: C.ui.buttons.deny.text,
            buttonTypeRules: y,
            buttonHoverRules: T,
            marginStyle: c
        })) : null
    },
    y = ({
        disabled: a,
        onClick: n,
        marginStyle: s
    }) => {
        const {
            labels: u
        } = e(), {
            rules: c
        } = t(l.BUTTON_SAVE), {
            rules: d
        } = t(l.BUTTON_SAVE, !0), y = o();
        return !u || r(u) ? null : b(i, {
            backgroundColor: y.ui.buttons.save.bg,
            disabled: a,
            label: u.buttons.save,
            onClick: n,
            testid: "uc-save-button",
            textColor: y.ui.buttons.save.text,
            buttonTypeRules: c,
            buttonHoverRules: d,
            marginStyle: s
        })
    };
export {
    c as A, d as D, y as S
};