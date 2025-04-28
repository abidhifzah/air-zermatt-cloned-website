import {
    an as i,
    aq as o,
    ar as t
} from "./index.module.js";
var l = function(l, n) {
    var s, u, a, c, e, r, d, v;
    this.customCss = null, this.hideDataProcessingServices = i(n.hideDataProcessingServices, !1), this.defaultView = i(n.defaultView, o.CAT), this.backgroundColor = i(t((null === (u = null === (s = l.customization) || void 0 === s ? void 0 : s.color) || void 0 === u ? void 0 : u.privacyButtonBackground) || (null === (c = null === (a = l.customization) || void 0 === a ? void 0 : a.color) || void 0 === c ? void 0 : c.primary)), null), this.desktopSize = i(null === (e = l.customization) || void 0 === e ? void 0 : e.privacyButtonSizeDesktop, null), this.iconColor = i(t(null === (d = null === (r = l.customization) || void 0 === r ? void 0 : r.color) || void 0 === d ? void 0 : d.privacyButtonIcon), null), this.mobileSize = i(null === (v = l.customization) || void 0 === v ? void 0 : v.privacyButtonSizeMobile, null), this.iconUrl = i(l.buttonPrivacyOpenIconUrl, null), this.position = function(i) {
        switch (i) {
            case "tl":
            case "tr":
            case "bl":
            case "br":
                return i;
            default:
                return "bl"
        }
    }(l.buttonDisplayLocation)
};
export {
    l as
    default
};