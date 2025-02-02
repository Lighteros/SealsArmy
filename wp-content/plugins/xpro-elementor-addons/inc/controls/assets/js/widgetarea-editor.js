!(function (e, t) {
  "use strict";
  if (void 0 === window.parent) return;
  let o = window.parent;
  var r = function () {
    t.config.environmentMode.edit &&
      (o.jQuery("#elementor-editor-dark-mode-css").length > 0 &&
        o.jQuery("body").addClass("elementor-editor-dark-mode"),
      t.hooks.addAction("frontend/element_ready/global", function (t) {
        t.find(".widgetarea_wrapper_edit").on("click", function () {
          var t = o.jQuery(".widgetarea_iframe_modal"),
            r = t.find("#widgetarea-control-iframe"),
            a = t.find(".dialog-lightbox-loading"),
            n = t.find(".dialog-type-lightbox"),
            d = e(this).parent().attr("data-xpro-widgetarea-key"),
            i = e(this).parent().attr("data-xpro-widgetarea-index"),
            l =
              window.XproWidgetAreaEditorParams.rest_api_url +
              "xpro/v1/dynamic-content/content_editor/widget/" +
              d +
              "-" +
              i;
          o.jQuery("body").attr("data-xpro-widgetarea-key", d),
            o.jQuery("body").attr("data-xpro-widgetarea-load", "false"),
            n.show(),
            t.show(),
            a.show(),
            r.contents().find("#elementor-loading").show(),
            r.css("z-index", "-1"),
            r.attr("src", l),
            r.on("load", function () {
              a.hide(),
                r.show(),
                r.contents().find("#elementor-loading").hide(),
                r.css("z-index", "1");
            });
        }),
          void 0 !== o.jQuery &&
            o
              .jQuery(".widgetarea_iframe_modal")
              .find(".eicon-close")
              .on("click", function () {
                o.jQuery("body").attr("data-xpro-widgetarea-load", "true");
              });
      }));
  };
  e(window).on("elementor/frontend/init", r);
})(jQuery, window.elementorFrontend);
