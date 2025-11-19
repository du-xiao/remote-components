import * as s from "react";
import te, { isValidElement as id, version as Mm, useContext as _n, createContext as Ta, useRef as Ie, useLayoutEffect as Tm, useEffect as Wt, useState as _t, forwardRef as Lo, useMemo as Mn, useCallback as ir, useImperativeHandle as ld, Children as Ks } from "react";
import qs, { createPortal as Dm, unstable_batchedUpdates as jm, flushSync as zi } from "react-dom";
function zm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, oa = {};
var Us;
function Am() {
  if (Us) return oa;
  Us = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return oa.Fragment = t, oa.jsx = n, oa.jsxs = n, oa;
}
var ia = {};
var Xs;
function Lm() {
  return Xs || (Xs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === M ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case m:
          return "Fragment";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case x:
          return "Suspense";
        case w:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case g:
            return "Portal";
          case C:
            return R.displayName || "Context";
          case $:
            return (R._context.displayName || "Context") + ".Consumer";
          case S:
            var z = R.render;
            return R = R.displayName, R || (R = z.displayName || z.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case E:
            return z = R.displayName || null, z !== null ? z : e(R.type) || "Memo";
          case O:
            z = R._payload, R = R._init;
            try {
              return e(R(z));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var k = z.error, q = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return k.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(R);
      }
    }
    function r(R) {
      if (R === m) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === O)
        return "<...>";
      try {
        var z = e(R);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var R = I.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (N.call(R, "key")) {
        var z = Object.getOwnPropertyDescriptor(R, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, z) {
      function k() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: k,
        configurable: !0
      });
    }
    function c() {
      var R = e(this.type);
      return A[R] || (A[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function u(R, z, k, q, ee, re) {
      var Q = k.ref;
      return R = {
        $$typeof: h,
        type: R,
        key: z,
        props: k,
        _owner: q
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, z, k, q, ee, re) {
      var Q = z.children;
      if (Q !== void 0)
        if (q)
          if (T(Q)) {
            for (q = 0; q < Q.length; q++)
              f(Q[q]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Q);
      if (N.call(z, "key")) {
        Q = e(R);
        var le = Object.keys(z).filter(function(de) {
          return de !== "key";
        });
        q = 0 < le.length ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}", L[Q + q] || (le = 0 < le.length ? "{" + le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          Q,
          le,
          Q
        ), L[Q + q] = !0);
      }
      if (Q = null, k !== void 0 && (n(k), Q = "" + k), i(z) && (n(z.key), Q = "" + z.key), "key" in z) {
        k = {};
        for (var oe in z)
          oe !== "key" && (k[oe] = z[oe]);
      } else k = z;
      return Q && l(
        k,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), u(
        R,
        Q,
        k,
        a(),
        ee,
        re
      );
    }
    function f(R) {
      v(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === O && (R._payload.status === "fulfilled" ? v(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function v(R) {
      return typeof R == "object" && R !== null && R.$$typeof === h;
    }
    var p = te, h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), C = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), I = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, T = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var j, A = {}, B = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), V = F(r(o)), L = {};
    ia.Fragment = m, ia.jsx = function(R, z, k) {
      var q = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        R,
        z,
        k,
        !1,
        q ? Error("react-stack-top-frame") : B,
        q ? F(r(R)) : V
      );
    }, ia.jsxs = function(R, z, k) {
      var q = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        R,
        z,
        k,
        !0,
        q ? Error("react-stack-top-frame") : B,
        q ? F(r(R)) : V
      );
    };
  })()), ia;
}
var Ys;
function Fm() {
  return Ys || (Ys = 1, process.env.NODE_ENV === "production" ? Ya.exports = Am() : Ya.exports = Lm()), Ya.exports;
}
var Sn = Fm(), ci = { exports: {} };
var Js;
function Vm() {
  return Js || (Js = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (o = a(o, r(l)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var l in o)
          t.call(o, l) && o[l] && (i = a(i, l));
        return i;
      }
      function a(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(ci)), ci.exports;
}
var Bm = Vm();
const U = /* @__PURE__ */ zm(Bm);
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ye.apply(null, arguments);
}
function ze(e) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ze(e);
}
var Hm = Symbol.for("react.element"), Wm = Symbol.for("react.transitional.element"), km = Symbol.for("react.fragment");
function sd(e) {
  return (
    // Base object type
    e && ze(e) === "object" && // React Element type
    (e.$$typeof === Hm || e.$$typeof === Wm) && // React Fragment type
    e.type === km
  );
}
function Fn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return te.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Fn(r)) : sd(r) && r.props ? n = n.concat(Fn(r.props.children, t)) : n.push(r));
  }), n;
}
var Ai = {}, Xl = [], Gm = function(t) {
  Xl.push(t);
};
function hr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Xl.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Km(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Xl.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function cd() {
  Ai = {};
}
function ud(e, t, n) {
  !t && !Ai[n] && (e(!1, n), Ai[n] = !0);
}
function tt(e, t) {
  ud(hr, e, t);
}
function Li(e, t) {
  ud(Km, e, t);
}
tt.preMessage = Gm;
tt.resetWarned = cd;
tt.noteOnce = Li;
function qm(e, t) {
  if (ze(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ze(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dd(e) {
  var t = qm(e, "string");
  return ze(t) == "symbol" ? t : t + "";
}
function _(e, t, n) {
  return (t = dd(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qs(Object(n), !0).forEach(function(r) {
      _(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ba(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Um(e) {
  return e && ze(e) === "object" && ba(e.nativeElement) ? e.nativeElement : ba(e) ? e : null;
}
function uo(e) {
  var t = Um(e);
  if (t)
    return t;
  if (e instanceof te.Component) {
    var n;
    return (n = qs.findDOMNode) === null || n === void 0 ? void 0 : n.call(qs, e);
  }
  return null;
}
var Ja = { exports: {} }, It = {};
var Zs;
function Xm() {
  if (Zs) return It;
  Zs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
        case e:
          switch (m = m.type, m) {
            case n:
            case a:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case i:
                case c:
                case v:
                case f:
                case o:
                  return m;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return It.ContextConsumer = i, It.ContextProvider = o, It.Element = e, It.ForwardRef = c, It.Fragment = n, It.Lazy = v, It.Memo = f, It.Portal = t, It.Profiler = a, It.StrictMode = r, It.Suspense = u, It.SuspenseList = d, It.isAsyncMode = function() {
    return !1;
  }, It.isConcurrentMode = function() {
    return !1;
  }, It.isContextConsumer = function(m) {
    return g(m) === i;
  }, It.isContextProvider = function(m) {
    return g(m) === o;
  }, It.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, It.isForwardRef = function(m) {
    return g(m) === c;
  }, It.isFragment = function(m) {
    return g(m) === n;
  }, It.isLazy = function(m) {
    return g(m) === v;
  }, It.isMemo = function(m) {
    return g(m) === f;
  }, It.isPortal = function(m) {
    return g(m) === t;
  }, It.isProfiler = function(m) {
    return g(m) === a;
  }, It.isStrictMode = function(m) {
    return g(m) === r;
  }, It.isSuspense = function(m) {
    return g(m) === u;
  }, It.isSuspenseList = function(m) {
    return g(m) === d;
  }, It.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === a || m === r || m === u || m === d || m === p || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === f || m.$$typeof === o || m.$$typeof === i || m.$$typeof === c || m.$$typeof === h || m.getModuleId !== void 0);
  }, It.typeOf = g, It;
}
var Nt = {};
var ec;
function Ym() {
  return ec || (ec = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, g = !1, m = !1, b = !1, y = !1, $;
    $ = Symbol.for("react.module.reference");
    function C(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === n || G === a || y || G === r || G === u || G === d || b || G === p || h || g || m || typeof G == "object" && G !== null && (G.$$typeof === v || G.$$typeof === f || G.$$typeof === o || G.$$typeof === i || G.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === $ || G.getModuleId !== void 0));
    }
    function S(G) {
      if (typeof G == "object" && G !== null) {
        var ne = G.$$typeof;
        switch (ne) {
          case e:
            var Y = G.type;
            switch (Y) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return Y;
              default:
                var me = Y && Y.$$typeof;
                switch (me) {
                  case l:
                  case i:
                  case c:
                  case v:
                  case f:
                  case o:
                    return me;
                  default:
                    return ne;
                }
            }
          case t:
            return ne;
        }
      }
    }
    var x = i, w = o, E = e, O = c, P = n, M = v, I = f, N = t, T = a, F = r, j = u, A = d, B = !1, V = !1;
    function L(G) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(G) {
      return V || (V = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(G) {
      return S(G) === i;
    }
    function k(G) {
      return S(G) === o;
    }
    function q(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function ee(G) {
      return S(G) === c;
    }
    function re(G) {
      return S(G) === n;
    }
    function Q(G) {
      return S(G) === v;
    }
    function le(G) {
      return S(G) === f;
    }
    function oe(G) {
      return S(G) === t;
    }
    function de(G) {
      return S(G) === a;
    }
    function X(G) {
      return S(G) === r;
    }
    function K(G) {
      return S(G) === u;
    }
    function ae(G) {
      return S(G) === d;
    }
    Nt.ContextConsumer = x, Nt.ContextProvider = w, Nt.Element = E, Nt.ForwardRef = O, Nt.Fragment = P, Nt.Lazy = M, Nt.Memo = I, Nt.Portal = N, Nt.Profiler = T, Nt.StrictMode = F, Nt.Suspense = j, Nt.SuspenseList = A, Nt.isAsyncMode = L, Nt.isConcurrentMode = R, Nt.isContextConsumer = z, Nt.isContextProvider = k, Nt.isElement = q, Nt.isForwardRef = ee, Nt.isFragment = re, Nt.isLazy = Q, Nt.isMemo = le, Nt.isPortal = oe, Nt.isProfiler = de, Nt.isStrictMode = X, Nt.isSuspense = K, Nt.isSuspenseList = ae, Nt.isValidElementType = C, Nt.typeOf = S;
  })()), Nt;
}
var tc;
function Jm() {
  return tc || (tc = 1, process.env.NODE_ENV === "production" ? Ja.exports = Xm() : Ja.exports = Ym()), Ja.exports;
}
var ui = Jm();
function Da(e, t, n) {
  var r = s.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Qm = Number(Mm.split(".")[0]), Yl = function(t, n) {
  typeof t == "function" ? t(n) : ze(t) === "object" && t && "current" in t && (t.current = n);
}, Jr = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      Yl(i, o);
    });
  };
}, Qr = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Da(function() {
    return Jr.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, l) {
      return i !== o[l];
    });
  });
}, Zr = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (fd(t) && Qm >= 19)
    return !0;
  var a = ui.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== ui.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ui.ForwardRef);
};
function fd(e) {
  return /* @__PURE__ */ id(e) && !sd(e);
}
var ja = function(t) {
  if (t && fd(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
}, Fi = /* @__PURE__ */ s.createContext(null);
function Zm(e) {
  var t = e.children, n = e.onBatchResize, r = s.useRef(0), a = s.useRef([]), o = s.useContext(Fi), i = s.useCallback(function(l, c, u) {
    r.current += 1;
    var d = r.current;
    a.current.push({
      size: l,
      element: c,
      data: u
    }), Promise.resolve().then(function() {
      d === r.current && (n?.(a.current), a.current = []);
    }), o?.(l, c, u);
  }, [n, o]);
  return /* @__PURE__ */ s.createElement(Fi.Provider, {
    value: i
  }, t);
}
var vd = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          n.call(r, i[1], i[0]);
        }
      }, t;
    })()
  );
})(), Vi = typeof window < "u" && typeof document < "u" && window.document === document, $o = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), eg = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind($o) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), tg = 2;
function ng(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && l();
  }
  function i() {
    eg(o);
  }
  function l() {
    var c = Date.now();
    if (n) {
      if (c - a < tg)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = c;
  }
  return l;
}
var rg = 20, ag = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], og = typeof MutationObserver < "u", ig = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ng(this.refresh.bind(this), rg);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Vi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), og ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Vi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = ag.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), md = (function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), kr = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || $o;
}), gd = Fo(0, 0, 0, 0);
function xo(e) {
  return parseFloat(e) || 0;
}
function nc(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + xo(o);
  }, 0);
}
function lg(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = xo(i);
  }
  return n;
}
function sg(e) {
  var t = e.getBBox();
  return Fo(0, 0, t.width, t.height);
}
function cg(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return gd;
  var r = kr(e).getComputedStyle(e), a = lg(r), o = a.left + a.right, i = a.top + a.bottom, l = xo(r.width), c = xo(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= nc(r, "left", "right") + o), Math.round(c + i) !== n && (c -= nc(r, "top", "bottom") + i)), !dg(e)) {
    var u = Math.round(l + o) - t, d = Math.round(c + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return Fo(a.left, a.top, l, c);
}
var ug = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof kr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof kr(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function dg(e) {
  return e === kr(e).document.documentElement;
}
function fg(e) {
  return Vi ? ug(e) ? sg(e) : cg(e) : gd;
}
function vg(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return md(i, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), i;
}
function Fo(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var mg = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Fo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = fg(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), gg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, n) {
      var r = vg(n);
      md(this, { target: t, contentRect: r });
    }
    return e;
  })()
), pg = (
  /** @class */
  (function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new vd(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new mg(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new gg(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), pd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new vd(), hd = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = ig.getInstance(), r = new pg(t, n, this);
      pd.set(this, r);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  hd.prototype[e] = function() {
    var t;
    return (t = pd.get(this))[e].apply(t, arguments);
  };
});
var hg = (function() {
  return typeof $o.ResizeObserver < "u" ? $o.ResizeObserver : hd;
})(), Yn = /* @__PURE__ */ new Map();
function bd(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Yn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var yd = new hg(bd);
process.env.NODE_ENV;
process.env.NODE_ENV;
function bg(e, t) {
  Yn.has(e) || (Yn.set(e, /* @__PURE__ */ new Set()), yd.observe(e)), Yn.get(e).add(t);
}
function yg(e, t) {
  Yn.has(e) && (Yn.get(e).delete(t), Yn.get(e).size || (yd.unobserve(e), Yn.delete(e)));
}
function Xt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dd(r.key), r);
  }
}
function Yt(e, t, n) {
  return t && rc(e.prototype, t), n && rc(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ya(e, t) {
  return ya = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ya(e, t);
}
function Zn(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && ya(e, t);
}
function Sa(e) {
  return Sa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Sa(e);
}
function Jl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jl = function() {
    return !!e;
  })();
}
function mt(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sg(e, t) {
  if (t && (ze(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return mt(e);
}
function er(e) {
  var t = Jl();
  return function() {
    var n, r = Sa(e);
    if (t) {
      var a = Sa(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return Sg(this, n);
  };
}
var Cg = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n() {
    return Xt(this, n), t.apply(this, arguments);
  }
  return Yt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(s.Component);
function $g(e, t) {
  var n = e.children, r = e.disabled, a = s.useRef(null), o = s.useRef(null), i = s.useContext(Fi), l = typeof n == "function", c = l ? n(a) : n, u = s.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ s.isValidElement(c) && Zr(c), f = d ? ja(c) : null, v = Qr(f, a), p = function() {
    var b;
    return uo(a.current) || // Support `nativeElement` format
    (a.current && ze(a.current) === "object" ? uo((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || uo(o.current);
  };
  s.useImperativeHandle(t, function() {
    return p();
  });
  var h = s.useRef(e);
  h.current = e;
  var g = s.useCallback(function(m) {
    var b = h.current, y = b.onResize, $ = b.data, C = m.getBoundingClientRect(), S = C.width, x = C.height, w = m.offsetWidth, E = m.offsetHeight, O = Math.floor(S), P = Math.floor(x);
    if (u.current.width !== O || u.current.height !== P || u.current.offsetWidth !== w || u.current.offsetHeight !== E) {
      var M = {
        width: O,
        height: P,
        offsetWidth: w,
        offsetHeight: E
      };
      u.current = M;
      var I = w === Math.round(S) ? S : w, N = E === Math.round(x) ? x : E, T = D(D({}, M), {}, {
        offsetWidth: I,
        offsetHeight: N
      });
      i?.(T, m, $), y && Promise.resolve().then(function() {
        y(T, m);
      });
    }
  }, []);
  return s.useEffect(function() {
    var m = p();
    return m && !r && bg(m, g), function() {
      return yg(m, g);
    };
  }, [a.current, r]), /* @__PURE__ */ s.createElement(Cg, {
    ref: o
  }, d ? /* @__PURE__ */ s.cloneElement(c, {
    ref: v
  }) : c);
}
var Sd = /* @__PURE__ */ s.forwardRef($g);
process.env.NODE_ENV !== "production" && (Sd.displayName = "SingleObserver");
var xg = "rc-observer-key";
function wg(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Fn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? hr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && hr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = a?.key || "".concat(xg, "-").concat(o);
    return /* @__PURE__ */ s.createElement(Sd, ye({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var Nn = /* @__PURE__ */ s.forwardRef(wg);
process.env.NODE_ENV !== "production" && (Nn.displayName = "ResizeObserver");
Nn.Collection = Zm;
function Bi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Eg(e) {
  if (Array.isArray(e)) return Bi(e);
}
function Cd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ql(e, t) {
  if (e) {
    if (typeof e == "string") return Bi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bi(e, t) : void 0;
  }
}
function Og() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Se(e) {
  return Eg(e) || Cd(e) || Ql(e) || Og();
}
var $d = function(t) {
  return +setTimeout(t, 16);
}, xd = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && ($d = function(t) {
  return window.requestAnimationFrame(t);
}, xd = function(t) {
  return window.cancelAnimationFrame(t);
});
var ac = 0, Vo = /* @__PURE__ */ new Map();
function wd(e) {
  Vo.delete(e);
}
var kt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ac += 1;
  var r = ac;
  function a(o) {
    if (o === 0)
      wd(r), t();
    else {
      var i = $d(function() {
        a(o - 1);
      });
      Vo.set(r, i);
    }
  }
  return a(n), r;
};
kt.cancel = function(e) {
  var t = Vo.get(e);
  return wd(e), xd(t);
};
process.env.NODE_ENV !== "production" && (kt.ids = function() {
  return Vo;
});
function Ed(e) {
  if (Array.isArray(e)) return e;
}
function Pg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, l = [], c = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      u = !0, a = d;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return l;
  }
}
function Od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return Ed(e) || Pg(e, t) || Ql(e, t) || Od();
}
function Ca(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function vn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Rg(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var oc = "data-rc-order", ic = "data-rc-priority", Ig = "rc-util-key", Hi = /* @__PURE__ */ new Map();
function Pd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ig;
}
function Bo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Ng(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Zl(e) {
  return Array.from((Hi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Rd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!vn())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Ng(r), l = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(oc, i), l && o && c.setAttribute(ic, "".concat(o)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var u = Bo(t), d = u.firstChild;
  if (r) {
    if (l) {
      var f = (t.styles || Zl(u)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(oc)))
          return !1;
        var p = Number(v.getAttribute(ic) || 0);
        return o >= p;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, d);
  } else
    u.appendChild(c);
  return c;
}
function Id(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Bo(t);
  return (t.styles || Zl(n)).find(function(r) {
    return r.getAttribute(Pd(t)) === e;
  });
}
function $a(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Id(e, t);
  if (n) {
    var r = Bo(t);
    r.removeChild(n);
  }
}
function _g(e, t) {
  var n = Hi.get(e);
  if (!n || !Rg(document, n)) {
    var r = Rd("", t), a = r.parentNode;
    Hi.set(e, a), e.removeChild(r);
  }
}
function Jn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Bo(n), a = Zl(r), o = D(D({}, n), {}, {
    styles: a
  });
  _g(r, o);
  var i = Id(t, o);
  if (i) {
    var l, c;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((c = o.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      i.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = Rd(e, o);
  return d.setAttribute(Pd(o), t), d;
}
function Mg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function ut(e, t) {
  if (e == null) return {};
  var n, r, a = Mg(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function xa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(o);
    if (tt(!c, "Warning: There may be circular references"), c)
      return !1;
    if (o === i)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(o);
    var u = l + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var d = 0; d < o.length; d++)
        if (!a(o[d], i[d], u))
          return !1;
      return !0;
    }
    if (o && i && ze(o) === "object" && ze(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
var Tg = "%";
function Wi(e) {
  return e.join(Tg);
}
var Dg = /* @__PURE__ */ (function() {
  function e(t) {
    Xt(this, e), _(this, "instanceId", void 0), _(this, "cache", /* @__PURE__ */ new Map()), _(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Yt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Wi(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Wi(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
})(), Gr = "data-token-hash", An = "data-css-hash", jg = "data-cache-path", sr = "__cssinjs_instance__";
function zg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(An, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[sr] = a[sr] || e, a[sr] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(An, "]"))).forEach(function(a) {
      var o = a.getAttribute(An);
      if (r[o]) {
        if (a[sr] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new Dg(e);
}
var za = /* @__PURE__ */ s.createContext({
  hashPriority: "low",
  cache: zg(),
  defaultCache: !0
});
function Ag(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var es = /* @__PURE__ */ (function() {
  function e() {
    Xt(this, e), _(this, "cache", void 0), _(this, "keys", void 0), _(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Yt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(l);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(u, d) {
            var f = H(u, 2), v = f[1];
            return a.internalGet(d)[1] < v ? [d, a.internalGet(d)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = H(o, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(u, d) {
        if (d === n.length - 1)
          c.set(u, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var f = c.get(u);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(u, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Ag(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
_(es, "MAX_CACHE_SIZE", 20);
_(es, "MAX_CACHE_OFFSET", 5);
var lc = 0, Nd = /* @__PURE__ */ (function() {
  function e(t) {
    Xt(this, e), _(this, "derivatives", void 0), _(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = lc, t.length === 0 && hr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), lc += 1;
  }
  return Yt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
})(), di = new es();
function ki(e) {
  var t = Array.isArray(e) ? e : [e];
  return di.has(t) || di.set(t, new Nd(t)), di.get(t);
}
var Lg = /* @__PURE__ */ new WeakMap(), fi = {};
function Fg(e, t) {
  for (var n = Lg, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(fi) || n.set(fi, e()), n.get(fi);
}
var sc = /* @__PURE__ */ new WeakMap();
function ma(e) {
  var t = sc.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Nd ? t += r.id : r && ze(r) === "object" ? t += ma(r) : t += r;
  }), t = Ca(t), sc.set(e, t)), t;
}
function cc(e, t) {
  return Ca("".concat(t, "_").concat(ma(e)));
}
var Gi = vn();
function W(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function wo(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = D(D({}, r), {}, _(_({}, Gr, t), An, n)), i = Object.keys(o).map(function(l) {
    var c = o[l];
    return c ? "".concat(l, '="').concat(c, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var fo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Vg = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = H(a, 2), i = o[0], l = o[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, _d = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var l, c, u = H(i, 2), d = u[0], f = u[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[d])
      o[d] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[d])) {
      var v, p = fo(d, r?.prefix);
      a[p] = typeof f == "number" && !(r != null && (v = r.unitless) !== null && v !== void 0 && v[d]) ? "".concat(f, "px") : String(f), o[d] = "var(".concat(p, ")");
    }
  }), [o, Vg(a, n, {
    scope: r?.scope
  })];
}, uc = process.env.NODE_ENV !== "test" && vn() ? s.useLayoutEffect : s.useEffect, Vt = function(t, n) {
  var r = s.useRef(!0);
  uc(function() {
    return t(r.current);
  }, n), uc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Ki = function(t, n) {
  Vt(function(r) {
    if (!r)
      return t();
  }, n);
}, Bg = D({}, s), dc = Bg.useInsertionEffect, Hg = function(t, n, r) {
  s.useMemo(t, r), Vt(function() {
    return n(!0);
  }, r);
}, Wg = dc ? function(e, t, n) {
  return dc(function() {
    return e(), t();
  }, n);
} : Hg, kg = D({}, s), Gg = kg.useInsertionEffect, Kg = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && hr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return s.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, qg = function() {
  return function(t) {
    t();
  };
}, Ug = typeof Gg < "u" ? Kg : qg;
function Xg() {
  return !1;
}
var qi = !1;
function Yg() {
  return qi;
}
const Jg = process.env.NODE_ENV === "production" ? Xg : Yg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Qa && typeof Qa.webpackHotUpdate == "function") {
    var Qg = Qa.webpackHotUpdate;
    Qa.webpackHotUpdate = function() {
      return qi = !0, setTimeout(function() {
        qi = !1;
      }, 0), Qg.apply(void 0, arguments);
    };
  }
}
function ts(e, t, n, r, a) {
  var o = s.useContext(za), i = o.cache, l = [e].concat(Se(t)), c = Wi(l), u = Ug([c]), d = Jg(), f = function(g) {
    i.opUpdate(c, function(m) {
      var b = m || [void 0, void 0], y = H(b, 2), $ = y[0], C = $ === void 0 ? 0 : $, S = y[1], x = S;
      process.env.NODE_ENV !== "production" && S && d && (r?.(x, d), x = null);
      var w = x || n(), E = [C, w];
      return g ? g(E) : E;
    });
  };
  s.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = i.opGet(c);
  process.env.NODE_ENV !== "production" && !v && (f(), v = i.opGet(c));
  var p = v[1];
  return Wg(function() {
    a?.(p);
  }, function(h) {
    return f(function(g) {
      var m = H(g, 2), b = m[0], y = m[1];
      return h && b === 0 && a?.(p), [b + 1, y];
    }), function() {
      i.opUpdate(c, function(g) {
        var m = g || [], b = H(m, 2), y = b[0], $ = y === void 0 ? 0 : y, C = b[1], S = $ - 1;
        return S === 0 ? (u(function() {
          (h || !i.opGet(c)) && r?.(C, !1);
        }), null) : [$ - 1, C];
      });
    };
  }, [c]), p;
}
var Zg = {}, ep = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", mr = /* @__PURE__ */ new Map();
function tp(e) {
  mr.set(e, (mr.get(e) || 0) + 1);
}
function np(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Gr, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[sr] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var rp = 0;
function ap(e, t) {
  mr.set(e, (mr.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  mr.forEach(function(r, a) {
    r <= 0 && n.add(a);
  }), mr.size - n.size > rp && n.forEach(function(r) {
    np(r, t), mr.delete(r);
  });
}
var op = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = D(D({}, o), n);
  return a && (i = a(i)), i;
}, Md = "token";
function ip(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _n(za), a = r.cache.instanceId, o = r.container, i = n.salt, l = i === void 0 ? "" : i, c = n.override, u = c === void 0 ? Zg : c, d = n.formatToken, f = n.getComputedToken, v = n.cssVar, p = Fg(function() {
    return Object.assign.apply(Object, [{}].concat(Se(t)));
  }, t), h = ma(p), g = ma(u), m = v ? ma(v) : "", b = ts(Md, [l, e.id, h, g, m], function() {
    var y, $ = f ? f(p, u, e) : op(p, u, e, d), C = D({}, $), S = "";
    if (v) {
      var x = _d($, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), w = H(x, 2);
      $ = w[0], S = w[1];
    }
    var E = cc($, l);
    $._tokenKey = E, C._tokenKey = cc(C, l);
    var O = (y = v?.key) !== null && y !== void 0 ? y : E;
    $._themeKey = O, tp(O);
    var P = "".concat(ep, "-").concat(Ca(E));
    return $._hashId = P, [$, P, C, S, v?.key || ""];
  }, function(y) {
    ap(y[0]._themeKey, a);
  }, function(y) {
    var $ = H(y, 4), C = $[0], S = $[3];
    if (v && S) {
      var x = Jn(S, Ca("css-variables-".concat(C._themeKey)), {
        mark: An,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      x[sr] = a, x.setAttribute(Gr, C._themeKey);
    }
  });
  return b;
}
var lp = function(t, n, r) {
  var a = H(t, 5), o = a[2], i = a[3], l = a[4], c = r || {}, u = c.plain;
  if (!i)
    return null;
  var d = o._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, p = wo(i, l, d, v, u);
  return [f, d, p];
}, sp = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Td = "comm", Dd = "rule", jd = "decl", cp = "@import", up = "@namespace", dp = "@keyframes", fp = "@layer", zd = Math.abs, ns = String.fromCharCode;
function Ad(e) {
  return e.trim();
}
function vo(e, t, n) {
  return e.replace(t, n);
}
function vp(e, t, n) {
  return e.indexOf(t, n);
}
function Vr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kr(e, t, n) {
  return e.slice(t, n);
}
function Wn(e) {
  return e.length;
}
function mp(e) {
  return e.length;
}
function Za(e, t) {
  return t.push(e), e;
}
var Ho = 1, qr = 1, Ld = 0, Tn = 0, Ut = 0, ea = "";
function rs(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: Ho, column: qr, length: i, return: "", siblings: l };
}
function gp() {
  return Ut;
}
function pp() {
  return Ut = Tn > 0 ? Vr(ea, --Tn) : 0, qr--, Ut === 10 && (qr = 1, Ho--), Ut;
}
function Ln() {
  return Ut = Tn < Ld ? Vr(ea, Tn++) : 0, qr++, Ut === 10 && (qr = 1, Ho++), Ut;
}
function cr() {
  return Vr(ea, Tn);
}
function mo() {
  return Tn;
}
function Wo(e, t) {
  return Kr(ea, e, t);
}
function wa(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hp(e) {
  return Ho = qr = 1, Ld = Wn(ea = e), Tn = 0, [];
}
function bp(e) {
  return ea = "", e;
}
function vi(e) {
  return Ad(Wo(Tn - 1, Ui(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yp(e) {
  for (; (Ut = cr()) && Ut < 33; )
    Ln();
  return wa(e) > 2 || wa(Ut) > 3 ? "" : " ";
}
function Sp(e, t) {
  for (; --t && Ln() && !(Ut < 48 || Ut > 102 || Ut > 57 && Ut < 65 || Ut > 70 && Ut < 97); )
    ;
  return Wo(e, mo() + (t < 6 && cr() == 32 && Ln() == 32));
}
function Ui(e) {
  for (; Ln(); )
    switch (Ut) {
      // ] ) " '
      case e:
        return Tn;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ui(Ut);
        break;
      // (
      case 40:
        e === 41 && Ui(e);
        break;
      // \
      case 92:
        Ln();
        break;
    }
  return Tn;
}
function Cp(e, t) {
  for (; Ln() && e + Ut !== 57; )
    if (e + Ut === 84 && cr() === 47)
      break;
  return "/*" + Wo(t, Tn - 1) + "*" + ns(e === 47 ? e : Ln());
}
function $p(e) {
  for (; !wa(cr()); )
    Ln();
  return Wo(e, Tn);
}
function xp(e) {
  return bp(go("", null, null, null, [""], e = hp(e), 0, [0], e));
}
function go(e, t, n, r, a, o, i, l, c) {
  for (var u = 0, d = 0, f = i, v = 0, p = 0, h = 0, g = 1, m = 1, b = 1, y = 0, $ = "", C = a, S = o, x = r, w = $; m; )
    switch (h = y, y = Ln()) {
      // (
      case 40:
        if (h != 108 && Vr(w, f - 1) == 58) {
          vp(w += vo(vi(y), "&", "&\f"), "&\f", zd(u ? l[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        w += vi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        w += yp(h);
        break;
      // \
      case 92:
        w += Sp(mo() - 1, 7);
        continue;
      // /
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            Za(wp(Cp(Ln(), mo()), t, n, c), c), (wa(h || 1) == 5 || wa(cr() || 1) == 5) && Wn(w) && Kr(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * g:
        l[u++] = Wn(w) * b;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + d:
            b == -1 && (w = vo(w, /\f/g, "")), p > 0 && (Wn(w) - f || g === 0 && h === 47) && Za(p > 32 ? vc(w + ";", r, n, f - 1, c) : vc(vo(w, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (Za(x = fc(w, t, n, u, d, a, l, $, C = [], S = [], f, o), o), y === 123)
              if (d === 0)
                go(w, t, x, x, C, o, f, l, S);
              else {
                switch (v) {
                  // c(ontainer)
                  case 99:
                    if (Vr(w, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Vr(w, 2) === 97) break;
                  default:
                    d = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                d ? go(e, x, x, r && Za(fc(e, x, x, 0, 0, a, l, $, a, C = [], f, S), S), a, S, f, l, r ? C : S) : go(w, x, x, x, [""], S, 0, l, S);
              }
        }
        u = d = p = 0, g = b = 1, $ = w = "", f = i;
        break;
      // :
      case 58:
        f = 1 + Wn(w), p = h;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && pp() == 125)
            continue;
        }
        switch (w += ns(y), y * g) {
          // &
          case 38:
            b = d > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (Wn(w) - 1) * b, b = 1;
            break;
          // @
          case 64:
            cr() === 45 && (w += vi(Ln())), v = cr(), d = f = Wn($ = w += $p(mo())), y++;
            break;
          // -
          case 45:
            h === 45 && Wn(w) == 2 && (g = 0);
        }
    }
  return o;
}
function fc(e, t, n, r, a, o, i, l, c, u, d, f) {
  for (var v = a - 1, p = a === 0 ? o : [""], h = mp(p), g = 0, m = 0, b = 0; g < r; ++g)
    for (var y = 0, $ = Kr(e, v + 1, v = zd(m = i[g])), C = e; y < h; ++y)
      (C = Ad(m > 0 ? p[y] + " " + $ : vo($, /&\f/g, p[y]))) && (c[b++] = C);
  return rs(e, t, n, a === 0 ? Dd : l, c, u, d, f);
}
function wp(e, t, n, r) {
  return rs(e, t, n, Td, ns(gp()), Kr(e, 2, -2), 0, r);
}
function vc(e, t, n, r, a) {
  return rs(e, t, n, jd, Kr(e, 0, r), Kr(e, r + 1, -1), r, a);
}
function Xi(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ep(e, t, n, r) {
  switch (e.type) {
    case fp:
      if (e.children.length) break;
    case cp:
    case up:
    case jd:
      return e.return = e.return || e.value;
    case Td:
      return "";
    case dp:
      return e.return = e.value + "{" + Xi(e.children, r) + "}";
    case Dd:
      if (!Wn(e.value = e.props.join(","))) return "";
  }
  return Wn(n = Xi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fd(e, t) {
  var n = t.path, r = t.parentSelectors;
  tt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Op = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Fd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Pp = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Fd("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, mc = "data-ant-cssinjs-cache-path", Vd = "_FILE_STYLE__", pr, Bd = !0;
function Rp() {
  if (!pr && (pr = {}, vn())) {
    var e = document.createElement("div");
    e.className = mc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = H(o, 2), l = i[0], c = i[1];
      pr[l] = c;
    });
    var n = document.querySelector("style[".concat(mc, "]"));
    if (n) {
      var r;
      Bd = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ip(e) {
  return Rp(), !!pr[e];
}
function Np(e) {
  var t = pr[e], n = null;
  if (t && vn())
    if (Bd)
      n = Vd;
    else {
      var r = document.querySelector("style[".concat(An, '="').concat(pr[e], '"]'));
      r ? n = r.innerHTML : delete pr[e];
    }
  return [n, t];
}
var Hd = "_skip_check_", Wd = "_multi_value_";
function po(e) {
  var t = Xi(xp(e), Ep);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function _p(e) {
  return ze(e) === "object" && e && (Hd in e || Wd in e);
}
function gc(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, c = i.trim().split(/\s+/), u = c[0] || "", d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = "".concat(d).concat(a).concat(u.slice(d.length)), [u].concat(Se(c.slice(1))).join(" ");
  });
  return o.join(",");
}
var Mp = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, c = n.layer, u = n.path, d = n.hashPriority, f = n.transformers, v = f === void 0 ? [] : f, p = n.linters, h = p === void 0 ? [] : p, g = "", m = {};
  function b(C) {
    var S = C.getName(l);
    if (!m[S]) {
      var x = e(C.style, n, {
        root: !1,
        parentSelectors: i
      }), w = H(x, 1), E = w[0];
      m[S] = "@keyframes ".concat(C.getName(l)).concat(E);
    }
  }
  function y(C) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(x) {
      Array.isArray(x) ? y(x, S) : x && S.push(x);
    }), S;
  }
  var $ = y(Array.isArray(t) ? t : [t]);
  return $.forEach(function(C) {
    var S = typeof C == "string" && !a ? {} : C;
    if (typeof S == "string")
      g += "".concat(S, `
`);
    else if (S._keyframe)
      b(S);
    else {
      var x = v.reduce(function(w, E) {
        var O;
        return (E == null || (O = E.visit) === null || O === void 0 ? void 0 : O.call(E, w)) || w;
      }, S);
      Object.keys(x).forEach(function(w) {
        var E = x[w];
        if (ze(E) === "object" && E && (w !== "animationName" || !E._keyframe) && !_p(E)) {
          var O = !1, P = w.trim(), M = !1;
          (a || o) && l ? P.startsWith("@") ? O = !0 : P === "&" ? P = gc("", l, d) : P = gc(w, l, d) : a && !l && (P === "&" || P === "") && (P = "", M = !0);
          var I = e(E, n, {
            root: M,
            injectHash: O,
            parentSelectors: [].concat(Se(i), [P])
          }), N = H(I, 2), T = N[0], F = N[1];
          m = D(D({}, m), F), g += "".concat(P).concat(T);
        } else {
          let B = function(V, L) {
            process.env.NODE_ENV !== "production" && (ze(E) !== "object" || !(E != null && E[Hd])) && [Op, Pp].concat(Se(h)).forEach(function(k) {
              return k(V, L, {
                path: u,
                hashId: l,
                parentSelectors: i
              });
            });
            var R = V.replace(/[A-Z]/g, function(k) {
              return "-".concat(k.toLowerCase());
            }), z = L;
            !sp[V] && typeof z == "number" && z !== 0 && (z = "".concat(z, "px")), V === "animationName" && L !== null && L !== void 0 && L._keyframe && (b(L), z = L.getName(l)), g += "".concat(R, ":").concat(z, ";");
          };
          var j, A = (j = E?.value) !== null && j !== void 0 ? j : E;
          ze(E) === "object" && E !== null && E !== void 0 && E[Wd] && Array.isArray(A) ? A.forEach(function(V) {
            B(w, V);
          }) : B(w, A);
        }
      });
    }
  }), a ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (m["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, m];
};
function kd(e, t) {
  return Ca("".concat(e.join("%")).concat(t));
}
function Tp() {
  return null;
}
var Gd = "style";
function Yi(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, d = s.useContext(za), f = d.autoClear, v = d.mock, p = d.defaultCache, h = d.hashPriority, g = d.container, m = d.ssrInline, b = d.transformers, y = d.linters, $ = d.cache, C = d.layer, S = n._tokenKey, x = [S];
  C && x.push("layer"), x.push.apply(x, Se(r));
  var w = Gi;
  process.env.NODE_ENV !== "production" && v !== void 0 && (w = v === "client");
  var E = ts(
    Gd,
    x,
    // Create cache if needed
    function() {
      var N = x.join("|");
      if (Ip(N)) {
        var T = Np(N), F = H(T, 2), j = F[0], A = F[1];
        if (j)
          return [j, S, A, {}, l, u];
      }
      var B = t(), V = Mp(B, {
        hashId: a,
        hashPriority: h,
        layer: C ? o : void 0,
        path: r.join("-"),
        transformers: b,
        linters: y
      }), L = H(V, 2), R = L[0], z = L[1], k = po(R), q = kd(x, k);
      return [k, S, q, z, l, u];
    },
    // Remove cache if no need
    function(N, T) {
      var F = H(N, 3), j = F[2];
      (T || f) && Gi && $a(j, {
        mark: An,
        attachTo: g
      });
    },
    // Effect: Inject style here
    function(N) {
      var T = H(N, 4), F = T[0];
      T[1];
      var j = T[2], A = T[3];
      if (w && F !== Vd) {
        var B = {
          mark: An,
          prepend: C ? !1 : "queue",
          attachTo: g,
          priority: u
        }, V = typeof i == "function" ? i() : i;
        V && (B.csp = {
          nonce: V
        });
        var L = [], R = [];
        Object.keys(A).forEach(function(k) {
          k.startsWith("@layer") ? L.push(k) : R.push(k);
        }), L.forEach(function(k) {
          Jn(po(A[k]), "_layer-".concat(k), D(D({}, B), {}, {
            prepend: !0
          }));
        });
        var z = Jn(F, j, B);
        z[sr] = $.instanceId, z.setAttribute(Gr, S), process.env.NODE_ENV !== "production" && z.setAttribute(jg, x.join("|")), R.forEach(function(k) {
          Jn(po(A[k]), "_effect-".concat(k), B);
        });
      }
    }
  ), O = H(E, 3), P = O[0], M = O[1], I = O[2];
  return function(N) {
    var T;
    return !m || w || !p ? T = /* @__PURE__ */ s.createElement(Tp, null) : T = /* @__PURE__ */ s.createElement("style", ye({}, _(_({}, Gr, M), An, I), {
      dangerouslySetInnerHTML: {
        __html: P
      }
    })), /* @__PURE__ */ s.createElement(s.Fragment, null, T, N);
  };
}
var Dp = function(t, n, r) {
  var a = H(t, 6), o = a[0], i = a[1], l = a[2], c = a[3], u = a[4], d = a[5], f = r || {}, v = f.plain;
  if (u)
    return null;
  var p = o, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  };
  return p = wo(o, i, l, h, v), c && Object.keys(c).forEach(function(g) {
    if (!n[g]) {
      n[g] = !0;
      var m = po(c[g]), b = wo(m, i, "_effect-".concat(g), h, v);
      g.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [d, l, p];
}, Kd = "cssVar", jp = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, l = t.token, c = t.scope, u = c === void 0 ? "" : c, d = _n(za), f = d.cache.instanceId, v = d.container, p = l._tokenKey, h = [].concat(Se(t.path), [r, u, p]), g = ts(Kd, h, function() {
    var m = n(), b = _d(m, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: u
    }), y = H(b, 2), $ = y[0], C = y[1], S = kd(h, C);
    return [$, C, S, r];
  }, function(m) {
    var b = H(m, 3), y = b[2];
    Gi && $a(y, {
      mark: An,
      attachTo: v
    });
  }, function(m) {
    var b = H(m, 3), y = b[1], $ = b[2];
    if (y) {
      var C = Jn(y, $, {
        mark: An,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      C[sr] = f, C.setAttribute(Gr, r);
    }
  });
  return g;
}, zp = function(t, n, r) {
  var a = H(t, 4), o = a[1], i = a[2], l = a[3], c = r || {}, u = c.plain;
  if (!o)
    return null;
  var d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(o, l, i, f, u);
  return [d, i, v];
};
_(_(_({}, Gd, Dp), Md, lp), Kd, zp);
var Ot = /* @__PURE__ */ (function() {
  function e(t, n) {
    Xt(this, e), _(this, "name", void 0), _(this, "style", void 0), _(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Yt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function wr(e) {
  return e.notSplit = !0, e;
}
wr(["borderTop", "borderBottom"]), wr(["borderTop"]), wr(["borderBottom"]), wr(["borderLeft", "borderRight"]), wr(["borderLeft"]), wr(["borderRight"]);
var as = /* @__PURE__ */ Ta({});
function qd(e) {
  return Ed(e) || Cd(e) || Ql(e) || Od();
}
function kn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Ud(e, t, n, r) {
  if (!t.length)
    return n;
  var a = qd(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Se(e) : l = D({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Ud(l[o], i, n, r), l;
}
function jn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !kn(e, t.slice(0, -1)) ? e : Ud(e, t, n, r);
}
function Ap(e) {
  return ze(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function pc(e) {
  return Array.isArray(e) ? [] : {};
}
var Lp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function zr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = pc(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var c = new Set(l), u = kn(a, i), d = Array.isArray(u);
      if (d || Ap(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = kn(r, i);
          d ? r = jn(r, i, []) : (!f || ze(f) !== "object") && (r = jn(r, i, pc(u))), Lp(u).forEach(function(v) {
            o([].concat(Se(i), [v]), c);
          });
        }
      } else
        r = jn(r, i, u);
    }
    o([]);
  }), r;
}
function Xd() {
}
let Un = null;
function Fp() {
  Un = null, cd();
}
let Yd = Xd;
process.env.NODE_ENV !== "production" && (Yd = (e, t, n) => {
  tt(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Fp();
});
const Aa = Yd, Jd = /* @__PURE__ */ s.createContext({}), on = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = s.useContext(Jd), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = Un;
        Un || (Un = {}), Un[e] = Un[e] || [], Un[e].includes(o || "") || Un[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Un);
      } else
        process.env.NODE_ENV !== "production" && Aa(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Xd, e;
}, Vp = /* @__PURE__ */ Ta(void 0);
var Qd = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Bp = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Hp = D(D({}, Bp), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Zd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, hc = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Hp),
  timePickerLocale: Object.assign({}, Zd)
}, $n = "${label} is not a valid ${type}", Ur = {
  locale: "en",
  Pagination: Qd,
  DatePicker: hc,
  TimePicker: Zd,
  Calendar: hc,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: $n,
        method: $n,
        array: $n,
        object: $n,
        number: $n,
        date: $n,
        boolean: $n,
        integer: $n,
        float: $n,
        regexp: $n,
        email: $n,
        url: $n,
        hex: $n
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, Ur.Modal);
let ho = [];
const bc = () => ho.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ur.Modal);
function Wp(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ho.push(t), bc(), () => {
      ho = ho.filter((n) => n !== t), bc();
    };
  }
  Object.assign({}, Ur.Modal);
}
const os = /* @__PURE__ */ Ta(void 0), ko = (e, t) => {
  const n = s.useContext(os), r = s.useMemo(() => {
    var o;
    const i = t || Ur[e], l = (o = n?.[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), l || {});
  }, [e, t, n]), a = s.useMemo(() => {
    const o = n?.locale;
    return n?.exist && !o ? Ur.locale : o;
  }, [n]);
  return [r, a];
}, ef = "internalMark", tf = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = on("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === ef, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  s.useEffect(() => Wp(t?.Modal), [t]);
  const a = s.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ s.createElement(os.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (tf.displayName = "LocaleProvider");
const nf = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Ea = Object.assign(Object.assign({}, nf), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), rn = Math.round;
function mi(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    r[a] = t(r[a] || 0, n[a] || "", a);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const yc = (e, t, n) => n === 0 ? e : e / 100;
function la(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Dt {
  constructor(t) {
    _(this, "isValid", !0), _(this, "r", 0), _(this, "g", 0), _(this, "b", 0), _(this, "a", 1), _(this, "_h", void 0), _(this, "_s", void 0), _(this, "_l", void 0), _(this, "_v", void 0), _(this, "_max", void 0), _(this, "_min", void 0), _(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(o) {
        return r.startsWith(o);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : a("rgb") ? this.fromRgbString(r) : a("hsl") ? this.fromHslString(r) : (a("hsv") || a("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Dt)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = la(t.r), this.g = la(t.g), this.b = la(t.b), this.a = typeof t.a == "number" ? la(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(o) {
      const i = o / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), a = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = rn(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), a = n / 100, o = (l) => (r[l] - this[l]) * a + this[l], i = {
      r: rn(o("r")),
      g: rn(o("g")),
      b: rn(o("b")),
      a: rn(o("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), a = (o) => rn((this[o] * this.a + n[o] * n.a * (1 - this.a)) / r);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const o = rn(this.a * 255).toString(16);
      t += o.length === 2 ? o : "0" + o;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = rn(this.getSaturation() * 100), r = rn(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const a = this.clone();
    return a[t] = la(n, r), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(a, o) {
      return parseInt(n[a] + n[o || a], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof a == "number" ? a : 1, n <= 0) {
      const v = rn(r * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let o = 0, i = 0, l = 0;
    const c = t / 60, u = (1 - Math.abs(2 * r - 1)) * n, d = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (o = u, i = d) : c >= 1 && c < 2 ? (o = d, i = u) : c >= 2 && c < 3 ? (i = u, l = d) : c >= 3 && c < 4 ? (i = d, l = u) : c >= 4 && c < 5 ? (o = d, l = u) : c >= 5 && c < 6 && (o = u, l = d);
    const f = r - u / 2;
    this.r = rn((o + f) * 255), this.g = rn((i + f) * 255), this.b = rn((l + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof a == "number" ? a : 1;
    const o = rn(r * 255);
    if (this.r = o, this.g = o, this.b = o, n <= 0)
      return;
    const i = t / 60, l = Math.floor(i), c = i - l, u = rn(r * (1 - n) * 255), d = rn(r * (1 - n * c) * 255), f = rn(r * (1 - n * (1 - c)) * 255);
    switch (l) {
      case 0:
        this.g = f, this.b = u;
        break;
      case 1:
        this.r = d, this.b = u;
        break;
      case 2:
        this.r = u, this.b = f;
        break;
      case 3:
        this.r = u, this.g = d;
        break;
      case 4:
        this.r = f, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = d;
        break;
    }
  }
  fromHsvString(t) {
    const n = mi(t, yc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = mi(t, yc);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = mi(t, (r, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? rn(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var eo = 2, Sc = 0.16, kp = 0.05, Gp = 0.05, Kp = 0.15, rf = 5, af = 4, qp = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Cc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - eo * t : Math.round(e.h) + eo * t : r = n ? Math.round(e.h) + eo * t : Math.round(e.h) - eo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function $c(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Sc * t : t === af ? r = e.s + Sc : r = e.s + kp * t, r > 1 && (r = 1), n && t === rf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function xc(e, t, n) {
  var r;
  return n ? r = e.v + Gp * t : r = e.v - Kp * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Oa(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Dt(e), a = r.toHsv(), o = rf; o > 0; o -= 1) {
    var i = new Dt({
      h: Cc(a, o, !0),
      s: $c(a, o, !0),
      v: xc(a, o, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var l = 1; l <= af; l += 1) {
    var c = new Dt({
      h: Cc(a, l),
      s: $c(a, l),
      v: xc(a, l)
    });
    n.push(c);
  }
  return t.theme === "dark" ? qp.map(function(u) {
    var d = u.index, f = u.amount;
    return new Dt(t.backgroundColor || "#141414").mix(n[d], f).toHexString();
  }) : n.map(function(u) {
    return u.toHexString();
  });
}
var gi = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Ji = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ji.primary = Ji[5];
var Qi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Qi.primary = Qi[5];
var Zi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Zi.primary = Zi[5];
var el = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
el.primary = el[5];
var tl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
tl.primary = tl[5];
var nl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
nl.primary = nl[5];
var rl = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
rl.primary = rl[5];
var al = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
al.primary = al[5];
var Eo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Eo.primary = Eo[5];
var ol = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ol.primary = ol[5];
var il = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
il.primary = il[5];
var ll = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ll.primary = ll[5];
var sl = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
sl.primary = sl[5];
var pi = {
  red: Ji,
  volcano: Qi,
  orange: Zi,
  gold: el,
  yellow: tl,
  lime: nl,
  green: rl,
  cyan: al,
  blue: Eo,
  geekblue: ol,
  purple: il,
  magenta: ll,
  grey: sl
};
function Up(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: a,
    colorError: o,
    colorInfo: i,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: u
  } = e, d = t(l), f = t(r), v = t(a), p = t(o), h = t(i), g = n(c, u), m = e.colorLink || e.colorInfo, b = t(m), y = new Dt(p[1]).mix(new Dt(p[3]), 50).toHexString();
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: p[3],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Dt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Xp = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function Yp(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Xp(r));
}
const Jp = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Qp(e) {
  return (e + 8) / e;
}
function Zp(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Qp(n)
  }));
}
const eh = (e) => {
  const t = Zp(e), n = t.map((d) => d.size), r = t.map((d) => d.lineHeight), a = n[1], o = n[0], i = n[2], l = r[1], c = r[0], u = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: u,
    lineHeightSM: c,
    fontHeight: Math.round(l * a),
    fontHeightLG: Math.round(u * i),
    fontHeightSM: Math.round(c * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function th(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Pn = (e, t) => new Dt(e).setA(t).toRgbString(), sa = (e, t) => new Dt(e).darken(t).toHexString(), nh = (e) => {
  const t = Oa(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, rh = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Pn(r, 0.88),
    colorTextSecondary: Pn(r, 0.65),
    colorTextTertiary: Pn(r, 0.45),
    colorTextQuaternary: Pn(r, 0.25),
    colorFill: Pn(r, 0.15),
    colorFillSecondary: Pn(r, 0.06),
    colorFillTertiary: Pn(r, 0.04),
    colorFillQuaternary: Pn(r, 0.02),
    colorBgSolid: Pn(r, 1),
    colorBgSolidHover: Pn(r, 0.75),
    colorBgSolidActive: Pn(r, 0.95),
    colorBgLayout: sa(n, 4),
    colorBgContainer: sa(n, 0),
    colorBgElevated: sa(n, 0),
    colorBgSpotlight: Pn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sa(n, 15),
    colorBorderSecondary: sa(n, 6)
  };
};
function ah(e) {
  gi.pink = gi.magenta, pi.pink = pi.magenta;
  const t = Object.keys(nf).map((n) => {
    const r = e[n] === gi[n] ? pi[n] : Oa(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Up(e, {
    generateColorPalettes: nh,
    generateNeutralColorPalettes: rh
  })), eh(e.fontSize)), th(e)), Jp(e)), Yp(e));
}
const of = ki(ah), cl = {
  token: Ea,
  override: {
    override: Ea
  },
  hashed: !0
}, lf = /* @__PURE__ */ te.createContext(cl), ul = "ant", is = "anticon", oh = ["outlined", "borderless", "filled", "underlined"], ih = (e, t) => t || (e ? `${ul}-${e}` : ul), Mt = /* @__PURE__ */ s.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ih,
  iconPrefixCls: is
}), {
  Consumer: wE
} = Mt, wc = {};
function tr(e) {
  const t = s.useContext(Mt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  } = t, o = t[e];
  return Object.assign(Object.assign({
    classNames: wc,
    styles: wc
  }, o), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  });
}
const lh = `-ant-${Date.now()}-${Math.random()}`;
function sh(e, t) {
  const n = {}, r = (i, l) => {
    let c = i.clone();
    return c = l?.(c) || c, c.toRgbString();
  }, a = (i, l) => {
    const c = new Dt(i), u = Oa(c.toRgbString());
    n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Dt(t.primaryColor), l = Oa(i.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(i, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (u) => u.setA(u.a * 0.12));
    const c = new Dt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setA(u.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function ch(e, t) {
  const n = sh(e, t);
  vn() ? Jn(n, `${lh}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Aa(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Oo = /* @__PURE__ */ s.createContext(!1), uh = ({
  children: e,
  disabled: t
}) => {
  const n = s.useContext(Oo);
  return /* @__PURE__ */ s.createElement(Oo.Provider, {
    value: t ?? n
  }, e);
}, Xr = /* @__PURE__ */ s.createContext(void 0), dh = ({
  children: e,
  size: t
}) => {
  const n = s.useContext(Xr);
  return /* @__PURE__ */ s.createElement(Xr.Provider, {
    value: t || n
  }, e);
};
function fh() {
  const e = _n(Oo), t = _n(Xr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var sf = /* @__PURE__ */ Yt(function e() {
  Xt(this, e);
}), cf = "CALC_UNIT", vh = new RegExp(cf, "g");
function hi(e) {
  return typeof e == "number" ? "".concat(e).concat(cf) : e;
}
var mh = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n(r, a) {
    var o;
    Xt(this, n), o = t.call(this), _(mt(o), "result", ""), _(mt(o), "unitlessCssVar", void 0), _(mt(o), "lowPriority", void 0);
    var i = ze(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = hi(r) : i === "string" && (o.result = r), o;
  }
  return Yt(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(hi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(hi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var o = this, i = a || {}, l = i.unit, c = !0;
      return typeof l == "boolean" ? c = l : Array.from(this.unitlessCssVar).some(function(u) {
        return o.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(vh, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(sf), gh = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n(r) {
    var a;
    return Xt(this, n), a = t.call(this), _(mt(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return Yt(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof n ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof n ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
})(sf), ph = function(t, n) {
  var r = t === "css" ? mh : gh;
  return function(a) {
    return new r(a, n);
  };
}, Ec = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function an(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Pa(e) {
  var t = s.useRef(!1), n = s.useState(e), r = H(n, 2), a = r[0], o = r[1];
  s.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, c) {
    c && t.current || o(l);
  }
  return [a, i];
}
function bi(e) {
  return e !== void 0;
}
function mn(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, l = Pa(function() {
    return bi(a) ? a : bi(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = H(l, 2), u = c[0], d = c[1], f = a !== void 0 ? a : u, v = i ? i(f) : f, p = an(o), h = Pa([f]), g = H(h, 2), m = g[0], b = g[1];
  Ki(function() {
    var $ = m[0];
    u !== $ && p(u, $);
  }, [m]), Ki(function() {
    bi(a) || d(a);
  }, [a]);
  var y = an(function($, C) {
    d($, C), b([f], C);
  });
  return [v, y];
}
function Oc(e, t, n, r) {
  var a = D({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(l) {
      var c = H(l, 2), u = c[0], d = c[1];
      if (process.env.NODE_ENV !== "production" && tt(!(a != null && a[u]), "Component Token `".concat(String(u), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(d), "` instead.")), a != null && a[u] || a != null && a[d]) {
        var f;
        (f = a[d]) !== null && f !== void 0 || (a[d] = a?.[u]);
      }
    });
  }
  var i = D(D({}, n), a);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var uf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", dl = !0;
function Bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!uf)
    return Object.assign.apply(Object, [{}].concat(t));
  dl = !1;
  var r = {};
  return t.forEach(function(a) {
    if (ze(a) === "object") {
      var o = Object.keys(a);
      o.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[i];
          }
        });
      });
    }
  }), dl = !0, r;
}
var Pc = {};
function hh() {
}
var bh = function(t) {
  var n, r = t, a = hh;
  return uf && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (dl) {
        var c;
        (c = n) === null || c === void 0 || c.add(l);
      }
      return i[l];
    }
  }), a = function(i, l) {
    var c;
    Pc[i] = {
      global: Array.from(n),
      component: D(D({}, (c = Pc[i]) === null || c === void 0 ? void 0 : c.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function Rc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Bt(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function yh(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return W(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return W(o);
      }).join(","), ")");
    }
  };
}
var Sh = 1e3 * 60 * 10, Ch = /* @__PURE__ */ (function() {
  function e() {
    Xt(this, e), _(this, "map", /* @__PURE__ */ new Map()), _(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), _(this, "nextID", 0), _(this, "lastAccessBeat", /* @__PURE__ */ new Map()), _(this, "accessBeat", 0);
  }
  return Yt(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var a = this.getCompositeKey(n);
      this.map.set(a, r), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), a = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, a = n.map(function(o) {
        return o && ze(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(ze(o), "_").concat(o);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(a, o) {
          r - a > Sh && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Ic = new Ch();
function $h(e, t) {
  return te.useMemo(function() {
    var n = Ic.get(t);
    if (n)
      return n;
    var r = e();
    return Ic.set(t, r), r;
  }, t);
}
var xh = function() {
  return {};
};
function wh(e) {
  var t = e.useCSP, n = t === void 0 ? xh : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function c(v, p, h, g) {
    var m = Array.isArray(v) ? v[0] : v;
    function b(E) {
      return "".concat(String(m)).concat(E.slice(0, 1).toUpperCase()).concat(E.slice(1));
    }
    var y = g?.unitless || {}, $ = typeof l == "function" ? l(v) : {}, C = D(D({}, $), {}, _({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(E) {
      C[b(E)] = y[E];
    });
    var S = D(D({}, g), {}, {
      unitless: C,
      prefixToken: b
    }), x = d(v, p, h, S), w = u(m, h, S);
    return function(E) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, P = x(E, O), M = H(P, 2), I = M[1], N = w(O), T = H(N, 2), F = T[0], j = T[1];
      return [F, I, j];
    };
  }
  function u(v, p, h) {
    var g = h.unitless, m = h.injectStyle, b = m === void 0 ? !0 : m, y = h.prefixToken, $ = h.ignore, C = function(w) {
      var E = w.rootCls, O = w.cssVar, P = O === void 0 ? {} : O, M = r(), I = M.realToken;
      return jp({
        path: [v],
        prefix: P.prefix,
        key: P.key,
        unitless: g,
        ignore: $,
        token: I,
        scope: E
      }, function() {
        var N = Rc(v, I, p), T = Oc(v, I, N, {
          deprecatedTokens: h?.deprecatedTokens
        });
        return Object.keys(N).forEach(function(F) {
          T[y(F)] = T[F], delete T[F];
        }), T;
      }), null;
    }, S = function(w) {
      var E = r(), O = E.cssVar;
      return [function(P) {
        return b && O ? /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(C, {
          rootCls: w,
          cssVar: O,
          component: v
        }), P) : P;
      }, O?.key];
    };
    return S;
  }
  function d(v, p, h) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(v) ? v : [v, v], b = H(m, 1), y = b[0], $ = m.join("-"), C = e.layer || {
      name: "antd"
    };
    return function(S) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S, w = r(), E = w.theme, O = w.realToken, P = w.hashId, M = w.token, I = w.cssVar, N = a(), T = N.rootPrefixCls, F = N.iconPrefixCls, j = n(), A = I ? "css" : "js", B = $h(function() {
        var q = /* @__PURE__ */ new Set();
        return I && Object.keys(g.unitless || {}).forEach(function(ee) {
          q.add(fo(ee, I.prefix)), q.add(fo(ee, Ec(y, I.prefix)));
        }), ph(A, q);
      }, [A, y, I?.prefix]), V = yh(A), L = V.max, R = V.min, z = {
        theme: E,
        token: M,
        hashId: P,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: g.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof o == "function" && Yi(D(D({}, z), {}, {
        clientOnly: !1,
        path: ["Shared", T]
      }), function() {
        return o(M, {
          prefix: {
            rootPrefixCls: T,
            iconPrefixCls: F
          },
          csp: j
        });
      });
      var k = Yi(D(D({}, z), {}, {
        path: [$, S, F]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var q = bh(M), ee = q.token, re = q.flush, Q = Rc(y, O, h), le = ".".concat(S), oe = Oc(y, O, Q, {
          deprecatedTokens: g.deprecatedTokens
        });
        I && Q && ze(Q) === "object" && Object.keys(Q).forEach(function(ae) {
          Q[ae] = "var(".concat(fo(ae, Ec(y, I.prefix)), ")");
        });
        var de = Bt(ee, {
          componentCls: le,
          prefixCls: S,
          iconCls: ".".concat(F),
          antCls: ".".concat(T),
          calc: B,
          // @ts-ignore
          max: L,
          // @ts-ignore
          min: R
        }, I ? Q : oe), X = p(de, {
          hashId: P,
          prefixCls: S,
          rootPrefixCls: T,
          iconPrefixCls: F
        });
        re(y, oe);
        var K = typeof i == "function" ? i(de, S, x, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : K, X];
      });
      return [k, P];
    };
  }
  function f(v, p, h) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = d(v, p, h, D({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function($) {
      var C = $.prefixCls, S = $.rootCls, x = S === void 0 ? C : S;
      return m(C, x), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: d
  };
}
const Ra = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Eh = "5.28.1";
function yi(e) {
  return e >= 0 && e <= 255;
}
function to(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Dt(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: c
  } = new Dt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - i * (1 - u)) / u), f = Math.round((r - l * (1 - u)) / u), v = Math.round((a - c * (1 - u)) / u);
    if (yi(d) && yi(f) && yi(v))
      return new Dt({
        r: d,
        g: f,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Dt({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var Oh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function df(e) {
  const {
    override: t
  } = e, n = Oh(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Ea).forEach((v) => {
    delete r[v];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, l = 768, c = 992, u = 1200, d = 1600;
  return a.motion === !1 && (a.motionDurationFast = "0s", a.motionDurationMid = "0s", a.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: to(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: to(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: to(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: to(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Dt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Dt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Dt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var Nc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ff = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Ph = {
  motionBase: !0,
  motionUnit: !0
}, Rh = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, vf = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = Nc(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = df(i), o && Object.entries(o).forEach(([l, c]) => {
    const {
      theme: u
    } = c, d = Nc(c, ["theme"]);
    let f = d;
    u && (f = vf(Object.assign(Object.assign({}, i), d), {
      override: d
    }, u)), i[l] = f;
  }), i;
};
function Bn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = te.useContext(lf), o = `${Eh}-${t || ""}`, i = n || of, [l, c, u] = ip(i, [Ea, e], {
    salt: o,
    override: r,
    getComputedToken: vf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: df,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: ff,
      ignore: Ph,
      preserve: Rh
    }
  });
  return [i, u, t ? c : "", l, a];
}
const br = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, gn = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), ls = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Go = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Ih = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Nh = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let l = {};
  return r !== !1 && (l = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, l), i), {
      [a]: i
    })
  };
}, Ia = (e, t) => ({
  outline: `${W(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Po = (e, t) => ({
  "&:focus-visible": Ia(e, t)
}), mf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, ls()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: un,
  genSubStyleComponent: _h
} = wh({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = _n(Mt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Bn();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = _n(Mt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = Ih(e);
    return [r, {
      "&": r
    }, mf((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : is)];
  },
  getCommonStyle: Nh,
  getCompUnitless: () => ff
});
function Mh(e, t) {
  return Ra.reduce((n, r) => {
    const a = e[`${r}1`], o = e[`${r}3`], i = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: l
    }));
  }, {});
}
const Th = (e, t) => {
  const [n, r] = Bn();
  return Yi({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => mf(e));
}, Dh = Object.assign({}, s), {
  useId: _c
} = Dh, jh = () => "", zh = typeof _c > "u" ? jh : _c;
function Ah(e, t, n) {
  var r, a;
  const o = on("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, cl), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : cl.hashed,
    cssVar: t?.cssVar
  }) : t, c = zh();
  if (process.env.NODE_ENV !== "production") {
    const u = i.cssVar || l.cssVar, d = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || c);
    process.env.NODE_ENV !== "production" && o(!u || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Da(() => {
    var u, d;
    if (!e)
      return t;
    const f = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((h) => {
      f[h] = Object.assign(Object.assign({}, f[h]), e.components[h]);
    });
    const v = `css-var-${c.replace(/:/g, "")}`, p = ((u = i.cssVar) !== null && u !== void 0 ? u : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((d = i.cssVar) === null || d === void 0 ? void 0 : d.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: f,
      cssVar: p
    });
  }, [i, l], (u, d) => u.some((f, v) => {
    const p = d[v];
    return !xa(f, p, !0);
  }));
}
var Lh = ["children"], gf = /* @__PURE__ */ s.createContext({});
function Fh(e) {
  var t = e.children, n = ut(e, Lh);
  return /* @__PURE__ */ s.createElement(gf.Provider, {
    value: n
  }, t);
}
var Vh = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n() {
    return Xt(this, n), t.apply(this, arguments);
  }
  return Yt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(s.Component);
function Bh(e) {
  var t = s.useReducer(function(l) {
    return l + 1;
  }, 0), n = H(t, 2), r = n[1], a = s.useRef(e), o = an(function() {
    return a.current;
  }), i = an(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, i];
}
var or = "none", no = "appear", ro = "enter", ao = "leave", Mc = "none", zn = "prepare", Ar = "start", Lr = "active", ss = "end", pf = "prepared";
function Tc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Hh(e, t) {
  var n = {
    animationend: Tc("Animation", "AnimationEnd"),
    transitionend: Tc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Wh = Hh(vn(), typeof window < "u" ? window : {}), hf = {};
if (vn()) {
  var kh = document.createElement("div");
  hf = kh.style;
}
var oo = {};
function bf(e) {
  if (oo[e])
    return oo[e];
  var t = Wh[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in hf)
        return oo[e] = t[o], oo[e];
    }
  return "";
}
var yf = bf("animationend"), Sf = bf("transitionend"), Cf = !!(yf && Sf), Dc = yf || "animationend", jc = Sf || "transitionend";
function zc(e, t) {
  if (!e) return null;
  if (ze(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Gh = (function(e) {
  var t = Ie();
  function n(a) {
    a && (a.removeEventListener(jc, e), a.removeEventListener(Dc, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(jc, e), a.addEventListener(Dc, e), t.current = a);
  }
  return s.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var $f = vn() ? Tm : Wt;
const Kh = (function() {
  var e = s.useRef(null);
  function t() {
    kt.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = kt(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return s.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
});
var qh = [zn, Ar, Lr, ss], Uh = [zn, pf], xf = !1, Xh = !0;
function wf(e) {
  return e === Lr || e === ss;
}
const Yh = (function(e, t, n) {
  var r = Pa(Mc), a = H(r, 2), o = a[0], i = a[1], l = Kh(), c = H(l, 2), u = c[0], d = c[1];
  function f() {
    i(zn, !0);
  }
  var v = t ? Uh : qh;
  return $f(function() {
    if (o !== Mc && o !== ss) {
      var p = v.indexOf(o), h = v[p + 1], g = n(o);
      g === xf ? i(h, !0) : h && u(function(m) {
        function b() {
          m.isCanceled() || i(h, !0);
        }
        g === !0 ? b() : Promise.resolve(g).then(b);
      });
    }
  }, [e, o]), s.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, o];
});
function Jh(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, c = r.motionLeave, u = c === void 0 ? !0 : c, d = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, p = r.onEnterPrepare, h = r.onLeavePrepare, g = r.onAppearStart, m = r.onEnterStart, b = r.onLeaveStart, y = r.onAppearActive, $ = r.onEnterActive, C = r.onLeaveActive, S = r.onAppearEnd, x = r.onEnterEnd, w = r.onLeaveEnd, E = r.onVisibleChanged, O = Pa(), P = H(O, 2), M = P[0], I = P[1], N = Bh(or), T = H(N, 2), F = T[0], j = T[1], A = Pa(null), B = H(A, 2), V = B[0], L = B[1], R = F(), z = Ie(!1), k = Ie(null);
  function q() {
    return n();
  }
  var ee = Ie(!1);
  function re() {
    j(or), L(null, !0);
  }
  var Q = an(function(se) {
    var ue = F();
    if (ue !== or) {
      var xe = q();
      if (!(se && !se.deadline && se.target !== xe)) {
        var ve = ee.current, We;
        ue === no && ve ? We = S?.(xe, se) : ue === ro && ve ? We = x?.(xe, se) : ue === ao && ve && (We = w?.(xe, se)), ve && We !== !1 && re();
      }
    }
  }), le = Gh(Q), oe = H(le, 1), de = oe[0], X = function(ue) {
    switch (ue) {
      case no:
        return _(_(_({}, zn, v), Ar, g), Lr, y);
      case ro:
        return _(_(_({}, zn, p), Ar, m), Lr, $);
      case ao:
        return _(_(_({}, zn, h), Ar, b), Lr, C);
      default:
        return {};
    }
  }, K = s.useMemo(function() {
    return X(R);
  }, [R]), ae = Yh(R, !e, function(se) {
    if (se === zn) {
      var ue = K[zn];
      return ue ? ue(q()) : xf;
    }
    if (Y in K) {
      var xe;
      L(((xe = K[Y]) === null || xe === void 0 ? void 0 : xe.call(K, q(), null)) || null);
    }
    return Y === Lr && R !== or && (de(q()), d > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      Q({
        deadline: !0
      });
    }, d))), Y === pf && re(), Xh;
  }), G = H(ae, 2), ne = G[0], Y = G[1], me = wf(Y);
  ee.current = me;
  var pe = Ie(null);
  $f(function() {
    if (!(z.current && pe.current === t)) {
      I(t);
      var se = z.current;
      z.current = !0;
      var ue;
      !se && t && l && (ue = no), se && t && o && (ue = ro), (se && !t && u || !se && f && !t && u) && (ue = ao);
      var xe = X(ue);
      ue && (e || xe[zn]) ? (j(ue), ne()) : j(or), pe.current = t;
    }
  }, [t]), Wt(function() {
    // Cancel appear
    (R === no && !l || // Cancel enter
    R === ro && !o || // Cancel leave
    R === ao && !u) && j(or);
  }, [l, o, u]), Wt(function() {
    return function() {
      z.current = !1, clearTimeout(k.current);
    };
  }, []);
  var he = s.useRef(!1);
  Wt(function() {
    M && (he.current = !0), M !== void 0 && R === or && ((he.current || M) && E?.(M), he.current = !0);
  }, [M, R]);
  var fe = V;
  return K[zn] && Y === Ar && (fe = D({
    transition: "none"
  }, fe)), [R, Y, fe, M ?? t];
}
function Qh(e) {
  var t = e;
  ze(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ s.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, c = a.removeOnLeave, u = c === void 0 ? !0 : c, d = a.forceRender, f = a.children, v = a.motionName, p = a.leavedClassName, h = a.eventProps, g = s.useContext(gf), m = g.motion, b = n(a, m), y = Ie(), $ = Ie();
    function C() {
      try {
        return y.current instanceof HTMLElement ? y.current : uo($.current);
      } catch {
        return null;
      }
    }
    var S = Jh(b, l, C, a), x = H(S, 4), w = x[0], E = x[1], O = x[2], P = x[3], M = s.useRef(P);
    P && (M.current = !0);
    var I = s.useCallback(function(B) {
      y.current = B, Yl(o, B);
    }, [o]), N, T = D(D({}, h), {}, {
      visible: l
    });
    if (!f)
      N = null;
    else if (w === or)
      P ? N = f(D({}, T), I) : !u && M.current && p ? N = f(D(D({}, T), {}, {
        className: p
      }), I) : d || !u && !p ? N = f(D(D({}, T), {}, {
        style: {
          display: "none"
        }
      }), I) : N = null;
    else {
      var F;
      E === zn ? F = "prepare" : wf(E) ? F = "active" : E === Ar && (F = "start");
      var j = zc(v, "".concat(w, "-").concat(F));
      N = f(D(D({}, T), {}, {
        className: U(zc(v, w), _(_({}, j, j && F), v, typeof v == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ s.isValidElement(N) && Zr(N)) {
      var A = ja(N);
      A || (N = /* @__PURE__ */ s.cloneElement(N, {
        ref: I
      }));
    }
    return /* @__PURE__ */ s.createElement(Vh, {
      ref: $
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const La = Qh(Cf);
var fl = "add", vl = "keep", ml = "remove", Si = "removed";
function Zh(e) {
  var t;
  return e && ze(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  });
}
function gl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Zh);
}
function e0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = gl(e), i = gl(t);
  o.forEach(function(u) {
    for (var d = !1, f = r; f < a; f += 1) {
      var v = i[f];
      if (v.key === u.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(p) {
          return D(D({}, p), {}, {
            status: fl
          });
        })), r = f), n.push(D(D({}, v), {}, {
          status: vl
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(D(D({}, u), {}, {
      status: ml
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(u) {
    return D(D({}, u), {}, {
      status: fl
    });
  })));
  var l = {};
  n.forEach(function(u) {
    var d = u.key;
    l[d] = (l[d] || 0) + 1;
  });
  var c = Object.keys(l).filter(function(u) {
    return l[u] > 1;
  });
  return c.forEach(function(u) {
    n = n.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== u || v !== ml;
    }), n.forEach(function(d) {
      d.key === u && (d.status = vl);
    });
  }), n;
}
var t0 = ["component", "children", "onVisibleChanged", "onAllRemoved"], n0 = ["status"], r0 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function a0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : La, n = /* @__PURE__ */ (function(r) {
    Zn(o, r);
    var a = er(o);
    function o() {
      var i;
      Xt(this, o);
      for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      return i = a.call.apply(a, [this].concat(c)), _(mt(i), "state", {
        keyEntities: []
      }), _(mt(i), "removeKey", function(d) {
        i.setState(function(f) {
          var v = f.keyEntities.map(function(p) {
            return p.key !== d ? p : D(D({}, p), {}, {
              status: Si
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = i.state.keyEntities, v = f.filter(function(p) {
            var h = p.status;
            return h !== Si;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Yt(o, [{
      key: "render",
      value: function() {
        var l = this, c = this.state.keyEntities, u = this.props, d = u.component, f = u.children, v = u.onVisibleChanged;
        u.onAllRemoved;
        var p = ut(u, t0), h = d || s.Fragment, g = {};
        return r0.forEach(function(m) {
          g[m] = p[m], delete p[m];
        }), delete p.keys, /* @__PURE__ */ s.createElement(h, p, c.map(function(m, b) {
          var y = m.status, $ = ut(m, n0), C = y === fl || y === vl;
          return /* @__PURE__ */ s.createElement(t, ye({}, g, {
            key: $.key,
            visible: C,
            eventProps: $,
            onVisibleChanged: function(x) {
              v?.(x, {
                key: $.key
              }), x || l.removeKey($.key);
            }
          }), function(S, x) {
            return f(D(D({}, S), {}, {
              index: b
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, c) {
        var u = l.keys, d = c.keyEntities, f = gl(u), v = e0(d, f);
        return {
          keyEntities: v.filter(function(p) {
            var h = d.find(function(g) {
              var m = g.key;
              return p.key === m;
            });
            return !(h && h.status === Si && p.status === ml);
          })
        };
      }
    }]), o;
  })(s.Component);
  return _(n, "defaultProps", {
    component: "div"
  }), n;
}
a0(Cf);
const pl = /* @__PURE__ */ s.createContext(!0);
process.env.NODE_ENV !== "production" && (pl.displayName = "MotionCacheContext");
function o0(e) {
  const t = s.useContext(pl), {
    children: n
  } = e, [, r] = Bn(), {
    motion: a
  } = r, o = s.useRef(!1);
  return o.current || (o.current = t !== a), o.current ? /* @__PURE__ */ s.createElement(pl.Provider, {
    value: a
  }, /* @__PURE__ */ s.createElement(Fh, {
    motion: a
  }, n)) : n;
}
const Ef = /* @__PURE__ */ s.memo(({
  dropdownMatchSelectWidth: e
}) => (on("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Ef.displayName = "PropWarning");
const i0 = process.env.NODE_ENV !== "production" ? Ef : () => null;
var l0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let hl = !1;
process.env.NODE_ENV;
const s0 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Of;
function c0() {
  return Of || ul;
}
function u0(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const d0 = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (Of = t), r && u0(r) && (process.env.NODE_ENV !== "production" && Aa(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), ch(c0(), r));
}, f0 = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: l,
    componentSize: c,
    direction: u,
    space: d,
    splitter: f,
    virtual: v,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: h,
    popupOverflow: g,
    legacyLocale: m,
    parentContext: b,
    iconPrefixCls: y,
    theme: $,
    componentDisabled: C,
    segmented: S,
    statistic: x,
    spin: w,
    calendar: E,
    carousel: O,
    cascader: P,
    collapse: M,
    typography: I,
    checkbox: N,
    descriptions: T,
    divider: F,
    drawer: j,
    skeleton: A,
    steps: B,
    image: V,
    layout: L,
    list: R,
    mentions: z,
    modal: k,
    progress: q,
    result: ee,
    slider: re,
    breadcrumb: Q,
    menu: le,
    pagination: oe,
    input: de,
    textArea: X,
    empty: K,
    badge: ae,
    radio: G,
    rate: ne,
    switch: Y,
    transfer: me,
    avatar: pe,
    message: he,
    tag: fe,
    table: se,
    card: ue,
    tabs: xe,
    timeline: ve,
    timePicker: We,
    upload: Ae,
    notification: Je,
    tree: Le,
    colorPicker: De,
    datePicker: qe,
    rangePicker: we,
    flex: Ge,
    wave: et,
    dropdown: Te,
    warning: Fe,
    tour: Ue,
    tooltip: Ve,
    popover: Ct,
    popconfirm: $t,
    floatButton: Lt,
    floatButtonGroup: Pt,
    variant: zt,
    inputNumber: jt,
    treeSelect: Et
  } = e, rt = s.useCallback((Ce, Qe) => {
    const {
      prefixCls: lt
    } = e;
    if (Qe)
      return Qe;
    const dt = lt || b.getPrefixCls("");
    return Ce ? `${dt}-${Ce}` : dt;
  }, [b.getPrefixCls, e.prefixCls]), Ke = y || b.iconPrefixCls || is, yt = n || b.csp;
  Th(Ke, yt);
  const st = Ah($, b.theme, {
    prefixCls: rt("")
  });
  process.env.NODE_ENV !== "production" && (hl = hl || !!st);
  const _e = {
    csp: yt,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: l || m,
    direction: u,
    space: d,
    splitter: f,
    virtual: v,
    popupMatchSelectWidth: h ?? p,
    popupOverflow: g,
    getPrefixCls: rt,
    iconPrefixCls: Ke,
    theme: st,
    segmented: S,
    statistic: x,
    spin: w,
    calendar: E,
    carousel: O,
    cascader: P,
    collapse: M,
    typography: I,
    checkbox: N,
    descriptions: T,
    divider: F,
    drawer: j,
    skeleton: A,
    steps: B,
    image: V,
    input: de,
    textArea: X,
    layout: L,
    list: R,
    mentions: z,
    modal: k,
    progress: q,
    result: ee,
    slider: re,
    breadcrumb: Q,
    menu: le,
    pagination: oe,
    empty: K,
    badge: ae,
    radio: G,
    rate: ne,
    switch: Y,
    transfer: me,
    avatar: pe,
    message: he,
    tag: fe,
    table: se,
    card: ue,
    tabs: xe,
    timeline: ve,
    timePicker: We,
    upload: Ae,
    notification: Je,
    tree: Le,
    colorPicker: De,
    datePicker: qe,
    rangePicker: we,
    flex: Ge,
    wave: et,
    dropdown: Te,
    warning: Fe,
    tour: Ue,
    tooltip: Ve,
    popover: Ct,
    popconfirm: $t,
    floatButton: Lt,
    floatButtonGroup: Pt,
    variant: zt,
    inputNumber: jt,
    treeSelect: Et
  };
  process.env.NODE_ENV !== "production" && on("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ke = Object.assign({}, b);
  Object.keys(_e).forEach((Ce) => {
    _e[Ce] !== void 0 && (ke[Ce] = _e[Ce]);
  }), s0.forEach((Ce) => {
    const Qe = e[Ce];
    Qe && (ke[Ce] = Qe);
  }), typeof r < "u" && (ke.button = Object.assign({
    autoInsertSpace: r
  }, ke.button));
  const Be = Da(() => ke, ke, (Ce, Qe) => {
    const lt = Object.keys(Ce), dt = Object.keys(Qe);
    return lt.length !== dt.length || lt.some((at) => Ce[at] !== Qe[at]);
  }), {
    layer: ge
  } = s.useContext(za), Z = s.useMemo(() => ({
    prefixCls: Ke,
    csp: yt,
    layer: ge ? "antd" : void 0
  }), [Ke, yt, ge]);
  let J = /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(i0, {
    dropdownMatchSelectWidth: p
  }), t);
  const ie = s.useMemo(() => {
    var Ce, Qe, lt, dt;
    return zr(((Ce = Ur.Form) === null || Ce === void 0 ? void 0 : Ce.defaultValidateMessages) || {}, ((lt = (Qe = Be.locale) === null || Qe === void 0 ? void 0 : Qe.Form) === null || lt === void 0 ? void 0 : lt.defaultValidateMessages) || {}, ((dt = Be.form) === null || dt === void 0 ? void 0 : dt.validateMessages) || {}, i?.validateMessages || {});
  }, [Be, i?.validateMessages]);
  Object.keys(ie).length > 0 && (J = /* @__PURE__ */ s.createElement(Vp.Provider, {
    value: ie
  }, J)), l && (J = /* @__PURE__ */ s.createElement(tf, {
    locale: l,
    _ANT_MARK__: ef
  }, J)), J = /* @__PURE__ */ s.createElement(as.Provider, {
    value: Z
  }, J), c && (J = /* @__PURE__ */ s.createElement(dh, {
    size: c
  }, J)), J = /* @__PURE__ */ s.createElement(o0, null, J);
  const Ee = s.useMemo(() => {
    const Ce = st || {}, {
      algorithm: Qe,
      token: lt,
      components: dt,
      cssVar: at
    } = Ce, ft = l0(Ce, ["algorithm", "token", "components", "cssVar"]), ht = Qe && (!Array.isArray(Qe) || Qe.length > 0) ? ki(Qe) : of, At = {};
    Object.entries(dt || {}).forEach(([xt, Rt]) => {
      const ce = Object.assign({}, Rt);
      "algorithm" in ce && (ce.algorithm === !0 ? ce.theme = ht : (Array.isArray(ce.algorithm) || typeof ce.algorithm == "function") && (ce.theme = ki(ce.algorithm)), delete ce.algorithm), At[xt] = ce;
    });
    const Kt = Object.assign(Object.assign({}, Ea), lt);
    return Object.assign(Object.assign({}, ft), {
      theme: ht,
      token: Kt,
      components: At,
      override: Object.assign({
        override: Kt
      }, At),
      cssVar: at
    });
  }, [st]);
  return $ && (J = /* @__PURE__ */ s.createElement(lf.Provider, {
    value: Ee
  }, J)), Be.warning && (J = /* @__PURE__ */ s.createElement(Jd.Provider, {
    value: Be.warning
  }, J)), C !== void 0 && (J = /* @__PURE__ */ s.createElement(uh, {
    disabled: C
  }, J)), /* @__PURE__ */ s.createElement(Mt.Provider, {
    value: Be
  }, J);
}, yr = (e) => {
  const t = s.useContext(Mt), n = s.useContext(os);
  return /* @__PURE__ */ s.createElement(f0, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
yr.ConfigContext = Mt;
yr.SizeContext = Xr;
yr.config = d0;
yr.useConfig = fh;
Object.defineProperty(yr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Aa(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Xr)
});
process.env.NODE_ENV !== "production" && (yr.displayName = "ConfigProvider");
function Pf(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function v0(e) {
  return Pf(e) instanceof ShadowRoot;
}
function Ro(e) {
  return v0(e) ? Pf(e) : null;
}
function m0(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function g0(e, t) {
  tt(e, "[@ant-design/icons] ".concat(t));
}
function Ac(e) {
  return ze(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ze(e.icon) === "object" || typeof e.icon == "function");
}
function Lc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[m0(n)] = r;
    }
    return t;
  }, {});
}
function bl(e, t, n) {
  return n ? /* @__PURE__ */ te.createElement(e.tag, D(D({
    key: t
  }, Lc(e.attrs)), n), (e.children || []).map(function(r, a) {
    return bl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ te.createElement(e.tag, D({
    key: t
  }, Lc(e.attrs)), (e.children || []).map(function(r, a) {
    return bl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Rf(e) {
  return Oa(e)[0];
}
function If(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var p0 = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, h0 = function(t) {
  var n = _n(as), r = n.csp, a = n.prefixCls, o = n.layer, i = p0;
  a && (i = i.replace(/anticon/g, a)), o && (i = "@layer ".concat(o, ` {
`).concat(i, `
}`)), Wt(function() {
    var l = t.current, c = Ro(l);
    Jn(i, "@ant-design-icons", {
      prepend: !o,
      csp: r,
      attachTo: c
    });
  }, []);
}, b0 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ga = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function y0(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  ga.primaryColor = t, ga.secondaryColor = n || Rf(t), ga.calculated = !!n;
}
function S0() {
  return D({}, ga);
}
var ta = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, c = ut(t, b0), u = s.useRef(), d = ga;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: l || Rf(i)
  }), h0(u), g0(Ac(n), "icon should be icon definiton, but got ".concat(n)), !Ac(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = D(D({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), bl(f.icon, "svg-".concat(f.name), D(D({
    className: r,
    onClick: a,
    style: o,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
ta.displayName = "IconReact";
ta.getTwoToneColors = S0;
ta.setTwoToneColors = y0;
function Nf(e) {
  var t = If(e), n = H(t, 2), r = n[0], a = n[1];
  return ta.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function C0() {
  var e = ta.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var $0 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Nf(Eo.primary);
var dn = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, l = e.onClick, c = e.twoToneColor, u = ut(e, $0), d = s.useContext(as), f = d.prefixCls, v = f === void 0 ? "anticon" : f, p = d.rootClassName, h = U(p, v, _(_({}, "".concat(v, "-").concat(r.name), !!r.name), "".concat(v, "-spin"), !!a || r.name === "loading"), n), g = i;
  g === void 0 && l && (g = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = If(c), y = H(b, 2), $ = y[0], C = y[1];
  return /* @__PURE__ */ s.createElement("span", ye({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: t,
    tabIndex: g,
    onClick: l,
    className: h
  }), /* @__PURE__ */ s.createElement(ta, {
    icon: r,
    primaryColor: $,
    secondaryColor: C,
    style: m
  }));
});
dn.displayName = "AntdIcon";
dn.getTwoToneColor = C0;
dn.setTwoToneColor = Nf;
var x0 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, w0 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: x0
  }));
}, _f = /* @__PURE__ */ s.forwardRef(w0);
process.env.NODE_ENV !== "production" && (_f.displayName = "CloseCircleFilled");
var E0 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, O0 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: E0
  }));
}, cs = /* @__PURE__ */ s.forwardRef(O0);
process.env.NODE_ENV !== "production" && (cs.displayName = "CloseOutlined");
var P0 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, R0 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, I0 = "".concat(P0, " ").concat(R0).split(/[\s\n]+/), N0 = "aria-", _0 = "data-";
function Fc(e, t) {
  return e.indexOf(t) === 0;
}
function Na(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = D({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Fc(a, N0)) || // Data
    n.data && Fc(a, _0) || // Attr
    n.attr && I0.includes(a)) && (r[a] = e[a]);
  }), r;
}
function M0(e) {
  return e && /* @__PURE__ */ te.isValidElement(e) && e.type === te.Fragment;
}
const T0 = (e, t, n) => /* @__PURE__ */ te.isValidElement(e) ? /* @__PURE__ */ te.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Fa(e, t) {
  return T0(e, e, t);
}
const Ko = (e) => {
  const [, , , , t] = Bn();
  return t ? `${e}-css-var` : "";
};
var $e = {
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * N
   */
  N: 78,
  /**
   * P
   */
  P: 80,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224
}, D0 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, j0 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: D0
  }));
}, Mf = /* @__PURE__ */ s.forwardRef(j0);
process.env.NODE_ENV !== "production" && (Mf.displayName = "LoadingOutlined");
function z0(...e) {
  const t = {};
  return e.forEach((n) => {
    n && Object.keys(n).forEach((r) => {
      n[r] !== void 0 && (t[r] = n[r]);
    });
  }), t;
}
const A0 = () => te.useReducer((e) => e + 1, 0), us = /* @__PURE__ */ te.createContext(void 0);
process.env.NODE_ENV !== "production" && (us.displayName = "zIndexContext");
const Xn = 100, L0 = 10, F0 = Xn * L0, V0 = F0 + Xn, Tf = {
  Modal: Xn,
  Drawer: Xn,
  Popover: Xn,
  Popconfirm: Xn,
  Tooltip: Xn,
  Tour: Xn,
  FloatButton: Xn
}, B0 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function H0(e) {
  return e in Tf;
}
const Df = (e, t) => {
  const [, n] = Bn(), r = te.useContext(us), a = H0(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Tf[e] : i += B0[e], o = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = on(e), l = n.zIndexPopupBase + V0, c = o[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function jf(e, t) {
  this.v = e, this.k = t;
}
function sn(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch {
    a = 0;
  }
  sn = function(i, l, c, u) {
    function d(f, v) {
      sn(i, f, function(p) {
        return this._invoke(f, v, p);
      });
    }
    l ? a ? a(i, l, {
      value: c,
      enumerable: !u,
      configurable: !u,
      writable: !u
    }) : i[l] = c : (d("next", 0), d("throw", 1), d("return", 2));
  }, sn(e, t, n, r);
}
function ds() {
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", a = n.toStringTag || "@@toStringTag";
  function o(p, h, g, m) {
    var b = h && h.prototype instanceof l ? h : l, y = Object.create(b.prototype);
    return sn(y, "_invoke", (function($, C, S) {
      var x, w, E, O = 0, P = S || [], M = !1, I = {
        p: 0,
        n: 0,
        v: e,
        a: N,
        f: N.bind(e, 4),
        d: function(F, j) {
          return x = F, w = 0, E = e, I.n = j, i;
        }
      };
      function N(T, F) {
        for (w = T, E = F, t = 0; !M && O && !j && t < P.length; t++) {
          var j, A = P[t], B = I.p, V = A[2];
          T > 3 ? (j = V === F) && (E = A[(w = A[4]) ? 5 : (w = 3, 3)], A[4] = A[5] = e) : A[0] <= B && ((j = T < 2 && B < A[1]) ? (w = 0, I.v = F, I.n = A[1]) : B < V && (j = T < 3 || A[0] > F || F > V) && (A[4] = T, A[5] = F, I.n = V, w = 0));
        }
        if (j || T > 1) return i;
        throw M = !0, F;
      }
      return function(T, F, j) {
        if (O > 1) throw TypeError("Generator is already running");
        for (M && F === 1 && N(F, j), w = F, E = j; (t = w < 2 ? e : E) || !M; ) {
          x || (w ? w < 3 ? (w > 1 && (I.n = -1), N(w, E)) : I.n = E : I.v = E);
          try {
            if (O = 2, x) {
              if (w || (T = "next"), t = x[T]) {
                if (!(t = t.call(x, E))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                E = t.value, w < 2 && (w = 0);
              } else w === 1 && (t = x.return) && t.call(x), w < 2 && (E = TypeError("The iterator does not provide a '" + T + "' method"), w = 1);
              x = e;
            } else if ((t = (M = I.n < 0) ? E : $.call(C, I)) !== i) break;
          } catch (A) {
            x = e, w = 1, E = A;
          } finally {
            O = 1;
          }
        }
        return {
          value: t,
          done: M
        };
      };
    })(p, g, m), !0), y;
  }
  var i = {};
  function l() {
  }
  function c() {
  }
  function u() {
  }
  t = Object.getPrototypeOf;
  var d = [][r] ? t(t([][r]())) : (sn(t = {}, r, function() {
    return this;
  }), t), f = u.prototype = l.prototype = Object.create(d);
  function v(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, u) : (p.__proto__ = u, sn(p, a, "GeneratorFunction")), p.prototype = Object.create(f), p;
  }
  return c.prototype = u, sn(f, "constructor", u), sn(u, "constructor", c), c.displayName = "GeneratorFunction", sn(u, a, "GeneratorFunction"), sn(f), sn(f, a, "Generator"), sn(f, r, function() {
    return this;
  }), sn(f, "toString", function() {
    return "[object Generator]";
  }), (ds = function() {
    return {
      w: o,
      m: v
    };
  })();
}
function Io(e, t) {
  function n(a, o, i, l) {
    try {
      var c = e[a](o), u = c.value;
      return u instanceof jf ? t.resolve(u.v).then(function(d) {
        n("next", d, i, l);
      }, function(d) {
        n("throw", d, i, l);
      }) : t.resolve(u).then(function(d) {
        c.value = d, i(c);
      }, function(d) {
        return n("throw", d, i, l);
      });
    } catch (d) {
      l(d);
    }
  }
  var r;
  this.next || (sn(Io.prototype), sn(Io.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), sn(this, "_invoke", function(a, o, i) {
    function l() {
      return new t(function(c, u) {
        n(a, i, c, u);
      });
    }
    return r = r ? r.then(l, l) : l();
  }, !0);
}
function zf(e, t, n, r, a) {
  return new Io(ds().w(e, t, n, r), a || Promise);
}
function W0(e, t, n, r, a) {
  var o = zf(e, t, n, r, a);
  return o.next().then(function(i) {
    return i.done ? i.value : o.next();
  });
}
function k0(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function a() {
    for (; n.length; ) if ((r = n.pop()) in t) return a.value = r, a.done = !1, a;
    return a.done = !0, a;
  };
}
function Vc(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(ze(e) + " is not iterable");
}
function Dn() {
  var e = ds(), t = e.m(Dn), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var l = typeof i == "function" && i.constructor;
    return !!l && (l === n || (l.displayName || l.name) === "GeneratorFunction");
  }
  var a = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function o(i) {
    var l, c;
    return function(u) {
      l || (l = {
        stop: function() {
          return c(u.a, 2);
        },
        catch: function() {
          return u.v;
        },
        abrupt: function(f, v) {
          return c(u.a, a[f], v);
        },
        delegateYield: function(f, v, p) {
          return l.resultName = v, c(u.d, Vc(f), p);
        },
        finish: function(f) {
          return c(u.f, f);
        }
      }, c = function(f, v, p) {
        u.p = l.prev, u.n = l.next;
        try {
          return f(v, p);
        } finally {
          l.next = u.n;
        }
      }), l.resultName && (l[l.resultName] = u.v, l.resultName = void 0), l.sent = u.v, l.next = u.n;
      try {
        return i.call(this, l);
      } finally {
        u.p = l.prev, u.n = l.next;
      }
    };
  }
  return (Dn = function() {
    return {
      wrap: function(c, u, d, f) {
        return e.w(o(c), u, d, f && f.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, u) {
        return new jf(c, u);
      },
      AsyncIterator: Io,
      async: function(c, u, d, f, v) {
        return (r(u) ? zf : W0)(o(c), u, d, f, v);
      },
      keys: k0,
      values: Vc
    };
  })();
}
function Bc(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), c = l.value;
  } catch (u) {
    return void n(u);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Va(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(c) {
        Bc(o, r, a, i, l, "next", c);
      }
      function l(c) {
        Bc(o, r, a, i, l, "throw", c);
      }
      i(void 0);
    });
  };
}
const qo = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function nr(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const Af = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}), Sr = (e) => {
  const t = te.useContext(Xr);
  return te.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Lf = /* @__PURE__ */ s.createContext(null), G0 = (e, t) => {
  const n = s.useContext(Lf), r = s.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, l = a === "vertical" ? "-vertical-" : "-";
    return U(`${e}-compact${l}item`, {
      [`${e}-compact${l}first-item`]: o,
      [`${e}-compact${l}last-item`]: i,
      [`${e}-compact${l}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
}, K0 = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ s.createElement(Lf.Provider, {
    value: null
  }, t);
};
var q0 = ["b"], U0 = ["v"], Ci = function(t) {
  return Math.round(Number(t || 0));
}, X0 = function(t) {
  if (t instanceof Dt)
    return t;
  if (t && ze(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, a = ut(n, q0);
    return D(D({}, a), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, ur = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n(r) {
    return Xt(this, n), t.call(this, X0(r));
  }
  return Yt(n, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), o = Ci(a.s * 100), i = Ci(a.b * 100), l = Ci(a.h), c = a.a, u = "hsb(".concat(l, ", ").concat(o, "%, ").concat(i, "%)"), d = "hsba(".concat(l, ", ").concat(o, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? u : d;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), o = a.v, i = ut(a, U0);
      return D(D({}, i), {}, {
        b: o,
        a: this.a
      });
    }
  }]), n;
})(Dt), Y0 = "rc-color-picker", Br = function(t) {
  return t instanceof ur ? t : new ur(t);
}, J0 = Br("#1677ff"), Ff = function(t) {
  var n = t.offset, r = t.targetRef, a = t.containerRef, o = t.color, i = t.type, l = a.current.getBoundingClientRect(), c = l.width, u = l.height, d = r.current.getBoundingClientRect(), f = d.width, v = d.height, p = f / 2, h = v / 2, g = (n.x + p) / c, m = 1 - (n.y + h) / u, b = o.toHsb(), y = g, $ = (n.x + p) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Br(D(D({}, b), {}, {
          h: $ <= 0 ? 0 : $
        }));
      case "alpha":
        return Br(D(D({}, b), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return Br({
    h: b.h,
    s: g <= 0 ? 0 : g,
    b: m >= 1 ? 1 : m,
    a: b.a
  });
}, Vf = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, Q0 = function(t) {
  var n = t.color, r = t.prefixCls, a = t.className, o = t.style, i = t.onClick, l = "".concat(r, "-color-block");
  return /* @__PURE__ */ te.createElement("div", {
    className: U(l, a),
    style: o,
    onClick: i
  }, /* @__PURE__ */ te.createElement("div", {
    className: "".concat(l, "-inner"),
    style: {
      background: n
    }
  }));
};
function Z0(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function Bf(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, a = e.onDragChange, o = e.onDragChangeComplete, i = e.calculate, l = e.color, c = e.disabledDrag, u = _t({
    x: 0,
    y: 0
  }), d = H(u, 2), f = d[0], v = d[1], p = Ie(null), h = Ie(null);
  Wt(function() {
    v(i());
  }, [l]), Wt(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", h.current), p.current = null, h.current = null;
    };
  }, []);
  var g = function(C) {
    var S = Z0(C), x = S.pageX, w = S.pageY, E = n.current.getBoundingClientRect(), O = E.x, P = E.y, M = E.width, I = E.height, N = t.current.getBoundingClientRect(), T = N.width, F = N.height, j = T / 2, A = F / 2, B = Math.max(0, Math.min(x - O, M)) - j, V = Math.max(0, Math.min(w - P, I)) - A, L = {
      x: B,
      y: r === "x" ? f.y : V
    };
    if (T === 0 && F === 0 || T !== F)
      return !1;
    a?.(L);
  }, m = function(C) {
    C.preventDefault(), g(C);
  }, b = function(C) {
    C.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", h.current), p.current = null, h.current = null, o?.();
  }, y = function(C) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), !c && (g(C), document.addEventListener("mousemove", m), document.addEventListener("mouseup", b), document.addEventListener("touchmove", m), document.addEventListener("touchend", b), p.current = m, h.current = b);
  };
  return [f, y];
}
var Hf = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, a = t.color, o = t.prefixCls;
  return /* @__PURE__ */ te.createElement("div", {
    className: U("".concat(o, "-handler"), _({}, "".concat(o, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: a
    }
  });
}, Wf = function(t) {
  var n = t.children, r = t.style, a = t.prefixCls;
  return /* @__PURE__ */ te.createElement("div", {
    className: "".concat(a, "-palette"),
    style: D({
      position: "relative"
    }, r)
  }, n);
}, kf = /* @__PURE__ */ Lo(function(e, t) {
  var n = e.children, r = e.x, a = e.y;
  return /* @__PURE__ */ te.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(a, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), eb = function(t) {
  var n = t.color, r = t.onChange, a = t.prefixCls, o = t.onChangeComplete, i = t.disabled, l = Ie(), c = Ie(), u = Ie(n), d = an(function(g) {
    var m = Ff({
      offset: g,
      targetRef: c,
      containerRef: l,
      color: n
    });
    u.current = m, r(m);
  }), f = Bf({
    color: n,
    containerRef: l,
    targetRef: c,
    calculate: function() {
      return Vf(n);
    },
    onDragChange: d,
    onDragChangeComplete: function() {
      return o?.(u.current);
    },
    disabledDrag: i
  }), v = H(f, 2), p = v[0], h = v[1];
  return /* @__PURE__ */ te.createElement("div", {
    ref: l,
    className: "".concat(a, "-select"),
    onMouseDown: h,
    onTouchStart: h
  }, /* @__PURE__ */ te.createElement(Wf, {
    prefixCls: a
  }, /* @__PURE__ */ te.createElement(kf, {
    x: p.x,
    y: p.y,
    ref: c
  }, /* @__PURE__ */ te.createElement(Hf, {
    color: n.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ te.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, tb = function(t, n) {
  var r = mn(t, {
    value: n
  }), a = H(r, 2), o = a[0], i = a[1], l = Mn(function() {
    return Br(o);
  }, [o]);
  return [l, i];
}, nb = function(t) {
  var n = t.colors, r = t.children, a = t.direction, o = a === void 0 ? "to right" : a, i = t.type, l = t.prefixCls, c = Mn(function() {
    return n.map(function(u, d) {
      var f = Br(u);
      return i === "alpha" && d === n.length - 1 && (f = new ur(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ te.createElement("div", {
    className: "".concat(l, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(o, ", ").concat(c, ")")
    }
  }, r);
}, rb = function(t) {
  var n = t.prefixCls, r = t.colors, a = t.disabled, o = t.onChange, i = t.onChangeComplete, l = t.color, c = t.type, u = Ie(), d = Ie(), f = Ie(l), v = function(S) {
    return c === "hue" ? S.getHue() : S.a * 100;
  }, p = an(function(C) {
    var S = Ff({
      offset: C,
      targetRef: d,
      containerRef: u,
      color: l,
      type: c
    });
    f.current = S, o(v(S));
  }), h = Bf({
    color: l,
    targetRef: d,
    containerRef: u,
    calculate: function() {
      return Vf(l, c);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      i(v(f.current));
    },
    direction: "x",
    disabledDrag: a
  }), g = H(h, 2), m = g[0], b = g[1], y = te.useMemo(function() {
    if (c === "hue") {
      var C = l.toHsb();
      C.s = 1, C.b = 1, C.a = 1;
      var S = new ur(C);
      return S;
    }
    return l;
  }, [l, c]), $ = te.useMemo(function() {
    return r.map(function(C) {
      return "".concat(C.color, " ").concat(C.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ te.createElement("div", {
    ref: u,
    className: U("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ te.createElement(Wf, {
    prefixCls: n
  }, /* @__PURE__ */ te.createElement(kf, {
    x: m.x,
    y: m.y,
    ref: d
  }, /* @__PURE__ */ te.createElement(Hf, {
    size: "small",
    color: y.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ te.createElement(nb, {
    colors: $,
    type: c,
    prefixCls: n
  })));
};
function ab(e) {
  return s.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || rb];
  }, [e]);
}
var ob = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], ib = /* @__PURE__ */ Lo(function(e, t) {
  var n = e.value, r = e.defaultValue, a = e.prefixCls, o = a === void 0 ? Y0 : a, i = e.onChange, l = e.onChangeComplete, c = e.className, u = e.style, d = e.panelRender, f = e.disabledAlpha, v = f === void 0 ? !1 : f, p = e.disabled, h = p === void 0 ? !1 : p, g = e.components, m = ab(g), b = H(m, 1), y = b[0], $ = tb(r || J0, n), C = H($, 2), S = C[0], x = C[1], w = Mn(function() {
    return S.setA(1).toRgbString();
  }, [S]), E = function(V, L) {
    n || x(V), i?.(V, L);
  }, O = function(V) {
    return new ur(S.setHue(V));
  }, P = function(V) {
    return new ur(S.setA(V / 100));
  }, M = function(V) {
    E(O(V), {
      type: "hue",
      value: V
    });
  }, I = function(V) {
    E(P(V), {
      type: "alpha",
      value: V
    });
  }, N = function(V) {
    l && l(O(V));
  }, T = function(V) {
    l && l(P(V));
  }, F = U("".concat(o, "-panel"), c, _({}, "".concat(o, "-panel-disabled"), h)), j = {
    prefixCls: o,
    disabled: h,
    color: S
  }, A = /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(eb, ye({
    onChange: E
  }, j, {
    onChangeComplete: l
  })), /* @__PURE__ */ te.createElement("div", {
    className: "".concat(o, "-slider-container")
  }, /* @__PURE__ */ te.createElement("div", {
    className: U("".concat(o, "-slider-group"), _({}, "".concat(o, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ te.createElement(y, ye({}, j, {
    type: "hue",
    colors: ob,
    min: 0,
    max: 359,
    value: S.getHue(),
    onChange: M,
    onChangeComplete: N
  })), !v && /* @__PURE__ */ te.createElement(y, ye({}, j, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: w
    }],
    min: 0,
    max: 100,
    value: S.a * 100,
    onChange: I,
    onChangeComplete: T
  }))), /* @__PURE__ */ te.createElement(Q0, {
    color: S.toRgbString(),
    prefixCls: o
  })));
  return /* @__PURE__ */ te.createElement("div", {
    className: F,
    style: u,
    ref: t
  }, typeof d == "function" ? d(A) : A);
});
process.env.NODE_ENV !== "production" && (ib.displayName = "ColorPicker");
const lb = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", sb = (e, t) => e ? lb(e, t) : "";
let Hc = /* @__PURE__ */ (function() {
  function e(t) {
    Xt(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((a) => ({
        color: new e(a.color),
        percent: a.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map(({
      color: a,
      percent: o
    }) => ({
      color: new e(a),
      percent: o
    })), this.metaColor = new ur(this.colors[0].color.metaColor)) : this.metaColor = new ur(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Yt(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return sb(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((a) => `${a.color.toRgbString()} ${a.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, a) => {
        const o = n.colors[a];
        return r.percent === o.percent && r.color.equals(o.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
})();
var cb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, ub = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: cb
  }));
}, yl = /* @__PURE__ */ s.forwardRef(ub);
process.env.NODE_ENV !== "production" && (yl.displayName = "RightOutlined");
const db = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), fb = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), fs = (e, t, n, r, a = !1) => {
  const o = a ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, db(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, fb(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, vb = new Ot("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), mb = new Ot("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), gb = new Ot("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), pb = new Ot("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), hb = new Ot("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), bb = new Ot("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), yb = new Ot("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Sb = new Ot("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Cb = {
  "move-up": {
    inKeyframes: yb,
    outKeyframes: Sb
  },
  "move-down": {
    inKeyframes: vb,
    outKeyframes: mb
  },
  "move-left": {
    inKeyframes: gb,
    outKeyframes: pb
  },
  "move-right": {
    inKeyframes: hb,
    outKeyframes: bb
  }
}, Wc = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Cb[t];
  return [fs(r, a, o, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Gf = new Ot("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Kf = new Ot("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), qf = new Ot("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Uf = new Ot("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), $b = new Ot("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), xb = new Ot("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), wb = new Ot("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), Eb = new Ot("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), Ob = {
  "slide-up": {
    inKeyframes: Gf,
    outKeyframes: Kf
  },
  "slide-down": {
    inKeyframes: qf,
    outKeyframes: Uf
  },
  "slide-left": {
    inKeyframes: $b,
    outKeyframes: xb
  },
  "slide-right": {
    inKeyframes: wb,
    outKeyframes: Eb
  }
}, No = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Ob[t];
  return [fs(r, a, o, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, Pb = new Ot("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Rb = new Ot("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), kc = new Ot("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Gc = new Ot("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Ib = new Ot("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Nb = new Ot("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), _b = new Ot("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Mb = new Ot("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Tb = new Ot("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Db = new Ot("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), jb = new Ot("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), zb = new Ot("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Ab = {
  zoom: {
    inKeyframes: Pb,
    outKeyframes: Rb
  },
  "zoom-big": {
    inKeyframes: kc,
    outKeyframes: Gc
  },
  "zoom-big-fast": {
    inKeyframes: kc,
    outKeyframes: Gc
  },
  "zoom-left": {
    inKeyframes: _b,
    outKeyframes: Mb
  },
  "zoom-right": {
    inKeyframes: Tb,
    outKeyframes: Db
  },
  "zoom-up": {
    inKeyframes: Ib,
    outKeyframes: Nb
  },
  "zoom-down": {
    inKeyframes: jb,
    outKeyframes: zb
  }
}, Xf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Ab[t];
  return [fs(r, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Lb = (e) => e instanceof Hc ? e : new Hc(e);
function Fb(e, t, n, r) {
  const {
    focusElCls: a,
    focus: o,
    borderElCls: i
  } = n, l = i ? "> *" : "", c = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((u) => `&:${u} ${l}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
        zIndex: 3
      }
    }, a ? {
      [`&${a}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${l}`]: {
        zIndex: 0
      }
    })
  };
}
function Vb(e, t, n) {
  const {
    borderElCls: r
  } = n, a = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Yf(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Fb(e, r, t, n)), Vb(n, r, t))
  };
}
var Jf = /* @__PURE__ */ s.createContext(null), Kc = [];
function Bb(e, t) {
  var n = s.useState(function() {
    if (!vn())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), r = H(n, 1), a = r[0], o = s.useRef(!1), i = s.useContext(Jf), l = s.useState(Kc), c = H(l, 2), u = c[0], d = c[1], f = i || (o.current ? void 0 : function(h) {
    d(function(g) {
      var m = [h].concat(Se(g));
      return m;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function p() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), o.current = !1;
  }
  return Vt(function() {
    return e ? i ? i(v) : v() : p(), p;
  }, [e]), Vt(function() {
    u.length && (u.forEach(function(h) {
      return h();
    }), d(Kc));
  }, [u]), [a, f];
}
function Hb(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var l = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(l.width, 10), u = parseInt(l.height, 10);
    try {
      var d = c ? "width: ".concat(l.width, ";") : "", f = u ? "height: ".concat(l.height, ";") : "";
      Jn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (h) {
      console.error(h), a = c, o = u;
    }
  }
  document.body.appendChild(n);
  var v = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, p = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), $a(t), {
    width: v,
    height: p
  };
}
function Wb(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : Hb(e);
}
function kb() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Gb = "rc-util-locker-".concat(Date.now()), qc = 0;
function Kb(e) {
  var t = !!e, n = s.useState(function() {
    return qc += 1, "".concat(Gb, "_").concat(qc);
  }), r = H(n, 1), a = r[0];
  Vt(function() {
    if (t) {
      var o = Wb(document.body).width, i = kb();
      Jn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      $a(a);
    return function() {
      $a(a);
    };
  }, [t, a]);
}
var qb = !1;
function Ub(e) {
  return qb;
}
var Uc = function(t) {
  return t === !1 ? !1 : !vn() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, vs = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, l = i === void 0 ? !0 : i, c = e.children, u = s.useState(n), d = H(u, 2), f = d[0], v = d[1], p = f || n;
  process.env.NODE_ENV !== "production" && tt(vn() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), s.useEffect(function() {
    (l || n) && v(n);
  }, [n, l]);
  var h = s.useState(function() {
    return Uc(a);
  }), g = H(h, 2), m = g[0], b = g[1];
  s.useEffect(function() {
    var I = Uc(a);
    b(I ?? null);
  });
  var y = Bb(p && !m, o), $ = H(y, 2), C = $[0], S = $[1], x = m ?? C;
  Kb(r && n && vn() && (x === C || x === document.body));
  var w = null;
  if (c && Zr(c) && t) {
    var E = c;
    w = E.ref;
  }
  var O = Qr(w, t);
  if (!p || !vn() || m === void 0)
    return null;
  var P = x === !1 || Ub(), M = c;
  return t && (M = /* @__PURE__ */ s.cloneElement(c, {
    ref: O
  })), /* @__PURE__ */ s.createElement(Jf.Provider, {
    value: S
  }, P ? M : /* @__PURE__ */ Dm(M, x));
});
process.env.NODE_ENV !== "production" && (vs.displayName = "Portal");
function Xb() {
  var e = D({}, s);
  return e.useId;
}
var Xc = 0, Yc = Xb();
const Qf = Yc ? (
  // Use React `useId`
  function(t) {
    var n = Yc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = s.useState("ssr-id"), r = H(n, 2), a = r[0], o = r[1];
    return s.useEffect(function() {
      var i = Xc;
      Xc += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var gr = "RC_FORM_INTERNAL_HOOKS", Tt = function() {
  tt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Yr = /* @__PURE__ */ s.createContext({
  getFieldValue: Tt,
  getFieldsValue: Tt,
  getFieldError: Tt,
  getFieldWarning: Tt,
  getFieldsError: Tt,
  isFieldsTouched: Tt,
  isFieldTouched: Tt,
  isFieldValidating: Tt,
  isFieldsValidating: Tt,
  resetFields: Tt,
  setFields: Tt,
  setFieldValue: Tt,
  setFieldsValue: Tt,
  validateFields: Tt,
  submit: Tt,
  getInternalHooks: function() {
    return Tt(), {
      dispatch: Tt,
      initEntityValue: Tt,
      registerField: Tt,
      useSubscribe: Tt,
      setInitialValues: Tt,
      destroyForm: Tt,
      setCallbacks: Tt,
      registerWatch: Tt,
      getFields: Tt,
      setValidateMessages: Tt,
      setPreserve: Tt,
      getInitialValue: Tt
    };
  }
}), _o = /* @__PURE__ */ s.createContext(null);
function Sl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Yb(e) {
  return e && !!e._init;
}
function Cl() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var $l = Cl();
function Jb(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Qb(e, t, n) {
  if (Jl()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && ya(a, n.prototype), a;
}
function xl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return xl = function(r) {
    if (r === null || !Jb(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Qb(r, arguments, Sa(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ya(a, r);
  }, xl(e);
}
var Zb = /%[sdj%]/g, Zf = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Zf = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function wl(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function wn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(Zb, function(l) {
      if (l === "%%")
        return "%";
      if (a >= o)
        return l;
      switch (l) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return i;
  }
  return e;
}
function ey(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Zt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || ey(t) && typeof e == "string" && !e);
}
function ty(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(l) {
    r.push.apply(r, Se(l || [])), a++, a === o && n(r);
  }
  e.forEach(function(l) {
    t(l, i);
  });
}
function Jc(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var l = r;
    r = r + 1, l < a ? t(e[l], o) : n([]);
  }
  o([]);
}
function ny(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, Se(e[n] || []));
  }), t;
}
var Qc = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n(r, a) {
    var o;
    return Xt(this, n), o = t.call(this, "Async Validation Error"), _(mt(o), "errors", void 0), _(mt(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return Yt(n);
})(/* @__PURE__ */ xl(Error));
function ry(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(v, p) {
      var h = function(b) {
        return r(b), b.length ? p(new Qc(b, wl(b))) : v(a);
      }, g = ny(e);
      Jc(g, n, h);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), c = l.length, u = 0, d = [], f = new Promise(function(v, p) {
    var h = function(m) {
      if (d.push.apply(d, m), u++, u === c)
        return r(d), d.length ? p(new Qc(d, wl(d))) : v(a);
    };
    l.length || (r(d), v(a)), l.forEach(function(g) {
      var m = e[g];
      i.indexOf(g) !== -1 ? Jc(m, n, h) : ty(m, n, h);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function ay(e) {
  return !!(e && e.message !== void 0);
}
function oy(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Zc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = oy(t, e.fullFields) : r = t[n.field || e.fullField], ay(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function eu(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        ze(r) === "object" && ze(e[n]) === "object" ? e[n] = D(D({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var Er = "enum", iy = function(t, n, r, a, o) {
  t[Er] = Array.isArray(t[Er]) ? t[Er] : [], t[Er].indexOf(n) === -1 && a.push(wn(o.messages[Er], t.fullField, t[Er].join(", ")));
}, ly = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(wn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(wn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, sy = function(t, n, r, a, o) {
  var i = typeof t.len == "number", l = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, v = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (v ? f = "number" : p ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (d = n.length), p && (d = n.replace(u, "_").length), i ? d !== t.len && a.push(wn(o.messages[f].len, t.fullField, t.len)) : l && !c && d < t.min ? a.push(wn(o.messages[f].min, t.fullField, t.min)) : c && !l && d > t.max ? a.push(wn(o.messages[f].max, t.fullField, t.max)) : l && c && (d < t.min || d > t.max) && a.push(wn(o.messages[f].range, t.fullField, t.min, t.max));
}, ev = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || Zt(n, i || t.type)) && a.push(wn(o.messages.required, t.fullField));
}, io;
const cy = (function() {
  if (io)
    return io;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), l = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(n, "$")), u = new RegExp("^".concat(i, "$")), d = function(x) {
    return x && x.exact ? l : new RegExp("(?:".concat(t(x)).concat(n).concat(t(x), ")|(?:").concat(t(x)).concat(i).concat(t(x), ")"), "g");
  };
  d.v4 = function(S) {
    return S && S.exact ? c : new RegExp("".concat(t(S)).concat(n).concat(t(S)), "g");
  }, d.v6 = function(S) {
    return S && S.exact ? u : new RegExp("".concat(t(S)).concat(i).concat(t(S)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", p = d.v4().source, h = d.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", $ = '(?:[/?#][^\\s"]*)?', C = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(p, "|").concat(h, "|").concat(g).concat(m).concat(b, ")").concat(y).concat($);
  return io = new RegExp("(?:^".concat(C, "$)"), "i"), io;
});
var tu = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, fa = {
  integer: function(t) {
    return fa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return fa.number(t) && !fa.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return ze(t) === "object" && !fa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(tu.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(cy());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(tu.hex);
  }
}, uy = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    ev(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  i.indexOf(l) > -1 ? fa[l](n) || a.push(wn(o.messages.types[l], t.fullField, t.type)) : l && ze(n) !== t.type && a.push(wn(o.messages.types[l], t.fullField, t.type));
}, dy = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(wn(o.messages.whitespace, t.fullField));
};
const bt = {
  required: ev,
  whitespace: dy,
  type: uy,
  range: sy,
  enum: iy,
  pattern: ly
};
var fy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o);
  }
  r(i);
}, vy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    bt.required(t, n, a, i, o, "array"), n != null && (bt.type(t, n, a, i, o), bt.range(t, n, a, i, o));
  }
  r(i);
}, my = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && bt.type(t, n, a, i, o);
  }
  r(i);
}, gy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n, "date") && !t.required)
      return r();
    if (bt.required(t, n, a, i, o), !Zt(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), bt.type(t, c, a, i, o), c && bt.range(t, c.getTime(), a, i, o);
    }
  }
  r(i);
}, py = "enum", hy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && bt[py](t, n, a, i, o);
  }
  r(i);
}, by = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && (bt.type(t, n, a, i, o), bt.range(t, n, a, i, o));
  }
  r(i);
}, yy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && (bt.type(t, n, a, i, o), bt.range(t, n, a, i, o));
  }
  r(i);
}, Sy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && bt.type(t, n, a, i, o);
  }
  r(i);
}, Cy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && (bt.type(t, n, a, i, o), bt.range(t, n, a, i, o));
  }
  r(i);
}, $y = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), n !== void 0 && bt.type(t, n, a, i, o);
  }
  r(i);
}, xy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n, "string") && !t.required)
      return r();
    bt.required(t, n, a, i, o), Zt(n, "string") || bt.pattern(t, n, a, i, o);
  }
  r(i);
}, wy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n) && !t.required)
      return r();
    bt.required(t, n, a, i, o), Zt(n) || bt.type(t, n, a, i, o);
  }
  r(i);
}, Ey = function(t, n, r, a, o) {
  var i = [], l = Array.isArray(n) ? "array" : ze(n);
  bt.required(t, n, a, i, o, l), r(i);
}, Oy = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Zt(n, "string") && !t.required)
      return r();
    bt.required(t, n, a, i, o, "string"), Zt(n, "string") || (bt.type(t, n, a, i, o), bt.range(t, n, a, i, o), bt.pattern(t, n, a, i, o), t.whitespace === !0 && bt.whitespace(t, n, a, i, o));
  }
  r(i);
}, $i = function(t, n, r, a, o) {
  var i = t.type, l = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (Zt(n, i) && !t.required)
      return r();
    bt.required(t, n, a, l, o, i), Zt(n, i) || bt.type(t, n, a, l, o);
  }
  r(l);
};
const pa = {
  string: Oy,
  method: Sy,
  number: Cy,
  boolean: my,
  regexp: wy,
  integer: yy,
  float: by,
  array: vy,
  object: $y,
  enum: hy,
  pattern: xy,
  date: gy,
  url: $i,
  hex: $i,
  email: $i,
  required: Ey,
  any: fy
};
var Ba = /* @__PURE__ */ (function() {
  function e(t) {
    Xt(this, e), _(this, "rules", null), _(this, "_messages", $l), this.define(t);
  }
  return Yt(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (ze(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(a) {
        var o = n[a];
        r.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = eu(Cl(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, l = a, c = o;
      if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function u(h) {
        var g = [], m = {};
        function b($) {
          if (Array.isArray($)) {
            var C;
            g = (C = g).concat.apply(C, Se($));
          } else
            g.push($);
        }
        for (var y = 0; y < h.length; y++)
          b(h[y]);
        g.length ? (m = wl(g), c(g, m)) : c(null, i);
      }
      if (l.messages) {
        var d = this.messages();
        d === $l && (d = Cl()), eu(d, l.messages), l.messages = d;
      } else
        l.messages = this.messages();
      var f = {}, v = l.keys || Object.keys(this.rules);
      v.forEach(function(h) {
        var g = r.rules[h], m = i[h];
        g.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (i === n && (i = D({}, i)), m = i[h] = y.transform(m), m != null && (y.type = y.type || (Array.isArray(m) ? "array" : ze(m)))), typeof y == "function" ? y = {
            validator: y
          } : y = D({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = h, y.fullField = y.fullField || h, y.type = r.getType(y), f[h] = f[h] || [], f[h].push({
            rule: y,
            value: m,
            source: i,
            field: h
          }));
        });
      });
      var p = {};
      return ry(f, l, function(h, g) {
        var m = h.rule, b = (m.type === "object" || m.type === "array") && (ze(m.fields) === "object" || ze(m.defaultField) === "object");
        b = b && (m.required || !m.required && h.value), m.field = h.field;
        function y(w, E) {
          return D(D({}, E), {}, {
            fullField: "".concat(m.fullField, ".").concat(w),
            fullFields: m.fullFields ? [].concat(Se(m.fullFields), [w]) : [w]
          });
        }
        function $() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], E = Array.isArray(w) ? w : [w];
          !l.suppressWarning && E.length && e.warning("async-validator:", E), E.length && m.message !== void 0 && (E = [].concat(m.message));
          var O = E.map(Zc(m, i));
          if (l.first && O.length)
            return p[m.field] = 1, g(O);
          if (!b)
            g(O);
          else {
            if (m.required && !h.value)
              return m.message !== void 0 ? O = [].concat(m.message).map(Zc(m, i)) : l.error && (O = [l.error(m, wn(l.messages.required, m.field))]), g(O);
            var P = {};
            m.defaultField && Object.keys(h.value).map(function(N) {
              P[N] = m.defaultField;
            }), P = D(D({}, P), h.rule.fields);
            var M = {};
            Object.keys(P).forEach(function(N) {
              var T = P[N], F = Array.isArray(T) ? T : [T];
              M[N] = F.map(y.bind(null, N));
            });
            var I = new e(M);
            I.messages(l.messages), h.rule.options && (h.rule.options.messages = l.messages, h.rule.options.error = l.error), I.validate(h.value, h.rule.options || l, function(N) {
              var T = [];
              O && O.length && T.push.apply(T, Se(O)), N && N.length && T.push.apply(T, Se(N)), g(T.length ? T : null);
            });
          }
        }
        var C;
        if (m.asyncValidator)
          C = m.asyncValidator(m, h.value, $, h.source, l);
        else if (m.validator) {
          try {
            C = m.validator(m, h.value, $, h.source, l);
          } catch (w) {
            var S, x;
            (S = (x = console).error) === null || S === void 0 || S.call(x, w), l.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), $(w.message);
          }
          C === !0 ? $() : C === !1 ? $(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : C instanceof Array ? $(C) : C instanceof Error && $(C.message);
        }
        C && C.then && C.then(function() {
          return $();
        }, function(w) {
          return $(w);
        });
      }, function(h) {
        u(h);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !pa.hasOwnProperty(n.type))
        throw new Error(wn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), a = r.indexOf("message");
      return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? pa.required : pa[this.getType(n)] || void 0;
    }
  }]), e;
})();
_(Ba, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  pa[t] = n;
});
_(Ba, "warning", Zf);
_(Ba, "messages", $l);
_(Ba, "validators", pa);
var xn = "'${name}' is not a valid ${type}", tv = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: xn,
    method: xn,
    array: xn,
    object: xn,
    number: xn,
    date: xn,
    boolean: xn,
    integer: xn,
    float: xn,
    regexp: xn,
    email: xn,
    url: xn,
    hex: xn
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, nu = Ba;
function Py(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var ru = "CODE_LOGIC_ERROR";
function El(e, t, n, r, a) {
  return Ol.apply(this, arguments);
}
function Ol() {
  return Ol = Va(/* @__PURE__ */ Dn().mark(function e(t, n, r, a, o) {
    var i, l, c, u, d, f, v, p, h;
    return Dn().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = D({}, r), delete i.ruleIndex, nu.warning = function() {
          }, i.validator && (l = i.validator, i.validator = function() {
            try {
              return l.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(ru);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), u = new nu(_({}, t, [i])), d = zr(tv, a.validateMessages), u.messages(d), f = [], m.prev = 10, m.next = 13, Promise.resolve(u.validate(_({}, t, n), D({}, a)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (f = m.t0.errors.map(function(b, y) {
            var $ = b.message, C = $ === ru ? d.default : $;
            return /* @__PURE__ */ s.isValidElement(C) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ s.cloneElement(C, {
                key: "error_".concat(y)
              })
            ) : C;
          }));
        case 18:
          if (!(!f.length && c && Array.isArray(n) && n.length > 0)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(n.map(function(b, y) {
            return El("".concat(t, ".").concat(y), b, c, a, o);
          }));
        case 21:
          return v = m.sent, m.abrupt("return", v.reduce(function(b, y) {
            return [].concat(Se(b), Se(y));
          }, []));
        case 23:
          return p = D(D({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, o), h = f.map(function(b) {
            return typeof b == "string" ? Py(b, p) : b;
          }), m.abrupt("return", h);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), Ol.apply(this, arguments);
}
function Ry(e, t, n, r, a, o) {
  var i = e.join("."), l = n.map(function(d, f) {
    var v = d.validator, p = D(D({}, d), {}, {
      ruleIndex: f
    });
    return v && (p.validator = function(h, g, m) {
      var b = !1, y = function() {
        for (var S = arguments.length, x = new Array(S), w = 0; w < S; w++)
          x[w] = arguments[w];
        Promise.resolve().then(function() {
          tt(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || m.apply(void 0, x);
        });
      }, $ = v(h, g, y);
      b = $ && typeof $.then == "function" && typeof $.catch == "function", tt(b, "`callback` is deprecated. Please return a promise instead."), b && $.then(function() {
        m();
      }).catch(function(C) {
        m(C || " ");
      });
    }), p;
  }).sort(function(d, f) {
    var v = d.warningOnly, p = d.ruleIndex, h = f.warningOnly, g = f.ruleIndex;
    return !!v == !!h ? p - g : v ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ (function() {
      var d = Va(/* @__PURE__ */ Dn().mark(function f(v, p) {
        var h, g, m;
        return Dn().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              h = 0;
            case 1:
              if (!(h < l.length)) {
                y.next = 12;
                break;
              }
              return g = l[h], y.next = 5, El(i, t, g, r, o);
            case 5:
              if (m = y.sent, !m.length) {
                y.next = 9;
                break;
              }
              return p([{
                errors: m,
                rule: g
              }]), y.abrupt("return");
            case 9:
              h += 1, y.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    })());
  else {
    var u = l.map(function(d) {
      return El(i, t, d, r, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    c = (a ? Ny(u) : Iy(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return c.catch(function(d) {
    return d;
  }), c;
}
function Iy(e) {
  return Pl.apply(this, arguments);
}
function Pl() {
  return Pl = Va(/* @__PURE__ */ Dn().mark(function e(t) {
    return Dn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, Se(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Pl.apply(this, arguments);
}
function Ny(e) {
  return Rl.apply(this, arguments);
}
function Rl() {
  return Rl = Va(/* @__PURE__ */ Dn().mark(function e(t) {
    var n;
    return Dn().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return n = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(l) {
                l.errors.length && o([l]), n += 1, n === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), Rl.apply(this, arguments);
}
function qt(e) {
  return Sl(e);
}
function au(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = kn(e, r);
    n = jn(n, r, a);
  }), n;
}
function Hr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return nv(t, r, n);
  });
}
function nv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function _y(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ze(e) !== "object" || ze(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return Se(a).every(function(o) {
    var i = e[o], l = t[o];
    return typeof i == "function" && typeof l == "function" ? !0 : i === l;
  });
}
function My(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ze(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function ou(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(Se(e.slice(0, n)), [a], Se(e.slice(n, t)), Se(e.slice(t + 1, r))) : o < 0 ? [].concat(Se(e.slice(0, t)), Se(e.slice(t + 1, n + 1)), [a], Se(e.slice(n + 1, r))) : e;
}
var Ty = ["name"], Rn = [];
function xi(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var ms = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n(r) {
    var a;
    if (Xt(this, n), a = t.call(this, r), _(mt(a), "state", {
      resetCount: 0
    }), _(mt(a), "cancelRegisterFunc", null), _(mt(a), "mounted", !1), _(mt(a), "touched", !1), _(mt(a), "dirty", !1), _(mt(a), "validatePromise", void 0), _(mt(a), "prevValidating", void 0), _(mt(a), "errors", Rn), _(mt(a), "warnings", Rn), _(mt(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, d = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, u, qt(f)), a.cancelRegisterFunc = null;
    }), _(mt(a), "getNamePath", function() {
      var c = a.props, u = c.name, d = c.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(Se(v), Se(u)) : [];
    }), _(mt(a), "getRules", function() {
      var c = a.props, u = c.rules, d = u === void 0 ? [] : u, f = c.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), _(mt(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), _(mt(a), "metaCache", null), _(mt(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var d = D(D({}, a.getMeta()), {}, {
          destroy: c
        });
        xa(a.metaCache, d) || u(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), _(mt(a), "onStoreChange", function(c, u, d) {
      var f = a.props, v = f.shouldUpdate, p = f.dependencies, h = p === void 0 ? [] : p, g = f.onReset, m = d.store, b = a.getNamePath(), y = a.getValue(c), $ = a.getValue(m), C = u && Hr(u, b);
      switch (d.type === "valueUpdate" && d.source === "external" && !xa(y, $) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Rn, a.warnings = Rn, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || C) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Rn, a.warnings = Rn, a.triggerMetaEvent(), g?.(), a.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (v && xi(v, c, m, y, $, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var S = d.data;
          if (C) {
            "touched" in S && (a.touched = S.touched), "validating" in S && !("originRCField" in S) && (a.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (a.errors = S.errors || Rn), "warnings" in S && (a.warnings = S.warnings || Rn), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in S && Hr(u, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && xi(v, c, m, y, $, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = h.map(qt);
          if (x.some(function(w) {
            return Hr(d.relatedFields, w);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (C || (!h.length || b.length || v) && xi(v, c, m, y, $, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), _(mt(a), "validateRules", function(c) {
      var u = a.getNamePath(), d = a.getValue(), f = c || {}, v = f.triggerName, p = f.validateOnly, h = p === void 0 ? !1 : p, g = Promise.resolve().then(/* @__PURE__ */ Va(/* @__PURE__ */ Dn().mark(function m() {
        var b, y, $, C, S, x, w;
        return Dn().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (a.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (b = a.props, y = b.validateFirst, $ = y === void 0 ? !1 : y, C = b.messageVariables, S = b.validateDebounce, x = a.getRules(), v && (x = x.filter(function(P) {
                return P;
              }).filter(function(P) {
                var M = P.validateTrigger;
                if (!M)
                  return !0;
                var I = Sl(M);
                return I.includes(v);
              })), !(S && v)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(P) {
                setTimeout(P, S);
              });
            case 8:
              if (a.validatePromise === g) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return w = Ry(u, d, x, c, $, C), w.catch(function(P) {
                return P;
              }).then(function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rn;
                if (a.validatePromise === g) {
                  var M;
                  a.validatePromise = null;
                  var I = [], N = [];
                  (M = P.forEach) === null || M === void 0 || M.call(P, function(T) {
                    var F = T.rule.warningOnly, j = T.errors, A = j === void 0 ? Rn : j;
                    F ? N.push.apply(N, Se(A)) : I.push.apply(I, Se(A));
                  }), a.errors = I, a.warnings = N, a.triggerMetaEvent(), a.reRender();
                }
              }), O.abrupt("return", w);
            case 13:
            case "end":
              return O.stop();
          }
        }, m);
      })));
      return h || (a.validatePromise = g, a.dirty = !0, a.errors = Rn, a.warnings = Rn, a.triggerMetaEvent(), a.reRender()), g;
    }), _(mt(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), _(mt(a), "isFieldTouched", function() {
      return a.touched;
    }), _(mt(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, u = c.getInternalHooks(gr), d = u.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), _(mt(a), "getErrors", function() {
      return a.errors;
    }), _(mt(a), "getWarnings", function() {
      return a.warnings;
    }), _(mt(a), "isListField", function() {
      return a.props.isListField;
    }), _(mt(a), "isList", function() {
      return a.props.isList;
    }), _(mt(a), "isPreserve", function() {
      return a.props.preserve;
    }), _(mt(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return c;
    }), _(mt(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return D(D({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Fn(c);
      return d.length !== 1 || !/* @__PURE__ */ s.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), _(mt(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return kn(c || u(!0), d);
    }), _(mt(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, d = u.name, f = u.trigger, v = u.validateTrigger, p = u.getValueFromEvent, h = u.normalize, g = u.valuePropName, m = u.getValueProps, b = u.fieldContext, y = v !== void 0 ? v : b.validateTrigger, $ = a.getNamePath(), C = b.getInternalHooks, S = b.getFieldsValue, x = C(gr), w = x.dispatch, E = a.getValue(), O = m || function(T) {
        return _({}, g, T);
      }, P = c[f], M = d !== void 0 ? O(E) : {};
      process.env.NODE_ENV !== "production" && M && Object.keys(M).forEach(function(T) {
        tt(typeof M[T] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(T, ")"));
      });
      var I = D(D({}, c), M);
      I[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, F = arguments.length, j = new Array(F), A = 0; A < F; A++)
          j[A] = arguments[A];
        p ? T = p.apply(void 0, j) : T = My.apply(void 0, [g].concat(j)), h && (T = h(T, E, S(!0))), T !== E && w({
          type: "updateValue",
          namePath: $,
          value: T
        }), P && P.apply(void 0, j);
      };
      var N = Sl(y || []);
      return N.forEach(function(T) {
        var F = I[T];
        I[T] = function() {
          F && F.apply(void 0, arguments);
          var j = a.props.rules;
          j && j.length && w({
            type: "validateField",
            namePath: $,
            triggerName: T
          });
        };
      }), I;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(gr), l = i.initEntityValue;
      l(mt(a));
    }
    return a;
  }
  return Yt(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var l = i.getInternalHooks, c = l(gr), u = c.registerField;
        this.cancelRegisterFunc = u(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), l = i.child, c = i.isFunction, u;
      return c ? u = l : /* @__PURE__ */ s.isValidElement(l) ? u = /* @__PURE__ */ s.cloneElement(l, this.getControlled(l.props)) : (tt(!l, "`children` of Field is not validate ReactElement."), u = l), /* @__PURE__ */ s.createElement(s.Fragment, {
        key: a
      }, u);
    }
  }]), n;
})(s.Component);
_(ms, "contextType", Yr);
_(ms, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function rv(e) {
  var t, n = e.name, r = ut(e, Ty), a = s.useContext(Yr), o = s.useContext(_o), i = n !== void 0 ? qt(n) : void 0, l = (t = r.isListField) !== null && t !== void 0 ? t : !!o, c = "keep";
  return l || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && l && i.length <= 1 && tt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ s.createElement(ms, ye({
    key: c,
    name: i,
    isListField: l
  }, r, {
    fieldContext: a
  }));
}
function Dy(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, l = s.useContext(Yr), c = s.useContext(_o), u = s.useRef({
    keys: [],
    id: 0
  }), d = u.current, f = s.useMemo(function() {
    var g = qt(l.prefixName) || [];
    return [].concat(Se(g), Se(qt(t)));
  }, [l.prefixName, t]), v = s.useMemo(function() {
    return D(D({}, l), {}, {
      prefixName: f
    });
  }, [l, f]), p = s.useMemo(function() {
    return {
      getKey: function(m) {
        var b = f.length, y = m[b];
        return [d.keys[y], m.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return tt(!1, "Form.List only accepts function as children."), null;
  var h = function(m, b, y) {
    var $ = y.source;
    return $ === "internal" ? !1 : m !== b;
  };
  return /* @__PURE__ */ s.createElement(_o.Provider, {
    value: p
  }, /* @__PURE__ */ s.createElement(Yr.Provider, {
    value: v
  }, /* @__PURE__ */ s.createElement(rv, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(g, m) {
    var b = g.value, y = b === void 0 ? [] : b, $ = g.onChange, C = l.getFieldValue, S = function() {
      var O = C(f || []);
      return O || [];
    }, x = {
      add: function(O, P) {
        var M = S();
        P >= 0 && P <= M.length ? (d.keys = [].concat(Se(d.keys.slice(0, P)), [d.id], Se(d.keys.slice(P))), $([].concat(Se(M.slice(0, P)), [O], Se(M.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > M.length) && tt(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(Se(d.keys), [d.id]), $([].concat(Se(M), [O]))), d.id += 1;
      },
      remove: function(O) {
        var P = S(), M = new Set(Array.isArray(O) ? O : [O]);
        M.size <= 0 || (d.keys = d.keys.filter(function(I, N) {
          return !M.has(N);
        }), $(P.filter(function(I, N) {
          return !M.has(N);
        })));
      },
      move: function(O, P) {
        if (O !== P) {
          var M = S();
          O < 0 || O >= M.length || P < 0 || P >= M.length || (d.keys = ou(d.keys, O, P), $(ou(M, O, P)));
        }
      }
    }, w = y || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && tt(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(w.map(function(E, O) {
      var P = d.keys[O];
      return P === void 0 && (d.keys[O] = d.id, P = d.keys[O], d.id += 1), {
        name: O,
        key: P,
        isListField: !0
      };
    }), x, m);
  })));
}
function jy(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, l) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[l] = c, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var av = "__@field_split__";
function wi(e) {
  return e.map(function(t) {
    return "".concat(ze(t), ":").concat(t);
  }).join(av);
}
var Or = /* @__PURE__ */ (function() {
  function e() {
    Xt(this, e), _(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Yt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(wi(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(wi(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), o = r(a);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(wi(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return Se(this.kvs.entries()).map(function(r) {
        var a = H(r, 2), o = a[0], i = a[1], l = o.split(av);
        return n({
          key: l.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), d = H(u, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, o = r.value;
        return n[a.join(".")] = o, null;
      }), n;
    }
  }]), e;
})(), zy = ["name"], Ay = /* @__PURE__ */ Yt(function e(t) {
  var n = this;
  Xt(this, e), _(this, "formHooked", !1), _(this, "forceRootUpdate", void 0), _(this, "subscribable", !0), _(this, "store", {}), _(this, "fieldEntities", []), _(this, "initialValues", {}), _(this, "callbacks", {}), _(this, "validateMessages", null), _(this, "preserve", null), _(this, "lastValidatePromise", null), _(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), _(this, "getInternalHooks", function(r) {
    return r === gr ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (tt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), _(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), _(this, "prevWithoutPreserves", null), _(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = zr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(l) {
        var c = l.key;
        i = jn(i, c, kn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), _(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var a = new Or();
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), n.prevWithoutPreserves = a;
    }
  }), _(this, "getInitialValue", function(r) {
    var a = kn(n.initialValues, r);
    return r.length ? zr(a) : a;
  }), _(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), _(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), _(this, "setPreserve", function(r) {
    n.preserve = r;
  }), _(this, "watchList", []), _(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), _(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), _(this, "timeoutId", null), _(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || tt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), _(this, "updateStore", function(r) {
    n.store = r;
  }), _(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), _(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Or();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), _(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = qt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: qt(o)
      };
    });
  }), _(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, l;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && ze(r) === "object" && (l = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), u = [];
    return c.forEach(function(d) {
      var f, v, p = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (l) {
        var h, g;
        if ((h = (g = d).isList) !== null && h !== void 0 && h.call(g))
          return;
      } else if (!o && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        u.push(p);
      else {
        var m = "getMeta" in d ? d.getMeta() : null;
        i(m) && u.push(p);
      }
    }), au(n.store, u.map(qt));
  }), _(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = qt(r);
    return kn(n.store, a);
  }), _(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: qt(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), _(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = qt(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), _(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = qt(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), _(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], l = a[1], c, u = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(i) ? (c = i.map(qt), u = !1) : (c = null, u = i) : (c = i.map(qt), u = l);
    var d = n.getFieldEntities(!0), f = function(m) {
      return m.isFieldTouched();
    };
    if (!c)
      return u ? d.every(function(g) {
        return f(g) || g.isList();
      }) : d.some(f);
    var v = new Or();
    c.forEach(function(g) {
      v.set(g, []);
    }), d.forEach(function(g) {
      var m = g.getNamePath();
      c.forEach(function(b) {
        b.every(function(y, $) {
          return m[$] === y;
        }) && v.update(b, function(y) {
          return [].concat(Se(y), [g]);
        });
      });
    });
    var p = function(m) {
      return m.some(f);
    }, h = v.map(function(g) {
      var m = g.value;
      return m;
    });
    return u ? h.every(p) : h.some(p);
  }), _(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), _(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(qt);
    return a.some(function(i) {
      var l = i.getNamePath();
      return Hr(o, l) && i.isFieldValidating();
    });
  }), _(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), _(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Or(), o = n.getFieldEntities(!0);
    o.forEach(function(c) {
      var u = c.props.initialValue, d = c.getNamePath();
      if (u !== void 0) {
        var f = a.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: u
        }), a.set(d, f);
      }
    });
    var i = function(u) {
      u.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var v = d.getNamePath(), p = n.getInitialValue(v);
          if (p !== void 0)
            tt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              tt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var g = n.getFieldValue(v), m = d.isListField();
              !m && (!r.skipExist || g === void 0) && n.updateStore(jn(n.store, v, Se(h)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var d;
        (d = l).push.apply(d, Se(Se(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = o, i(l);
  }), _(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(zr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(qt);
    o.forEach(function(i) {
      var l = n.getInitialValue(i);
      n.updateStore(jn(n.store, i, l));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), _(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var l = i.name, c = ut(i, zy), u = qt(l);
      o.push(u), "value" in c && n.updateStore(jn(n.store, u, c.value)), n.notifyObservers(a, [u], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), _(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), l = o.getMeta(), c = D(D({}, l), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), _(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = kn(n.store, o);
      i === void 0 && n.updateStore(jn(n.store, o, a));
    }
  }), _(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), _(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, l) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(l) && (!i || c.length > 1)) {
        var u = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== u && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !nv(f.getNamePath(), a)
          );
        })) {
          var d = n.store;
          n.updateStore(jn(d, a, u, !0)), n.notifyObservers(d, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), _(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, l = r.triggerName;
        n.validateFields([i], {
          triggerName: l
        });
        break;
      }
    }
  }), _(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = D(D({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var c = l.onStoreChange;
        c(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), _(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Se(o))
    }), o;
  }), _(this, "updateValue", function(r, a) {
    var o = qt(r), i = n.store;
    n.updateStore(jn(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var l = n.triggerDependenciesUpdate(i, o), c = n.callbacks.onValuesChange;
    if (c) {
      var u = au(n.store, [o]);
      c(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(Se(l)));
  }), _(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = zr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), _(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a,
      errors: [],
      warnings: []
    }]);
  }), _(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Or();
    n.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(d) {
        var f = qt(d);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var l = function c(u) {
      var d = i.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (o.push(v), c(v));
        }
      });
    };
    return l(r), o;
  }), _(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var l = new Or();
        a.forEach(function(u) {
          var d = u.name, f = u.errors;
          l.set(d, f);
        }), i.forEach(function(u) {
          u.errors = l.get(u.name) || u.errors;
        });
      }
      var c = i.filter(function(u) {
        var d = u.name;
        return Hr(r, d);
      });
      c.length && o(c, i);
    }
  }), _(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var l = !!o, c = l ? o.map(qt) : [], u = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, p = v.recursive, h = v.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (l || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(h && !y.isFieldDirty())) {
        var $ = y.getNamePath();
        if (f.add($.join(d)), !l || Hr(c, $, p)) {
          var C = y.validateRules(D({
            validateMessages: D(D({}, tv), n.validateMessages)
          }, i));
          u.push(C.then(function() {
            return {
              name: $,
              errors: [],
              warnings: []
            };
          }).catch(function(S) {
            var x, w = [], E = [];
            return (x = S.forEach) === null || x === void 0 || x.call(S, function(O) {
              var P = O.rule.warningOnly, M = O.errors;
              P ? E.push.apply(E, Se(M)) : w.push.apply(w, Se(M));
            }), w.length ? Promise.reject({
              name: $,
              errors: w,
              warnings: E
            }) : {
              name: $,
              errors: w,
              warnings: E
            };
          }));
        }
      }
    });
    var g = jy(u);
    n.lastValidatePromise = g, g.catch(function(y) {
      return y;
    }).then(function(y) {
      var $ = y.map(function(C) {
        var S = C.name;
        return S;
      });
      n.notifyObservers(n.store, $, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange($, y);
    });
    var m = g.then(function() {
      return n.lastValidatePromise === g ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var $ = y.filter(function(C) {
        return C && C.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: $,
        outOfDate: n.lastValidatePromise !== g
      });
    });
    m.catch(function(y) {
      return y;
    });
    var b = c.filter(function(y) {
      return f.has(y.join(d));
    });
    return n.triggerOnFieldsChange(b), m;
  }), _(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function ov(e) {
  var t = s.useRef(), n = s.useState({}), r = H(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new Ay(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Il = /* @__PURE__ */ s.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Ly = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = s.useContext(Il), l = s.useRef({});
  return /* @__PURE__ */ s.createElement(Il.Provider, {
    value: D(D({}, i), {}, {
      validateMessages: D(D({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, d) {
        r && r(u, {
          changedFields: d,
          forms: l.current
        }), i.triggerFormChange(u, d);
      },
      triggerFormFinish: function(u, d) {
        a && a(u, {
          values: d,
          forms: l.current
        }), i.triggerFormFinish(u, d);
      },
      registerForm: function(u, d) {
        u && (l.current = D(D({}, l.current), {}, _({}, u, d))), i.registerForm(u, d);
      },
      unregisterForm: function(u) {
        var d = D({}, l.current);
        delete d[u], l.current = d, i.unregisterForm(u);
      }
    })
  }, o);
}, Fy = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Vy = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, l = t.preserve, c = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, v = t.validateTrigger, p = v === void 0 ? "onChange" : v, h = t.onValuesChange, g = t.onFieldsChange, m = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, $ = ut(t, Fy), C = s.useRef(null), S = s.useContext(Il), x = ov(i), w = H(x, 1), E = w[0], O = E.getInternalHooks(gr), P = O.useSubscribe, M = O.setInitialValues, I = O.setCallbacks, N = O.setValidateMessages, T = O.setPreserve, F = O.destroyForm;
  s.useImperativeHandle(n, function() {
    return D(D({}, E), {}, {
      nativeElement: C.current
    });
  }), s.useEffect(function() {
    return S.registerForm(r, E), function() {
      S.unregisterForm(r);
    };
  }, [S, E, r]), N(D(D({}, S.validateMessages), f)), I({
    onValuesChange: h,
    onFieldsChange: function(q) {
      if (S.triggerFormChange(r, q), g) {
        for (var ee = arguments.length, re = new Array(ee > 1 ? ee - 1 : 0), Q = 1; Q < ee; Q++)
          re[Q - 1] = arguments[Q];
        g.apply(void 0, [q].concat(re));
      }
    },
    onFinish: function(q) {
      S.triggerFormFinish(r, q), m && m(q);
    },
    onFinishFailed: b
  }), T(l);
  var j = s.useRef(null);
  M(a, !j.current), j.current || (j.current = !0), s.useEffect(
    function() {
      return function() {
        return F(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var A, B = typeof c == "function";
  if (B) {
    var V = E.getFieldsValue(!0);
    A = c(V, E);
  } else
    A = c;
  P(!B);
  var L = s.useRef();
  s.useEffect(function() {
    _y(L.current || [], o || []) || E.setFields(o || []), L.current = o;
  }, [o, E]);
  var R = s.useMemo(function() {
    return D(D({}, E), {}, {
      validateTrigger: p
    });
  }, [E, p]), z = /* @__PURE__ */ s.createElement(_o.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(Yr.Provider, {
    value: R
  }, A));
  return d === !1 ? z : /* @__PURE__ */ s.createElement(d, ye({}, $, {
    ref: C,
    onSubmit: function(q) {
      q.preventDefault(), q.stopPropagation(), E.submit();
    },
    onReset: function(q) {
      var ee;
      q.preventDefault(), E.resetFields(), (ee = $.onReset) === null || ee === void 0 || ee.call($, q);
    }
  }), z);
};
function iu(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var By = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Ie(t);
  tt(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Hy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = Yb(o) ? {
    form: o
  } : o, l = i.form, c = _t(), u = H(c, 2), d = u[0], f = u[1], v = Mn(function() {
    return iu(d);
  }, [d]), p = Ie(v);
  p.current = v;
  var h = _n(Yr), g = l || h, m = g && g._init;
  process.env.NODE_ENV !== "production" && tt(t.length === 2 ? l ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var b = qt(r), y = Ie(b);
  return y.current = b, By(b), Wt(
    function() {
      if (m) {
        var $ = g.getFieldsValue, C = g.getInternalHooks, S = C(gr), x = S.registerWatch, w = function(M, I) {
          var N = i.preserve ? I : M;
          return typeof r == "function" ? r(N) : kn(N, y.current);
        }, E = x(function(P, M) {
          var I = w(P, M), N = iu(I);
          p.current !== N && (p.current = N, f(I));
        }), O = w($(), $(!0));
        return d !== O && f(O), E;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), d;
}
var Wy = /* @__PURE__ */ s.forwardRef(Vy), Ha = Wy;
Ha.FormProvider = Ly;
Ha.Field = rv;
Ha.List = Dy;
Ha.useForm = ov;
Ha.useWatch = Hy;
const Mo = /* @__PURE__ */ s.createContext({});
process.env.NODE_ENV !== "production" && (Mo.displayName = "FormItemInputContext");
const ky = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = s.useContext(Mo), a = s.useMemo(() => {
    const o = Object.assign({}, r);
    return n && delete o.isFormItemInput, t && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [t, n, r]);
  return /* @__PURE__ */ s.createElement(Mo.Provider, {
    value: a
  }, e);
}, Gy = /* @__PURE__ */ s.createContext(void 0), iv = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let a = r;
  return n && (a = /* @__PURE__ */ te.createElement(ky, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ te.createElement(K0, null, a)), a;
}, Uo = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: a,
    shape: o
  } = e, i = U({
    [`${t}-lg`]: a === "large",
    [`${t}-sm`]: a === "small"
  }), l = U({
    [`${t}-circle`]: o === "circle",
    [`${t}-square`]: o === "square",
    [`${t}-round`]: o === "round"
  }), c = s.useMemo(() => typeof a == "number" ? {
    width: a,
    height: a,
    lineHeight: `${a}px`
  } : {}, [a]);
  return /* @__PURE__ */ s.createElement("span", {
    className: U(t, i, l, n),
    style: Object.assign(Object.assign({}, c), r)
  });
}, Ky = new Ot("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Xo = (e) => ({
  height: e,
  lineHeight: W(e)
}), Wr = (e) => Object.assign({
  width: e
}, Xo(e)), qy = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: Ky,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Ei = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Xo(e)), Uy = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: n,
    controlHeight: r,
    controlHeightLG: a,
    controlHeightSM: o
  } = e;
  return {
    [t]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: n
    }, Wr(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, Wr(a)),
    [`${t}${t}-sm`]: Object.assign({}, Wr(o))
  };
}, Xy = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: n,
    skeletonInputCls: r,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: l
  } = e;
  return {
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: n
    }, Ei(t, l)),
    [`${r}-lg`]: Object.assign({}, Ei(a, l)),
    [`${r}-sm`]: Object.assign({}, Ei(o, l))
  };
}, lu = (e) => Object.assign({
  width: e
}, Xo(e)), Yy = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: n,
    gradientFromColor: r,
    borderRadiusSM: a,
    calc: o
  } = e;
  return {
    [t]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: r,
      borderRadius: a
    }, lu(o(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, lu(n)), {
        maxWidth: o(n).mul(4).equal(),
        maxHeight: o(n).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, Oi = (e, t, n) => {
  const {
    skeletonButtonCls: r
  } = e;
  return {
    [`${n}${r}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${n}${r}-round`]: {
      borderRadius: t
    }
  };
}, Pi = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Xo(e)), Jy = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: n,
    controlHeight: r,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: l
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: l(r).mul(2).equal(),
      minWidth: l(r).mul(2).equal()
    }, Pi(r, l))
  }, Oi(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, Pi(a, l))
  }), Oi(e, a, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, Pi(o, l))
  }), Oi(e, o, `${n}-sm`));
}, Qy = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: n,
    skeletonTitleCls: r,
    skeletonParagraphCls: a,
    skeletonButtonCls: o,
    skeletonInputCls: i,
    skeletonImageCls: l,
    controlHeight: c,
    controlHeightLG: u,
    controlHeightSM: d,
    gradientFromColor: f,
    padding: v,
    marginSM: p,
    borderRadius: h,
    titleHeight: g,
    blockRadius: m,
    paragraphLiHeight: b,
    controlHeightXS: y,
    paragraphMarginTop: $
  } = e;
  return {
    [t]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: v,
        verticalAlign: "top",
        // Avatar
        [n]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: f
        }, Wr(c)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, Wr(u)),
        [`${n}-sm`]: Object.assign({}, Wr(d))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [r]: {
          width: "100%",
          height: g,
          background: f,
          borderRadius: m,
          [`+ ${a}`]: {
            marginBlockStart: d
          }
        },
        // paragraph
        [a]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: b,
            listStyle: "none",
            background: f,
            borderRadius: m,
            "+ li": {
              marginBlockStart: y
            }
          }
        },
        [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${r}, ${a} > li`]: {
          borderRadius: h
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [r]: {
        marginBlockStart: p,
        [`+ ${a}`]: {
          marginBlockStart: $
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, Jy(e)), Uy(e)), Xy(e)), Yy(e)),
    // Skeleton Block Button, Input
    [`${t}${t}-block`]: {
      width: "100%",
      [o]: {
        width: "100%"
      },
      [i]: {
        width: "100%"
      }
    },
    // With active animation
    [`${t}${t}-active`]: {
      [`
        ${r},
        ${a} > li,
        ${n},
        ${o},
        ${i},
        ${l}
      `]: Object.assign({}, qy(e))
    }
  };
}, Zy = (e) => {
  const {
    colorFillContent: t,
    colorFill: n
  } = e, r = t, a = n;
  return {
    color: r,
    colorGradientEnd: a,
    gradientFromColor: r,
    gradientToColor: a,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, na = un("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = Bt(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return Qy(r);
}, Zy, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), eS = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    shape: o = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("skeleton", t), [u, d, f] = na(c), v = nr(e, ["prefixCls", "className"]), p = U(c, `${c}-element`, {
    [`${c}-active`]: a
  }, n, r, d, f);
  return u(/* @__PURE__ */ s.createElement("div", {
    className: p
  }, /* @__PURE__ */ s.createElement(Uo, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: o,
    size: i
  }, v))));
}, tS = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    block: o = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("skeleton", t), [u, d, f] = na(c), v = nr(e, ["prefixCls"]), p = U(c, `${c}-element`, {
    [`${c}-active`]: a,
    [`${c}-block`]: o
  }, n, r, d, f);
  return u(/* @__PURE__ */ s.createElement("div", {
    className: p
  }, /* @__PURE__ */ s.createElement(Uo, Object.assign({
    prefixCls: `${c}-button`,
    size: i
  }, v))));
}, nS = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", rS = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: a,
    active: o
  } = e, {
    getPrefixCls: i
  } = s.useContext(Mt), l = i("skeleton", t), [c, u, d] = na(l), f = U(l, `${l}-element`, {
    [`${l}-active`]: o
  }, n, r, u, d);
  return c(/* @__PURE__ */ s.createElement("div", {
    className: f
  }, /* @__PURE__ */ s.createElement("div", {
    className: U(`${l}-image`, n),
    style: a
  }, /* @__PURE__ */ s.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${l}-image-svg`
  }, /* @__PURE__ */ s.createElement("title", null, "Image placeholder"), /* @__PURE__ */ s.createElement("path", {
    d: nS,
    className: `${l}-image-path`
  })))));
}, aS = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    block: o,
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("skeleton", t), [u, d, f] = na(c), v = nr(e, ["prefixCls"]), p = U(c, `${c}-element`, {
    [`${c}-active`]: a,
    [`${c}-block`]: o
  }, n, r, d, f);
  return u(/* @__PURE__ */ s.createElement("div", {
    className: p
  }, /* @__PURE__ */ s.createElement(Uo, Object.assign({
    prefixCls: `${c}-input`,
    size: i
  }, v))));
}, oS = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: a,
    active: o,
    children: i
  } = e, {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("skeleton", t), [u, d, f] = na(c), v = U(c, `${c}-element`, {
    [`${c}-active`]: o
  }, d, n, r, f);
  return u(/* @__PURE__ */ s.createElement("div", {
    className: v
  }, /* @__PURE__ */ s.createElement("div", {
    className: U(`${c}-image`, n),
    style: a
  }, i)));
}, iS = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, lS = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    rows: a = 0
  } = e, o = Array.from({
    length: a
  }).map((i, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement("li", {
      key: l,
      style: {
        width: iS(l, e)
      }
    })
  ));
  return /* @__PURE__ */ s.createElement("ul", {
    className: U(t, n),
    style: r
  }, o);
}, sS = ({
  prefixCls: e,
  className: t,
  width: n,
  style: r
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ s.createElement("h3", {
    className: U(e, t),
    style: Object.assign({
      width: n
    }, r)
  })
);
function Ri(e) {
  return e && typeof e == "object" ? e : {};
}
function cS(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function uS(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function dS(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const Cr = (e) => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
    rootClassName: a,
    style: o,
    children: i,
    avatar: l = !1,
    title: c = !0,
    paragraph: u = !0,
    active: d,
    round: f
  } = e, {
    getPrefixCls: v,
    direction: p,
    className: h,
    style: g
  } = tr("skeleton"), m = v("skeleton", t), [b, y, $] = na(m);
  if (n || !("loading" in e)) {
    const C = !!l, S = !!c, x = !!u;
    let w;
    if (C) {
      const P = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, cS(S, x)), Ri(l));
      w = /* @__PURE__ */ s.createElement("div", {
        className: `${m}-header`
      }, /* @__PURE__ */ s.createElement(Uo, Object.assign({}, P)));
    }
    let E;
    if (S || x) {
      let P;
      if (S) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-title`
        }, uS(C, x)), Ri(c));
        P = /* @__PURE__ */ s.createElement(sS, Object.assign({}, I));
      }
      let M;
      if (x) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, dS(C, S)), Ri(u));
        M = /* @__PURE__ */ s.createElement(lS, Object.assign({}, I));
      }
      E = /* @__PURE__ */ s.createElement("div", {
        className: `${m}-content`
      }, P, M);
    }
    const O = U(m, {
      [`${m}-with-avatar`]: C,
      [`${m}-active`]: d,
      [`${m}-rtl`]: p === "rtl",
      [`${m}-round`]: f
    }, h, r, a, y, $);
    return b(/* @__PURE__ */ s.createElement("div", {
      className: O,
      style: Object.assign(Object.assign({}, g), o)
    }, w, E));
  }
  return i ?? null;
};
Cr.Button = tS;
Cr.Avatar = eS;
Cr.Input = aS;
Cr.Image = rS;
Cr.Node = oS;
process.env.NODE_ENV !== "production" && (Cr.displayName = "Skeleton");
const fS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, vS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, mS = (e, t) => {
  const {
    prefixCls: n,
    componentCls: r,
    gridColumns: a
  } = e, o = {};
  for (let i = a; i >= 0; i--)
    i === 0 ? (o[`${r}${t}-${i}`] = {
      display: "none"
    }, o[`${r}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${r}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${r}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${r}${t}-offset-${i}`] = {
      marginInlineStart: 0
    }, o[`${r}${t}-order-${i}`] = {
      order: 0
    }) : (o[`${r}${t}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${i / a * 100}%`,
        maxWidth: `${i / a * 100}%`
      }
    ], o[`${r}${t}-push-${i}`] = {
      insetInlineStart: `${i / a * 100}%`
    }, o[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / a * 100}%`
    }, o[`${r}${t}-offset-${i}`] = {
      marginInlineStart: `${i / a * 100}%`
    }, o[`${r}${t}-order-${i}`] = {
      order: i
    });
  return o[`${r}${t}-flex`] = {
    flex: `var(--${n}${t}-flex)`
  }, o;
}, Nl = (e, t) => mS(e, t), gS = (e, t, n) => ({
  [`@media (min-width: ${W(t)})`]: Object.assign({}, Nl(e, n))
}), pS = () => ({}), hS = () => ({}), bS = un("Grid", fS, pS), yS = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
}), SS = un("Grid", (e) => {
  const t = Bt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = yS(t);
  return delete n.xs, [vS(t), Nl(t, ""), Nl(t, "-xs"), Object.keys(n).map((r) => gS(t, n[r], `-${r}`)).reduce((r, a) => Object.assign(Object.assign({}, r), a), {})];
}, hS);
function CS(e) {
  return (t) => /* @__PURE__ */ s.createElement(yr, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ s.createElement(e, Object.assign({}, t)));
}
const $S = (e, t, n, r, a) => CS((i) => {
  const {
    prefixCls: l,
    style: c
  } = i, u = s.useRef(null), [d, f] = s.useState(0), [v, p] = s.useState(0), [h, g] = mn(!1, {
    value: i.open
  }), {
    getPrefixCls: m
  } = s.useContext(Mt), b = m("select", l);
  s.useEffect(() => {
    if (g(!0), typeof ResizeObserver < "u") {
      const C = new ResizeObserver((x) => {
        const w = x[0].target;
        f(w.offsetHeight + 8), p(w.offsetWidth);
      }), S = setInterval(() => {
        var x;
        const w = `.${b}-dropdown`, E = (x = u.current) === null || x === void 0 ? void 0 : x.querySelector(w);
        E && (clearInterval(S), C.observe(E));
      }, 10);
      return () => {
        clearInterval(S), C.disconnect();
      };
    }
  }, [b]);
  let y = Object.assign(Object.assign({}, i), {
    style: Object.assign(Object.assign({}, c), {
      margin: 0
    }),
    open: h,
    visible: h,
    getPopupContainer: () => u.current
  });
  Object.assign(y, {
    [t]: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
  const $ = {
    paddingBottom: d,
    position: "relative",
    minWidth: v
  };
  return /* @__PURE__ */ s.createElement("div", {
    ref: u,
    style: $
  }, /* @__PURE__ */ s.createElement(e, Object.assign({}, y)));
}), gs = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
});
var Yo = function(t) {
  var n = t.className, r = t.customizeIcon, a = t.customizeIconProps, o = t.children, i = t.onMouseDown, l = t.onClick, c = typeof r == "function" ? r(a) : r;
  return /* @__PURE__ */ s.createElement("span", {
    className: n,
    onMouseDown: function(d) {
      d.preventDefault(), i?.(d);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: l,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ s.createElement("span", {
    className: U(n.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, o));
}, xS = function(t, n, r, a, o) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, l = arguments.length > 6 ? arguments[6] : void 0, c = arguments.length > 7 ? arguments[7] : void 0, u = te.useMemo(function() {
    if (ze(a) === "object")
      return a.clearIcon;
    if (o)
      return o;
  }, [a, o]), d = te.useMemo(function() {
    return !!(!i && a && (r.length || l) && !(c === "combobox" && l === ""));
  }, [a, i, r.length, l, c]);
  return {
    allowClear: d,
    clearIcon: /* @__PURE__ */ te.createElement(Yo, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: u
    }, "×")
  };
}, lv = /* @__PURE__ */ s.createContext(null);
function wS() {
  return s.useContext(lv);
}
function ES() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = s.useState(!1), n = H(t, 2), r = n[0], a = n[1], o = s.useRef(null), i = function() {
    window.clearTimeout(o.current);
  };
  s.useEffect(function() {
    return i;
  }, []);
  var l = function(u, d) {
    i(), o.current = window.setTimeout(function() {
      a(u), d && d();
    }, e);
  };
  return [r, l, i];
}
function sv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = s.useRef(null), n = s.useRef(null);
  s.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(a) {
    (a || t.current === null) && (t.current = a), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function OS(e, t, n, r) {
  var a = s.useRef(null);
  a.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, s.useEffect(function() {
    function o(i) {
      var l;
      if (!((l = a.current) !== null && l !== void 0 && l.customizedTrigger)) {
        var c = i.target;
        c.shadowRoot && i.composed && (c = i.composedPath()[0] || c), a.current.open && e().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(c) && u !== c;
        }) && a.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
function PS(e) {
  return (
    // Undefined for Edge bug:
    // https://github.com/ant-design/ant-design/issues/51292
    e && // Other keys
    ![
      // System function button
      $e.ESC,
      $e.SHIFT,
      $e.BACKSPACE,
      $e.TAB,
      $e.WIN_KEY,
      $e.ALT,
      $e.META,
      $e.WIN_KEY_RIGHT,
      $e.CTRL,
      $e.SEMICOLON,
      $e.EQUALS,
      $e.CAPS_LOCK,
      $e.CONTEXT_MENU,
      // F1-F12
      $e.F1,
      $e.F2,
      $e.F3,
      $e.F4,
      $e.F5,
      $e.F6,
      $e.F7,
      $e.F8,
      $e.F9,
      $e.F10,
      $e.F11,
      $e.F12
    ].includes(e)
  );
}
var RS = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Pr = void 0;
function IS(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, l = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, d = e.className, f = e.style, v = e.children, p = e.display, h = e.order, g = e.component, m = g === void 0 ? "div" : g, b = ut(e, RS), y = i && !p;
  function $(E) {
    c(u, E);
  }
  s.useEffect(function() {
    return function() {
      $(null);
    };
  }, []);
  var C = o && a !== Pr ? o(a, {
    index: h
  }) : v, S;
  r || (S = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Pr,
    overflowY: y ? "hidden" : Pr,
    order: i ? h : Pr,
    pointerEvents: y ? "none" : Pr,
    position: y ? "absolute" : Pr
  });
  var x = {};
  y && (x["aria-hidden"] = !0);
  var w = /* @__PURE__ */ s.createElement(m, ye({
    className: U(!r && n, d),
    style: D(D({}, S), f)
  }, x, b, {
    ref: t
  }), C);
  return i && (w = /* @__PURE__ */ s.createElement(Nn, {
    onResize: function(O) {
      var P = O.offsetWidth;
      $(P);
    },
    disabled: l
  }, w)), w;
}
var Fr = /* @__PURE__ */ s.forwardRef(IS);
Fr.displayName = "Item";
function NS(e) {
  if (typeof MessageChannel > "u")
    kt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function _S() {
  var e = s.useRef(null), t = function(r) {
    e.current || (e.current = [], NS(function() {
      jm(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Rr(e, t) {
  var n = s.useState(t), r = H(n, 2), a = r[0], o = r[1], i = an(function(l) {
    e(function() {
      o(l);
    });
  });
  return [a, i];
}
var To = /* @__PURE__ */ te.createContext(null), MS = ["component"], TS = ["className"], DS = ["className"], jS = function(t, n) {
  var r = s.useContext(To);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = ut(t, MS);
    return /* @__PURE__ */ s.createElement(o, ye({}, i, {
      ref: n
    }));
  }
  var l = r.className, c = ut(r, TS), u = t.className, d = ut(t, DS);
  return /* @__PURE__ */ s.createElement(To.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(Fr, ye({
    ref: n,
    className: U(l, u)
  }, c, d)));
}, cv = /* @__PURE__ */ s.forwardRef(jS);
cv.displayName = "RawItem";
var zS = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "prefix", "suffix", "component", "itemComponent", "onVisibleChange"], uv = "responsive", dv = "invalidate";
function AS(e) {
  return "+ ".concat(e.length, " ...");
}
function LS(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, l = e.renderRawItem, c = e.itemKey, u = e.itemWidth, d = u === void 0 ? 10 : u, f = e.ssr, v = e.style, p = e.className, h = e.maxCount, g = e.renderRest, m = e.renderRawRest, b = e.prefix, y = e.suffix, $ = e.component, C = $ === void 0 ? "div" : $, S = e.itemComponent, x = e.onVisibleChange, w = ut(e, zS), E = f === "full", O = _S(), P = Rr(O, null), M = H(P, 2), I = M[0], N = M[1], T = I || 0, F = Rr(O, /* @__PURE__ */ new Map()), j = H(F, 2), A = j[0], B = j[1], V = Rr(O, 0), L = H(V, 2), R = L[0], z = L[1], k = Rr(O, 0), q = H(k, 2), ee = q[0], re = q[1], Q = Rr(O, 0), le = H(Q, 2), oe = le[0], de = le[1], X = Rr(O, 0), K = H(X, 2), ae = K[0], G = K[1], ne = _t(null), Y = H(ne, 2), me = Y[0], pe = Y[1], he = _t(null), fe = H(he, 2), se = fe[0], ue = fe[1], xe = s.useMemo(function() {
    return se === null && E ? Number.MAX_SAFE_INTEGER : se || 0;
  }, [se, I]), ve = _t(!1), We = H(ve, 2), Ae = We[0], Je = We[1], Le = "".concat(r, "-item"), De = Math.max(R, ee), qe = h === uv, we = o.length && qe, Ge = h === dv, et = we || typeof h == "number" && o.length > h, Te = Mn(function() {
    var Z = o;
    return we ? I === null && E ? Z = o : Z = o.slice(0, Math.min(o.length, T / d)) : typeof h == "number" && (Z = o.slice(0, h)), Z;
  }, [o, d, I, h, we]), Fe = Mn(function() {
    return we ? o.slice(xe + 1) : o.slice(Te.length);
  }, [o, Te, we, xe]), Ue = ir(function(Z, J) {
    var ie;
    return typeof c == "function" ? c(Z) : (ie = c && Z?.[c]) !== null && ie !== void 0 ? ie : J;
  }, [c]), Ve = ir(i || function(Z) {
    return Z;
  }, [i]);
  function Ct(Z, J, ie) {
    se === Z && (J === void 0 || J === me) || (ue(Z), ie || (Je(Z < o.length - 1), x?.(Z)), J !== void 0 && pe(J));
  }
  function $t(Z, J) {
    N(J.clientWidth);
  }
  function Lt(Z, J) {
    B(function(ie) {
      var Ee = new Map(ie);
      return J === null ? Ee.delete(Z) : Ee.set(Z, J), Ee;
    });
  }
  function Pt(Z, J) {
    re(J), z(ee);
  }
  function zt(Z, J) {
    de(J);
  }
  function jt(Z, J) {
    G(J);
  }
  function Et(Z) {
    return A.get(Ue(Te[Z], Z));
  }
  Vt(function() {
    if (T && typeof De == "number" && Te) {
      var Z = oe + ae, J = Te.length, ie = J - 1;
      if (!J) {
        Ct(0, null);
        return;
      }
      for (var Ee = 0; Ee < J; Ee += 1) {
        var Ce = Et(Ee);
        if (E && (Ce = Ce || 0), Ce === void 0) {
          Ct(Ee - 1, void 0, !0);
          break;
        }
        if (Z += Ce, // Only one means `totalWidth` is the final width
        ie === 0 && Z <= T || // Last two width will be the final width
        Ee === ie - 1 && Z + Et(ie) <= T) {
          Ct(ie, null);
          break;
        } else if (Z + De > T) {
          Ct(Ee - 1, Z - Ce - ae + ee);
          break;
        }
      }
      y && Et(0) + ae > T && pe(null);
    }
  }, [T, A, ee, oe, ae, Ue, Te]);
  var rt = Ae && !!Fe.length, Ke = {};
  me !== null && we && (Ke = {
    position: "absolute",
    left: me,
    top: 0
  });
  var yt = {
    prefixCls: Le,
    responsive: we,
    component: S,
    invalidate: Ge
  }, st = l ? function(Z, J) {
    var ie = Ue(Z, J);
    return /* @__PURE__ */ s.createElement(To.Provider, {
      key: ie,
      value: D(D({}, yt), {}, {
        order: J,
        item: Z,
        itemKey: ie,
        registerSize: Lt,
        display: J <= xe
      })
    }, l(Z, J));
  } : function(Z, J) {
    var ie = Ue(Z, J);
    return /* @__PURE__ */ s.createElement(Fr, ye({}, yt, {
      order: J,
      key: ie,
      item: Z,
      renderItem: Ve,
      itemKey: ie,
      registerSize: Lt,
      display: J <= xe
    }));
  }, _e = {
    order: rt ? xe : Number.MAX_SAFE_INTEGER,
    className: "".concat(Le, "-rest"),
    registerSize: Pt,
    display: rt
  }, ke = g || AS, Be = m ? /* @__PURE__ */ s.createElement(To.Provider, {
    value: D(D({}, yt), _e)
  }, m(Fe)) : /* @__PURE__ */ s.createElement(Fr, ye({}, yt, _e), typeof ke == "function" ? ke(Fe) : ke), ge = /* @__PURE__ */ s.createElement(C, ye({
    className: U(!Ge && r, p),
    style: v,
    ref: t
  }, w), b && /* @__PURE__ */ s.createElement(Fr, ye({}, yt, {
    responsive: qe,
    responsiveDisabled: !we,
    order: -1,
    className: "".concat(Le, "-prefix"),
    registerSize: zt,
    display: !0
  }), b), Te.map(st), et ? Be : null, y && /* @__PURE__ */ s.createElement(Fr, ye({}, yt, {
    responsive: qe,
    responsiveDisabled: !we,
    order: xe,
    className: "".concat(Le, "-suffix"),
    registerSize: jt,
    display: !0,
    style: Ke
  }), y));
  return qe ? /* @__PURE__ */ s.createElement(Nn, {
    onResize: $t,
    disabled: !we
  }, ge) : ge;
}
var Gn = /* @__PURE__ */ s.forwardRef(LS);
Gn.displayName = "Overflow";
Gn.Item = cv;
Gn.RESPONSIVE = uv;
Gn.INVALIDATE = dv;
function FS(e, t, n) {
  var r = D(D({}, e), t);
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    typeof o == "function" && (r[a] = function() {
      for (var i, l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      return o.apply(void 0, c), (i = e[a]) === null || i === void 0 ? void 0 : i.call.apply(i, [e].concat(c));
    });
  }), r;
}
var VS = ["prefixCls", "id", "inputElement", "autoFocus", "autoComplete", "editable", "activeDescendantId", "value", "open", "attrs"], BS = function(t, n) {
  var r = t.prefixCls, a = t.id, o = t.inputElement, i = t.autoFocus, l = t.autoComplete, c = t.editable, u = t.activeDescendantId, d = t.value, f = t.open, v = t.attrs, p = ut(t, VS), h = o || /* @__PURE__ */ s.createElement("input", null), g = h, m = g.ref, b = g.props;
  return hr(!("maxLength" in h.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), h = /* @__PURE__ */ s.cloneElement(h, D(D(D({
    type: "search"
  }, FS(p, b)), {}, {
    // Override over origin props
    id: a,
    ref: Jr(n, m),
    autoComplete: l || "off",
    autoFocus: i,
    className: U("".concat(r, "-selection-search-input"), b?.className),
    role: "combobox",
    "aria-expanded": f || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": f ? u : void 0
  }, v), {}, {
    value: c ? d : "",
    readOnly: !c,
    unselectable: c ? null : "on",
    style: D(D({}, b.style), {}, {
      opacity: c ? null : 0
    })
  })), h;
}, ps = /* @__PURE__ */ s.forwardRef(BS);
process.env.NODE_ENV !== "production" && (ps.displayName = "Input");
function hs(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var HS = typeof window < "u" && window.document && window.document.documentElement, WS = process.env.NODE_ENV !== "test" && HS;
function kS(e) {
  return e != null;
}
function GS(e) {
  return !e && e !== 0;
}
function su(e) {
  return ["string", "number"].includes(ze(e));
}
function fv(e) {
  var t = void 0;
  return e && (su(e.title) ? t = e.title.toString() : su(e.label) && (t = e.label.toString())), t;
}
function KS(e, t) {
  WS ? s.useLayoutEffect(e, t) : s.useEffect(e, t);
}
function qS(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var cu = function(t) {
  t.preventDefault(), t.stopPropagation();
}, US = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, o = t.open, i = t.searchValue, l = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, d = t.disabled, f = t.mode, v = t.showSearch, p = t.autoFocus, h = t.autoComplete, g = t.activeDescendantId, m = t.tabIndex, b = t.removeIcon, y = t.maxTagCount, $ = t.maxTagTextLength, C = t.maxTagPlaceholder, S = C === void 0 ? function(G) {
    return "+ ".concat(G.length, " ...");
  } : C, x = t.tagRender, w = t.onToggleOpen, E = t.onRemove, O = t.onInputChange, P = t.onInputPaste, M = t.onInputKeyDown, I = t.onInputMouseDown, N = t.onInputCompositionStart, T = t.onInputCompositionEnd, F = t.onInputBlur, j = s.useRef(null), A = _t(0), B = H(A, 2), V = B[0], L = B[1], R = _t(!1), z = H(R, 2), k = z[0], q = z[1], ee = "".concat(r, "-selection"), re = o || f === "multiple" && l === !1 || f === "tags" ? i : "", Q = f === "tags" || f === "multiple" && l === !1 || v && (o || k);
  KS(function() {
    L(j.current.scrollWidth);
  }, [re]);
  var le = function(ne, Y, me, pe, he) {
    return /* @__PURE__ */ s.createElement("span", {
      title: fv(ne),
      className: U("".concat(ee, "-item"), _({}, "".concat(ee, "-item-disabled"), me))
    }, /* @__PURE__ */ s.createElement("span", {
      className: "".concat(ee, "-item-content")
    }, Y), pe && /* @__PURE__ */ s.createElement(Yo, {
      className: "".concat(ee, "-item-remove"),
      onMouseDown: cu,
      onClick: he,
      customizeIcon: b
    }, "×"));
  }, oe = function(ne, Y, me, pe, he, fe) {
    var se = function(xe) {
      cu(xe), w(!o);
    };
    return /* @__PURE__ */ s.createElement("span", {
      onMouseDown: se
    }, x({
      label: Y,
      value: ne,
      disabled: me,
      closable: pe,
      onClose: he,
      isMaxTag: !!fe
    }));
  }, de = function(ne) {
    var Y = ne.disabled, me = ne.label, pe = ne.value, he = !d && !Y, fe = me;
    if (typeof $ == "number" && (typeof me == "string" || typeof me == "number")) {
      var se = String(fe);
      se.length > $ && (fe = "".concat(se.slice(0, $), "..."));
    }
    var ue = function(ve) {
      ve && ve.stopPropagation(), E(ne);
    };
    return typeof x == "function" ? oe(pe, fe, Y, he, ue) : le(ne, fe, Y, he, ue);
  }, X = function(ne) {
    if (!a.length)
      return null;
    var Y = typeof S == "function" ? S(ne) : S;
    return typeof x == "function" ? oe(void 0, Y, !1, !1, void 0, !0) : le({
      title: Y
    }, Y, !1);
  }, K = /* @__PURE__ */ s.createElement("div", {
    className: "".concat(ee, "-search"),
    style: {
      width: V
    },
    onFocus: function() {
      q(!0);
    },
    onBlur: function() {
      q(!1);
    }
  }, /* @__PURE__ */ s.createElement(ps, {
    ref: c,
    open: o,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: d,
    autoFocus: p,
    autoComplete: h,
    editable: Q,
    activeDescendantId: g,
    value: re,
    onKeyDown: M,
    onMouseDown: I,
    onChange: O,
    onPaste: P,
    onCompositionStart: N,
    onCompositionEnd: T,
    onBlur: F,
    tabIndex: m,
    attrs: Na(t, !0)
  }), /* @__PURE__ */ s.createElement("span", {
    ref: j,
    className: "".concat(ee, "-search-mirror"),
    "aria-hidden": !0
  }, re, " ")), ae = /* @__PURE__ */ s.createElement(Gn, {
    prefixCls: "".concat(ee, "-overflow"),
    data: a,
    renderItem: de,
    renderRest: X,
    suffix: K,
    itemKey: qS,
    maxCount: y
  });
  return /* @__PURE__ */ s.createElement("span", {
    className: "".concat(ee, "-wrap")
  }, ae, !a.length && !re && /* @__PURE__ */ s.createElement("span", {
    className: "".concat(ee, "-placeholder")
  }, u));
}, XS = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, o = t.inputRef, i = t.disabled, l = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, d = t.mode, f = t.open, v = t.values, p = t.placeholder, h = t.tabIndex, g = t.showSearch, m = t.searchValue, b = t.activeValue, y = t.maxLength, $ = t.onInputKeyDown, C = t.onInputMouseDown, S = t.onInputChange, x = t.onInputPaste, w = t.onInputCompositionStart, E = t.onInputCompositionEnd, O = t.onInputBlur, P = t.title, M = s.useState(!1), I = H(M, 2), N = I[0], T = I[1], F = d === "combobox", j = F || g, A = v[0], B = m || "";
  F && b && !N && (B = b), s.useEffect(function() {
    F && T(!1);
  }, [F, b]);
  var V = d !== "combobox" && !f && !g ? !1 : !!B, L = P === void 0 ? fv(A) : P, R = s.useMemo(function() {
    return A ? null : /* @__PURE__ */ s.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: V ? {
        visibility: "hidden"
      } : void 0
    }, p);
  }, [A, V, p, r]);
  return /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-wrap")
  }, /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ s.createElement(ps, {
    ref: o,
    prefixCls: r,
    id: a,
    open: f,
    inputElement: n,
    disabled: i,
    autoFocus: l,
    autoComplete: c,
    editable: j,
    activeDescendantId: u,
    value: B,
    onKeyDown: $,
    onMouseDown: C,
    onChange: function(k) {
      T(!0), S(k);
    },
    onPaste: x,
    onCompositionStart: w,
    onCompositionEnd: E,
    onBlur: O,
    tabIndex: h,
    attrs: Na(t, !0),
    maxLength: F ? y : void 0
  })), !F && A ? /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: L,
    style: V ? {
      visibility: "hidden"
    } : void 0
  }, A.label) : null, R);
}, YS = function(t, n) {
  var r = Ie(null), a = Ie(!1), o = t.prefixCls, i = t.open, l = t.mode, c = t.showSearch, u = t.tokenWithEnter, d = t.disabled, f = t.prefix, v = t.autoClearSearchValue, p = t.onSearch, h = t.onSearchSubmit, g = t.onToggleOpen, m = t.onInputKeyDown, b = t.onInputBlur, y = t.domRef;
  s.useImperativeHandle(n, function() {
    return {
      focus: function(L) {
        r.current.focus(L);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var $ = sv(0), C = H($, 2), S = C[0], x = C[1], w = function(L) {
    var R = L.which, z = r.current instanceof HTMLTextAreaElement;
    !z && i && (R === $e.UP || R === $e.DOWN) && L.preventDefault(), m && m(L), R === $e.ENTER && l === "tags" && !a.current && !i && h?.(L.target.value), !(z && !i && ~[$e.UP, $e.DOWN, $e.LEFT, $e.RIGHT].indexOf(R)) && PS(R) && g(!0);
  }, E = function() {
    x(!0);
  }, O = Ie(null), P = function(L) {
    p(L, !0, a.current) !== !1 && g(!0);
  }, M = function() {
    a.current = !0;
  }, I = function(L) {
    a.current = !1, l !== "combobox" && P(L.target.value);
  }, N = function(L) {
    var R = L.target.value;
    if (u && O.current && /[\r\n]/.test(O.current)) {
      var z = O.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      R = R.replace(z, O.current);
    }
    O.current = null, P(R);
  }, T = function(L) {
    var R = L.clipboardData, z = R?.getData("text");
    O.current = z || "";
  }, F = function(L) {
    var R = L.target;
    if (R !== r.current) {
      var z = document.body.style.msTouchAction !== void 0;
      z ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, j = function(L) {
    var R = S();
    L.target !== r.current && !R && !(l === "combobox" && d) && L.preventDefault(), (l !== "combobox" && (!c || !R) || !i) && (i && v !== !1 && p("", !0, !1), g());
  }, A = {
    inputRef: r,
    onInputKeyDown: w,
    onInputMouseDown: E,
    onInputChange: N,
    onInputPaste: T,
    onInputCompositionStart: M,
    onInputCompositionEnd: I,
    onInputBlur: b
  }, B = l === "multiple" || l === "tags" ? /* @__PURE__ */ s.createElement(US, ye({}, t, A)) : /* @__PURE__ */ s.createElement(XS, ye({}, t, A));
  return /* @__PURE__ */ s.createElement("div", {
    ref: y,
    className: "".concat(o, "-selector"),
    onClick: F,
    onMouseDown: j
  }, f && /* @__PURE__ */ s.createElement("div", {
    className: "".concat(o, "-prefix")
  }, f), B);
}, vv = /* @__PURE__ */ s.forwardRef(YS);
process.env.NODE_ENV !== "production" && (vv.displayName = "Selector");
function JS(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, l = o.content, c = a.x, u = c === void 0 ? 0 : c, d = a.y, f = d === void 0 ? 0 : d, v = s.useRef();
  if (!n || !n.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var h = n.points[0], g = n.points[1], m = h[0], b = h[1], y = g[0], $ = g[1];
    m === y || !["t", "b"].includes(m) ? p.top = f : m === "t" ? p.top = 0 : p.bottom = 0, b === $ || !["l", "r"].includes(b) ? p.left = u : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ s.createElement("div", {
    ref: v,
    className: U("".concat(t, "-arrow"), i),
    style: p
  }, l);
}
function QS(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ s.createElement(La, ye({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var l = i.className;
    return /* @__PURE__ */ s.createElement("div", {
      style: {
        zIndex: r
      },
      className: U("".concat(t, "-mask"), l)
    });
  }) : null;
}
var mv = /* @__PURE__ */ s.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (mv.displayName = "PopupContent");
var gv = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, l = e.onVisibleChanged, c = e.open, u = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, p = e.arrow, h = e.arrowPos, g = e.align, m = e.motion, b = e.maskMotion, y = e.forceRender, $ = e.getPopupContainer, C = e.autoDestroy, S = e.portal, x = e.zIndex, w = e.onMouseEnter, E = e.onMouseLeave, O = e.onPointerEnter, P = e.onPointerDownCapture, M = e.ready, I = e.offsetX, N = e.offsetY, T = e.offsetR, F = e.offsetB, j = e.onAlign, A = e.onPrepare, B = e.stretch, V = e.targetWidth, L = e.targetHeight, R = typeof n == "function" ? n() : n, z = c || u, k = $?.length > 0, q = s.useState(!$ || !k), ee = H(q, 2), re = ee[0], Q = ee[1];
  if (Vt(function() {
    !re && k && i && Q(!0);
  }, [re, k, i]), !re)
    return null;
  var le = "auto", oe = {
    left: "-1000vw",
    top: "-1000vh",
    right: le,
    bottom: le
  };
  if (M || !c) {
    var de, X = g.points, K = g.dynamicInset || ((de = g._experimental) === null || de === void 0 ? void 0 : de.dynamicInset), ae = K && X[0][1] === "r", G = K && X[0][0] === "b";
    ae ? (oe.right = T, oe.left = le) : (oe.left = I, oe.right = le), G ? (oe.bottom = F, oe.top = le) : (oe.top = N, oe.bottom = le);
  }
  var ne = {};
  return B && (B.includes("height") && L ? ne.height = L : B.includes("minHeight") && L && (ne.minHeight = L), B.includes("width") && V ? ne.width = V : B.includes("minWidth") && V && (ne.minWidth = V)), c || (ne.pointerEvents = "none"), /* @__PURE__ */ s.createElement(S, {
    open: y || z,
    getContainer: $ && function() {
      return $(i);
    },
    autoDestroy: C
  }, /* @__PURE__ */ s.createElement(QS, {
    prefixCls: a,
    open: c,
    zIndex: x,
    mask: v,
    motion: b
  }), /* @__PURE__ */ s.createElement(Nn, {
    onResize: j,
    disabled: !c
  }, function(Y) {
    return /* @__PURE__ */ s.createElement(La, ye({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(a, "-hidden")
    }, m, {
      onAppearPrepare: A,
      onEnterPrepare: A,
      visible: c,
      onVisibleChanged: function(pe) {
        var he;
        m == null || (he = m.onVisibleChanged) === null || he === void 0 || he.call(m, pe), l(pe);
      }
    }), function(me, pe) {
      var he = me.className, fe = me.style, se = U(a, he, r);
      return /* @__PURE__ */ s.createElement("div", {
        ref: Jr(Y, t, pe),
        className: se,
        style: D(D(D(D({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, oe), ne), fe), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, o),
        onMouseEnter: w,
        onMouseLeave: E,
        onPointerEnter: O,
        onClick: f,
        onPointerDownCapture: P
      }, p && /* @__PURE__ */ s.createElement(JS, {
        prefixCls: a,
        arrow: p,
        arrowPos: h,
        align: g
      }), /* @__PURE__ */ s.createElement(mv, {
        cache: !c && !d
      }, R));
    });
  }));
});
process.env.NODE_ENV !== "production" && (gv.displayName = "Popup");
var pv = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = Zr(n), o = s.useCallback(function(l) {
    Yl(t, r ? r(l) : l);
  }, [r]), i = Qr(o, ja(n));
  return a ? /* @__PURE__ */ s.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (pv.displayName = "TriggerWrapper");
var uu = /* @__PURE__ */ s.createContext(null);
function du(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function ZS(e, t, n, r) {
  return s.useMemo(function() {
    var a = du(n ?? t), o = du(r ?? t), i = new Set(a), l = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l];
  }, [e, t, n, r]);
}
function eC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function tC(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var l, c = o[i];
    if (eC((l = e[c]) === null || l === void 0 ? void 0 : l.points, a, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function fu(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Wa(e) {
  return e.ownerDocument.defaultView;
}
function _l(e) {
  for (var t = [], n = e?.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = Wa(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, l = a.overflow;
    [o, i, l].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function _a(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ca(e) {
  return _a(parseFloat(e), 0);
}
function vu(e, t) {
  var n = D({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = Wa(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, l = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, d = a.borderRightWidth, f = r.getBoundingClientRect(), v = r.offsetHeight, p = r.clientHeight, h = r.offsetWidth, g = r.clientWidth, m = ca(l), b = ca(c), y = ca(u), $ = ca(d), C = _a(Math.round(f.width / h * 1e3) / 1e3), S = _a(Math.round(f.height / v * 1e3) / 1e3), x = (h - g - y - $) * C, w = (v - p - m - b) * S, E = m * S, O = b * S, P = y * C, M = $ * C, I = 0, N = 0;
      if (o === "clip") {
        var T = ca(i);
        I = T * C, N = T * S;
      }
      var F = f.x + P - I, j = f.y + E - N, A = F + f.width + 2 * I - P - M - x, B = j + f.height + 2 * N - E - O - w;
      n.left = Math.max(n.left, F), n.top = Math.max(n.top, j), n.right = Math.min(n.right, A), n.bottom = Math.min(n.bottom, B);
    }
  }), n;
}
function mu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function gu(e, t) {
  var n = t || [], r = H(n, 2), a = r[0], o = r[1];
  return [mu(e.width, a), mu(e.height, o)];
}
function pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Ir(e, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? a = e.x : r === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function ar(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function nC(e, t, n, r, a, o, i) {
  var l = s.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[r] || {}
  }), c = H(l, 2), u = c[0], d = c[1], f = s.useRef(0), v = s.useMemo(function() {
    return t ? _l(t) : [];
  }, [t]), p = s.useRef({}), h = function() {
    p.current = {};
  };
  e || h();
  var g = an(function() {
    if (t && n && e) {
      let On = function(ra, qn) {
        var rr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We, aa = z.x + ra, qa = z.y + qn, oi = aa + G, ii = qa + ae, li = Math.max(aa, rr.left), Me = Math.max(qa, rr.top), Ye = Math.min(oi, rr.right), Ft = Math.min(ii, rr.bottom);
        return Math.max(0, (Ye - li) * (Ft - Me));
      }, xr = function() {
        ht = z.y + ke, At = ht + ae, Kt = z.x + _e, xt = Kt + G;
      };
      var y, $, C, S, x = t, w = x.ownerDocument, E = Wa(x), O = E.getComputedStyle(x), P = O.position, M = x.style.left, I = x.style.top, N = x.style.right, T = x.style.bottom, F = x.style.overflow, j = D(D({}, a[r]), o), A = w.createElement("div");
      (y = x.parentElement) === null || y === void 0 || y.appendChild(A), A.style.left = "".concat(x.offsetLeft, "px"), A.style.top = "".concat(x.offsetTop, "px"), A.style.position = P, A.style.height = "".concat(x.offsetHeight, "px"), A.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var B;
      if (Array.isArray(n))
        B = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var V, L, R = n.getBoundingClientRect();
        R.x = (V = R.x) !== null && V !== void 0 ? V : R.left, R.y = (L = R.y) !== null && L !== void 0 ? L : R.top, B = {
          x: R.x,
          y: R.y,
          width: R.width,
          height: R.height
        };
      }
      var z = x.getBoundingClientRect(), k = E.getComputedStyle(x), q = k.height, ee = k.width;
      z.x = ($ = z.x) !== null && $ !== void 0 ? $ : z.left, z.y = (C = z.y) !== null && C !== void 0 ? C : z.top;
      var re = w.documentElement, Q = re.clientWidth, le = re.clientHeight, oe = re.scrollWidth, de = re.scrollHeight, X = re.scrollTop, K = re.scrollLeft, ae = z.height, G = z.width, ne = B.height, Y = B.width, me = {
        left: 0,
        top: 0,
        right: Q,
        bottom: le
      }, pe = {
        left: -K,
        top: -X,
        right: oe - K,
        bottom: de - X
      }, he = j.htmlRegion, fe = "visible", se = "visibleFirst";
      he !== "scroll" && he !== se && (he = fe);
      var ue = he === se, xe = vu(pe, v), ve = vu(me, v), We = he === fe ? ve : xe, Ae = ue ? ve : We;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var Je = x.getBoundingClientRect();
      x.style.left = M, x.style.top = I, x.style.right = N, x.style.bottom = T, x.style.overflow = F, (S = x.parentElement) === null || S === void 0 || S.removeChild(A);
      var Le = _a(Math.round(G / parseFloat(ee) * 1e3) / 1e3), De = _a(Math.round(ae / parseFloat(q) * 1e3) / 1e3);
      if (Le === 0 || De === 0 || ba(n) && !Af(n))
        return;
      var qe = j.offset, we = j.targetOffset, Ge = gu(z, qe), et = H(Ge, 2), Te = et[0], Fe = et[1], Ue = gu(B, we), Ve = H(Ue, 2), Ct = Ve[0], $t = Ve[1];
      B.x -= Ct, B.y -= $t;
      var Lt = j.points || [], Pt = H(Lt, 2), zt = Pt[0], jt = Pt[1], Et = pu(jt), rt = pu(zt), Ke = Ir(B, Et), yt = Ir(z, rt), st = D({}, j), _e = Ke.x - yt.x + Te, ke = Ke.y - yt.y + Fe, Be = On(_e, ke), ge = On(_e, ke, ve), Z = Ir(B, ["t", "l"]), J = Ir(z, ["t", "l"]), ie = Ir(B, ["b", "r"]), Ee = Ir(z, ["b", "r"]), Ce = j.overflow || {}, Qe = Ce.adjustX, lt = Ce.adjustY, dt = Ce.shiftX, at = Ce.shiftY, ft = function(qn) {
        return typeof qn == "boolean" ? qn : qn >= 0;
      }, ht, At, Kt, xt;
      xr();
      var Rt = ft(lt), ce = rt[0] === Et[0];
      if (Rt && rt[0] === "t" && (At > Ae.bottom || p.current.bt)) {
        var be = ke;
        ce ? be -= ae - ne : be = Z.y - Ee.y - Fe;
        var He = On(_e, be), ot = On(_e, be, ve);
        // Of course use larger one
        He > Be || He === Be && (!ue || // Choose recommend one
        ot >= ge) ? (p.current.bt = !0, ke = be, Fe = -Fe, st.points = [ar(rt, 0), ar(Et, 0)]) : p.current.bt = !1;
      }
      if (Rt && rt[0] === "b" && (ht < Ae.top || p.current.tb)) {
        var Ne = ke;
        ce ? Ne += ae - ne : Ne = ie.y - J.y - Fe;
        var Oe = On(_e, Ne), je = On(_e, Ne, ve);
        // Of course use larger one
        Oe > Be || Oe === Be && (!ue || // Choose recommend one
        je >= ge) ? (p.current.tb = !0, ke = Ne, Fe = -Fe, st.points = [ar(rt, 0), ar(Et, 0)]) : p.current.tb = !1;
      }
      var nt = ft(Qe), gt = rt[1] === Et[1];
      if (nt && rt[1] === "l" && (xt > Ae.right || p.current.rl)) {
        var wt = _e;
        gt ? wt -= G - Y : wt = Z.x - Ee.x - Te;
        var Pe = On(wt, ke), Ze = On(wt, ke, ve);
        // Of course use larger one
        Pe > Be || Pe === Be && (!ue || // Choose recommend one
        Ze >= ge) ? (p.current.rl = !0, _e = wt, Te = -Te, st.points = [ar(rt, 1), ar(Et, 1)]) : p.current.rl = !1;
      }
      if (nt && rt[1] === "r" && (Kt < Ae.left || p.current.lr)) {
        var vt = _e;
        gt ? vt += G - Y : vt = ie.x - J.x - Te;
        var Ht = On(vt, ke), en = On(vt, ke, ve);
        // Of course use larger one
        Ht > Be || Ht === Be && (!ue || // Choose recommend one
        en >= ge) ? (p.current.lr = !0, _e = vt, Te = -Te, st.points = [ar(rt, 1), ar(Et, 1)]) : p.current.lr = !1;
      }
      xr();
      var ln = dt === !0 ? 0 : dt;
      typeof ln == "number" && (Kt < ve.left && (_e -= Kt - ve.left - Te, B.x + Y < ve.left + ln && (_e += B.x - ve.left + Y - ln)), xt > ve.right && (_e -= xt - ve.right - Te, B.x > ve.right - ln && (_e += B.x - ve.right + ln)));
      var fn = at === !0 ? 0 : at;
      typeof fn == "number" && (ht < ve.top && (ke -= ht - ve.top - Fe, B.y + ne < ve.top + fn && (ke += B.y - ve.top + ne - fn)), At > ve.bottom && (ke -= At - ve.bottom - Fe, B.y > ve.bottom - fn && (ke += B.y - ve.bottom + fn)));
      var pn = z.x + _e, En = pn + G, Hn = z.y + ke, Kn = Hn + ae, ct = B.x, Re = ct + Y, Xe = B.y, it = Xe + ne, pt = Math.max(pn, ct), St = Math.min(En, Re), tn = (pt + St) / 2, nn = tn - pn, hn = Math.max(Hn, Xe), Cn = Math.min(Kn, it), bn = (hn + Cn) / 2, yn = bn - Hn;
      i?.(t, st);
      var Jt = Je.right - z.x - (_e + z.width), dr = Je.bottom - z.y - (ke + z.height);
      Le === 1 && (_e = Math.round(_e), Jt = Math.round(Jt)), De === 1 && (ke = Math.round(ke), dr = Math.round(dr));
      var ai = {
        ready: !0,
        offsetX: _e / Le,
        offsetY: ke / De,
        offsetR: Jt / Le,
        offsetB: dr / De,
        arrowX: nn / Le,
        arrowY: yn / De,
        scaleX: Le,
        scaleY: De,
        align: st
      };
      d(ai);
    }
  }), m = function() {
    f.current += 1;
    var $ = f.current;
    Promise.resolve().then(function() {
      f.current === $ && g();
    });
  }, b = function() {
    d(function($) {
      return D(D({}, $), {}, {
        ready: !1
      });
    });
  };
  return Vt(b, [r]), Vt(function() {
    e || b();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, m];
}
function rC(e, t, n, r, a) {
  Vt(function() {
    if (e && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, l = _l(o), c = _l(i), u = Wa(i), d = new Set([u].concat(Se(l), Se(c)));
      return d.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), u.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(v) {
          v.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function aC(e, t, n, r, a, o, i, l) {
  var c = s.useRef(e);
  c.current = e;
  var u = s.useRef(!1);
  s.useEffect(function() {
    if (t && r && (!a || o)) {
      var f = function() {
        u.current = !1;
      }, v = function(C) {
        var S;
        c.current && !i(((S = C.composedPath) === null || S === void 0 || (S = S.call(C)) === null || S === void 0 ? void 0 : S[0]) || C.target) && !u.current && l(!1);
      }, p = Wa(r);
      p.addEventListener("pointerdown", f, !0), p.addEventListener("mousedown", v, !0), p.addEventListener("contextmenu", v, !0);
      var h = Ro(n);
      if (h && (h.addEventListener("mousedown", v, !0), h.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var g, m, b = n == null || (g = n.getRootNode) === null || g === void 0 ? void 0 : g.call(n), y = (m = r.getRootNode) === null || m === void 0 ? void 0 : m.call(r);
        hr(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        p.removeEventListener("pointerdown", f, !0), p.removeEventListener("mousedown", v, !0), p.removeEventListener("contextmenu", v, !0), h && (h.removeEventListener("mousedown", v, !0), h.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, n, r, a, o]);
  function d() {
    u.current = !0;
  }
  return d;
}
var oC = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function iC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vs, t = /* @__PURE__ */ s.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, l = n.action, c = l === void 0 ? "hover" : l, u = n.showAction, d = n.hideAction, f = n.popupVisible, v = n.defaultPopupVisible, p = n.onPopupVisibleChange, h = n.afterPopupVisibleChange, g = n.mouseEnterDelay, m = n.mouseLeaveDelay, b = m === void 0 ? 0.1 : m, y = n.focusDelay, $ = n.blurDelay, C = n.mask, S = n.maskClosable, x = S === void 0 ? !0 : S, w = n.getPopupContainer, E = n.forceRender, O = n.autoDestroy, P = n.destroyPopupOnHide, M = n.popup, I = n.popupClassName, N = n.popupStyle, T = n.popupPlacement, F = n.builtinPlacements, j = F === void 0 ? {} : F, A = n.popupAlign, B = n.zIndex, V = n.stretch, L = n.getPopupClassNameFromAlign, R = n.fresh, z = n.alignPoint, k = n.onPopupClick, q = n.onPopupAlign, ee = n.arrow, re = n.popupMotion, Q = n.maskMotion, le = n.popupTransitionName, oe = n.popupAnimation, de = n.maskTransitionName, X = n.maskAnimation, K = n.className, ae = n.getTriggerDOMNode, G = ut(n, oC), ne = O || P || !1, Y = s.useState(!1), me = H(Y, 2), pe = me[0], he = me[1];
    Vt(function() {
      he(gs());
    }, []);
    var fe = s.useRef({}), se = s.useContext(uu), ue = s.useMemo(function() {
      return {
        registerSubPopup: function(Ye, Ft) {
          fe.current[Ye] = Ft, se?.registerSubPopup(Ye, Ft);
        }
      };
    }, [se]), xe = Qf(), ve = s.useState(null), We = H(ve, 2), Ae = We[0], Je = We[1], Le = s.useRef(null), De = an(function(Me) {
      Le.current = Me, ba(Me) && Ae !== Me && Je(Me), se?.registerSubPopup(xe, Me);
    }), qe = s.useState(null), we = H(qe, 2), Ge = we[0], et = we[1], Te = s.useRef(null), Fe = an(function(Me) {
      ba(Me) && Ge !== Me && (et(Me), Te.current = Me);
    }), Ue = s.Children.only(i), Ve = Ue?.props || {}, Ct = {}, $t = an(function(Me) {
      var Ye, Ft, Qt = Ge;
      return Qt?.contains(Me) || ((Ye = Ro(Qt)) === null || Ye === void 0 ? void 0 : Ye.host) === Me || Me === Qt || Ae?.contains(Me) || ((Ft = Ro(Ae)) === null || Ft === void 0 ? void 0 : Ft.host) === Me || Me === Ae || Object.values(fe.current).some(function(Gt) {
        return Gt?.contains(Me) || Me === Gt;
      });
    }), Lt = fu(o, re, oe, le), Pt = fu(o, Q, X, de), zt = s.useState(v || !1), jt = H(zt, 2), Et = jt[0], rt = jt[1], Ke = f ?? Et, yt = an(function(Me) {
      f === void 0 && rt(Me);
    });
    Vt(function() {
      rt(f || !1);
    }, [f]);
    var st = s.useRef(Ke);
    st.current = Ke;
    var _e = s.useRef([]);
    _e.current = [];
    var ke = an(function(Me) {
      var Ye;
      yt(Me), ((Ye = _e.current[_e.current.length - 1]) !== null && Ye !== void 0 ? Ye : Ke) !== Me && (_e.current.push(Me), p?.(Me));
    }), Be = s.useRef(), ge = function() {
      clearTimeout(Be.current);
    }, Z = function(Ye) {
      var Ft = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      ge(), Ft === 0 ? ke(Ye) : Be.current = setTimeout(function() {
        ke(Ye);
      }, Ft * 1e3);
    };
    s.useEffect(function() {
      return ge;
    }, []);
    var J = s.useState(!1), ie = H(J, 2), Ee = ie[0], Ce = ie[1];
    Vt(function(Me) {
      (!Me || Ke) && Ce(!0);
    }, [Ke]);
    var Qe = s.useState(null), lt = H(Qe, 2), dt = lt[0], at = lt[1], ft = s.useState(null), ht = H(ft, 2), At = ht[0], Kt = ht[1], xt = function(Ye) {
      Kt([Ye.clientX, Ye.clientY]);
    }, Rt = nC(Ke, Ae, z && At !== null ? At : Ge, T, j, A, q), ce = H(Rt, 11), be = ce[0], He = ce[1], ot = ce[2], Ne = ce[3], Oe = ce[4], je = ce[5], nt = ce[6], gt = ce[7], wt = ce[8], Pe = ce[9], Ze = ce[10], vt = ZS(pe, c, u, d), Ht = H(vt, 2), en = Ht[0], ln = Ht[1], fn = en.has("click"), pn = ln.has("click") || ln.has("contextMenu"), En = an(function() {
      Ee || Ze();
    }), Hn = function() {
      st.current && z && pn && Z(!1);
    };
    rC(Ke, Ge, Ae, En, Hn), Vt(function() {
      En();
    }, [At, T]), Vt(function() {
      Ke && !(j != null && j[T]) && En();
    }, [JSON.stringify(A)]);
    var Kn = s.useMemo(function() {
      var Me = tC(j, o, Pe, z);
      return U(Me, L?.(Pe));
    }, [Pe, L, j, o, z]);
    s.useImperativeHandle(r, function() {
      return {
        nativeElement: Te.current,
        popupElement: Le.current,
        forceAlign: En
      };
    });
    var ct = s.useState(0), Re = H(ct, 2), Xe = Re[0], it = Re[1], pt = s.useState(0), St = H(pt, 2), tn = St[0], nn = St[1], hn = function() {
      if (V && Ge) {
        var Ye = Ge.getBoundingClientRect();
        it(Ye.width), nn(Ye.height);
      }
    }, Cn = function() {
      hn(), En();
    }, bn = function(Ye) {
      Ce(!1), Ze(), h?.(Ye);
    }, yn = function() {
      return new Promise(function(Ye) {
        hn(), at(function() {
          return Ye;
        });
      });
    };
    Vt(function() {
      dt && (Ze(), dt(), at(null));
    }, [dt]);
    function Jt(Me, Ye, Ft, Qt) {
      Ct[Me] = function(Gt) {
        var Ua;
        Qt?.(Gt), Z(Ye, Ft);
        for (var si = arguments.length, Gs = new Array(si > 1 ? si - 1 : 0), Xa = 1; Xa < si; Xa++)
          Gs[Xa - 1] = arguments[Xa];
        (Ua = Ve[Me]) === null || Ua === void 0 || Ua.call.apply(Ua, [Ve, Gt].concat(Gs));
      };
    }
    (fn || pn) && (Ct.onClick = function(Me) {
      var Ye;
      st.current && pn ? Z(!1) : !st.current && fn && (xt(Me), Z(!0));
      for (var Ft = arguments.length, Qt = new Array(Ft > 1 ? Ft - 1 : 0), Gt = 1; Gt < Ft; Gt++)
        Qt[Gt - 1] = arguments[Gt];
      (Ye = Ve.onClick) === null || Ye === void 0 || Ye.call.apply(Ye, [Ve, Me].concat(Qt));
    });
    var dr = aC(Ke, pn, Ge, Ae, C, x, $t, Z), ai = en.has("hover"), On = ln.has("hover"), xr, ra;
    ai && (Jt("onMouseEnter", !0, g, function(Me) {
      xt(Me);
    }), Jt("onPointerEnter", !0, g, function(Me) {
      xt(Me);
    }), xr = function(Ye) {
      (Ke || Ee) && Ae !== null && Ae !== void 0 && Ae.contains(Ye.target) && Z(!0, g);
    }, z && (Ct.onMouseMove = function(Me) {
      var Ye;
      (Ye = Ve.onMouseMove) === null || Ye === void 0 || Ye.call(Ve, Me);
    })), On && (Jt("onMouseLeave", !1, b), Jt("onPointerLeave", !1, b), ra = function() {
      Z(!1, b);
    }), en.has("focus") && Jt("onFocus", !0, y), ln.has("focus") && Jt("onBlur", !1, $), en.has("contextMenu") && (Ct.onContextMenu = function(Me) {
      var Ye;
      st.current && ln.has("contextMenu") ? Z(!1) : (xt(Me), Z(!0)), Me.preventDefault();
      for (var Ft = arguments.length, Qt = new Array(Ft > 1 ? Ft - 1 : 0), Gt = 1; Gt < Ft; Gt++)
        Qt[Gt - 1] = arguments[Gt];
      (Ye = Ve.onContextMenu) === null || Ye === void 0 || Ye.call.apply(Ye, [Ve, Me].concat(Qt));
    }), K && (Ct.className = U(Ve.className, K));
    var qn = s.useRef(!1);
    qn.current || (qn.current = E || Ke || Ee);
    var rr = D(D({}, Ve), Ct), aa = {}, qa = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    qa.forEach(function(Me) {
      G[Me] && (aa[Me] = function() {
        for (var Ye, Ft = arguments.length, Qt = new Array(Ft), Gt = 0; Gt < Ft; Gt++)
          Qt[Gt] = arguments[Gt];
        (Ye = rr[Me]) === null || Ye === void 0 || Ye.call.apply(Ye, [rr].concat(Qt)), G[Me].apply(G, Qt);
      });
    });
    var oi = /* @__PURE__ */ s.cloneElement(Ue, D(D({}, rr), aa)), ii = {
      x: je,
      y: nt
    }, li = ee ? D({}, ee !== !0 ? ee : {}) : null;
    return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Nn, {
      disabled: !Ke,
      ref: Fe,
      onResize: Cn
    }, /* @__PURE__ */ s.createElement(pv, {
      getTriggerDOMNode: ae
    }, oi)), qn.current && /* @__PURE__ */ s.createElement(uu.Provider, {
      value: ue
    }, /* @__PURE__ */ s.createElement(gv, {
      portal: e,
      ref: De,
      prefixCls: o,
      popup: M,
      className: U(I, Kn),
      style: N,
      target: Ge,
      onMouseEnter: xr,
      onMouseLeave: ra,
      onPointerEnter: xr,
      zIndex: B,
      open: Ke,
      keepDom: Ee,
      fresh: R,
      onClick: k,
      onPointerDownCapture: dr,
      mask: C,
      motion: Lt,
      maskMotion: Pt,
      onVisibleChanged: bn,
      onPrepare: yn,
      forceRender: E,
      autoDestroy: ne,
      getPopupContainer: w,
      align: Pe,
      arrow: li,
      arrowPos: ii,
      ready: be,
      offsetX: He,
      offsetY: ot,
      offsetR: Ne,
      offsetB: Oe,
      onAlign: En,
      stretch: V,
      targetWidth: Xe / gt,
      targetHeight: tn / wt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Jo = iC(vs);
var lC = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], sC = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, cC = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, o = t.children, i = t.popupElement, l = t.animation, c = t.transitionName, u = t.dropdownStyle, d = t.dropdownClassName, f = t.direction, v = f === void 0 ? "ltr" : f, p = t.placement, h = t.builtinPlacements, g = t.dropdownMatchSelectWidth, m = t.dropdownRender, b = t.dropdownAlign, y = t.getPopupContainer, $ = t.empty, C = t.getTriggerDOMNode, S = t.onPopupVisibleChange, x = t.onPopupMouseEnter, w = ut(t, lC), E = "".concat(r, "-dropdown"), O = i;
  m && (O = m(i));
  var P = s.useMemo(function() {
    return h || sC(g);
  }, [h, g]), M = l ? "".concat(E, "-").concat(l) : c, I = typeof g == "number", N = s.useMemo(function() {
    return I ? null : g === !1 ? "minWidth" : "width";
  }, [g, I]), T = u;
  I && (T = D(D({}, T), {}, {
    width: g
  }));
  var F = s.useRef(null);
  return s.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var A;
        return (A = F.current) === null || A === void 0 ? void 0 : A.popupElement;
      }
    };
  }), /* @__PURE__ */ s.createElement(Jo, ye({}, w, {
    showAction: S ? ["click"] : [],
    hideAction: S ? ["click"] : [],
    popupPlacement: p || (v === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: P,
    prefixCls: E,
    popupTransitionName: M,
    popup: /* @__PURE__ */ s.createElement("div", {
      onMouseEnter: x
    }, O),
    ref: F,
    stretch: N,
    popupAlign: b,
    popupVisible: a,
    getPopupContainer: y,
    popupClassName: U(d, _({}, "".concat(E, "-empty"), $)),
    popupStyle: T,
    getTriggerDOMNode: C,
    onPopupVisibleChange: S
  }), o);
}, hv = /* @__PURE__ */ s.forwardRef(cC);
process.env.NODE_ENV !== "production" && (hv.displayName = "SelectTrigger");
function hu(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Ml(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function bv(e, t) {
  var n = e || {}, r = n.label, a = n.value, o = n.options, i = n.groupLabel, l = r || (t ? "children" : "label");
  return {
    label: l,
    value: a || "value",
    options: o || "options",
    groupLabel: i || l
  };
}
function uC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], o = bv(n, !1), i = o.label, l = o.value, c = o.options, u = o.groupLabel;
  function d(f, v) {
    Array.isArray(f) && f.forEach(function(p) {
      if (v || !(c in p)) {
        var h = p[l];
        a.push({
          key: hu(p, a.length),
          groupOption: v,
          data: p,
          label: p[i],
          value: h
        });
      } else {
        var g = p[u];
        g === void 0 && r && (g = p.label), a.push({
          key: hu(p, a.length),
          group: !0,
          data: p,
          label: g
        }), d(p[c], !0);
      }
    });
  }
  return d(e, !1), a;
}
function Tl(e) {
  var t = D({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return tt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var dC = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var a = !1, o = function l(c, u) {
    var d = qd(u), f = d[0], v = d.slice(1);
    if (!f)
      return [c];
    var p = c.split(f);
    return a = a || p.length > 1, p.reduce(function(h, g) {
      return [].concat(Se(h), Se(l(g, v)));
    }, []).filter(Boolean);
  }, i = o(t, n);
  return a ? typeof r < "u" ? i.slice(0, r) : i : null;
}, bs = /* @__PURE__ */ s.createContext(null);
function fC(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ s.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(a) {
    var o = a.label, i = a.value;
    return ["number", "string"].includes(ze(o)) ? o : i;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var vC = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "prefix", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], mC = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], Do = function(t) {
  return t === "tags" || t === "multiple";
}, yv = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.id, a = e.prefixCls, o = e.className, i = e.showSearch, l = e.tagRender, c = e.direction, u = e.omitDomProps, d = e.displayValues, f = e.onDisplayValuesChange, v = e.emptyOptions, p = e.notFoundContent, h = p === void 0 ? "Not Found" : p, g = e.onClear, m = e.mode, b = e.disabled, y = e.loading, $ = e.getInputElement, C = e.getRawInputElement, S = e.open, x = e.defaultOpen, w = e.onDropdownVisibleChange, E = e.activeValue, O = e.onActiveValueChange, P = e.activeDescendantId, M = e.searchValue, I = e.autoClearSearchValue, N = e.onSearch, T = e.onSearchSplit, F = e.tokenSeparators, j = e.allowClear, A = e.prefix, B = e.suffixIcon, V = e.clearIcon, L = e.OptionList, R = e.animation, z = e.transitionName, k = e.dropdownStyle, q = e.dropdownClassName, ee = e.dropdownMatchSelectWidth, re = e.dropdownRender, Q = e.dropdownAlign, le = e.placement, oe = e.builtinPlacements, de = e.getPopupContainer, X = e.showAction, K = X === void 0 ? [] : X, ae = e.onFocus, G = e.onBlur, ne = e.onKeyUp, Y = e.onKeyDown, me = e.onMouseDown, pe = ut(e, vC), he = Do(m), fe = (i !== void 0 ? i : he) || m === "combobox", se = D({}, pe);
  mC.forEach(function(ct) {
    delete se[ct];
  }), u?.forEach(function(ct) {
    delete se[ct];
  });
  var ue = s.useState(!1), xe = H(ue, 2), ve = xe[0], We = xe[1];
  s.useEffect(function() {
    We(gs());
  }, []);
  var Ae = s.useRef(null), Je = s.useRef(null), Le = s.useRef(null), De = s.useRef(null), qe = s.useRef(null), we = s.useRef(!1), Ge = ES(), et = H(Ge, 3), Te = et[0], Fe = et[1], Ue = et[2];
  s.useImperativeHandle(t, function() {
    var ct, Re;
    return {
      focus: (ct = De.current) === null || ct === void 0 ? void 0 : ct.focus,
      blur: (Re = De.current) === null || Re === void 0 ? void 0 : Re.blur,
      scrollTo: function(it) {
        var pt;
        return (pt = qe.current) === null || pt === void 0 ? void 0 : pt.scrollTo(it);
      },
      nativeElement: Ae.current || Je.current
    };
  });
  var Ve = s.useMemo(function() {
    var ct;
    if (m !== "combobox")
      return M;
    var Re = (ct = d[0]) === null || ct === void 0 ? void 0 : ct.value;
    return typeof Re == "string" || typeof Re == "number" ? String(Re) : "";
  }, [M, m, d]), Ct = m === "combobox" && typeof $ == "function" && $() || null, $t = typeof C == "function" && C(), Lt = Qr(Je, $t == null || (n = $t.props) === null || n === void 0 ? void 0 : n.ref), Pt = s.useState(!1), zt = H(Pt, 2), jt = zt[0], Et = zt[1];
  Vt(function() {
    Et(!0);
  }, []);
  var rt = mn(!1, {
    defaultValue: x,
    value: S
  }), Ke = H(rt, 2), yt = Ke[0], st = Ke[1], _e = jt ? yt : !1, ke = !h && v;
  (b || ke && _e && m === "combobox") && (_e = !1);
  var Be = ke ? !1 : _e, ge = s.useCallback(function(ct) {
    var Re = ct !== void 0 ? ct : !_e;
    b || (st(Re), _e !== Re && w?.(Re));
  }, [b, _e, st, w]), Z = s.useMemo(function() {
    return (F || []).some(function(ct) {
      return [`
`, `\r
`].includes(ct);
    });
  }, [F]), J = s.useContext(bs) || {}, ie = J.maxCount, Ee = J.rawValues, Ce = function(Re, Xe, it) {
    if (!(he && Ml(ie) && Ee?.size >= ie)) {
      var pt = !0, St = Re;
      O?.(null);
      var tn = dC(Re, F, Ml(ie) ? ie - Ee.size : void 0), nn = it ? null : tn;
      return m !== "combobox" && nn && (St = "", T?.(nn), ge(!1), pt = !1), N && Ve !== St && N(St, {
        source: Xe ? "typing" : "effect"
      }), pt;
    }
  }, Qe = function(Re) {
    !Re || !Re.trim() || N(Re, {
      source: "submit"
    });
  };
  s.useEffect(function() {
    !_e && !he && m !== "combobox" && Ce("", !1, !1);
  }, [_e]), s.useEffect(function() {
    yt && b && st(!1), b && !we.current && Fe(!1);
  }, [b]);
  var lt = sv(), dt = H(lt, 2), at = dt[0], ft = dt[1], ht = s.useRef(!1), At = function(Re) {
    var Xe = at(), it = Re.key, pt = it === "Enter";
    if (pt && (m !== "combobox" && Re.preventDefault(), _e || ge(!0)), ft(!!Ve), it === "Backspace" && !Xe && he && !Ve && d.length) {
      for (var St = Se(d), tn = null, nn = St.length - 1; nn >= 0; nn -= 1) {
        var hn = St[nn];
        if (!hn.disabled) {
          St.splice(nn, 1), tn = hn;
          break;
        }
      }
      tn && f(St, {
        type: "remove",
        values: [tn]
      });
    }
    for (var Cn = arguments.length, bn = new Array(Cn > 1 ? Cn - 1 : 0), yn = 1; yn < Cn; yn++)
      bn[yn - 1] = arguments[yn];
    if (_e && (!pt || !ht.current)) {
      var Jt;
      pt && (ht.current = !0), (Jt = qe.current) === null || Jt === void 0 || Jt.onKeyDown.apply(Jt, [Re].concat(bn));
    }
    Y?.apply(void 0, [Re].concat(bn));
  }, Kt = function(Re) {
    for (var Xe = arguments.length, it = new Array(Xe > 1 ? Xe - 1 : 0), pt = 1; pt < Xe; pt++)
      it[pt - 1] = arguments[pt];
    if (_e) {
      var St;
      (St = qe.current) === null || St === void 0 || St.onKeyUp.apply(St, [Re].concat(it));
    }
    Re.key === "Enter" && (ht.current = !1), ne?.apply(void 0, [Re].concat(it));
  }, xt = function(Re) {
    var Xe = d.filter(function(it) {
      return it !== Re;
    });
    f(Xe, {
      type: "remove",
      values: [Re]
    });
  }, Rt = function() {
    ht.current = !1;
  }, ce = s.useRef(!1), be = function() {
    Fe(!0), b || (ae && !ce.current && ae.apply(void 0, arguments), K.includes("focus") && ge(!0)), ce.current = !0;
  }, He = function() {
    we.current = !0, Fe(!1, function() {
      ce.current = !1, we.current = !1, ge(!1);
    }), !b && (Ve && (m === "tags" ? N(Ve, {
      source: "submit"
    }) : m === "multiple" && N("", {
      source: "blur"
    })), G && G.apply(void 0, arguments));
  }, ot = [];
  s.useEffect(function() {
    return function() {
      ot.forEach(function(ct) {
        return clearTimeout(ct);
      }), ot.splice(0, ot.length);
    };
  }, []);
  var Ne = function(Re) {
    var Xe, it = Re.target, pt = (Xe = Le.current) === null || Xe === void 0 ? void 0 : Xe.getPopupElement();
    if (pt && pt.contains(it)) {
      var St = setTimeout(function() {
        var Cn = ot.indexOf(St);
        if (Cn !== -1 && ot.splice(Cn, 1), Ue(), !ve && !pt.contains(document.activeElement)) {
          var bn;
          (bn = De.current) === null || bn === void 0 || bn.focus();
        }
      });
      ot.push(St);
    }
    for (var tn = arguments.length, nn = new Array(tn > 1 ? tn - 1 : 0), hn = 1; hn < tn; hn++)
      nn[hn - 1] = arguments[hn];
    me?.apply(void 0, [Re].concat(nn));
  }, Oe = s.useState({}), je = H(Oe, 2), nt = je[1];
  function gt() {
    nt({});
  }
  var wt;
  $t && (wt = function(Re) {
    ge(Re);
  }), OS(function() {
    var ct;
    return [Ae.current, (ct = Le.current) === null || ct === void 0 ? void 0 : ct.getPopupElement()];
  }, Be, ge, !!$t);
  var Pe = s.useMemo(function() {
    return D(D({}, e), {}, {
      notFoundContent: h,
      open: _e,
      triggerOpen: Be,
      id: r,
      showSearch: fe,
      multiple: he,
      toggleOpen: ge
    });
  }, [e, h, Be, _e, r, fe, he, ge]), Ze = !!B || y, vt;
  Ze && (vt = /* @__PURE__ */ s.createElement(Yo, {
    className: U("".concat(a, "-arrow"), _({}, "".concat(a, "-arrow-loading"), y)),
    customizeIcon: B,
    customizeIconProps: {
      loading: y,
      searchValue: Ve,
      open: _e,
      focused: Te,
      showSearch: fe
    }
  }));
  var Ht = function() {
    var Re;
    g?.(), (Re = De.current) === null || Re === void 0 || Re.focus(), f([], {
      type: "clear",
      values: d
    }), Ce("", !1, !1);
  }, en = xS(a, Ht, d, j, V, b, Ve, m), ln = en.allowClear, fn = en.clearIcon, pn = /* @__PURE__ */ s.createElement(L, {
    ref: qe
  }), En = U(a, o, _(_(_(_(_(_(_(_(_(_({}, "".concat(a, "-focused"), Te), "".concat(a, "-multiple"), he), "".concat(a, "-single"), !he), "".concat(a, "-allow-clear"), j), "".concat(a, "-show-arrow"), Ze), "".concat(a, "-disabled"), b), "".concat(a, "-loading"), y), "".concat(a, "-open"), _e), "".concat(a, "-customize-input"), Ct), "".concat(a, "-show-search"), fe)), Hn = /* @__PURE__ */ s.createElement(hv, {
    ref: Le,
    disabled: b,
    prefixCls: a,
    visible: Be,
    popupElement: pn,
    animation: R,
    transitionName: z,
    dropdownStyle: k,
    dropdownClassName: q,
    direction: c,
    dropdownMatchSelectWidth: ee,
    dropdownRender: re,
    dropdownAlign: Q,
    placement: le,
    builtinPlacements: oe,
    getPopupContainer: de,
    empty: v,
    getTriggerDOMNode: function(Re) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        Je.current || Re
      );
    },
    onPopupVisibleChange: wt,
    onPopupMouseEnter: gt
  }, $t ? /* @__PURE__ */ s.cloneElement($t, {
    ref: Lt
  }) : /* @__PURE__ */ s.createElement(vv, ye({}, e, {
    domRef: Je,
    prefixCls: a,
    inputElement: Ct,
    ref: De,
    id: r,
    prefix: A,
    showSearch: fe,
    autoClearSearchValue: I,
    mode: m,
    activeDescendantId: P,
    tagRender: l,
    values: d,
    open: _e,
    onToggleOpen: ge,
    activeValue: E,
    searchValue: Ve,
    onSearch: Ce,
    onSearchSubmit: Qe,
    onRemove: xt,
    tokenWithEnter: Z,
    onInputBlur: Rt
  }))), Kn;
  return $t ? Kn = Hn : Kn = /* @__PURE__ */ s.createElement("div", ye({
    className: En
  }, se, {
    ref: Ae,
    onMouseDown: Ne,
    onKeyDown: At,
    onKeyUp: Kt,
    onFocus: be,
    onBlur: He
  }), /* @__PURE__ */ s.createElement(fC, {
    visible: Te && !_e,
    values: d
  }), Hn, vt, ln && fn), /* @__PURE__ */ s.createElement(lv.Provider, {
    value: Pe
  }, Kn);
});
process.env.NODE_ENV !== "production" && (yv.displayName = "BaseSelect");
var ys = function() {
  return null;
};
ys.isSelectOptGroup = !0;
var Ss = function() {
  return null;
};
Ss.isSelectOption = !0;
var Sv = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, a = e.offsetX, o = e.children, i = e.prefixCls, l = e.onInnerResize, c = e.innerProps, u = e.rtl, d = e.extra, f = {}, v = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (f = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, v = D(D({}, v), {}, _(_(_(_(_({
    transform: "translateY(".concat(r, "px)")
  }, u ? "marginRight" : "marginLeft", -a), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ s.createElement("div", {
    style: f
  }, /* @__PURE__ */ s.createElement(Nn, {
    onResize: function(h) {
      var g = h.offsetHeight;
      g && l && l();
    }
  }, /* @__PURE__ */ s.createElement("div", ye({
    style: v,
    className: U(_({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, c), o, d)));
});
Sv.displayName = "Filler";
function gC(e) {
  var t = e.children, n = e.setRef, r = s.useCallback(function(a) {
    n(a);
  }, []);
  return /* @__PURE__ */ s.cloneElement(t, {
    ref: r
  });
}
function pC(e, t, n, r, a, o, i, l) {
  var c = l.getKey;
  return e.slice(t, n + 1).map(function(u, d) {
    var f = t + d, v = i(u, f, {
      style: {
        width: r
      },
      offsetX: a
    }), p = c(u);
    return /* @__PURE__ */ s.createElement(gC, {
      key: p,
      setRef: function(g) {
        return o(u, g);
      }
    }, v);
  });
}
function hC(e, t, n) {
  var r = e.length, a = t.length, o, i;
  if (r === 0 && a === 0)
    return null;
  r < a ? (o = e, i = t) : (o = t, i = e);
  var l = {
    __EMPTY_ITEM__: !0
  };
  function c(h) {
    return h !== void 0 ? n(h) : l;
  }
  for (var u = null, d = Math.abs(r - a) !== 1, f = 0; f < i.length; f += 1) {
    var v = c(o[f]), p = c(i[f]);
    if (v !== p) {
      u = f, d = d || v !== c(i[f + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: d
  };
}
function bC(e, t, n) {
  var r = s.useState(e), a = H(r, 2), o = a[0], i = a[1], l = s.useState(null), c = H(l, 2), u = c[0], d = c[1];
  return s.useEffect(function() {
    var f = hC(o || [], e || [], t);
    f?.index !== void 0 && d(e[f.index]), i(e);
  }, [e]), [u];
}
var bu = (typeof navigator > "u" ? "undefined" : ze(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Cv = (function(e, t, n, r) {
  var a = Ie(!1), o = Ie(null);
  function i() {
    clearTimeout(o.current), a.current = !0, o.current = setTimeout(function() {
      a.current = !1;
    }, 50);
  }
  var l = Ie({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return l.current.top = e, l.current.bottom = t, l.current.left = n, l.current.right = r, function(c, u) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = c ? (
      // Pass origin wheel when on the left
      u < 0 && l.current.left || // Pass origin wheel when on the right
      u > 0 && l.current.right
    ) : u < 0 && l.current.top || // Pass origin wheel when on the bottom
    u > 0 && l.current.bottom;
    return d && f ? (clearTimeout(o.current), a.current = !1) : (!f || a.current) && i(), !a.current && f;
  };
});
function yC(e, t, n, r, a, o, i) {
  var l = Ie(0), c = Ie(null), u = Ie(null), d = Ie(!1), f = Cv(t, n, r, a);
  function v(y, $) {
    if (kt.cancel(c.current), !f(!1, $)) {
      var C = y;
      if (!C._virtualHandled)
        C._virtualHandled = !0;
      else
        return;
      l.current += $, u.current = $, bu || C.preventDefault(), c.current = kt(function() {
        var S = d.current ? 10 : 1;
        i(l.current * S, !1), l.current = 0;
      });
    }
  }
  function p(y, $) {
    i($, !0), bu || y.preventDefault();
  }
  var h = Ie(null), g = Ie(null);
  function m(y) {
    if (e) {
      kt.cancel(g.current), g.current = kt(function() {
        h.current = null;
      }, 2);
      var $ = y.deltaX, C = y.deltaY, S = y.shiftKey, x = $, w = C;
      (h.current === "sx" || !h.current && S && C && !$) && (x = C, w = 0, h.current = "sx");
      var E = Math.abs(x), O = Math.abs(w);
      h.current === null && (h.current = o && E > O ? "x" : "y"), h.current === "y" ? v(y, w) : p(y, x);
    }
  }
  function b(y) {
    e && (d.current = y.detail === u.current);
  }
  return [m, b];
}
function SC(e, t, n, r) {
  var a = s.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), o = H(a, 2), i = o[0], l = o[1], c = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, v = i.get(d), p = i.get(f);
    if (v === void 0 || p === void 0)
      for (var h = e.length, g = l.length; g < h; g += 1) {
        var m, b = e[g], y = t(b);
        i.set(y, g);
        var $ = (m = n.get(y)) !== null && m !== void 0 ? m : r;
        if (l[g] = (l[g - 1] || 0) + $, y === d && (v = g), y === f && (p = g), v !== void 0 && p !== void 0)
          break;
      }
    return {
      top: l[v - 1] || 0,
      bottom: l[p]
    };
  };
  return c;
}
var CC = /* @__PURE__ */ (function() {
  function e() {
    Xt(this, e), _(this, "maps", void 0), _(this, "id", 0), _(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Yt(e, [{
    key: "set",
    value: function(n, r) {
      this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function() {
      return this.diffRecords;
    }
  }]), e;
})();
function yu(e) {
  var t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
function $C(e, t, n) {
  var r = s.useState(0), a = H(r, 2), o = a[0], i = a[1], l = Ie(/* @__PURE__ */ new Map()), c = Ie(new CC()), u = Ie(0);
  function d() {
    u.current += 1;
  }
  function f() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    d();
    var h = function() {
      var b = !1;
      l.current.forEach(function(y, $) {
        if (y && y.offsetParent) {
          var C = y.offsetHeight, S = getComputedStyle(y), x = S.marginTop, w = S.marginBottom, E = yu(x), O = yu(w), P = C + E + O;
          c.current.get($) !== P && (c.current.set($, P), b = !0);
        }
      }), b && i(function(y) {
        return y + 1;
      });
    };
    if (p)
      h();
    else {
      u.current += 1;
      var g = u.current;
      Promise.resolve().then(function() {
        g === u.current && h();
      });
    }
  }
  function v(p, h) {
    var g = e(p);
    l.current.get(g), h ? (l.current.set(g, h), f()) : l.current.delete(g);
  }
  return Wt(function() {
    return d;
  }, []), [v, f, c.current, o];
}
var Su = 14 / 15;
function xC(e, t, n) {
  var r = Ie(!1), a = Ie(0), o = Ie(0), i = Ie(null), l = Ie(null), c, u = function(p) {
    if (r.current) {
      var h = Math.ceil(p.touches[0].pageX), g = Math.ceil(p.touches[0].pageY), m = a.current - h, b = o.current - g, y = Math.abs(m) > Math.abs(b);
      y ? a.current = h : o.current = g;
      var $ = n(y, y ? m : b, !1, p);
      $ && p.preventDefault(), clearInterval(l.current), $ && (l.current = setInterval(function() {
        y ? m *= Su : b *= Su;
        var C = Math.floor(y ? m : b);
        (!n(y, C, !0) || Math.abs(C) <= 0.1) && clearInterval(l.current);
      }, 16));
    }
  }, d = function() {
    r.current = !1, c();
  }, f = function(p) {
    c(), p.touches.length === 1 && !r.current && (r.current = !0, a.current = Math.ceil(p.touches[0].pageX), o.current = Math.ceil(p.touches[0].pageY), i.current = p.target, i.current.addEventListener("touchmove", u, {
      passive: !1
    }), i.current.addEventListener("touchend", d, {
      passive: !0
    }));
  };
  c = function() {
    i.current && (i.current.removeEventListener("touchmove", u), i.current.removeEventListener("touchend", d));
  }, Vt(function() {
    return e && t.current.addEventListener("touchstart", f, {
      passive: !0
    }), function() {
      var v;
      (v = t.current) === null || v === void 0 || v.removeEventListener("touchstart", f), c(), clearInterval(l.current);
    };
  }, [e]);
}
function Cu(e) {
  return Math.floor(Math.pow(e, 0.5));
}
function Dl(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function wC(e, t, n) {
  s.useEffect(function() {
    var r = t.current;
    if (e && r) {
      var a = !1, o, i, l = function() {
        kt.cancel(o);
      }, c = function v() {
        l(), o = kt(function() {
          n(i), v();
        });
      }, u = function() {
        a = !1, l();
      }, d = function(p) {
        if (!(p.target.draggable || p.button !== 0)) {
          var h = p;
          h._virtualHandled || (h._virtualHandled = !0, a = !0);
        }
      }, f = function(p) {
        if (a) {
          var h = Dl(p, !1), g = r.getBoundingClientRect(), m = g.top, b = g.bottom;
          if (h <= m) {
            var y = m - h;
            i = -Cu(y), c();
          } else if (h >= b) {
            var $ = h - b;
            i = Cu($), c();
          } else
            l();
        }
      };
      return r.addEventListener("mousedown", d), r.ownerDocument.addEventListener("mouseup", u), r.ownerDocument.addEventListener("mousemove", f), r.ownerDocument.addEventListener("dragend", u), function() {
        r.removeEventListener("mousedown", d), r.ownerDocument.removeEventListener("mouseup", u), r.ownerDocument.removeEventListener("mousemove", f), r.ownerDocument.removeEventListener("dragend", u), l();
      };
    }
  }, [e]);
}
var $u = 10;
function EC(e, t, n, r, a, o, i, l) {
  var c = s.useRef(), u = s.useState(null), d = H(u, 2), f = d[0], v = d[1];
  return Vt(function() {
    if (f && f.times < $u) {
      if (!e.current) {
        v(function(V) {
          return D({}, V);
        });
        return;
      }
      o();
      var p = f.targetAlign, h = f.originAlign, g = f.index, m = f.offset, b = e.current.clientHeight, y = !1, $ = p, C = null;
      if (b) {
        for (var S = p || h, x = 0, w = 0, E = 0, O = Math.min(t.length - 1, g), P = 0; P <= O; P += 1) {
          var M = a(t[P]);
          w = x;
          var I = n.get(M);
          E = w + (I === void 0 ? r : I), x = E;
        }
        for (var N = S === "top" ? m : b - m, T = O; T >= 0; T -= 1) {
          var F = a(t[T]), j = n.get(F);
          if (j === void 0) {
            y = !0;
            break;
          }
          if (N -= j, N <= 0)
            break;
        }
        switch (S) {
          case "top":
            C = w - m;
            break;
          case "bottom":
            C = E - b + m;
            break;
          default: {
            var A = e.current.scrollTop, B = A + b;
            w < A ? $ = "top" : E > B && ($ = "bottom");
          }
        }
        C !== null && i(C), C !== f.lastTop && (y = !0);
      }
      y && v(D(D({}, f), {}, {
        times: f.times + 1,
        targetAlign: $,
        lastTop: C
      }));
    } else process.env.NODE_ENV !== "production" && f?.times === $u && tt(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(p) {
    if (p == null) {
      l();
      return;
    }
    if (kt.cancel(c.current), typeof p == "number")
      i(p);
    else if (p && ze(p) === "object") {
      var h, g = p.align;
      "index" in p ? h = p.index : h = t.findIndex(function(y) {
        return a(y) === p.key;
      });
      var m = p.offset, b = m === void 0 ? 0 : m;
      v({
        times: 0,
        index: h,
        offset: b,
        originAlign: g
      });
    }
  };
}
var jl = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, a = e.scrollOffset, o = e.scrollRange, i = e.onStartMove, l = e.onStopMove, c = e.onScroll, u = e.horizontal, d = e.spinSize, f = e.containerSize, v = e.style, p = e.thumbStyle, h = e.showScrollBar, g = s.useState(!1), m = H(g, 2), b = m[0], y = m[1], $ = s.useState(null), C = H($, 2), S = C[0], x = C[1], w = s.useState(null), E = H(w, 2), O = E[0], P = E[1], M = !r, I = s.useRef(), N = s.useRef(), T = s.useState(h), F = H(T, 2), j = F[0], A = F[1], B = s.useRef(), V = function() {
    h === !0 || h === !1 || (clearTimeout(B.current), A(!0), B.current = setTimeout(function() {
      A(!1);
    }, 3e3));
  }, L = o - f || 0, R = f - d || 0, z = s.useMemo(function() {
    if (a === 0 || L === 0)
      return 0;
    var X = a / L;
    return X * R;
  }, [a, L, R]), k = function(K) {
    K.stopPropagation(), K.preventDefault();
  }, q = s.useRef({
    top: z,
    dragging: b,
    pageY: S,
    startTop: O
  });
  q.current = {
    top: z,
    dragging: b,
    pageY: S,
    startTop: O
  };
  var ee = function(K) {
    y(!0), x(Dl(K, u)), P(q.current.top), i(), K.stopPropagation(), K.preventDefault();
  };
  s.useEffect(function() {
    var X = function(ne) {
      ne.preventDefault();
    }, K = I.current, ae = N.current;
    return K.addEventListener("touchstart", X, {
      passive: !1
    }), ae.addEventListener("touchstart", ee, {
      passive: !1
    }), function() {
      K.removeEventListener("touchstart", X), ae.removeEventListener("touchstart", ee);
    };
  }, []);
  var re = s.useRef();
  re.current = L;
  var Q = s.useRef();
  Q.current = R, s.useEffect(function() {
    if (b) {
      var X, K = function(ne) {
        var Y = q.current, me = Y.dragging, pe = Y.pageY, he = Y.startTop;
        kt.cancel(X);
        var fe = I.current.getBoundingClientRect(), se = f / (u ? fe.width : fe.height);
        if (me) {
          var ue = (Dl(ne, u) - pe) * se, xe = he;
          !M && u ? xe -= ue : xe += ue;
          var ve = re.current, We = Q.current, Ae = We ? xe / We : 0, Je = Math.ceil(Ae * ve);
          Je = Math.max(Je, 0), Je = Math.min(Je, ve), X = kt(function() {
            c(Je, u);
          });
        }
      }, ae = function() {
        y(!1), l();
      };
      return window.addEventListener("mousemove", K, {
        passive: !0
      }), window.addEventListener("touchmove", K, {
        passive: !0
      }), window.addEventListener("mouseup", ae, {
        passive: !0
      }), window.addEventListener("touchend", ae, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", K), window.removeEventListener("touchmove", K), window.removeEventListener("mouseup", ae), window.removeEventListener("touchend", ae), kt.cancel(X);
      };
    }
  }, [b]), s.useEffect(function() {
    return V(), function() {
      clearTimeout(B.current);
    };
  }, [a]), s.useImperativeHandle(t, function() {
    return {
      delayHidden: V
    };
  });
  var le = "".concat(n, "-scrollbar"), oe = {
    position: "absolute",
    visibility: j ? null : "hidden"
  }, de = {
    position: "absolute",
    borderRadius: 99,
    background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
    cursor: "pointer",
    userSelect: "none"
  };
  return u ? (Object.assign(oe, {
    height: 8,
    left: 0,
    right: 0,
    bottom: 0
  }), Object.assign(de, _({
    height: "100%",
    width: d
  }, M ? "left" : "right", z))) : (Object.assign(oe, _({
    width: 8,
    top: 0,
    bottom: 0
  }, M ? "right" : "left", 0)), Object.assign(de, {
    width: "100%",
    height: d,
    top: z
  })), /* @__PURE__ */ s.createElement("div", {
    ref: I,
    className: U(le, _(_(_({}, "".concat(le, "-horizontal"), u), "".concat(le, "-vertical"), !u), "".concat(le, "-visible"), j)),
    style: D(D({}, oe), v),
    onMouseDown: k,
    onMouseMove: V
  }, /* @__PURE__ */ s.createElement("div", {
    ref: N,
    className: U("".concat(le, "-thumb"), _({}, "".concat(le, "-thumb-moving"), b)),
    style: D(D({}, de), p),
    onMouseDown: ee
  }));
});
process.env.NODE_ENV !== "production" && (jl.displayName = "ScrollBar");
var OC = 20;
function xu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, OC), Math.floor(n);
}
var PC = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], RC = [], IC = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function NC(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e.className, o = e.height, i = e.itemHeight, l = e.fullHeight, c = l === void 0 ? !0 : l, u = e.style, d = e.data, f = e.children, v = e.itemKey, p = e.virtual, h = e.direction, g = e.scrollWidth, m = e.component, b = m === void 0 ? "div" : m, y = e.onScroll, $ = e.onVirtualScroll, C = e.onVisibleChange, S = e.innerProps, x = e.extraRender, w = e.styles, E = e.showScrollBar, O = E === void 0 ? "optional" : E, P = ut(e, PC), M = s.useCallback(function(ce) {
    return typeof v == "function" ? v(ce) : ce?.[v];
  }, [v]), I = $C(M), N = H(I, 4), T = N[0], F = N[1], j = N[2], A = N[3], B = !!(p !== !1 && o && i), V = s.useMemo(function() {
    return Object.values(j.maps).reduce(function(ce, be) {
      return ce + be;
    }, 0);
  }, [j.id, j.maps]), L = B && d && (Math.max(i * d.length, V) > o || !!g), R = h === "rtl", z = U(r, _({}, "".concat(r, "-rtl"), R), a), k = d || RC, q = Ie(), ee = Ie(), re = Ie(), Q = _t(0), le = H(Q, 2), oe = le[0], de = le[1], X = _t(0), K = H(X, 2), ae = K[0], G = K[1], ne = _t(!1), Y = H(ne, 2), me = Y[0], pe = Y[1], he = function() {
    pe(!0);
  }, fe = function() {
    pe(!1);
  }, se = {
    getKey: M
  };
  function ue(ce) {
    de(function(be) {
      var He;
      typeof ce == "function" ? He = ce(be) : He = ce;
      var ot = Et(He);
      return q.current.scrollTop = ot, ot;
    });
  }
  var xe = Ie({
    start: 0,
    end: k.length
  }), ve = Ie(), We = bC(k, M), Ae = H(We, 1), Je = Ae[0];
  ve.current = Je;
  var Le = s.useMemo(function() {
    if (!B)
      return {
        scrollHeight: void 0,
        start: 0,
        end: k.length - 1,
        offset: void 0
      };
    if (!L) {
      var ce;
      return {
        scrollHeight: ((ce = ee.current) === null || ce === void 0 ? void 0 : ce.offsetHeight) || 0,
        start: 0,
        end: k.length - 1,
        offset: void 0
      };
    }
    for (var be = 0, He, ot, Ne, Oe = k.length, je = 0; je < Oe; je += 1) {
      var nt = k[je], gt = M(nt), wt = j.get(gt), Pe = be + (wt === void 0 ? i : wt);
      Pe >= oe && He === void 0 && (He = je, ot = be), Pe > oe + o && Ne === void 0 && (Ne = je), be = Pe;
    }
    return He === void 0 && (He = 0, ot = 0, Ne = Math.ceil(o / i)), Ne === void 0 && (Ne = k.length - 1), Ne = Math.min(Ne + 1, k.length - 1), {
      scrollHeight: be,
      start: He,
      end: Ne,
      offset: ot
    };
  }, [L, B, oe, k, A, o]), De = Le.scrollHeight, qe = Le.start, we = Le.end, Ge = Le.offset;
  xe.current.start = qe, xe.current.end = we, s.useLayoutEffect(function() {
    var ce = j.getRecord();
    if (ce.size === 1) {
      var be = Array.from(ce.keys())[0], He = ce.get(be), ot = k[qe];
      if (ot && He === void 0) {
        var Ne = M(ot);
        if (Ne === be) {
          var Oe = j.get(be), je = Oe - i;
          ue(function(nt) {
            return nt + je;
          });
        }
      }
    }
    j.resetRecord();
  }, [De]);
  var et = s.useState({
    width: 0,
    height: o
  }), Te = H(et, 2), Fe = Te[0], Ue = Te[1], Ve = function(be) {
    Ue({
      width: be.offsetWidth,
      height: be.offsetHeight
    });
  }, Ct = Ie(), $t = Ie(), Lt = s.useMemo(function() {
    return xu(Fe.width, g);
  }, [Fe.width, g]), Pt = s.useMemo(function() {
    return xu(Fe.height, De);
  }, [Fe.height, De]), zt = De - o, jt = Ie(zt);
  jt.current = zt;
  function Et(ce) {
    var be = ce;
    return Number.isNaN(jt.current) || (be = Math.min(be, jt.current)), be = Math.max(be, 0), be;
  }
  var rt = oe <= 0, Ke = oe >= zt, yt = ae <= 0, st = ae >= g, _e = Cv(rt, Ke, yt, st), ke = function() {
    return {
      x: R ? -ae : ae,
      y: oe
    };
  }, Be = Ie(ke()), ge = an(function(ce) {
    if ($) {
      var be = D(D({}, ke()), ce);
      (Be.current.x !== be.x || Be.current.y !== be.y) && ($(be), Be.current = be);
    }
  });
  function Z(ce, be) {
    var He = ce;
    be ? (zi(function() {
      G(He);
    }), ge()) : ue(He);
  }
  function J(ce) {
    var be = ce.currentTarget.scrollTop;
    be !== oe && ue(be), y?.(ce), ge();
  }
  var ie = function(be) {
    var He = be, ot = g ? g - Fe.width : 0;
    return He = Math.max(He, 0), He = Math.min(He, ot), He;
  }, Ee = an(function(ce, be) {
    be ? (zi(function() {
      G(function(He) {
        var ot = He + (R ? -ce : ce);
        return ie(ot);
      });
    }), ge()) : ue(function(He) {
      var ot = He + ce;
      return ot;
    });
  }), Ce = yC(B, rt, Ke, yt, st, !!g, Ee), Qe = H(Ce, 2), lt = Qe[0], dt = Qe[1];
  xC(B, q, function(ce, be, He, ot) {
    var Ne = ot;
    return _e(ce, be, He) ? !1 : !Ne || !Ne._virtualHandled ? (Ne && (Ne._virtualHandled = !0), lt({
      preventDefault: function() {
      },
      deltaX: ce ? be : 0,
      deltaY: ce ? 0 : be
    }), !0) : !1;
  }), wC(L, q, function(ce) {
    ue(function(be) {
      return be + ce;
    });
  }), Vt(function() {
    function ce(He) {
      var ot = rt && He.detail < 0, Ne = Ke && He.detail > 0;
      B && !ot && !Ne && He.preventDefault();
    }
    var be = q.current;
    return be.addEventListener("wheel", lt, {
      passive: !1
    }), be.addEventListener("DOMMouseScroll", dt, {
      passive: !0
    }), be.addEventListener("MozMousePixelScroll", ce, {
      passive: !1
    }), function() {
      be.removeEventListener("wheel", lt), be.removeEventListener("DOMMouseScroll", dt), be.removeEventListener("MozMousePixelScroll", ce);
    };
  }, [B, rt, Ke]), Vt(function() {
    if (g) {
      var ce = ie(ae);
      G(ce), ge({
        x: ce
      });
    }
  }, [Fe.width, g]);
  var at = function() {
    var be, He;
    (be = Ct.current) === null || be === void 0 || be.delayHidden(), (He = $t.current) === null || He === void 0 || He.delayHidden();
  }, ft = EC(q, k, j, i, M, function() {
    return F(!0);
  }, ue, at);
  s.useImperativeHandle(t, function() {
    return {
      nativeElement: re.current,
      getScrollInfo: ke,
      scrollTo: function(be) {
        function He(ot) {
          return ot && ze(ot) === "object" && ("left" in ot || "top" in ot);
        }
        He(be) ? (be.left !== void 0 && G(ie(be.left)), ft(be.top)) : ft(be);
      }
    };
  }), Vt(function() {
    if (C) {
      var ce = k.slice(qe, we + 1);
      C(ce, k);
    }
  }, [qe, we, k]);
  var ht = SC(k, M, j, i), At = x?.({
    start: qe,
    end: we,
    virtual: L,
    offsetX: ae,
    offsetY: Ge,
    rtl: R,
    getSize: ht
  }), Kt = pC(k, qe, we, g, ae, T, f, se), xt = null;
  o && (xt = D(_({}, c ? "height" : "maxHeight", o), IC), B && (xt.overflowY = "hidden", g && (xt.overflowX = "hidden"), me && (xt.pointerEvents = "none")));
  var Rt = {};
  return R && (Rt.dir = "rtl"), /* @__PURE__ */ s.createElement("div", ye({
    ref: re,
    style: D(D({}, u), {}, {
      position: "relative"
    }),
    className: z
  }, Rt, P), /* @__PURE__ */ s.createElement(Nn, {
    onResize: Ve
  }, /* @__PURE__ */ s.createElement(b, {
    className: "".concat(r, "-holder"),
    style: xt,
    ref: q,
    onScroll: J,
    onMouseEnter: at
  }, /* @__PURE__ */ s.createElement(Sv, {
    prefixCls: r,
    height: De,
    offsetX: ae,
    offsetY: Ge,
    scrollWidth: g,
    onInnerResize: F,
    ref: ee,
    innerProps: S,
    rtl: R,
    extra: At
  }, Kt))), L && De > o && /* @__PURE__ */ s.createElement(jl, {
    ref: Ct,
    prefixCls: r,
    scrollOffset: oe,
    scrollRange: De,
    rtl: R,
    onScroll: Z,
    onStartMove: he,
    onStopMove: fe,
    spinSize: Pt,
    containerSize: Fe.height,
    style: w?.verticalScrollBar,
    thumbStyle: w?.verticalScrollBarThumb,
    showScrollBar: O
  }), L && g > Fe.width && /* @__PURE__ */ s.createElement(jl, {
    ref: $t,
    prefixCls: r,
    scrollOffset: ae,
    scrollRange: g,
    rtl: R,
    onScroll: Z,
    onStartMove: he,
    onStopMove: fe,
    spinSize: Lt,
    containerSize: Fe.width,
    horizontal: !0,
    style: w?.horizontalScrollBar,
    thumbStyle: w?.horizontalScrollBarThumb,
    showScrollBar: O
  }));
}
var $v = /* @__PURE__ */ s.forwardRef(NC);
$v.displayName = "List";
function _C() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var MC = ["disabled", "title", "children", "style", "className"];
function wu(e) {
  return typeof e == "string" || typeof e == "number";
}
var TC = function(t, n) {
  var r = wS(), a = r.prefixCls, o = r.id, i = r.open, l = r.multiple, c = r.mode, u = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, v = r.onPopupScroll, p = s.useContext(bs), h = p.maxCount, g = p.flattenOptions, m = p.onActiveValue, b = p.defaultActiveFirstOption, y = p.onSelect, $ = p.menuItemSelectedIcon, C = p.rawValues, S = p.fieldNames, x = p.virtual, w = p.direction, E = p.listHeight, O = p.listItemHeight, P = p.optionRender, M = "".concat(a, "-item"), I = Da(function() {
    return g;
  }, [i, g], function(X, K) {
    return K[0] && X[1] !== K[1];
  }), N = s.useRef(null), T = s.useMemo(function() {
    return l && Ml(h) && C?.size >= h;
  }, [l, h, C?.size]), F = function(K) {
    K.preventDefault();
  }, j = function(K) {
    var ae;
    (ae = N.current) === null || ae === void 0 || ae.scrollTo(typeof K == "number" ? {
      index: K
    } : K);
  }, A = s.useCallback(function(X) {
    return c === "combobox" ? !1 : C.has(X);
  }, [c, Se(C).toString(), C.size]), B = function(K) {
    for (var ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, G = I.length, ne = 0; ne < G; ne += 1) {
      var Y = (K + ne * ae + G) % G, me = I[Y] || {}, pe = me.group, he = me.data;
      if (!pe && !(he != null && he.disabled) && (A(he.value) || !T))
        return Y;
    }
    return -1;
  }, V = s.useState(function() {
    return B(0);
  }), L = H(V, 2), R = L[0], z = L[1], k = function(K) {
    var ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    z(K);
    var G = {
      source: ae ? "keyboard" : "mouse"
    }, ne = I[K];
    if (!ne) {
      m(null, -1, G);
      return;
    }
    m(ne.value, K, G);
  };
  Wt(function() {
    k(b !== !1 ? B(0) : -1);
  }, [I.length, u]);
  var q = s.useCallback(function(X) {
    return c === "combobox" ? String(X).toLowerCase() === u.toLowerCase() : C.has(X);
  }, [c, u, Se(C).toString(), C.size]);
  Wt(function() {
    var X = setTimeout(function() {
      if (!l && i && C.size === 1) {
        var ae = Array.from(C)[0], G = I.findIndex(function(ne) {
          var Y = ne.data;
          return u ? String(Y.value).startsWith(u) : Y.value === ae;
        });
        G !== -1 && (k(G), j(G));
      }
    });
    if (i) {
      var K;
      (K = N.current) === null || K === void 0 || K.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(X);
    };
  }, [i, u]);
  var ee = function(K) {
    K !== void 0 && y(K, {
      selected: !C.has(K)
    }), l || d(!1);
  };
  if (s.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(K) {
        var ae = K.which, G = K.ctrlKey;
        switch (ae) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case $e.N:
          case $e.P:
          case $e.UP:
          case $e.DOWN: {
            var ne = 0;
            if (ae === $e.UP ? ne = -1 : ae === $e.DOWN ? ne = 1 : _C() && G && (ae === $e.N ? ne = 1 : ae === $e.P && (ne = -1)), ne !== 0) {
              var Y = B(R + ne, ne);
              j(Y), k(Y, !0);
            }
            break;
          }
          // >>> Select (Tab / Enter)
          case $e.TAB:
          case $e.ENTER: {
            var me, pe = I[R];
            pe && !(pe != null && (me = pe.data) !== null && me !== void 0 && me.disabled) && !T ? ee(pe.value) : ee(void 0), i && K.preventDefault();
            break;
          }
          // >>> Close
          case $e.ESC:
            d(!1), i && K.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(K) {
        j(K);
      }
    };
  }), I.length === 0)
    return /* @__PURE__ */ s.createElement("div", {
      role: "listbox",
      id: "".concat(o, "_list"),
      className: "".concat(M, "-empty"),
      onMouseDown: F
    }, f);
  var re = Object.keys(S).map(function(X) {
    return S[X];
  }), Q = function(K) {
    return K.label;
  };
  function le(X, K) {
    var ae = X.group;
    return {
      role: ae ? "presentation" : "option",
      id: "".concat(o, "_list_").concat(K)
    };
  }
  var oe = function(K) {
    var ae = I[K];
    if (!ae)
      return null;
    var G = ae.data || {}, ne = G.value, Y = ae.group, me = Na(G, !0), pe = Q(ae);
    return ae ? /* @__PURE__ */ s.createElement("div", ye({
      "aria-label": typeof pe == "string" && !Y ? pe : null
    }, me, {
      key: K
    }, le(ae, K), {
      "aria-selected": q(ne)
    }), ne) : null;
  }, de = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, x && /* @__PURE__ */ s.createElement("div", ye({}, de, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), oe(R - 1), oe(R), oe(R + 1)), /* @__PURE__ */ s.createElement($v, {
    itemKey: "key",
    ref: N,
    data: I,
    height: E,
    itemHeight: O,
    fullHeight: !1,
    onMouseDown: F,
    onScroll: v,
    virtual: x,
    direction: w,
    innerProps: x ? null : de
  }, function(X, K) {
    var ae = X.group, G = X.groupOption, ne = X.data, Y = X.label, me = X.value, pe = ne.key;
    if (ae) {
      var he, fe = (he = ne.title) !== null && he !== void 0 ? he : wu(Y) ? Y.toString() : void 0;
      return /* @__PURE__ */ s.createElement("div", {
        className: U(M, "".concat(M, "-group"), ne.className),
        title: fe
      }, Y !== void 0 ? Y : pe);
    }
    var se = ne.disabled, ue = ne.title;
    ne.children;
    var xe = ne.style, ve = ne.className, We = ut(ne, MC), Ae = nr(We, re), Je = A(me), Le = se || !Je && T, De = "".concat(M, "-option"), qe = U(M, De, ve, _(_(_(_({}, "".concat(De, "-grouped"), G), "".concat(De, "-active"), R === K && !Le), "".concat(De, "-disabled"), Le), "".concat(De, "-selected"), Je)), we = Q(X), Ge = !$ || typeof $ == "function" || Je, et = typeof we == "number" ? we : we || me, Te = wu(et) ? et.toString() : void 0;
    return ue !== void 0 && (Te = ue), /* @__PURE__ */ s.createElement("div", ye({}, Na(Ae), x ? {} : le(X, K), {
      "aria-selected": q(me),
      className: qe,
      title: Te,
      onMouseMove: function() {
        R === K || Le || k(K);
      },
      onClick: function() {
        Le || ee(me);
      },
      style: xe
    }), /* @__PURE__ */ s.createElement("div", {
      className: "".concat(De, "-content")
    }, typeof P == "function" ? P(X, {
      index: K
    }) : et), /* @__PURE__ */ s.isValidElement($) || Je, Ge && /* @__PURE__ */ s.createElement(Yo, {
      className: "".concat(M, "-option-state"),
      customizeIcon: $,
      customizeIconProps: {
        value: me,
        disabled: Le,
        isSelected: Je
      }
    }, Je ? "✓" : null));
  }));
}, xv = /* @__PURE__ */ s.forwardRef(TC);
process.env.NODE_ENV !== "production" && (xv.displayName = "OptionList");
const DC = (function(e, t) {
  var n = s.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = s.useMemo(function() {
    var o = n.current, i = o.values, l = o.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var v;
        return D(D({}, f), {}, {
          label: (v = i.get(f.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return f;
    }), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      u.set(f.value, f), d.set(f.value, t.get(f.value) || l.get(f.value));
    }), n.current.values = u, n.current.options = d, c;
  }, [e, t]), a = s.useCallback(function(o) {
    return t.get(o) || n.current.options.get(o);
  }, [t]);
  return [r, a];
});
function Ii(e, t) {
  return hs(e).join("").toUpperCase().includes(t);
}
const jC = (function(e, t, n, r, a) {
  return s.useMemo(function() {
    if (!n || r === !1)
      return e;
    var o = t.options, i = t.label, l = t.value, c = [], u = typeof r == "function", d = n.toUpperCase(), f = u ? r : function(p, h) {
      return a ? Ii(h[a], d) : h[o] ? Ii(h[i !== "children" ? i : "label"], d) : Ii(h[l], d);
    }, v = u ? function(p) {
      return Tl(p);
    } : function(p) {
      return p;
    };
    return e.forEach(function(p) {
      if (p[o]) {
        var h = f(n, v(p));
        if (h)
          c.push(p);
        else {
          var g = p[o].filter(function(m) {
            return f(n, v(m));
          });
          g.length && c.push(D(D({}, p), {}, _({}, o, g)));
        }
        return;
      }
      f(n, v(p)) && c.push(p);
    }), c;
  }, [e, r, a, n, t]);
});
var Eu = 0, zC = process.env.NODE_ENV !== "test" && vn();
function AC() {
  var e;
  return zC ? (e = Eu, Eu += 1) : e = "TEST_OR_SSR", e;
}
function LC(e) {
  var t = s.useState(), n = H(t, 2), r = n[0], a = n[1];
  return s.useEffect(function() {
    a("rc_select_".concat(AC()));
  }, []), e || r;
}
var FC = ["children", "value"], VC = ["children"];
function BC(e) {
  var t = e, n = t.key, r = t.props, a = r.children, o = r.value, i = ut(r, FC);
  return D({
    key: n,
    value: o !== void 0 ? o : n,
    children: a
  }, i);
}
function Cs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Fn(e).map(function(n, r) {
    if (!/* @__PURE__ */ s.isValidElement(n) || !n.type)
      return null;
    var a = n, o = a.type.isSelectOptGroup, i = a.key, l = a.props, c = l.children, u = ut(l, VC);
    return t || !o ? BC(n) : D(D({
      key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"),
      label: i
    }, u), {}, {
      options: Cs(c)
    });
  }).filter(function(n) {
    return n;
  });
}
var HC = function(t, n, r, a, o) {
  return s.useMemo(function() {
    var i = t, l = !t;
    l && (i = Cs(n));
    var c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = function(p, h, g) {
      g && typeof g == "string" && p.set(h[g], h);
    }, f = function v(p) {
      for (var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0; g < p.length; g += 1) {
        var m = p[g];
        !m[r.options] || h ? (c.set(m[r.value], m), d(u, m, r.label), d(u, m, a), d(u, m, o)) : v(m[r.options], !0);
      }
    };
    return f(i), {
      options: i,
      valueOptions: c,
      labelOptions: u
    };
  }, [t, n, r, a, o]);
};
function Ou(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function WC(e) {
  var t = e.mode, n = e.options, r = e.children, a = e.backfill, o = e.allowClear, i = e.placeholder, l = e.getInputElement, c = e.showSearch, u = e.onSearch, d = e.defaultOpen, f = e.autoFocus, v = e.labelInValue, p = e.value, h = e.inputValue, g = e.optionLabelProp, m = Do(t), b = c !== void 0 ? c : m || t === "combobox", y = n || Cs(r);
  if (tt(t !== "tags" || y.every(function(x) {
    return !x.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var $ = y.some(function(x) {
      return x.options ? x.options.some(function(w) {
        return typeof ("value" in w ? w.value : w.key) == "number";
      }) : typeof ("value" in x ? x.value : x.key) == "number";
    });
    tt(!$, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (tt(t !== "combobox" || !g, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), tt(t === "combobox" || !a, "`backfill` only works with `combobox` mode."), tt(t === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), Li(t !== "combobox" || !l || !o || !i, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !b && t !== "combobox" && t !== "tags" && tt(!1, "`onSearch` should work with `showSearch` instead of use alone."), Li(!d || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), p != null) {
    var C = hs(p);
    tt(!v || C.every(function(x) {
      return ze(x) === "object" && ("key" in x || "value" in x);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), tt(!m || Array.isArray(p), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var S = null;
    Fn(r).some(function(x) {
      if (!/* @__PURE__ */ s.isValidElement(x) || !x.type)
        return !1;
      var w = x, E = w.type;
      if (E.isSelectOption)
        return !1;
      if (E.isSelectOptGroup) {
        var O = Fn(x.props.children).every(function(P) {
          return !/* @__PURE__ */ s.isValidElement(P) || !x.type || P.type.isSelectOption ? !0 : (S = P.type, !1);
        });
        return !O;
      }
      return S = E, !0;
    }), S && tt(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(S.displayName || S.name || S, "`.")), tt(h === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function kC(e, t) {
  if (e) {
    var n = function r(a) {
      for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = 0; i < a.length; i++) {
        var l = a[i];
        if (l[t?.value] === null)
          return tt(!1, "`value` in Select options should not be `null`."), !0;
        if (!o && Array.isArray(l[t?.options]) && r(l[t?.options], !0))
          break;
      }
    };
    n(e);
  }
}
var GC = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], KC = ["inputValue"];
function qC(e) {
  return !e || ze(e) !== "object";
}
var wv = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, a = e.prefixCls, o = a === void 0 ? "rc-select" : a, i = e.backfill, l = e.fieldNames, c = e.inputValue, u = e.searchValue, d = e.onSearch, f = e.autoClearSearchValue, v = f === void 0 ? !0 : f, p = e.onSelect, h = e.onDeselect, g = e.dropdownMatchSelectWidth, m = g === void 0 ? !0 : g, b = e.filterOption, y = e.filterSort, $ = e.optionFilterProp, C = e.optionLabelProp, S = e.options, x = e.optionRender, w = e.children, E = e.defaultActiveFirstOption, O = e.menuItemSelectedIcon, P = e.virtual, M = e.direction, I = e.listHeight, N = I === void 0 ? 200 : I, T = e.listItemHeight, F = T === void 0 ? 20 : T, j = e.labelRender, A = e.value, B = e.defaultValue, V = e.labelInValue, L = e.onChange, R = e.maxCount, z = ut(e, GC), k = LC(n), q = Do(r), ee = !!(!S && w), re = s.useMemo(function() {
    return b === void 0 && r === "combobox" ? !1 : b;
  }, [b, r]), Q = s.useMemo(
    function() {
      return bv(l, ee);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(l),
      ee
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), le = mn("", {
    value: u !== void 0 ? u : c,
    postState: function(Z) {
      return Z || "";
    }
  }), oe = H(le, 2), de = oe[0], X = oe[1], K = HC(S, w, Q, $, C), ae = K.valueOptions, G = K.labelOptions, ne = K.options, Y = s.useCallback(function(ge) {
    var Z = hs(ge);
    return Z.map(function(J) {
      var ie, Ee, Ce, Qe, lt;
      if (qC(J))
        ie = J;
      else {
        var dt;
        Ce = J.key, Ee = J.label, ie = (dt = J.value) !== null && dt !== void 0 ? dt : Ce;
      }
      var at = ae.get(ie);
      if (at) {
        var ft;
        if (Ee === void 0 && (Ee = at?.[C || Q.label]), Ce === void 0 && (Ce = (ft = at?.key) !== null && ft !== void 0 ? ft : ie), Qe = at?.disabled, lt = at?.title, process.env.NODE_ENV !== "production" && !C) {
          var ht = at?.[Q.label];
          ht !== void 0 && !/* @__PURE__ */ s.isValidElement(ht) && !/* @__PURE__ */ s.isValidElement(Ee) && ht !== Ee && tt(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: Ee,
        value: ie,
        key: Ce,
        disabled: Qe,
        title: lt
      };
    });
  }, [Q, C, ae]), me = mn(B, {
    value: A
  }), pe = H(me, 2), he = pe[0], fe = pe[1], se = s.useMemo(function() {
    var ge, Z = q && he === null ? [] : he, J = Y(Z);
    return r === "combobox" && GS((ge = J[0]) === null || ge === void 0 ? void 0 : ge.value) ? [] : J;
  }, [he, Y, r, q]), ue = DC(se, ae), xe = H(ue, 2), ve = xe[0], We = xe[1], Ae = s.useMemo(function() {
    if (!r && ve.length === 1) {
      var ge = ve[0];
      if (ge.value === null && (ge.label === null || ge.label === void 0))
        return [];
    }
    return ve.map(function(Z) {
      var J;
      return D(D({}, Z), {}, {
        label: (J = typeof j == "function" ? j(Z) : Z.label) !== null && J !== void 0 ? J : Z.value
      });
    });
  }, [r, ve, j]), Je = s.useMemo(function() {
    return new Set(ve.map(function(ge) {
      return ge.value;
    }));
  }, [ve]);
  s.useEffect(function() {
    if (r === "combobox") {
      var ge, Z = (ge = ve[0]) === null || ge === void 0 ? void 0 : ge.value;
      X(kS(Z) ? String(Z) : "");
    }
  }, [ve]);
  var Le = Ou(function(ge, Z) {
    var J = Z ?? ge;
    return _(_({}, Q.value, ge), Q.label, J);
  }), De = s.useMemo(function() {
    if (r !== "tags")
      return ne;
    var ge = Se(ne), Z = function(ie) {
      return ae.has(ie);
    };
    return Se(ve).sort(function(J, ie) {
      return J.value < ie.value ? -1 : 1;
    }).forEach(function(J) {
      var ie = J.value;
      Z(ie) || ge.push(Le(ie, J.label));
    }), ge;
  }, [Le, ne, ae, ve, r]), qe = jC(De, Q, de, re, $), we = s.useMemo(function() {
    return r !== "tags" || !de || qe.some(function(ge) {
      return ge[$ || "value"] === de;
    }) || qe.some(function(ge) {
      return ge[Q.value] === de;
    }) ? qe : [Le(de)].concat(Se(qe));
  }, [Le, $, r, qe, de, Q]), Ge = function ge(Z) {
    var J = Se(Z).sort(function(ie, Ee) {
      return y(ie, Ee, {
        searchValue: de
      });
    });
    return J.map(function(ie) {
      return Array.isArray(ie.options) ? D(D({}, ie), {}, {
        options: ie.options.length > 0 ? ge(ie.options) : ie.options
      }) : ie;
    });
  }, et = s.useMemo(function() {
    return y ? Ge(we) : we;
  }, [we, y, de]), Te = s.useMemo(function() {
    return uC(et, {
      fieldNames: Q,
      childrenAsData: ee
    });
  }, [et, Q, ee]), Fe = function(Z) {
    var J = Y(Z);
    if (fe(J), L && // Trigger event only when value changed
    (J.length !== ve.length || J.some(function(Ce, Qe) {
      var lt;
      return ((lt = ve[Qe]) === null || lt === void 0 ? void 0 : lt.value) !== Ce?.value;
    }))) {
      var ie = V ? J : J.map(function(Ce) {
        return Ce.value;
      }), Ee = J.map(function(Ce) {
        return Tl(We(Ce.value));
      });
      L(
        // Value
        q ? ie : ie[0],
        // Option
        q ? Ee : Ee[0]
      );
    }
  }, Ue = s.useState(null), Ve = H(Ue, 2), Ct = Ve[0], $t = Ve[1], Lt = s.useState(0), Pt = H(Lt, 2), zt = Pt[0], jt = Pt[1], Et = E !== void 0 ? E : r !== "combobox", rt = s.useCallback(function(ge, Z) {
    var J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ie = J.source, Ee = ie === void 0 ? "keyboard" : ie;
    jt(Z), i && r === "combobox" && ge !== null && Ee === "keyboard" && $t(String(ge));
  }, [i, r]), Ke = function(Z, J, ie) {
    var Ee = function() {
      var xt, Rt = We(Z);
      return [V ? {
        label: Rt?.[Q.label],
        value: Z,
        key: (xt = Rt?.key) !== null && xt !== void 0 ? xt : Z
      } : Z, Tl(Rt)];
    };
    if (J && p) {
      var Ce = Ee(), Qe = H(Ce, 2), lt = Qe[0], dt = Qe[1];
      p(lt, dt);
    } else if (!J && h && ie !== "clear") {
      var at = Ee(), ft = H(at, 2), ht = ft[0], At = ft[1];
      h(ht, At);
    }
  }, yt = Ou(function(ge, Z) {
    var J, ie = q ? Z.selected : !0;
    ie ? J = q ? [].concat(Se(ve), [ge]) : [ge] : J = ve.filter(function(Ee) {
      return Ee.value !== ge;
    }), Fe(J), Ke(ge, ie), r === "combobox" ? $t("") : (!Do || v) && (X(""), $t(""));
  }), st = function(Z, J) {
    Fe(Z);
    var ie = J.type, Ee = J.values;
    (ie === "remove" || ie === "clear") && Ee.forEach(function(Ce) {
      Ke(Ce.value, !1, ie);
    });
  }, _e = function(Z, J) {
    if (X(Z), $t(null), J.source === "submit") {
      var ie = (Z || "").trim();
      if (ie) {
        var Ee = Array.from(new Set([].concat(Se(Je), [ie])));
        Fe(Ee), Ke(ie, !0), X("");
      }
      return;
    }
    J.source !== "blur" && (r === "combobox" && Fe(Z), d?.(Z));
  }, ke = function(Z) {
    var J = Z;
    r !== "tags" && (J = Z.map(function(Ee) {
      var Ce = G.get(Ee);
      return Ce?.value;
    }).filter(function(Ee) {
      return Ee !== void 0;
    }));
    var ie = Array.from(new Set([].concat(Se(Je), Se(J))));
    Fe(ie), ie.forEach(function(Ee) {
      Ke(Ee, !0);
    });
  }, Be = s.useMemo(function() {
    var ge = P !== !1 && m !== !1;
    return D(D({}, K), {}, {
      flattenOptions: Te,
      onActiveValue: rt,
      defaultActiveFirstOption: Et,
      onSelect: yt,
      menuItemSelectedIcon: O,
      rawValues: Je,
      fieldNames: Q,
      virtual: ge,
      direction: M,
      listHeight: N,
      listItemHeight: F,
      childrenAsData: ee,
      maxCount: R,
      optionRender: x
    });
  }, [R, K, Te, rt, Et, yt, O, Je, Q, P, m, M, N, F, ee, x]);
  return process.env.NODE_ENV !== "production" && (WC(e), kC(ne, Q)), /* @__PURE__ */ s.createElement(bs.Provider, {
    value: Be
  }, /* @__PURE__ */ s.createElement(yv, ye({}, z, {
    // >>> MISC
    id: k,
    prefixCls: o,
    ref: t,
    omitDomProps: KC,
    mode: r,
    displayValues: Ae,
    onDisplayValuesChange: st,
    direction: M,
    searchValue: de,
    onSearch: _e,
    autoClearSearchValue: v,
    onSearchSplit: ke,
    dropdownMatchSelectWidth: m,
    OptionList: xv,
    emptyOptions: !Te.length,
    activeValue: Ct,
    activeDescendantId: "".concat(k, "_list_").concat(zt)
  })));
});
process.env.NODE_ENV !== "production" && (wv.displayName = "Select");
var $s = wv;
$s.Option = Ss;
$s.OptGroup = ys;
function UC(e, t, n) {
  return U({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const XC = (e, t) => t || e, Ev = () => {
  const [, e] = Bn(), [t] = ko("Empty"), r = new Dt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ s.createElement("svg", {
    style: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ s.createElement("title", null, t?.description || "Empty"), /* @__PURE__ */ s.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ s.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ s.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ s.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (Ev.displayName = "EmptyImage");
const Ov = () => {
  const [, e] = Bn(), [t] = ko("Empty"), {
    colorFill: n,
    colorFillTertiary: r,
    colorFillQuaternary: a,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: l,
    contentColor: c
  } = Mn(() => ({
    borderColor: new Dt(n).onBackground(o).toHexString(),
    shadowColor: new Dt(r).onBackground(o).toHexString(),
    contentColor: new Dt(a).onBackground(o).toHexString()
  }), [n, r, a, o]);
  return /* @__PURE__ */ s.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ s.createElement("title", null, t?.description || "Empty"), /* @__PURE__ */ s.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    fill: l,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ s.createElement("g", {
    fillRule: "nonzero",
    stroke: i
  }, /* @__PURE__ */ s.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: c
  }))));
};
process.env.NODE_ENV !== "production" && (Ov.displayName = "SimpleImage");
const YC = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: a,
    fontSize: o,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: o,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: a,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, JC = un("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, a = Bt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return YC(a);
});
var QC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Pv = /* @__PURE__ */ s.createElement(Ev, null), Rv = /* @__PURE__ */ s.createElement(Ov, null), lr = (e) => {
  var t;
  const {
    className: n,
    rootClassName: r,
    prefixCls: a,
    image: o,
    description: i,
    children: l,
    imageStyle: c,
    style: u,
    classNames: d,
    styles: f
  } = e, v = QC(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style", "classNames", "styles"]), {
    getPrefixCls: p,
    direction: h,
    className: g,
    style: m,
    classNames: b,
    styles: y,
    image: $
  } = tr("empty"), C = p("empty", a), [S, x, w] = JC(C), [E] = ko("Empty"), O = typeof i < "u" ? i : E?.description, P = typeof O == "string" ? O : "empty", M = (t = o ?? $) !== null && t !== void 0 ? t : Pv;
  let I = null;
  if (typeof M == "string" ? I = /* @__PURE__ */ s.createElement("img", {
    draggable: !1,
    alt: P,
    src: M
  }) : I = M, process.env.NODE_ENV !== "production") {
    const N = on("Empty");
    [["imageStyle", "styles: { image: {} }"]].forEach(([T, F]) => {
      N.deprecated(!(T in e), T, F);
    });
  }
  return S(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: U(x, w, C, g, {
      [`${C}-normal`]: M === Rv,
      [`${C}-rtl`]: h === "rtl"
    }, n, r, b.root, d?.root),
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, y.root), m), f?.root), u)
  }, v), /* @__PURE__ */ s.createElement("div", {
    className: U(`${C}-image`, b.image, d?.image),
    style: Object.assign(Object.assign(Object.assign({}, c), y.image), f?.image)
  }, I), O && /* @__PURE__ */ s.createElement("div", {
    className: U(`${C}-description`, b.description, d?.description),
    style: Object.assign(Object.assign({}, y.description), f?.description)
  }, O), l && /* @__PURE__ */ s.createElement("div", {
    className: U(`${C}-footer`, b.footer, d?.footer),
    style: Object.assign(Object.assign({}, y.footer), f?.footer)
  }, l)));
};
lr.PRESENTED_IMAGE_DEFAULT = Pv;
lr.PRESENTED_IMAGE_SIMPLE = Rv;
process.env.NODE_ENV !== "production" && (lr.displayName = "Empty");
const Iv = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = _n(Mt), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ te.createElement(lr, {
        image: lr.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ te.createElement(lr, {
        image: lr.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    /**
     * This type of component should satisfy the nullish coalescing operator(??) on the left-hand side.
     * to let the component itself implement the logic.
     * For example `Table.filter`.
     */
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ te.createElement(lr, null);
  }
}, Nv = (e, t, n) => {
  var r, a;
  const {
    variant: o,
    [e]: i
  } = s.useContext(Mt), l = s.useContext(Gy), c = i?.variant;
  let u;
  typeof t < "u" ? u = t : n === !1 ? u = "borderless" : u = (a = (r = l ?? c) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const d = oh.includes(u);
  return [u, d];
}, ZC = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function e1(e, t) {
  return e || ZC(t);
}
const Pu = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: a
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: a,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, t1 = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, a = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, l = `${n}-dropdown-placement-`, c = `${r}-option-selected`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, gn(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${a}${l}bottomLeft,
          ${o}${l}bottomLeft
        `]: {
          animationName: Gf
        },
        [`
          ${a}${l}topLeft,
          ${o}${l}topLeft,
          ${a}${l}topRight,
          ${o}${l}topRight
        `]: {
          animationName: qf
        },
        [`${i}${l}bottomLeft`]: {
          animationName: Kf
        },
        [`
          ${i}${l}topLeft,
          ${i}${l}topRight
        `]: {
          animationName: Uf
        },
        "&-hidden": {
          display: "none"
        },
        [r]: Object.assign(Object.assign({}, Pu(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, br),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, Pu(e)), {
            color: e.colorTextDisabled
          })
        }),
        // https://github.com/ant-design/ant-design/pull/46646
        [`${c}:has(+ ${c})`]: {
          borderEndStartRadius: 0,
          borderEndEndRadius: 0,
          [`& + ${c}`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0
          }
        },
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    No(e, "slide-up"),
    No(e, "slide-down"),
    Wc(e, "move-up"),
    Wc(e, "move-down")
  ];
}, n1 = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: a
  } = e, o = e.max(e.calc(n).sub(r).equal(), 0), i = e.max(e.calc(o).sub(a).equal(), 0);
  return {
    basePadding: o,
    containerPadding: i,
    itemHeight: W(t),
    itemLineHeight: W(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, r1 = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, a1 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: a,
    paddingXS: o,
    multipleItemColorDisabled: i,
    multipleItemBorderColorDisabled: l,
    colorIcon: c,
    colorIconHover: u,
    INTERNAL_FIXED_ITEM_MARGIN: d
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        // https://github.com/ant-design/ant-design/issues/54179
        maxWidth: "calc(100% - 4px)",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: d,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${a}, line-height ${a}, height ${a}`,
        marginInlineEnd: e.calc(d).mul(2).equal(),
        paddingInlineStart: o,
        paddingInlineEnd: e.calc(o).div(2).equal(),
        [`${t}-disabled&`]: {
          color: i,
          borderColor: l,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(o).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, ls()), {
          display: "inline-flex",
          alignItems: "center",
          color: c,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: u
          }
        })
      }
    }
  };
}, o1 = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, a = `${n}-selection-overflow`, o = e.multipleSelectItemHeight, i = r1(e), l = t ? `${n}-${t}` : "", c = n1(e);
  return {
    [`${n}-multiple${l}`]: Object.assign(Object.assign({}, a1(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: c.basePadding,
        paddingBlock: c.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${W(r)} 0`,
          lineHeight: W(o),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: c.itemHeight,
        lineHeight: W(c.itemLineHeight)
      },
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        alignSelf: "flex-start",
        "&:after": {
          lineHeight: W(o),
          marginBlock: r
        }
      },
      // ========================== Input ==========================
      [`${n}-prefix`]: {
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal()
      },
      [`${a}-item + ${a}-item,
        ${n}-prefix + ${n}-selection-wrap
      `]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        },
        [`${n}-selection-placeholder`]: {
          insetInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      // Same as `wrap:after`
      [`${a}-item-suffix`]: {
        minHeight: c.itemHeight,
        marginBlock: r
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(i).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: o,
          fontFamily: e.fontFamily,
          lineHeight: W(o),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal(),
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function Ni(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", a = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [o1(e, t), a];
}
const i1 = (e) => {
  const {
    componentCls: t
  } = e, n = Bt(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Bt(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    Ni(e),
    // ======================== Small ========================
    Ni(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    Ni(r, "lg")
  ];
};
function _i(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: a
  } = e, o = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), i = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${i}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, gn(e, !0)), {
        display: "flex",
        borderRadius: a,
        flex: "1 1 auto",
        [`${n}-selection-wrap:after`]: {
          lineHeight: W(o)
        },
        [`${n}-selection-search`]: {
          position: "absolute",
          inset: 0,
          width: "100%",
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          display: "block",
          padding: 0,
          lineHeight: W(o),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-search,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: `0 ${W(r)}`,
          [`${n}-selection-search-input`]: {
            height: o,
            fontSize: e.fontSize
          },
          "&:after": {
            lineHeight: W(o)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${W(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function l1(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    _i(e),
    // ======================== Small ========================
    // Shared
    _i(Bt(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selector`]: {
            padding: `0 ${W(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    _i(Bt(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const s1 = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: a,
    controlHeightSM: o,
    controlHeightLG: i,
    paddingXXS: l,
    controlPaddingHorizontal: c,
    zIndexPopupBase: u,
    colorText: d,
    fontWeightStrong: f,
    controlItemBgActive: v,
    controlItemBgHover: p,
    colorBgContainer: h,
    colorFillSecondary: g,
    colorBgContainerDisabled: m,
    colorTextDisabled: b,
    colorPrimaryHover: y,
    colorPrimary: $,
    controlOutline: C
  } = e, S = l * 2, x = r * 2, w = Math.min(a - S, a - x), E = Math.min(o - S, o - x), O = Math.min(i - S, i - x);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
    zIndexPopup: u + 50,
    optionSelectedColor: d,
    optionSelectedFontWeight: f,
    optionSelectedBg: v,
    optionActiveBg: p,
    optionPadding: `${(a - t * n) / 2}px ${c}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: a,
    selectorBg: h,
    clearBg: h,
    singleItemHeightLG: i,
    multipleItemBg: g,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: w,
    multipleItemHeightSM: E,
    multipleItemHeightLG: O,
    multipleSelectorBgDisabled: m,
    multipleItemColorDisabled: b,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
    hoverBorderColor: y,
    activeBorderColor: $,
    activeOutlineColor: C,
    selectAffixPadding: l
  };
}, _v = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: a
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${W(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${W(a)} ${t.activeOutlineColor}`,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, Ru = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, _v(e, t))
}), c1 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, _v(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), Ru(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), Ru(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${W(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), Mv = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${W(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, Iu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Mv(e, t))
}), u1 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Mv(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor,
    color: e.colorText
  })), Iu(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), Iu(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), d1 = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      border: `${W(e.lineWidth)} ${e.lineType} transparent`
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${W(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    },
    // Status
    [`&${e.componentCls}-status-error`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorError
      }
    },
    [`&${e.componentCls}-status-warning`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorWarning
      }
    }
  }
}), Tv = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      borderWidth: `${W(e.lineWidth)} 0`,
      borderStyle: `${e.lineType} none`,
      borderColor: `transparent transparent ${t.borderColor} transparent`,
      background: e.selectorBg,
      borderRadius: 0
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: `transparent transparent ${t.hoverBorderHover} transparent`
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, Nu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Tv(e, t))
}), f1 = (e) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Tv(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), Nu(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), Nu(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${W(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), v1 = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, c1(e)), u1(e)), d1(e)), f1(e))
}), m1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, g1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        appearance: "none"
      }
    }
  };
}, p1 = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: a
  } = e, o = {
    [`${n}-clear`]: {
      opacity: 1,
      background: e.colorBgBase,
      borderRadius: "50%"
    }
  };
  return {
    [n]: Object.assign(Object.assign({}, gn(e)), {
      position: "relative",
      display: "inline-flex",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, m1(e)), g1(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, br), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, br), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, ls()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [a]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        display: "flex",
        width: "100%",
        position: "relative",
        minWidth: 0,
        // https://github.com/ant-design/ant-design/issues/51669
        "&:after": {
          content: '"\\a0"',
          width: 0,
          overflow: "hidden"
        }
      },
      // ========================= Prefix ==========================
      [`${n}-prefix`]: {
        flex: "none",
        marginInlineEnd: e.selectAffixPadding
      },
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        // https://github.com/ant-design/ant-design/issues/54205
        // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
        transform: "translateZ(0)",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorIcon
        }
      },
      "@media(hover:none)": o,
      "&:hover": o
    }),
    // ========================= Feedback ==========================
    [`${n}-status`]: {
      "&-error, &-warning, &-success, &-validating": {
        [`&${n}-has-feedback`]: {
          [`${n}-clear`]: {
            insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
          }
        }
      }
    }
  };
}, h1 = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    p1(e),
    // Single
    l1(e),
    // Multiple
    i1(e),
    // Dropdown
    t1(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Yf(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, b1 = un("Select", (e, {
  rootPrefixCls: t
}) => {
  const n = Bt(e, {
    rootPrefixCls: t,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [h1(n), v1(n)];
}, s1, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var y1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, S1 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: y1
  }));
}, Dv = /* @__PURE__ */ s.forwardRef(S1);
process.env.NODE_ENV !== "production" && (Dv.displayName = "CheckOutlined");
var C1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, $1 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: C1
  }));
}, jv = /* @__PURE__ */ s.forwardRef($1);
process.env.NODE_ENV !== "production" && (jv.displayName = "DownOutlined");
var x1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, w1 = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: x1
  }));
}, zv = /* @__PURE__ */ s.forwardRef(w1);
process.env.NODE_ENV !== "production" && (zv.displayName = "SearchOutlined");
function E1({
  suffixIcon: e,
  clearIcon: t,
  menuItemSelectedIcon: n,
  removeIcon: r,
  loading: a,
  multiple: o,
  hasFeedback: i,
  prefixCls: l,
  showSuffixIcon: c,
  feedbackIcon: u,
  showArrow: d,
  componentName: f
}) {
  process.env.NODE_ENV !== "production" && on(f).deprecated(!t, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const v = t ?? /* @__PURE__ */ s.createElement(_f, null), p = (b) => e === null && !i && !d ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, c !== !1 && b, i && u);
  let h = null;
  if (e !== void 0)
    h = p(e);
  else if (a)
    h = p(/* @__PURE__ */ s.createElement(Mf, {
      spin: !0
    }));
  else {
    const b = `${l}-suffix`;
    h = ({
      open: y,
      showSearch: $
    }) => p(y && $ ? /* @__PURE__ */ s.createElement(zv, {
      className: b
    }) : /* @__PURE__ */ s.createElement(jv, {
      className: b
    }));
  }
  let g = null;
  n !== void 0 ? g = n : o ? g = /* @__PURE__ */ s.createElement(Dv, null) : g = null;
  let m = null;
  return r !== void 0 ? m = r : m = /* @__PURE__ */ s.createElement(cs, null), {
    clearIcon: v,
    suffixIcon: h,
    itemIcon: g,
    removeIcon: m
  };
}
function O1(e) {
  return te.useMemo(() => {
    if (e)
      return (...t) => /* @__PURE__ */ te.createElement(iv, {
        space: !0
      }, e.apply(void 0, t));
  }, [e]);
}
function P1(e, t) {
  return t !== void 0 ? t : e !== null;
}
var R1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Av = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Lv = (e, t) => {
  var n, r, a, o, i;
  const {
    prefixCls: l,
    bordered: c,
    className: u,
    rootClassName: d,
    getPopupContainer: f,
    popupClassName: v,
    dropdownClassName: p,
    listHeight: h = 256,
    placement: g,
    listItemHeight: m,
    size: b,
    disabled: y,
    notFoundContent: $,
    status: C,
    builtinPlacements: S,
    dropdownMatchSelectWidth: x,
    popupMatchSelectWidth: w,
    direction: E,
    style: O,
    allowClear: P,
    variant: M,
    dropdownStyle: I,
    transitionName: N,
    tagRender: T,
    maxCount: F,
    prefix: j,
    dropdownRender: A,
    popupRender: B,
    onDropdownVisibleChange: V,
    onOpenChange: L,
    styles: R,
    classNames: z
  } = e, k = R1(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount", "prefix", "dropdownRender", "popupRender", "onDropdownVisibleChange", "onOpenChange", "styles", "classNames"]), {
    getPopupContainer: q,
    getPrefixCls: ee,
    renderEmpty: re,
    direction: Q,
    virtual: le,
    popupMatchSelectWidth: oe,
    popupOverflow: de
  } = s.useContext(Mt), {
    showSearch: X,
    style: K,
    styles: ae,
    className: G,
    classNames: ne
  } = tr("select"), [, Y] = Bn(), me = m ?? Y?.controlHeight, pe = ee("select", l), he = ee(), fe = E ?? Q, {
    compactSize: se,
    compactItemClassnames: ue
  } = G0(pe, fe), [xe, ve] = Nv("select", M, c), We = Ko(pe), [Ae, Je, Le] = b1(pe, We), De = s.useMemo(() => {
    const {
      mode: ie
    } = e;
    if (ie !== "combobox")
      return ie === Av ? "combobox" : ie;
  }, [e.mode]), qe = De === "multiple" || De === "tags", we = P1(e.suffixIcon, e.showArrow), Ge = (n = w ?? x) !== null && n !== void 0 ? n : oe, et = ((r = R?.popup) === null || r === void 0 ? void 0 : r.root) || ((a = ae.popup) === null || a === void 0 ? void 0 : a.root) || I, Te = O1(B || A), Fe = L || V, {
    status: Ue,
    hasFeedback: Ve,
    isFormItemInput: Ct,
    feedbackIcon: $t
  } = s.useContext(Mo), Lt = XC(Ue, C);
  let Pt;
  $ !== void 0 ? Pt = $ : De === "combobox" ? Pt = null : Pt = re?.("Select") || /* @__PURE__ */ s.createElement(Iv, {
    componentName: "Select"
  });
  const {
    suffixIcon: zt,
    itemIcon: jt,
    removeIcon: Et,
    clearIcon: rt
  } = E1(Object.assign(Object.assign({}, k), {
    multiple: qe,
    hasFeedback: Ve,
    feedbackIcon: $t,
    showSuffixIcon: we,
    prefixCls: pe,
    componentName: "Select"
  })), Ke = P === !0 ? {
    clearIcon: rt
  } : P, yt = nr(k, ["suffixIcon", "itemIcon"]), st = U(((o = z?.popup) === null || o === void 0 ? void 0 : o.root) || ((i = ne?.popup) === null || i === void 0 ? void 0 : i.root) || v || p, {
    [`${pe}-dropdown-${fe}`]: fe === "rtl"
  }, d, ne.root, z?.root, Le, We, Je), _e = Sr((ie) => {
    var Ee;
    return (Ee = b ?? se) !== null && Ee !== void 0 ? Ee : ie;
  }), ke = s.useContext(Oo), Be = y ?? ke, ge = U({
    [`${pe}-lg`]: _e === "large",
    [`${pe}-sm`]: _e === "small",
    [`${pe}-rtl`]: fe === "rtl",
    [`${pe}-${xe}`]: ve,
    [`${pe}-in-form-item`]: Ct
  }, UC(pe, Lt, Ve), ue, G, u, ne.root, z?.root, d, Le, We, Je), Z = s.useMemo(() => g !== void 0 ? g : fe === "rtl" ? "bottomRight" : "bottomLeft", [g, fe]);
  if (process.env.NODE_ENV !== "production") {
    const ie = on("Select");
    Object.entries({
      dropdownMatchSelectWidth: "popupMatchSelectWidth",
      dropdownStyle: "styles.popup.root",
      dropdownClassName: "classNames.popup.root",
      popupClassName: "classNames.popup.root",
      dropdownRender: "popupRender",
      onDropdownVisibleChange: "onOpenChange",
      bordered: "variant"
    }).forEach(([Ce, Qe]) => {
      ie.deprecated(!(Ce in e), Ce, Qe);
    }), process.env.NODE_ENV !== "production" && ie(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), process.env.NODE_ENV !== "production" && ie(!(typeof F < "u" && !qe), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [J] = Df("SelectLike", et?.zIndex);
  return Ae(/* @__PURE__ */ s.createElement($s, Object.assign({
    ref: t,
    virtual: le,
    showSearch: X
  }, yt, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, ae.root), R?.root), K), O),
    dropdownMatchSelectWidth: Ge,
    transitionName: qo(he, "slide-up", N),
    builtinPlacements: e1(S, de),
    listHeight: h,
    listItemHeight: me,
    mode: De,
    prefixCls: pe,
    placement: Z,
    direction: fe,
    prefix: j,
    suffixIcon: zt,
    menuItemSelectedIcon: jt,
    removeIcon: Et,
    allowClear: Ke,
    notFoundContent: Pt,
    className: ge,
    getPopupContainer: f || q,
    dropdownClassName: st,
    disabled: Be,
    dropdownStyle: Object.assign(Object.assign({}, et), {
      zIndex: J
    }),
    maxCount: qe ? F : void 0,
    tagRender: qe ? T : void 0,
    dropdownRender: Te,
    onDropdownVisibleChange: Fe
  })));
};
process.env.NODE_ENV !== "production" && (Lv.displayName = "Select");
const $r = /* @__PURE__ */ s.forwardRef(Lv), I1 = $S($r, "dropdownAlign");
$r.SECRET_COMBOBOX_MODE_DO_NOT_USE = Av;
$r.Option = Ss;
$r.OptGroup = ys;
$r._InternalPanelDoNotUseOrYouWillBeFired = I1;
process.env.NODE_ENV !== "production" && ($r.displayName = "Select");
const N1 = (e, t) => {
  typeof e?.addEventListener < "u" ? e.addEventListener("change", t) : typeof e?.addListener < "u" && e.addListener(t);
}, _1 = (e, t) => {
  typeof e?.removeEventListener < "u" ? e.removeEventListener("change", t) : typeof e?.removeListener < "u" && e.removeListener(t);
}, Qn = ["xxl", "xl", "lg", "md", "sm", "xs"], M1 = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), T1 = (e) => {
  const t = e, n = [].concat(Qn).reverse();
  return n.forEach((r, a) => {
    const o = r.toUpperCase(), i = `screen${o}Min`, l = `screen${o}`;
    if (!(t[i] <= t[l]))
      throw new Error(`${i}<=${l} fails : !(${t[i]}<=${t[l]})`);
    if (a < n.length - 1) {
      const c = `screen${o}Max`;
      if (!(t[l] <= t[c]))
        throw new Error(`${l}<=${c} fails : !(${t[l]}<=${t[c]})`);
      const d = `screen${n[a + 1].toUpperCase()}Min`;
      if (!(t[c] <= t[d]))
        throw new Error(`${c}<=${d} fails : !(${t[c]}<=${t[d]})`);
    }
  }), e;
}, Fv = (e, t) => {
  if (t) {
    for (const n of Qn)
      if (e[n] && t?.[n] !== void 0)
        return t[n];
  }
}, D1 = () => {
  const [, e] = Bn(), t = M1(T1(e));
  return te.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    let r = -1, a = {};
    return {
      responsiveMap: t,
      matchHandlers: {},
      dispatch(o) {
        return a = o, n.forEach((i) => i(a)), n.size >= 1;
      },
      subscribe(o) {
        return n.size || this.register(), r += 1, n.set(r, o), o(a), r;
      },
      unsubscribe(o) {
        n.delete(o), n.size || this.unregister();
      },
      register() {
        Object.entries(t).forEach(([o, i]) => {
          const l = ({
            matches: u
          }) => {
            this.dispatch(Object.assign(Object.assign({}, a), {
              [o]: u
            }));
          }, c = window.matchMedia(i);
          N1(c, l), this.matchHandlers[i] = {
            mql: c,
            listener: l
          }, l(c);
        });
      },
      unregister() {
        Object.values(t).forEach((o) => {
          const i = this.matchHandlers[o];
          _1(i?.mql, i?.listener);
        }), n.clear();
      }
    };
  }, [t]);
};
function ka(e = !0, t = {}) {
  const n = Ie(t), [, r] = A0(), a = D1();
  return Vt(() => {
    const o = a.subscribe((i) => {
      n.current = i, e && r();
    });
    return () => a.unsubscribe(o);
  }, []), n.current;
}
const zl = /* @__PURE__ */ s.createContext({}), j1 = (e) => {
  const {
    antCls: t,
    componentCls: n,
    iconCls: r,
    avatarBg: a,
    avatarColor: o,
    containerSize: i,
    containerSizeLG: l,
    containerSizeSM: c,
    textFontSize: u,
    textFontSizeLG: d,
    textFontSizeSM: f,
    iconFontSize: v,
    iconFontSizeLG: p,
    iconFontSizeSM: h,
    borderRadius: g,
    borderRadiusLG: m,
    borderRadiusSM: b,
    lineWidth: y,
    lineType: $
  } = e, C = (S, x, w, E) => ({
    width: S,
    height: S,
    borderRadius: "50%",
    fontSize: x,
    [`&${n}-square`]: {
      borderRadius: E
    },
    [`&${n}-icon`]: {
      fontSize: w,
      [`> ${r}`]: {
        margin: 0
      }
    }
  });
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, gn(e)), {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: o,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: a,
      border: `${W(y)} ${$} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), C(i, u, v, g)), {
      "&-lg": Object.assign({}, C(l, d, p, m)),
      "&-sm": Object.assign({}, C(c, f, h, b)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, z1 = (e) => {
  const {
    componentCls: t,
    groupBorderColor: n,
    groupOverlapping: r,
    groupSpace: a
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [t]: {
        borderColor: n
      },
      "> *:not(:first-child)": {
        marginInlineStart: r
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: a
      }
    }
  };
}, A1 = (e) => {
  const {
    controlHeight: t,
    controlHeightLG: n,
    controlHeightSM: r,
    fontSize: a,
    fontSizeLG: o,
    fontSizeXL: i,
    fontSizeHeading3: l,
    marginXS: c,
    marginXXS: u,
    colorBorderBg: d
  } = e;
  return {
    containerSize: t,
    containerSizeLG: n,
    containerSizeSM: r,
    textFontSize: a,
    textFontSizeLG: a,
    textFontSizeSM: a,
    iconFontSize: Math.round((o + i) / 2),
    iconFontSizeLG: l,
    iconFontSizeSM: a,
    groupSpace: u,
    groupOverlapping: -c,
    groupBorderColor: d
  };
}, Vv = un("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: n
  } = e, r = Bt(e, {
    avatarBg: n,
    avatarColor: t
  });
  return [j1(r), z1(r)];
}, A1);
var L1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const xs = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: n,
    shape: r,
    size: a,
    src: o,
    srcSet: i,
    icon: l,
    className: c,
    rootClassName: u,
    style: d,
    alt: f,
    draggable: v,
    children: p,
    crossOrigin: h,
    gap: g = 4,
    onError: m
  } = e, b = L1(e, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "style", "alt", "draggable", "children", "crossOrigin", "gap", "onError"]), [y, $] = s.useState(1), [C, S] = s.useState(!1), [x, w] = s.useState(!0), E = s.useRef(null), O = s.useRef(null), P = Jr(t, E), {
    getPrefixCls: M,
    avatar: I
  } = s.useContext(Mt), N = s.useContext(zl), T = () => {
    if (!O.current || !E.current)
      return;
    const X = O.current.offsetWidth, K = E.current.offsetWidth;
    X !== 0 && K !== 0 && g * 2 < K && $(K - g * 2 < X ? (K - g * 2) / X : 1);
  };
  s.useEffect(() => {
    S(!0);
  }, []), s.useEffect(() => {
    w(!0), $(1);
  }, [o]), s.useEffect(T, [g]);
  const F = () => {
    m?.() !== !1 && w(!1);
  }, j = Sr((X) => {
    var K, ae;
    return (ae = (K = a ?? N?.size) !== null && K !== void 0 ? K : X) !== null && ae !== void 0 ? ae : "default";
  }), A = Object.keys(typeof j == "object" ? j || {} : {}).some((X) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(X)), B = ka(A), V = s.useMemo(() => {
    if (typeof j != "object")
      return {};
    const X = Qn.find((ae) => B[ae]), K = j[X];
    return K ? {
      width: K,
      height: K,
      fontSize: K && (l || p) ? K / 2 : 18
    } : {};
  }, [B, j, l, p]);
  if (process.env.NODE_ENV !== "production") {
    const X = on("Avatar");
    process.env.NODE_ENV !== "production" && X(!(typeof l == "string" && l.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${l}\` at https://ant.design/components/icon`);
  }
  const L = M("avatar", n), R = Ko(L), [z, k, q] = Vv(L, R), ee = U({
    [`${L}-lg`]: j === "large",
    [`${L}-sm`]: j === "small"
  }), re = /* @__PURE__ */ s.isValidElement(o), Q = r || N?.shape || "circle", le = U(L, ee, I?.className, `${L}-${Q}`, {
    [`${L}-image`]: re || o && x,
    [`${L}-icon`]: !!l
  }, q, R, c, u, k), oe = typeof j == "number" ? {
    width: j,
    height: j,
    fontSize: l ? j / 2 : 18
  } : {};
  let de;
  if (typeof o == "string" && x)
    de = /* @__PURE__ */ s.createElement("img", {
      src: o,
      draggable: v,
      srcSet: i,
      onError: F,
      alt: f,
      crossOrigin: h
    });
  else if (re)
    de = o;
  else if (l)
    de = l;
  else if (C || y !== 1) {
    const X = `scale(${y})`, K = {
      msTransform: X,
      WebkitTransform: X,
      transform: X
    };
    de = /* @__PURE__ */ s.createElement(Nn, {
      onResize: T
    }, /* @__PURE__ */ s.createElement("span", {
      className: `${L}-string`,
      ref: O,
      style: K
    }, p));
  } else
    de = /* @__PURE__ */ s.createElement("span", {
      className: `${L}-string`,
      style: {
        opacity: 0
      },
      ref: O
    }, p);
  return z(/* @__PURE__ */ s.createElement("span", Object.assign({}, b, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, oe), V), I?.style), d),
    className: le,
    ref: P
  }), de));
});
process.env.NODE_ENV !== "production" && (xs.displayName = "Avatar");
const jo = (e) => e ? typeof e == "function" ? e() : e : null;
function ws(e) {
  var t = e.children, n = e.prefixCls, r = e.id, a = e.overlayInnerStyle, o = e.bodyClassName, i = e.className, l = e.style;
  return /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(n, "-content"), i),
    style: l
  }, /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(n, "-inner"), o),
    id: r,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Nr = {
  shiftX: 64,
  adjustY: 1
}, _r = {
  adjustX: 1,
  shiftY: !0
}, In = [0, 0], F1 = {
  left: {
    points: ["cr", "cl"],
    overflow: _r,
    offset: [-4, 0],
    targetOffset: In
  },
  right: {
    points: ["cl", "cr"],
    overflow: _r,
    offset: [4, 0],
    targetOffset: In
  },
  top: {
    points: ["bc", "tc"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: In
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: In
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: In
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: _r,
    offset: [-4, 0],
    targetOffset: In
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: In
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: _r,
    offset: [4, 0],
    targetOffset: In
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: In
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: _r,
    offset: [4, 0],
    targetOffset: In
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: In
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: _r,
    offset: [-4, 0],
    targetOffset: In
  }
}, V1 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], B1 = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, l = i === void 0 ? 0 : i, c = t.mouseLeaveDelay, u = c === void 0 ? 0.1 : c, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, p = t.children, h = t.onVisibleChange, g = t.afterVisibleChange, m = t.transitionName, b = t.animation, y = t.motion, $ = t.placement, C = $ === void 0 ? "right" : $, S = t.align, x = S === void 0 ? {} : S, w = t.destroyTooltipOnHide, E = w === void 0 ? !1 : w, O = t.defaultVisible, P = t.getTooltipContainer, M = t.overlayInnerStyle;
  t.arrowContent;
  var I = t.overlay, N = t.id, T = t.showArrow, F = T === void 0 ? !0 : T, j = t.classNames, A = t.styles, B = ut(t, V1), V = Qf(N), L = Ie(null);
  ld(n, function() {
    return L.current;
  });
  var R = D({}, B);
  "visible" in t && (R.popupVisible = t.visible);
  var z = function() {
    return /* @__PURE__ */ s.createElement(ws, {
      key: "content",
      prefixCls: v,
      id: V,
      bodyClassName: j?.body,
      overlayInnerStyle: D(D({}, M), A?.body)
    }, I);
  }, k = function() {
    var ee = s.Children.only(p), re = ee?.props || {}, Q = D(D({}, re), {}, {
      "aria-describedby": I ? V : null
    });
    return /* @__PURE__ */ s.cloneElement(p, Q);
  };
  return /* @__PURE__ */ s.createElement(Jo, ye({
    popupClassName: U(r, j?.root),
    prefixCls: v,
    popup: z,
    action: o,
    builtinPlacements: F1,
    popupPlacement: C,
    ref: L,
    popupAlign: x,
    getPopupContainer: P,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: g,
    popupTransitionName: m,
    popupAnimation: b,
    popupMotion: y,
    defaultPopupVisible: O,
    autoDestroy: E,
    mouseLeaveDelay: u,
    popupStyle: D(D({}, d), A?.root),
    mouseEnterDelay: l,
    arrow: F
  }, R), k());
};
const H1 = /* @__PURE__ */ Lo(B1);
function Bv(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, a = t / 2, o = 0, i = a, l = r * 1 / Math.sqrt(2), c = a - r * (1 - 1 / Math.sqrt(2)), u = a - n * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * a - u, v = d, p = 2 * a - l, h = c, g = 2 * a - o, m = i, b = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), y = r * (Math.sqrt(2) - 1), $ = `polygon(${y}px 100%, 50% ${y}px, ${2 * a - y}px 100%, ${y}px 100%)`, C = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${l} ${c} L ${u} ${d} A ${n} ${n} 0 0 1 ${f} ${v} L ${p} ${h} A ${r} ${r} 0 0 0 ${g} ${m} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: C,
    arrowPolygon: $
  };
}
const W1 = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: l,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: c(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [a, o]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${W(l)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Hv = 8;
function Es(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? Hv : r
  };
}
function lo(e, t) {
  return e ? t : {};
}
function Wv(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: o,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: l = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, W1(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, lo(!!c.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: l,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${W(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), lo(!!c.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: l,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${W(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), lo(!!c.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: o
      }
    })), lo(!!c.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: o
      }
    }))
  };
}
function k1(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = r && typeof r == "object" ? r : {}, o = {};
  switch (e) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + n, o.shiftY = !0, o.adjustY = !0;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + n, o.shiftX = !0, o.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const _u = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, G1 = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, K1 = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function q1(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: a,
    borderRadius: o
  } = e, i = t / 2, l = {}, c = Es({
    contentRadius: o,
    limitVerticalRadius: !0
  });
  return Object.keys(_u).forEach((u) => {
    const d = r && G1[u] || _u[u], f = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[u] = f, K1.has(u) && (f.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -i - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = i + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -i - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = i + a;
        break;
    }
    if (r)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -c.arrowOffsetHorizontal - i;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = c.arrowOffsetHorizontal + i;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -c.arrowOffsetHorizontal * 2 + i;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = c.arrowOffsetHorizontal * 2 - i;
          break;
      }
    f.overflow = k1(u, c, t, n), f.htmlRegion = "visibleFirst";
  }), l;
}
const U1 = (e) => {
  const {
    calc: t,
    componentCls: n,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: a,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: l,
    controlHeight: c,
    boxShadowSecondary: u,
    paddingSM: d,
    paddingXS: f,
    arrowOffsetHorizontal: v,
    sizePopupArrow: p
  } = e, h = t(i).add(p).add(v).equal(), g = t(i).mul(2).add(p).equal();
  return [
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, gn(e)), {
        position: "absolute",
        zIndex: l,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${n}-inner`]: {
          minWidth: g,
          minHeight: c,
          padding: `${W(e.calc(d).div(2).equal())} ${W(f)}`,
          color: `var(--ant-tooltip-color, ${a})`,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: u,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: h
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${n}-inner`]: {
            borderRadius: e.min(i, Hv)
          }
        },
        [`${n}-content`]: {
          position: "relative"
        }
      }), Mh(e, (m, {
        darkColor: b
      }) => ({
        [`&${n}-${m}`]: {
          [`${n}-inner`]: {
            backgroundColor: b
          },
          [`${n}-arrow`]: {
            "--antd-arrow-background-color": b
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Wv(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, X1 = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Es({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Bv(Bt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), kv = (e, t = !0) => un("Tooltip", (r) => {
  const {
    borderRadius: a,
    colorTextLightSolid: o,
    colorBgSpotlight: i
  } = r, l = Bt(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: o,
    tooltipBorderRadius: a,
    tooltipBg: i
  });
  return [U1(l), Xf(r, "zoom-big-fast")];
}, X1, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), Y1 = Ra.map((e) => `${e}-inverse`);
function J1(e, t = !0) {
  return t ? [].concat(Se(Y1), Se(Ra)).includes(e) : Ra.includes(e);
}
function Gv(e, t) {
  const n = J1(t), r = U({
    [`${e}-${t}`]: t && n
  }), a = {}, o = {}, i = Lb(t).toRgb(), c = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !n && (a.background = t, a["--ant-tooltip-color"] = c, o["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: a,
    arrowStyle: o
  };
}
const Q1 = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("tooltip", t), [u, d, f] = kv(c), v = Gv(c, o), p = v.arrowStyle, h = Object.assign(Object.assign({}, i), v.overlayStyle), g = U(d, f, c, `${c}-pure`, `${c}-placement-${r}`, n, v.className);
  return u(/* @__PURE__ */ s.createElement("div", {
    className: g,
    style: p
  }, /* @__PURE__ */ s.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ s.createElement(ws, Object.assign({}, e, {
    className: d,
    prefixCls: c,
    overlayInnerStyle: h
  }), a)));
};
var Z1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const e$ = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: a,
    openClassName: o,
    getTooltipContainer: i,
    color: l,
    overlayInnerStyle: c,
    children: u,
    afterOpenChange: d,
    afterVisibleChange: f,
    destroyTooltipOnHide: v,
    destroyOnHidden: p,
    arrow: h = !0,
    title: g,
    overlay: m,
    builtinPlacements: b,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: $ = !0,
    motion: C,
    getPopupContainer: S,
    placement: x = "top",
    mouseEnterDelay: w = 0.1,
    mouseLeaveDelay: E = 0.1,
    overlayStyle: O,
    rootClassName: P,
    overlayClassName: M,
    styles: I,
    classNames: N
  } = e, T = Z1(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), F = !!h, [, j] = Bn(), {
    getPopupContainer: A,
    getPrefixCls: B,
    direction: V,
    className: L,
    style: R,
    classNames: z,
    styles: k
  } = tr("tooltip"), q = on("Tooltip"), ee = s.useRef(null), re = () => {
    var we;
    (we = ee.current) === null || we === void 0 || we.forceAlign();
  };
  s.useImperativeHandle(t, () => {
    var we, Ge;
    return {
      forceAlign: re,
      forcePopupAlign: () => {
        q.deprecated(!1, "forcePopupAlign", "forceAlign"), re();
      },
      nativeElement: (we = ee.current) === null || we === void 0 ? void 0 : we.nativeElement,
      popupElement: (Ge = ee.current) === null || Ge === void 0 ? void 0 : Ge.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([we, Ge]) => {
    q.deprecated(!(we in e), we, Ge);
  }), process.env.NODE_ENV !== "production" && q(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && q(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Q, le] = mn(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), oe = !g && !m && g !== 0, de = (we) => {
    var Ge, et;
    le(oe ? !1 : we), oe || ((Ge = e.onOpenChange) === null || Ge === void 0 || Ge.call(e, we), (et = e.onVisibleChange) === null || et === void 0 || et.call(e, we));
  }, X = s.useMemo(() => {
    var we, Ge;
    let et = y;
    return typeof h == "object" && (et = (Ge = (we = h.pointAtCenter) !== null && we !== void 0 ? we : h.arrowPointAtCenter) !== null && Ge !== void 0 ? Ge : y), b || q1({
      arrowPointAtCenter: et,
      autoAdjustOverflow: $,
      arrowWidth: F ? j.sizePopupArrow : 0,
      borderRadius: j.borderRadius,
      offset: j.marginXXS
    });
  }, [y, h, b, j]), K = s.useMemo(() => g === 0 ? g : m || g || "", [m, g]), ae = /* @__PURE__ */ s.createElement(iv, {
    space: !0
  }, typeof K == "function" ? K() : K), G = B("tooltip", a), ne = B(), Y = e["data-popover-inject"];
  let me = Q;
  !("open" in e) && !("visible" in e) && oe && (me = !1);
  const pe = /* @__PURE__ */ s.isValidElement(u) && !M0(u) ? u : /* @__PURE__ */ s.createElement("span", null, u), he = pe.props, fe = !he.className || typeof he.className == "string" ? U(he.className, o || `${G}-open`) : he.className, [se, ue, xe] = kv(G, !Y), ve = Gv(G, l), We = ve.arrowStyle, Ae = U(M, {
    [`${G}-rtl`]: V === "rtl"
  }, ve.className, P, ue, xe, L, z.root, N?.root), Je = U(z.body, N?.body), [Le, De] = Df("Tooltip", T.zIndex), qe = /* @__PURE__ */ s.createElement(H1, Object.assign({}, T, {
    zIndex: Le,
    showArrow: F,
    placement: x,
    mouseEnterDelay: w,
    mouseLeaveDelay: E,
    prefixCls: G,
    classNames: {
      root: Ae,
      body: Je
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, We), k.root), R), O), I?.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, k.body), c), I?.body), ve.overlayStyle)
    },
    getTooltipContainer: S || i || A,
    ref: ee,
    builtinPlacements: X,
    overlay: ae,
    visible: me,
    onVisibleChange: de,
    afterVisibleChange: d ?? f,
    arrowContent: /* @__PURE__ */ s.createElement("span", {
      className: `${G}-arrow-content`
    }),
    motion: {
      motionName: qo(ne, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: p ?? !!v
  }), me ? Fa(pe, {
    className: fe
  }) : pe);
  return se(/* @__PURE__ */ s.createElement(us.Provider, {
    value: De
  }, qe));
}), Os = e$;
process.env.NODE_ENV !== "production" && (Os.displayName = "Tooltip");
Os._InternalPanelDoNotUseOrYouWillBeFired = Q1;
const t$ = (e) => {
  const {
    componentCls: t,
    popoverColor: n,
    titleMinWidth: r,
    fontWeightStrong: a,
    innerPadding: o,
    boxShadowSecondary: i,
    colorTextHeading: l,
    borderRadiusLG: c,
    zIndexPopup: u,
    titleMarginBottom: d,
    colorBgElevated: f,
    popoverBg: v,
    titleBorderBottom: p,
    innerContentPadding: h,
    titlePadding: g
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, gn(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: u,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "--antd-arrow-background-color": f,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: v,
          backgroundClip: "padding-box",
          borderRadius: c,
          boxShadow: i,
          padding: o
        },
        [`${t}-title`]: {
          minWidth: r,
          marginBottom: d,
          color: l,
          fontWeight: a,
          borderBottom: p,
          padding: g
        },
        [`${t}-inner-content`]: {
          color: n,
          padding: h
        }
      })
    },
    // Arrow Style
    Wv(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, n$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Ra.map((n) => {
      const r = e[`${n}6`];
      return {
        [`&${t}-${n}`]: {
          "--antd-arrow-background-color": r,
          [`${t}-inner`]: {
            backgroundColor: r
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, r$ = (e) => {
  const {
    lineWidth: t,
    controlHeight: n,
    fontHeight: r,
    padding: a,
    wireframe: o,
    zIndexPopupBase: i,
    borderRadiusLG: l,
    marginXS: c,
    lineType: u,
    colorSplit: d,
    paddingSM: f
  } = e, v = n - r, p = v / 2, h = v / 2 - t, g = a;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, Bv(e)), Es({
    contentRadius: l,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: o ? 0 : 12,
    titleMarginBottom: o ? 0 : c,
    titlePadding: o ? `${p}px ${g}px ${h}px` : 0,
    titleBorderBottom: o ? `${t}px ${u} ${d}` : "none",
    innerContentPadding: o ? `${f}px ${g}px` : 0
  });
}, Kv = un("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: n
  } = e, r = Bt(e, {
    popoverBg: t,
    popoverColor: n
  });
  return [t$(r), n$(r), Xf(r, "zoom-big")];
}, r$, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var a$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const qv = ({
  title: e,
  content: t,
  prefixCls: n
}) => !e && !t ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, e && /* @__PURE__ */ s.createElement("div", {
  className: `${n}-title`
}, e), t && /* @__PURE__ */ s.createElement("div", {
  className: `${n}-inner-content`
}, t)), o$ = (e) => {
  const {
    hashId: t,
    prefixCls: n,
    className: r,
    style: a,
    placement: o = "top",
    title: i,
    content: l,
    children: c
  } = e, u = jo(i), d = jo(l), f = U(t, n, `${n}-pure`, `${n}-placement-${o}`, r);
  return /* @__PURE__ */ s.createElement("div", {
    className: f,
    style: a
  }, /* @__PURE__ */ s.createElement("div", {
    className: `${n}-arrow`
  }), /* @__PURE__ */ s.createElement(ws, Object.assign({}, e, {
    className: t,
    prefixCls: n
  }), c || /* @__PURE__ */ s.createElement(qv, {
    prefixCls: n,
    title: u,
    content: d
  })));
}, i$ = (e) => {
  const {
    prefixCls: t,
    className: n
  } = e, r = a$(e, ["prefixCls", "className"]), {
    getPrefixCls: a
  } = s.useContext(Mt), o = a("popover", t), [i, l, c] = Kv(o);
  return i(/* @__PURE__ */ s.createElement(o$, Object.assign({}, r, {
    prefixCls: o,
    hashId: l,
    className: U(n, c)
  })));
};
var l$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const s$ = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: a,
    title: o,
    content: i,
    overlayClassName: l,
    placement: c = "top",
    trigger: u = "hover",
    children: d,
    mouseEnterDelay: f = 0.1,
    mouseLeaveDelay: v = 0.1,
    onOpenChange: p,
    overlayStyle: h = {},
    styles: g,
    classNames: m
  } = e, b = l$(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle", "styles", "classNames"]), {
    getPrefixCls: y,
    className: $,
    style: C,
    classNames: S,
    styles: x
  } = tr("popover"), w = y("popover", a), [E, O, P] = Kv(w), M = y(), I = U(l, O, P, $, S.root, m?.root), N = U(S.body, m?.body), [T, F] = mn(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), j = (R, z) => {
    F(R, !0), p?.(R, z);
  }, A = (R) => {
    R.keyCode === $e.ESC && j(!1, R);
  }, B = (R) => {
    j(R);
  }, V = jo(o), L = jo(i);
  return E(/* @__PURE__ */ s.createElement(Os, Object.assign({
    placement: c,
    trigger: u,
    mouseEnterDelay: f,
    mouseLeaveDelay: v
  }, b, {
    prefixCls: w,
    classNames: {
      root: I,
      body: N
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign({}, x.root), C), h), g?.root),
      body: Object.assign(Object.assign({}, x.body), g?.body)
    },
    ref: t,
    open: T,
    onOpenChange: B,
    overlay: V || L ? /* @__PURE__ */ s.createElement(qv, {
      prefixCls: w,
      title: V,
      content: L
    }) : null,
    transitionName: qo(M, "zoom-big", b.transitionName),
    "data-popover-inject": !0
  }), Fa(d, {
    onKeyDown: (R) => {
      var z, k;
      /* @__PURE__ */ id(d) && ((k = d == null ? void 0 : (z = d.props).onKeyDown) === null || k === void 0 || k.call(z, R)), A(R);
    }
  })));
}), Ps = s$;
Ps._InternalPanelDoNotUseOrYouWillBeFired = i$;
process.env.NODE_ENV !== "production" && (Ps.displayName = "Popover");
const Mu = (e) => {
  const {
    size: t,
    shape: n
  } = s.useContext(zl), r = s.useMemo(() => ({
    size: e.size || t,
    shape: e.shape || n
  }), [e.size, e.shape, t, n]);
  return /* @__PURE__ */ s.createElement(zl.Provider, {
    value: r
  }, e.children);
}, c$ = (e) => {
  var t, n, r, a;
  const {
    getPrefixCls: o,
    direction: i
  } = s.useContext(Mt), {
    prefixCls: l,
    className: c,
    rootClassName: u,
    style: d,
    maxCount: f,
    maxStyle: v,
    size: p,
    shape: h,
    maxPopoverPlacement: g,
    maxPopoverTrigger: m,
    children: b,
    max: y
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const N = on("Avatar.Group");
    [["maxCount", "max={{ count: number }}"], ["maxStyle", "max={{ style: CSSProperties }}"], ["maxPopoverPlacement", "max={{ popover: PopoverProps }}"], ["maxPopoverTrigger", "max={{ popover: PopoverProps }}"]].forEach(([T, F]) => {
      N.deprecated(!(T in e), T, F);
    });
  }
  const $ = o("avatar", l), C = `${$}-group`, S = Ko($), [x, w, E] = Vv($, S), O = U(C, {
    [`${C}-rtl`]: i === "rtl"
  }, E, S, c, u, w), P = Fn(b).map((N, T) => Fa(N, {
    // eslint-disable-next-line react/no-array-index-key
    key: `avatar-key-${T}`
  })), M = y?.count || f, I = P.length;
  if (M && M < I) {
    const N = P.slice(0, M), T = P.slice(M, I), F = y?.style || v, j = ((t = y?.popover) === null || t === void 0 ? void 0 : t.trigger) || m || "hover", A = ((n = y?.popover) === null || n === void 0 ? void 0 : n.placement) || g || "top", B = Object.assign(Object.assign({
      content: T
    }, y?.popover), {
      classNames: {
        root: U(`${C}-popover`, (a = (r = y?.popover) === null || r === void 0 ? void 0 : r.classNames) === null || a === void 0 ? void 0 : a.root)
      },
      placement: A,
      trigger: j
    });
    return N.push(/* @__PURE__ */ s.createElement(Ps, Object.assign({
      key: "avatar-popover-key",
      destroyOnHidden: !0
    }, B), /* @__PURE__ */ s.createElement(xs, {
      style: F
    }, `+${I - M}`))), x(/* @__PURE__ */ s.createElement(Mu, {
      shape: h,
      size: p
    }, /* @__PURE__ */ s.createElement("div", {
      className: O,
      style: d
    }, N)));
  }
  return x(/* @__PURE__ */ s.createElement(Mu, {
    shape: h,
    size: p
  }, /* @__PURE__ */ s.createElement("div", {
    className: O,
    style: d
  }, P)));
}, Al = xs;
Al.Group = c$;
var u$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, d$ = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: u$
  }));
}, Ll = /* @__PURE__ */ s.forwardRef(d$);
process.env.NODE_ENV !== "production" && (Ll.displayName = "LeftOutlined");
var f$ = $e.ESC, v$ = $e.TAB;
function m$(e) {
  var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = s.useRef(!1), l = function() {
    if (t) {
      var f, v;
      (f = n.current) === null || f === void 0 || (v = f.focus) === null || v === void 0 || v.call(f), r?.(!1);
    }
  }, c = function() {
    var f;
    return (f = o.current) !== null && f !== void 0 && f.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, u = function(f) {
    switch (f.keyCode) {
      case f$:
        l();
        break;
      case v$: {
        var v = !1;
        i.current || (v = c()), v ? f.preventDefault() : l();
        break;
      }
    }
  };
  s.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), a && kt(c, 3), function() {
      window.removeEventListener("keydown", u), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var g$ = /* @__PURE__ */ Lo(function(e, t) {
  var n = e.overlay, r = e.arrow, a = e.prefixCls, o = Mn(function() {
    var l;
    return typeof n == "function" ? l = n() : l = n, l;
  }, [n]), i = Jr(t, ja(o));
  return /* @__PURE__ */ te.createElement(te.Fragment, null, r && /* @__PURE__ */ te.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ te.cloneElement(o, {
    ref: Zr(o) ? i : void 0
  }));
}), Mr = {
  adjustX: 1,
  adjustY: 1
}, Tr = [0, 0], p$ = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Mr,
    offset: [0, -4],
    targetOffset: Tr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Mr,
    offset: [0, -4],
    targetOffset: Tr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Mr,
    offset: [0, -4],
    targetOffset: Tr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Mr,
    offset: [0, 4],
    targetOffset: Tr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Mr,
    offset: [0, 4],
    targetOffset: Tr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Mr,
    offset: [0, 4],
    targetOffset: Tr
  }
}, h$ = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function b$(e, t) {
  var n, r = e.arrow, a = r === void 0 ? !1 : r, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, l = e.transitionName, c = e.animation, u = e.align, d = e.placement, f = d === void 0 ? "bottomLeft" : d, v = e.placements, p = v === void 0 ? p$ : v, h = e.getPopupContainer, g = e.showAction, m = e.hideAction, b = e.overlayClassName, y = e.overlayStyle, $ = e.visible, C = e.trigger, S = C === void 0 ? ["hover"] : C, x = e.autoFocus, w = e.overlay, E = e.children, O = e.onVisibleChange, P = ut(e, h$), M = te.useState(), I = H(M, 2), N = I[0], T = I[1], F = "visible" in e ? $ : N, j = te.useRef(null), A = te.useRef(null), B = te.useRef(null);
  te.useImperativeHandle(t, function() {
    return j.current;
  });
  var V = function(le) {
    T(le), O?.(le);
  };
  m$({
    visible: F,
    triggerRef: B,
    onVisibleChange: V,
    autoFocus: x,
    overlayRef: A
  });
  var L = function(le) {
    var oe = e.onOverlayClick;
    T(!1), oe && oe(le);
  }, R = function() {
    return /* @__PURE__ */ te.createElement(g$, {
      ref: A,
      overlay: w,
      prefixCls: i,
      arrow: a
    });
  }, z = function() {
    return typeof w == "function" ? R : R();
  }, k = function() {
    var le = e.minOverlayWidthMatchTrigger, oe = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? le : !oe;
  }, q = function() {
    var le = e.openClassName;
    return le !== void 0 ? le : "".concat(i, "-open");
  }, ee = /* @__PURE__ */ te.cloneElement(E, {
    className: U((n = E.props) === null || n === void 0 ? void 0 : n.className, F && q()),
    ref: Zr(E) ? Jr(B, ja(E)) : void 0
  }), re = m;
  return !re && S.indexOf("contextMenu") !== -1 && (re = ["click"]), /* @__PURE__ */ te.createElement(Jo, ye({
    builtinPlacements: p
  }, P, {
    prefixCls: i,
    ref: j,
    popupClassName: U(b, _({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: y,
    action: S,
    showAction: g,
    hideAction: re,
    popupPlacement: f,
    popupAlign: u,
    popupTransitionName: l,
    popupAnimation: c,
    popupVisible: F,
    stretch: k() ? "minWidth" : "",
    popup: z(),
    onPopupVisibleChange: V,
    onPopupClick: L,
    getPopupContainer: h
  }), ee);
}
const y$ = /* @__PURE__ */ te.forwardRef(b$);
var Uv = /* @__PURE__ */ s.createContext(null);
function Xv(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function Yv(e) {
  var t = s.useContext(Uv);
  return Xv(t, e);
}
var S$ = ["children", "locked"], Vn = /* @__PURE__ */ s.createContext(null);
function C$(e, t) {
  var n = D({}, e);
  return Object.keys(t).forEach(function(r) {
    var a = t[r];
    a !== void 0 && (n[r] = a);
  }), n;
}
function Ma(e) {
  var t = e.children, n = e.locked, r = ut(e, S$), a = s.useContext(Vn), o = Da(function() {
    return C$(a, r);
  }, [a, r], function(i, l) {
    return !n && (i[0] !== l[0] || !xa(i[1], l[1], !0));
  });
  return /* @__PURE__ */ s.createElement(Vn.Provider, {
    value: o
  }, t);
}
var $$ = [], Jv = /* @__PURE__ */ s.createContext(null);
function Qo() {
  return s.useContext(Jv);
}
var Qv = /* @__PURE__ */ s.createContext($$);
function Ga(e) {
  var t = s.useContext(Qv);
  return s.useMemo(function() {
    return e !== void 0 ? [].concat(Se(t), [e]) : t;
  }, [t, e]);
}
var Zv = /* @__PURE__ */ s.createContext(null), Rs = /* @__PURE__ */ s.createContext({});
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Af(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), o = Number(a), i = null;
    return a && !Number.isNaN(o) ? i = o : r && i === null && (i = 0), r && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function x$(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Se(e.querySelectorAll("*")).filter(function(r) {
    return Tu(r, t);
  });
  return Tu(e, t) && n.unshift(e), n;
}
var Fl = $e.LEFT, Vl = $e.RIGHT, Bl = $e.UP, bo = $e.DOWN, yo = $e.ENTER, em = $e.ESC, ua = $e.HOME, da = $e.END, Du = [Bl, bo, Fl, Vl];
function w$(e, t, n, r) {
  var a, o = "prev", i = "next", l = "children", c = "parent";
  if (e === "inline" && r === yo)
    return {
      inlineTrigger: !0
    };
  var u = _(_({}, Bl, o), bo, i), d = _(_(_(_({}, Fl, n ? i : o), Vl, n ? o : i), bo, l), yo, l), f = _(_(_(_(_(_({}, Bl, o), bo, i), yo, l), em, c), Fl, n ? l : c), Vl, n ? c : l), v = {
    inline: u,
    horizontal: d,
    vertical: f,
    inlineSub: u,
    horizontalSub: f,
    verticalSub: f
  }, p = (a = v["".concat(e).concat(t ? "" : "Sub")]) === null || a === void 0 ? void 0 : a[r];
  switch (p) {
    case o:
      return {
        offset: -1,
        sibling: !0
      };
    case i:
      return {
        offset: 1,
        sibling: !0
      };
    case c:
      return {
        offset: -1,
        sibling: !1
      };
    case l:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function E$(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function O$(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Is(e, t) {
  var n = x$(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function ju(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = Is(e, t), o = a.length, i = a.findIndex(function(l) {
    return n === l;
  });
  return r < 0 ? i === -1 ? i = o - 1 : i -= 1 : r > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Hl = function(t, n) {
  var r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var l = document.querySelector("[data-menu-id='".concat(Xv(n, i), "']"));
    l && (r.add(l), o.set(l, i), a.set(i, l));
  }), {
    elements: r,
    key2element: a,
    element2key: o
  };
};
function P$(e, t, n, r, a, o, i, l, c, u) {
  var d = s.useRef(), f = s.useRef();
  f.current = t;
  var v = function() {
    kt.cancel(d.current);
  };
  return s.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(p) {
    var h = p.which;
    if ([].concat(Du, [yo, em, ua, da]).includes(h)) {
      var g = o(), m = Hl(g, r), b = m, y = b.elements, $ = b.key2element, C = b.element2key, S = $.get(t), x = O$(S, y), w = C.get(x), E = w$(e, i(w, !0).length === 1, n, h);
      if (!E && h !== ua && h !== da)
        return;
      (Du.includes(h) || [ua, da].includes(h)) && p.preventDefault();
      var O = function(A) {
        if (A) {
          var B = A, V = A.querySelector("a");
          V != null && V.getAttribute("href") && (B = V);
          var L = C.get(A);
          l(L), v(), d.current = kt(function() {
            f.current === L && B.focus();
          });
        }
      };
      if ([ua, da].includes(h) || E.sibling || !x) {
        var P;
        !x || e === "inline" ? P = a.current : P = E$(x);
        var M, I = Is(P, y);
        h === ua ? M = I[0] : h === da ? M = I[I.length - 1] : M = ju(P, y, x, E.offset), O(M);
      } else if (E.inlineTrigger)
        c(w);
      else if (E.offset > 0)
        c(w, !0), v(), d.current = kt(function() {
          m = Hl(g, r);
          var j = x.getAttribute("aria-controls"), A = document.getElementById(j), B = ju(A, m.elements);
          O(B);
        }, 5);
      else if (E.offset < 0) {
        var N = i(w, !0), T = N[N.length - 2], F = $.get(T);
        c(T, !1), O(F);
      }
    }
    u?.(p);
  };
}
function R$(e) {
  Promise.resolve().then(e);
}
var Ns = "__RC_UTIL_PATH_SPLIT__", zu = function(t) {
  return t.join(Ns);
}, I$ = function(t) {
  return t.split(Ns);
}, Wl = "rc-menu-more";
function N$() {
  var e = s.useState({}), t = H(e, 2), n = t[1], r = Ie(/* @__PURE__ */ new Map()), a = Ie(/* @__PURE__ */ new Map()), o = s.useState([]), i = H(o, 2), l = i[0], c = i[1], u = Ie(0), d = Ie(!1), f = function() {
    d.current || n({});
  }, v = ir(function($, C) {
    process.env.NODE_ENV !== "production" && tt(!r.current.has($), "Duplicated key '".concat($, "' used in Menu by path [").concat(C.join(" > "), "]"));
    var S = zu(C);
    a.current.set(S, $), r.current.set($, S), u.current += 1;
    var x = u.current;
    R$(function() {
      x === u.current && f();
    });
  }, []), p = ir(function($, C) {
    var S = zu(C);
    a.current.delete(S), r.current.delete($);
  }, []), h = ir(function($) {
    c($);
  }, []), g = ir(function($, C) {
    var S = r.current.get($) || "", x = I$(S);
    return C && l.includes(x[0]) && x.unshift(Wl), x;
  }, [l]), m = ir(function($, C) {
    return $.filter(function(S) {
      return S !== void 0;
    }).some(function(S) {
      var x = g(S, !0);
      return x.includes(C);
    });
  }, [g]), b = function() {
    var C = Se(r.current.keys());
    return l.length && C.push(Wl), C;
  }, y = ir(function($) {
    var C = "".concat(r.current.get($)).concat(Ns), S = /* @__PURE__ */ new Set();
    return Se(a.current.keys()).forEach(function(x) {
      x.startsWith(C) && S.add(a.current.get(x));
    }), S;
  }, []);
  return s.useEffect(function() {
    return function() {
      d.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: p,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: m,
    getKeyPath: g,
    getKeys: b,
    getSubPathKeys: y
  };
}
function va(e) {
  var t = s.useRef(e);
  t.current = e;
  var n = s.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return e ? n : void 0;
}
var _$ = Math.random().toFixed(5).toString().slice(2), Au = 0;
function M$(e) {
  var t = mn(e, {
    value: e
  }), n = H(t, 2), r = n[0], a = n[1];
  return s.useEffect(function() {
    Au += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(_$, "-").concat(Au);
    a("rc-menu-uuid-".concat(o));
  }, []), r;
}
function tm(e, t, n, r) {
  var a = s.useContext(Vn), o = a.activeKey, i = a.onActive, l = a.onInactive, c = {
    active: o === e
  };
  return t || (c.onMouseEnter = function(u) {
    n?.({
      key: e,
      domEvent: u
    }), i(e);
  }, c.onMouseLeave = function(u) {
    r?.({
      key: e,
      domEvent: u
    }), l(e);
  }), c;
}
function nm(e) {
  var t = s.useContext(Vn), n = t.mode, r = t.rtl, a = t.inlineIndent;
  if (n !== "inline")
    return null;
  var o = e;
  return r ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function rm(e) {
  var t = e.icon, n = e.props, r = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ s.createElement(t, D({}, n)) : typeof t != "boolean" && (a = t), a || r || null);
}
var T$ = ["item"];
function zo(e) {
  var t = e.item, n = ut(e, T$);
  return Object.defineProperty(n, "item", {
    get: function() {
      return tt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var D$ = ["title", "attribute", "elementRef"], j$ = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], z$ = ["active"], A$ = /* @__PURE__ */ (function(e) {
  Zn(n, e);
  var t = er(n);
  function n() {
    return Xt(this, n), t.apply(this, arguments);
  }
  return Yt(n, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, l = a.elementRef, c = ut(a, D$), u = nr(c, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return tt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ s.createElement(Gn.Item, ye({}, i, {
        title: typeof o == "string" ? o : void 0
      }, u, {
        ref: l
      }));
    }
  }]), n;
})(s.Component), L$ = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.style, r = e.className, a = e.eventKey, o = e.warnKey, i = e.disabled, l = e.itemIcon, c = e.children, u = e.role, d = e.onMouseEnter, f = e.onMouseLeave, v = e.onClick, p = e.onKeyDown, h = e.onFocus, g = ut(e, j$), m = Yv(a), b = s.useContext(Vn), y = b.prefixCls, $ = b.onItemClick, C = b.disabled, S = b.overflowDisabled, x = b.itemIcon, w = b.selectedKeys, E = b.onActive, O = s.useContext(Rs), P = O._internalRenderMenuItem, M = "".concat(y, "-item"), I = s.useRef(), N = s.useRef(), T = C || i, F = Qr(t, N), j = Ga(a);
  process.env.NODE_ENV !== "production" && o && tt(!1, "MenuItem should not leave undefined `key`.");
  var A = function(de) {
    return {
      key: a,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Se(j).reverse(),
      item: I.current,
      domEvent: de
    };
  }, B = l || x, V = tm(a, T, d, f), L = V.active, R = ut(V, z$), z = w.includes(a), k = nm(j.length), q = function(de) {
    if (!T) {
      var X = A(de);
      v?.(zo(X)), $(X);
    }
  }, ee = function(de) {
    if (p?.(de), de.which === $e.ENTER) {
      var X = A(de);
      v?.(zo(X)), $(X);
    }
  }, re = function(de) {
    E(a), h?.(de);
  }, Q = {};
  e.role === "option" && (Q["aria-selected"] = z);
  var le = /* @__PURE__ */ s.createElement(A$, ye({
    ref: I,
    elementRef: F,
    role: u === null ? "none" : u || "menuitem",
    tabIndex: i ? null : -1,
    "data-menu-id": S && m ? null : m
  }, nr(g, ["extra"]), R, Q, {
    component: "li",
    "aria-disabled": i,
    style: D(D({}, k), n),
    className: U(M, _(_(_({}, "".concat(M, "-active"), L), "".concat(M, "-selected"), z), "".concat(M, "-disabled"), T), r),
    onClick: q,
    onKeyDown: ee,
    onFocus: re
  }), c, /* @__PURE__ */ s.createElement(rm, {
    props: D(D({}, e), {}, {
      isSelected: z
    }),
    icon: B
  }));
  return P && (le = P(le, e, {
    selected: z
  })), le;
});
function F$(e, t) {
  var n = e.eventKey, r = Qo(), a = Ga(n);
  return s.useEffect(function() {
    if (r)
      return r.registerPath(n, a), function() {
        r.unregisterPath(n, a);
      };
  }, [a]), r ? null : /* @__PURE__ */ s.createElement(L$, ye({}, e, {
    ref: t
  }));
}
const Zo = /* @__PURE__ */ s.forwardRef(F$);
var V$ = ["className", "children"], B$ = function(t, n) {
  var r = t.className, a = t.children, o = ut(t, V$), i = s.useContext(Vn), l = i.prefixCls, c = i.mode, u = i.rtl;
  return /* @__PURE__ */ s.createElement("ul", ye({
    className: U(l, u && "".concat(l, "-rtl"), "".concat(l, "-sub"), "".concat(l, "-").concat(c === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: n
  }), a);
}, _s = /* @__PURE__ */ s.forwardRef(B$);
_s.displayName = "SubMenuList";
function Ms(e, t) {
  return Fn(e).map(function(n, r) {
    if (/* @__PURE__ */ s.isValidElement(n)) {
      var a, o, i = n.key, l = (a = (o = n.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, c = l == null;
      c && (l = "tmp_key-".concat([].concat(Se(t), [r]).join("-")));
      var u = {
        key: l,
        eventKey: l
      };
      return process.env.NODE_ENV !== "production" && c && (u.warnKey = !0), /* @__PURE__ */ s.cloneElement(n, u);
    }
    return n;
  });
}
var cn = {
  adjustX: 1,
  adjustY: 1
}, H$ = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: cn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: cn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: cn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: cn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: cn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: cn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: cn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: cn
  }
}, W$ = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: cn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: cn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: cn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: cn
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: cn
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: cn
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: cn
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: cn
  }
};
function am(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var k$ = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function G$(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, l = e.popupOffset, c = e.disabled, u = e.mode, d = e.onVisibleChange, f = s.useContext(Vn), v = f.getPopupContainer, p = f.rtl, h = f.subMenuOpenDelay, g = f.subMenuCloseDelay, m = f.builtinPlacements, b = f.triggerSubMenuAction, y = f.forceSubMenuRender, $ = f.rootClassName, C = f.motion, S = f.defaultMotions, x = s.useState(!1), w = H(x, 2), E = w[0], O = w[1], P = D(p ? D({}, W$) : D({}, H$), m), M = k$[u], I = am(u, C, S), N = s.useRef(I);
  u !== "inline" && (N.current = I);
  var T = D(D({}, N.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), F = s.useRef();
  return s.useEffect(function() {
    return F.current = kt(function() {
      O(n);
    }), function() {
      kt.cancel(F.current);
    };
  }, [n]), /* @__PURE__ */ s.createElement(Jo, {
    prefixCls: t,
    popupClassName: U("".concat(t, "-popup"), _({}, "".concat(t, "-rtl"), p), i, $),
    stretch: u === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: P,
    popupPlacement: M,
    popupVisible: E,
    popup: a,
    popupStyle: o,
    popupAlign: l && {
      offset: l
    },
    action: c ? [] : [b],
    mouseEnterDelay: h,
    mouseLeaveDelay: g,
    onPopupVisibleChange: d,
    forceRender: y,
    popupMotion: T,
    fresh: !0
  }, r);
}
function K$(e) {
  var t = e.id, n = e.open, r = e.keyPath, a = e.children, o = "inline", i = s.useContext(Vn), l = i.prefixCls, c = i.forceSubMenuRender, u = i.motion, d = i.defaultMotions, f = i.mode, v = s.useRef(!1);
  v.current = f === o;
  var p = s.useState(!v.current), h = H(p, 2), g = h[0], m = h[1], b = v.current ? n : !1;
  s.useEffect(function() {
    v.current && m(!1);
  }, [f]);
  var y = D({}, am(o, u, d));
  r.length > 1 && (y.motionAppear = !1);
  var $ = y.onVisibleChanged;
  return y.onVisibleChanged = function(C) {
    return !v.current && !C && m(!0), $?.(C);
  }, g ? null : /* @__PURE__ */ s.createElement(Ma, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ s.createElement(La, ye({
    visible: b
  }, y, {
    forceRender: c,
    removeOnLeave: !1,
    leavedClassName: "".concat(l, "-hidden")
  }), function(C) {
    var S = C.className, x = C.style;
    return /* @__PURE__ */ s.createElement(_s, {
      id: t,
      className: S,
      style: x
    }, a);
  }));
}
var q$ = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], U$ = ["active"], X$ = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.style, r = e.className, a = e.title, o = e.eventKey, i = e.warnKey, l = e.disabled, c = e.internalPopupClose, u = e.children, d = e.itemIcon, f = e.expandIcon, v = e.popupClassName, p = e.popupOffset, h = e.popupStyle, g = e.onClick, m = e.onMouseEnter, b = e.onMouseLeave, y = e.onTitleClick, $ = e.onTitleMouseEnter, C = e.onTitleMouseLeave, S = ut(e, q$), x = Yv(o), w = s.useContext(Vn), E = w.prefixCls, O = w.mode, P = w.openKeys, M = w.disabled, I = w.overflowDisabled, N = w.activeKey, T = w.selectedKeys, F = w.itemIcon, j = w.expandIcon, A = w.onItemClick, B = w.onOpenChange, V = w.onActive, L = s.useContext(Rs), R = L._internalRenderSubMenuItem, z = s.useContext(Zv), k = z.isSubPathKey, q = Ga(), ee = "".concat(E, "-submenu"), re = M || l, Q = s.useRef(), le = s.useRef();
  process.env.NODE_ENV !== "production" && i && tt(!1, "SubMenu should not leave undefined `key`.");
  var oe = d ?? F, de = f ?? j, X = P.includes(o), K = !I && X, ae = k(T, o), G = tm(o, re, $, C), ne = G.active, Y = ut(G, U$), me = s.useState(!1), pe = H(me, 2), he = pe[0], fe = pe[1], se = function(Ve) {
    re || fe(Ve);
  }, ue = function(Ve) {
    se(!0), m?.({
      key: o,
      domEvent: Ve
    });
  }, xe = function(Ve) {
    se(!1), b?.({
      key: o,
      domEvent: Ve
    });
  }, ve = s.useMemo(function() {
    return ne || (O !== "inline" ? he || k([N], o) : !1);
  }, [O, ne, N, he, o, k]), We = nm(q.length), Ae = function(Ve) {
    re || (y?.({
      key: o,
      domEvent: Ve
    }), O === "inline" && B(o, !X));
  }, Je = va(function(Ue) {
    g?.(zo(Ue)), A(Ue);
  }), Le = function(Ve) {
    O !== "inline" && B(o, Ve);
  }, De = function() {
    V(o);
  }, qe = x && "".concat(x, "-popup"), we = s.useMemo(function() {
    return /* @__PURE__ */ s.createElement(rm, {
      icon: O !== "horizontal" ? de : void 0,
      props: D(D({}, e), {}, {
        isOpen: K,
        // [Legacy] Not sure why need this mark
        isSubMenu: !0
      })
    }, /* @__PURE__ */ s.createElement("i", {
      className: "".concat(ee, "-arrow")
    }));
  }, [O, de, e, K, ee]), Ge = /* @__PURE__ */ s.createElement("div", ye({
    role: "menuitem",
    style: We,
    className: "".concat(ee, "-title"),
    tabIndex: re ? null : -1,
    ref: Q,
    title: typeof a == "string" ? a : null,
    "data-menu-id": I && x ? null : x,
    "aria-expanded": K,
    "aria-haspopup": !0,
    "aria-controls": qe,
    "aria-disabled": re,
    onClick: Ae,
    onFocus: De
  }, Y), a, we), et = s.useRef(O);
  if (O !== "inline" && q.length > 1 ? et.current = "vertical" : et.current = O, !I) {
    var Te = et.current;
    Ge = /* @__PURE__ */ s.createElement(G$, {
      mode: Te,
      prefixCls: ee,
      visible: !c && K && O !== "inline",
      popupClassName: v,
      popupOffset: p,
      popupStyle: h,
      popup: /* @__PURE__ */ s.createElement(
        Ma,
        {
          mode: Te === "horizontal" ? "vertical" : Te
        },
        /* @__PURE__ */ s.createElement(_s, {
          id: qe,
          ref: le
        }, u)
      ),
      disabled: re,
      onVisibleChange: Le
    }, Ge);
  }
  var Fe = /* @__PURE__ */ s.createElement(Gn.Item, ye({
    ref: t,
    role: "none"
  }, S, {
    component: "li",
    style: n,
    className: U(ee, "".concat(ee, "-").concat(O), r, _(_(_(_({}, "".concat(ee, "-open"), K), "".concat(ee, "-active"), ve), "".concat(ee, "-selected"), ae), "".concat(ee, "-disabled"), re)),
    onMouseEnter: ue,
    onMouseLeave: xe
  }), Ge, !I && /* @__PURE__ */ s.createElement(K$, {
    id: qe,
    open: K,
    keyPath: q
  }, u));
  return R && (Fe = R(Fe, e, {
    selected: ae,
    active: ve,
    open: K,
    disabled: re
  })), /* @__PURE__ */ s.createElement(Ma, {
    onItemClick: Je,
    mode: O === "horizontal" ? "vertical" : O,
    itemIcon: oe,
    expandIcon: de
  }, Fe);
}), ei = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, a = Ga(n), o = Ms(r, a), i = Qo();
  s.useEffect(function() {
    if (i)
      return i.registerPath(n, a), function() {
        i.unregisterPath(n, a);
      };
  }, [a]);
  var l;
  return i ? l = o : l = /* @__PURE__ */ s.createElement(X$, ye({
    ref: t
  }, e), o), /* @__PURE__ */ s.createElement(Qv.Provider, {
    value: a
  }, l);
});
process.env.NODE_ENV !== "production" && (ei.displayName = "SubMenu");
function om(e) {
  var t = e.className, n = e.style, r = s.useContext(Vn), a = r.prefixCls, o = Qo();
  return o ? null : /* @__PURE__ */ s.createElement("li", {
    role: "separator",
    className: U("".concat(a, "-item-divider"), t),
    style: n
  });
}
var Y$ = ["className", "title", "eventKey", "children"], J$ = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.className, r = e.title;
  e.eventKey;
  var a = e.children, o = ut(e, Y$), i = s.useContext(Vn), l = i.prefixCls, c = "".concat(l, "-item-group");
  return /* @__PURE__ */ s.createElement("li", ye({
    ref: t,
    role: "presentation"
  }, o, {
    onClick: function(d) {
      return d.stopPropagation();
    },
    className: U(c, n)
  }), /* @__PURE__ */ s.createElement("div", {
    role: "presentation",
    className: "".concat(c, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ s.createElement("ul", {
    role: "group",
    className: "".concat(c, "-list")
  }, a));
}), Ts = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, a = Ga(n), o = Ms(r, a), i = Qo();
  return i ? o : /* @__PURE__ */ s.createElement(J$, ye({
    ref: t
  }, nr(e, ["warnKey"])), o);
});
process.env.NODE_ENV !== "production" && (Ts.displayName = "MenuItemGroup");
var Q$ = ["label", "children", "key", "type", "extra"];
function kl(e, t, n) {
  var r = t.item, a = t.group, o = t.submenu, i = t.divider;
  return (e || []).map(function(l, c) {
    if (l && ze(l) === "object") {
      var u = l, d = u.label, f = u.children, v = u.key, p = u.type, h = u.extra, g = ut(u, Q$), m = v ?? "tmp-".concat(c);
      return f || p === "group" ? p === "group" ? /* @__PURE__ */ s.createElement(a, ye({
        key: m
      }, g, {
        title: d
      }), kl(f, t, n)) : /* @__PURE__ */ s.createElement(o, ye({
        key: m
      }, g, {
        title: d
      }), kl(f, t, n)) : p === "divider" ? /* @__PURE__ */ s.createElement(i, ye({
        key: m
      }, g)) : /* @__PURE__ */ s.createElement(r, ye({
        key: m
      }, g, {
        extra: h
      }), d, (!!h || h === 0) && /* @__PURE__ */ s.createElement("span", {
        className: "".concat(n, "-item-extra")
      }, h));
    }
    return null;
  }).filter(function(l) {
    return l;
  });
}
function Lu(e, t, n, r, a) {
  var o = e, i = D({
    divider: om,
    item: Zo,
    group: Ts,
    submenu: ei
  }, r);
  return t && (o = kl(t, i, a)), Ms(o, n);
}
var Z$ = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], fr = [], ex = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e, a = r.prefixCls, o = a === void 0 ? "rc-menu" : a, i = r.rootClassName, l = r.style, c = r.className, u = r.tabIndex, d = u === void 0 ? 0 : u, f = r.items, v = r.children, p = r.direction, h = r.id, g = r.mode, m = g === void 0 ? "vertical" : g, b = r.inlineCollapsed, y = r.disabled, $ = r.disabledOverflow, C = r.subMenuOpenDelay, S = C === void 0 ? 0.1 : C, x = r.subMenuCloseDelay, w = x === void 0 ? 0.1 : x, E = r.forceSubMenuRender, O = r.defaultOpenKeys, P = r.openKeys, M = r.activeKey, I = r.defaultActiveFirst, N = r.selectable, T = N === void 0 ? !0 : N, F = r.multiple, j = F === void 0 ? !1 : F, A = r.defaultSelectedKeys, B = r.selectedKeys, V = r.onSelect, L = r.onDeselect, R = r.inlineIndent, z = R === void 0 ? 24 : R, k = r.motion, q = r.defaultMotions, ee = r.triggerSubMenuAction, re = ee === void 0 ? "hover" : ee, Q = r.builtinPlacements, le = r.itemIcon, oe = r.expandIcon, de = r.overflowedIndicator, X = de === void 0 ? "..." : de, K = r.overflowedIndicatorPopupClassName, ae = r.getPopupContainer, G = r.onClick, ne = r.onOpenChange, Y = r.onKeyDown, me = r.openAnimation, pe = r.openTransitionName, he = r._internalRenderMenuItem, fe = r._internalRenderSubMenuItem, se = r._internalComponents, ue = ut(r, Z$), xe = s.useMemo(function() {
    return [Lu(v, f, fr, se, o), Lu(v, f, fr, {}, o)];
  }, [v, f, se]), ve = H(xe, 2), We = ve[0], Ae = ve[1], Je = s.useState(!1), Le = H(Je, 2), De = Le[0], qe = Le[1], we = s.useRef(), Ge = M$(h), et = p === "rtl";
  process.env.NODE_ENV !== "production" && tt(!me && !pe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Te = mn(O, {
    value: P,
    postState: function(Xe) {
      return Xe || fr;
    }
  }), Fe = H(Te, 2), Ue = Fe[0], Ve = Fe[1], Ct = function(Xe) {
    var it = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function pt() {
      Ve(Xe), ne?.(Xe);
    }
    it ? zi(pt) : pt();
  }, $t = s.useState(Ue), Lt = H($t, 2), Pt = Lt[0], zt = Lt[1], jt = s.useRef(!1), Et = s.useMemo(function() {
    return (m === "inline" || m === "vertical") && b ? ["vertical", b] : [m, !1];
  }, [m, b]), rt = H(Et, 2), Ke = rt[0], yt = rt[1], st = Ke === "inline", _e = s.useState(Ke), ke = H(_e, 2), Be = ke[0], ge = ke[1], Z = s.useState(yt), J = H(Z, 2), ie = J[0], Ee = J[1];
  s.useEffect(function() {
    ge(Ke), Ee(yt), jt.current && (st ? Ve(Pt) : Ct(fr));
  }, [Ke, yt]);
  var Ce = s.useState(0), Qe = H(Ce, 2), lt = Qe[0], dt = Qe[1], at = lt >= We.length - 1 || Be !== "horizontal" || $;
  s.useEffect(function() {
    st && zt(Ue);
  }, [Ue]), s.useEffect(function() {
    return jt.current = !0, function() {
      jt.current = !1;
    };
  }, []);
  var ft = N$(), ht = ft.registerPath, At = ft.unregisterPath, Kt = ft.refreshOverflowKeys, xt = ft.isSubPathKey, Rt = ft.getKeyPath, ce = ft.getKeys, be = ft.getSubPathKeys, He = s.useMemo(function() {
    return {
      registerPath: ht,
      unregisterPath: At
    };
  }, [ht, At]), ot = s.useMemo(function() {
    return {
      isSubPathKey: xt
    };
  }, [xt]);
  s.useEffect(function() {
    Kt(at ? fr : We.slice(lt + 1).map(function(Re) {
      return Re.key;
    }));
  }, [lt, at]);
  var Ne = mn(M || I && ((n = We[0]) === null || n === void 0 ? void 0 : n.key), {
    value: M
  }), Oe = H(Ne, 2), je = Oe[0], nt = Oe[1], gt = va(function(Re) {
    nt(Re);
  }), wt = va(function() {
    nt(void 0);
  });
  ld(t, function() {
    return {
      list: we.current,
      focus: function(Xe) {
        var it, pt = ce(), St = Hl(pt, Ge), tn = St.elements, nn = St.key2element, hn = St.element2key, Cn = Is(we.current, tn), bn = je ?? (Cn[0] ? hn.get(Cn[0]) : (it = We.find(function(dr) {
          return !dr.props.disabled;
        })) === null || it === void 0 ? void 0 : it.key), yn = nn.get(bn);
        if (bn && yn) {
          var Jt;
          yn == null || (Jt = yn.focus) === null || Jt === void 0 || Jt.call(yn, Xe);
        }
      }
    };
  });
  var Pe = mn(A || [], {
    value: B,
    // Legacy convert key to array
    postState: function(Xe) {
      return Array.isArray(Xe) ? Xe : Xe == null ? fr : [Xe];
    }
  }), Ze = H(Pe, 2), vt = Ze[0], Ht = Ze[1], en = function(Xe) {
    if (T) {
      var it = Xe.key, pt = vt.includes(it), St;
      j ? pt ? St = vt.filter(function(nn) {
        return nn !== it;
      }) : St = [].concat(Se(vt), [it]) : St = [it], Ht(St);
      var tn = D(D({}, Xe), {}, {
        selectedKeys: St
      });
      pt ? L?.(tn) : V?.(tn);
    }
    !j && Ue.length && Be !== "inline" && Ct(fr);
  }, ln = va(function(Re) {
    G?.(zo(Re)), en(Re);
  }), fn = va(function(Re, Xe) {
    var it = Ue.filter(function(St) {
      return St !== Re;
    });
    if (Xe)
      it.push(Re);
    else if (Be !== "inline") {
      var pt = be(Re);
      it = it.filter(function(St) {
        return !pt.has(St);
      });
    }
    xa(Ue, it, !0) || Ct(it, !0);
  }), pn = function(Xe, it) {
    var pt = it ?? !Ue.includes(Xe);
    fn(Xe, pt);
  }, En = P$(Be, je, et, Ge, we, ce, Rt, nt, pn, Y);
  s.useEffect(function() {
    qe(!0);
  }, []);
  var Hn = s.useMemo(function() {
    return {
      _internalRenderMenuItem: he,
      _internalRenderSubMenuItem: fe
    };
  }, [he, fe]), Kn = Be !== "horizontal" || $ ? We : (
    // Need wrap for overflow dropdown that do not response for open
    We.map(function(Re, Xe) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ s.createElement(Ma, {
          key: Re.key,
          overflowDisabled: Xe > lt
        }, Re)
      );
    })
  ), ct = /* @__PURE__ */ s.createElement(Gn, ye({
    id: h,
    ref: we,
    prefixCls: "".concat(o, "-overflow"),
    component: "ul",
    itemComponent: Zo,
    className: U(o, "".concat(o, "-root"), "".concat(o, "-").concat(Be), c, _(_({}, "".concat(o, "-inline-collapsed"), ie), "".concat(o, "-rtl"), et), i),
    dir: p,
    style: l,
    role: "menu",
    tabIndex: d,
    data: Kn,
    renderRawItem: function(Xe) {
      return Xe;
    },
    renderRawRest: function(Xe) {
      var it = Xe.length, pt = it ? We.slice(-it) : null;
      return /* @__PURE__ */ s.createElement(ei, {
        eventKey: Wl,
        title: X,
        disabled: at,
        internalPopupClose: it === 0,
        popupClassName: K
      }, pt);
    },
    maxCount: Be !== "horizontal" || $ ? Gn.INVALIDATE : Gn.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(Xe) {
      dt(Xe);
    },
    onKeyDown: En
  }, ue));
  return /* @__PURE__ */ s.createElement(Rs.Provider, {
    value: Hn
  }, /* @__PURE__ */ s.createElement(Uv.Provider, {
    value: Ge
  }, /* @__PURE__ */ s.createElement(Ma, {
    prefixCls: o,
    rootClassName: i,
    mode: Be,
    openKeys: Ue,
    rtl: et,
    disabled: y,
    motion: De ? k : null,
    defaultMotions: De ? q : null,
    activeKey: je,
    onActive: gt,
    onInactive: wt,
    selectedKeys: vt,
    inlineIndent: z,
    subMenuOpenDelay: S,
    subMenuCloseDelay: w,
    forceSubMenuRender: E,
    builtinPlacements: Q,
    triggerSubMenuAction: re,
    getPopupContainer: ae,
    itemIcon: le,
    expandIcon: oe,
    onItemClick: ln,
    onOpenChange: fn
  }, /* @__PURE__ */ s.createElement(Zv.Provider, {
    value: ot
  }, ct), /* @__PURE__ */ s.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ s.createElement(Jv.Provider, {
    value: He
  }, Ae)))));
}), Ka = ex;
Ka.Item = Zo;
Ka.SubMenu = ei;
Ka.ItemGroup = Ts;
Ka.Divider = om;
var tx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, nx = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: tx
  }));
}, im = /* @__PURE__ */ s.forwardRef(nx);
process.env.NODE_ENV !== "production" && (im.displayName = "EllipsisOutlined");
function Ds(e) {
  return Bt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const js = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: l,
    lineHeightLG: c,
    paddingSM: u,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: p,
    colorPrimary: h,
    controlOutlineWidth: g,
    controlOutline: m,
    colorErrorOutline: b,
    colorWarningOutline: y,
    colorBgContainer: $,
    inputFontSize: C,
    inputFontSizeLG: S,
    inputFontSizeSM: x
  } = e, w = C || n, E = x || w, O = S || l, P = Math.round((t - w * r) / 2 * 10) / 10 - a, M = Math.round((o - E * r) / 2 * 10) / 10 - a, I = Math.ceil((i - O * c) / 2 * 10) / 10 - a;
  return {
    paddingBlock: Math.max(P, 0),
    paddingBlockSM: Math.max(M, 0),
    paddingBlockLG: Math.max(I, 0),
    paddingInline: u - a,
    paddingInlineSM: d - a,
    paddingInlineLG: f - a,
    addonBg: v,
    activeBorderColor: h,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${g}px ${m}`,
    errorActiveShadow: `0 0 0 ${g}px ${b}`,
    warningActiveShadow: `0 0 0 ${g}px ${y}`,
    hoverBg: $,
    activeBg: $,
    inputFontSize: w,
    inputFontSizeLG: O,
    inputFontSizeSM: E
  };
}, rx = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), ti = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, rx(Bt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), zs = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Fu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, zs(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), ax = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, zs(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, ti(e))
  }), Fu(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Fu(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Vu = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), ox = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Vu(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Vu(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, ti(e))
    }
  })
}), ix = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, lm = (e, t) => {
  var n;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (n = t?.inputColor) !== null && n !== void 0 ? n : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, Bu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, lm(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), lx = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, lm(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, ti(e))
  }), Bu(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Bu(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Hu = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), sx = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, Hu(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Hu(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), sm = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${W(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Wu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, sm(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), cx = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sm(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), Wu(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Wu(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), ux = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), cm = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${W(t)} ${W(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, As = (e) => ({
  padding: `${W(e.paddingBlockSM)} ${W(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Ls = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${W(e.paddingBlock)} ${W(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, ux(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, cm(e)),
  "&-sm": Object.assign({}, As(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), dx = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, cm(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, As(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${W(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${W(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${W(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${W(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${W(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Go()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, fx = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: a
  } = e, i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, gn(e)), Ls(e)), ax(e)), lx(e)), ix(e)), cx(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, vx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${W(e.inputAffixPadding)}`
      }
    }
  };
}, mx = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: l
  } = e, c = `${t}-affix-wrapper`, u = `${t}-affix-wrapper-disabled`;
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ls(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), vx(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [u]: {
      // password disabled
      [`${l}${t}-password-icon`]: {
        color: o,
        cursor: "not-allowed",
        "&:hover": {
          color: o
        }
      }
    }
  };
}, gx = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, gn(e)), dx(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, ox(e)), sx(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, px = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [t]: {
        "&:not([disabled]):hover, &:not([disabled]):focus": {
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-color-primary):not(${n}-btn-variant-text)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-color-primary)`]: {
            color: e.colorTextDescription,
            "&:not([disabled]):hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              inset: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, hx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
};
un(["Input", "Shared"], (e) => {
  const t = Bt(e, Ds(e));
  return [fx(t), mx(t)];
}, js, {
  resetFont: !1
});
un(["Input", "Component"], (e) => {
  const t = Bt(e, Ds(e));
  return [
    gx(t),
    px(t),
    hx(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Yf(t)
  ];
}, js, {
  resetFont: !1
});
var bx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, yx = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: bx
  }));
}, um = /* @__PURE__ */ s.forwardRef(yx);
process.env.NODE_ENV !== "production" && (um.displayName = "PlusOutlined");
const ni = /* @__PURE__ */ Ta(null);
var Sx = function(t) {
  var n = t.activeTabOffset, r = t.horizontal, a = t.rtl, o = t.indicator, i = o === void 0 ? {} : o, l = i.size, c = i.align, u = c === void 0 ? "center" : c, d = _t(), f = H(d, 2), v = f[0], p = f[1], h = Ie(), g = te.useCallback(function(b) {
    return typeof l == "function" ? l(b) : typeof l == "number" ? l : b;
  }, [l]);
  function m() {
    kt.cancel(h.current);
  }
  return Wt(function() {
    var b = {};
    if (n)
      if (r) {
        b.width = g(n.width);
        var y = a ? "right" : "left";
        u === "start" && (b[y] = n[y]), u === "center" && (b[y] = n[y] + n.width / 2, b.transform = a ? "translateX(50%)" : "translateX(-50%)"), u === "end" && (b[y] = n[y] + n.width, b.transform = "translateX(-100%)");
      } else
        b.height = g(n.height), u === "start" && (b.top = n.top), u === "center" && (b.top = n.top + n.height / 2, b.transform = "translateY(-50%)"), u === "end" && (b.top = n.top + n.height, b.transform = "translateY(-100%)");
    return m(), h.current = kt(function() {
      var $ = v && b && Object.keys(b).every(function(C) {
        var S = b[C], x = v[C];
        return typeof S == "number" && typeof x == "number" ? Math.round(S) === Math.round(x) : S === x;
      });
      $ || p(b);
    }), m;
  }, [JSON.stringify(n), r, a, u, g]), {
    style: v
  };
}, ku = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function Cx(e, t, n) {
  return Mn(function() {
    for (var r, a = /* @__PURE__ */ new Map(), o = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || ku, i = o.left + o.width, l = 0; l < e.length; l += 1) {
      var c = e[l].key, u = t.get(c);
      if (!u) {
        var d;
        u = t.get((d = e[l - 1]) === null || d === void 0 ? void 0 : d.key) || ku;
      }
      var f = a.get(c) || D({}, u);
      f.right = i - f.left - f.width, a.set(c, f);
    }
    return a;
  }, [e.map(function(r) {
    return r.key;
  }).join("_"), t, n]);
}
function Gu(e, t) {
  var n = s.useRef(e), r = s.useState({}), a = H(r, 2), o = a[1];
  function i(l) {
    var c = typeof l == "function" ? l(n.current) : l;
    c !== n.current && t(c, n.current), n.current = c, o({});
  }
  return [n.current, i];
}
var $x = 0.1, Ku = 0.01, So = 20, qu = Math.pow(0.995, So);
function xx(e, t) {
  var n = _t(), r = H(n, 2), a = r[0], o = r[1], i = _t(0), l = H(i, 2), c = l[0], u = l[1], d = _t(0), f = H(d, 2), v = f[0], p = f[1], h = _t(), g = H(h, 2), m = g[0], b = g[1], y = Ie();
  function $(O) {
    var P = O.touches[0], M = P.screenX, I = P.screenY;
    o({
      x: M,
      y: I
    }), window.clearInterval(y.current);
  }
  function C(O) {
    if (a) {
      var P = O.touches[0], M = P.screenX, I = P.screenY;
      o({
        x: M,
        y: I
      });
      var N = M - a.x, T = I - a.y;
      t(N, T);
      var F = Date.now();
      u(F), p(F - c), b({
        x: N,
        y: T
      });
    }
  }
  function S() {
    if (a && (o(null), b(null), m)) {
      var O = m.x / v, P = m.y / v, M = Math.abs(O), I = Math.abs(P);
      if (Math.max(M, I) < $x) return;
      var N = O, T = P;
      y.current = window.setInterval(function() {
        if (Math.abs(N) < Ku && Math.abs(T) < Ku) {
          window.clearInterval(y.current);
          return;
        }
        N *= qu, T *= qu, t(N * So, T * So);
      }, So);
    }
  }
  var x = Ie();
  function w(O) {
    var P = O.deltaX, M = O.deltaY, I = 0, N = Math.abs(P), T = Math.abs(M);
    N === T ? I = x.current === "x" ? P : M : N > T ? (I = P, x.current = "x") : (I = M, x.current = "y"), t(-I, -I) && O.preventDefault();
  }
  var E = Ie(null);
  E.current = {
    onTouchStart: $,
    onTouchMove: C,
    onTouchEnd: S,
    onWheel: w
  }, s.useEffect(function() {
    function O(N) {
      E.current.onTouchStart(N);
    }
    function P(N) {
      E.current.onTouchMove(N);
    }
    function M(N) {
      E.current.onTouchEnd(N);
    }
    function I(N) {
      E.current.onWheel(N);
    }
    return document.addEventListener("touchmove", P, {
      passive: !1
    }), document.addEventListener("touchend", M, {
      passive: !0
    }), e.current.addEventListener("touchstart", O, {
      passive: !0
    }), e.current.addEventListener("wheel", I, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", P), document.removeEventListener("touchend", M);
    };
  }, []);
}
function dm(e) {
  var t = _t(0), n = H(t, 2), r = n[0], a = n[1], o = Ie(0), i = Ie();
  return i.current = e, Ki(function() {
    var l;
    (l = i.current) === null || l === void 0 || l.call(i);
  }, [r]), function() {
    o.current === r && (o.current += 1, a(o.current));
  };
}
function wx(e) {
  var t = Ie([]), n = _t({}), r = H(n, 2), a = r[1], o = Ie(typeof e == "function" ? e() : e), i = dm(function() {
    var c = o.current;
    t.current.forEach(function(u) {
      c = u(c);
    }), t.current = [], o.current = c, a({});
  });
  function l(c) {
    t.current.push(c), i();
  }
  return [o.current, l];
}
var Uu = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function Ex(e, t, n, r, a, o, i) {
  var l = i.tabs, c = i.tabPosition, u = i.rtl, d, f, v;
  return ["top", "bottom"].includes(c) ? (d = "width", f = u ? "right" : "left", v = Math.abs(n)) : (d = "height", f = "top", v = -n), Mn(function() {
    if (!l.length)
      return [0, 0];
    for (var p = l.length, h = p, g = 0; g < p; g += 1) {
      var m = e.get(l[g].key) || Uu;
      if (Math.floor(m[f] + m[d]) > Math.floor(v + t)) {
        h = g - 1;
        break;
      }
    }
    for (var b = 0, y = p - 1; y >= 0; y -= 1) {
      var $ = e.get(l[y].key) || Uu;
      if ($[f] < v) {
        b = y + 1;
        break;
      }
    }
    return b > h ? [0, -1] : [b, h];
  }, [e, t, r, a, o, v, c, l.map(function(p) {
    return p.key;
  }).join("_"), u]);
}
function Xu(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(n, r) {
    t[r] = n;
  })) : t = e, JSON.stringify(t);
}
var Ox = "TABS_DQ";
function fm(e) {
  return String(e).replace(/"/g, Ox);
}
function Fs(e, t, n, r) {
  return (
    // Only editable tabs can be removed
    !(!n || // Tabs cannot be removed when disabled
    r || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var vm = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.editable, a = e.locale, o = e.style;
  return !r || r.showAdd === !1 ? null : /* @__PURE__ */ s.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: o,
    "aria-label": a?.addAriaLabel || "Add tab",
    onClick: function(l) {
      r.onEdit("add", {
        event: l
      });
    }
  }, r.addIcon || "+");
}), Gl = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.position, r = e.prefixCls, a = e.extra;
  if (!a)
    return null;
  var o, i = {};
  return ze(a) === "object" && !/* @__PURE__ */ s.isValidElement(a) ? i = a : i.right = a, n === "right" && (o = i.right), n === "left" && (o = i.left), o ? /* @__PURE__ */ s.createElement("div", {
    className: "".concat(r, "-extra-content"),
    ref: t
  }, o) : null;
});
process.env.NODE_ENV !== "production" && (Gl.displayName = "ExtraContent");
var Px = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.id, a = e.tabs, o = e.locale, i = e.mobile, l = e.more, c = l === void 0 ? {} : l, u = e.style, d = e.className, f = e.editable, v = e.tabBarGutter, p = e.rtl, h = e.removeAriaLabel, g = e.onTabClick, m = e.getPopupContainer, b = e.popupClassName, y = _t(!1), $ = H(y, 2), C = $[0], S = $[1], x = _t(null), w = H(x, 2), E = w[0], O = w[1], P = c.icon, M = P === void 0 ? "More" : P, I = "".concat(r, "-more-popup"), N = "".concat(n, "-dropdown"), T = E !== null ? "".concat(I, "-").concat(E) : null, F = o?.dropdownAriaLabel;
  function j(k, q) {
    k.preventDefault(), k.stopPropagation(), f.onEdit("remove", {
      key: q,
      event: k
    });
  }
  var A = /* @__PURE__ */ s.createElement(Ka, {
    onClick: function(q) {
      var ee = q.key, re = q.domEvent;
      g(ee, re), S(!1);
    },
    prefixCls: "".concat(N, "-menu"),
    id: I,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": T,
    selectedKeys: [E],
    "aria-label": F !== void 0 ? F : "expanded dropdown"
  }, a.map(function(k) {
    var q = k.closable, ee = k.disabled, re = k.closeIcon, Q = k.key, le = k.label, oe = Fs(q, re, f, ee);
    return /* @__PURE__ */ s.createElement(Zo, {
      key: Q,
      id: "".concat(I, "-").concat(Q),
      role: "option",
      "aria-controls": r && "".concat(r, "-panel-").concat(Q),
      disabled: ee
    }, /* @__PURE__ */ s.createElement("span", null, le), oe && /* @__PURE__ */ s.createElement("button", {
      type: "button",
      "aria-label": h || "remove",
      tabIndex: 0,
      className: "".concat(N, "-menu-item-remove"),
      onClick: function(X) {
        X.stopPropagation(), j(X, Q);
      }
    }, re || f.removeIcon || "×"));
  }));
  function B(k) {
    for (var q = a.filter(function(oe) {
      return !oe.disabled;
    }), ee = q.findIndex(function(oe) {
      return oe.key === E;
    }) || 0, re = q.length, Q = 0; Q < re; Q += 1) {
      ee = (ee + k + re) % re;
      var le = q[ee];
      if (!le.disabled) {
        O(le.key);
        return;
      }
    }
  }
  function V(k) {
    var q = k.which;
    if (!C) {
      [$e.DOWN, $e.SPACE, $e.ENTER].includes(q) && (S(!0), k.preventDefault());
      return;
    }
    switch (q) {
      case $e.UP:
        B(-1), k.preventDefault();
        break;
      case $e.DOWN:
        B(1), k.preventDefault();
        break;
      case $e.ESC:
        S(!1);
        break;
      case $e.SPACE:
      case $e.ENTER:
        E !== null && g(E, k);
        break;
    }
  }
  Wt(function() {
    var k = document.getElementById(T);
    k && k.scrollIntoView && k.scrollIntoView(!1);
  }, [E]), Wt(function() {
    C || O(null);
  }, [C]);
  var L = _({}, p ? "marginRight" : "marginLeft", v);
  a.length || (L.visibility = "hidden", L.order = 1);
  var R = U(_({}, "".concat(N, "-rtl"), p)), z = i ? null : /* @__PURE__ */ s.createElement(y$, ye({
    prefixCls: N,
    overlay: A,
    visible: a.length ? C : !1,
    onVisibleChange: S,
    overlayClassName: U(R, b),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: m
  }, c), /* @__PURE__ */ s.createElement("button", {
    type: "button",
    className: "".concat(n, "-nav-more"),
    style: L,
    "aria-haspopup": "listbox",
    "aria-controls": I,
    id: "".concat(r, "-more"),
    "aria-expanded": C,
    onKeyDown: V
  }, M));
  return /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(n, "-nav-operations"), d),
    style: u,
    ref: t
  }, z, /* @__PURE__ */ s.createElement(vm, {
    prefixCls: n,
    locale: o,
    editable: f
  }));
});
const Rx = /* @__PURE__ */ s.memo(Px, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var Ix = function(t) {
  var n = t.prefixCls, r = t.id, a = t.active, o = t.focus, i = t.tab, l = i.key, c = i.label, u = i.disabled, d = i.closeIcon, f = i.icon, v = t.closable, p = t.renderWrapper, h = t.removeAriaLabel, g = t.editable, m = t.onClick, b = t.onFocus, y = t.onBlur, $ = t.onKeyDown, C = t.onMouseDown, S = t.onMouseUp, x = t.style, w = t.tabCount, E = t.currentPosition, O = "".concat(n, "-tab"), P = Fs(v, d, g, u);
  function M(j) {
    u || m(j);
  }
  function I(j) {
    j.preventDefault(), j.stopPropagation(), g.onEdit("remove", {
      key: l,
      event: j
    });
  }
  var N = s.useMemo(function() {
    return f && typeof c == "string" ? /* @__PURE__ */ s.createElement("span", null, c) : c;
  }, [c, f]), T = s.useRef(null);
  s.useEffect(function() {
    o && T.current && T.current.focus();
  }, [o]);
  var F = /* @__PURE__ */ s.createElement("div", {
    key: l,
    "data-node-key": fm(l),
    className: U(O, _(_(_(_({}, "".concat(O, "-with-remove"), P), "".concat(O, "-active"), a), "".concat(O, "-disabled"), u), "".concat(O, "-focus"), o)),
    style: x,
    onClick: M
  }, /* @__PURE__ */ s.createElement("div", {
    ref: T,
    role: "tab",
    "aria-selected": a,
    id: r && "".concat(r, "-tab-").concat(l),
    className: "".concat(O, "-btn"),
    "aria-controls": r && "".concat(r, "-panel-").concat(l),
    "aria-disabled": u,
    tabIndex: u ? null : a ? 0 : -1,
    onClick: function(A) {
      A.stopPropagation(), M(A);
    },
    onKeyDown: $,
    onMouseDown: C,
    onMouseUp: S,
    onFocus: b,
    onBlur: y
  }, o && /* @__PURE__ */ s.createElement("div", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "Tab ".concat(E, " of ").concat(w)), f && /* @__PURE__ */ s.createElement("span", {
    className: "".concat(O, "-icon")
  }, f), c && N), P && /* @__PURE__ */ s.createElement("button", {
    type: "button",
    role: "tab",
    "aria-label": h || "remove",
    tabIndex: a ? 0 : -1,
    className: "".concat(O, "-remove"),
    onClick: function(A) {
      A.stopPropagation(), I(A);
    }
  }, d || g.removeIcon || "×"));
  return p ? p(F) : F;
}, Nx = function(t, n) {
  var r = t.offsetWidth, a = t.offsetHeight, o = t.offsetTop, i = t.offsetLeft, l = t.getBoundingClientRect(), c = l.width, u = l.height, d = l.left, f = l.top;
  return Math.abs(c - r) < 1 ? [c, u, d - n.left, f - n.top] : [r, a, i, o];
}, Dr = function(t) {
  var n = t.current || {}, r = n.offsetWidth, a = r === void 0 ? 0 : r, o = n.offsetHeight, i = o === void 0 ? 0 : o;
  if (t.current) {
    var l = t.current.getBoundingClientRect(), c = l.width, u = l.height;
    if (Math.abs(c - a) < 1)
      return [c, u];
  }
  return [a, i];
}, so = function(t, n) {
  return t[n ? 0 : 1];
}, Yu = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.className, r = e.style, a = e.id, o = e.animated, i = e.activeKey, l = e.rtl, c = e.extra, u = e.editable, d = e.locale, f = e.tabPosition, v = e.tabBarGutter, p = e.children, h = e.onTabClick, g = e.onTabScroll, m = e.indicator, b = s.useContext(ni), y = b.prefixCls, $ = b.tabs, C = Ie(null), S = Ie(null), x = Ie(null), w = Ie(null), E = Ie(null), O = Ie(null), P = Ie(null), M = f === "top" || f === "bottom", I = Gu(0, function(Ne, Oe) {
    M && g && g({
      direction: Ne > Oe ? "left" : "right"
    });
  }), N = H(I, 2), T = N[0], F = N[1], j = Gu(0, function(Ne, Oe) {
    !M && g && g({
      direction: Ne > Oe ? "top" : "bottom"
    });
  }), A = H(j, 2), B = A[0], V = A[1], L = _t([0, 0]), R = H(L, 2), z = R[0], k = R[1], q = _t([0, 0]), ee = H(q, 2), re = ee[0], Q = ee[1], le = _t([0, 0]), oe = H(le, 2), de = oe[0], X = oe[1], K = _t([0, 0]), ae = H(K, 2), G = ae[0], ne = ae[1], Y = wx(/* @__PURE__ */ new Map()), me = H(Y, 2), pe = me[0], he = me[1], fe = Cx($, pe, re[0]), se = so(z, M), ue = so(re, M), xe = so(de, M), ve = so(G, M), We = Math.floor(se) < Math.floor(ue + xe), Ae = We ? se - ve : se - xe, Je = "".concat(y, "-nav-operations-hidden"), Le = 0, De = 0;
  M && l ? (Le = 0, De = Math.max(0, ue - Ae)) : (Le = Math.min(0, Ae - ue), De = 0);
  function qe(Ne) {
    return Ne < Le ? Le : Ne > De ? De : Ne;
  }
  var we = Ie(null), Ge = _t(), et = H(Ge, 2), Te = et[0], Fe = et[1];
  function Ue() {
    Fe(Date.now());
  }
  function Ve() {
    we.current && clearTimeout(we.current);
  }
  xx(w, function(Ne, Oe) {
    function je(nt, gt) {
      nt(function(wt) {
        var Pe = qe(wt + gt);
        return Pe;
      });
    }
    return We ? (M ? je(F, Ne) : je(V, Oe), Ve(), Ue(), !0) : !1;
  }), Wt(function() {
    return Ve(), Te && (we.current = setTimeout(function() {
      Fe(0);
    }, 100)), Ve;
  }, [Te]);
  var Ct = Ex(
    fe,
    // Container
    Ae,
    // Transform
    M ? T : B,
    // Tabs
    ue,
    // Add
    xe,
    // Operation
    ve,
    D(D({}, e), {}, {
      tabs: $
    })
  ), $t = H(Ct, 2), Lt = $t[0], Pt = $t[1], zt = an(function() {
    var Ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i, Oe = fe.get(Ne) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (M) {
      var je = T;
      l ? Oe.right < T ? je = Oe.right : Oe.right + Oe.width > T + Ae && (je = Oe.right + Oe.width - Ae) : Oe.left < -T ? je = -Oe.left : Oe.left + Oe.width > -T + Ae && (je = -(Oe.left + Oe.width - Ae)), V(0), F(qe(je));
    } else {
      var nt = B;
      Oe.top < -B ? nt = -Oe.top : Oe.top + Oe.height > -B + Ae && (nt = -(Oe.top + Oe.height - Ae)), F(0), V(qe(nt));
    }
  }), jt = _t(), Et = H(jt, 2), rt = Et[0], Ke = Et[1], yt = _t(!1), st = H(yt, 2), _e = st[0], ke = st[1], Be = $.filter(function(Ne) {
    return !Ne.disabled;
  }).map(function(Ne) {
    return Ne.key;
  }), ge = function(Oe) {
    var je = Be.indexOf(rt || i), nt = Be.length, gt = (je + Oe + nt) % nt, wt = Be[gt];
    Ke(wt);
  }, Z = function(Oe, je) {
    var nt = Be.indexOf(Oe), gt = $.find(function(Pe) {
      return Pe.key === Oe;
    }), wt = Fs(gt?.closable, gt?.closeIcon, u, gt?.disabled);
    wt && (je.preventDefault(), je.stopPropagation(), u.onEdit("remove", {
      key: Oe,
      event: je
    }), nt === Be.length - 1 ? ge(-1) : ge(1));
  }, J = function(Oe, je) {
    ke(!0), je.button === 1 && Z(Oe, je);
  }, ie = function(Oe) {
    var je = Oe.code, nt = l && M, gt = Be[0], wt = Be[Be.length - 1];
    switch (je) {
      // LEFT
      case "ArrowLeft": {
        M && ge(nt ? 1 : -1);
        break;
      }
      // RIGHT
      case "ArrowRight": {
        M && ge(nt ? -1 : 1);
        break;
      }
      // UP
      case "ArrowUp": {
        Oe.preventDefault(), M || ge(-1);
        break;
      }
      // DOWN
      case "ArrowDown": {
        Oe.preventDefault(), M || ge(1);
        break;
      }
      // HOME
      case "Home": {
        Oe.preventDefault(), Ke(gt);
        break;
      }
      // END
      case "End": {
        Oe.preventDefault(), Ke(wt);
        break;
      }
      // Enter & Space
      case "Enter":
      case "Space": {
        Oe.preventDefault(), h(rt ?? i, Oe);
        break;
      }
      // Backspace
      case "Backspace":
      case "Delete": {
        Z(rt, Oe);
        break;
      }
    }
  }, Ee = {};
  M ? Ee[l ? "marginRight" : "marginLeft"] = v : Ee.marginTop = v;
  var Ce = $.map(function(Ne, Oe) {
    var je = Ne.key;
    return /* @__PURE__ */ s.createElement(Ix, {
      id: a,
      prefixCls: y,
      key: je,
      tab: Ne,
      style: Oe === 0 ? void 0 : Ee,
      closable: Ne.closable,
      editable: u,
      active: je === i,
      focus: je === rt,
      renderWrapper: p,
      removeAriaLabel: d?.removeAriaLabel,
      tabCount: Be.length,
      currentPosition: Oe + 1,
      onClick: function(gt) {
        h(je, gt);
      },
      onKeyDown: ie,
      onFocus: function() {
        _e || Ke(je), zt(je), Ue(), w.current && (l || (w.current.scrollLeft = 0), w.current.scrollTop = 0);
      },
      onBlur: function() {
        Ke(void 0);
      },
      onMouseDown: function(gt) {
        return J(je, gt);
      },
      onMouseUp: function() {
        ke(!1);
      }
    });
  }), Qe = function() {
    return he(function() {
      var Oe, je = /* @__PURE__ */ new Map(), nt = (Oe = E.current) === null || Oe === void 0 ? void 0 : Oe.getBoundingClientRect();
      return $.forEach(function(gt) {
        var wt, Pe = gt.key, Ze = (wt = E.current) === null || wt === void 0 ? void 0 : wt.querySelector('[data-node-key="'.concat(fm(Pe), '"]'));
        if (Ze) {
          var vt = Nx(Ze, nt), Ht = H(vt, 4), en = Ht[0], ln = Ht[1], fn = Ht[2], pn = Ht[3];
          je.set(Pe, {
            width: en,
            height: ln,
            left: fn,
            top: pn
          });
        }
      }), je;
    });
  };
  Wt(function() {
    Qe();
  }, [$.map(function(Ne) {
    return Ne.key;
  }).join("_")]);
  var lt = dm(function() {
    var Ne = Dr(C), Oe = Dr(S), je = Dr(x);
    k([Ne[0] - Oe[0] - je[0], Ne[1] - Oe[1] - je[1]]);
    var nt = Dr(P);
    X(nt);
    var gt = Dr(O);
    ne(gt);
    var wt = Dr(E);
    Q([wt[0] - nt[0], wt[1] - nt[1]]), Qe();
  }), dt = $.slice(0, Lt), at = $.slice(Pt + 1), ft = [].concat(Se(dt), Se(at)), ht = fe.get(i), At = Sx({
    activeTabOffset: ht,
    horizontal: M,
    indicator: m,
    rtl: l
  }), Kt = At.style;
  Wt(function() {
    zt();
  }, [i, Le, De, Xu(ht), Xu(fe), M]), Wt(function() {
    lt();
  }, [l]);
  var xt = !!ft.length, Rt = "".concat(y, "-nav-wrap"), ce, be, He, ot;
  return M ? l ? (be = T > 0, ce = T !== De) : (ce = T < 0, be = T !== Le) : (He = B < 0, ot = B !== Le), /* @__PURE__ */ s.createElement(Nn, {
    onResize: lt
  }, /* @__PURE__ */ s.createElement("div", {
    ref: Qr(t, C),
    role: "tablist",
    "aria-orientation": M ? "horizontal" : "vertical",
    className: U("".concat(y, "-nav"), n),
    style: r,
    onKeyDown: function() {
      Ue();
    }
  }, /* @__PURE__ */ s.createElement(Gl, {
    ref: S,
    position: "left",
    extra: c,
    prefixCls: y
  }), /* @__PURE__ */ s.createElement(Nn, {
    onResize: lt
  }, /* @__PURE__ */ s.createElement("div", {
    className: U(Rt, _(_(_(_({}, "".concat(Rt, "-ping-left"), ce), "".concat(Rt, "-ping-right"), be), "".concat(Rt, "-ping-top"), He), "".concat(Rt, "-ping-bottom"), ot)),
    ref: w
  }, /* @__PURE__ */ s.createElement(Nn, {
    onResize: lt
  }, /* @__PURE__ */ s.createElement("div", {
    ref: E,
    className: "".concat(y, "-nav-list"),
    style: {
      transform: "translate(".concat(T, "px, ").concat(B, "px)"),
      transition: Te ? "none" : void 0
    }
  }, Ce, /* @__PURE__ */ s.createElement(vm, {
    ref: P,
    prefixCls: y,
    locale: d,
    editable: u,
    style: D(D({}, Ce.length === 0 ? void 0 : Ee), {}, {
      visibility: xt ? "hidden" : null
    })
  }), /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(y, "-ink-bar"), _({}, "".concat(y, "-ink-bar-animated"), o.inkBar)),
    style: Kt
  }))))), /* @__PURE__ */ s.createElement(Rx, ye({}, e, {
    removeAriaLabel: d?.removeAriaLabel,
    ref: O,
    prefixCls: y,
    tabs: ft,
    className: !xt && Je,
    tabMoving: !!Te
  })), /* @__PURE__ */ s.createElement(Gl, {
    ref: x,
    position: "right",
    extra: c,
    prefixCls: y
  })));
}), Vs = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, a = e.style, o = e.id, i = e.active, l = e.tabKey, c = e.children;
  return /* @__PURE__ */ s.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(l),
    role: "tabpanel",
    tabIndex: i ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(l),
    "aria-hidden": !i,
    style: a,
    className: U(n, i && "".concat(n, "-active"), r),
    ref: t
  }, c);
});
process.env.NODE_ENV !== "production" && (Vs.displayName = "TabPane");
var _x = ["renderTabBar"], Mx = ["label", "key"], mm = function(t) {
  var n = t.renderTabBar, r = ut(t, _x), a = s.useContext(ni), o = a.tabs;
  if (n) {
    var i = D(D({}, r), {}, {
      // Legacy support. We do not use this actually
      panes: o.map(function(l) {
        var c = l.label, u = l.key, d = ut(l, Mx);
        return /* @__PURE__ */ s.createElement(Vs, ye({
          tab: c,
          key: u,
          tabKey: u
        }, d));
      })
    });
    return n(i, Yu);
  }
  return /* @__PURE__ */ s.createElement(Yu, r);
};
process.env.NODE_ENV !== "production" && (mm.displayName = "TabNavListWrapper");
var Tx = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], Dx = function(t) {
  var n = t.id, r = t.activeKey, a = t.animated, o = t.tabPosition, i = t.destroyInactiveTabPane, l = s.useContext(ni), c = l.prefixCls, u = l.tabs, d = a.tabPane, f = "".concat(c, "-tabpane");
  return /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(c, "-content-holder"))
  }, /* @__PURE__ */ s.createElement("div", {
    className: U("".concat(c, "-content"), "".concat(c, "-content-").concat(o), _({}, "".concat(c, "-content-animated"), d))
  }, u.map(function(v) {
    var p = v.key, h = v.forceRender, g = v.style, m = v.className, b = v.destroyInactiveTabPane, y = ut(v, Tx), $ = p === r;
    return /* @__PURE__ */ s.createElement(La, ye({
      key: p,
      visible: $,
      forceRender: h,
      removeOnLeave: !!(i || b),
      leavedClassName: "".concat(f, "-hidden")
    }, a.tabPaneMotion), function(C, S) {
      var x = C.style, w = C.className;
      return /* @__PURE__ */ s.createElement(Vs, ye({}, y, {
        prefixCls: f,
        id: n,
        tabKey: p,
        animated: d,
        active: $,
        style: D(D({}, g), x),
        className: U(m, w),
        ref: S
      }));
    });
  })));
};
function jx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = D({
    inkBar: !0
  }, ze(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && tt(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var zx = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], Ju = 0, gm = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.id, r = e.prefixCls, a = r === void 0 ? "rc-tabs" : r, o = e.className, i = e.items, l = e.direction, c = e.activeKey, u = e.defaultActiveKey, d = e.editable, f = e.animated, v = e.tabPosition, p = v === void 0 ? "top" : v, h = e.tabBarGutter, g = e.tabBarStyle, m = e.tabBarExtraContent, b = e.locale, y = e.more, $ = e.destroyInactiveTabPane, C = e.renderTabBar, S = e.onChange, x = e.onTabClick, w = e.onTabScroll, E = e.getPopupContainer, O = e.popupClassName, P = e.indicator, M = ut(e, zx), I = s.useMemo(function() {
    return (i || []).filter(function(G) {
      return G && ze(G) === "object" && "key" in G;
    });
  }, [i]), N = l === "rtl", T = jx(f), F = _t(!1), j = H(F, 2), A = j[0], B = j[1];
  Wt(function() {
    B(gs());
  }, []);
  var V = mn(function() {
    var G;
    return (G = I[0]) === null || G === void 0 ? void 0 : G.key;
  }, {
    value: c,
    defaultValue: u
  }), L = H(V, 2), R = L[0], z = L[1], k = _t(function() {
    return I.findIndex(function(G) {
      return G.key === R;
    });
  }), q = H(k, 2), ee = q[0], re = q[1];
  Wt(function() {
    var G = I.findIndex(function(Y) {
      return Y.key === R;
    });
    if (G === -1) {
      var ne;
      G = Math.max(0, Math.min(ee, I.length - 1)), z((ne = I[G]) === null || ne === void 0 ? void 0 : ne.key);
    }
    re(G);
  }, [I.map(function(G) {
    return G.key;
  }).join("_"), R, ee]);
  var Q = mn(null, {
    value: n
  }), le = H(Q, 2), oe = le[0], de = le[1];
  Wt(function() {
    n || (de("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : Ju)), Ju += 1);
  }, []);
  function X(G, ne) {
    x?.(G, ne);
    var Y = G !== R;
    z(G), Y && S?.(G);
  }
  var K = {
    id: oe,
    activeKey: R,
    animated: T,
    tabPosition: p,
    rtl: N,
    mobile: A
  }, ae = D(D({}, K), {}, {
    editable: d,
    locale: b,
    more: y,
    tabBarGutter: h,
    onTabClick: X,
    onTabScroll: w,
    extra: m,
    style: g,
    panes: null,
    getPopupContainer: E,
    popupClassName: O,
    indicator: P
  });
  return /* @__PURE__ */ s.createElement(ni.Provider, {
    value: {
      tabs: I,
      prefixCls: a
    }
  }, /* @__PURE__ */ s.createElement("div", ye({
    ref: t,
    id: n,
    className: U(a, "".concat(a, "-").concat(p), _(_(_({}, "".concat(a, "-mobile"), A), "".concat(a, "-editable"), d), "".concat(a, "-rtl"), N), o)
  }, M), /* @__PURE__ */ s.createElement(mm, ye({}, ae, {
    renderTabBar: C
  })), /* @__PURE__ */ s.createElement(Dx, ye({
    destroyInactiveTabPane: $
  }, K, {
    animated: T
  }))));
});
process.env.NODE_ENV !== "production" && (gm.displayName = "Tabs");
const Ax = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function Lx(e, t = {
  inkBar: !0,
  tabPane: !1
}) {
  let n;
  return t === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, Ax), {
    motionName: qo(e, "switch")
  })), n;
}
var Fx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Vx(e) {
  return e.filter((t) => t);
}
function Bx(e, t) {
  if (process.env.NODE_ENV !== "production" && on("Tabs").deprecated(!t, "Tabs.TabPane", "items"), e)
    return e.map((r) => {
      var a;
      const o = (a = r.destroyOnHidden) !== null && a !== void 0 ? a : r.destroyInactiveTabPane;
      return Object.assign(Object.assign({}, r), {
        // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
        destroyInactiveTabPane: o
      });
    });
  const n = Fn(t).map((r) => {
    if (/* @__PURE__ */ s.isValidElement(r)) {
      const {
        key: a,
        props: o
      } = r, i = o || {}, {
        tab: l
      } = i, c = Fx(i, ["tab"]);
      return Object.assign(Object.assign({
        key: String(a)
      }, c), {
        label: l
      });
    }
    return null;
  });
  return Vx(n);
}
const Hx = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${n}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [No(e, "slide-up"), No(e, "slide-down")]
  ];
}, Wx = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardBg: r,
    cardGutter: a,
    colorBorderSecondary: o,
    itemSelectedColor: i
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: n,
          background: r,
          border: `${W(e.lineWidth)} ${e.lineType} ${o}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: i,
          background: e.colorBgContainer
        },
        [`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: Ia(e, -3),
        [`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
          outline: "none"
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: W(a)
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)}`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: W(a)
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${W(e.borderRadiusLG)} 0 0 ${W(e.borderRadiusLG)}`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, kx = (e) => {
  const {
    componentCls: t,
    itemHoverColor: n,
    dropdownEdgeChildVerticalPadding: r
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, gn(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${W(r)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, br), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${W(e.paddingXXS)} ${W(e.paddingSM)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorIcon,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: n
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, Gx = (e) => {
  const {
    componentCls: t,
    margin: n,
    colorBorderSecondary: r,
    horizontalMargin: a,
    verticalItemPadding: o,
    verticalItemMargin: i,
    calc: l
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: a,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${W(e.lineWidth)} ${e.lineType} ${r}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: n,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: l(e.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: o,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: i
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: W(l(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: l(e.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: !0,
          value: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, Kx = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: n,
    cardPaddingLG: r,
    cardHeightSM: a,
    cardHeightLG: o,
    horizontalItemPaddingSM: i,
    horizontalItemPaddingLG: l
  } = e;
  return {
    // >>>>> shared
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: i,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: l,
            fontSize: e.titleFontSizeLG,
            lineHeight: e.lineHeightLG
          }
        }
      }
    },
    // >>>>> card
    [`${t}-card`]: {
      // Small
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: n
          },
          [`${t}-nav-add`]: {
            minWidth: a,
            minHeight: a
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${W(e.borderRadius)} ${W(e.borderRadius)}`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${W(e.borderRadius)} ${W(e.borderRadius)} 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${W(e.borderRadius)} ${W(e.borderRadius)} 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${W(e.borderRadius)} 0 0 ${W(e.borderRadius)}`
            }
          }
        }
      },
      // Large
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          },
          [`${t}-nav-add`]: {
            minWidth: o,
            minHeight: o
          }
        }
      }
    }
  };
}, qx = (e) => {
  const {
    componentCls: t,
    itemActiveColor: n,
    itemHoverColor: r,
    iconCls: a,
    tabsHorizontalItemMargin: o,
    horizontalItemPadding: i,
    itemSelectedColor: l,
    itemColor: c
  } = e, u = `${t}-tab`;
  return {
    [u]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: i,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: c,
      "&-btn, &-remove": {
        "&:focus:not(:focus-visible), &:active": {
          color: n
        }
      },
      "&-btn": {
        outline: "none",
        transition: `all ${e.motionDurationSlow}`,
        [`${u}-icon:not(:last-child)`]: {
          marginInlineEnd: e.marginSM
        }
      },
      "&-remove": Object.assign({
        flex: "none",
        lineHeight: 1,
        marginRight: {
          _skip_check_: !0,
          value: e.calc(e.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorIcon,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      }, Po(e)),
      "&:hover": {
        color: r
      },
      [`&${u}-active ${u}-btn`]: {
        color: l,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${u}-focus ${u}-btn:focus-visible`]: Ia(e),
      [`&${u}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${u}-remove ${a}`]: {
        margin: 0,
        verticalAlign: "middle"
      },
      [`${a}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${u} + ${u}`]: {
      margin: {
        _skip_check_: !0,
        value: o
      }
    }
  };
}, Ux = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: n,
    iconCls: r,
    cardGutter: a,
    calc: o
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: n
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [r]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: W(e.marginSM)
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: W(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: W(o(e.marginXXS).mul(-1).equal())
            },
            [r]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: a
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, Xx = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardHeight: r,
    cardGutter: a,
    itemHoverColor: o,
    itemActiveColor: i,
    colorBorderSecondary: l
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, gn(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: n,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.calc(e.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: Object.assign({
          minWidth: r,
          minHeight: r,
          marginLeft: {
            _skip_check_: !0,
            value: a
          },
          background: "transparent",
          border: `${W(e.lineWidth)} ${e.lineType} ${l}`,
          borderRadius: `${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: o
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: i
          }
        }, Po(e, -3))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), qx(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: Object.assign(Object.assign({}, Po(e)), {
        "&-hidden": {
          display: "none"
        }
      })
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
            margin: "auto"
          }
        }
      }
    }
  };
}, Yx = (e) => {
  const {
    cardHeight: t,
    cardHeightSM: n,
    cardHeightLG: r,
    controlHeight: a,
    controlHeightLG: o
  } = e, i = t || o, l = n || a, c = r || o + 8;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    // We can not pass this as valid value,
    // Since `cardHeight` will lock nav add button height.
    cardHeight: i,
    cardHeightSM: l,
    cardHeightLG: c,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(i - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
    cardPaddingSM: `${(l - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
    cardPaddingLG: `${(c - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemColor: e.colorText,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
}, Jx = un("Tabs", (e) => {
  const t = Bt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${W(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${W(e.horizontalItemGutter)}`
  });
  return [Kx(t), Ux(t), Gx(t), kx(t), Wx(t), Xx(t), Hx(t)];
}, Yx), pm = () => null;
process.env.NODE_ENV !== "production" && (pm.displayName = "DeprecatedTabPane");
var Qx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Zx = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n, r, a, o, i, l, c, u, d, f, v;
  const {
    type: p,
    className: h,
    rootClassName: g,
    size: m,
    onEdit: b,
    hideAdd: y,
    centered: $,
    addIcon: C,
    removeIcon: S,
    moreIcon: x,
    more: w,
    popupClassName: E,
    children: O,
    items: P,
    animated: M,
    style: I,
    indicatorSize: N,
    indicator: T,
    destroyInactiveTabPane: F,
    destroyOnHidden: j
  } = e, A = Qx(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator", "destroyInactiveTabPane", "destroyOnHidden"]), {
    prefixCls: B
  } = A, {
    direction: V,
    tabs: L,
    getPrefixCls: R,
    getPopupContainer: z
  } = s.useContext(Mt), k = R("tabs", B), q = Ko(k), [ee, re, Q] = Jx(k, q), le = s.useRef(null);
  s.useImperativeHandle(t, () => ({
    nativeElement: le.current
  }));
  let oe;
  p === "editable-card" && (oe = {
    onEdit: (Y, {
      key: me,
      event: pe
    }) => {
      b?.(Y === "add" ? pe : me, Y);
    },
    removeIcon: (n = S ?? L?.removeIcon) !== null && n !== void 0 ? n : /* @__PURE__ */ s.createElement(cs, null),
    addIcon: (C ?? L?.addIcon) || /* @__PURE__ */ s.createElement(um, null),
    showAdd: y !== !0
  });
  const de = R();
  if (process.env.NODE_ENV !== "production") {
    const Y = on("Tabs");
    process.env.NODE_ENV !== "production" && Y(!("onPrevClick" in e) && !("onNextClick" in e), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), process.env.NODE_ENV !== "production" && Y(!(N || L?.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead."), Y.deprecated(!("destroyInactiveTabPane" in e || P?.some((me) => "destroyInactiveTabPane" in me)), "destroyInactiveTabPane", "destroyOnHidden");
  }
  const X = Sr(m), K = Bx(P, O), ae = Lx(k, M), G = Object.assign(Object.assign({}, L?.style), I), ne = {
    align: (r = T?.align) !== null && r !== void 0 ? r : (a = L?.indicator) === null || a === void 0 ? void 0 : a.align,
    size: (c = (i = (o = T?.size) !== null && o !== void 0 ? o : N) !== null && i !== void 0 ? i : (l = L?.indicator) === null || l === void 0 ? void 0 : l.size) !== null && c !== void 0 ? c : L?.indicatorSize
  };
  return ee(/* @__PURE__ */ s.createElement(gm, Object.assign({
    ref: le,
    direction: V,
    getPopupContainer: z
  }, A, {
    items: K,
    className: U({
      [`${k}-${X}`]: X,
      [`${k}-card`]: ["card", "editable-card"].includes(p),
      [`${k}-editable-card`]: p === "editable-card",
      [`${k}-centered`]: $
    }, L?.className, h, g, re, Q, q),
    popupClassName: U(E, re, Q, q),
    style: G,
    editable: oe,
    more: Object.assign({
      icon: (v = (f = (d = (u = L?.more) === null || u === void 0 ? void 0 : u.icon) !== null && d !== void 0 ? d : L?.moreIcon) !== null && f !== void 0 ? f : x) !== null && v !== void 0 ? v : /* @__PURE__ */ s.createElement(im, null),
      transitionName: `${de}-slide-up`
    }, w),
    prefixCls: k,
    animated: ae,
    indicator: ne,
    // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
    destroyInactiveTabPane: j ?? F
  })));
}), Bs = Zx;
Bs.TabPane = pm;
process.env.NODE_ENV !== "production" && (Bs.displayName = "Tabs");
var ew = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const hm = (e) => {
  var {
    prefixCls: t,
    className: n,
    hoverable: r = !0
  } = e, a = ew(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: o
  } = s.useContext(Mt), i = o("card", t), l = U(`${i}-grid`, n, {
    [`${i}-grid-hoverable`]: r
  });
  return /* @__PURE__ */ s.createElement("div", Object.assign({}, a, {
    className: l
  }));
}, tw = (e) => {
  const {
    antCls: t,
    componentCls: n,
    headerHeight: r,
    headerPadding: a,
    tabsMarginBottom: o
  } = e;
  return Object.assign(Object.assign({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: r,
    marginBottom: -1,
    padding: `0 ${W(a)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`
  }, Go()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, br), {
      [`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    }),
    [`${t}-tabs-top`]: {
      clear: "both",
      marginBottom: o,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      "&-bar": {
        borderBottom: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, nw = (e) => {
  const {
    cardPaddingBase: t,
    colorBorderSecondary: n,
    cardShadow: r,
    lineWidth: a
  } = e;
  return {
    width: "33.33%",
    padding: t,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${W(a)} 0 0 0 ${n},
      0 ${W(a)} 0 0 ${n},
      ${W(a)} ${W(a)} 0 0 ${n},
      ${W(a)} 0 0 0 ${n} inset,
      0 ${W(a)} 0 0 ${n} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: r
    }
  };
}, rw = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    actionsLiMargin: r,
    cardActionsIconSize: a,
    colorBorderSecondary: o,
    actionsBg: i
  } = e;
  return Object.assign(Object.assign({
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: i,
    borderTop: `${W(e.lineWidth)} ${e.lineType} ${o}`,
    display: "flex",
    borderRadius: `0 0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)}`
  }, Go()), {
    "& > li": {
      margin: r,
      color: e.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: e.colorPrimary,
          transition: `color ${e.motionDurationMid}`
        },
        [`a:not(${t}-btn), > ${n}`]: {
          display: "inline-block",
          width: "100%",
          color: e.colorIcon,
          lineHeight: W(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${n}`]: {
          fontSize: a,
          lineHeight: W(e.calc(a).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${W(e.lineWidth)} ${e.lineType} ${o}`
      }
    }
  });
}, aw = (e) => Object.assign(Object.assign({
  margin: `${W(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, Go()), {
  "&-avatar": {
    paddingInlineEnd: e.padding
  },
  "&-detail": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: e.marginXS
    }
  },
  "&-title": Object.assign({
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.fontSizeLG
  }, br),
  "&-description": {
    color: e.colorTextDescription
  }
}), ow = (e) => {
  const {
    componentCls: t,
    colorFillAlter: n,
    headerPadding: r,
    bodyPadding: a
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${W(r)}`,
      background: n,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${W(e.padding)} ${W(a)}`
    }
  };
}, iw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, lw = (e) => {
  const {
    componentCls: t,
    cardShadow: n,
    cardHeadPadding: r,
    colorBorderSecondary: a,
    boxShadowTertiary: o,
    bodyPadding: i,
    extraColor: l
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, gn(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${t}-bordered)`]: {
        boxShadow: o
      },
      [`${t}-head`]: tw(e),
      [`${t}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: l,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${t}-body`]: {
        padding: i,
        borderRadius: `0 0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)}`
      },
      [`${t}-grid`]: nw(e),
      [`${t}-cover`]: {
        "> *": {
          display: "block",
          width: "100%",
          borderRadius: `${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`
        }
      },
      [`${t}-actions`]: rw(e),
      [`${t}-meta`]: aw(e)
    }),
    [`${t}-bordered`]: {
      border: `${W(e.lineWidth)} ${e.lineType} ${a}`,
      [`${t}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${t}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: n
      }
    },
    [`${t}-contain-grid`]: {
      borderRadius: `${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0 `,
      [`${t}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${t}-loading) ${t}-body`]: {
        marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${t}-contain-tabs`]: {
      [`> div${t}-head`]: {
        minHeight: 0,
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: r
        }
      }
    },
    [`${t}-type-inner`]: ow(e),
    [`${t}-loading`]: iw(e),
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, sw = (e) => {
  const {
    componentCls: t,
    bodyPaddingSM: n,
    headerPaddingSM: r,
    headerHeightSM: a,
    headerFontSizeSM: o
  } = e;
  return {
    [`${t}-small`]: {
      [`> ${t}-head`]: {
        minHeight: a,
        padding: `0 ${W(r)}`,
        fontSize: o,
        [`> ${t}-head-wrapper`]: {
          [`> ${t}-extra`]: {
            fontSize: e.fontSize
          }
        }
      },
      [`> ${t}-body`]: {
        padding: n
      }
    },
    [`${t}-small${t}-contain-tabs`]: {
      [`> ${t}-head`]: {
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
}, cw = (e) => {
  var t, n;
  return {
    headerBg: "transparent",
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText,
    bodyPaddingSM: 12,
    // Fixed padding.
    headerPaddingSM: 12,
    bodyPadding: (t = e.bodyPadding) !== null && t !== void 0 ? t : e.paddingLG,
    headerPadding: (n = e.headerPadding) !== null && n !== void 0 ? n : e.paddingLG
  };
}, uw = un("Card", (e) => {
  const t = Bt(e, {
    cardShadow: e.boxShadowCard,
    cardHeadPadding: e.padding,
    cardPaddingBase: e.paddingLG,
    cardActionsIconSize: e.fontSize
  });
  return [
    // Style
    lw(t),
    // Size
    sw(t)
  ];
}, cw);
var Qu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const dw = (e) => {
  const {
    actionClasses: t,
    actions: n = [],
    actionStyle: r
  } = e;
  return /* @__PURE__ */ s.createElement("ul", {
    className: t,
    style: r
  }, n.map((a, o) => {
    const i = `action-${o}`;
    return /* @__PURE__ */ s.createElement("li", {
      style: {
        width: `${100 / n.length}%`
      },
      key: i
    }, /* @__PURE__ */ s.createElement("span", null, a));
  }));
}, fw = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: a,
    style: o,
    extra: i,
    headStyle: l = {},
    bodyStyle: c = {},
    title: u,
    loading: d,
    bordered: f,
    variant: v,
    size: p,
    type: h,
    cover: g,
    actions: m,
    tabList: b,
    children: y,
    activeTabKey: $,
    defaultActiveTabKey: C,
    tabBarExtraContent: S,
    hoverable: x,
    tabProps: w = {},
    classNames: E,
    styles: O
  } = e, P = Qu(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "variant", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: M,
    direction: I,
    card: N
  } = s.useContext(Mt), [T] = Nv("card", v, f);
  if (process.env.NODE_ENV !== "production") {
    const fe = on("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"], ["bordered", "variant"]].forEach(([se, ue]) => {
      fe.deprecated(!(se in e), se, ue);
    });
  }
  const F = (fe) => {
    var se;
    (se = e.onTabChange) === null || se === void 0 || se.call(e, fe);
  }, j = (fe) => {
    var se;
    return U((se = N?.classNames) === null || se === void 0 ? void 0 : se[fe], E?.[fe]);
  }, A = (fe) => {
    var se;
    return Object.assign(Object.assign({}, (se = N?.styles) === null || se === void 0 ? void 0 : se[fe]), O?.[fe]);
  }, B = s.useMemo(() => {
    let fe = !1;
    return s.Children.forEach(y, (se) => {
      se?.type === hm && (fe = !0);
    }), fe;
  }, [y]), V = M("card", n), [L, R, z] = uw(V), k = /* @__PURE__ */ s.createElement(Cr, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, y), q = $ !== void 0, ee = Object.assign(Object.assign({}, w), {
    [q ? "activeKey" : "defaultActiveKey"]: q ? $ : C,
    tabBarExtraContent: S
  });
  let re;
  const Q = Sr(p), le = !Q || Q === "default" ? "large" : Q, oe = b ? /* @__PURE__ */ s.createElement(Bs, Object.assign({
    size: le
  }, ee, {
    className: `${V}-head-tabs`,
    onChange: F,
    items: b.map((fe) => {
      var {
        tab: se
      } = fe, ue = Qu(fe, ["tab"]);
      return Object.assign({
        label: se
      }, ue);
    })
  })) : null;
  if (u || i || oe) {
    const fe = U(`${V}-head`, j("header")), se = U(`${V}-head-title`, j("title")), ue = U(`${V}-extra`, j("extra")), xe = Object.assign(Object.assign({}, l), A("header"));
    re = /* @__PURE__ */ s.createElement("div", {
      className: fe,
      style: xe
    }, /* @__PURE__ */ s.createElement("div", {
      className: `${V}-head-wrapper`
    }, u && /* @__PURE__ */ s.createElement("div", {
      className: se,
      style: A("title")
    }, u), i && /* @__PURE__ */ s.createElement("div", {
      className: ue,
      style: A("extra")
    }, i)), oe);
  }
  const de = U(`${V}-cover`, j("cover")), X = g ? /* @__PURE__ */ s.createElement("div", {
    className: de,
    style: A("cover")
  }, g) : null, K = U(`${V}-body`, j("body")), ae = Object.assign(Object.assign({}, c), A("body")), G = /* @__PURE__ */ s.createElement("div", {
    className: K,
    style: ae
  }, d ? k : y), ne = U(`${V}-actions`, j("actions")), Y = m?.length ? /* @__PURE__ */ s.createElement(dw, {
    actionClasses: ne,
    actionStyle: A("actions"),
    actions: m
  }) : null, me = nr(P, ["onTabChange"]), pe = U(V, N?.className, {
    [`${V}-loading`]: d,
    [`${V}-bordered`]: T !== "borderless",
    [`${V}-hoverable`]: x,
    [`${V}-contain-grid`]: B,
    [`${V}-contain-tabs`]: b?.length,
    [`${V}-${Q}`]: Q,
    [`${V}-type-${h}`]: !!h,
    [`${V}-rtl`]: I === "rtl"
  }, r, a, R, z), he = Object.assign(Object.assign({}, N?.style), o);
  return L(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t
  }, me, {
    className: pe,
    style: he
  }), re, X, G, Y));
});
var vw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const mw = (e) => {
  const {
    prefixCls: t,
    className: n,
    avatar: r,
    title: a,
    description: o
  } = e, i = vw(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: l
  } = s.useContext(Mt), c = l("card", t), u = U(`${c}-meta`, n), d = r ? /* @__PURE__ */ s.createElement("div", {
    className: `${c}-meta-avatar`
  }, r) : null, f = a ? /* @__PURE__ */ s.createElement("div", {
    className: `${c}-meta-title`
  }, a) : null, v = o ? /* @__PURE__ */ s.createElement("div", {
    className: `${c}-meta-description`
  }, o) : null, p = f || v ? /* @__PURE__ */ s.createElement("div", {
    className: `${c}-meta-detail`
  }, f, v) : null;
  return /* @__PURE__ */ s.createElement("div", Object.assign({}, i, {
    className: u
  }), d, p);
}, ri = fw;
ri.Grid = hm;
ri.Meta = mw;
process.env.NODE_ENV !== "production" && (ri.displayName = "Card");
function gw(e, t, n) {
  var r = n || {}, a = r.noTrailing, o = a === void 0 ? !1 : a, i = r.noLeading, l = i === void 0 ? !1 : i, c = r.debounceMode, u = c === void 0 ? void 0 : c, d, f = !1, v = 0;
  function p() {
    d && clearTimeout(d);
  }
  function h(m) {
    var b = m || {}, y = b.upcomingOnly, $ = y === void 0 ? !1 : y;
    p(), f = !$;
  }
  function g() {
    for (var m = arguments.length, b = new Array(m), y = 0; y < m; y++)
      b[y] = arguments[y];
    var $ = this, C = Date.now() - v;
    if (f)
      return;
    function S() {
      v = Date.now(), t.apply($, b);
    }
    function x() {
      d = void 0;
    }
    !l && u && !d && S(), p(), u === void 0 && C > e ? l ? (v = Date.now(), o || (d = setTimeout(u ? x : S, e))) : S() : o !== !0 && (d = setTimeout(u ? x : S, u === void 0 ? e - C : e));
  }
  return g.cancel = h, g;
}
function pw(e, t, n) {
  var r = {}, a = r.atBegin, o = a === void 0 ? !1 : a;
  return gw(e, t, {
    debounceMode: o !== !1
  });
}
const bm = /* @__PURE__ */ Ta({});
var hw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Zu(e) {
  return e === "auto" ? "1 1 auto" : typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const bw = ["xs", "sm", "md", "lg", "xl", "xxl"], ym = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = s.useContext(Mt), {
    gutter: a,
    wrap: o
  } = s.useContext(bm), {
    prefixCls: i,
    span: l,
    order: c,
    offset: u,
    push: d,
    pull: f,
    className: v,
    children: p,
    flex: h,
    style: g
  } = e, m = hw(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), b = n("col", i), [y, $, C] = SS(b), S = {};
  let x = {};
  bw.forEach((O) => {
    let P = {};
    const M = e[O];
    typeof M == "number" ? P.span = M : typeof M == "object" && (P = M || {}), delete m[O], x = Object.assign(Object.assign({}, x), {
      [`${b}-${O}-${P.span}`]: P.span !== void 0,
      [`${b}-${O}-order-${P.order}`]: P.order || P.order === 0,
      [`${b}-${O}-offset-${P.offset}`]: P.offset || P.offset === 0,
      [`${b}-${O}-push-${P.push}`]: P.push || P.push === 0,
      [`${b}-${O}-pull-${P.pull}`]: P.pull || P.pull === 0,
      [`${b}-rtl`]: r === "rtl"
    }), P.flex && (x[`${b}-${O}-flex`] = !0, S[`--${b}-${O}-flex`] = Zu(P.flex));
  });
  const w = U(b, {
    [`${b}-${l}`]: l !== void 0,
    [`${b}-order-${c}`]: c,
    [`${b}-offset-${u}`]: u,
    [`${b}-push-${d}`]: d,
    [`${b}-pull-${f}`]: f
  }, v, x, $, C), E = {};
  if (a?.[0]) {
    const O = typeof a[0] == "number" ? `${a[0] / 2}px` : `calc(${a[0]} / 2)`;
    E.paddingLeft = O, E.paddingRight = O;
  }
  return h && (E.flex = Zu(h), o === !1 && !E.minWidth && (E.minWidth = 0)), y(/* @__PURE__ */ s.createElement("div", Object.assign({}, m, {
    style: Object.assign(Object.assign(Object.assign({}, E), g), S),
    className: w,
    ref: t
  }), p));
});
process.env.NODE_ENV !== "production" && (ym.displayName = "Col");
function yw(e, t) {
  const n = [void 0, void 0], r = Array.isArray(e) ? e : [e, void 0], a = t || {
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  };
  return r.forEach((o, i) => {
    if (typeof o == "object" && o !== null)
      for (let l = 0; l < Qn.length; l++) {
        const c = Qn[l];
        if (a[c] && o[c] !== void 0) {
          n[i] = o[c];
          break;
        }
      }
    else
      n[i] = o;
  }), n;
}
var Sw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ed(e, t) {
  const [n, r] = s.useState(typeof e == "string" ? e : ""), a = () => {
    if (typeof e == "string" && r(e), typeof e == "object")
      for (let o = 0; o < Qn.length; o++) {
        const i = Qn[o];
        if (!t || !t[i])
          continue;
        const l = e[i];
        if (l !== void 0) {
          r(l);
          return;
        }
      }
  };
  return s.useEffect(() => {
    a();
  }, [JSON.stringify(e), t]), n;
}
const Sm = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: n,
    justify: r,
    align: a,
    className: o,
    style: i,
    children: l,
    gutter: c = 0,
    wrap: u
  } = e, d = Sw(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: f,
    direction: v
  } = s.useContext(Mt), p = ka(!0, null), h = ed(a, p), g = ed(r, p), m = f("row", n), [b, y, $] = bS(m), C = yw(c, p), S = U(m, {
    [`${m}-no-wrap`]: u === !1,
    [`${m}-${g}`]: g,
    [`${m}-${h}`]: h,
    [`${m}-rtl`]: v === "rtl"
  }, o, y, $), x = {};
  if (C?.[0]) {
    const P = typeof C[0] == "number" ? `${C[0] / -2}px` : `calc(${C[0]} / -2)`;
    x.marginLeft = P, x.marginRight = P;
  }
  const [w, E] = C;
  x.rowGap = E;
  const O = s.useMemo(() => ({
    gutter: [w, E],
    wrap: u
  }), [w, E, u]);
  return b(/* @__PURE__ */ s.createElement(bm.Provider, {
    value: O
  }, /* @__PURE__ */ s.createElement("div", Object.assign({}, d, {
    className: S,
    style: Object.assign(Object.assign({}, x), i),
    ref: t
  }), l)));
});
process.env.NODE_ENV !== "production" && (Sm.displayName = "Row");
const Cw = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
}, Hs = /* @__PURE__ */ te.createContext({});
var $w = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const xw = (e) => Fn(e).map((t) => Object.assign(Object.assign({}, t?.props), {
  key: t.key
}));
function ww(e, t, n) {
  const r = s.useMemo(() => (
    // Take `items` first or convert `children` into items
    t || xw(n)
  ), [t, n]);
  return s.useMemo(() => r.map((o) => {
    var {
      span: i
    } = o, l = $w(o, ["span"]);
    return i === "filled" ? Object.assign(Object.assign({}, l), {
      filled: !0
    }) : Object.assign(Object.assign({}, l), {
      span: typeof i == "number" ? i : Fv(e, i)
    });
  }), [r, e]);
}
var Ew = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Ow(e, t) {
  let n = [], r = [], a = !1, o = 0;
  return e.filter((i) => i).forEach((i) => {
    const {
      filled: l
    } = i, c = Ew(i, ["filled"]);
    if (l) {
      r.push(c), n.push(r), r = [], o = 0;
      return;
    }
    const u = t - o;
    o += i.span || 1, o >= t ? (o > t ? (a = !0, r.push(Object.assign(Object.assign({}, c), {
      span: u
    }))) : r.push(c), n.push(r), r = [], o = 0) : r.push(c);
  }), r.length > 0 && n.push(r), n = n.map((i) => {
    const l = i.reduce((c, u) => c + (u.span || 1), 0);
    if (l < t) {
      const c = i[i.length - 1];
      return c.span = t - (l - (c.span || 1)), i;
    }
    return i;
  }), [n, a];
}
const Pw = (e, t) => {
  const [n, r] = Mn(() => Ow(t, e), [t, e]);
  if (process.env.NODE_ENV !== "production") {
    const a = on("Descriptions");
    process.env.NODE_ENV !== "production" && a(!r, "usage", "Sum of column `span` in a line not match `column` of Descriptions.");
  }
  return n;
}, Rw = ({
  children: e
}) => e, co = (e) => e != null, Mi = (e) => {
  const {
    itemPrefixCls: t,
    component: n,
    span: r,
    className: a,
    style: o,
    labelStyle: i,
    contentStyle: l,
    bordered: c,
    label: u,
    content: d,
    colon: f,
    type: v,
    styles: p
  } = e, h = n, {
    classNames: g
  } = s.useContext(Hs), m = Object.assign(Object.assign({}, i), p?.label), b = Object.assign(Object.assign({}, l), p?.content);
  return c ? /* @__PURE__ */ s.createElement(h, {
    colSpan: r,
    style: o,
    className: U(a, {
      [`${t}-item-${v}`]: v === "label" || v === "content",
      [g?.label]: g?.label && v === "label",
      [g?.content]: g?.content && v === "content"
    })
  }, co(u) && /* @__PURE__ */ s.createElement("span", {
    style: m
  }, u), co(d) && /* @__PURE__ */ s.createElement("span", {
    style: b
  }, d)) : /* @__PURE__ */ s.createElement(h, {
    colSpan: r,
    style: o,
    className: U(`${t}-item`, a)
  }, /* @__PURE__ */ s.createElement("div", {
    className: `${t}-item-container`
  }, co(u) && /* @__PURE__ */ s.createElement("span", {
    style: m,
    className: U(`${t}-item-label`, g?.label, {
      [`${t}-item-no-colon`]: !f
    })
  }, u), co(d) && /* @__PURE__ */ s.createElement("span", {
    style: b,
    className: U(`${t}-item-content`, g?.content)
  }, d)));
};
function Ti(e, {
  colon: t,
  prefixCls: n,
  bordered: r
}, {
  component: a,
  type: o,
  showLabel: i,
  showContent: l,
  labelStyle: c,
  contentStyle: u,
  styles: d
}) {
  return e.map(({
    label: f,
    children: v,
    prefixCls: p = n,
    className: h,
    style: g,
    labelStyle: m,
    contentStyle: b,
    span: y = 1,
    key: $,
    styles: C
  }, S) => typeof a == "string" ? /* @__PURE__ */ s.createElement(Mi, {
    key: `${o}-${$ || S}`,
    className: h,
    style: g,
    styles: {
      label: Object.assign(Object.assign(Object.assign(Object.assign({}, c), d?.label), m), C?.label),
      content: Object.assign(Object.assign(Object.assign(Object.assign({}, u), d?.content), b), C?.content)
    },
    span: y,
    colon: t,
    component: a,
    itemPrefixCls: p,
    bordered: r,
    label: i ? f : null,
    content: l ? v : null,
    type: o
  }) : [/* @__PURE__ */ s.createElement(Mi, {
    key: `label-${$ || S}`,
    className: h,
    style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, c), d?.label), g), m), C?.label),
    span: 1,
    colon: t,
    component: a[0],
    itemPrefixCls: p,
    bordered: r,
    label: f,
    type: "label"
  }), /* @__PURE__ */ s.createElement(Mi, {
    key: `content-${$ || S}`,
    className: h,
    style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, u), d?.content), g), b), C?.content),
    span: y * 2 - 1,
    component: a[1],
    itemPrefixCls: p,
    bordered: r,
    content: v,
    type: "content"
  })]);
}
const Iw = (e) => {
  const t = s.useContext(Hs), {
    prefixCls: n,
    vertical: r,
    row: a,
    index: o,
    bordered: i
  } = e;
  return r ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("tr", {
    key: `label-${o}`,
    className: `${n}-row`
  }, Ti(a, e, Object.assign({
    component: "th",
    type: "label",
    showLabel: !0
  }, t))), /* @__PURE__ */ s.createElement("tr", {
    key: `content-${o}`,
    className: `${n}-row`
  }, Ti(a, e, Object.assign({
    component: "td",
    type: "content",
    showContent: !0
  }, t)))) : /* @__PURE__ */ s.createElement("tr", {
    key: o,
    className: `${n}-row`
  }, Ti(a, e, Object.assign({
    component: i ? ["th", "td"] : "td",
    type: "item",
    showLabel: !0,
    showContent: !0
  }, t)));
}, Nw = (e) => {
  const {
    componentCls: t,
    labelBg: n
  } = e;
  return {
    [`&${t}-bordered`]: {
      [`> ${t}-view`]: {
        border: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
        "> table": {
          tableLayout: "auto"
        },
        [`${t}-row`]: {
          borderBottom: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
          "&:first-child": {
            "> th:first-child, > td:first-child": {
              borderStartStartRadius: e.borderRadiusLG
            }
          },
          "&:last-child": {
            borderBottom: "none",
            "> th:first-child, > td:first-child": {
              borderEndStartRadius: e.borderRadiusLG
            }
          },
          [`> ${t}-item-label, > ${t}-item-content`]: {
            padding: `${W(e.padding)} ${W(e.paddingLG)}`,
            borderInlineEnd: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            "&:last-child": {
              borderInlineEnd: "none"
            }
          },
          [`> ${t}-item-label`]: {
            color: e.colorTextSecondary,
            backgroundColor: n,
            "&::after": {
              display: "none"
            }
          }
        }
      },
      [`&${t}-middle`]: {
        [`${t}-row`]: {
          [`> ${t}-item-label, > ${t}-item-content`]: {
            padding: `${W(e.paddingSM)} ${W(e.paddingLG)}`
          }
        }
      },
      [`&${t}-small`]: {
        [`${t}-row`]: {
          [`> ${t}-item-label, > ${t}-item-content`]: {
            padding: `${W(e.paddingXS)} ${W(e.padding)}`
          }
        }
      }
    }
  };
}, _w = (e) => {
  const {
    componentCls: t,
    extraColor: n,
    itemPaddingBottom: r,
    itemPaddingEnd: a,
    colonMarginRight: o,
    colonMarginLeft: i,
    titleMarginBottom: l
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign({}, gn(e)), Nw(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-header`]: {
        display: "flex",
        alignItems: "center",
        marginBottom: l
      },
      [`${t}-title`]: Object.assign(Object.assign({}, br), {
        flex: "auto",
        color: e.titleColor,
        fontWeight: e.fontWeightStrong,
        fontSize: e.fontSizeLG,
        lineHeight: e.lineHeightLG
      }),
      [`${t}-extra`]: {
        marginInlineStart: "auto",
        color: n,
        fontSize: e.fontSize
      },
      [`${t}-view`]: {
        width: "100%",
        borderRadius: e.borderRadiusLG,
        table: {
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse"
        }
      },
      [`${t}-row`]: {
        "> th, > td": {
          paddingBottom: r,
          paddingInlineEnd: a
        },
        "> th:last-child, > td:last-child": {
          paddingInlineEnd: 0
        },
        "&:last-child": {
          borderBottom: "none",
          "> th, > td": {
            paddingBottom: 0
          }
        }
      },
      [`${t}-item-label`]: {
        color: e.labelColor,
        fontWeight: "normal",
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        textAlign: "start",
        "&::after": {
          content: '":"',
          position: "relative",
          top: -0.5,
          // magic for position
          marginInline: `${W(i)} ${W(o)}`
        },
        [`&${t}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${t}-item-no-label`]: {
        "&::after": {
          margin: 0,
          content: '""'
        }
      },
      [`${t}-item-content`]: {
        display: "table-cell",
        flex: 1,
        color: e.contentColor,
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        wordBreak: "break-word",
        overflowWrap: "break-word"
      },
      [`${t}-item`]: {
        paddingBottom: 0,
        verticalAlign: "top",
        "&-container": {
          display: "flex",
          [`${t}-item-label`]: {
            display: "inline-flex",
            alignItems: "baseline"
          },
          [`${t}-item-content`]: {
            display: "inline-flex",
            alignItems: "baseline",
            minWidth: "1em"
          }
        }
      },
      "&-middle": {
        [`${t}-row`]: {
          "> th, > td": {
            paddingBottom: e.paddingSM
          }
        }
      },
      "&-small": {
        [`${t}-row`]: {
          "> th, > td": {
            paddingBottom: e.paddingXS
          }
        }
      }
    })
  };
}, Mw = (e) => ({
  labelBg: e.colorFillAlter,
  labelColor: e.colorTextTertiary,
  titleColor: e.colorText,
  titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
  itemPaddingBottom: e.padding,
  itemPaddingEnd: e.padding,
  colonMarginRight: e.marginXS,
  colonMarginLeft: e.marginXXS / 2,
  contentColor: e.colorText,
  extraColor: e.colorText
}), Tw = un("Descriptions", (e) => {
  const t = Bt(e, {});
  return _w(t);
}, Mw);
var Dw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ha = (e) => {
  const {
    prefixCls: t,
    title: n,
    extra: r,
    column: a,
    colon: o = !0,
    bordered: i,
    layout: l,
    children: c,
    className: u,
    rootClassName: d,
    style: f,
    size: v,
    labelStyle: p,
    contentStyle: h,
    styles: g,
    items: m,
    classNames: b
  } = e, y = Dw(e, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "styles", "items", "classNames"]), {
    getPrefixCls: $,
    direction: C,
    className: S,
    style: x,
    classNames: w,
    styles: E
  } = tr("descriptions"), O = $("descriptions", t), P = ka();
  if (process.env.NODE_ENV !== "production") {
    const V = on("Descriptions");
    [["labelStyle", "styles={{ label: {} }}"], ["contentStyle", "styles={{ content: {} }}"]].forEach(([L, R]) => {
      V.deprecated(!(L in e), L, R);
    });
  }
  const M = s.useMemo(() => {
    var V;
    return typeof a == "number" ? a : (V = Fv(P, Object.assign(Object.assign({}, Cw), a))) !== null && V !== void 0 ? V : 3;
  }, [P, a]), I = ww(P, m, c), N = Sr(v), T = Pw(M, I), [F, j, A] = Tw(O), B = s.useMemo(() => ({
    labelStyle: p,
    contentStyle: h,
    styles: {
      content: Object.assign(Object.assign({}, E.content), g?.content),
      label: Object.assign(Object.assign({}, E.label), g?.label)
    },
    classNames: {
      label: U(w.label, b?.label),
      content: U(w.content, b?.content)
    }
  }), [p, h, g, b, w, E]);
  return F(/* @__PURE__ */ s.createElement(Hs.Provider, {
    value: B
  }, /* @__PURE__ */ s.createElement("div", Object.assign({
    className: U(O, S, w.root, b?.root, {
      [`${O}-${N}`]: N && N !== "default",
      [`${O}-bordered`]: !!i,
      [`${O}-rtl`]: C === "rtl"
    }, u, d, j, A),
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, x), E.root), g?.root), f)
  }, y), (n || r) && /* @__PURE__ */ s.createElement("div", {
    className: U(`${O}-header`, w.header, b?.header),
    style: Object.assign(Object.assign({}, E.header), g?.header)
  }, n && /* @__PURE__ */ s.createElement("div", {
    className: U(`${O}-title`, w.title, b?.title),
    style: Object.assign(Object.assign({}, E.title), g?.title)
  }, n), r && /* @__PURE__ */ s.createElement("div", {
    className: U(`${O}-extra`, w.extra, b?.extra),
    style: Object.assign(Object.assign({}, E.extra), g?.extra)
  }, r)), /* @__PURE__ */ s.createElement("div", {
    className: `${O}-view`
  }, /* @__PURE__ */ s.createElement("table", null, /* @__PURE__ */ s.createElement("tbody", null, T.map((V, L) => /* @__PURE__ */ s.createElement(Iw, {
    key: L,
    index: L,
    colon: o,
    prefixCls: O,
    vertical: l === "vertical",
    bordered: i,
    row: V
  }))))))));
};
process.env.NODE_ENV !== "production" && (ha.displayName = "Descriptions");
ha.Item = Rw;
var jw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" }, zw = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: jw
  }));
}, Kl = /* @__PURE__ */ s.forwardRef(zw);
process.env.NODE_ENV !== "production" && (Kl.displayName = "DoubleLeftOutlined");
var Aw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" }, Lw = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: Aw
  }));
}, ql = /* @__PURE__ */ s.forwardRef(Lw);
process.env.NODE_ENV !== "production" && (ql.displayName = "DoubleRightOutlined");
var Fw = {
  // Options
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
}, Vw = [10, 20, 50, 100], Cm = function(t) {
  var n = t.pageSizeOptions, r = n === void 0 ? Vw : n, a = t.locale, o = t.changeSize, i = t.pageSize, l = t.goButton, c = t.quickGo, u = t.rootPrefixCls, d = t.disabled, f = t.buildOptionText, v = t.showSizeChanger, p = t.sizeChangerRender, h = te.useState(""), g = H(h, 2), m = g[0], b = g[1], y = function() {
    return !m || Number.isNaN(m) ? void 0 : Number(m);
  }, $ = typeof f == "function" ? f : function(I) {
    return "".concat(I, " ").concat(a.items_per_page);
  }, C = function(N) {
    b(N.target.value);
  }, S = function(N) {
    l || m === "" || (b(""), !(N.relatedTarget && (N.relatedTarget.className.indexOf("".concat(u, "-item-link")) >= 0 || N.relatedTarget.className.indexOf("".concat(u, "-item")) >= 0)) && c?.(y()));
  }, x = function(N) {
    m !== "" && (N.keyCode === $e.ENTER || N.type === "click") && (b(""), c?.(y()));
  }, w = function() {
    return r.some(function(N) {
      return N.toString() === i.toString();
    }) ? r : r.concat([i]).sort(function(N, T) {
      var F = Number.isNaN(Number(N)) ? 0 : Number(N), j = Number.isNaN(Number(T)) ? 0 : Number(T);
      return F - j;
    });
  }, E = "".concat(u, "-options");
  if (!v && !c)
    return null;
  var O = null, P = null, M = null;
  return v && p && (O = p({
    disabled: d,
    size: i,
    onSizeChange: function(N) {
      o?.(Number(N));
    },
    "aria-label": a.page_size,
    className: "".concat(E, "-size-changer"),
    options: w().map(function(I) {
      return {
        label: $(I),
        value: I
      };
    })
  })), c && (l && (M = typeof l == "boolean" ? /* @__PURE__ */ te.createElement("button", {
    type: "button",
    onClick: x,
    onKeyUp: x,
    disabled: d,
    className: "".concat(E, "-quick-jumper-button")
  }, a.jump_to_confirm) : /* @__PURE__ */ te.createElement("span", {
    onClick: x,
    onKeyUp: x
  }, l)), P = /* @__PURE__ */ te.createElement("div", {
    className: "".concat(E, "-quick-jumper")
  }, a.jump_to, /* @__PURE__ */ te.createElement("input", {
    disabled: d,
    type: "text",
    value: m,
    onChange: C,
    onKeyUp: x,
    onBlur: S,
    "aria-label": a.page
  }), a.page, M)), /* @__PURE__ */ te.createElement("li", {
    className: E
  }, O, P);
};
process.env.NODE_ENV !== "production" && (Cm.displayName = "Options");
var jr = function(t) {
  var n = t.rootPrefixCls, r = t.page, a = t.active, o = t.className, i = t.showTitle, l = t.onClick, c = t.onKeyPress, u = t.itemRender, d = "".concat(n, "-item"), f = U(d, "".concat(d, "-").concat(r), _(_({}, "".concat(d, "-active"), a), "".concat(d, "-disabled"), !r), o), v = function() {
    l(r);
  }, p = function(m) {
    c(m, l, r);
  }, h = u(r, "page", /* @__PURE__ */ te.createElement("a", {
    rel: "nofollow"
  }, r));
  return h ? /* @__PURE__ */ te.createElement("li", {
    title: i ? String(r) : null,
    className: f,
    onClick: v,
    onKeyDown: p,
    tabIndex: 0
  }, h) : null;
};
process.env.NODE_ENV !== "production" && (jr.displayName = "Pager");
var Bw = function(t, n, r) {
  return r;
};
function Di() {
}
function td(e) {
  var t = Number(e);
  return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t;
}
function vr(e, t, n) {
  var r = typeof e > "u" ? t : e;
  return Math.floor((n - 1) / r) + 1;
}
var $m = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-pagination" : n, a = t.selectPrefixCls, o = a === void 0 ? "rc-select" : a, i = t.className, l = t.current, c = t.defaultCurrent, u = c === void 0 ? 1 : c, d = t.total, f = d === void 0 ? 0 : d, v = t.pageSize, p = t.defaultPageSize, h = p === void 0 ? 10 : p, g = t.onChange, m = g === void 0 ? Di : g, b = t.hideOnSinglePage, y = t.align, $ = t.showPrevNextJumpers, C = $ === void 0 ? !0 : $, S = t.showQuickJumper, x = t.showLessItems, w = t.showTitle, E = w === void 0 ? !0 : w, O = t.onShowSizeChange, P = O === void 0 ? Di : O, M = t.locale, I = M === void 0 ? Fw : M, N = t.style, T = t.totalBoundaryShowSizeChanger, F = T === void 0 ? 50 : T, j = t.disabled, A = t.simple, B = t.showTotal, V = t.showSizeChanger, L = V === void 0 ? f > F : V, R = t.sizeChangerRender, z = t.pageSizeOptions, k = t.itemRender, q = k === void 0 ? Bw : k, ee = t.jumpPrevIcon, re = t.jumpNextIcon, Q = t.prevIcon, le = t.nextIcon, oe = te.useRef(null), de = mn(10, {
    value: v,
    defaultValue: h
  }), X = H(de, 2), K = X[0], ae = X[1], G = mn(1, {
    value: l,
    defaultValue: u,
    postState: function(Ze) {
      return Math.max(1, Math.min(Ze, vr(void 0, K, f)));
    }
  }), ne = H(G, 2), Y = ne[0], me = ne[1], pe = te.useState(Y), he = H(pe, 2), fe = he[0], se = he[1];
  Wt(function() {
    se(Y);
  }, [Y]);
  var ue = m !== Di, xe = "current" in t;
  process.env.NODE_ENV !== "production" && tt(xe ? ue : !0, "You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");
  var ve = Math.max(1, Y - (x ? 3 : 5)), We = Math.min(vr(void 0, K, f), Y + (x ? 3 : 5));
  function Ae(Pe, Ze) {
    var vt = Pe || /* @__PURE__ */ te.createElement("button", {
      type: "button",
      "aria-label": Ze,
      className: "".concat(r, "-item-link")
    });
    return typeof Pe == "function" && (vt = /* @__PURE__ */ te.createElement(Pe, D({}, t))), vt;
  }
  function Je(Pe) {
    var Ze = Pe.target.value, vt = vr(void 0, K, f), Ht;
    return Ze === "" ? Ht = Ze : Number.isNaN(Number(Ze)) ? Ht = fe : Ze >= vt ? Ht = vt : Ht = Number(Ze), Ht;
  }
  function Le(Pe) {
    return td(Pe) && Pe !== Y && td(f) && f > 0;
  }
  var De = f > K ? S : !1;
  function qe(Pe) {
    (Pe.keyCode === $e.UP || Pe.keyCode === $e.DOWN) && Pe.preventDefault();
  }
  function we(Pe) {
    var Ze = Je(Pe);
    switch (Ze !== fe && se(Ze), Pe.keyCode) {
      case $e.ENTER:
        Te(Ze);
        break;
      case $e.UP:
        Te(Ze - 1);
        break;
      case $e.DOWN:
        Te(Ze + 1);
        break;
    }
  }
  function Ge(Pe) {
    Te(Je(Pe));
  }
  function et(Pe) {
    var Ze = vr(Pe, K, f), vt = Y > Ze && Ze !== 0 ? Ze : Y;
    ae(Pe), se(vt), P?.(Y, Pe), me(vt), m?.(vt, Pe);
  }
  function Te(Pe) {
    if (Le(Pe) && !j) {
      var Ze = vr(void 0, K, f), vt = Pe;
      return Pe > Ze ? vt = Ze : Pe < 1 && (vt = 1), vt !== fe && se(vt), me(vt), m?.(vt, K), vt;
    }
    return Y;
  }
  var Fe = Y > 1, Ue = Y < vr(void 0, K, f);
  function Ve() {
    Fe && Te(Y - 1);
  }
  function Ct() {
    Ue && Te(Y + 1);
  }
  function $t() {
    Te(ve);
  }
  function Lt() {
    Te(We);
  }
  function Pt(Pe, Ze) {
    if (Pe.key === "Enter" || Pe.charCode === $e.ENTER || Pe.keyCode === $e.ENTER) {
      for (var vt = arguments.length, Ht = new Array(vt > 2 ? vt - 2 : 0), en = 2; en < vt; en++)
        Ht[en - 2] = arguments[en];
      Ze.apply(void 0, Ht);
    }
  }
  function zt(Pe) {
    Pt(Pe, Ve);
  }
  function jt(Pe) {
    Pt(Pe, Ct);
  }
  function Et(Pe) {
    Pt(Pe, $t);
  }
  function rt(Pe) {
    Pt(Pe, Lt);
  }
  function Ke(Pe) {
    var Ze = q(Pe, "prev", Ae(Q, "prev page"));
    return /* @__PURE__ */ te.isValidElement(Ze) ? /* @__PURE__ */ te.cloneElement(Ze, {
      disabled: !Fe
    }) : Ze;
  }
  function yt(Pe) {
    var Ze = q(Pe, "next", Ae(le, "next page"));
    return /* @__PURE__ */ te.isValidElement(Ze) ? /* @__PURE__ */ te.cloneElement(Ze, {
      disabled: !Ue
    }) : Ze;
  }
  function st(Pe) {
    (Pe.type === "click" || Pe.keyCode === $e.ENTER) && Te(fe);
  }
  var _e = null, ke = Na(t, {
    aria: !0,
    data: !0
  }), Be = B && /* @__PURE__ */ te.createElement("li", {
    className: "".concat(r, "-total-text")
  }, B(f, [f === 0 ? 0 : (Y - 1) * K + 1, Y * K > f ? f : Y * K])), ge = null, Z = vr(void 0, K, f);
  if (b && f <= K)
    return null;
  var J = [], ie = {
    rootPrefixCls: r,
    onClick: Te,
    onKeyPress: Pt,
    showTitle: E,
    itemRender: q,
    page: -1
  }, Ee = Y - 1 > 0 ? Y - 1 : 0, Ce = Y + 1 < Z ? Y + 1 : Z, Qe = S && S.goButton, lt = ze(A) === "object" ? A.readOnly : !A, dt = Qe, at = null;
  A && (Qe && (typeof Qe == "boolean" ? dt = /* @__PURE__ */ te.createElement("button", {
    type: "button",
    onClick: st,
    onKeyUp: st
  }, I.jump_to_confirm) : dt = /* @__PURE__ */ te.createElement("span", {
    onClick: st,
    onKeyUp: st
  }, Qe), dt = /* @__PURE__ */ te.createElement("li", {
    title: E ? "".concat(I.jump_to).concat(Y, "/").concat(Z) : null,
    className: "".concat(r, "-simple-pager")
  }, dt)), at = /* @__PURE__ */ te.createElement("li", {
    title: E ? "".concat(Y, "/").concat(Z) : null,
    className: "".concat(r, "-simple-pager")
  }, lt ? fe : /* @__PURE__ */ te.createElement("input", {
    type: "text",
    "aria-label": I.jump_to,
    value: fe,
    disabled: j,
    onKeyDown: qe,
    onKeyUp: we,
    onChange: we,
    onBlur: Ge,
    size: 3
  }), /* @__PURE__ */ te.createElement("span", {
    className: "".concat(r, "-slash")
  }, "/"), Z));
  var ft = x ? 1 : 2;
  if (Z <= 3 + ft * 2) {
    Z || J.push(/* @__PURE__ */ te.createElement(jr, ye({}, ie, {
      key: "noPager",
      page: 1,
      className: "".concat(r, "-item-disabled")
    })));
    for (var ht = 1; ht <= Z; ht += 1)
      J.push(/* @__PURE__ */ te.createElement(jr, ye({}, ie, {
        key: ht,
        page: ht,
        active: Y === ht
      })));
  } else {
    var At = x ? I.prev_3 : I.prev_5, Kt = x ? I.next_3 : I.next_5, xt = q(ve, "jump-prev", Ae(ee, "prev page")), Rt = q(We, "jump-next", Ae(re, "next page"));
    C && (_e = xt ? /* @__PURE__ */ te.createElement("li", {
      title: E ? At : null,
      key: "prev",
      onClick: $t,
      tabIndex: 0,
      onKeyDown: Et,
      className: U("".concat(r, "-jump-prev"), _({}, "".concat(r, "-jump-prev-custom-icon"), !!ee))
    }, xt) : null, ge = Rt ? /* @__PURE__ */ te.createElement("li", {
      title: E ? Kt : null,
      key: "next",
      onClick: Lt,
      tabIndex: 0,
      onKeyDown: rt,
      className: U("".concat(r, "-jump-next"), _({}, "".concat(r, "-jump-next-custom-icon"), !!re))
    }, Rt) : null);
    var ce = Math.max(1, Y - ft), be = Math.min(Y + ft, Z);
    Y - 1 <= ft && (be = 1 + ft * 2), Z - Y <= ft && (ce = Z - ft * 2);
    for (var He = ce; He <= be; He += 1)
      J.push(/* @__PURE__ */ te.createElement(jr, ye({}, ie, {
        key: He,
        page: He,
        active: Y === He
      })));
    if (Y - 1 >= ft * 2 && Y !== 3 && (J[0] = /* @__PURE__ */ te.cloneElement(J[0], {
      className: U("".concat(r, "-item-after-jump-prev"), J[0].props.className)
    }), J.unshift(_e)), Z - Y >= ft * 2 && Y !== Z - 2) {
      var ot = J[J.length - 1];
      J[J.length - 1] = /* @__PURE__ */ te.cloneElement(ot, {
        className: U("".concat(r, "-item-before-jump-next"), ot.props.className)
      }), J.push(ge);
    }
    ce !== 1 && J.unshift(/* @__PURE__ */ te.createElement(jr, ye({}, ie, {
      key: 1,
      page: 1
    }))), be !== Z && J.push(/* @__PURE__ */ te.createElement(jr, ye({}, ie, {
      key: Z,
      page: Z
    })));
  }
  var Ne = Ke(Ee);
  if (Ne) {
    var Oe = !Fe || !Z;
    Ne = /* @__PURE__ */ te.createElement("li", {
      title: E ? I.prev_page : null,
      onClick: Ve,
      tabIndex: Oe ? null : 0,
      onKeyDown: zt,
      className: U("".concat(r, "-prev"), _({}, "".concat(r, "-disabled"), Oe)),
      "aria-disabled": Oe
    }, Ne);
  }
  var je = yt(Ce);
  if (je) {
    var nt, gt;
    A ? (nt = !Ue, gt = Fe ? 0 : null) : (nt = !Ue || !Z, gt = nt ? null : 0), je = /* @__PURE__ */ te.createElement("li", {
      title: E ? I.next_page : null,
      onClick: Ct,
      tabIndex: gt,
      onKeyDown: jt,
      className: U("".concat(r, "-next"), _({}, "".concat(r, "-disabled"), nt)),
      "aria-disabled": nt
    }, je);
  }
  var wt = U(r, i, _(_(_(_(_({}, "".concat(r, "-start"), y === "start"), "".concat(r, "-center"), y === "center"), "".concat(r, "-end"), y === "end"), "".concat(r, "-simple"), A), "".concat(r, "-disabled"), j));
  return /* @__PURE__ */ te.createElement("ul", ye({
    className: wt,
    style: N,
    ref: oe
  }, ke), Be, Ne, A ? at : J, je, /* @__PURE__ */ te.createElement(Cm, {
    locale: I,
    rootPrefixCls: r,
    disabled: j,
    selectPrefixCls: o,
    changeSize: et,
    pageSize: K,
    pageSizeOptions: z,
    quickGo: De ? Te : null,
    goButton: dt,
    showSizeChanger: L,
    sizeChangerRender: R
  }));
};
process.env.NODE_ENV !== "production" && ($m.displayName = "Pagination");
const Hw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${t}-disabled`]: {
      cursor: "not-allowed",
      [`${t}-item`]: {
        cursor: "not-allowed",
        backgroundColor: "transparent",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: e.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: e.colorBorder,
          backgroundColor: e.itemActiveBgDisabled,
          "&:hover, &:active": {
            backgroundColor: e.itemActiveBgDisabled
          },
          a: {
            color: e.itemActiveColorDisabled
          }
        }
      },
      [`${t}-item-link`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${t}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${t}-simple-pager`]: {
        color: e.colorTextDisabled
      },
      [`${t}-jump-prev, ${t}-jump-next`]: {
        [`${t}-item-link-icon`]: {
          opacity: 0
        },
        [`${t}-item-ellipsis`]: {
          opacity: 1
        }
      }
    }
  };
}, Ww = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
      height: e.itemSizeSM,
      lineHeight: W(e.itemSizeSM)
    },
    [`&${t}-mini ${t}-item`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: W(e.calc(e.itemSizeSM).sub(2).equal())
    },
    [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: W(e.itemSizeSM)
    },
    [`&${t}-mini:not(${t}-disabled)`]: {
      [`${t}-prev, ${t}-next`]: {
        [`&:hover ${t}-item-link`]: {
          backgroundColor: e.colorBgTextHover
        },
        [`&:active ${t}-item-link`]: {
          backgroundColor: e.colorBgTextActive
        },
        [`&${t}-disabled:hover ${t}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: e.itemSizeSM,
        lineHeight: W(e.itemSizeSM)
      }
    },
    [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
      height: e.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: W(e.itemSizeSM)
    },
    [`&${t}-mini ${t}-options`]: {
      marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
      "&-size-changer": {
        top: e.miniOptionsSizeChangerTop
      },
      "&-quick-jumper": {
        height: e.itemSizeSM,
        lineHeight: W(e.itemSizeSM),
        input: Object.assign(Object.assign({}, As(e)), {
          width: e.paginationMiniQuickJumperInputWidth,
          height: e.controlHeightSM
        })
      }
    }
  };
}, kw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`&${t}-simple`]: {
      [`${t}-prev, ${t}-next`]: {
        height: e.itemSize,
        lineHeight: W(e.itemSize),
        verticalAlign: "top",
        [`${t}-item-link`]: {
          height: e.itemSize,
          backgroundColor: "transparent",
          border: 0,
          "&:hover": {
            backgroundColor: e.colorBgTextHover
          },
          "&:active": {
            backgroundColor: e.colorBgTextActive
          },
          "&::after": {
            height: e.itemSize,
            lineHeight: W(e.itemSize)
          }
        }
      },
      [`${t}-simple-pager`]: {
        display: "inline-flex",
        alignItems: "center",
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: "border-box",
          height: "100%",
          width: e.quickJumperInputWidth,
          padding: `0 ${W(e.paginationItemPaddingInline)}`,
          textAlign: "center",
          backgroundColor: e.itemInputBg,
          border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: "none",
          transition: `border-color ${e.motionDurationMid}`,
          color: "inherit",
          "&:hover": {
            borderColor: e.colorPrimary
          },
          "&:focus": {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${W(e.inputOutlineOffset)} 0 ${W(e.controlOutlineWidth)} ${e.controlOutline}`
          },
          "&[disabled]": {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: "not-allowed"
          }
        }
      },
      [`&${t}-disabled`]: {
        [`${t}-prev, ${t}-next`]: {
          [`${t}-item-link`]: {
            "&:hover, &:active": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      [`&${t}-mini`]: {
        [`${t}-prev, ${t}-next`]: {
          height: e.itemSizeSM,
          lineHeight: W(e.itemSizeSM),
          [`${t}-item-link`]: {
            height: e.itemSizeSM,
            "&::after": {
              height: e.itemSizeSM,
              lineHeight: W(e.itemSizeSM)
            }
          }
        },
        [`${t}-simple-pager`]: {
          height: e.itemSizeSM,
          input: {
            width: e.paginationMiniQuickJumperInputWidth
          }
        }
      }
    }
  };
}, Gw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-jump-prev, ${t}-jump-next`]: {
      outline: 0,
      [`${t}-item-container`]: {
        position: "relative",
        [`${t}-item-link-icon`]: {
          color: e.colorPrimary,
          fontSize: e.fontSizeSM,
          opacity: 0,
          transition: `all ${e.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${t}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: e.colorTextDisabled,
          letterSpacing: e.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: e.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${e.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${t}-item-link-icon`]: {
          opacity: 1
        },
        [`${t}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      marginInlineEnd: e.marginXS
    },
    [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      color: e.colorText,
      fontFamily: e.fontFamily,
      lineHeight: W(e.itemSize),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: e.borderRadius,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`
    },
    [`${t}-prev, ${t}-next`]: {
      outline: 0,
      button: {
        color: e.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${t}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: e.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${W(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `all ${e.motionDurationMid}`
      },
      [`&:hover ${t}-item-link`]: {
        backgroundColor: e.colorBgTextHover
      },
      [`&:active ${t}-item-link`]: {
        backgroundColor: e.colorBgTextActive
      },
      [`&${t}-disabled:hover`]: {
        [`${t}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${t}-slash`]: {
      marginInlineEnd: e.paginationSlashMarginInlineEnd,
      marginInlineStart: e.paginationSlashMarginInlineStart
    },
    [`${t}-options`]: {
      display: "inline-block",
      marginInlineStart: e.margin,
      verticalAlign: "middle",
      "&-size-changer": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: e.controlHeight,
        marginInlineStart: e.marginXS,
        lineHeight: W(e.controlHeight),
        verticalAlign: "top",
        input: Object.assign(Object.assign(Object.assign({}, Ls(e)), zs(e, {
          borderColor: e.colorBorder,
          hoverBorderColor: e.colorPrimaryHover,
          activeBorderColor: e.colorPrimary,
          activeShadow: e.activeShadow
        })), {
          "&[disabled]": Object.assign({}, ti(e)),
          width: e.quickJumperInputWidth,
          height: e.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: e.marginXS,
          marginInlineEnd: e.marginXS
        })
      }
    }
  };
}, Kw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-item`]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      marginInlineEnd: e.marginXS,
      fontFamily: e.fontFamily,
      lineHeight: W(e.calc(e.itemSize).sub(2).equal()),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: e.itemBg,
      border: `${W(e.lineWidth)} ${e.lineType} transparent`,
      borderRadius: e.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${W(e.paginationItemPaddingInline)}`,
        color: e.colorText,
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${t}-item-active)`]: {
        "&:hover": {
          transition: `all ${e.motionDurationMid}`,
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        }
      },
      "&-active": {
        fontWeight: e.fontWeightStrong,
        backgroundColor: e.itemActiveBg,
        borderColor: e.colorPrimary,
        a: {
          color: e.itemActiveColor
        },
        "&:hover": {
          borderColor: e.colorPrimaryHover
        },
        "&:hover a": {
          color: e.itemActiveColorHover
        }
      }
    }
  };
}, qw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, gn(e)), {
      display: "flex",
      flexWrap: "wrap",
      rowGap: e.paddingXS,
      "&-start": {
        justifyContent: "start"
      },
      "&-center": {
        justifyContent: "center"
      },
      "&-end": {
        justifyContent: "end"
      },
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${t}-total-text`]: {
        display: "inline-block",
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        lineHeight: W(e.calc(e.itemSize).sub(2).equal()),
        verticalAlign: "middle"
      }
    }), Kw(e)), Gw(e)), kw(e)), Ww(e)), Hw(e)), {
      // media query style
      [`@media only screen and (max-width: ${e.screenLG}px)`]: {
        [`${t}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${e.screenSM}px)`]: {
        [`${t}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${e.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
}, Uw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}:not(${t}-disabled)`]: {
      [`${t}-item`]: Object.assign({}, Po(e)),
      [`${t}-jump-prev, ${t}-jump-next`]: {
        "&:focus-visible": Object.assign({
          [`${t}-item-link-icon`]: {
            opacity: 1
          },
          [`${t}-item-ellipsis`]: {
            opacity: 0
          }
        }, Ia(e))
      },
      [`${t}-prev, ${t}-next`]: {
        [`&:focus-visible ${t}-item-link`]: Ia(e)
      }
    }
  };
}, xm = (e) => Object.assign({
  itemBg: e.colorBgContainer,
  itemSize: e.controlHeight,
  itemSizeSM: e.controlHeightSM,
  itemActiveBg: e.colorBgContainer,
  itemActiveColor: e.colorPrimary,
  itemActiveColorHover: e.colorPrimaryHover,
  itemLinkBg: e.colorBgContainer,
  itemActiveColorDisabled: e.colorTextDisabled,
  itemActiveBgDisabled: e.controlItemBgActiveDisabled,
  itemInputBg: e.colorBgContainer,
  miniOptionsSizeChangerTop: 0
}, js(e)), wm = (e) => Bt(e, {
  inputOutlineOffset: 0,
  quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
  paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
  paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
  paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
  paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
  paginationSlashMarginInlineStart: e.marginSM,
  paginationSlashMarginInlineEnd: e.marginSM,
  paginationEllipsisTextIndent: "0.13em"
  // magic for ui experience
}, Ds(e)), Xw = un("Pagination", (e) => {
  const t = wm(e);
  return [qw(t), Uw(t)];
}, xm), Yw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
      "&, &:hover": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      "&:focus-visible": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      [`${t}-item, ${t}-item-link`]: {
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        [`&:hover:not(${t}-item-active)`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          a: {
            color: e.colorTextDisabled
          }
        },
        [`&${t}-item-active`]: {
          backgroundColor: e.itemActiveBgDisabled
        }
      },
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          color: e.colorTextDisabled
        },
        [`${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder
        }
      }
    },
    [`${t}${t}-bordered:not(${t}-mini)`]: {
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          borderColor: e.colorPrimaryHover,
          backgroundColor: e.itemBg
        },
        [`${t}-item-link`]: {
          backgroundColor: e.itemLinkBg,
          borderColor: e.colorBorder
        },
        [`&:hover ${t}-item-link`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          color: e.colorPrimary
        },
        [`&${t}-disabled`]: {
          [`${t}-item-link`]: {
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          }
        }
      },
      [`${t}-item`]: {
        backgroundColor: e.itemBg,
        border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        [`&:hover:not(${t}-item-active)`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          a: {
            color: e.colorPrimary
          }
        },
        "&-active": {
          borderColor: e.colorPrimary
        }
      }
    }
  };
}, Jw = _h(["Pagination", "bordered"], (e) => {
  const t = wm(e);
  return Yw(t);
}, xm);
function nd(e) {
  return Mn(() => typeof e == "boolean" ? [e, {}] : e && typeof e == "object" ? [!0, e] : [void 0, void 0], [e]);
}
var Qw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Em = (e) => {
  const {
    align: t,
    prefixCls: n,
    selectPrefixCls: r,
    className: a,
    rootClassName: o,
    style: i,
    size: l,
    locale: c,
    responsive: u,
    showSizeChanger: d,
    selectComponentClass: f,
    pageSizeOptions: v
  } = e, p = Qw(e, ["align", "prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "responsive", "showSizeChanger", "selectComponentClass", "pageSizeOptions"]), {
    xs: h
  } = ka(u), [, g] = Bn(), {
    getPrefixCls: m,
    direction: b,
    showSizeChanger: y,
    className: $,
    style: C
  } = tr("pagination"), S = m("pagination", n), [x, w, E] = Xw(S), O = Sr(l), P = O === "small" || !!(h && !O && u), [M] = ko("Pagination", Qd), I = Object.assign(Object.assign({}, M), c), [N, T] = nd(d), [F, j] = nd(y), A = N ?? F, B = T ?? j, V = f || $r, L = s.useMemo(() => v ? v.map((re) => Number(re)) : void 0, [v]), R = (re) => {
    var Q;
    const {
      disabled: le,
      size: oe,
      onSizeChange: de,
      "aria-label": X,
      className: K,
      options: ae
    } = re, {
      className: G,
      onChange: ne
    } = B || {}, Y = (Q = ae.find((me) => String(me.value) === String(oe))) === null || Q === void 0 ? void 0 : Q.value;
    return /* @__PURE__ */ s.createElement(V, Object.assign({
      disabled: le,
      showSearch: !0,
      popupMatchSelectWidth: !1,
      getPopupContainer: (me) => me.parentNode,
      "aria-label": X,
      options: ae
    }, B, {
      value: Y,
      onChange: (me, pe) => {
        de?.(me), ne?.(me, pe);
      },
      size: P ? "small" : "middle",
      className: U(K, G)
    }));
  };
  if (process.env.NODE_ENV !== "production") {
    const re = on("Pagination");
    process.env.NODE_ENV !== "production" && re(!f, "usage", "`selectComponentClass` is not official api which will be removed.");
  }
  const z = s.useMemo(() => {
    const re = /* @__PURE__ */ s.createElement("span", {
      className: `${S}-item-ellipsis`
    }, "•••"), Q = /* @__PURE__ */ s.createElement("button", {
      className: `${S}-item-link`,
      type: "button",
      tabIndex: -1
    }, b === "rtl" ? /* @__PURE__ */ s.createElement(yl, null) : /* @__PURE__ */ s.createElement(Ll, null)), le = /* @__PURE__ */ s.createElement("button", {
      className: `${S}-item-link`,
      type: "button",
      tabIndex: -1
    }, b === "rtl" ? /* @__PURE__ */ s.createElement(Ll, null) : /* @__PURE__ */ s.createElement(yl, null)), oe = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ s.createElement("a", {
        className: `${S}-item-link`
      }, /* @__PURE__ */ s.createElement("div", {
        className: `${S}-item-container`
      }, b === "rtl" ? /* @__PURE__ */ s.createElement(ql, {
        className: `${S}-item-link-icon`
      }) : /* @__PURE__ */ s.createElement(Kl, {
        className: `${S}-item-link-icon`
      }), re))
    ), de = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ s.createElement("a", {
        className: `${S}-item-link`
      }, /* @__PURE__ */ s.createElement("div", {
        className: `${S}-item-container`
      }, b === "rtl" ? /* @__PURE__ */ s.createElement(Kl, {
        className: `${S}-item-link-icon`
      }) : /* @__PURE__ */ s.createElement(ql, {
        className: `${S}-item-link-icon`
      }), re))
    );
    return {
      prevIcon: Q,
      nextIcon: le,
      jumpPrevIcon: oe,
      jumpNextIcon: de
    };
  }, [b, S]), k = m("select", r), q = U({
    [`${S}-${t}`]: !!t,
    [`${S}-mini`]: P,
    [`${S}-rtl`]: b === "rtl",
    [`${S}-bordered`]: g.wireframe
  }, $, a, o, w, E), ee = Object.assign(Object.assign({}, C), i);
  return x(/* @__PURE__ */ s.createElement(s.Fragment, null, g.wireframe && /* @__PURE__ */ s.createElement(Jw, {
    prefixCls: S
  }), /* @__PURE__ */ s.createElement($m, Object.assign({}, z, p, {
    style: ee,
    prefixCls: S,
    selectPrefixCls: k,
    className: q,
    locale: I,
    pageSizeOptions: L,
    showSizeChanger: A,
    sizeChangerRender: R
  }))));
};
process.env.NODE_ENV !== "production" && (Em.displayName = "Pagination");
const Ao = 100, Om = Ao / 5, Pm = Ao / 2 - Om / 2, ji = Pm * 2 * Math.PI, rd = 50, ad = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ s.createElement("circle", {
    className: U(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: Pm,
    cx: rd,
    cy: rd,
    strokeWidth: Om,
    style: n
  });
}, Zw = ({
  percent: e,
  prefixCls: t
}) => {
  const n = `${t}-dot`, r = `${n}-holder`, a = `${r}-hidden`, [o, i] = s.useState(!1);
  Vt(() => {
    e !== 0 && i(!0);
  }, [e !== 0]);
  const l = Math.max(Math.min(e, 100), 0);
  if (!o)
    return null;
  const c = {
    strokeDashoffset: `${ji / 4}`,
    strokeDasharray: `${ji * l / 100} ${ji * (100 - l) / 100}`
  };
  return /* @__PURE__ */ s.createElement("span", {
    className: U(r, `${n}-progress`, l <= 0 && a)
  }, /* @__PURE__ */ s.createElement("svg", {
    viewBox: `0 0 ${Ao} ${Ao}`,
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": l
  }, /* @__PURE__ */ s.createElement(ad, {
    dotClassName: n,
    hasCircleCls: !0
  }), /* @__PURE__ */ s.createElement(ad, {
    dotClassName: n,
    style: c
  })));
};
function eE(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, a = `${r}-holder`, o = `${a}-hidden`;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("span", {
    className: U(a, n > 0 && o)
  }, /* @__PURE__ */ s.createElement("span", {
    className: U(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((i) => /* @__PURE__ */ s.createElement("i", {
    className: `${t}-dot-item`,
    key: i
  })))), /* @__PURE__ */ s.createElement(Zw, {
    prefixCls: t,
    percent: n
  }));
}
function tE(e) {
  var t;
  const {
    prefixCls: n,
    indicator: r,
    percent: a
  } = e, o = `${n}-dot`;
  return r && /* @__PURE__ */ s.isValidElement(r) ? Fa(r, {
    className: U((t = r.props) === null || t === void 0 ? void 0 : t.className, o),
    percent: a
  }) : /* @__PURE__ */ s.createElement(eE, {
    prefixCls: n,
    percent: a
  });
}
const nE = new Ot("antSpinMove", {
  to: {
    opacity: 1
  }
}), rE = new Ot("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), aE = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, gn(e)), {
      position: "absolute",
      display: "none",
      color: e.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${t}-text`]: {
        fontSize: e.fontSize,
        paddingTop: n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: e.colorBgMask,
        zIndex: e.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${e.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [t]: {
          [`${t}-dot-holder`]: {
            color: e.colorWhite
          },
          [`${t}-text`]: {
            color: e.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${t}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: e.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: n(e.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
          position: "relative",
          transition: `opacity ${e.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: e.colorBgContainer,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${t}-blur`]: {
          clear: "both",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
          "&::after": {
            opacity: 0.4,
            pointerEvents: "auto"
          }
        }
      },
      // tip
      // ------------------------------
      "&-tip": {
        color: e.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${t}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: e.dotSize,
        display: "inline-block",
        transition: `transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: e.colorPrimary,
        "&-hidden": {
          transform: "scale(0.3)",
          opacity: 0
        }
      },
      // progress
      // ------------------------------
      [`${t}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${t}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: e.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          height: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: nE,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
          "&:nth-child(1)": {
            top: 0,
            insetInlineStart: 0,
            animationDelay: "0s"
          },
          "&:nth-child(2)": {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: "0.4s"
          },
          "&:nth-child(3)": {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: "0.8s"
          },
          "&:nth-child(4)": {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: "1.2s"
          }
        },
        "&-spin": {
          transform: "rotate(45deg)",
          animationName: rE,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((r) => `${r} ${e.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: e.colorFillSecondary
        }
      },
      // small
      [`&-sm ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeSM
        }
      },
      [`&-sm ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),
          height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeLG
        }
      },
      [`&-lg ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, oE = (e) => {
  const {
    controlHeightLG: t,
    controlHeight: n
  } = e;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: n
  };
}, iE = un("Spin", (e) => {
  const t = Bt(e, {
    spinDotDefault: e.colorTextDescription
  });
  return aE(t);
}, oE), lE = 200, od = [[30, 0.05], [70, 0.03], [96, 0.01]];
function sE(e, t) {
  const [n, r] = s.useState(0), a = s.useRef(null), o = t === "auto";
  return s.useEffect(() => (o && e && (r(0), a.current = setInterval(() => {
    r((i) => {
      const l = 100 - i;
      for (let c = 0; c < od.length; c += 1) {
        const [u, d] = od[c];
        if (i <= u)
          return i + l * d;
      }
      return i;
    });
  }, lE)), () => {
    a.current && (clearInterval(a.current), a.current = null);
  }), [o, e]), o ? n : t;
}
var cE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let Rm;
function uE(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const Ws = (e) => {
  var t;
  const {
    prefixCls: n,
    spinning: r = !0,
    delay: a = 0,
    className: o,
    rootClassName: i,
    size: l = "default",
    tip: c,
    wrapperClassName: u,
    style: d,
    children: f,
    fullscreen: v = !1,
    indicator: p,
    percent: h
  } = e, g = cE(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: m,
    direction: b,
    className: y,
    style: $,
    indicator: C
  } = tr("spin"), S = m("spin", n), [x, w, E] = iE(S), [O, P] = s.useState(() => r && !uE(r, a)), M = sE(O, h);
  s.useEffect(() => {
    if (r) {
      const B = pw(a, () => {
        P(!0);
      });
      return B(), () => {
        var V;
        (V = B?.cancel) === null || V === void 0 || V.call(B);
      };
    }
    P(!1);
  }, [a, r]);
  const I = s.useMemo(() => typeof f < "u" && !v, [f, v]);
  if (process.env.NODE_ENV !== "production") {
    const B = on("Spin");
    process.env.NODE_ENV !== "production" && B(!c || I || v, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = U(S, y, {
    [`${S}-sm`]: l === "small",
    [`${S}-lg`]: l === "large",
    [`${S}-spinning`]: O,
    [`${S}-show-text`]: !!c,
    [`${S}-rtl`]: b === "rtl"
  }, o, !v && i, w, E), T = U(`${S}-container`, {
    [`${S}-blur`]: O
  }), F = (t = p ?? C) !== null && t !== void 0 ? t : Rm, j = Object.assign(Object.assign({}, $), d), A = /* @__PURE__ */ s.createElement("div", Object.assign({}, g, {
    style: j,
    className: N,
    "aria-live": "polite",
    "aria-busy": O
  }), /* @__PURE__ */ s.createElement(tE, {
    prefixCls: S,
    indicator: F,
    percent: M
  }), c && (I || v) ? /* @__PURE__ */ s.createElement("div", {
    className: `${S}-text`
  }, c) : null);
  return x(I ? /* @__PURE__ */ s.createElement("div", Object.assign({}, g, {
    className: U(`${S}-nested-loading`, u, w, E)
  }), O && /* @__PURE__ */ s.createElement("div", {
    key: "loading"
  }, A), /* @__PURE__ */ s.createElement("div", {
    className: T,
    key: "container"
  }, f)) : v ? /* @__PURE__ */ s.createElement("div", {
    className: U(`${S}-fullscreen`, {
      [`${S}-fullscreen-show`]: O
    }, i, w, E)
  }, A) : A);
};
Ws.setDefaultIndicator = (e) => {
  Rm = e;
};
process.env.NODE_ENV !== "production" && (Ws.displayName = "Spin");
const ks = /* @__PURE__ */ te.createContext({});
ks.Consumer;
var Im = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const dE = (e) => {
  var {
    prefixCls: t,
    className: n,
    avatar: r,
    title: a,
    description: o
  } = e, i = Im(e, ["prefixCls", "className", "avatar", "title", "description"]);
  const {
    getPrefixCls: l
  } = _n(Mt), c = l("list", t), u = U(`${c}-item-meta`, n), d = /* @__PURE__ */ te.createElement("div", {
    className: `${c}-item-meta-content`
  }, a && /* @__PURE__ */ te.createElement("h4", {
    className: `${c}-item-meta-title`
  }, a), o && /* @__PURE__ */ te.createElement("div", {
    className: `${c}-item-meta-description`
  }, o));
  return /* @__PURE__ */ te.createElement("div", Object.assign({}, i, {
    className: u
  }), r && /* @__PURE__ */ te.createElement("div", {
    className: `${c}-item-meta-avatar`
  }, r), (a || o) && d);
}, fE = /* @__PURE__ */ te.forwardRef((e, t) => {
  const {
    prefixCls: n,
    children: r,
    actions: a,
    extra: o,
    styles: i,
    className: l,
    classNames: c,
    colStyle: u
  } = e, d = Im(e, ["prefixCls", "children", "actions", "extra", "styles", "className", "classNames", "colStyle"]), {
    grid: f,
    itemLayout: v
  } = _n(ks), {
    getPrefixCls: p,
    list: h
  } = _n(Mt), g = (w) => {
    var E, O;
    return U((O = (E = h?.item) === null || E === void 0 ? void 0 : E.classNames) === null || O === void 0 ? void 0 : O[w], c?.[w]);
  }, m = (w) => {
    var E, O;
    return Object.assign(Object.assign({}, (O = (E = h?.item) === null || E === void 0 ? void 0 : E.styles) === null || O === void 0 ? void 0 : O[w]), i?.[w]);
  }, b = () => {
    let w = !1;
    return Ks.forEach(r, (E) => {
      typeof E == "string" && (w = !0);
    }), w && Ks.count(r) > 1;
  }, y = () => v === "vertical" ? !!o : !b(), $ = p("list", n), C = a && a.length > 0 && /* @__PURE__ */ te.createElement("ul", {
    className: U(`${$}-item-action`, g("actions")),
    key: "actions",
    style: m("actions")
  }, a.map((w, E) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ te.createElement("li", {
      key: `${$}-item-action-${E}`
    }, w, E !== a.length - 1 && /* @__PURE__ */ te.createElement("em", {
      className: `${$}-item-action-split`
    }))
  ))), S = f ? "div" : "li", x = /* @__PURE__ */ te.createElement(S, Object.assign({}, d, f ? {} : {
    ref: t
  }, {
    className: U(`${$}-item`, {
      [`${$}-item-no-flex`]: !y()
    }, l)
  }), v === "vertical" && o ? [/* @__PURE__ */ te.createElement("div", {
    className: `${$}-item-main`,
    key: "content"
  }, r, C), /* @__PURE__ */ te.createElement("div", {
    className: U(`${$}-item-extra`, g("extra")),
    key: "extra",
    style: m("extra")
  }, o)] : [r, C, Fa(o, {
    key: "extra"
  })]);
  return f ? /* @__PURE__ */ te.createElement(ym, {
    ref: t,
    flex: 1,
    style: u
  }, x) : x;
}), Nm = fE;
Nm.Meta = dE;
const vE = (e) => {
  const {
    listBorderedCls: t,
    componentCls: n,
    paddingLG: r,
    margin: a,
    itemPaddingSM: o,
    itemPaddingLG: i,
    marginLG: l,
    borderRadiusLG: c
  } = e, u = W(e.calc(c).sub(e.lineWidth).equal());
  return {
    [t]: {
      border: `${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
      borderRadius: c,
      [`${n}-header`]: {
        borderRadius: `${u} ${u} 0 0`
      },
      [`${n}-footer`]: {
        borderRadius: `0 0 ${u} ${u}`
      },
      [`${n}-header,${n}-footer,${n}-item`]: {
        paddingInline: r
      },
      [`${n}-pagination`]: {
        margin: `${W(a)} ${W(l)}`
      }
    },
    [`${t}${n}-sm`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: o
      }
    },
    [`${t}${n}-lg`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: i
      }
    }
  };
}, mE = (e) => {
  const {
    componentCls: t,
    screenSM: n,
    screenMD: r,
    marginLG: a,
    marginSM: o,
    margin: i
  } = e;
  return {
    [`@media screen and (max-width:${r}px)`]: {
      [t]: {
        [`${t}-item`]: {
          [`${t}-item-action`]: {
            marginInlineStart: a
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          [`${t}-item-extra`]: {
            marginInlineStart: a
          }
        }
      }
    },
    [`@media screen and (max-width: ${n}px)`]: {
      [t]: {
        [`${t}-item`]: {
          flexWrap: "wrap",
          [`${t}-action`]: {
            marginInlineStart: o
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          flexWrap: "wrap-reverse",
          [`${t}-item-main`]: {
            minWidth: e.contentWidth
          },
          [`${t}-item-extra`]: {
            margin: `auto auto ${W(i)}`
          }
        }
      }
    }
  };
}, gE = (e) => {
  const {
    componentCls: t,
    antCls: n,
    controlHeight: r,
    minHeight: a,
    paddingSM: o,
    marginLG: i,
    padding: l,
    itemPadding: c,
    colorPrimary: u,
    itemPaddingSM: d,
    itemPaddingLG: f,
    paddingXS: v,
    margin: p,
    colorText: h,
    colorTextDescription: g,
    motionDurationSlow: m,
    lineWidth: b,
    headerBg: y,
    footerBg: $,
    emptyTextPadding: C,
    metaMarginBottom: S,
    avatarMarginRight: x,
    titleMarginBottom: w,
    descriptionFontSize: E
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, gn(e)), {
      position: "relative",
      // fix https://github.com/ant-design/ant-design/issues/46177
      "--rc-virtual-list-scrollbar-bg": e.colorSplit,
      "*": {
        outline: "none"
      },
      [`${t}-header`]: {
        background: y
      },
      [`${t}-footer`]: {
        background: $
      },
      [`${t}-header, ${t}-footer`]: {
        paddingBlock: o
      },
      [`${t}-pagination`]: {
        marginBlockStart: i,
        // https://github.com/ant-design/ant-design/issues/20037
        [`${n}-pagination-options`]: {
          textAlign: "start"
        }
      },
      [`${t}-spin`]: {
        minHeight: a,
        textAlign: "center"
      },
      [`${t}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${t}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: c,
        color: h,
        [`${t}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${t}-item-meta-avatar`]: {
            marginInlineEnd: x
          },
          [`${t}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: h
          },
          [`${t}-item-meta-title`]: {
            margin: `0 0 ${W(e.marginXXS)} 0`,
            color: h,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            "> a": {
              color: h,
              transition: `all ${m}`,
              "&:hover": {
                color: u
              }
            }
          },
          [`${t}-item-meta-description`]: {
            color: g,
            fontSize: E,
            lineHeight: e.lineHeight
          }
        },
        [`${t}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: e.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          "& > li": {
            position: "relative",
            display: "inline-block",
            padding: `0 ${W(v)}`,
            color: g,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            textAlign: "center",
            "&:first-child": {
              paddingInlineStart: 0
            }
          },
          [`${t}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: b,
            height: e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),
            transform: "translateY(-50%)",
            backgroundColor: e.colorSplit
          }
        }
      },
      [`${t}-empty`]: {
        padding: `${W(l)} 0`,
        color: g,
        fontSize: e.fontSizeSM,
        textAlign: "center"
      },
      [`${t}-empty-text`]: {
        padding: C,
        color: e.colorTextDisabled,
        fontSize: e.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${t}-item-no-flex`]: {
        display: "block"
      }
    }),
    [`${t}-grid ${n}-col > ${t}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: p,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${t}-vertical ${t}-item`]: {
      alignItems: "initial",
      [`${t}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${t}-item-extra`]: {
        marginInlineStart: i
      },
      [`${t}-item-meta`]: {
        marginBlockEnd: S,
        [`${t}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: w,
          color: h,
          fontSize: e.fontSizeLG,
          lineHeight: e.lineHeightLG
        }
      },
      [`${t}-item-action`]: {
        marginBlockStart: l,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${W(l)}`,
          "&:first-child": {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${t}-split ${t}-item`]: {
      borderBlockEnd: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
      "&:last-child": {
        borderBlockEnd: "none"
      }
    },
    [`${t}-split ${t}-header`]: {
      borderBlockEnd: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-split${t}-empty ${t}-footer`]: {
      borderTop: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-loading ${t}-spin-nested-loading`]: {
      minHeight: r
    },
    [`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: {
      borderBlockEnd: `${W(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-lg ${t}-item`]: {
      padding: f
    },
    [`${t}-sm ${t}-item`]: {
      padding: d
    },
    // Horizontal
    [`${t}:not(${t}-vertical)`]: {
      [`${t}-item-no-flex`]: {
        [`${t}-item-action`]: {
          float: "right"
        }
      }
    }
  };
}, pE = (e) => ({
  contentWidth: 220,
  itemPadding: `${W(e.paddingContentVertical)} 0`,
  itemPaddingSM: `${W(e.paddingContentVerticalSM)} ${W(e.paddingContentHorizontal)}`,
  itemPaddingLG: `${W(e.paddingContentVerticalLG)} ${W(e.paddingContentHorizontalLG)}`,
  headerBg: "transparent",
  footerBg: "transparent",
  emptyTextPadding: e.padding,
  metaMarginBottom: e.padding,
  avatarMarginRight: e.padding,
  titleMarginBottom: e.paddingSM,
  descriptionFontSize: e.fontSize
}), hE = un("List", (e) => {
  const t = Bt(e, {
    listBorderedCls: `${e.componentCls}-bordered`,
    minHeight: e.controlHeightLG
  });
  return [gE(t), vE(t), mE(t)];
}, pE);
var bE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function yE(e, t) {
  const {
    pagination: n = !1,
    prefixCls: r,
    bordered: a = !1,
    split: o = !0,
    className: i,
    rootClassName: l,
    style: c,
    children: u,
    itemLayout: d,
    loadMore: f,
    grid: v,
    dataSource: p = [],
    size: h,
    header: g,
    footer: m,
    loading: b = !1,
    rowKey: y,
    renderItem: $,
    locale: C
  } = e, S = bE(e, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]), x = n && typeof n == "object" ? n : {}, [w, E] = s.useState(x.defaultCurrent || 1), [O, P] = s.useState(x.defaultPageSize || 10), {
    getPrefixCls: M,
    direction: I,
    className: N,
    style: T
  } = tr("list"), {
    renderEmpty: F
  } = s.useContext(Mt), j = {
    current: 1,
    total: 0,
    position: "bottom"
  }, A = (ue) => (xe, ve) => {
    var We;
    E(xe), P(ve), n && ((We = n?.[ue]) === null || We === void 0 || We.call(n, xe, ve));
  }, B = A("onChange"), V = A("onShowSizeChange"), L = (ue, xe) => {
    if (!$)
      return null;
    let ve;
    return typeof y == "function" ? ve = y(ue) : y ? ve = ue[y] : ve = ue.key, ve || (ve = `list-item-${xe}`), /* @__PURE__ */ s.createElement(s.Fragment, {
      key: ve
    }, $(ue, xe));
  }, R = !!(f || n || m), z = M("list", r), [k, q, ee] = hE(z);
  let re = b;
  typeof re == "boolean" && (re = {
    spinning: re
  });
  const Q = !!re?.spinning, le = Sr(h);
  let oe = "";
  switch (le) {
    case "large":
      oe = "lg";
      break;
    case "small":
      oe = "sm";
      break;
  }
  const de = U(z, {
    [`${z}-vertical`]: d === "vertical",
    [`${z}-${oe}`]: oe,
    [`${z}-split`]: o,
    [`${z}-bordered`]: a,
    [`${z}-loading`]: Q,
    [`${z}-grid`]: !!v,
    [`${z}-something-after-last-item`]: R,
    [`${z}-rtl`]: I === "rtl"
  }, N, i, l, q, ee), X = z0(j, {
    total: p.length,
    current: w,
    pageSize: O
  }, n || {}), K = Math.ceil(X.total / X.pageSize);
  X.current = Math.min(X.current, K);
  const ae = n && /* @__PURE__ */ s.createElement("div", {
    className: U(`${z}-pagination`)
  }, /* @__PURE__ */ s.createElement(Em, Object.assign({
    align: "end"
  }, X, {
    onChange: B,
    onShowSizeChange: V
  })));
  let G = Se(p);
  n && p.length > (X.current - 1) * X.pageSize && (G = Se(p).splice((X.current - 1) * X.pageSize, X.pageSize));
  const ne = Object.keys(v || {}).some((ue) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(ue)), Y = ka(ne), me = s.useMemo(() => {
    for (let ue = 0; ue < Qn.length; ue += 1) {
      const xe = Qn[ue];
      if (Y[xe])
        return xe;
    }
  }, [Y]), pe = s.useMemo(() => {
    if (!v)
      return;
    const ue = me && v[me] ? v[me] : v.column;
    if (ue)
      return {
        width: `${100 / ue}%`,
        maxWidth: `${100 / ue}%`
      };
  }, [JSON.stringify(v), me]);
  let he = Q && /* @__PURE__ */ s.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (G.length > 0) {
    const ue = G.map(L);
    he = v ? /* @__PURE__ */ s.createElement(Sm, {
      gutter: v.gutter
    }, s.Children.map(ue, (xe) => /* @__PURE__ */ s.createElement("div", {
      key: xe?.key,
      style: pe
    }, xe))) : /* @__PURE__ */ s.createElement("ul", {
      className: `${z}-items`
    }, ue);
  } else !u && !Q && (he = /* @__PURE__ */ s.createElement("div", {
    className: `${z}-empty-text`
  }, C?.emptyText || F?.("List") || /* @__PURE__ */ s.createElement(Iv, {
    componentName: "List"
  })));
  const fe = X.position, se = s.useMemo(() => ({
    grid: v,
    itemLayout: d
  }), [JSON.stringify(v), d]);
  return k(/* @__PURE__ */ s.createElement(ks.Provider, {
    value: se
  }, /* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, T), c),
    className: de
  }, S), (fe === "top" || fe === "both") && ae, g && /* @__PURE__ */ s.createElement("div", {
    className: `${z}-header`
  }, g), /* @__PURE__ */ s.createElement(Ws, Object.assign({}, re), he, u), m && /* @__PURE__ */ s.createElement("div", {
    className: `${z}-footer`
  }, m), f || (fe === "bottom" || fe === "both") && ae)));
}
const _m = /* @__PURE__ */ s.forwardRef(yE);
process.env.NODE_ENV !== "production" && (_m.displayName = "List");
const Co = _m;
Co.Item = Nm;
var SE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, name: "user", theme: "outlined" }, CE = function(t, n) {
  return /* @__PURE__ */ s.createElement(dn, ye({}, t, {
    ref: n,
    icon: SE
  }));
}, Ul = /* @__PURE__ */ s.forwardRef(CE);
process.env.NODE_ENV !== "production" && (Ul.displayName = "UserOutlined");
function EE({ name: e, age: t, listData: n = [] }) {
  const [r, a] = _t(260);
  return Wt(() => {
    const o = setInterval(() => {
      a((i) => i + 10);
    }, 1e3);
    return () => clearInterval(o);
  }, []), /* @__PURE__ */ Sn.jsxs(
    ri,
    {
      style: {
        width: 260,
        height: r,
        borderRadius: 16,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "height 0.5s ease",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ Sn.jsxs("div", { style: { textAlign: "center", marginBottom: 16 }, children: [
          /* @__PURE__ */ Sn.jsx(Al, { size: 64, icon: /* @__PURE__ */ Sn.jsx(Ul, {}) }),
          /* @__PURE__ */ Sn.jsx("h3", { style: { marginTop: 12, color: "#fff" }, children: e })
        ] }),
        /* @__PURE__ */ Sn.jsxs(
          ha,
          {
            size: "small",
            column: 1,
            bordered: !0,
            style: {
              background: "rgba(255,255,255,0.2)",
              borderRadius: 8
            },
            children: [
              /* @__PURE__ */ Sn.jsx(ha.Item, { label: "Name", style: { color: "#fff" }, children: e }),
              /* @__PURE__ */ Sn.jsx(ha.Item, { label: "Age", style: { color: "#fff" }, children: t })
            ]
          }
        ),
        /* @__PURE__ */ Sn.jsx(
          Co,
          {
            itemLayout: "horizontal",
            dataSource: n,
            renderItem: (o) => /* @__PURE__ */ Sn.jsx(Co.Item, { children: /* @__PURE__ */ Sn.jsx(
              Co.Item.Meta,
              {
                avatar: /* @__PURE__ */ Sn.jsx(Al, { icon: /* @__PURE__ */ Sn.jsx(Ul, {}) }),
                title: /* @__PURE__ */ Sn.jsx("a", { href: "https://ant.design", children: o.title }),
                description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
              }
            ) })
          }
        )
      ]
    }
  );
}
export {
  EE as default
};
