(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = factory(root)
    } else {
        root.universalPopup = factory(root)
    }
})(typeof global !== "undefined" ? global : window || this.window || this.global, function(root) {
    var universalPopup = {};
    var defaults = {
        popupPosition: "bottom-right",
        transitionOut: "es-fade-out",
        transitionIn: "es-fade-in",
        popupSrc: "",
        albumRef: "",
        targetPosition: window.universalPopupGlobalTargetPosition || ""
    };
    var extend = function(defaultOptions, userOptions) {
        var mergedOptions = defaultOptions;
        for (var key in userOptions) {
            mergedOptions[key] = userOptions[key]
        }
        return mergedOptions
    };
    universalPopup.show = function(options) {
        var userOptions = extend(defaults, options);
        if (document.querySelector(".es-universal-popup-iframe")) {
            document.querySelector(".es-universal-popup-iframe").remove()
        }
        var popupIframe = document.createElement("iframe");
        popupIframe.style.display = "none";
        if (options.popupType === "badge") {
            popupIframe.classList.add("es-universal-popup-iframe-badge")
        }
        popupIframe.classList.add("es-universal-popup-iframe");
        popupIframe.classList.add("es-" + userOptions.popupPosition);
        popupIframe.classList.add(userOptions.transitionIn);
        popupIframe.setAttribute("src", userOptions.popupSrc);
        popupIframe.style.display = "block";
        if (userOptions.targetPosition) {
            var targetElement = document.querySelector(userOptions.targetPosition);
            if (targetElement) {
                popupIframe.style.position = "absolute";
                targetElement.appendChild(popupIframe);
                return
            }
        }
        document.body.appendChild(popupIframe);
        var embedsocialHashtagDiv = document.querySelector(".embedsocial-hashtag[data-ref='" + userOptions.albumRef + "']");
        if (embedsocialHashtagDiv) {
            embedsocialHashtagDiv.remove()
        }
    };
    universalPopup.hide = function(iframeId) {
        var popupIframe = document.getElementById(iframeId);
        popupIframe.classList.remove(defaults.transitionIn);
        popupIframe.classList.add(defaults.transitionOut);
        setTimeout(function() {
            popupIframe.remove()
        }, 300)
    };
    return universalPopup
});