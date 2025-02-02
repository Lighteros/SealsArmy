/* Wavify */ function wavify(a, b) {
  function c(a) {
    n = Object.assign({}, n, a);
  }
  function d(a) {
    for (var b = [], c = 0; c <= n.bones; c++) {
      var d = (c / n.bones) * p,
        e = 100 * ((a + (c + (c % n.bones))) * n.speed),
        f = Math.sin(e / 100) * n.amplitude,
        g = Math.sin(e / 100) * f + n.height;
      b.push({ x: d, y: g });
    }
    return b;
  }
  function e(a) {
    var b = "M " + a[0].x + " " + a[0].y,
      c = {
        x: (a[1].x - a[0].x) / 2,
        y: a[1].y - a[0].y + a[0].y + (a[1].y - a[0].y),
      };
    b +=
      " C " +
      c.x +
      " " +
      c.y +
      " " +
      c.x +
      " " +
      c.y +
      " " +
      a[1].x +
      " " +
      a[1].y;
    for (var d = c, e = -1, f = 1; f < a.length - 1; f++) {
      var g = Math.sqrt(d.x * d.x + d.y * d.y),
        h = { x: a[f].x - d.x + a[f].x, y: a[f].y - d.y + a[f].y };
      (b +=
        " C " +
        h.x +
        " " +
        h.y +
        " " +
        h.x +
        " " +
        h.y +
        " " +
        a[f + 1].x +
        " " +
        a[f + 1].y),
        (d = h),
        (e = -e);
    }
    return (b += " L " + p + " " + q), (b += " L 0 " + q + " Z"), b;
  }
  function f() {
    var a = window.Date.now();
    if (m) {
      var b = (a - m) / 1e3;
      (m = a), (s += b);
      var c = s * Math.PI;
      u = TweenMax.to(o, n.speed, {
        attr: { d: e(d(c)) },
        ease: Power1.easeInOut,
      });
    } else m = a;
    t = requestAnimationFrame(f);
  }
  function g() {
    t ||
      ((u = TweenMax.set(o, { attr: { fill: n.color } })),
      i(),
      window.addEventListener("resize", v));
  }
  function h(a) {
    l(),
      void 0 !== typeof a && c(a),
      (u = TweenMax.set(o, { attr: { fill: n.color } })),
      i(),
      window.addEventListener("resize", v);
  }
  function i() {
    t || (t = requestAnimationFrame(f));
  }
  function j() {
    t && (cancelAnimationFrame(t), (t = !1));
  }
  function k(a) {
    void 0 === typeof a.timing && (a.timing = 1),
      void 0 === typeof a.color && (a.color = n.color),
      (u = TweenMax.to(o, parseInt(a.timing), {
        attr: { fill: a.color },
        onComplete: function () {
          void 0 !== typeof a.onComplete &&
            "[object Function]" === {}.toString.call(a.onComplete) &&
            a.onComplete();
        },
      }));
  }
  function l() {
    t &&
      (j(),
      u.kill(),
      (u = TweenMax.set(o, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 0,
        clearProps: "all",
        attr: { d: "M0,0", fill: "" },
      })),
      window.removeEventListener("resize", v),
      (t = !1));
  }
  "undefined" == typeof b && (b = {});
  var m,
    n = Object.assign(
      {},
      {
        container: b.container ? b.container : "body",
        height: 200,
        amplitude: 100,
        speed: 0.15,
        bones: 3,
        color: "rgba(255,255,255, 0.20)",
      },
      b
    ),
    o = a,
    p = document.querySelector(n.container).getBoundingClientRect().width,
    q = document.querySelector(n.container).getBoundingClientRect().height,
    r = [],
    s = 0,
    t = !1,
    u = !1,
    v = (function (a, b, c) {
      var d;
      return function () {
        var e = this,
          f = arguments;
        clearTimeout(d),
          (d = setTimeout(function () {
            (d = null), c || a.apply(e, f);
          }, b)),
          c && !d && a.apply(e, f);
      };
    })(function () {
      j(),
        (r = []),
        (s = 0),
        (p = document.querySelector(n.container).getBoundingClientRect().width),
        (q = document
          .querySelector(n.container)
          .getBoundingClientRect().height),
        (m = !1),
        i();
    }, 250);
  return g(), { reboot: h, play: i, pause: j, kill: l, updateColor: k };
}
(function (a) {
  a.fn.wavify = function (a) {
    if ("function" != typeof wavify)
      throw (
        (console.error(
          "wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'."
        ),
        "Error: wavify is not a function")
      );
    return wavify(this, a);
  };
})(jQuery);
