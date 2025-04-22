var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const l = document.createElement("link").relList;
        if (l && l.supports && l.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
        new MutationObserver((o) => {
          for (const d of o) if (d.type === "childList") for (const m of d.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && s(m);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function u(o) {
          const d = {};
          return o.integrity && (d.integrity = o.integrity), o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
        }
        function s(o) {
          if (o.ep) return;
          o.ep = true;
          const d = u(o);
          fetch(o.href, d);
        }
      })();
      var as = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function N0(c) {
        return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
      }
      var io = {
        exports: {}
      }, Ai = {};
      var fp;
      function B0() {
        if (fp) return Ai;
        fp = 1;
        var c = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
        function u(s, o, d) {
          var m = null;
          if (d !== void 0 && (m = "" + d), o.key !== void 0 && (m = "" + o.key), "key" in o) {
            d = {};
            for (var v in o) v !== "key" && (d[v] = o[v]);
          } else d = o;
          return o = d.ref, {
            $$typeof: c,
            type: s,
            key: m,
            ref: o !== void 0 ? o : null,
            props: d
          };
        }
        return Ai.Fragment = l, Ai.jsx = u, Ai.jsxs = u, Ai;
      }
      var dp;
      function H0() {
        return dp || (dp = 1, io.exports = B0()), io.exports;
      }
      var oe = H0(), uo = {
        exports: {}
      }, et = {};
      var hp;
      function q0() {
        if (hp) return et;
        hp = 1;
        var c = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), x = Symbol.iterator;
        function O(_) {
          return _ === null || typeof _ != "object" ? null : (_ = x && _[x] || _["@@iterator"], typeof _ == "function" ? _ : null);
        }
        var z = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function() {
          },
          enqueueReplaceState: function() {
          },
          enqueueSetState: function() {
          }
        }, L = Object.assign, j = {};
        function V(_, N, X) {
          this.props = _, this.context = N, this.refs = j, this.updater = X || z;
        }
        V.prototype.isReactComponent = {}, V.prototype.setState = function(_, N) {
          if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, _, N, "setState");
        }, V.prototype.forceUpdate = function(_) {
          this.updater.enqueueForceUpdate(this, _, "forceUpdate");
        };
        function ut() {
        }
        ut.prototype = V.prototype;
        function B(_, N, X) {
          this.props = _, this.context = N, this.refs = j, this.updater = X || z;
        }
        var tt = B.prototype = new ut();
        tt.constructor = B, L(tt, V.prototype), tt.isPureReactComponent = true;
        var st = Array.isArray, Q = {
          H: null,
          A: null,
          T: null,
          S: null,
          V: null
        }, ft = Object.prototype.hasOwnProperty;
        function ot(_, N, X, H, K, ht) {
          return X = ht.ref, {
            $$typeof: c,
            type: _,
            key: N,
            ref: X !== void 0 ? X : null,
            props: ht
          };
        }
        function pt(_, N) {
          return ot(_.type, N, void 0, void 0, void 0, _.props);
        }
        function _t(_) {
          return typeof _ == "object" && _ !== null && _.$$typeof === c;
        }
        function Tt(_) {
          var N = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + _.replace(/[=:]/g, function(X) {
            return N[X];
          });
        }
        var gt = /\/+/g;
        function Yt(_, N) {
          return typeof _ == "object" && _ !== null && _.key != null ? Tt("" + _.key) : N.toString(36);
        }
        function Ye() {
        }
        function sn(_) {
          switch (_.status) {
            case "fulfilled":
              return _.value;
            case "rejected":
              throw _.reason;
            default:
              switch (typeof _.status == "string" ? _.then(Ye, Ye) : (_.status = "pending", _.then(function(N) {
                _.status === "pending" && (_.status = "fulfilled", _.value = N);
              }, function(N) {
                _.status === "pending" && (_.status = "rejected", _.reason = N);
              })), _.status) {
                case "fulfilled":
                  return _.value;
                case "rejected":
                  throw _.reason;
              }
          }
          throw _;
        }
        function Gt(_, N, X, H, K) {
          var ht = typeof _;
          (ht === "undefined" || ht === "boolean") && (_ = null);
          var I = false;
          if (_ === null) I = true;
          else switch (ht) {
            case "bigint":
            case "string":
            case "number":
              I = true;
              break;
            case "object":
              switch (_.$$typeof) {
                case c:
                case l:
                  I = true;
                  break;
                case R:
                  return I = _._init, Gt(I(_._payload), N, X, H, K);
              }
          }
          if (I) return K = K(_), I = H === "" ? "." + Yt(_, 0) : H, st(K) ? (X = "", I != null && (X = I.replace(gt, "$&/") + "/"), Gt(K, N, X, "", function(Rn) {
            return Rn;
          })) : K != null && (_t(K) && (K = pt(K, X + (K.key == null || _ && _.key === K.key ? "" : ("" + K.key).replace(gt, "$&/") + "/") + I)), N.push(K)), 1;
          I = 0;
          var _e = H === "" ? "." : H + ":";
          if (st(_)) for (var Mt = 0; Mt < _.length; Mt++) H = _[Mt], ht = _e + Yt(H, Mt), I += Gt(H, N, X, ht, K);
          else if (Mt = O(_), typeof Mt == "function") for (_ = Mt.call(_), Mt = 0; !(H = _.next()).done; ) H = H.value, ht = _e + Yt(H, Mt++), I += Gt(H, N, X, ht, K);
          else if (ht === "object") {
            if (typeof _.then == "function") return Gt(sn(_), N, X, H, K);
            throw N = String(_), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
          }
          return I;
        }
        function D(_, N, X) {
          if (_ == null) return _;
          var H = [], K = 0;
          return Gt(_, H, "", "", function(ht) {
            return N.call(X, ht, K++);
          }), H;
        }
        function q(_) {
          if (_._status === -1) {
            var N = _._result;
            N = N(), N.then(function(X) {
              (_._status === 0 || _._status === -1) && (_._status = 1, _._result = X);
            }, function(X) {
              (_._status === 0 || _._status === -1) && (_._status = 2, _._result = X);
            }), _._status === -1 && (_._status = 0, _._result = N);
          }
          if (_._status === 1) return _._result.default;
          throw _._result;
        }
        var F = typeof reportError == "function" ? reportError : function(_) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var N = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
              error: _
            });
            if (!window.dispatchEvent(N)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        };
        function Rt() {
        }
        return et.Children = {
          map: D,
          forEach: function(_, N, X) {
            D(_, function() {
              N.apply(this, arguments);
            }, X);
          },
          count: function(_) {
            var N = 0;
            return D(_, function() {
              N++;
            }), N;
          },
          toArray: function(_) {
            return D(_, function(N) {
              return N;
            }) || [];
          },
          only: function(_) {
            if (!_t(_)) throw Error("React.Children.only expected to receive a single React element child.");
            return _;
          }
        }, et.Component = V, et.Fragment = u, et.Profiler = o, et.PureComponent = B, et.StrictMode = s, et.Suspense = S, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, et.__COMPILER_RUNTIME = {
          __proto__: null,
          c: function(_) {
            return Q.H.useMemoCache(_);
          }
        }, et.cache = function(_) {
          return function() {
            return _.apply(null, arguments);
          };
        }, et.cloneElement = function(_, N, X) {
          if (_ == null) throw Error("The argument must be a React element, but you passed " + _ + ".");
          var H = L({}, _.props), K = _.key, ht = void 0;
          if (N != null) for (I in N.ref !== void 0 && (ht = void 0), N.key !== void 0 && (K = "" + N.key), N) !ft.call(N, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && N.ref === void 0 || (H[I] = N[I]);
          var I = arguments.length - 2;
          if (I === 1) H.children = X;
          else if (1 < I) {
            for (var _e = Array(I), Mt = 0; Mt < I; Mt++) _e[Mt] = arguments[Mt + 2];
            H.children = _e;
          }
          return ot(_.type, K, void 0, void 0, ht, H);
        }, et.createContext = function(_) {
          return _ = {
            $$typeof: m,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }, _.Provider = _, _.Consumer = {
            $$typeof: d,
            _context: _
          }, _;
        }, et.createElement = function(_, N, X) {
          var H, K = {}, ht = null;
          if (N != null) for (H in N.key !== void 0 && (ht = "" + N.key), N) ft.call(N, H) && H !== "key" && H !== "__self" && H !== "__source" && (K[H] = N[H]);
          var I = arguments.length - 2;
          if (I === 1) K.children = X;
          else if (1 < I) {
            for (var _e = Array(I), Mt = 0; Mt < I; Mt++) _e[Mt] = arguments[Mt + 2];
            K.children = _e;
          }
          if (_ && _.defaultProps) for (H in I = _.defaultProps, I) K[H] === void 0 && (K[H] = I[H]);
          return ot(_, ht, void 0, void 0, null, K);
        }, et.createRef = function() {
          return {
            current: null
          };
        }, et.forwardRef = function(_) {
          return {
            $$typeof: v,
            render: _
          };
        }, et.isValidElement = _t, et.lazy = function(_) {
          return {
            $$typeof: R,
            _payload: {
              _status: -1,
              _result: _
            },
            _init: q
          };
        }, et.memo = function(_, N) {
          return {
            $$typeof: y,
            type: _,
            compare: N === void 0 ? null : N
          };
        }, et.startTransition = function(_) {
          var N = Q.T, X = {};
          Q.T = X;
          try {
            var H = _(), K = Q.S;
            K !== null && K(X, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Rt, F);
          } catch (ht) {
            F(ht);
          } finally {
            Q.T = N;
          }
        }, et.unstable_useCacheRefresh = function() {
          return Q.H.useCacheRefresh();
        }, et.use = function(_) {
          return Q.H.use(_);
        }, et.useActionState = function(_, N, X) {
          return Q.H.useActionState(_, N, X);
        }, et.useCallback = function(_, N) {
          return Q.H.useCallback(_, N);
        }, et.useContext = function(_) {
          return Q.H.useContext(_);
        }, et.useDebugValue = function() {
        }, et.useDeferredValue = function(_, N) {
          return Q.H.useDeferredValue(_, N);
        }, et.useEffect = function(_, N, X) {
          var H = Q.H;
          if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
          return H.useEffect(_, N);
        }, et.useId = function() {
          return Q.H.useId();
        }, et.useImperativeHandle = function(_, N, X) {
          return Q.H.useImperativeHandle(_, N, X);
        }, et.useInsertionEffect = function(_, N) {
          return Q.H.useInsertionEffect(_, N);
        }, et.useLayoutEffect = function(_, N) {
          return Q.H.useLayoutEffect(_, N);
        }, et.useMemo = function(_, N) {
          return Q.H.useMemo(_, N);
        }, et.useOptimistic = function(_, N) {
          return Q.H.useOptimistic(_, N);
        }, et.useReducer = function(_, N, X) {
          return Q.H.useReducer(_, N, X);
        }, et.useRef = function(_) {
          return Q.H.useRef(_);
        }, et.useState = function(_) {
          return Q.H.useState(_);
        }, et.useSyncExternalStore = function(_, N, X) {
          return Q.H.useSyncExternalStore(_, N, X);
        }, et.useTransition = function() {
          return Q.H.useTransition();
        }, et.version = "19.1.0", et;
      }
      var mp;
      function qo() {
        return mp || (mp = 1, uo.exports = q0()), uo.exports;
      }
      var Ze = qo(), so = {
        exports: {}
      }, Ei = {}, ro = {
        exports: {}
      }, co = {};
      var pp;
      function j0() {
        return pp || (pp = 1, function(c) {
          function l(D, q) {
            var F = D.length;
            D.push(q);
            t: for (; 0 < F; ) {
              var Rt = F - 1 >>> 1, _ = D[Rt];
              if (0 < o(_, q)) D[Rt] = q, D[F] = _, F = Rt;
              else break t;
            }
          }
          function u(D) {
            return D.length === 0 ? null : D[0];
          }
          function s(D) {
            if (D.length === 0) return null;
            var q = D[0], F = D.pop();
            if (F !== q) {
              D[0] = F;
              t: for (var Rt = 0, _ = D.length, N = _ >>> 1; Rt < N; ) {
                var X = 2 * (Rt + 1) - 1, H = D[X], K = X + 1, ht = D[K];
                if (0 > o(H, F)) K < _ && 0 > o(ht, H) ? (D[Rt] = ht, D[K] = F, Rt = K) : (D[Rt] = H, D[X] = F, Rt = X);
                else if (K < _ && 0 > o(ht, F)) D[Rt] = ht, D[K] = F, Rt = K;
                else break t;
              }
            }
            return q;
          }
          function o(D, q) {
            var F = D.sortIndex - q.sortIndex;
            return F !== 0 ? F : D.id - q.id;
          }
          if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            c.unstable_now = function() {
              return d.now();
            };
          } else {
            var m = Date, v = m.now();
            c.unstable_now = function() {
              return m.now() - v;
            };
          }
          var S = [], y = [], R = 1, x = null, O = 3, z = false, L = false, j = false, V = false, ut = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null;
          function st(D) {
            for (var q = u(y); q !== null; ) {
              if (q.callback === null) s(y);
              else if (q.startTime <= D) s(y), q.sortIndex = q.expirationTime, l(S, q);
              else break;
              q = u(y);
            }
          }
          function Q(D) {
            if (j = false, st(D), !L) if (u(S) !== null) L = true, ft || (ft = true, Yt());
            else {
              var q = u(y);
              q !== null && Gt(Q, q.startTime - D);
            }
          }
          var ft = false, ot = -1, pt = 5, _t = -1;
          function Tt() {
            return V ? true : !(c.unstable_now() - _t < pt);
          }
          function gt() {
            if (V = false, ft) {
              var D = c.unstable_now();
              _t = D;
              var q = true;
              try {
                t: {
                  L = false, j && (j = false, B(ot), ot = -1), z = true;
                  var F = O;
                  try {
                    e: {
                      for (st(D), x = u(S); x !== null && !(x.expirationTime > D && Tt()); ) {
                        var Rt = x.callback;
                        if (typeof Rt == "function") {
                          x.callback = null, O = x.priorityLevel;
                          var _ = Rt(x.expirationTime <= D);
                          if (D = c.unstable_now(), typeof _ == "function") {
                            x.callback = _, st(D), q = true;
                            break e;
                          }
                          x === u(S) && s(S), st(D);
                        } else s(S);
                        x = u(S);
                      }
                      if (x !== null) q = true;
                      else {
                        var N = u(y);
                        N !== null && Gt(Q, N.startTime - D), q = false;
                      }
                    }
                    break t;
                  } finally {
                    x = null, O = F, z = false;
                  }
                  q = void 0;
                }
              } finally {
                q ? Yt() : ft = false;
              }
            }
          }
          var Yt;
          if (typeof tt == "function") Yt = function() {
            tt(gt);
          };
          else if (typeof MessageChannel < "u") {
            var Ye = new MessageChannel(), sn = Ye.port2;
            Ye.port1.onmessage = gt, Yt = function() {
              sn.postMessage(null);
            };
          } else Yt = function() {
            ut(gt, 0);
          };
          function Gt(D, q) {
            ot = ut(function() {
              D(c.unstable_now());
            }, q);
          }
          c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(D) {
            D.callback = null;
          }, c.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pt = 0 < D ? Math.floor(1e3 / D) : 5;
          }, c.unstable_getCurrentPriorityLevel = function() {
            return O;
          }, c.unstable_next = function(D) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = O;
            }
            var F = O;
            O = q;
            try {
              return D();
            } finally {
              O = F;
            }
          }, c.unstable_requestPaint = function() {
            V = true;
          }, c.unstable_runWithPriority = function(D, q) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var F = O;
            O = D;
            try {
              return q();
            } finally {
              O = F;
            }
          }, c.unstable_scheduleCallback = function(D, q, F) {
            var Rt = c.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? Rt + F : Rt) : F = Rt, D) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return _ = F + _, D = {
              id: R++,
              callback: q,
              priorityLevel: D,
              startTime: F,
              expirationTime: _,
              sortIndex: -1
            }, F > Rt ? (D.sortIndex = F, l(y, D), u(S) === null && D === u(y) && (j ? (B(ot), ot = -1) : j = true, Gt(Q, F - Rt))) : (D.sortIndex = _, l(S, D), L || z || (L = true, ft || (ft = true, Yt()))), D;
          }, c.unstable_shouldYield = Tt, c.unstable_wrapCallback = function(D) {
            var q = O;
            return function() {
              var F = O;
              O = q;
              try {
                return D.apply(this, arguments);
              } finally {
                O = F;
              }
            };
          };
        }(co)), co;
      }
      var yp;
      function L0() {
        return yp || (yp = 1, ro.exports = j0()), ro.exports;
      }
      var oo = {
        exports: {}
      }, se = {};
      var _p;
      function X0() {
        if (_p) return se;
        _p = 1;
        var c = qo();
        function l(S) {
          var y = "https://react.dev/errors/" + S;
          if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++) y += "&args[]=" + encodeURIComponent(arguments[R]);
          }
          return "Minified React error #" + S + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function u() {
        }
        var s = {
          d: {
            f: u,
            r: function() {
              throw Error(l(522));
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
          },
          p: 0,
          findDOMNode: null
        }, o = Symbol.for("react.portal");
        function d(S, y, R) {
          var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return {
            $$typeof: o,
            key: x == null ? null : "" + x,
            children: S,
            containerInfo: y,
            implementation: R
          };
        }
        var m = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(S, y) {
          if (S === "font") return "";
          if (typeof y == "string") return y === "use-credentials" ? y : "";
        }
        return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, se.createPortal = function(S, y) {
          var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(l(299));
          return d(S, y, null, R);
        }, se.flushSync = function(S) {
          var y = m.T, R = s.p;
          try {
            if (m.T = null, s.p = 2, S) return S();
          } finally {
            m.T = y, s.p = R, s.d.f();
          }
        }, se.preconnect = function(S, y) {
          typeof S == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(S, y));
        }, se.prefetchDNS = function(S) {
          typeof S == "string" && s.d.D(S);
        }, se.preinit = function(S, y) {
          if (typeof S == "string" && y && typeof y.as == "string") {
            var R = y.as, x = v(R, y.crossOrigin), O = typeof y.integrity == "string" ? y.integrity : void 0, z = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            R === "style" ? s.d.S(S, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: x,
              integrity: O,
              fetchPriority: z
            }) : R === "script" && s.d.X(S, {
              crossOrigin: x,
              integrity: O,
              fetchPriority: z,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0
            });
          }
        }, se.preinitModule = function(S, y) {
          if (typeof S == "string") if (typeof y == "object" && y !== null) {
            if (y.as == null || y.as === "script") {
              var R = v(y.as, y.crossOrigin);
              s.d.M(S, {
                crossOrigin: R,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
              });
            }
          } else y == null && s.d.M(S);
        }, se.preload = function(S, y) {
          if (typeof S == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var R = y.as, x = v(R, y.crossOrigin);
            s.d.L(S, R, {
              crossOrigin: x,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
              type: typeof y.type == "string" ? y.type : void 0,
              fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
              referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
              imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
              imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
              media: typeof y.media == "string" ? y.media : void 0
            });
          }
        }, se.preloadModule = function(S, y) {
          if (typeof S == "string") if (y) {
            var R = v(y.as, y.crossOrigin);
            s.d.m(S, {
              as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
              crossOrigin: R,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0
            });
          } else s.d.m(S);
        }, se.requestFormReset = function(S) {
          s.d.r(S);
        }, se.unstable_batchedUpdates = function(S, y) {
          return S(y);
        }, se.useFormState = function(S, y, R) {
          return m.H.useFormState(S, y, R);
        }, se.useFormStatus = function() {
          return m.H.useHostTransitionStatus();
        }, se.version = "19.1.0", se;
      }
      var gp;
      function Y0() {
        if (gp) return oo.exports;
        gp = 1;
        function c() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
          } catch (l) {
            console.error(l);
          }
        }
        return c(), oo.exports = X0(), oo.exports;
      }
      var vp;
      function G0() {
        if (vp) return Ei;
        vp = 1;
        var c = L0(), l = qo(), u = Y0();
        function s(t) {
          var e = "https://react.dev/errors/" + t;
          if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o(t) {
          return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
        }
        function d(t) {
          var e = t, n = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do
              e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
            while (t);
          }
          return e.tag === 3 ? n : null;
        }
        function m(t) {
          if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
          }
          return null;
        }
        function v(t) {
          if (d(t) !== t) throw Error(s(188));
        }
        function S(t) {
          var e = t.alternate;
          if (!e) {
            if (e = d(t), e === null) throw Error(s(188));
            return e !== t ? null : t;
          }
          for (var n = t, a = e; ; ) {
            var i = n.return;
            if (i === null) break;
            var r = i.alternate;
            if (r === null) {
              if (a = i.return, a !== null) {
                n = a;
                continue;
              }
              break;
            }
            if (i.child === r.child) {
              for (r = i.child; r; ) {
                if (r === n) return v(i), t;
                if (r === a) return v(i), e;
                r = r.sibling;
              }
              throw Error(s(188));
            }
            if (n.return !== a.return) n = i, a = r;
            else {
              for (var f = false, h = i.child; h; ) {
                if (h === n) {
                  f = true, n = i, a = r;
                  break;
                }
                if (h === a) {
                  f = true, a = i, n = r;
                  break;
                }
                h = h.sibling;
              }
              if (!f) {
                for (h = r.child; h; ) {
                  if (h === n) {
                    f = true, n = r, a = i;
                    break;
                  }
                  if (h === a) {
                    f = true, a = r, n = i;
                    break;
                  }
                  h = h.sibling;
                }
                if (!f) throw Error(s(189));
              }
            }
            if (n.alternate !== a) throw Error(s(190));
          }
          if (n.tag !== 3) throw Error(s(188));
          return n.stateNode.current === n ? t : e;
        }
        function y(t) {
          var e = t.tag;
          if (e === 5 || e === 26 || e === 27 || e === 6) return t;
          for (t = t.child; t !== null; ) {
            if (e = y(t), e !== null) return e;
            t = t.sibling;
          }
          return null;
        }
        var R = Object.assign, x = Symbol.for("react.element"), O = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), ut = Symbol.for("react.provider"), B = Symbol.for("react.consumer"), tt = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), _t = Symbol.for("react.activity"), Tt = Symbol.for("react.memo_cache_sentinel"), gt = Symbol.iterator;
        function Yt(t) {
          return t === null || typeof t != "object" ? null : (t = gt && t[gt] || t["@@iterator"], typeof t == "function" ? t : null);
        }
        var Ye = Symbol.for("react.client.reference");
        function sn(t) {
          if (t == null) return null;
          if (typeof t == "function") return t.$$typeof === Ye ? null : t.displayName || t.name || null;
          if (typeof t == "string") return t;
          switch (t) {
            case L:
              return "Fragment";
            case V:
              return "Profiler";
            case j:
              return "StrictMode";
            case Q:
              return "Suspense";
            case ft:
              return "SuspenseList";
            case _t:
              return "Activity";
          }
          if (typeof t == "object") switch (t.$$typeof) {
            case z:
              return "Portal";
            case tt:
              return (t.displayName || "Context") + ".Provider";
            case B:
              return (t._context.displayName || "Context") + ".Consumer";
            case st:
              var e = t.render;
              return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case ot:
              return e = t.displayName || null, e !== null ? e : sn(t.type) || "Memo";
            case pt:
              e = t._payload, t = t._init;
              try {
                return sn(t(e));
              } catch {
              }
          }
          return null;
        }
        var Gt = Array.isArray, D = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
          pending: false,
          data: null,
          method: null,
          action: null
        }, Rt = [], _ = -1;
        function N(t) {
          return {
            current: t
          };
        }
        function X(t) {
          0 > _ || (t.current = Rt[_], Rt[_] = null, _--);
        }
        function H(t, e) {
          _++, Rt[_] = t.current, t.current = e;
        }
        var K = N(null), ht = N(null), I = N(null), _e = N(null);
        function Mt(t, e) {
          switch (H(I, e), H(ht, t), H(K, null), e.nodeType) {
            case 9:
            case 11:
              t = (t = e.documentElement) && (t = t.namespaceURI) ? Lm(t) : 0;
              break;
            default:
              if (t = e.tagName, e = e.namespaceURI) e = Lm(e), t = Xm(e, t);
              else switch (t) {
                case "svg":
                  t = 1;
                  break;
                case "math":
                  t = 2;
                  break;
                default:
                  t = 0;
              }
          }
          X(K), H(K, t);
        }
        function Rn() {
          X(K), X(ht), X(I);
        }
        function Vs(t) {
          t.memoizedState !== null && H(_e, t);
          var e = K.current, n = Xm(e, t.type);
          e !== n && (H(ht, t), H(K, n));
        }
        function Gi(t) {
          ht.current === t && (X(K), X(ht)), _e.current === t && (X(_e), gi._currentValue = F);
        }
        var Zs = Object.prototype.hasOwnProperty, ks = c.unstable_scheduleCallback, Ks = c.unstable_cancelCallback, d_ = c.unstable_shouldYield, h_ = c.unstable_requestPaint, $e = c.unstable_now, m_ = c.unstable_getCurrentPriorityLevel, vf = c.unstable_ImmediatePriority, bf = c.unstable_UserBlockingPriority, Qi = c.unstable_NormalPriority, p_ = c.unstable_LowPriority, Sf = c.unstable_IdlePriority, y_ = c.log, __ = c.unstable_setDisableYieldValue, Rl = null, ge = null;
        function xn(t) {
          if (typeof y_ == "function" && __(t), ge && typeof ge.setStrictMode == "function") try {
            ge.setStrictMode(Rl, t);
          } catch {
          }
        }
        var ve = Math.clz32 ? Math.clz32 : b_, g_ = Math.log, v_ = Math.LN2;
        function b_(t) {
          return t >>>= 0, t === 0 ? 32 : 31 - (g_(t) / v_ | 0) | 0;
        }
        var Vi = 256, Zi = 4194304;
        function na(t) {
          var e = t & 42;
          if (e !== 0) return e;
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return t & 62914560;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return t;
          }
        }
        function ki(t, e, n) {
          var a = t.pendingLanes;
          if (a === 0) return 0;
          var i = 0, r = t.suspendedLanes, f = t.pingedLanes;
          t = t.warmLanes;
          var h = a & 134217727;
          return h !== 0 ? (a = h & ~r, a !== 0 ? i = na(a) : (f &= h, f !== 0 ? i = na(f) : n || (n = h & ~t, n !== 0 && (i = na(n))))) : (h = a & ~r, h !== 0 ? i = na(h) : f !== 0 ? i = na(f) : n || (n = a & ~t, n !== 0 && (i = na(n)))), i === 0 ? 0 : e !== 0 && e !== i && (e & r) === 0 && (r = i & -i, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : i;
        }
        function xl(t, e) {
          return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
        }
        function S_(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function wf() {
          var t = Vi;
          return Vi <<= 1, (Vi & 4194048) === 0 && (Vi = 256), t;
        }
        function Af() {
          var t = Zi;
          return Zi <<= 1, (Zi & 62914560) === 0 && (Zi = 4194304), t;
        }
        function Js(t) {
          for (var e = [], n = 0; 31 > n; n++) e.push(t);
          return e;
        }
        function Ol(t, e) {
          t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
        }
        function w_(t, e, n, a, i, r) {
          var f = t.pendingLanes;
          t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
          var h = t.entanglements, p = t.expirationTimes, A = t.hiddenUpdates;
          for (n = f & ~n; 0 < n; ) {
            var M = 31 - ve(n), U = 1 << M;
            h[M] = 0, p[M] = -1;
            var E = A[M];
            if (E !== null) for (A[M] = null, M = 0; M < E.length; M++) {
              var T = E[M];
              T !== null && (T.lane &= -536870913);
            }
            n &= ~U;
          }
          a !== 0 && Ef(t, a, 0), r !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
        }
        function Ef(t, e, n) {
          t.pendingLanes |= e, t.suspendedLanes &= ~e;
          var a = 31 - ve(e);
          t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090;
        }
        function Tf(t, e) {
          var n = t.entangledLanes |= e;
          for (t = t.entanglements; n; ) {
            var a = 31 - ve(n), i = 1 << a;
            i & e | t[a] & e && (t[a] |= e), n &= ~i;
          }
        }
        function $s(t) {
          switch (t) {
            case 2:
              t = 1;
              break;
            case 8:
              t = 4;
              break;
            case 32:
              t = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              t = 128;
              break;
            case 268435456:
              t = 134217728;
              break;
            default:
              t = 0;
          }
          return t;
        }
        function Fs(t) {
          return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Rf() {
          var t = q.p;
          return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ip(t.type));
        }
        function A_(t, e) {
          var n = q.p;
          try {
            return q.p = t, e();
          } finally {
            q.p = n;
          }
        }
        var On = Math.random().toString(36).slice(2), ie = "__reactFiber$" + On, fe = "__reactProps$" + On, Ea = "__reactContainer$" + On, Ws = "__reactEvents$" + On, E_ = "__reactListeners$" + On, T_ = "__reactHandles$" + On, xf = "__reactResources$" + On, Ml = "__reactMarker$" + On;
        function Ps(t) {
          delete t[ie], delete t[fe], delete t[Ws], delete t[E_], delete t[T_];
        }
        function Ta(t) {
          var e = t[ie];
          if (e) return e;
          for (var n = t.parentNode; n; ) {
            if (e = n[Ea] || n[ie]) {
              if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Vm(t); t !== null; ) {
                if (n = t[ie]) return n;
                t = Vm(t);
              }
              return e;
            }
            t = n, n = t.parentNode;
          }
          return null;
        }
        function Ra(t) {
          if (t = t[ie] || t[Ea]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
          }
          return null;
        }
        function Dl(t) {
          var e = t.tag;
          if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
          throw Error(s(33));
        }
        function xa(t) {
          var e = t[xf];
          return e || (e = t[xf] = {
            hoistableStyles: /* @__PURE__ */ new Map(),
            hoistableScripts: /* @__PURE__ */ new Map()
          }), e;
        }
        function Kt(t) {
          t[Ml] = true;
        }
        var Of = /* @__PURE__ */ new Set(), Mf = {};
        function aa(t, e) {
          Oa(t, e), Oa(t + "Capture", e);
        }
        function Oa(t, e) {
          for (Mf[t] = e, t = 0; t < e.length; t++) Of.add(e[t]);
        }
        var R_ = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Df = {}, Cf = {};
        function x_(t) {
          return Zs.call(Cf, t) ? true : Zs.call(Df, t) ? false : R_.test(t) ? Cf[t] = true : (Df[t] = true, false);
        }
        function Ki(t, e, n) {
          if (x_(e)) if (n === null) t.removeAttribute(e);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
                t.removeAttribute(e);
                return;
              case "boolean":
                var a = e.toLowerCase().slice(0, 5);
                if (a !== "data-" && a !== "aria-") {
                  t.removeAttribute(e);
                  return;
                }
            }
            t.setAttribute(e, "" + n);
          }
        }
        function Ji(t, e, n) {
          if (n === null) t.removeAttribute(e);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                t.removeAttribute(e);
                return;
            }
            t.setAttribute(e, "" + n);
          }
        }
        function rn(t, e, n, a) {
          if (a === null) t.removeAttribute(n);
          else {
            switch (typeof a) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                t.removeAttribute(n);
                return;
            }
            t.setAttributeNS(e, n, "" + a);
          }
        }
        var Is, Uf;
        function Ma(t) {
          if (Is === void 0) try {
            throw Error();
          } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Is = e && e[1] || "", Uf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
          return `
` + Is + t + Uf;
        }
        var tr = false;
        function er(t, e) {
          if (!t || tr) return "";
          tr = true;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var a = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (e) {
                    var U = function() {
                      throw Error();
                    };
                    if (Object.defineProperty(U.prototype, "props", {
                      set: function() {
                        throw Error();
                      }
                    }), typeof Reflect == "object" && Reflect.construct) {
                      try {
                        Reflect.construct(U, []);
                      } catch (T) {
                        var E = T;
                      }
                      Reflect.construct(t, [], U);
                    } else {
                      try {
                        U.call();
                      } catch (T) {
                        E = T;
                      }
                      t.call(U.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (T) {
                      E = T;
                    }
                    (U = t()) && typeof U.catch == "function" && U.catch(function() {
                    });
                  }
                } catch (T) {
                  if (T && E && typeof T.stack == "string") return [
                    T.stack,
                    E.stack
                  ];
                }
                return [
                  null,
                  null
                ];
              }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
            });
            var r = a.DetermineComponentFrameRoot(), f = r[0], h = r[1];
            if (f && h) {
              var p = f.split(`
`), A = h.split(`
`);
              for (i = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); ) a++;
              for (; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); ) i++;
              if (a === p.length || i === A.length) for (a = p.length - 1, i = A.length - 1; 1 <= a && 0 <= i && p[a] !== A[i]; ) i--;
              for (; 1 <= a && 0 <= i; a--, i--) if (p[a] !== A[i]) {
                if (a !== 1 || i !== 1) do
                  if (a--, i--, 0 > i || p[a] !== A[i]) {
                    var M = `
` + p[a].replace(" at new ", " at ");
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                  }
                while (1 <= a && 0 <= i);
                break;
              }
            }
          } finally {
            tr = false, Error.prepareStackTrace = n;
          }
          return (n = t ? t.displayName || t.name : "") ? Ma(n) : "";
        }
        function O_(t) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              return Ma(t.type);
            case 16:
              return Ma("Lazy");
            case 13:
              return Ma("Suspense");
            case 19:
              return Ma("SuspenseList");
            case 0:
            case 15:
              return er(t.type, false);
            case 11:
              return er(t.type.render, false);
            case 1:
              return er(t.type, true);
            case 31:
              return Ma("Activity");
            default:
              return "";
          }
        }
        function zf(t) {
          try {
            var e = "";
            do
              e += O_(t), t = t.return;
            while (t);
            return e;
          } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack;
          }
        }
        function Ce(t) {
          switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return t;
            case "object":
              return t;
            default:
              return "";
          }
        }
        function Nf(t) {
          var e = t.type;
          return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
        }
        function M_(t) {
          var e = Nf(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), a = "" + t[e];
          if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get, r = n.set;
            return Object.defineProperty(t, e, {
              configurable: true,
              get: function() {
                return i.call(this);
              },
              set: function(f) {
                a = "" + f, r.call(this, f);
              }
            }), Object.defineProperty(t, e, {
              enumerable: n.enumerable
            }), {
              getValue: function() {
                return a;
              },
              setValue: function(f) {
                a = "" + f;
              },
              stopTracking: function() {
                t._valueTracker = null, delete t[e];
              }
            };
          }
        }
        function $i(t) {
          t._valueTracker || (t._valueTracker = M_(t));
        }
        function Bf(t) {
          if (!t) return false;
          var e = t._valueTracker;
          if (!e) return true;
          var n = e.getValue(), a = "";
          return t && (a = Nf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), true) : false;
        }
        function Fi(t) {
          if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
          try {
            return t.activeElement || t.body;
          } catch {
            return t.body;
          }
        }
        var D_ = /[\n"\\]/g;
        function Ue(t) {
          return t.replace(D_, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function nr(t, e, n, a, i, r, f, h) {
          t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ce(e)) : t.value !== "" + Ce(e) && (t.value = "" + Ce(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? ar(t, f, Ce(e)) : n != null ? ar(t, f, Ce(n)) : a != null && t.removeAttribute("value"), i == null && r != null && (t.defaultChecked = !!r), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Ce(h) : t.removeAttribute("name");
        }
        function Hf(t, e, n, a, i, r, f, h) {
          if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
            if (!(r !== "submit" && r !== "reset" || e != null)) return;
            n = n != null ? "" + Ce(n) : "", e = e != null ? "" + Ce(e) : n, h || e === t.value || (t.value = e), t.defaultValue = e;
          }
          a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = h ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f);
        }
        function ar(t, e, n) {
          e === "number" && Fi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
        }
        function Da(t, e, n, a) {
          if (t = t.options, e) {
            e = {};
            for (var i = 0; i < n.length; i++) e["$" + n[i]] = true;
            for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && a && (t[n].defaultSelected = true);
          } else {
            for (n = "" + Ce(n), e = null, i = 0; i < t.length; i++) {
              if (t[i].value === n) {
                t[i].selected = true, a && (t[i].defaultSelected = true);
                return;
              }
              e !== null || t[i].disabled || (e = t[i]);
            }
            e !== null && (e.selected = true);
          }
        }
        function qf(t, e, n) {
          if (e != null && (e = "" + Ce(e), e !== t.value && (t.value = e), n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return;
          }
          t.defaultValue = n != null ? "" + Ce(n) : "";
        }
        function jf(t, e, n, a) {
          if (e == null) {
            if (a != null) {
              if (n != null) throw Error(s(92));
              if (Gt(a)) {
                if (1 < a.length) throw Error(s(93));
                a = a[0];
              }
              n = a;
            }
            n == null && (n = ""), e = n;
          }
          n = Ce(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a);
        }
        function Ca(t, e) {
          if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
              n.nodeValue = e;
              return;
            }
          }
          t.textContent = e;
        }
        var C_ = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Lf(t, e, n) {
          var a = e.indexOf("--") === 0;
          n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || C_.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
        }
        function Xf(t, e, n) {
          if (e != null && typeof e != "object") throw Error(s(62));
          if (t = t.style, n != null) {
            for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var i in e) a = e[i], e.hasOwnProperty(i) && n[i] !== a && Lf(t, i, a);
          } else for (var r in e) e.hasOwnProperty(r) && Lf(t, r, e[r]);
        }
        function lr(t) {
          if (t.indexOf("-") === -1) return false;
          switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var U_ = /* @__PURE__ */ new Map([
          [
            "acceptCharset",
            "accept-charset"
          ],
          [
            "htmlFor",
            "for"
          ],
          [
            "httpEquiv",
            "http-equiv"
          ],
          [
            "crossOrigin",
            "crossorigin"
          ],
          [
            "accentHeight",
            "accent-height"
          ],
          [
            "alignmentBaseline",
            "alignment-baseline"
          ],
          [
            "arabicForm",
            "arabic-form"
          ],
          [
            "baselineShift",
            "baseline-shift"
          ],
          [
            "capHeight",
            "cap-height"
          ],
          [
            "clipPath",
            "clip-path"
          ],
          [
            "clipRule",
            "clip-rule"
          ],
          [
            "colorInterpolation",
            "color-interpolation"
          ],
          [
            "colorInterpolationFilters",
            "color-interpolation-filters"
          ],
          [
            "colorProfile",
            "color-profile"
          ],
          [
            "colorRendering",
            "color-rendering"
          ],
          [
            "dominantBaseline",
            "dominant-baseline"
          ],
          [
            "enableBackground",
            "enable-background"
          ],
          [
            "fillOpacity",
            "fill-opacity"
          ],
          [
            "fillRule",
            "fill-rule"
          ],
          [
            "floodColor",
            "flood-color"
          ],
          [
            "floodOpacity",
            "flood-opacity"
          ],
          [
            "fontFamily",
            "font-family"
          ],
          [
            "fontSize",
            "font-size"
          ],
          [
            "fontSizeAdjust",
            "font-size-adjust"
          ],
          [
            "fontStretch",
            "font-stretch"
          ],
          [
            "fontStyle",
            "font-style"
          ],
          [
            "fontVariant",
            "font-variant"
          ],
          [
            "fontWeight",
            "font-weight"
          ],
          [
            "glyphName",
            "glyph-name"
          ],
          [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
          ],
          [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
          ],
          [
            "horizAdvX",
            "horiz-adv-x"
          ],
          [
            "horizOriginX",
            "horiz-origin-x"
          ],
          [
            "imageRendering",
            "image-rendering"
          ],
          [
            "letterSpacing",
            "letter-spacing"
          ],
          [
            "lightingColor",
            "lighting-color"
          ],
          [
            "markerEnd",
            "marker-end"
          ],
          [
            "markerMid",
            "marker-mid"
          ],
          [
            "markerStart",
            "marker-start"
          ],
          [
            "overlinePosition",
            "overline-position"
          ],
          [
            "overlineThickness",
            "overline-thickness"
          ],
          [
            "paintOrder",
            "paint-order"
          ],
          [
            "panose-1",
            "panose-1"
          ],
          [
            "pointerEvents",
            "pointer-events"
          ],
          [
            "renderingIntent",
            "rendering-intent"
          ],
          [
            "shapeRendering",
            "shape-rendering"
          ],
          [
            "stopColor",
            "stop-color"
          ],
          [
            "stopOpacity",
            "stop-opacity"
          ],
          [
            "strikethroughPosition",
            "strikethrough-position"
          ],
          [
            "strikethroughThickness",
            "strikethrough-thickness"
          ],
          [
            "strokeDasharray",
            "stroke-dasharray"
          ],
          [
            "strokeDashoffset",
            "stroke-dashoffset"
          ],
          [
            "strokeLinecap",
            "stroke-linecap"
          ],
          [
            "strokeLinejoin",
            "stroke-linejoin"
          ],
          [
            "strokeMiterlimit",
            "stroke-miterlimit"
          ],
          [
            "strokeOpacity",
            "stroke-opacity"
          ],
          [
            "strokeWidth",
            "stroke-width"
          ],
          [
            "textAnchor",
            "text-anchor"
          ],
          [
            "textDecoration",
            "text-decoration"
          ],
          [
            "textRendering",
            "text-rendering"
          ],
          [
            "transformOrigin",
            "transform-origin"
          ],
          [
            "underlinePosition",
            "underline-position"
          ],
          [
            "underlineThickness",
            "underline-thickness"
          ],
          [
            "unicodeBidi",
            "unicode-bidi"
          ],
          [
            "unicodeRange",
            "unicode-range"
          ],
          [
            "unitsPerEm",
            "units-per-em"
          ],
          [
            "vAlphabetic",
            "v-alphabetic"
          ],
          [
            "vHanging",
            "v-hanging"
          ],
          [
            "vIdeographic",
            "v-ideographic"
          ],
          [
            "vMathematical",
            "v-mathematical"
          ],
          [
            "vectorEffect",
            "vector-effect"
          ],
          [
            "vertAdvY",
            "vert-adv-y"
          ],
          [
            "vertOriginX",
            "vert-origin-x"
          ],
          [
            "vertOriginY",
            "vert-origin-y"
          ],
          [
            "wordSpacing",
            "word-spacing"
          ],
          [
            "writingMode",
            "writing-mode"
          ],
          [
            "xmlnsXlink",
            "xmlns:xlink"
          ],
          [
            "xHeight",
            "x-height"
          ]
        ]), z_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Wi(t) {
          return z_.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
        }
        var ir = null;
        function ur(t) {
          return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
        }
        var Ua = null, za = null;
        function Yf(t) {
          var e = Ra(t);
          if (e && (t = e.stateNode)) {
            var n = t[fe] || null;
            t: switch (t = e.stateNode, e.type) {
              case "input":
                if (nr(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                  for (n = t; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll('input[name="' + Ue("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                    var a = n[e];
                    if (a !== t && a.form === t.form) {
                      var i = a[fe] || null;
                      if (!i) throw Error(s(90));
                      nr(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                    }
                  }
                  for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && Bf(a);
                }
                break t;
              case "textarea":
                qf(t, n.value, n.defaultValue);
                break t;
              case "select":
                e = n.value, e != null && Da(t, !!n.multiple, e, false);
            }
          }
        }
        var sr = false;
        function Gf(t, e, n) {
          if (sr) return t(e, n);
          sr = true;
          try {
            var a = t(e);
            return a;
          } finally {
            if (sr = false, (Ua !== null || za !== null) && (Hu(), Ua && (e = Ua, t = za, za = Ua = null, Yf(e), t))) for (e = 0; e < t.length; e++) Yf(t[e]);
          }
        }
        function Cl(t, e) {
          var n = t.stateNode;
          if (n === null) return null;
          var a = n[fe] || null;
          if (a === null) return null;
          n = a[e];
          t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
              break t;
            default:
              t = false;
          }
          if (t) return null;
          if (n && typeof n != "function") throw Error(s(231, e, typeof n));
          return n;
        }
        var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rr = false;
        if (cn) try {
          var Ul = {};
          Object.defineProperty(Ul, "passive", {
            get: function() {
              rr = true;
            }
          }), window.addEventListener("test", Ul, Ul), window.removeEventListener("test", Ul, Ul);
        } catch {
          rr = false;
        }
        var Mn = null, cr = null, Pi = null;
        function Qf() {
          if (Pi) return Pi;
          var t, e = cr, n = e.length, a, i = "value" in Mn ? Mn.value : Mn.textContent, r = i.length;
          for (t = 0; t < n && e[t] === i[t]; t++) ;
          var f = n - t;
          for (a = 1; a <= f && e[n - a] === i[r - a]; a++) ;
          return Pi = i.slice(t, 1 < a ? 1 - a : void 0);
        }
        function Ii(t) {
          var e = t.keyCode;
          return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
        }
        function tu() {
          return true;
        }
        function Vf() {
          return false;
        }
        function de(t) {
          function e(n, a, i, r, f) {
            this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = r, this.target = f, this.currentTarget = null;
            for (var h in t) t.hasOwnProperty(h) && (n = t[h], this[h] = n ? n(r) : r[h]);
            return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === false) ? tu : Vf, this.isPropagationStopped = Vf, this;
          }
          return R(e.prototype, {
            preventDefault: function() {
              this.defaultPrevented = true;
              var n = this.nativeEvent;
              n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = tu);
            },
            stopPropagation: function() {
              var n = this.nativeEvent;
              n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = tu);
            },
            persist: function() {
            },
            isPersistent: tu
          }), e;
        }
        var la = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(t) {
            return t.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        }, eu = de(la), zl = R({}, la, {
          view: 0,
          detail: 0
        }), N_ = de(zl), or, fr, Nl, nu = R({}, zl, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: hr,
          button: 0,
          buttons: 0,
          relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
          },
          movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Nl && (Nl && t.type === "mousemove" ? (or = t.screenX - Nl.screenX, fr = t.screenY - Nl.screenY) : fr = or = 0, Nl = t), or);
          },
          movementY: function(t) {
            return "movementY" in t ? t.movementY : fr;
          }
        }), Zf = de(nu), B_ = R({}, nu, {
          dataTransfer: 0
        }), H_ = de(B_), q_ = R({}, zl, {
          relatedTarget: 0
        }), dr = de(q_), j_ = R({}, la, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }), L_ = de(j_), X_ = R({}, la, {
          clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData;
          }
        }), Y_ = de(X_), G_ = R({}, la, {
          data: 0
        }), kf = de(G_), Q_ = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        }, V_ = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        }, Z_ = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
        function k_(t) {
          var e = this.nativeEvent;
          return e.getModifierState ? e.getModifierState(t) : (t = Z_[t]) ? !!e[t] : false;
        }
        function hr() {
          return k_;
        }
        var K_ = R({}, zl, {
          key: function(t) {
            if (t.key) {
              var e = Q_[t.key] || t.key;
              if (e !== "Unidentified") return e;
            }
            return t.type === "keypress" ? (t = Ii(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? V_[t.keyCode] || "Unidentified" : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: hr,
          charCode: function(t) {
            return t.type === "keypress" ? Ii(t) : 0;
          },
          keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
          },
          which: function(t) {
            return t.type === "keypress" ? Ii(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
          }
        }), J_ = de(K_), $_ = R({}, nu, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        }), Kf = de($_), F_ = R({}, zl, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: hr
        }), W_ = de(F_), P_ = R({}, la, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }), I_ = de(P_), tg = R({}, nu, {
          deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
          },
          deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        }), eg = de(tg), ng = R({}, la, {
          newState: 0,
          oldState: 0
        }), ag = de(ng), lg = [
          9,
          13,
          27,
          32
        ], mr = cn && "CompositionEvent" in window, Bl = null;
        cn && "documentMode" in document && (Bl = document.documentMode);
        var ig = cn && "TextEvent" in window && !Bl, Jf = cn && (!mr || Bl && 8 < Bl && 11 >= Bl), $f = " ", Ff = false;
        function Wf(t, e) {
          switch (t) {
            case "keyup":
              return lg.indexOf(e.keyCode) !== -1;
            case "keydown":
              return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function Pf(t) {
          return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
        }
        var Na = false;
        function ug(t, e) {
          switch (t) {
            case "compositionend":
              return Pf(e);
            case "keypress":
              return e.which !== 32 ? null : (Ff = true, $f);
            case "textInput":
              return t = e.data, t === $f && Ff ? null : t;
            default:
              return null;
          }
        }
        function sg(t, e) {
          if (Na) return t === "compositionend" || !mr && Wf(t, e) ? (t = Qf(), Pi = cr = Mn = null, Na = false, t) : null;
          switch (t) {
            case "paste":
              return null;
            case "keypress":
              if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
              }
              return null;
            case "compositionend":
              return Jf && e.locale !== "ko" ? null : e.data;
            default:
              return null;
          }
        }
        var rg = {
          color: true,
          date: true,
          datetime: true,
          "datetime-local": true,
          email: true,
          month: true,
          number: true,
          password: true,
          range: true,
          search: true,
          tel: true,
          text: true,
          time: true,
          url: true,
          week: true
        };
        function If(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return e === "input" ? !!rg[t.type] : e === "textarea";
        }
        function td(t, e, n, a) {
          Ua ? za ? za.push(a) : za = [
            a
          ] : Ua = a, e = Gu(e, "onChange"), 0 < e.length && (n = new eu("onChange", "change", null, n, a), t.push({
            event: n,
            listeners: e
          }));
        }
        var Hl = null, ql = null;
        function cg(t) {
          Nm(t, 0);
        }
        function au(t) {
          var e = Dl(t);
          if (Bf(e)) return t;
        }
        function ed(t, e) {
          if (t === "change") return e;
        }
        var nd = false;
        if (cn) {
          var pr;
          if (cn) {
            var yr = "oninput" in document;
            if (!yr) {
              var ad = document.createElement("div");
              ad.setAttribute("oninput", "return;"), yr = typeof ad.oninput == "function";
            }
            pr = yr;
          } else pr = false;
          nd = pr && (!document.documentMode || 9 < document.documentMode);
        }
        function ld() {
          Hl && (Hl.detachEvent("onpropertychange", id), ql = Hl = null);
        }
        function id(t) {
          if (t.propertyName === "value" && au(ql)) {
            var e = [];
            td(e, ql, t, ur(t)), Gf(cg, e);
          }
        }
        function og(t, e, n) {
          t === "focusin" ? (ld(), Hl = e, ql = n, Hl.attachEvent("onpropertychange", id)) : t === "focusout" && ld();
        }
        function fg(t) {
          if (t === "selectionchange" || t === "keyup" || t === "keydown") return au(ql);
        }
        function dg(t, e) {
          if (t === "click") return au(e);
        }
        function hg(t, e) {
          if (t === "input" || t === "change") return au(e);
        }
        function mg(t, e) {
          return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
        }
        var be = typeof Object.is == "function" ? Object.is : mg;
        function jl(t, e) {
          if (be(t, e)) return true;
          if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
          var n = Object.keys(t), a = Object.keys(e);
          if (n.length !== a.length) return false;
          for (a = 0; a < n.length; a++) {
            var i = n[a];
            if (!Zs.call(e, i) || !be(t[i], e[i])) return false;
          }
          return true;
        }
        function ud(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function sd(t, e) {
          var n = ud(t);
          t = 0;
          for (var a; n; ) {
            if (n.nodeType === 3) {
              if (a = t + n.textContent.length, t <= e && a >= e) return {
                node: n,
                offset: e - t
              };
              t = a;
            }
            t: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break t;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = ud(n);
          }
        }
        function rd(t, e) {
          return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? rd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
        }
        function cd(t) {
          t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
          for (var e = Fi(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
              var n = typeof e.contentWindow.location.href == "string";
            } catch {
              n = false;
            }
            if (n) t = e.contentWindow;
            else break;
            e = Fi(t.document);
          }
          return e;
        }
        function _r(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
        }
        var pg = cn && "documentMode" in document && 11 >= document.documentMode, Ba = null, gr = null, Ll = null, vr = false;
        function od(t, e, n) {
          var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
          vr || Ba == null || Ba !== Fi(a) || (a = Ba, "selectionStart" in a && _r(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
          } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
          }), Ll && jl(Ll, a) || (Ll = a, a = Gu(gr, "onSelect"), 0 < a.length && (e = new eu("onSelect", "select", null, e, n), t.push({
            event: e,
            listeners: a
          }), e.target = Ba)));
        }
        function ia(t, e) {
          var n = {};
          return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
        }
        var Ha = {
          animationend: ia("Animation", "AnimationEnd"),
          animationiteration: ia("Animation", "AnimationIteration"),
          animationstart: ia("Animation", "AnimationStart"),
          transitionrun: ia("Transition", "TransitionRun"),
          transitionstart: ia("Transition", "TransitionStart"),
          transitioncancel: ia("Transition", "TransitionCancel"),
          transitionend: ia("Transition", "TransitionEnd")
        }, br = {}, fd = {};
        cn && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
        function ua(t) {
          if (br[t]) return br[t];
          if (!Ha[t]) return t;
          var e = Ha[t], n;
          for (n in e) if (e.hasOwnProperty(n) && n in fd) return br[t] = e[n];
          return t;
        }
        var dd = ua("animationend"), hd = ua("animationiteration"), md = ua("animationstart"), yg = ua("transitionrun"), _g = ua("transitionstart"), gg = ua("transitioncancel"), pd = ua("transitionend"), yd = /* @__PURE__ */ new Map(), Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Sr.push("scrollEnd");
        function Ge(t, e) {
          yd.set(t, e), aa(e, [
            t
          ]);
        }
        var _d = /* @__PURE__ */ new WeakMap();
        function ze(t, e) {
          if (typeof t == "object" && t !== null) {
            var n = _d.get(t);
            return n !== void 0 ? n : (e = {
              value: t,
              source: e,
              stack: zf(e)
            }, _d.set(t, e), e);
          }
          return {
            value: t,
            source: e,
            stack: zf(e)
          };
        }
        var Ne = [], qa = 0, wr = 0;
        function lu() {
          for (var t = qa, e = wr = qa = 0; e < t; ) {
            var n = Ne[e];
            Ne[e++] = null;
            var a = Ne[e];
            Ne[e++] = null;
            var i = Ne[e];
            Ne[e++] = null;
            var r = Ne[e];
            if (Ne[e++] = null, a !== null && i !== null) {
              var f = a.pending;
              f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
            }
            r !== 0 && gd(n, i, r);
          }
        }
        function iu(t, e, n, a) {
          Ne[qa++] = t, Ne[qa++] = e, Ne[qa++] = n, Ne[qa++] = a, wr |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
        }
        function Ar(t, e, n, a) {
          return iu(t, e, n, a), uu(t);
        }
        function ja(t, e) {
          return iu(t, null, null, e), uu(t);
        }
        function gd(t, e, n) {
          t.lanes |= n;
          var a = t.alternate;
          a !== null && (a.lanes |= n);
          for (var i = false, r = t.return; r !== null; ) r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (i = true)), t = r, r = r.return;
          return t.tag === 3 ? (r = t.stateNode, i && e !== null && (i = 31 - ve(n), t = r.hiddenUpdates, a = t[i], a === null ? t[i] = [
            e
          ] : a.push(e), e.lane = n | 536870912), r) : null;
        }
        function uu(t) {
          if (50 < oi) throw oi = 0, Mc = null, Error(s(185));
          for (var e = t.return; e !== null; ) t = e, e = t.return;
          return t.tag === 3 ? t.stateNode : null;
        }
        var La = {};
        function vg(t, e, n, a) {
          this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Se(t, e, n, a) {
          return new vg(t, e, n, a);
        }
        function Er(t) {
          return t = t.prototype, !(!t || !t.isReactComponent);
        }
        function on(t, e) {
          var n = t.alternate;
          return n === null ? (n = Se(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
          }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
        }
        function vd(t, e) {
          t.flags &= 65011714;
          var n = t.alternate;
          return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
          }), t;
        }
        function su(t, e, n, a, i, r) {
          var f = 0;
          if (a = t, typeof t == "function") Er(t) && (f = 1);
          else if (typeof t == "string") f = S0(t, n, K.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
          else t: switch (t) {
            case _t:
              return t = Se(31, n, e, i), t.elementType = _t, t.lanes = r, t;
            case L:
              return sa(n.children, i, r, e);
            case j:
              f = 8, i |= 24;
              break;
            case V:
              return t = Se(12, n, e, i | 2), t.elementType = V, t.lanes = r, t;
            case Q:
              return t = Se(13, n, e, i), t.elementType = Q, t.lanes = r, t;
            case ft:
              return t = Se(19, n, e, i), t.elementType = ft, t.lanes = r, t;
            default:
              if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case ut:
                case tt:
                  f = 10;
                  break t;
                case B:
                  f = 9;
                  break t;
                case st:
                  f = 11;
                  break t;
                case ot:
                  f = 14;
                  break t;
                case pt:
                  f = 16, a = null;
                  break t;
              }
              f = 29, n = Error(s(130, t === null ? "null" : typeof t, "")), a = null;
          }
          return e = Se(f, n, e, i), e.elementType = t, e.type = a, e.lanes = r, e;
        }
        function sa(t, e, n, a) {
          return t = Se(7, t, a, e), t.lanes = n, t;
        }
        function Tr(t, e, n) {
          return t = Se(6, t, null, e), t.lanes = n, t;
        }
        function Rr(t, e, n) {
          return e = Se(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
          }, e;
        }
        var Xa = [], Ya = 0, ru = null, cu = 0, Be = [], He = 0, ra = null, fn = 1, dn = "";
        function ca(t, e) {
          Xa[Ya++] = cu, Xa[Ya++] = ru, ru = t, cu = e;
        }
        function bd(t, e, n) {
          Be[He++] = fn, Be[He++] = dn, Be[He++] = ra, ra = t;
          var a = fn;
          t = dn;
          var i = 32 - ve(a) - 1;
          a &= ~(1 << i), n += 1;
          var r = 32 - ve(e) + i;
          if (30 < r) {
            var f = i - i % 5;
            r = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, fn = 1 << 32 - ve(e) + i | n << i | a, dn = r + t;
          } else fn = 1 << r | n << i | a, dn = t;
        }
        function xr(t) {
          t.return !== null && (ca(t, 1), bd(t, 1, 0));
        }
        function Or(t) {
          for (; t === ru; ) ru = Xa[--Ya], Xa[Ya] = null, cu = Xa[--Ya], Xa[Ya] = null;
          for (; t === ra; ) ra = Be[--He], Be[He] = null, dn = Be[--He], Be[He] = null, fn = Be[--He], Be[He] = null;
        }
        var ce = null, zt = null, yt = false, oa = null, Fe = false, Mr = Error(s(519));
        function fa(t) {
          var e = Error(s(418, ""));
          throw Gl(ze(e, t)), Mr;
        }
        function Sd(t) {
          var e = t.stateNode, n = t.type, a = t.memoizedProps;
          switch (e[ie] = t, e[fe] = a, n) {
            case "dialog":
              ct("cancel", e), ct("close", e);
              break;
            case "iframe":
            case "object":
            case "embed":
              ct("load", e);
              break;
            case "video":
            case "audio":
              for (n = 0; n < di.length; n++) ct(di[n], e);
              break;
            case "source":
              ct("error", e);
              break;
            case "img":
            case "image":
            case "link":
              ct("error", e), ct("load", e);
              break;
            case "details":
              ct("toggle", e);
              break;
            case "input":
              ct("invalid", e), Hf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true), $i(e);
              break;
            case "select":
              ct("invalid", e);
              break;
            case "textarea":
              ct("invalid", e), jf(e, a.value, a.defaultValue, a.children), $i(e);
          }
          n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === true || jm(e.textContent, n) ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)), a.onScroll != null && ct("scroll", e), a.onScrollEnd != null && ct("scrollend", e), a.onClick != null && (e.onclick = Qu), e = true) : e = false, e || fa(t);
        }
        function wd(t) {
          for (ce = t.return; ce; ) switch (ce.tag) {
            case 5:
            case 13:
              Fe = false;
              return;
            case 27:
            case 3:
              Fe = true;
              return;
            default:
              ce = ce.return;
          }
        }
        function Xl(t) {
          if (t !== ce) return false;
          if (!yt) return wd(t), yt = true, false;
          var e = t.tag, n;
          if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zc(t.type, t.memoizedProps)), n = !n), n && zt && fa(t), wd(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            t: {
              for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) if (n = t.data, n === "/$") {
                  if (e === 0) {
                    zt = Ve(t.nextSibling);
                    break t;
                  }
                  e--;
                } else n !== "$" && n !== "$!" && n !== "$?" || e++;
                t = t.nextSibling;
              }
              zt = null;
            }
          } else e === 27 ? (e = zt, Zn(t.type) ? (t = $c, $c = null, zt = t) : zt = e) : zt = ce ? Ve(t.stateNode.nextSibling) : null;
          return true;
        }
        function Yl() {
          zt = ce = null, yt = false;
        }
        function Ad() {
          var t = oa;
          return t !== null && (pe === null ? pe = t : pe.push.apply(pe, t), oa = null), t;
        }
        function Gl(t) {
          oa === null ? oa = [
            t
          ] : oa.push(t);
        }
        var Dr = N(null), da = null, hn = null;
        function Dn(t, e, n) {
          H(Dr, e._currentValue), e._currentValue = n;
        }
        function mn(t) {
          t._currentValue = Dr.current, X(Dr);
        }
        function Cr(t, e, n) {
          for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
            t = t.return;
          }
        }
        function Ur(t, e, n, a) {
          var i = t.child;
          for (i !== null && (i.return = t); i !== null; ) {
            var r = i.dependencies;
            if (r !== null) {
              var f = i.child;
              r = r.firstContext;
              t: for (; r !== null; ) {
                var h = r;
                r = i;
                for (var p = 0; p < e.length; p++) if (h.context === e[p]) {
                  r.lanes |= n, h = r.alternate, h !== null && (h.lanes |= n), Cr(r.return, n, t), a || (f = null);
                  break t;
                }
                r = h.next;
              }
            } else if (i.tag === 18) {
              if (f = i.return, f === null) throw Error(s(341));
              f.lanes |= n, r = f.alternate, r !== null && (r.lanes |= n), Cr(f, n, t), f = null;
            } else f = i.child;
            if (f !== null) f.return = i;
            else for (f = i; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (i = f.sibling, i !== null) {
                i.return = f.return, f = i;
                break;
              }
              f = f.return;
            }
            i = f;
          }
        }
        function Ql(t, e, n, a) {
          t = null;
          for (var i = e, r = false; i !== null; ) {
            if (!r) {
              if ((i.flags & 524288) !== 0) r = true;
              else if ((i.flags & 262144) !== 0) break;
            }
            if (i.tag === 10) {
              var f = i.alternate;
              if (f === null) throw Error(s(387));
              if (f = f.memoizedProps, f !== null) {
                var h = i.type;
                be(i.pendingProps.value, f.value) || (t !== null ? t.push(h) : t = [
                  h
                ]);
              }
            } else if (i === _e.current) {
              if (f = i.alternate, f === null) throw Error(s(387));
              f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(gi) : t = [
                gi
              ]);
            }
            i = i.return;
          }
          t !== null && Ur(e, t, n, a), e.flags |= 262144;
        }
        function ou(t) {
          for (t = t.firstContext; t !== null; ) {
            if (!be(t.context._currentValue, t.memoizedValue)) return true;
            t = t.next;
          }
          return false;
        }
        function ha(t) {
          da = t, hn = null, t = t.dependencies, t !== null && (t.firstContext = null);
        }
        function ue(t) {
          return Ed(da, t);
        }
        function fu(t, e) {
          return da === null && ha(t), Ed(t, e);
        }
        function Ed(t, e) {
          var n = e._currentValue;
          if (e = {
            context: e,
            memoizedValue: n,
            next: null
          }, hn === null) {
            if (t === null) throw Error(s(308));
            hn = e, t.dependencies = {
              lanes: 0,
              firstContext: e
            }, t.flags |= 524288;
          } else hn = hn.next = e;
          return n;
        }
        var bg = typeof AbortController < "u" ? AbortController : function() {
          var t = [], e = this.signal = {
            aborted: false,
            addEventListener: function(n, a) {
              t.push(a);
            }
          };
          this.abort = function() {
            e.aborted = true, t.forEach(function(n) {
              return n();
            });
          };
        }, Sg = c.unstable_scheduleCallback, wg = c.unstable_NormalPriority, Qt = {
          $$typeof: tt,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        };
        function zr() {
          return {
            controller: new bg(),
            data: /* @__PURE__ */ new Map(),
            refCount: 0
          };
        }
        function Vl(t) {
          t.refCount--, t.refCount === 0 && Sg(wg, function() {
            t.controller.abort();
          });
        }
        var Zl = null, Nr = 0, Ga = 0, Qa = null;
        function Ag(t, e) {
          if (Zl === null) {
            var n = Zl = [];
            Nr = 0, Ga = Hc(), Qa = {
              status: "pending",
              value: void 0,
              then: function(a) {
                n.push(a);
              }
            };
          }
          return Nr++, e.then(Td, Td), e;
        }
        function Td() {
          if (--Nr === 0 && Zl !== null) {
            Qa !== null && (Qa.status = "fulfilled");
            var t = Zl;
            Zl = null, Ga = 0, Qa = null;
            for (var e = 0; e < t.length; e++) (0, t[e])();
          }
        }
        function Eg(t, e) {
          var n = [], a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(i) {
              n.push(i);
            }
          };
          return t.then(function() {
            a.status = "fulfilled", a.value = e;
            for (var i = 0; i < n.length; i++) (0, n[i])(e);
          }, function(i) {
            for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
          }), a;
        }
        var Rd = D.S;
        D.S = function(t, e) {
          typeof e == "object" && e !== null && typeof e.then == "function" && Ag(t, e), Rd !== null && Rd(t, e);
        };
        var ma = N(null);
        function Br() {
          var t = ma.current;
          return t !== null ? t : Ot.pooledCache;
        }
        function du(t, e) {
          e === null ? H(ma, ma.current) : H(ma, e.pool);
        }
        function xd() {
          var t = Br();
          return t === null ? null : {
            parent: Qt._currentValue,
            pool: t
          };
        }
        var kl = Error(s(460)), Od = Error(s(474)), hu = Error(s(542)), Hr = {
          then: function() {
          }
        };
        function Md(t) {
          return t = t.status, t === "fulfilled" || t === "rejected";
        }
        function mu() {
        }
        function Dd(t, e, n) {
          switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(mu, mu), e = n), e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Ud(t), t;
            default:
              if (typeof e.status == "string") e.then(mu, mu);
              else {
                if (t = Ot, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
                t = e, t.status = "pending", t.then(function(a) {
                  if (e.status === "pending") {
                    var i = e;
                    i.status = "fulfilled", i.value = a;
                  }
                }, function(a) {
                  if (e.status === "pending") {
                    var i = e;
                    i.status = "rejected", i.reason = a;
                  }
                });
              }
              switch (e.status) {
                case "fulfilled":
                  return e.value;
                case "rejected":
                  throw t = e.reason, Ud(t), t;
              }
              throw Kl = e, kl;
          }
        }
        var Kl = null;
        function Cd() {
          if (Kl === null) throw Error(s(459));
          var t = Kl;
          return Kl = null, t;
        }
        function Ud(t) {
          if (t === kl || t === hu) throw Error(s(483));
        }
        var Cn = false;
        function qr(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              lanes: 0,
              hiddenCallbacks: null
            },
            callbacks: null
          };
        }
        function jr(t, e) {
          t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
          });
        }
        function Un(t) {
          return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          };
        }
        function zn(t, e, n) {
          var a = t.updateQueue;
          if (a === null) return null;
          if (a = a.shared, (vt & 2) !== 0) {
            var i = a.pending;
            return i === null ? e.next = e : (e.next = i.next, i.next = e), a.pending = e, e = uu(t), gd(t, null, n), e;
          }
          return iu(t, a, e, n), uu(t);
        }
        function Jl(t, e, n) {
          if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes, n |= a, e.lanes = n, Tf(t, n);
          }
        }
        function Lr(t, e) {
          var n = t.updateQueue, a = t.alternate;
          if (a !== null && (a = a.updateQueue, n === a)) {
            var i = null, r = null;
            if (n = n.firstBaseUpdate, n !== null) {
              do {
                var f = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null
                };
                r === null ? i = r = f : r = r.next = f, n = n.next;
              } while (n !== null);
              r === null ? i = r = e : r = r.next = e;
            } else i = r = e;
            n = {
              baseState: a.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: r,
              shared: a.shared,
              callbacks: a.callbacks
            }, t.updateQueue = n;
            return;
          }
          t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
        }
        var Xr = false;
        function $l() {
          if (Xr) {
            var t = Qa;
            if (t !== null) throw t;
          }
        }
        function Fl(t, e, n, a) {
          Xr = false;
          var i = t.updateQueue;
          Cn = false;
          var r = i.firstBaseUpdate, f = i.lastBaseUpdate, h = i.shared.pending;
          if (h !== null) {
            i.shared.pending = null;
            var p = h, A = p.next;
            p.next = null, f === null ? r = A : f.next = A, f = p;
            var M = t.alternate;
            M !== null && (M = M.updateQueue, h = M.lastBaseUpdate, h !== f && (h === null ? M.firstBaseUpdate = A : h.next = A, M.lastBaseUpdate = p));
          }
          if (r !== null) {
            var U = i.baseState;
            f = 0, M = A = p = null, h = r;
            do {
              var E = h.lane & -536870913, T = E !== h.lane;
              if (T ? (dt & E) === E : (a & E) === E) {
                E !== 0 && E === Ga && (Xr = true), M !== null && (M = M.next = {
                  lane: 0,
                  tag: h.tag,
                  payload: h.payload,
                  callback: null,
                  next: null
                });
                t: {
                  var P = t, J = h;
                  E = e;
                  var At = n;
                  switch (J.tag) {
                    case 1:
                      if (P = J.payload, typeof P == "function") {
                        U = P.call(At, U, E);
                        break t;
                      }
                      U = P;
                      break t;
                    case 3:
                      P.flags = P.flags & -65537 | 128;
                    case 0:
                      if (P = J.payload, E = typeof P == "function" ? P.call(At, U, E) : P, E == null) break t;
                      U = R({}, U, E);
                      break t;
                    case 2:
                      Cn = true;
                  }
                }
                E = h.callback, E !== null && (t.flags |= 64, T && (t.flags |= 8192), T = i.callbacks, T === null ? i.callbacks = [
                  E
                ] : T.push(E));
              } else T = {
                lane: E,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              }, M === null ? (A = M = T, p = U) : M = M.next = T, f |= E;
              if (h = h.next, h === null) {
                if (h = i.shared.pending, h === null) break;
                T = h, h = T.next, T.next = null, i.lastBaseUpdate = T, i.shared.pending = null;
              }
            } while (true);
            M === null && (p = U), i.baseState = p, i.firstBaseUpdate = A, i.lastBaseUpdate = M, r === null && (i.shared.lanes = 0), Yn |= f, t.lanes = f, t.memoizedState = U;
          }
        }
        function zd(t, e) {
          if (typeof t != "function") throw Error(s(191, t));
          t.call(e);
        }
        function Nd(t, e) {
          var n = t.callbacks;
          if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) zd(n[t], e);
        }
        var Va = N(null), pu = N(0);
        function Bd(t, e) {
          t = Sn, H(pu, t), H(Va, e), Sn = t | e.baseLanes;
        }
        function Yr() {
          H(pu, Sn), H(Va, Va.current);
        }
        function Gr() {
          Sn = pu.current, X(Va), X(pu);
        }
        var Nn = 0, lt = null, St = null, jt = null, yu = false, Za = false, pa = false, _u = 0, Wl = 0, ka = null, Tg = 0;
        function Ht() {
          throw Error(s(321));
        }
        function Qr(t, e) {
          if (e === null) return false;
          for (var n = 0; n < e.length && n < t.length; n++) if (!be(t[n], e[n])) return false;
          return true;
        }
        function Vr(t, e, n, a, i, r) {
          return Nn = r, lt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, D.H = t === null || t.memoizedState === null ? gh : vh, pa = false, r = n(a, i), pa = false, Za && (r = qd(e, n, a, i)), Hd(t), r;
        }
        function Hd(t) {
          D.H = Au;
          var e = St !== null && St.next !== null;
          if (Nn = 0, jt = St = lt = null, yu = false, Wl = 0, ka = null, e) throw Error(s(300));
          t === null || Jt || (t = t.dependencies, t !== null && ou(t) && (Jt = true));
        }
        function qd(t, e, n, a) {
          lt = t;
          var i = 0;
          do {
            if (Za && (ka = null), Wl = 0, Za = false, 25 <= i) throw Error(s(301));
            if (i += 1, jt = St = null, t.updateQueue != null) {
              var r = t.updateQueue;
              r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
            }
            D.H = Ug, r = e(n, a);
          } while (Za);
          return r;
        }
        function Rg() {
          var t = D.H, e = t.useState()[0];
          return e = typeof e.then == "function" ? Pl(e) : e, t = t.useState()[0], (St !== null ? St.memoizedState : null) !== t && (lt.flags |= 1024), e;
        }
        function Zr() {
          var t = _u !== 0;
          return _u = 0, t;
        }
        function kr(t, e, n) {
          e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
        }
        function Kr(t) {
          if (yu) {
            for (t = t.memoizedState; t !== null; ) {
              var e = t.queue;
              e !== null && (e.pending = null), t = t.next;
            }
            yu = false;
          }
          Nn = 0, jt = St = lt = null, Za = false, Wl = _u = 0, ka = null;
        }
        function he() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return jt === null ? lt.memoizedState = jt = t : jt = jt.next = t, jt;
        }
        function Lt() {
          if (St === null) {
            var t = lt.alternate;
            t = t !== null ? t.memoizedState : null;
          } else t = St.next;
          var e = jt === null ? lt.memoizedState : jt.next;
          if (e !== null) jt = e, St = t;
          else {
            if (t === null) throw lt.alternate === null ? Error(s(467)) : Error(s(310));
            St = t, t = {
              memoizedState: St.memoizedState,
              baseState: St.baseState,
              baseQueue: St.baseQueue,
              queue: St.queue,
              next: null
            }, jt === null ? lt.memoizedState = jt = t : jt = jt.next = t;
          }
          return jt;
        }
        function Jr() {
          return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
          };
        }
        function Pl(t) {
          var e = Wl;
          return Wl += 1, ka === null && (ka = []), t = Dd(ka, t, e), e = lt, (jt === null ? e.memoizedState : jt.next) === null && (e = e.alternate, D.H = e === null || e.memoizedState === null ? gh : vh), t;
        }
        function gu(t) {
          if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Pl(t);
            if (t.$$typeof === tt) return ue(t);
          }
          throw Error(s(438, String(t)));
        }
        function $r(t) {
          var e = null, n = lt.updateQueue;
          if (n !== null && (e = n.memoCache), e == null) {
            var a = lt.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
              data: a.data.map(function(i) {
                return i.slice();
              }),
              index: 0
            })));
          }
          if (e == null && (e = {
            data: [],
            index: 0
          }), n === null && (n = Jr(), lt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Tt;
          return e.index++, n;
        }
        function pn(t, e) {
          return typeof e == "function" ? e(t) : e;
        }
        function vu(t) {
          var e = Lt();
          return Fr(e, St, t);
        }
        function Fr(t, e, n) {
          var a = t.queue;
          if (a === null) throw Error(s(311));
          a.lastRenderedReducer = n;
          var i = t.baseQueue, r = a.pending;
          if (r !== null) {
            if (i !== null) {
              var f = i.next;
              i.next = r.next, r.next = f;
            }
            e.baseQueue = i = r, a.pending = null;
          }
          if (r = t.baseState, i === null) t.memoizedState = r;
          else {
            e = i.next;
            var h = f = null, p = null, A = e, M = false;
            do {
              var U = A.lane & -536870913;
              if (U !== A.lane ? (dt & U) === U : (Nn & U) === U) {
                var E = A.revertLane;
                if (E === 0) p !== null && (p = p.next = {
                  lane: 0,
                  revertLane: 0,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null
                }), U === Ga && (M = true);
                else if ((Nn & E) === E) {
                  A = A.next, E === Ga && (M = true);
                  continue;
                } else U = {
                  lane: 0,
                  revertLane: A.revertLane,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null
                }, p === null ? (h = p = U, f = r) : p = p.next = U, lt.lanes |= E, Yn |= E;
                U = A.action, pa && n(r, U), r = A.hasEagerState ? A.eagerState : n(r, U);
              } else E = {
                lane: U,
                revertLane: A.revertLane,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null
              }, p === null ? (h = p = E, f = r) : p = p.next = E, lt.lanes |= U, Yn |= U;
              A = A.next;
            } while (A !== null && A !== e);
            if (p === null ? f = r : p.next = h, !be(r, t.memoizedState) && (Jt = true, M && (n = Qa, n !== null))) throw n;
            t.memoizedState = r, t.baseState = f, t.baseQueue = p, a.lastRenderedState = r;
          }
          return i === null && (a.lanes = 0), [
            t.memoizedState,
            a.dispatch
          ];
        }
        function Wr(t) {
          var e = Lt(), n = e.queue;
          if (n === null) throw Error(s(311));
          n.lastRenderedReducer = t;
          var a = n.dispatch, i = n.pending, r = e.memoizedState;
          if (i !== null) {
            n.pending = null;
            var f = i = i.next;
            do
              r = t(r, f.action), f = f.next;
            while (f !== i);
            be(r, e.memoizedState) || (Jt = true), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
          }
          return [
            r,
            a
          ];
        }
        function jd(t, e, n) {
          var a = lt, i = Lt(), r = yt;
          if (r) {
            if (n === void 0) throw Error(s(407));
            n = n();
          } else n = e();
          var f = !be((St || i).memoizedState, n);
          f && (i.memoizedState = n, Jt = true), i = i.queue;
          var h = Yd.bind(null, a, i, t);
          if (Il(2048, 8, h, [
            t
          ]), i.getSnapshot !== e || f || jt !== null && jt.memoizedState.tag & 1) {
            if (a.flags |= 2048, Ka(9, bu(), Xd.bind(null, a, i, n, e), null), Ot === null) throw Error(s(349));
            r || (Nn & 124) !== 0 || Ld(a, e, n);
          }
          return n;
        }
        function Ld(t, e, n) {
          t.flags |= 16384, t = {
            getSnapshot: e,
            value: n
          }, e = lt.updateQueue, e === null ? (e = Jr(), lt.updateQueue = e, e.stores = [
            t
          ]) : (n = e.stores, n === null ? e.stores = [
            t
          ] : n.push(t));
        }
        function Xd(t, e, n, a) {
          e.value = n, e.getSnapshot = a, Gd(e) && Qd(t);
        }
        function Yd(t, e, n) {
          return n(function() {
            Gd(e) && Qd(t);
          });
        }
        function Gd(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !be(t, n);
          } catch {
            return true;
          }
        }
        function Qd(t) {
          var e = ja(t, 2);
          e !== null && Re(e, t, 2);
        }
        function Pr(t) {
          var e = he();
          if (typeof t == "function") {
            var n = t;
            if (t = n(), pa) {
              xn(true);
              try {
                n();
              } finally {
                xn(false);
              }
            }
          }
          return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pn,
            lastRenderedState: t
          }, e;
        }
        function Vd(t, e, n, a) {
          return t.baseState = n, Fr(t, St, typeof a == "function" ? a : pn);
        }
        function xg(t, e, n, a, i) {
          if (wu(t)) throw Error(s(485));
          if (t = e.action, t !== null) {
            var r = {
              payload: i,
              action: t,
              next: null,
              isTransition: true,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function(f) {
                r.listeners.push(f);
              }
            };
            D.T !== null ? n(true) : r.isTransition = false, a(r), n = e.pending, n === null ? (r.next = e.pending = r, Zd(e, r)) : (r.next = n.next, e.pending = n.next = r);
          }
        }
        function Zd(t, e) {
          var n = e.action, a = e.payload, i = t.state;
          if (e.isTransition) {
            var r = D.T, f = {};
            D.T = f;
            try {
              var h = n(i, a), p = D.S;
              p !== null && p(f, h), kd(t, e, h);
            } catch (A) {
              Ir(t, e, A);
            } finally {
              D.T = r;
            }
          } else try {
            r = n(i, a), kd(t, e, r);
          } catch (A) {
            Ir(t, e, A);
          }
        }
        function kd(t, e, n) {
          n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            Kd(t, e, a);
          }, function(a) {
            return Ir(t, e, a);
          }) : Kd(t, e, n);
        }
        function Kd(t, e, n) {
          e.status = "fulfilled", e.value = n, Jd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Zd(t, n)));
        }
        function Ir(t, e, n) {
          var a = t.pending;
          if (t.pending = null, a !== null) {
            a = a.next;
            do
              e.status = "rejected", e.reason = n, Jd(e), e = e.next;
            while (e !== a);
          }
          t.action = null;
        }
        function Jd(t) {
          t = t.listeners;
          for (var e = 0; e < t.length; e++) (0, t[e])();
        }
        function $d(t, e) {
          return e;
        }
        function Fd(t, e) {
          if (yt) {
            var n = Ot.formState;
            if (n !== null) {
              t: {
                var a = lt;
                if (yt) {
                  if (zt) {
                    e: {
                      for (var i = zt, r = Fe; i.nodeType !== 8; ) {
                        if (!r) {
                          i = null;
                          break e;
                        }
                        if (i = Ve(i.nextSibling), i === null) {
                          i = null;
                          break e;
                        }
                      }
                      r = i.data, i = r === "F!" || r === "F" ? i : null;
                    }
                    if (i) {
                      zt = Ve(i.nextSibling), a = i.data === "F!";
                      break t;
                    }
                  }
                  fa(a);
                }
                a = false;
              }
              a && (e = n[0]);
            }
          }
          return n = he(), n.memoizedState = n.baseState = e, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: $d,
            lastRenderedState: e
          }, n.queue = a, n = ph.bind(null, lt, a), a.dispatch = n, a = Pr(false), r = lc.bind(null, lt, false, a.queue), a = he(), i = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
          }, a.queue = i, n = xg.bind(null, lt, i, r, n), i.dispatch = n, a.memoizedState = t, [
            e,
            n,
            false
          ];
        }
        function Wd(t) {
          var e = Lt();
          return Pd(e, St, t);
        }
        function Pd(t, e, n) {
          if (e = Fr(t, e, $d)[0], t = vu(pn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var a = Pl(e);
          } catch (f) {
            throw f === kl ? hu : f;
          }
          else a = e;
          e = Lt();
          var i = e.queue, r = i.dispatch;
          return n !== e.memoizedState && (lt.flags |= 2048, Ka(9, bu(), Og.bind(null, i, n), null)), [
            a,
            r,
            t
          ];
        }
        function Og(t, e) {
          t.action = e;
        }
        function Id(t) {
          var e = Lt(), n = St;
          if (n !== null) return Pd(e, n, t);
          Lt(), e = e.memoizedState, n = Lt();
          var a = n.queue.dispatch;
          return n.memoizedState = t, [
            e,
            a,
            false
          ];
        }
        function Ka(t, e, n, a) {
          return t = {
            tag: t,
            create: n,
            deps: a,
            inst: e,
            next: null
          }, e = lt.updateQueue, e === null && (e = Jr(), lt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
        }
        function bu() {
          return {
            destroy: void 0,
            resource: void 0
          };
        }
        function th() {
          return Lt().memoizedState;
        }
        function Su(t, e, n, a) {
          var i = he();
          a = a === void 0 ? null : a, lt.flags |= t, i.memoizedState = Ka(1 | e, bu(), n, a);
        }
        function Il(t, e, n, a) {
          var i = Lt();
          a = a === void 0 ? null : a;
          var r = i.memoizedState.inst;
          St !== null && a !== null && Qr(a, St.memoizedState.deps) ? i.memoizedState = Ka(e, r, n, a) : (lt.flags |= t, i.memoizedState = Ka(1 | e, r, n, a));
        }
        function eh(t, e) {
          Su(8390656, 8, t, e);
        }
        function nh(t, e) {
          Il(2048, 8, t, e);
        }
        function ah(t, e) {
          return Il(4, 2, t, e);
        }
        function lh(t, e) {
          return Il(4, 4, t, e);
        }
        function ih(t, e) {
          if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
              typeof n == "function" ? n() : e(null);
            };
          }
          if (e != null) return t = t(), e.current = t, function() {
            e.current = null;
          };
        }
        function uh(t, e, n) {
          n = n != null ? n.concat([
            t
          ]) : null, Il(4, 4, ih.bind(null, e, t), n);
        }
        function tc() {
        }
        function sh(t, e) {
          var n = Lt();
          e = e === void 0 ? null : e;
          var a = n.memoizedState;
          return e !== null && Qr(e, a[1]) ? a[0] : (n.memoizedState = [
            t,
            e
          ], t);
        }
        function rh(t, e) {
          var n = Lt();
          e = e === void 0 ? null : e;
          var a = n.memoizedState;
          if (e !== null && Qr(e, a[1])) return a[0];
          if (a = t(), pa) {
            xn(true);
            try {
              t();
            } finally {
              xn(false);
            }
          }
          return n.memoizedState = [
            a,
            e
          ], a;
        }
        function ec(t, e, n) {
          return n === void 0 || (Nn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = fm(), lt.lanes |= t, Yn |= t, n);
        }
        function ch(t, e, n, a) {
          return be(n, e) ? n : Va.current !== null ? (t = ec(t, n, a), be(t, e) || (Jt = true), t) : (Nn & 42) === 0 ? (Jt = true, t.memoizedState = n) : (t = fm(), lt.lanes |= t, Yn |= t, e);
        }
        function oh(t, e, n, a, i) {
          var r = q.p;
          q.p = r !== 0 && 8 > r ? r : 8;
          var f = D.T, h = {};
          D.T = h, lc(t, false, e, n);
          try {
            var p = i(), A = D.S;
            if (A !== null && A(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
              var M = Eg(p, a);
              ti(t, e, M, Te(t));
            } else ti(t, e, a, Te(t));
          } catch (U) {
            ti(t, e, {
              then: function() {
              },
              status: "rejected",
              reason: U
            }, Te());
          } finally {
            q.p = r, D.T = f;
          }
        }
        function Mg() {
        }
        function nc(t, e, n, a) {
          if (t.tag !== 5) throw Error(s(476));
          var i = fh(t).queue;
          oh(t, i, e, F, n === null ? Mg : function() {
            return dh(t), n(a);
          });
        }
        function fh(t) {
          var e = t.memoizedState;
          if (e !== null) return e;
          e = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: pn,
              lastRenderedState: F
            },
            next: null
          };
          var n = {};
          return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: pn,
              lastRenderedState: n
            },
            next: null
          }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
        }
        function dh(t) {
          var e = fh(t).next.queue;
          ti(t, e, {}, Te());
        }
        function ac() {
          return ue(gi);
        }
        function hh() {
          return Lt().memoizedState;
        }
        function mh() {
          return Lt().memoizedState;
        }
        function Dg(t) {
          for (var e = t.return; e !== null; ) {
            switch (e.tag) {
              case 24:
              case 3:
                var n = Te();
                t = Un(n);
                var a = zn(e, t, n);
                a !== null && (Re(a, e, n), Jl(a, e, n)), e = {
                  cache: zr()
                }, t.payload = e;
                return;
            }
            e = e.return;
          }
        }
        function Cg(t, e, n) {
          var a = Te();
          n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: false,
            eagerState: null,
            next: null
          }, wu(t) ? yh(e, n) : (n = Ar(t, e, n, a), n !== null && (Re(n, t, a), _h(n, e, a)));
        }
        function ph(t, e, n) {
          var a = Te();
          ti(t, e, n, a);
        }
        function ti(t, e, n, a) {
          var i = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: false,
            eagerState: null,
            next: null
          };
          if (wu(t)) yh(e, i);
          else {
            var r = t.alternate;
            if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
              var f = e.lastRenderedState, h = r(f, n);
              if (i.hasEagerState = true, i.eagerState = h, be(h, f)) return iu(t, e, i, 0), Ot === null && lu(), false;
            } catch {
            } finally {
            }
            if (n = Ar(t, e, i, a), n !== null) return Re(n, t, a), _h(n, e, a), true;
          }
          return false;
        }
        function lc(t, e, n, a) {
          if (a = {
            lane: 2,
            revertLane: Hc(),
            action: a,
            hasEagerState: false,
            eagerState: null,
            next: null
          }, wu(t)) {
            if (e) throw Error(s(479));
          } else e = Ar(t, n, a, 2), e !== null && Re(e, t, 2);
        }
        function wu(t) {
          var e = t.alternate;
          return t === lt || e !== null && e === lt;
        }
        function yh(t, e) {
          Za = yu = true;
          var n = t.pending;
          n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
        }
        function _h(t, e, n) {
          if ((n & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes, n |= a, e.lanes = n, Tf(t, n);
          }
        }
        var Au = {
          readContext: ue,
          use: gu,
          useCallback: Ht,
          useContext: Ht,
          useEffect: Ht,
          useImperativeHandle: Ht,
          useLayoutEffect: Ht,
          useInsertionEffect: Ht,
          useMemo: Ht,
          useReducer: Ht,
          useRef: Ht,
          useState: Ht,
          useDebugValue: Ht,
          useDeferredValue: Ht,
          useTransition: Ht,
          useSyncExternalStore: Ht,
          useId: Ht,
          useHostTransitionStatus: Ht,
          useFormState: Ht,
          useActionState: Ht,
          useOptimistic: Ht,
          useMemoCache: Ht,
          useCacheRefresh: Ht
        }, gh = {
          readContext: ue,
          use: gu,
          useCallback: function(t, e) {
            return he().memoizedState = [
              t,
              e === void 0 ? null : e
            ], t;
          },
          useContext: ue,
          useEffect: eh,
          useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([
              t
            ]) : null, Su(4194308, 4, ih.bind(null, e, t), n);
          },
          useLayoutEffect: function(t, e) {
            return Su(4194308, 4, t, e);
          },
          useInsertionEffect: function(t, e) {
            Su(4, 2, t, e);
          },
          useMemo: function(t, e) {
            var n = he();
            e = e === void 0 ? null : e;
            var a = t();
            if (pa) {
              xn(true);
              try {
                t();
              } finally {
                xn(false);
              }
            }
            return n.memoizedState = [
              a,
              e
            ], a;
          },
          useReducer: function(t, e, n) {
            var a = he();
            if (n !== void 0) {
              var i = n(e);
              if (pa) {
                xn(true);
                try {
                  n(e);
                } finally {
                  xn(false);
                }
              }
            } else i = e;
            return a.memoizedState = a.baseState = i, t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: i
            }, a.queue = t, t = t.dispatch = Cg.bind(null, lt, t), [
              a.memoizedState,
              t
            ];
          },
          useRef: function(t) {
            var e = he();
            return t = {
              current: t
            }, e.memoizedState = t;
          },
          useState: function(t) {
            t = Pr(t);
            var e = t.queue, n = ph.bind(null, lt, e);
            return e.dispatch = n, [
              t.memoizedState,
              n
            ];
          },
          useDebugValue: tc,
          useDeferredValue: function(t, e) {
            var n = he();
            return ec(n, t, e);
          },
          useTransition: function() {
            var t = Pr(false);
            return t = oh.bind(null, lt, t.queue, true, false), he().memoizedState = t, [
              false,
              t
            ];
          },
          useSyncExternalStore: function(t, e, n) {
            var a = lt, i = he();
            if (yt) {
              if (n === void 0) throw Error(s(407));
              n = n();
            } else {
              if (n = e(), Ot === null) throw Error(s(349));
              (dt & 124) !== 0 || Ld(a, e, n);
            }
            i.memoizedState = n;
            var r = {
              value: n,
              getSnapshot: e
            };
            return i.queue = r, eh(Yd.bind(null, a, r, t), [
              t
            ]), a.flags |= 2048, Ka(9, bu(), Xd.bind(null, a, r, n, e), null), n;
          },
          useId: function() {
            var t = he(), e = Ot.identifierPrefix;
            if (yt) {
              var n = dn, a = fn;
              n = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + n, e = "\xAB" + e + "R" + n, n = _u++, 0 < n && (e += "H" + n.toString(32)), e += "\xBB";
            } else n = Tg++, e = "\xAB" + e + "r" + n.toString(32) + "\xBB";
            return t.memoizedState = e;
          },
          useHostTransitionStatus: ac,
          useFormState: Fd,
          useActionState: Fd,
          useOptimistic: function(t) {
            var e = he();
            e.memoizedState = e.baseState = t;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null
            };
            return e.queue = n, e = lc.bind(null, lt, true, n), n.dispatch = e, [
              t,
              e
            ];
          },
          useMemoCache: $r,
          useCacheRefresh: function() {
            return he().memoizedState = Dg.bind(null, lt);
          }
        }, vh = {
          readContext: ue,
          use: gu,
          useCallback: sh,
          useContext: ue,
          useEffect: nh,
          useImperativeHandle: uh,
          useInsertionEffect: ah,
          useLayoutEffect: lh,
          useMemo: rh,
          useReducer: vu,
          useRef: th,
          useState: function() {
            return vu(pn);
          },
          useDebugValue: tc,
          useDeferredValue: function(t, e) {
            var n = Lt();
            return ch(n, St.memoizedState, t, e);
          },
          useTransition: function() {
            var t = vu(pn)[0], e = Lt().memoizedState;
            return [
              typeof t == "boolean" ? t : Pl(t),
              e
            ];
          },
          useSyncExternalStore: jd,
          useId: hh,
          useHostTransitionStatus: ac,
          useFormState: Wd,
          useActionState: Wd,
          useOptimistic: function(t, e) {
            var n = Lt();
            return Vd(n, St, t, e);
          },
          useMemoCache: $r,
          useCacheRefresh: mh
        }, Ug = {
          readContext: ue,
          use: gu,
          useCallback: sh,
          useContext: ue,
          useEffect: nh,
          useImperativeHandle: uh,
          useInsertionEffect: ah,
          useLayoutEffect: lh,
          useMemo: rh,
          useReducer: Wr,
          useRef: th,
          useState: function() {
            return Wr(pn);
          },
          useDebugValue: tc,
          useDeferredValue: function(t, e) {
            var n = Lt();
            return St === null ? ec(n, t, e) : ch(n, St.memoizedState, t, e);
          },
          useTransition: function() {
            var t = Wr(pn)[0], e = Lt().memoizedState;
            return [
              typeof t == "boolean" ? t : Pl(t),
              e
            ];
          },
          useSyncExternalStore: jd,
          useId: hh,
          useHostTransitionStatus: ac,
          useFormState: Id,
          useActionState: Id,
          useOptimistic: function(t, e) {
            var n = Lt();
            return St !== null ? Vd(n, St, t, e) : (n.baseState = t, [
              t,
              n.queue.dispatch
            ]);
          },
          useMemoCache: $r,
          useCacheRefresh: mh
        }, Ja = null, ei = 0;
        function Eu(t) {
          var e = ei;
          return ei += 1, Ja === null && (Ja = []), Dd(Ja, t, e);
        }
        function ni(t, e) {
          e = e.props.ref, t.ref = e !== void 0 ? e : null;
        }
        function Tu(t, e) {
          throw e.$$typeof === x ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
        }
        function bh(t) {
          var e = t._init;
          return e(t._payload);
        }
        function Sh(t) {
          function e(b, g) {
            if (t) {
              var w = b.deletions;
              w === null ? (b.deletions = [
                g
              ], b.flags |= 16) : w.push(g);
            }
          }
          function n(b, g) {
            if (!t) return null;
            for (; g !== null; ) e(b, g), g = g.sibling;
            return null;
          }
          function a(b) {
            for (var g = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? g.set(b.key, b) : g.set(b.index, b), b = b.sibling;
            return g;
          }
          function i(b, g) {
            return b = on(b, g), b.index = 0, b.sibling = null, b;
          }
          function r(b, g, w) {
            return b.index = w, t ? (w = b.alternate, w !== null ? (w = w.index, w < g ? (b.flags |= 67108866, g) : w) : (b.flags |= 67108866, g)) : (b.flags |= 1048576, g);
          }
          function f(b) {
            return t && b.alternate === null && (b.flags |= 67108866), b;
          }
          function h(b, g, w, C) {
            return g === null || g.tag !== 6 ? (g = Tr(w, b.mode, C), g.return = b, g) : (g = i(g, w), g.return = b, g);
          }
          function p(b, g, w, C) {
            var Y = w.type;
            return Y === L ? M(b, g, w.props.children, C, w.key) : g !== null && (g.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === pt && bh(Y) === g.type) ? (g = i(g, w.props), ni(g, w), g.return = b, g) : (g = su(w.type, w.key, w.props, null, b.mode, C), ni(g, w), g.return = b, g);
          }
          function A(b, g, w, C) {
            return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w.containerInfo || g.stateNode.implementation !== w.implementation ? (g = Rr(w, b.mode, C), g.return = b, g) : (g = i(g, w.children || []), g.return = b, g);
          }
          function M(b, g, w, C, Y) {
            return g === null || g.tag !== 7 ? (g = sa(w, b.mode, C, Y), g.return = b, g) : (g = i(g, w), g.return = b, g);
          }
          function U(b, g, w) {
            if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return g = Tr("" + g, b.mode, w), g.return = b, g;
            if (typeof g == "object" && g !== null) {
              switch (g.$$typeof) {
                case O:
                  return w = su(g.type, g.key, g.props, null, b.mode, w), ni(w, g), w.return = b, w;
                case z:
                  return g = Rr(g, b.mode, w), g.return = b, g;
                case pt:
                  var C = g._init;
                  return g = C(g._payload), U(b, g, w);
              }
              if (Gt(g) || Yt(g)) return g = sa(g, b.mode, w, null), g.return = b, g;
              if (typeof g.then == "function") return U(b, Eu(g), w);
              if (g.$$typeof === tt) return U(b, fu(b, g), w);
              Tu(b, g);
            }
            return null;
          }
          function E(b, g, w, C) {
            var Y = g !== null ? g.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return Y !== null ? null : h(b, g, "" + w, C);
            if (typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case O:
                  return w.key === Y ? p(b, g, w, C) : null;
                case z:
                  return w.key === Y ? A(b, g, w, C) : null;
                case pt:
                  return Y = w._init, w = Y(w._payload), E(b, g, w, C);
              }
              if (Gt(w) || Yt(w)) return Y !== null ? null : M(b, g, w, C, null);
              if (typeof w.then == "function") return E(b, g, Eu(w), C);
              if (w.$$typeof === tt) return E(b, g, fu(b, w), C);
              Tu(b, w);
            }
            return null;
          }
          function T(b, g, w, C, Y) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return b = b.get(w) || null, h(g, b, "" + C, Y);
            if (typeof C == "object" && C !== null) {
              switch (C.$$typeof) {
                case O:
                  return b = b.get(C.key === null ? w : C.key) || null, p(g, b, C, Y);
                case z:
                  return b = b.get(C.key === null ? w : C.key) || null, A(g, b, C, Y);
                case pt:
                  var it = C._init;
                  return C = it(C._payload), T(b, g, w, C, Y);
              }
              if (Gt(C) || Yt(C)) return b = b.get(w) || null, M(g, b, C, Y, null);
              if (typeof C.then == "function") return T(b, g, w, Eu(C), Y);
              if (C.$$typeof === tt) return T(b, g, w, fu(g, C), Y);
              Tu(g, C);
            }
            return null;
          }
          function P(b, g, w, C) {
            for (var Y = null, it = null, Z = g, $ = g = 0, Ft = null; Z !== null && $ < w.length; $++) {
              Z.index > $ ? (Ft = Z, Z = null) : Ft = Z.sibling;
              var mt = E(b, Z, w[$], C);
              if (mt === null) {
                Z === null && (Z = Ft);
                break;
              }
              t && Z && mt.alternate === null && e(b, Z), g = r(mt, g, $), it === null ? Y = mt : it.sibling = mt, it = mt, Z = Ft;
            }
            if ($ === w.length) return n(b, Z), yt && ca(b, $), Y;
            if (Z === null) {
              for (; $ < w.length; $++) Z = U(b, w[$], C), Z !== null && (g = r(Z, g, $), it === null ? Y = Z : it.sibling = Z, it = Z);
              return yt && ca(b, $), Y;
            }
            for (Z = a(Z); $ < w.length; $++) Ft = T(Z, b, $, w[$], C), Ft !== null && (t && Ft.alternate !== null && Z.delete(Ft.key === null ? $ : Ft.key), g = r(Ft, g, $), it === null ? Y = Ft : it.sibling = Ft, it = Ft);
            return t && Z.forEach(function(Fn) {
              return e(b, Fn);
            }), yt && ca(b, $), Y;
          }
          function J(b, g, w, C) {
            if (w == null) throw Error(s(151));
            for (var Y = null, it = null, Z = g, $ = g = 0, Ft = null, mt = w.next(); Z !== null && !mt.done; $++, mt = w.next()) {
              Z.index > $ ? (Ft = Z, Z = null) : Ft = Z.sibling;
              var Fn = E(b, Z, mt.value, C);
              if (Fn === null) {
                Z === null && (Z = Ft);
                break;
              }
              t && Z && Fn.alternate === null && e(b, Z), g = r(Fn, g, $), it === null ? Y = Fn : it.sibling = Fn, it = Fn, Z = Ft;
            }
            if (mt.done) return n(b, Z), yt && ca(b, $), Y;
            if (Z === null) {
              for (; !mt.done; $++, mt = w.next()) mt = U(b, mt.value, C), mt !== null && (g = r(mt, g, $), it === null ? Y = mt : it.sibling = mt, it = mt);
              return yt && ca(b, $), Y;
            }
            for (Z = a(Z); !mt.done; $++, mt = w.next()) mt = T(Z, b, $, mt.value, C), mt !== null && (t && mt.alternate !== null && Z.delete(mt.key === null ? $ : mt.key), g = r(mt, g, $), it === null ? Y = mt : it.sibling = mt, it = mt);
            return t && Z.forEach(function(z0) {
              return e(b, z0);
            }), yt && ca(b, $), Y;
          }
          function At(b, g, w, C) {
            if (typeof w == "object" && w !== null && w.type === L && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case O:
                  t: {
                    for (var Y = w.key; g !== null; ) {
                      if (g.key === Y) {
                        if (Y = w.type, Y === L) {
                          if (g.tag === 7) {
                            n(b, g.sibling), C = i(g, w.props.children), C.return = b, b = C;
                            break t;
                          }
                        } else if (g.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === pt && bh(Y) === g.type) {
                          n(b, g.sibling), C = i(g, w.props), ni(C, w), C.return = b, b = C;
                          break t;
                        }
                        n(b, g);
                        break;
                      } else e(b, g);
                      g = g.sibling;
                    }
                    w.type === L ? (C = sa(w.props.children, b.mode, C, w.key), C.return = b, b = C) : (C = su(w.type, w.key, w.props, null, b.mode, C), ni(C, w), C.return = b, b = C);
                  }
                  return f(b);
                case z:
                  t: {
                    for (Y = w.key; g !== null; ) {
                      if (g.key === Y) if (g.tag === 4 && g.stateNode.containerInfo === w.containerInfo && g.stateNode.implementation === w.implementation) {
                        n(b, g.sibling), C = i(g, w.children || []), C.return = b, b = C;
                        break t;
                      } else {
                        n(b, g);
                        break;
                      }
                      else e(b, g);
                      g = g.sibling;
                    }
                    C = Rr(w, b.mode, C), C.return = b, b = C;
                  }
                  return f(b);
                case pt:
                  return Y = w._init, w = Y(w._payload), At(b, g, w, C);
              }
              if (Gt(w)) return P(b, g, w, C);
              if (Yt(w)) {
                if (Y = Yt(w), typeof Y != "function") throw Error(s(150));
                return w = Y.call(w), J(b, g, w, C);
              }
              if (typeof w.then == "function") return At(b, g, Eu(w), C);
              if (w.$$typeof === tt) return At(b, g, fu(b, w), C);
              Tu(b, w);
            }
            return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, g !== null && g.tag === 6 ? (n(b, g.sibling), C = i(g, w), C.return = b, b = C) : (n(b, g), C = Tr(w, b.mode, C), C.return = b, b = C), f(b)) : n(b, g);
          }
          return function(b, g, w, C) {
            try {
              ei = 0;
              var Y = At(b, g, w, C);
              return Ja = null, Y;
            } catch (Z) {
              if (Z === kl || Z === hu) throw Z;
              var it = Se(29, Z, null, b.mode);
              return it.lanes = C, it.return = b, it;
            } finally {
            }
          };
        }
        var $a = Sh(true), wh = Sh(false), qe = N(null), We = null;
        function Bn(t) {
          var e = t.alternate;
          H(Vt, Vt.current & 1), H(qe, t), We === null && (e === null || Va.current !== null || e.memoizedState !== null) && (We = t);
        }
        function Ah(t) {
          if (t.tag === 22) {
            if (H(Vt, Vt.current), H(qe, t), We === null) {
              var e = t.alternate;
              e !== null && e.memoizedState !== null && (We = t);
            }
          } else Hn();
        }
        function Hn() {
          H(Vt, Vt.current), H(qe, qe.current);
        }
        function yn(t) {
          X(qe), We === t && (We = null), X(Vt);
        }
        var Vt = N(0);
        function Ru(t) {
          for (var e = t; e !== null; ) {
            if (e.tag === 13) {
              var n = e.memoizedState;
              if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Jc(n))) return e;
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
              if ((e.flags & 128) !== 0) return e;
            } else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) return null;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          return null;
        }
        function ic(t, e, n, a) {
          e = t.memoizedState, n = n(a, e), n = n == null ? e : R({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
        }
        var uc = {
          enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var a = Te(), i = Un(a);
            i.payload = e, n != null && (i.callback = n), e = zn(t, i, a), e !== null && (Re(e, t, a), Jl(e, t, a));
          },
          enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var a = Te(), i = Un(a);
            i.tag = 1, i.payload = e, n != null && (i.callback = n), e = zn(t, i, a), e !== null && (Re(e, t, a), Jl(e, t, a));
          },
          enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = Te(), a = Un(n);
            a.tag = 2, e != null && (a.callback = e), e = zn(t, a, n), e !== null && (Re(e, t, n), Jl(e, t, n));
          }
        };
        function Eh(t, e, n, a, i, r, f) {
          return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, f) : e.prototype && e.prototype.isPureReactComponent ? !jl(n, a) || !jl(i, r) : true;
        }
        function Th(t, e, n, a) {
          t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && uc.enqueueReplaceState(e, e.state, null);
        }
        function ya(t, e) {
          var n = e;
          if ("ref" in e) {
            n = {};
            for (var a in e) a !== "ref" && (n[a] = e[a]);
          }
          if (t = t.defaultProps) {
            n === e && (n = R({}, n));
            for (var i in t) n[i] === void 0 && (n[i] = t[i]);
          }
          return n;
        }
        var xu = typeof reportError == "function" ? reportError : function(t) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
              error: t
            });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
        function Rh(t) {
          xu(t);
        }
        function xh(t) {
          console.error(t);
        }
        function Oh(t) {
          xu(t);
        }
        function Ou(t, e) {
          try {
            var n = t.onUncaughtError;
            n(e.value, {
              componentStack: e.stack
            });
          } catch (a) {
            setTimeout(function() {
              throw a;
            });
          }
        }
        function Mh(t, e, n) {
          try {
            var a = t.onCaughtError;
            a(n.value, {
              componentStack: n.stack,
              errorBoundary: e.tag === 1 ? e.stateNode : null
            });
          } catch (i) {
            setTimeout(function() {
              throw i;
            });
          }
        }
        function sc(t, e, n) {
          return n = Un(n), n.tag = 3, n.payload = {
            element: null
          }, n.callback = function() {
            Ou(t, e);
          }, n;
        }
        function Dh(t) {
          return t = Un(t), t.tag = 3, t;
        }
        function Ch(t, e, n, a) {
          var i = n.type.getDerivedStateFromError;
          if (typeof i == "function") {
            var r = a.value;
            t.payload = function() {
              return i(r);
            }, t.callback = function() {
              Mh(e, n, a);
            };
          }
          var f = n.stateNode;
          f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
            Mh(e, n, a), typeof i != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([
              this
            ]) : Gn.add(this));
            var h = a.stack;
            this.componentDidCatch(a.value, {
              componentStack: h !== null ? h : ""
            });
          });
        }
        function zg(t, e, n, a, i) {
          if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = n.alternate, e !== null && Ql(e, n, i, true), n = qe.current, n !== null) {
              switch (n.tag) {
                case 13:
                  return We === null ? Cc() : n.alternate === null && Nt === 0 && (Nt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === Hr ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
                    a
                  ]) : e.add(a), zc(t, a, i)), false;
                case 22:
                  return n.flags |= 65536, a === Hr ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: /* @__PURE__ */ new Set([
                      a
                    ])
                  }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
                    a
                  ]) : n.add(a)), zc(t, a, i)), false;
              }
              throw Error(s(435, n.tag));
            }
            return zc(t, a, i), Cc(), false;
          }
          if (yt) return e = qe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = i, a !== Mr && (t = Error(s(422), {
            cause: a
          }), Gl(ze(t, n)))) : (a !== Mr && (e = Error(s(423), {
            cause: a
          }), Gl(ze(e, n))), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, a = ze(a, n), i = sc(t.stateNode, a, i), Lr(t, i), Nt !== 4 && (Nt = 2)), false;
          var r = Error(s(520), {
            cause: a
          });
          if (r = ze(r, n), ci === null ? ci = [
            r
          ] : ci.push(r), Nt !== 4 && (Nt = 2), e === null) return true;
          a = ze(a, n), n = e;
          do {
            switch (n.tag) {
              case 3:
                return n.flags |= 65536, t = i & -i, n.lanes |= t, t = sc(n.stateNode, a, t), Lr(n, t), false;
              case 1:
                if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Dh(i), Ch(i, t, n, a), Lr(n, i), false;
            }
            n = n.return;
          } while (n !== null);
          return false;
        }
        var Uh = Error(s(461)), Jt = false;
        function It(t, e, n, a) {
          e.child = t === null ? wh(e, null, n, a) : $a(e, t.child, n, a);
        }
        function zh(t, e, n, a, i) {
          n = n.render;
          var r = e.ref;
          if ("ref" in a) {
            var f = {};
            for (var h in a) h !== "ref" && (f[h] = a[h]);
          } else f = a;
          return ha(e), a = Vr(t, e, n, f, r, i), h = Zr(), t !== null && !Jt ? (kr(t, e, i), _n(t, e, i)) : (yt && h && xr(e), e.flags |= 1, It(t, e, a, i), e.child);
        }
        function Nh(t, e, n, a, i) {
          if (t === null) {
            var r = n.type;
            return typeof r == "function" && !Er(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Bh(t, e, r, a, i)) : (t = su(n.type, null, a, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
          }
          if (r = t.child, !pc(t, i)) {
            var f = r.memoizedProps;
            if (n = n.compare, n = n !== null ? n : jl, n(f, a) && t.ref === e.ref) return _n(t, e, i);
          }
          return e.flags |= 1, t = on(r, a), t.ref = e.ref, t.return = e, e.child = t;
        }
        function Bh(t, e, n, a, i) {
          if (t !== null) {
            var r = t.memoizedProps;
            if (jl(r, a) && t.ref === e.ref) if (Jt = false, e.pendingProps = a = r, pc(t, i)) (t.flags & 131072) !== 0 && (Jt = true);
            else return e.lanes = t.lanes, _n(t, e, i);
          }
          return rc(t, e, n, a, i);
        }
        function Hh(t, e, n) {
          var a = e.pendingProps, i = a.children, r = t !== null ? t.memoizedState : null;
          if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
              if (a = r !== null ? r.baseLanes | n : n, t !== null) {
                for (i = e.child = t.child, r = 0; i !== null; ) r = r | i.lanes | i.childLanes, i = i.sibling;
                e.childLanes = r & ~a;
              } else e.childLanes = 0, e.child = null;
              return qh(t, e, a, n);
            }
            if ((n & 536870912) !== 0) e.memoizedState = {
              baseLanes: 0,
              cachePool: null
            }, t !== null && du(e, r !== null ? r.cachePool : null), r !== null ? Bd(e, r) : Yr(), Ah(e);
            else return e.lanes = e.childLanes = 536870912, qh(t, e, r !== null ? r.baseLanes | n : n, n);
          } else r !== null ? (du(e, r.cachePool), Bd(e, r), Hn(), e.memoizedState = null) : (t !== null && du(e, null), Yr(), Hn());
          return It(t, e, i, n), e.child;
        }
        function qh(t, e, n, a) {
          var i = Br();
          return i = i === null ? null : {
            parent: Qt._currentValue,
            pool: i
          }, e.memoizedState = {
            baseLanes: n,
            cachePool: i
          }, t !== null && du(e, null), Yr(), Ah(e), t !== null && Ql(t, e, a, true), null;
        }
        function Mu(t, e) {
          var n = e.ref;
          if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
          else {
            if (typeof n != "function" && typeof n != "object") throw Error(s(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816);
          }
        }
        function rc(t, e, n, a, i) {
          return ha(e), n = Vr(t, e, n, a, void 0, i), a = Zr(), t !== null && !Jt ? (kr(t, e, i), _n(t, e, i)) : (yt && a && xr(e), e.flags |= 1, It(t, e, n, i), e.child);
        }
        function jh(t, e, n, a, i, r) {
          return ha(e), e.updateQueue = null, n = qd(e, a, n, i), Hd(t), a = Zr(), t !== null && !Jt ? (kr(t, e, r), _n(t, e, r)) : (yt && a && xr(e), e.flags |= 1, It(t, e, n, r), e.child);
        }
        function Lh(t, e, n, a, i) {
          if (ha(e), e.stateNode === null) {
            var r = La, f = n.contextType;
            typeof f == "object" && f !== null && (r = ue(f)), r = new n(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = uc, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, qr(e), f = n.contextType, r.context = typeof f == "object" && f !== null ? ue(f) : La, r.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (ic(e, n, f, a), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && uc.enqueueReplaceState(r, r.state, null), Fl(e, a, r, i), $l(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = true;
          } else if (t === null) {
            r = e.stateNode;
            var h = e.memoizedProps, p = ya(n, h);
            r.props = p;
            var A = r.context, M = n.contextType;
            f = La, typeof M == "object" && M !== null && (f = ue(M));
            var U = n.getDerivedStateFromProps;
            M = typeof U == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, M || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || A !== f) && Th(e, r, a, f), Cn = false;
            var E = e.memoizedState;
            r.state = E, Fl(e, a, r, i), $l(), A = e.memoizedState, h || E !== A || Cn ? (typeof U == "function" && (ic(e, n, U, a), A = e.memoizedState), (p = Cn || Eh(e, n, p, a, E, A, f)) ? (M || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = A), r.props = a, r.state = A, r.context = f, a = p) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = false);
          } else {
            r = e.stateNode, jr(t, e), f = e.memoizedProps, M = ya(n, f), r.props = M, U = e.pendingProps, E = r.context, A = n.contextType, p = La, typeof A == "object" && A !== null && (p = ue(A)), h = n.getDerivedStateFromProps, (A = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== U || E !== p) && Th(e, r, a, p), Cn = false, E = e.memoizedState, r.state = E, Fl(e, a, r, i), $l();
            var T = e.memoizedState;
            f !== U || E !== T || Cn || t !== null && t.dependencies !== null && ou(t.dependencies) ? (typeof h == "function" && (ic(e, n, h, a), T = e.memoizedState), (M = Cn || Eh(e, n, M, a, E, T, p) || t !== null && t.dependencies !== null && ou(t.dependencies)) ? (A || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, T, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, T, p)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = T), r.props = a, r.state = T, r.context = p, a = M) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), a = false);
          }
          return r = a, Mu(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = $a(e, t.child, null, i), e.child = $a(e, null, n, i)) : It(t, e, n, i), e.memoizedState = r.state, t = e.child) : t = _n(t, e, i), t;
        }
        function Xh(t, e, n, a) {
          return Yl(), e.flags |= 256, It(t, e, n, a), e.child;
        }
        var cc = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null
        };
        function oc(t) {
          return {
            baseLanes: t,
            cachePool: xd()
          };
        }
        function fc(t, e, n) {
          return t = t !== null ? t.childLanes & ~n : 0, e && (t |= je), t;
        }
        function Yh(t, e, n) {
          var a = e.pendingProps, i = false, r = (e.flags & 128) !== 0, f;
          if ((f = r) || (f = t !== null && t.memoizedState === null ? false : (Vt.current & 2) !== 0), f && (i = true, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (yt) {
              if (i ? Bn(e) : Hn(), yt) {
                var h = zt, p;
                if (p = h) {
                  t: {
                    for (p = h, h = Fe; p.nodeType !== 8; ) {
                      if (!h) {
                        h = null;
                        break t;
                      }
                      if (p = Ve(p.nextSibling), p === null) {
                        h = null;
                        break t;
                      }
                    }
                    h = p;
                  }
                  h !== null ? (e.memoizedState = {
                    dehydrated: h,
                    treeContext: ra !== null ? {
                      id: fn,
                      overflow: dn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                  }, p = Se(18, null, null, 0), p.stateNode = h, p.return = e, e.child = p, ce = e, zt = null, p = true) : p = false;
                }
                p || fa(e);
              }
              if (h = e.memoizedState, h !== null && (h = h.dehydrated, h !== null)) return Jc(h) ? e.lanes = 32 : e.lanes = 536870912, null;
              yn(e);
            }
            return h = a.children, a = a.fallback, i ? (Hn(), i = e.mode, h = Du({
              mode: "hidden",
              children: h
            }, i), a = sa(a, i, n, null), h.return = e, a.return = e, h.sibling = a, e.child = h, i = e.child, i.memoizedState = oc(n), i.childLanes = fc(t, f, n), e.memoizedState = cc, a) : (Bn(e), dc(e, h));
          }
          if (p = t.memoizedState, p !== null && (h = p.dehydrated, h !== null)) {
            if (r) e.flags & 256 ? (Bn(e), e.flags &= -257, e = hc(t, e, n)) : e.memoizedState !== null ? (Hn(), e.child = t.child, e.flags |= 128, e = null) : (Hn(), i = a.fallback, h = e.mode, a = Du({
              mode: "visible",
              children: a.children
            }, h), i = sa(i, h, n, null), i.flags |= 2, a.return = e, i.return = e, a.sibling = i, e.child = a, $a(e, t.child, null, n), a = e.child, a.memoizedState = oc(n), a.childLanes = fc(t, f, n), e.memoizedState = cc, e = i);
            else if (Bn(e), Jc(h)) {
              if (f = h.nextSibling && h.nextSibling.dataset, f) var A = f.dgst;
              f = A, a = Error(s(419)), a.stack = "", a.digest = f, Gl({
                value: a,
                source: null,
                stack: null
              }), e = hc(t, e, n);
            } else if (Jt || Ql(t, e, n, false), f = (n & t.childLanes) !== 0, Jt || f) {
              if (f = Ot, f !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : $s(a), a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== p.retryLane)) throw p.retryLane = a, ja(t, a), Re(f, t, a), Uh;
              h.data === "$?" || Cc(), e = hc(t, e, n);
            } else h.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, zt = Ve(h.nextSibling), ce = e, yt = true, oa = null, Fe = false, t !== null && (Be[He++] = fn, Be[He++] = dn, Be[He++] = ra, fn = t.id, dn = t.overflow, ra = e), e = dc(e, a.children), e.flags |= 4096);
            return e;
          }
          return i ? (Hn(), i = a.fallback, h = e.mode, p = t.child, A = p.sibling, a = on(p, {
            mode: "hidden",
            children: a.children
          }), a.subtreeFlags = p.subtreeFlags & 65011712, A !== null ? i = on(A, i) : (i = sa(i, h, n, null), i.flags |= 2), i.return = e, a.return = e, a.sibling = i, e.child = a, a = i, i = e.child, h = t.child.memoizedState, h === null ? h = oc(n) : (p = h.cachePool, p !== null ? (A = Qt._currentValue, p = p.parent !== A ? {
            parent: A,
            pool: A
          } : p) : p = xd(), h = {
            baseLanes: h.baseLanes | n,
            cachePool: p
          }), i.memoizedState = h, i.childLanes = fc(t, f, n), e.memoizedState = cc, a) : (Bn(e), n = t.child, t = n.sibling, n = on(n, {
            mode: "visible",
            children: a.children
          }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [
            t
          ], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
        }
        function dc(t, e) {
          return e = Du({
            mode: "visible",
            children: e
          }, t.mode), e.return = t, t.child = e;
        }
        function Du(t, e) {
          return t = Se(22, t, null, e), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
          }, t;
        }
        function hc(t, e, n) {
          return $a(e, t.child, null, n), t = dc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
        }
        function Gh(t, e, n) {
          t.lanes |= e;
          var a = t.alternate;
          a !== null && (a.lanes |= e), Cr(t.return, e, n);
        }
        function mc(t, e, n, a, i) {
          var r = t.memoizedState;
          r === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: i
          } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = n, r.tailMode = i);
        }
        function Qh(t, e, n) {
          var a = e.pendingProps, i = a.revealOrder, r = a.tail;
          if (It(t, e, a.children, n), a = Vt.current, (a & 2) !== 0) a = a & 1 | 2, e.flags |= 128;
          else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
              if (t.tag === 13) t.memoizedState !== null && Gh(t, n, e);
              else if (t.tag === 19) Gh(t, n, e);
              else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break t;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break t;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
            a &= 1;
          }
          switch (H(Vt, a), i) {
            case "forwards":
              for (n = e.child, i = null; n !== null; ) t = n.alternate, t !== null && Ru(t) === null && (i = n), n = n.sibling;
              n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), mc(e, false, i, n, r);
              break;
            case "backwards":
              for (n = null, i = e.child, e.child = null; i !== null; ) {
                if (t = i.alternate, t !== null && Ru(t) === null) {
                  e.child = i;
                  break;
                }
                t = i.sibling, i.sibling = n, n = i, i = t;
              }
              mc(e, true, n, null, r);
              break;
            case "together":
              mc(e, false, null, null, void 0);
              break;
            default:
              e.memoizedState = null;
          }
          return e.child;
        }
        function _n(t, e, n) {
          if (t !== null && (e.dependencies = t.dependencies), Yn |= e.lanes, (n & e.childLanes) === 0) if (t !== null) {
            if (Ql(t, e, n, false), (n & e.childLanes) === 0) return null;
          } else return null;
          if (t !== null && e.child !== t.child) throw Error(s(153));
          if (e.child !== null) {
            for (t = e.child, n = on(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = on(t, t.pendingProps), n.return = e;
            n.sibling = null;
          }
          return e.child;
        }
        function pc(t, e) {
          return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && ou(t)));
        }
        function Ng(t, e, n) {
          switch (e.tag) {
            case 3:
              Mt(e, e.stateNode.containerInfo), Dn(e, Qt, t.memoizedState.cache), Yl();
              break;
            case 27:
            case 5:
              Vs(e);
              break;
            case 4:
              Mt(e, e.stateNode.containerInfo);
              break;
            case 10:
              Dn(e, e.type, e.memoizedProps.value);
              break;
            case 13:
              var a = e.memoizedState;
              if (a !== null) return a.dehydrated !== null ? (Bn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Yh(t, e, n) : (Bn(e), t = _n(t, e, n), t !== null ? t.sibling : null);
              Bn(e);
              break;
            case 19:
              var i = (t.flags & 128) !== 0;
              if (a = (n & e.childLanes) !== 0, a || (Ql(t, e, n, false), a = (n & e.childLanes) !== 0), i) {
                if (a) return Qh(t, e, n);
                e.flags |= 128;
              }
              if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), H(Vt, Vt.current), a) break;
              return null;
            case 22:
            case 23:
              return e.lanes = 0, Hh(t, e, n);
            case 24:
              Dn(e, Qt, t.memoizedState.cache);
          }
          return _n(t, e, n);
        }
        function Vh(t, e, n) {
          if (t !== null) if (t.memoizedProps !== e.pendingProps) Jt = true;
          else {
            if (!pc(t, n) && (e.flags & 128) === 0) return Jt = false, Ng(t, e, n);
            Jt = (t.flags & 131072) !== 0;
          }
          else Jt = false, yt && (e.flags & 1048576) !== 0 && bd(e, cu, e.index);
          switch (e.lanes = 0, e.tag) {
            case 16:
              t: {
                t = e.pendingProps;
                var a = e.elementType, i = a._init;
                if (a = i(a._payload), e.type = a, typeof a == "function") Er(a) ? (t = ya(a, t), e.tag = 1, e = Lh(null, e, a, t, n)) : (e.tag = 0, e = rc(null, e, a, t, n));
                else {
                  if (a != null) {
                    if (i = a.$$typeof, i === st) {
                      e.tag = 11, e = zh(null, e, a, t, n);
                      break t;
                    } else if (i === ot) {
                      e.tag = 14, e = Nh(null, e, a, t, n);
                      break t;
                    }
                  }
                  throw e = sn(a) || a, Error(s(306, e, ""));
                }
              }
              return e;
            case 0:
              return rc(t, e, e.type, e.pendingProps, n);
            case 1:
              return a = e.type, i = ya(a, e.pendingProps), Lh(t, e, a, i, n);
            case 3:
              t: {
                if (Mt(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
                a = e.pendingProps;
                var r = e.memoizedState;
                i = r.element, jr(t, e), Fl(e, a, null, n);
                var f = e.memoizedState;
                if (a = f.cache, Dn(e, Qt, a), a !== r.cache && Ur(e, [
                  Qt
                ], n, true), $l(), a = f.element, r.isDehydrated) if (r = {
                  element: a,
                  isDehydrated: false,
                  cache: f.cache
                }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
                  e = Xh(t, e, a, n);
                  break t;
                } else if (a !== i) {
                  i = ze(Error(s(424)), e), Gl(i), e = Xh(t, e, a, n);
                  break t;
                } else {
                  switch (t = e.stateNode.containerInfo, t.nodeType) {
                    case 9:
                      t = t.body;
                      break;
                    default:
                      t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                  }
                  for (zt = Ve(t.firstChild), ce = e, yt = true, oa = null, Fe = true, n = wh(e, null, a, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
                }
                else {
                  if (Yl(), a === i) {
                    e = _n(t, e, n);
                    break t;
                  }
                  It(t, e, a, n);
                }
                e = e.child;
              }
              return e;
            case 26:
              return Mu(t, e), t === null ? (n = Jm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : yt || (n = e.type, t = e.pendingProps, a = Vu(I.current).createElement(n), a[ie] = e, a[fe] = t, ee(a, n, t), Kt(a), e.stateNode = a) : e.memoizedState = Jm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
              return Vs(e), t === null && yt && (a = e.stateNode = Zm(e.type, e.pendingProps, I.current), ce = e, Fe = true, i = zt, Zn(e.type) ? ($c = i, zt = Ve(a.firstChild)) : zt = i), It(t, e, e.pendingProps.children, n), Mu(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
              return t === null && yt && ((i = a = zt) && (a = r0(a, e.type, e.pendingProps, Fe), a !== null ? (e.stateNode = a, ce = e, zt = Ve(a.firstChild), Fe = false, i = true) : i = false), i || fa(e)), Vs(e), i = e.type, r = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = r.children, Zc(i, r) ? a = null : f !== null && Zc(i, f) && (e.flags |= 32), e.memoizedState !== null && (i = Vr(t, e, Rg, null, null, n), gi._currentValue = i), Mu(t, e), It(t, e, a, n), e.child;
            case 6:
              return t === null && yt && ((t = n = zt) && (n = c0(n, e.pendingProps, Fe), n !== null ? (e.stateNode = n, ce = e, zt = null, t = true) : t = false), t || fa(e)), null;
            case 13:
              return Yh(t, e, n);
            case 4:
              return Mt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = $a(e, null, a, n) : It(t, e, a, n), e.child;
            case 11:
              return zh(t, e, e.type, e.pendingProps, n);
            case 7:
              return It(t, e, e.pendingProps, n), e.child;
            case 8:
              return It(t, e, e.pendingProps.children, n), e.child;
            case 12:
              return It(t, e, e.pendingProps.children, n), e.child;
            case 10:
              return a = e.pendingProps, Dn(e, e.type, a.value), It(t, e, a.children, n), e.child;
            case 9:
              return i = e.type._context, a = e.pendingProps.children, ha(e), i = ue(i), a = a(i), e.flags |= 1, It(t, e, a, n), e.child;
            case 14:
              return Nh(t, e, e.type, e.pendingProps, n);
            case 15:
              return Bh(t, e, e.type, e.pendingProps, n);
            case 19:
              return Qh(t, e, n);
            case 31:
              return a = e.pendingProps, n = e.mode, a = {
                mode: a.mode,
                children: a.children
              }, t === null ? (n = Du(a, n), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = on(t.child, a), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
            case 22:
              return Hh(t, e, n);
            case 24:
              return ha(e), a = ue(Qt), t === null ? (i = Br(), i === null && (i = Ot, r = zr(), i.pooledCache = r, r.refCount++, r !== null && (i.pooledCacheLanes |= n), i = r), e.memoizedState = {
                parent: a,
                cache: i
              }, qr(e), Dn(e, Qt, i)) : ((t.lanes & n) !== 0 && (jr(t, e), Fl(e, null, null, n), $l()), i = t.memoizedState, r = e.memoizedState, i.parent !== a ? (i = {
                parent: a,
                cache: a
              }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Dn(e, Qt, a)) : (a = r.cache, Dn(e, Qt, a), a !== i.cache && Ur(e, [
                Qt
              ], n, true))), It(t, e, e.pendingProps.children, n), e.child;
            case 29:
              throw e.pendingProps;
          }
          throw Error(s(156, e.tag));
        }
        function gn(t) {
          t.flags |= 4;
        }
        function Zh(t, e) {
          if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
          else if (t.flags |= 16777216, !Im(e)) {
            if (e = qe.current, e !== null && ((dt & 4194048) === dt ? We !== null : (dt & 62914560) !== dt && (dt & 536870912) === 0 || e !== We)) throw Kl = Hr, Od;
            t.flags |= 8192;
          }
        }
        function Cu(t, e) {
          e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Af() : 536870912, t.lanes |= e, Ia |= e);
        }
        function ai(t, e) {
          if (!yt) switch (t.tailMode) {
            case "hidden":
              e = t.tail;
              for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
              n === null ? t.tail = null : n.sibling = null;
              break;
            case "collapsed":
              n = t.tail;
              for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
              a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          }
        }
        function Ct(t) {
          var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
          if (e) for (var i = t.child; i !== null; ) n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = t, i = i.sibling;
          else for (i = t.child; i !== null; ) n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = t, i = i.sibling;
          return t.subtreeFlags |= a, t.childLanes = n, e;
        }
        function Bg(t, e, n) {
          var a = e.pendingProps;
          switch (Or(e), e.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ct(e), null;
            case 1:
              return Ct(e), null;
            case 3:
              return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), mn(Qt), Rn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Xl(e) ? gn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ad())), Ct(e), null;
            case 26:
              return n = e.memoizedState, t === null ? (gn(e), n !== null ? (Ct(e), Zh(e, n)) : (Ct(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (gn(e), Ct(e), Zh(e, n)) : (Ct(e), e.flags &= -16777217) : (t.memoizedProps !== a && gn(e), Ct(e), e.flags &= -16777217), null;
            case 27:
              Gi(e), n = I.current;
              var i = e.type;
              if (t !== null && e.stateNode != null) t.memoizedProps !== a && gn(e);
              else {
                if (!a) {
                  if (e.stateNode === null) throw Error(s(166));
                  return Ct(e), null;
                }
                t = K.current, Xl(e) ? Sd(e) : (t = Zm(i, a, n), e.stateNode = t, gn(e));
              }
              return Ct(e), null;
            case 5:
              if (Gi(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && gn(e);
              else {
                if (!a) {
                  if (e.stateNode === null) throw Error(s(166));
                  return Ct(e), null;
                }
                if (t = K.current, Xl(e)) Sd(e);
                else {
                  switch (i = Vu(I.current), t) {
                    case 1:
                      t = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      t = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          t = i.createElementNS("http://www.w3.org/2000/svg", n);
                          break;
                        case "math":
                          t = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                          break;
                        case "script":
                          t = i.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                          break;
                        case "select":
                          t = typeof a.is == "string" ? i.createElement("select", {
                            is: a.is
                          }) : i.createElement("select"), a.multiple ? t.multiple = true : a.size && (t.size = a.size);
                          break;
                        default:
                          t = typeof a.is == "string" ? i.createElement(n, {
                            is: a.is
                          }) : i.createElement(n);
                      }
                  }
                  t[ie] = e, t[fe] = a;
                  t: for (i = e.child; i !== null; ) {
                    if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
                    else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                      i.child.return = i, i = i.child;
                      continue;
                    }
                    if (i === e) break t;
                    for (; i.sibling === null; ) {
                      if (i.return === null || i.return === e) break t;
                      i = i.return;
                    }
                    i.sibling.return = i.return, i = i.sibling;
                  }
                  e.stateNode = t;
                  t: switch (ee(t, n, a), n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      t = !!a.autoFocus;
                      break t;
                    case "img":
                      t = true;
                      break t;
                    default:
                      t = false;
                  }
                  t && gn(e);
                }
              }
              return Ct(e), e.flags &= -16777217, null;
            case 6:
              if (t && e.stateNode != null) t.memoizedProps !== a && gn(e);
              else {
                if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
                if (t = I.current, Xl(e)) {
                  if (t = e.stateNode, n = e.memoizedProps, a = null, i = ce, i !== null) switch (i.tag) {
                    case 27:
                    case 5:
                      a = i.memoizedProps;
                  }
                  t[ie] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === true || jm(t.nodeValue, n)), t || fa(e);
                } else t = Vu(t).createTextNode(a), t[ie] = e, e.stateNode = t;
              }
              return Ct(e), null;
            case 13:
              if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (i = Xl(e), a !== null && a.dehydrated !== null) {
                  if (t === null) {
                    if (!i) throw Error(s(318));
                    if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
                    i[ie] = e;
                  } else Yl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                  Ct(e), i = false;
                } else i = Ad(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), i = true;
                if (!i) return e.flags & 256 ? (yn(e), e) : (yn(e), null);
              }
              if (yn(e), (e.flags & 128) !== 0) return e.lanes = n, e;
              if (n = a !== null, t = t !== null && t.memoizedState !== null, n) {
                a = e.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool);
                var r = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== i && (a.flags |= 2048);
              }
              return n !== t && n && (e.child.flags |= 8192), Cu(e, e.updateQueue), Ct(e), null;
            case 4:
              return Rn(), t === null && Xc(e.stateNode.containerInfo), Ct(e), null;
            case 10:
              return mn(e.type), Ct(e), null;
            case 19:
              if (X(Vt), i = e.memoizedState, i === null) return Ct(e), null;
              if (a = (e.flags & 128) !== 0, r = i.rendering, r === null) if (a) ai(i, false);
              else {
                if (Nt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
                  if (r = Ru(t), r !== null) {
                    for (e.flags |= 128, ai(i, false), t = r.updateQueue, e.updateQueue = t, Cu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) vd(n, t), n = n.sibling;
                    return H(Vt, Vt.current & 1 | 2), e.child;
                  }
                  t = t.sibling;
                }
                i.tail !== null && $e() > Nu && (e.flags |= 128, a = true, ai(i, false), e.lanes = 4194304);
              }
              else {
                if (!a) if (t = Ru(r), t !== null) {
                  if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, Cu(e, t), ai(i, true), i.tail === null && i.tailMode === "hidden" && !r.alternate && !yt) return Ct(e), null;
                } else 2 * $e() - i.renderingStartTime > Nu && n !== 536870912 && (e.flags |= 128, a = true, ai(i, false), e.lanes = 4194304);
                i.isBackwards ? (r.sibling = e.child, e.child = r) : (t = i.last, t !== null ? t.sibling = r : e.child = r, i.last = r);
              }
              return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = $e(), e.sibling = null, t = Vt.current, H(Vt, a ? t & 1 | 2 : t & 1), e) : (Ct(e), null);
            case 22:
            case 23:
              return yn(e), Gr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ct(e), n = e.updateQueue, n !== null && Cu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && X(ma), null;
            case 24:
              return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), mn(Qt), Ct(e), null;
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(s(156, e.tag));
        }
        function Hg(t, e) {
          switch (Or(e), e.tag) {
            case 1:
              return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
              return mn(Qt), Rn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
              return Gi(e), null;
            case 13:
              if (yn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(s(340));
                Yl();
              }
              return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
              return X(Vt), null;
            case 4:
              return Rn(), null;
            case 10:
              return mn(e.type), null;
            case 22:
            case 23:
              return yn(e), Gr(), t !== null && X(ma), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
              return mn(Qt), null;
            case 25:
              return null;
            default:
              return null;
          }
        }
        function kh(t, e) {
          switch (Or(e), e.tag) {
            case 3:
              mn(Qt), Rn();
              break;
            case 26:
            case 27:
            case 5:
              Gi(e);
              break;
            case 4:
              Rn();
              break;
            case 13:
              yn(e);
              break;
            case 19:
              X(Vt);
              break;
            case 10:
              mn(e.type);
              break;
            case 22:
            case 23:
              yn(e), Gr(), t !== null && X(ma);
              break;
            case 24:
              mn(Qt);
          }
        }
        function li(t, e) {
          try {
            var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
            if (a !== null) {
              var i = a.next;
              n = i;
              do {
                if ((n.tag & t) === t) {
                  a = void 0;
                  var r = n.create, f = n.inst;
                  a = r(), f.destroy = a;
                }
                n = n.next;
              } while (n !== i);
            }
          } catch (h) {
            xt(e, e.return, h);
          }
        }
        function qn(t, e, n) {
          try {
            var a = e.updateQueue, i = a !== null ? a.lastEffect : null;
            if (i !== null) {
              var r = i.next;
              a = r;
              do {
                if ((a.tag & t) === t) {
                  var f = a.inst, h = f.destroy;
                  if (h !== void 0) {
                    f.destroy = void 0, i = e;
                    var p = n, A = h;
                    try {
                      A();
                    } catch (M) {
                      xt(i, p, M);
                    }
                  }
                }
                a = a.next;
              } while (a !== r);
            }
          } catch (M) {
            xt(e, e.return, M);
          }
        }
        function Kh(t) {
          var e = t.updateQueue;
          if (e !== null) {
            var n = t.stateNode;
            try {
              Nd(e, n);
            } catch (a) {
              xt(t, t.return, a);
            }
          }
        }
        function Jh(t, e, n) {
          n.props = ya(t.type, t.memoizedProps), n.state = t.memoizedState;
          try {
            n.componentWillUnmount();
          } catch (a) {
            xt(t, e, a);
          }
        }
        function ii(t, e) {
          try {
            var n = t.ref;
            if (n !== null) {
              switch (t.tag) {
                case 26:
                case 27:
                case 5:
                  var a = t.stateNode;
                  break;
                case 30:
                  a = t.stateNode;
                  break;
                default:
                  a = t.stateNode;
              }
              typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
            }
          } catch (i) {
            xt(t, e, i);
          }
        }
        function Pe(t, e) {
          var n = t.ref, a = t.refCleanup;
          if (n !== null) if (typeof a == "function") try {
            a();
          } catch (i) {
            xt(t, e, i);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
          else if (typeof n == "function") try {
            n(null);
          } catch (i) {
            xt(t, e, i);
          }
          else n.current = null;
        }
        function $h(t) {
          var e = t.type, n = t.memoizedProps, a = t.stateNode;
          try {
            t: switch (e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && a.focus();
                break t;
              case "img":
                n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
            }
          } catch (i) {
            xt(t, t.return, i);
          }
        }
        function yc(t, e, n) {
          try {
            var a = t.stateNode;
            a0(a, t.type, n, e), a[fe] = e;
          } catch (i) {
            xt(t, t.return, i);
          }
        }
        function Fh(t) {
          return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Zn(t.type) || t.tag === 4;
        }
        function _c(t) {
          t: for (; ; ) {
            for (; t.sibling === null; ) {
              if (t.return === null || Fh(t.return)) return null;
              t = t.return;
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
              if (t.tag === 27 && Zn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
              t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) return t.stateNode;
          }
        }
        function gc(t, e, n) {
          var a = t.tag;
          if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Qu));
          else if (a !== 4 && (a === 27 && Zn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (gc(t, e, n), t = t.sibling; t !== null; ) gc(t, e, n), t = t.sibling;
        }
        function Uu(t, e, n) {
          var a = t.tag;
          if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
          else if (a !== 4 && (a === 27 && Zn(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (Uu(t, e, n), t = t.sibling; t !== null; ) Uu(t, e, n), t = t.sibling;
        }
        function Wh(t) {
          var e = t.stateNode, n = t.memoizedProps;
          try {
            for (var a = t.type, i = e.attributes; i.length; ) e.removeAttributeNode(i[0]);
            ee(e, a, n), e[ie] = t, e[fe] = n;
          } catch (r) {
            xt(t, t.return, r);
          }
        }
        var vn = false, qt = false, vc = false, Ph = typeof WeakSet == "function" ? WeakSet : Set, $t = null;
        function qg(t, e) {
          if (t = t.containerInfo, Qc = Fu, t = cd(t), _r(t)) {
            if ("selectionStart" in t) var n = {
              start: t.selectionStart,
              end: t.selectionEnd
            };
            else t: {
              n = (n = t.ownerDocument) && n.defaultView || window;
              var a = n.getSelection && n.getSelection();
              if (a && a.rangeCount !== 0) {
                n = a.anchorNode;
                var i = a.anchorOffset, r = a.focusNode;
                a = a.focusOffset;
                try {
                  n.nodeType, r.nodeType;
                } catch {
                  n = null;
                  break t;
                }
                var f = 0, h = -1, p = -1, A = 0, M = 0, U = t, E = null;
                e: for (; ; ) {
                  for (var T; U !== n || i !== 0 && U.nodeType !== 3 || (h = f + i), U !== r || a !== 0 && U.nodeType !== 3 || (p = f + a), U.nodeType === 3 && (f += U.nodeValue.length), (T = U.firstChild) !== null; ) E = U, U = T;
                  for (; ; ) {
                    if (U === t) break e;
                    if (E === n && ++A === i && (h = f), E === r && ++M === a && (p = f), (T = U.nextSibling) !== null) break;
                    U = E, E = U.parentNode;
                  }
                  U = T;
                }
                n = h === -1 || p === -1 ? null : {
                  start: h,
                  end: p
                };
              } else n = null;
            }
            n = n || {
              start: 0,
              end: 0
            };
          } else n = null;
          for (Vc = {
            focusedElem: t,
            selectionRange: n
          }, Fu = false, $t = e; $t !== null; ) if (e = $t, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, $t = t;
          else for (; $t !== null; ) {
            switch (e = $t, r = e.alternate, t = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && r !== null) {
                  t = void 0, n = e, i = r.memoizedProps, r = r.memoizedState, a = n.stateNode;
                  try {
                    var P = ya(n.type, i, n.elementType === n.type);
                    t = a.getSnapshotBeforeUpdate(P, r), a.__reactInternalSnapshotBeforeUpdate = t;
                  } catch (J) {
                    xt(n, n.return, J);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Kc(t);
                  else if (n === 1) switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((t & 1024) !== 0) throw Error(s(163));
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, $t = t;
              break;
            }
            $t = e.return;
          }
        }
        function Ih(t, e, n) {
          var a = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              jn(t, n), a & 4 && li(5, n);
              break;
            case 1:
              if (jn(t, n), a & 4) if (t = n.stateNode, e === null) try {
                t.componentDidMount();
              } catch (f) {
                xt(n, n.return, f);
              }
              else {
                var i = ya(n.type, e.memoizedProps);
                e = e.memoizedState;
                try {
                  t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate);
                } catch (f) {
                  xt(n, n.return, f);
                }
              }
              a & 64 && Kh(n), a & 512 && ii(n, n.return);
              break;
            case 3:
              if (jn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
                if (e = null, n.child !== null) switch (n.child.tag) {
                  case 27:
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
                try {
                  Nd(t, e);
                } catch (f) {
                  xt(n, n.return, f);
                }
              }
              break;
            case 27:
              e === null && a & 4 && Wh(n);
            case 26:
            case 5:
              jn(t, n), e === null && a & 4 && $h(n), a & 512 && ii(n, n.return);
              break;
            case 12:
              jn(t, n);
              break;
            case 13:
              jn(t, n), a & 4 && nm(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = kg.bind(null, n), o0(t, n))));
              break;
            case 22:
              if (a = n.memoizedState !== null || vn, !a) {
                e = e !== null && e.memoizedState !== null || qt, i = vn;
                var r = qt;
                vn = a, (qt = e) && !r ? Ln(t, n, (n.subtreeFlags & 8772) !== 0) : jn(t, n), vn = i, qt = r;
              }
              break;
            case 30:
              break;
            default:
              jn(t, n);
          }
        }
        function tm(t) {
          var e = t.alternate;
          e !== null && (t.alternate = null, tm(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ps(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
        }
        var Dt = null, me = false;
        function bn(t, e, n) {
          for (n = n.child; n !== null; ) em(t, e, n), n = n.sibling;
        }
        function em(t, e, n) {
          if (ge && typeof ge.onCommitFiberUnmount == "function") try {
            ge.onCommitFiberUnmount(Rl, n);
          } catch {
          }
          switch (n.tag) {
            case 26:
              qt || Pe(n, e), bn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
              break;
            case 27:
              qt || Pe(n, e);
              var a = Dt, i = me;
              Zn(n.type) && (Dt = n.stateNode, me = false), bn(t, e, n), mi(n.stateNode), Dt = a, me = i;
              break;
            case 5:
              qt || Pe(n, e);
            case 6:
              if (a = Dt, i = me, Dt = null, bn(t, e, n), Dt = a, me = i, Dt !== null) if (me) try {
                (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(n.stateNode);
              } catch (r) {
                xt(n, e, r);
              }
              else try {
                Dt.removeChild(n.stateNode);
              } catch (r) {
                xt(n, e, r);
              }
              break;
            case 18:
              Dt !== null && (me ? (t = Dt, Qm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), wi(t)) : Qm(Dt, n.stateNode));
              break;
            case 4:
              a = Dt, i = me, Dt = n.stateNode.containerInfo, me = true, bn(t, e, n), Dt = a, me = i;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              qt || qn(2, n, e), qt || qn(4, n, e), bn(t, e, n);
              break;
            case 1:
              qt || (Pe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Jh(n, e, a)), bn(t, e, n);
              break;
            case 21:
              bn(t, e, n);
              break;
            case 22:
              qt = (a = qt) || n.memoizedState !== null, bn(t, e, n), qt = a;
              break;
            default:
              bn(t, e, n);
          }
        }
        function nm(t, e) {
          if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            wi(t);
          } catch (n) {
            xt(e, e.return, n);
          }
        }
        function jg(t) {
          switch (t.tag) {
            case 13:
            case 19:
              var e = t.stateNode;
              return e === null && (e = t.stateNode = new Ph()), e;
            case 22:
              return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ph()), e;
            default:
              throw Error(s(435, t.tag));
          }
        }
        function bc(t, e) {
          var n = jg(t);
          e.forEach(function(a) {
            var i = Kg.bind(null, t, a);
            n.has(a) || (n.add(a), a.then(i, i));
          });
        }
        function we(t, e) {
          var n = e.deletions;
          if (n !== null) for (var a = 0; a < n.length; a++) {
            var i = n[a], r = t, f = e, h = f;
            t: for (; h !== null; ) {
              switch (h.tag) {
                case 27:
                  if (Zn(h.type)) {
                    Dt = h.stateNode, me = false;
                    break t;
                  }
                  break;
                case 5:
                  Dt = h.stateNode, me = false;
                  break t;
                case 3:
                case 4:
                  Dt = h.stateNode.containerInfo, me = true;
                  break t;
              }
              h = h.return;
            }
            if (Dt === null) throw Error(s(160));
            em(r, f, i), Dt = null, me = false, r = i.alternate, r !== null && (r.return = null), i.return = null;
          }
          if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) am(e, t), e = e.sibling;
        }
        var Qe = null;
        function am(t, e) {
          var n = t.alternate, a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              we(e, t), Ae(t), a & 4 && (qn(3, t, t.return), li(3, t), qn(5, t, t.return));
              break;
            case 1:
              we(e, t), Ae(t), a & 512 && (qt || n === null || Pe(n, n.return)), a & 64 && vn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
              break;
            case 26:
              var i = Qe;
              if (we(e, t), Ae(t), a & 512 && (qt || n === null || Pe(n, n.return)), a & 4) {
                var r = n !== null ? n.memoizedState : null;
                if (a = t.memoizedState, n === null) if (a === null) if (t.stateNode === null) {
                  t: {
                    a = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
                    e: switch (a) {
                      case "title":
                        r = i.getElementsByTagName("title")[0], (!r || r[Ml] || r[ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(a), i.head.insertBefore(r, i.querySelector("head > title"))), ee(r, a, n), r[ie] = t, Kt(r), a = r;
                        break t;
                      case "link":
                        var f = Wm("link", "href", i).get(a + (n.href || ""));
                        if (f) {
                          for (var h = 0; h < f.length; h++) if (r = f[h], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(h, 1);
                            break e;
                          }
                        }
                        r = i.createElement(a), ee(r, a, n), i.head.appendChild(r);
                        break;
                      case "meta":
                        if (f = Wm("meta", "content", i).get(a + (n.content || ""))) {
                          for (h = 0; h < f.length; h++) if (r = f[h], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(h, 1);
                            break e;
                          }
                        }
                        r = i.createElement(a), ee(r, a, n), i.head.appendChild(r);
                        break;
                      default:
                        throw Error(s(468, a));
                    }
                    r[ie] = t, Kt(r), a = r;
                  }
                  t.stateNode = a;
                } else Pm(i, t.type, t.stateNode);
                else t.stateNode = Fm(i, a, t.memoizedProps);
                else r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? Pm(i, t.type, t.stateNode) : Fm(i, a, t.memoizedProps)) : a === null && t.stateNode !== null && yc(t, t.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              we(e, t), Ae(t), a & 512 && (qt || n === null || Pe(n, n.return)), n !== null && a & 4 && yc(t, t.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (we(e, t), Ae(t), a & 512 && (qt || n === null || Pe(n, n.return)), t.flags & 32) {
                i = t.stateNode;
                try {
                  Ca(i, "");
                } catch (T) {
                  xt(t, t.return, T);
                }
              }
              a & 4 && t.stateNode != null && (i = t.memoizedProps, yc(t, i, n !== null ? n.memoizedProps : i)), a & 1024 && (vc = true);
              break;
            case 6:
              if (we(e, t), Ae(t), a & 4) {
                if (t.stateNode === null) throw Error(s(162));
                a = t.memoizedProps, n = t.stateNode;
                try {
                  n.nodeValue = a;
                } catch (T) {
                  xt(t, t.return, T);
                }
              }
              break;
            case 3:
              if (Ku = null, i = Qe, Qe = Zu(e.containerInfo), we(e, t), Qe = i, Ae(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                wi(e.containerInfo);
              } catch (T) {
                xt(t, t.return, T);
              }
              vc && (vc = false, lm(t));
              break;
            case 4:
              a = Qe, Qe = Zu(t.stateNode.containerInfo), we(e, t), Ae(t), Qe = a;
              break;
            case 12:
              we(e, t), Ae(t);
              break;
            case 13:
              we(e, t), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Rc = $e()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bc(t, a)));
              break;
            case 22:
              i = t.memoizedState !== null;
              var p = n !== null && n.memoizedState !== null, A = vn, M = qt;
              if (vn = A || i, qt = M || p, we(e, t), qt = M, vn = A, Ae(t), a & 8192) t: for (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, i && (n === null || p || vn || qt || _a(t)), n = null, e = t; ; ) {
                if (e.tag === 5 || e.tag === 26) {
                  if (n === null) {
                    p = n = e;
                    try {
                      if (r = p.stateNode, i) f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                      else {
                        h = p.stateNode;
                        var U = p.memoizedProps.style, E = U != null && U.hasOwnProperty("display") ? U.display : null;
                        h.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                      }
                    } catch (T) {
                      xt(p, p.return, T);
                    }
                  }
                } else if (e.tag === 6) {
                  if (n === null) {
                    p = e;
                    try {
                      p.stateNode.nodeValue = i ? "" : p.memoizedProps;
                    } catch (T) {
                      xt(p, p.return, T);
                    }
                  }
                } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                  e.child.return = e, e = e.child;
                  continue;
                }
                if (e === t) break t;
                for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t) break t;
                  n === e && (n = null), e = e.return;
                }
                n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
              }
              a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, bc(t, n))));
              break;
            case 19:
              we(e, t), Ae(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bc(t, a)));
              break;
            case 30:
              break;
            case 21:
              break;
            default:
              we(e, t), Ae(t);
          }
        }
        function Ae(t) {
          var e = t.flags;
          if (e & 2) {
            try {
              for (var n, a = t.return; a !== null; ) {
                if (Fh(a)) {
                  n = a;
                  break;
                }
                a = a.return;
              }
              if (n == null) throw Error(s(160));
              switch (n.tag) {
                case 27:
                  var i = n.stateNode, r = _c(t);
                  Uu(t, r, i);
                  break;
                case 5:
                  var f = n.stateNode;
                  n.flags & 32 && (Ca(f, ""), n.flags &= -33);
                  var h = _c(t);
                  Uu(t, h, f);
                  break;
                case 3:
                case 4:
                  var p = n.stateNode.containerInfo, A = _c(t);
                  gc(t, A, p);
                  break;
                default:
                  throw Error(s(161));
              }
            } catch (M) {
              xt(t, t.return, M);
            }
            t.flags &= -3;
          }
          e & 4096 && (t.flags &= -4097);
        }
        function lm(t) {
          if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
            var e = t;
            lm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
          }
        }
        function jn(t, e) {
          if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Ih(t, e.alternate, e), e = e.sibling;
        }
        function _a(t) {
          for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                qn(4, e, e.return), _a(e);
                break;
              case 1:
                Pe(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && Jh(e, e.return, n), _a(e);
                break;
              case 27:
                mi(e.stateNode);
              case 26:
              case 5:
                Pe(e, e.return), _a(e);
                break;
              case 22:
                e.memoizedState === null && _a(e);
                break;
              case 30:
                _a(e);
                break;
              default:
                _a(e);
            }
            t = t.sibling;
          }
        }
        function Ln(t, e, n) {
          for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
            var a = e.alternate, i = t, r = e, f = r.flags;
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Ln(i, r, n), li(4, r);
                break;
              case 1:
                if (Ln(i, r, n), a = r, i = a.stateNode, typeof i.componentDidMount == "function") try {
                  i.componentDidMount();
                } catch (A) {
                  xt(a, a.return, A);
                }
                if (a = r, i = a.updateQueue, i !== null) {
                  var h = a.stateNode;
                  try {
                    var p = i.shared.hiddenCallbacks;
                    if (p !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < p.length; i++) zd(p[i], h);
                  } catch (A) {
                    xt(a, a.return, A);
                  }
                }
                n && f & 64 && Kh(r), ii(r, r.return);
                break;
              case 27:
                Wh(r);
              case 26:
              case 5:
                Ln(i, r, n), n && a === null && f & 4 && $h(r), ii(r, r.return);
                break;
              case 12:
                Ln(i, r, n);
                break;
              case 13:
                Ln(i, r, n), n && f & 4 && nm(i, r);
                break;
              case 22:
                r.memoizedState === null && Ln(i, r, n), ii(r, r.return);
                break;
              case 30:
                break;
              default:
                Ln(i, r, n);
            }
            e = e.sibling;
          }
        }
        function Sc(t, e) {
          var n = null;
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Vl(n));
        }
        function wc(t, e) {
          t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vl(t));
        }
        function Ie(t, e, n, a) {
          if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) im(t, e, n, a), e = e.sibling;
        }
        function im(t, e, n, a) {
          var i = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ie(t, e, n, a), i & 2048 && li(9, e);
              break;
            case 1:
              Ie(t, e, n, a);
              break;
            case 3:
              Ie(t, e, n, a), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vl(t)));
              break;
            case 12:
              if (i & 2048) {
                Ie(t, e, n, a), t = e.stateNode;
                try {
                  var r = e.memoizedProps, f = r.id, h = r.onPostCommit;
                  typeof h == "function" && h(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                } catch (p) {
                  xt(e, e.return, p);
                }
              } else Ie(t, e, n, a);
              break;
            case 13:
              Ie(t, e, n, a);
              break;
            case 23:
              break;
            case 22:
              r = e.stateNode, f = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Ie(t, e, n, a) : ui(t, e) : r._visibility & 2 ? Ie(t, e, n, a) : (r._visibility |= 2, Fa(t, e, n, a, (e.subtreeFlags & 10256) !== 0)), i & 2048 && Sc(f, e);
              break;
            case 24:
              Ie(t, e, n, a), i & 2048 && wc(e.alternate, e);
              break;
            default:
              Ie(t, e, n, a);
          }
        }
        function Fa(t, e, n, a, i) {
          for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
            var r = t, f = e, h = n, p = a, A = f.flags;
            switch (f.tag) {
              case 0:
              case 11:
              case 15:
                Fa(r, f, h, p, i), li(8, f);
                break;
              case 23:
                break;
              case 22:
                var M = f.stateNode;
                f.memoizedState !== null ? M._visibility & 2 ? Fa(r, f, h, p, i) : ui(r, f) : (M._visibility |= 2, Fa(r, f, h, p, i)), i && A & 2048 && Sc(f.alternate, f);
                break;
              case 24:
                Fa(r, f, h, p, i), i && A & 2048 && wc(f.alternate, f);
                break;
              default:
                Fa(r, f, h, p, i);
            }
            e = e.sibling;
          }
        }
        function ui(t, e) {
          if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
            var n = t, a = e, i = a.flags;
            switch (a.tag) {
              case 22:
                ui(n, a), i & 2048 && Sc(a.alternate, a);
                break;
              case 24:
                ui(n, a), i & 2048 && wc(a.alternate, a);
                break;
              default:
                ui(n, a);
            }
            e = e.sibling;
          }
        }
        var si = 8192;
        function Wa(t) {
          if (t.subtreeFlags & si) for (t = t.child; t !== null; ) um(t), t = t.sibling;
        }
        function um(t) {
          switch (t.tag) {
            case 26:
              Wa(t), t.flags & si && t.memoizedState !== null && A0(Qe, t.memoizedState, t.memoizedProps);
              break;
            case 5:
              Wa(t);
              break;
            case 3:
            case 4:
              var e = Qe;
              Qe = Zu(t.stateNode.containerInfo), Wa(t), Qe = e;
              break;
            case 22:
              t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = si, si = 16777216, Wa(t), si = e) : Wa(t));
              break;
            default:
              Wa(t);
          }
        }
        function sm(t) {
          var e = t.alternate;
          if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do
              e = t.sibling, t.sibling = null, t = e;
            while (t !== null);
          }
        }
        function ri(t) {
          var e = t.deletions;
          if ((t.flags & 16) !== 0) {
            if (e !== null) for (var n = 0; n < e.length; n++) {
              var a = e[n];
              $t = a, cm(a, t);
            }
            sm(t);
          }
          if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) rm(t), t = t.sibling;
        }
        function rm(t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ri(t), t.flags & 2048 && qn(9, t, t.return);
              break;
            case 3:
              ri(t);
              break;
            case 12:
              ri(t);
              break;
            case 22:
              var e = t.stateNode;
              t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, zu(t)) : ri(t);
              break;
            default:
              ri(t);
          }
        }
        function zu(t) {
          var e = t.deletions;
          if ((t.flags & 16) !== 0) {
            if (e !== null) for (var n = 0; n < e.length; n++) {
              var a = e[n];
              $t = a, cm(a, t);
            }
            sm(t);
          }
          for (t = t.child; t !== null; ) {
            switch (e = t, e.tag) {
              case 0:
              case 11:
              case 15:
                qn(8, e, e.return), zu(e);
                break;
              case 22:
                n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, zu(e));
                break;
              default:
                zu(e);
            }
            t = t.sibling;
          }
        }
        function cm(t, e) {
          for (; $t !== null; ) {
            var n = $t;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                qn(8, n, e);
                break;
              case 23:
              case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                  var a = n.memoizedState.cachePool.pool;
                  a != null && a.refCount++;
                }
                break;
              case 24:
                Vl(n.memoizedState.cache);
            }
            if (a = n.child, a !== null) a.return = n, $t = a;
            else t: for (n = t; $t !== null; ) {
              a = $t;
              var i = a.sibling, r = a.return;
              if (tm(a), a === n) {
                $t = null;
                break t;
              }
              if (i !== null) {
                i.return = r, $t = i;
                break t;
              }
              $t = r;
            }
          }
        }
        var Lg = {
          getCacheForType: function(t) {
            var e = ue(Qt), n = e.data.get(t);
            return n === void 0 && (n = t(), e.data.set(t, n)), n;
          }
        }, Xg = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Ot = null, rt = null, dt = 0, bt = 0, Ee = null, Xn = false, Pa = false, Ac = false, Sn = 0, Nt = 0, Yn = 0, ga = 0, Ec = 0, je = 0, Ia = 0, ci = null, pe = null, Tc = false, Rc = 0, Nu = 1 / 0, Bu = null, Gn = null, te = 0, Qn = null, tl = null, el = 0, xc = 0, Oc = null, om = null, oi = 0, Mc = null;
        function Te() {
          if ((vt & 2) !== 0 && dt !== 0) return dt & -dt;
          if (D.T !== null) {
            var t = Ga;
            return t !== 0 ? t : Hc();
          }
          return Rf();
        }
        function fm() {
          je === 0 && (je = (dt & 536870912) === 0 || yt ? wf() : 536870912);
          var t = qe.current;
          return t !== null && (t.flags |= 32), je;
        }
        function Re(t, e, n) {
          (t === Ot && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null) && (nl(t, 0), Vn(t, dt, je, false)), Ol(t, n), ((vt & 2) === 0 || t !== Ot) && (t === Ot && ((vt & 2) === 0 && (ga |= n), Nt === 4 && Vn(t, dt, je, false)), tn(t));
        }
        function dm(t, e, n) {
          if ((vt & 6) !== 0) throw Error(s(327));
          var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || xl(t, e), i = a ? Qg(t, e) : Uc(t, e, true), r = a;
          do {
            if (i === 0) {
              Pa && !a && Vn(t, e, 0, false);
              break;
            } else {
              if (n = t.current.alternate, r && !Yg(n)) {
                i = Uc(t, e, false), r = false;
                continue;
              }
              if (i === 2) {
                if (r = e, t.errorRecoveryDisabledLanes & r) var f = 0;
                else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                if (f !== 0) {
                  e = f;
                  t: {
                    var h = t;
                    i = ci;
                    var p = h.current.memoizedState.isDehydrated;
                    if (p && (nl(h, f).flags |= 256), f = Uc(h, f, false), f !== 2) {
                      if (Ac && !p) {
                        h.errorRecoveryDisabledLanes |= r, ga |= r, i = 4;
                        break t;
                      }
                      r = pe, pe = i, r !== null && (pe === null ? pe = r : pe.push.apply(pe, r));
                    }
                    i = f;
                  }
                  if (r = false, i !== 2) continue;
                }
              }
              if (i === 1) {
                nl(t, 0), Vn(t, e, 0, true);
                break;
              }
              t: {
                switch (a = t, r = i, r) {
                  case 0:
                  case 1:
                    throw Error(s(345));
                  case 4:
                    if ((e & 4194048) !== e) break;
                  case 6:
                    Vn(a, e, je, !Xn);
                    break t;
                  case 2:
                    pe = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(s(329));
                }
                if ((e & 62914560) === e && (i = Rc + 300 - $e(), 10 < i)) {
                  if (Vn(a, e, je, !Xn), ki(a, 0, true) !== 0) break t;
                  a.timeoutHandle = Ym(hm.bind(null, a, n, pe, Bu, Tc, e, je, ga, Ia, Xn, r, 2, -0, 0), i);
                  break t;
                }
                hm(a, n, pe, Bu, Tc, e, je, ga, Ia, Xn, r, 0, -0, 0);
              }
            }
            break;
          } while (true);
          tn(t);
        }
        function hm(t, e, n, a, i, r, f, h, p, A, M, U, E, T) {
          if (t.timeoutHandle = -1, U = e.subtreeFlags, (U & 8192 || (U & 16785408) === 16785408) && (_i = {
            stylesheets: null,
            count: 0,
            unsuspend: w0
          }, um(e), U = E0(), U !== null)) {
            t.cancelPendingCommit = U(bm.bind(null, t, e, r, n, a, i, f, h, p, M, 1, E, T)), Vn(t, r, f, !A);
            return;
          }
          bm(t, e, r, n, a, i, f, h, p);
        }
        function Yg(t) {
          for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
              var i = n[a], r = i.getSnapshot;
              i = i.value;
              try {
                if (!be(r(), i)) return false;
              } catch {
                return false;
              }
            }
            if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
            else {
              if (e === t) break;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return true;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
          }
          return true;
        }
        function Vn(t, e, n, a) {
          e &= ~Ec, e &= ~ga, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
          for (var i = e; 0 < i; ) {
            var r = 31 - ve(i), f = 1 << r;
            a[r] = -1, i &= ~f;
          }
          n !== 0 && Ef(t, n, e);
        }
        function Hu() {
          return (vt & 6) === 0 ? (fi(0), false) : true;
        }
        function Dc() {
          if (rt !== null) {
            if (bt === 0) var t = rt.return;
            else t = rt, hn = da = null, Kr(t), Ja = null, ei = 0, t = rt;
            for (; t !== null; ) kh(t.alternate, t), t = t.return;
            rt = null;
          }
        }
        function nl(t, e) {
          var n = t.timeoutHandle;
          n !== -1 && (t.timeoutHandle = -1, i0(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Dc(), Ot = t, rt = n = on(t.current, null), dt = e, bt = 0, Ee = null, Xn = false, Pa = xl(t, e), Ac = false, Ia = je = Ec = ga = Yn = Nt = 0, pe = ci = null, Tc = false, (e & 8) !== 0 && (e |= e & 32);
          var a = t.entangledLanes;
          if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
            var i = 31 - ve(a), r = 1 << i;
            e |= t[i], a &= ~r;
          }
          return Sn = e, lu(), n;
        }
        function mm(t, e) {
          lt = null, D.H = Au, e === kl || e === hu ? (e = Cd(), bt = 3) : e === Od ? (e = Cd(), bt = 4) : bt = e === Uh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ee = e, rt === null && (Nt = 1, Ou(t, ze(e, t.current)));
        }
        function pm() {
          var t = D.H;
          return D.H = Au, t === null ? Au : t;
        }
        function ym() {
          var t = D.A;
          return D.A = Lg, t;
        }
        function Cc() {
          Nt = 4, Xn || (dt & 4194048) !== dt && qe.current !== null || (Pa = true), (Yn & 134217727) === 0 && (ga & 134217727) === 0 || Ot === null || Vn(Ot, dt, je, false);
        }
        function Uc(t, e, n) {
          var a = vt;
          vt |= 2;
          var i = pm(), r = ym();
          (Ot !== t || dt !== e) && (Bu = null, nl(t, e)), e = false;
          var f = Nt;
          t: do
            try {
              if (bt !== 0 && rt !== null) {
                var h = rt, p = Ee;
                switch (bt) {
                  case 8:
                    Dc(), f = 6;
                    break t;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    qe.current === null && (e = true);
                    var A = bt;
                    if (bt = 0, Ee = null, al(t, h, p, A), n && Pa) {
                      f = 0;
                      break t;
                    }
                    break;
                  default:
                    A = bt, bt = 0, Ee = null, al(t, h, p, A);
                }
              }
              Gg(), f = Nt;
              break;
            } catch (M) {
              mm(t, M);
            }
          while (true);
          return e && t.shellSuspendCounter++, hn = da = null, vt = a, D.H = i, D.A = r, rt === null && (Ot = null, dt = 0, lu()), f;
        }
        function Gg() {
          for (; rt !== null; ) _m(rt);
        }
        function Qg(t, e) {
          var n = vt;
          vt |= 2;
          var a = pm(), i = ym();
          Ot !== t || dt !== e ? (Bu = null, Nu = $e() + 500, nl(t, e)) : Pa = xl(t, e);
          t: do
            try {
              if (bt !== 0 && rt !== null) {
                e = rt;
                var r = Ee;
                e: switch (bt) {
                  case 1:
                    bt = 0, Ee = null, al(t, e, r, 1);
                    break;
                  case 2:
                  case 9:
                    if (Md(r)) {
                      bt = 0, Ee = null, gm(e);
                      break;
                    }
                    e = function() {
                      bt !== 2 && bt !== 9 || Ot !== t || (bt = 7), tn(t);
                    }, r.then(e, e);
                    break t;
                  case 3:
                    bt = 7;
                    break t;
                  case 4:
                    bt = 5;
                    break t;
                  case 7:
                    Md(r) ? (bt = 0, Ee = null, gm(e)) : (bt = 0, Ee = null, al(t, e, r, 7));
                    break;
                  case 5:
                    var f = null;
                    switch (rt.tag) {
                      case 26:
                        f = rt.memoizedState;
                      case 5:
                      case 27:
                        var h = rt;
                        if (!f || Im(f)) {
                          bt = 0, Ee = null;
                          var p = h.sibling;
                          if (p !== null) rt = p;
                          else {
                            var A = h.return;
                            A !== null ? (rt = A, qu(A)) : rt = null;
                          }
                          break e;
                        }
                    }
                    bt = 0, Ee = null, al(t, e, r, 5);
                    break;
                  case 6:
                    bt = 0, Ee = null, al(t, e, r, 6);
                    break;
                  case 8:
                    Dc(), Nt = 6;
                    break t;
                  default:
                    throw Error(s(462));
                }
              }
              Vg();
              break;
            } catch (M) {
              mm(t, M);
            }
          while (true);
          return hn = da = null, D.H = a, D.A = i, vt = n, rt !== null ? 0 : (Ot = null, dt = 0, lu(), Nt);
        }
        function Vg() {
          for (; rt !== null && !d_(); ) _m(rt);
        }
        function _m(t) {
          var e = Vh(t.alternate, t, Sn);
          t.memoizedProps = t.pendingProps, e === null ? qu(t) : rt = e;
        }
        function gm(t) {
          var e = t, n = e.alternate;
          switch (e.tag) {
            case 15:
            case 0:
              e = jh(n, e, e.pendingProps, e.type, void 0, dt);
              break;
            case 11:
              e = jh(n, e, e.pendingProps, e.type.render, e.ref, dt);
              break;
            case 5:
              Kr(e);
            default:
              kh(n, e), e = rt = vd(e, Sn), e = Vh(n, e, Sn);
          }
          t.memoizedProps = t.pendingProps, e === null ? qu(t) : rt = e;
        }
        function al(t, e, n, a) {
          hn = da = null, Kr(e), Ja = null, ei = 0;
          var i = e.return;
          try {
            if (zg(t, i, e, n, dt)) {
              Nt = 1, Ou(t, ze(n, t.current)), rt = null;
              return;
            }
          } catch (r) {
            if (i !== null) throw rt = i, r;
            Nt = 1, Ou(t, ze(n, t.current)), rt = null;
            return;
          }
          e.flags & 32768 ? (yt || a === 1 ? t = true : Pa || (dt & 536870912) !== 0 ? t = false : (Xn = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = qe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), vm(e, t)) : qu(e);
        }
        function qu(t) {
          var e = t;
          do {
            if ((e.flags & 32768) !== 0) {
              vm(e, Xn);
              return;
            }
            t = e.return;
            var n = Bg(e.alternate, e, Sn);
            if (n !== null) {
              rt = n;
              return;
            }
            if (e = e.sibling, e !== null) {
              rt = e;
              return;
            }
            rt = e = t;
          } while (e !== null);
          Nt === 0 && (Nt = 5);
        }
        function vm(t, e) {
          do {
            var n = Hg(t.alternate, t);
            if (n !== null) {
              n.flags &= 32767, rt = n;
              return;
            }
            if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
              rt = t;
              return;
            }
            rt = t = n;
          } while (t !== null);
          Nt = 6, rt = null;
        }
        function bm(t, e, n, a, i, r, f, h, p) {
          t.cancelPendingCommit = null;
          do
            ju();
          while (te !== 0);
          if ((vt & 6) !== 0) throw Error(s(327));
          if (e !== null) {
            if (e === t.current) throw Error(s(177));
            if (r = e.lanes | e.childLanes, r |= wr, w_(t, n, r, f, h, p), t === Ot && (rt = Ot = null, dt = 0), tl = e, Qn = t, el = n, xc = r, Oc = i, om = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Jg(Qi, function() {
              return Tm(), null;
            })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
              a = D.T, D.T = null, i = q.p, q.p = 2, f = vt, vt |= 4;
              try {
                qg(t, e, n);
              } finally {
                vt = f, q.p = i, D.T = a;
              }
            }
            te = 1, Sm(), wm(), Am();
          }
        }
        function Sm() {
          if (te === 1) {
            te = 0;
            var t = Qn, e = tl, n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
              n = D.T, D.T = null;
              var a = q.p;
              q.p = 2;
              var i = vt;
              vt |= 4;
              try {
                am(e, t);
                var r = Vc, f = cd(t.containerInfo), h = r.focusedElem, p = r.selectionRange;
                if (f !== h && h && h.ownerDocument && rd(h.ownerDocument.documentElement, h)) {
                  if (p !== null && _r(h)) {
                    var A = p.start, M = p.end;
                    if (M === void 0 && (M = A), "selectionStart" in h) h.selectionStart = A, h.selectionEnd = Math.min(M, h.value.length);
                    else {
                      var U = h.ownerDocument || document, E = U && U.defaultView || window;
                      if (E.getSelection) {
                        var T = E.getSelection(), P = h.textContent.length, J = Math.min(p.start, P), At = p.end === void 0 ? J : Math.min(p.end, P);
                        !T.extend && J > At && (f = At, At = J, J = f);
                        var b = sd(h, J), g = sd(h, At);
                        if (b && g && (T.rangeCount !== 1 || T.anchorNode !== b.node || T.anchorOffset !== b.offset || T.focusNode !== g.node || T.focusOffset !== g.offset)) {
                          var w = U.createRange();
                          w.setStart(b.node, b.offset), T.removeAllRanges(), J > At ? (T.addRange(w), T.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), T.addRange(w));
                        }
                      }
                    }
                  }
                  for (U = [], T = h; T = T.parentNode; ) T.nodeType === 1 && U.push({
                    element: T,
                    left: T.scrollLeft,
                    top: T.scrollTop
                  });
                  for (typeof h.focus == "function" && h.focus(), h = 0; h < U.length; h++) {
                    var C = U[h];
                    C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
                  }
                }
                Fu = !!Qc, Vc = Qc = null;
              } finally {
                vt = i, q.p = a, D.T = n;
              }
            }
            t.current = e, te = 2;
          }
        }
        function wm() {
          if (te === 2) {
            te = 0;
            var t = Qn, e = tl, n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
              n = D.T, D.T = null;
              var a = q.p;
              q.p = 2;
              var i = vt;
              vt |= 4;
              try {
                Ih(t, e.alternate, e);
              } finally {
                vt = i, q.p = a, D.T = n;
              }
            }
            te = 3;
          }
        }
        function Am() {
          if (te === 4 || te === 3) {
            te = 0, h_();
            var t = Qn, e = tl, n = el, a = om;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, tl = Qn = null, Em(t, t.pendingLanes));
            var i = t.pendingLanes;
            if (i === 0 && (Gn = null), Fs(n), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function") try {
              ge.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
            } catch {
            }
            if (a !== null) {
              e = D.T, i = q.p, q.p = 2, D.T = null;
              try {
                for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
                  var h = a[f];
                  r(h.value, {
                    componentStack: h.stack
                  });
                }
              } finally {
                D.T = e, q.p = i;
              }
            }
            (el & 3) !== 0 && ju(), tn(t), i = t.pendingLanes, (n & 4194090) !== 0 && (i & 42) !== 0 ? t === Mc ? oi++ : (oi = 0, Mc = t) : oi = 0, fi(0);
          }
        }
        function Em(t, e) {
          (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Vl(e)));
        }
        function ju(t) {
          return Sm(), wm(), Am(), Tm();
        }
        function Tm() {
          if (te !== 5) return false;
          var t = Qn, e = xc;
          xc = 0;
          var n = Fs(el), a = D.T, i = q.p;
          try {
            q.p = 32 > n ? 32 : n, D.T = null, n = Oc, Oc = null;
            var r = Qn, f = el;
            if (te = 0, tl = Qn = null, el = 0, (vt & 6) !== 0) throw Error(s(331));
            var h = vt;
            if (vt |= 4, rm(r.current), im(r, r.current, f, n), vt = h, fi(0, false), ge && typeof ge.onPostCommitFiberRoot == "function") try {
              ge.onPostCommitFiberRoot(Rl, r);
            } catch {
            }
            return true;
          } finally {
            q.p = i, D.T = a, Em(t, e);
          }
        }
        function Rm(t, e, n) {
          e = ze(n, e), e = sc(t.stateNode, e, 2), t = zn(t, e, 2), t !== null && (Ol(t, 2), tn(t));
        }
        function xt(t, e, n) {
          if (t.tag === 3) Rm(t, t, n);
          else for (; e !== null; ) {
            if (e.tag === 3) {
              Rm(e, t, n);
              break;
            } else if (e.tag === 1) {
              var a = e.stateNode;
              if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Gn === null || !Gn.has(a))) {
                t = ze(n, t), n = Dh(2), a = zn(e, n, 2), a !== null && (Ch(n, a, e, t), Ol(a, 2), tn(a));
                break;
              }
            }
            e = e.return;
          }
        }
        function zc(t, e, n) {
          var a = t.pingCache;
          if (a === null) {
            a = t.pingCache = new Xg();
            var i = /* @__PURE__ */ new Set();
            a.set(e, i);
          } else i = a.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(e, i));
          i.has(n) || (Ac = true, i.add(n), t = Zg.bind(null, t, e, n), e.then(t, t));
        }
        function Zg(t, e, n) {
          var a = t.pingCache;
          a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ot === t && (dt & n) === n && (Nt === 4 || Nt === 3 && (dt & 62914560) === dt && 300 > $e() - Rc ? (vt & 2) === 0 && nl(t, 0) : Ec |= n, Ia === dt && (Ia = 0)), tn(t);
        }
        function xm(t, e) {
          e === 0 && (e = Af()), t = ja(t, e), t !== null && (Ol(t, e), tn(t));
        }
        function kg(t) {
          var e = t.memoizedState, n = 0;
          e !== null && (n = e.retryLane), xm(t, n);
        }
        function Kg(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var a = t.stateNode, i = t.memoizedState;
              i !== null && (n = i.retryLane);
              break;
            case 19:
              a = t.stateNode;
              break;
            case 22:
              a = t.stateNode._retryCache;
              break;
            default:
              throw Error(s(314));
          }
          a !== null && a.delete(e), xm(t, n);
        }
        function Jg(t, e) {
          return ks(t, e);
        }
        var Lu = null, ll = null, Nc = false, Xu = false, Bc = false, va = 0;
        function tn(t) {
          t !== ll && t.next === null && (ll === null ? Lu = ll = t : ll = ll.next = t), Xu = true, Nc || (Nc = true, Fg());
        }
        function fi(t, e) {
          if (!Bc && Xu) {
            Bc = true;
            do
              for (var n = false, a = Lu; a !== null; ) {
                if (t !== 0) {
                  var i = a.pendingLanes;
                  if (i === 0) var r = 0;
                  else {
                    var f = a.suspendedLanes, h = a.pingedLanes;
                    r = (1 << 31 - ve(42 | t) + 1) - 1, r &= i & ~(f & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                  }
                  r !== 0 && (n = true, Cm(a, r));
                } else r = dt, r = ki(a, a === Ot ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (r & 3) === 0 || xl(a, r) || (n = true, Cm(a, r));
                a = a.next;
              }
            while (n);
            Bc = false;
          }
        }
        function $g() {
          Om();
        }
        function Om() {
          Xu = Nc = false;
          var t = 0;
          va !== 0 && (l0() && (t = va), va = 0);
          for (var e = $e(), n = null, a = Lu; a !== null; ) {
            var i = a.next, r = Mm(a, e);
            r === 0 ? (a.next = null, n === null ? Lu = i : n.next = i, i === null && (ll = n)) : (n = a, (t !== 0 || (r & 3) !== 0) && (Xu = true)), a = i;
          }
          fi(t);
        }
        function Mm(t, e) {
          for (var n = t.suspendedLanes, a = t.pingedLanes, i = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
            var f = 31 - ve(r), h = 1 << f, p = i[f];
            p === -1 ? ((h & n) === 0 || (h & a) !== 0) && (i[f] = S_(h, e)) : p <= e && (t.expiredLanes |= h), r &= ~h;
          }
          if (e = Ot, n = dt, n = ki(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Ks(a), t.callbackNode = null, t.callbackPriority = 0;
          if ((n & 3) === 0 || xl(t, n)) {
            if (e = n & -n, e === t.callbackPriority) return e;
            switch (a !== null && Ks(a), Fs(n)) {
              case 2:
              case 8:
                n = bf;
                break;
              case 32:
                n = Qi;
                break;
              case 268435456:
                n = Sf;
                break;
              default:
                n = Qi;
            }
            return a = Dm.bind(null, t), n = ks(n, a), t.callbackPriority = e, t.callbackNode = n, e;
          }
          return a !== null && a !== null && Ks(a), t.callbackPriority = 2, t.callbackNode = null, 2;
        }
        function Dm(t, e) {
          if (te !== 0 && te !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
          var n = t.callbackNode;
          if (ju() && t.callbackNode !== n) return null;
          var a = dt;
          return a = ki(t, t === Ot ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (dm(t, a, e), Mm(t, $e()), t.callbackNode != null && t.callbackNode === n ? Dm.bind(null, t) : null);
        }
        function Cm(t, e) {
          if (ju()) return null;
          dm(t, e, true);
        }
        function Fg() {
          u0(function() {
            (vt & 6) !== 0 ? ks(vf, $g) : Om();
          });
        }
        function Hc() {
          return va === 0 && (va = wf()), va;
        }
        function Um(t) {
          return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Wi("" + t);
        }
        function zm(t, e) {
          var n = e.ownerDocument.createElement("input");
          return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
        }
        function Wg(t, e, n, a, i) {
          if (e === "submit" && n && n.stateNode === i) {
            var r = Um((i[fe] || null).action), f = a.submitter;
            f && (e = (e = f[fe] || null) ? Um(e.formAction) : f.getAttribute("formAction"), e !== null && (r = e, f = null));
            var h = new eu("action", "action", null, a, i);
            t.push({
              event: h,
              listeners: [
                {
                  instance: null,
                  listener: function() {
                    if (a.defaultPrevented) {
                      if (va !== 0) {
                        var p = f ? zm(i, f) : new FormData(i);
                        nc(n, {
                          pending: true,
                          data: p,
                          method: i.method,
                          action: r
                        }, null, p);
                      }
                    } else typeof r == "function" && (h.preventDefault(), p = f ? zm(i, f) : new FormData(i), nc(n, {
                      pending: true,
                      data: p,
                      method: i.method,
                      action: r
                    }, r, p));
                  },
                  currentTarget: i
                }
              ]
            });
          }
        }
        for (var qc = 0; qc < Sr.length; qc++) {
          var jc = Sr[qc], Pg = jc.toLowerCase(), Ig = jc[0].toUpperCase() + jc.slice(1);
          Ge(Pg, "on" + Ig);
        }
        Ge(dd, "onAnimationEnd"), Ge(hd, "onAnimationIteration"), Ge(md, "onAnimationStart"), Ge("dblclick", "onDoubleClick"), Ge("focusin", "onFocus"), Ge("focusout", "onBlur"), Ge(yg, "onTransitionRun"), Ge(_g, "onTransitionStart"), Ge(gg, "onTransitionCancel"), Ge(pd, "onTransitionEnd"), Oa("onMouseEnter", [
          "mouseout",
          "mouseover"
        ]), Oa("onMouseLeave", [
          "mouseout",
          "mouseover"
        ]), Oa("onPointerEnter", [
          "pointerout",
          "pointerover"
        ]), Oa("onPointerLeave", [
          "pointerout",
          "pointerover"
        ]), aa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), aa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), aa("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste"
        ]), aa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), aa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), aa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), t0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));
        function Nm(t, e) {
          e = (e & 4) !== 0;
          for (var n = 0; n < t.length; n++) {
            var a = t[n], i = a.event;
            a = a.listeners;
            t: {
              var r = void 0;
              if (e) for (var f = a.length - 1; 0 <= f; f--) {
                var h = a[f], p = h.instance, A = h.currentTarget;
                if (h = h.listener, p !== r && i.isPropagationStopped()) break t;
                r = h, i.currentTarget = A;
                try {
                  r(i);
                } catch (M) {
                  xu(M);
                }
                i.currentTarget = null, r = p;
              }
              else for (f = 0; f < a.length; f++) {
                if (h = a[f], p = h.instance, A = h.currentTarget, h = h.listener, p !== r && i.isPropagationStopped()) break t;
                r = h, i.currentTarget = A;
                try {
                  r(i);
                } catch (M) {
                  xu(M);
                }
                i.currentTarget = null, r = p;
              }
            }
          }
        }
        function ct(t, e) {
          var n = e[Ws];
          n === void 0 && (n = e[Ws] = /* @__PURE__ */ new Set());
          var a = t + "__bubble";
          n.has(a) || (Bm(e, t, 2, false), n.add(a));
        }
        function Lc(t, e, n) {
          var a = 0;
          e && (a |= 4), Bm(n, t, a, e);
        }
        var Yu = "_reactListening" + Math.random().toString(36).slice(2);
        function Xc(t) {
          if (!t[Yu]) {
            t[Yu] = true, Of.forEach(function(n) {
              n !== "selectionchange" && (t0.has(n) || Lc(n, false, t), Lc(n, true, t));
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Yu] || (e[Yu] = true, Lc("selectionchange", false, e));
          }
        }
        function Bm(t, e, n, a) {
          switch (ip(e)) {
            case 2:
              var i = x0;
              break;
            case 8:
              i = O0;
              break;
            default:
              i = to;
          }
          n = i.bind(null, e, n, t), i = void 0, !rr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), a ? i !== void 0 ? t.addEventListener(e, n, {
            capture: true,
            passive: i
          }) : t.addEventListener(e, n, true) : i !== void 0 ? t.addEventListener(e, n, {
            passive: i
          }) : t.addEventListener(e, n, false);
        }
        function Yc(t, e, n, a, i) {
          var r = a;
          if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
            if (a === null) return;
            var f = a.tag;
            if (f === 3 || f === 4) {
              var h = a.stateNode.containerInfo;
              if (h === i) break;
              if (f === 4) for (f = a.return; f !== null; ) {
                var p = f.tag;
                if ((p === 3 || p === 4) && f.stateNode.containerInfo === i) return;
                f = f.return;
              }
              for (; h !== null; ) {
                if (f = Ta(h), f === null) return;
                if (p = f.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                  a = r = f;
                  continue t;
                }
                h = h.parentNode;
              }
            }
            a = a.return;
          }
          Gf(function() {
            var A = r, M = ur(n), U = [];
            t: {
              var E = yd.get(t);
              if (E !== void 0) {
                var T = eu, P = t;
                switch (t) {
                  case "keypress":
                    if (Ii(n) === 0) break t;
                  case "keydown":
                  case "keyup":
                    T = J_;
                    break;
                  case "focusin":
                    P = "focus", T = dr;
                    break;
                  case "focusout":
                    P = "blur", T = dr;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    T = dr;
                    break;
                  case "click":
                    if (n.button === 2) break t;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    T = Zf;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    T = H_;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    T = W_;
                    break;
                  case dd:
                  case hd:
                  case md:
                    T = L_;
                    break;
                  case pd:
                    T = I_;
                    break;
                  case "scroll":
                  case "scrollend":
                    T = N_;
                    break;
                  case "wheel":
                    T = eg;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    T = Y_;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    T = Kf;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    T = ag;
                }
                var J = (e & 4) !== 0, At = !J && (t === "scroll" || t === "scrollend"), b = J ? E !== null ? E + "Capture" : null : E;
                J = [];
                for (var g = A, w; g !== null; ) {
                  var C = g;
                  if (w = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || w === null || b === null || (C = Cl(g, b), C != null && J.push(hi(g, C, w))), At) break;
                  g = g.return;
                }
                0 < J.length && (E = new T(E, P, null, n, M), U.push({
                  event: E,
                  listeners: J
                }));
              }
            }
            if ((e & 7) === 0) {
              t: {
                if (E = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", E && n !== ir && (P = n.relatedTarget || n.fromElement) && (Ta(P) || P[Ea])) break t;
                if ((T || E) && (E = M.window === M ? M : (E = M.ownerDocument) ? E.defaultView || E.parentWindow : window, T ? (P = n.relatedTarget || n.toElement, T = A, P = P ? Ta(P) : null, P !== null && (At = d(P), J = P.tag, P !== At || J !== 5 && J !== 27 && J !== 6) && (P = null)) : (T = null, P = A), T !== P)) {
                  if (J = Zf, C = "onMouseLeave", b = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (J = Kf, C = "onPointerLeave", b = "onPointerEnter", g = "pointer"), At = T == null ? E : Dl(T), w = P == null ? E : Dl(P), E = new J(C, g + "leave", T, n, M), E.target = At, E.relatedTarget = w, C = null, Ta(M) === A && (J = new J(b, g + "enter", P, n, M), J.target = w, J.relatedTarget = At, C = J), At = C, T && P) e: {
                    for (J = T, b = P, g = 0, w = J; w; w = il(w)) g++;
                    for (w = 0, C = b; C; C = il(C)) w++;
                    for (; 0 < g - w; ) J = il(J), g--;
                    for (; 0 < w - g; ) b = il(b), w--;
                    for (; g--; ) {
                      if (J === b || b !== null && J === b.alternate) break e;
                      J = il(J), b = il(b);
                    }
                    J = null;
                  }
                  else J = null;
                  T !== null && Hm(U, E, T, J, false), P !== null && At !== null && Hm(U, At, P, J, true);
                }
              }
              t: {
                if (E = A ? Dl(A) : window, T = E.nodeName && E.nodeName.toLowerCase(), T === "select" || T === "input" && E.type === "file") var Y = ed;
                else if (If(E)) if (nd) Y = hg;
                else {
                  Y = fg;
                  var it = og;
                }
                else T = E.nodeName, !T || T.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? A && lr(A.elementType) && (Y = ed) : Y = dg;
                if (Y && (Y = Y(t, A))) {
                  td(U, Y, n, M);
                  break t;
                }
                it && it(t, E, A), t === "focusout" && A && E.type === "number" && A.memoizedProps.value != null && ar(E, "number", E.value);
              }
              switch (it = A ? Dl(A) : window, t) {
                case "focusin":
                  (If(it) || it.contentEditable === "true") && (Ba = it, gr = A, Ll = null);
                  break;
                case "focusout":
                  Ll = gr = Ba = null;
                  break;
                case "mousedown":
                  vr = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  vr = false, od(U, n, M);
                  break;
                case "selectionchange":
                  if (pg) break;
                case "keydown":
                case "keyup":
                  od(U, n, M);
              }
              var Z;
              if (mr) t: {
                switch (t) {
                  case "compositionstart":
                    var $ = "onCompositionStart";
                    break t;
                  case "compositionend":
                    $ = "onCompositionEnd";
                    break t;
                  case "compositionupdate":
                    $ = "onCompositionUpdate";
                    break t;
                }
                $ = void 0;
              }
              else Na ? Wf(t, n) && ($ = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
              $ && (Jf && n.locale !== "ko" && (Na || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Na && (Z = Qf()) : (Mn = M, cr = "value" in Mn ? Mn.value : Mn.textContent, Na = true)), it = Gu(A, $), 0 < it.length && ($ = new kf($, t, null, n, M), U.push({
                event: $,
                listeners: it
              }), Z ? $.data = Z : (Z = Pf(n), Z !== null && ($.data = Z)))), (Z = ig ? ug(t, n) : sg(t, n)) && ($ = Gu(A, "onBeforeInput"), 0 < $.length && (it = new kf("onBeforeInput", "beforeinput", null, n, M), U.push({
                event: it,
                listeners: $
              }), it.data = Z)), Wg(U, t, A, n, M);
            }
            Nm(U, e);
          });
        }
        function hi(t, e, n) {
          return {
            instance: t,
            listener: e,
            currentTarget: n
          };
        }
        function Gu(t, e) {
          for (var n = e + "Capture", a = []; t !== null; ) {
            var i = t, r = i.stateNode;
            if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || r === null || (i = Cl(t, n), i != null && a.unshift(hi(t, i, r)), i = Cl(t, e), i != null && a.push(hi(t, i, r))), t.tag === 3) return a;
            t = t.return;
          }
          return [];
        }
        function il(t) {
          if (t === null) return null;
          do
            t = t.return;
          while (t && t.tag !== 5 && t.tag !== 27);
          return t || null;
        }
        function Hm(t, e, n, a, i) {
          for (var r = e._reactName, f = []; n !== null && n !== a; ) {
            var h = n, p = h.alternate, A = h.stateNode;
            if (h = h.tag, p !== null && p === a) break;
            h !== 5 && h !== 26 && h !== 27 || A === null || (p = A, i ? (A = Cl(n, r), A != null && f.unshift(hi(n, A, p))) : i || (A = Cl(n, r), A != null && f.push(hi(n, A, p)))), n = n.return;
          }
          f.length !== 0 && t.push({
            event: e,
            listeners: f
          });
        }
        var e0 = /\r\n?/g, n0 = /\u0000|\uFFFD/g;
        function qm(t) {
          return (typeof t == "string" ? t : "" + t).replace(e0, `
`).replace(n0, "");
        }
        function jm(t, e) {
          return e = qm(e), qm(t) === e;
        }
        function Qu() {
        }
        function wt(t, e, n, a, i, r) {
          switch (n) {
            case "children":
              typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ca(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ca(t, "" + a);
              break;
            case "className":
              Ji(t, "class", a);
              break;
            case "tabIndex":
              Ji(t, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              Ji(t, n, a);
              break;
            case "style":
              Xf(t, a, r);
              break;
            case "data":
              if (e !== "object") {
                Ji(t, "data", a);
                break;
              }
            case "src":
            case "href":
              if (a === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break;
              }
              if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break;
              }
              a = Wi("" + a), t.setAttribute(n, a);
              break;
            case "action":
            case "formAction":
              if (typeof a == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
              } else typeof r == "function" && (n === "formAction" ? (e !== "input" && wt(t, e, "name", i.name, i, null), wt(t, e, "formEncType", i.formEncType, i, null), wt(t, e, "formMethod", i.formMethod, i, null), wt(t, e, "formTarget", i.formTarget, i, null)) : (wt(t, e, "encType", i.encType, i, null), wt(t, e, "method", i.method, i, null), wt(t, e, "target", i.target, i, null)));
              if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break;
              }
              a = Wi("" + a), t.setAttribute(n, a);
              break;
            case "onClick":
              a != null && (t.onclick = Qu);
              break;
            case "onScroll":
              a != null && ct("scroll", t);
              break;
            case "onScrollEnd":
              a != null && ct("scrollend", t);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                if (n = a.__html, n != null) {
                  if (i.children != null) throw Error(s(60));
                  t.innerHTML = n;
                }
              }
              break;
            case "multiple":
              t.multiple = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "muted":
              t.muted = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
              break;
            case "autoFocus":
              break;
            case "xlinkHref":
              if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break;
              }
              n = Wi("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
              break;
            case "capture":
            case "download":
              a === true ? t.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
              break;
            case "popover":
              ct("beforetoggle", t), ct("toggle", t), Ki(t, "popover", a);
              break;
            case "xlinkActuate":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
              break;
            case "xlinkArcrole":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
              break;
            case "xlinkRole":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
              break;
            case "xlinkShow":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
              break;
            case "xlinkTitle":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
              break;
            case "xlinkType":
              rn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
              break;
            case "xmlBase":
              rn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
              break;
            case "xmlLang":
              rn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
              break;
            case "xmlSpace":
              rn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
              break;
            case "is":
              Ki(t, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = U_.get(n) || n, Ki(t, n, a));
          }
        }
        function Gc(t, e, n, a, i, r) {
          switch (n) {
            case "style":
              Xf(t, a, r);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                if (n = a.__html, n != null) {
                  if (i.children != null) throw Error(s(60));
                  t.innerHTML = n;
                }
              }
              break;
            case "children":
              typeof a == "string" ? Ca(t, a) : (typeof a == "number" || typeof a == "bigint") && Ca(t, "" + a);
              break;
            case "onScroll":
              a != null && ct("scroll", t);
              break;
            case "onScrollEnd":
              a != null && ct("scrollend", t);
              break;
            case "onClick":
              a != null && (t.onclick = Qu);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              if (!Mf.hasOwnProperty(n)) t: {
                if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), r = t[fe] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, i), typeof a == "function")) {
                  typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, i);
                  break t;
                }
                n in t ? t[n] = a : a === true ? t.setAttribute(n, "") : Ki(t, n, a);
              }
          }
        }
        function ee(t, e, n) {
          switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              ct("error", t), ct("load", t);
              var a = false, i = false, r;
              for (r in n) if (n.hasOwnProperty(r)) {
                var f = n[r];
                if (f != null) switch (r) {
                  case "src":
                    a = true;
                    break;
                  case "srcSet":
                    i = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(s(137, e));
                  default:
                    wt(t, e, r, f, n, null);
                }
              }
              i && wt(t, e, "srcSet", n.srcSet, n, null), a && wt(t, e, "src", n.src, n, null);
              return;
            case "input":
              ct("invalid", t);
              var h = r = f = i = null, p = null, A = null;
              for (a in n) if (n.hasOwnProperty(a)) {
                var M = n[a];
                if (M != null) switch (a) {
                  case "name":
                    i = M;
                    break;
                  case "type":
                    f = M;
                    break;
                  case "checked":
                    p = M;
                    break;
                  case "defaultChecked":
                    A = M;
                    break;
                  case "value":
                    r = M;
                    break;
                  case "defaultValue":
                    h = M;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (M != null) throw Error(s(137, e));
                    break;
                  default:
                    wt(t, e, a, M, n, null);
                }
              }
              Hf(t, r, h, p, A, f, i, false), $i(t);
              return;
            case "select":
              ct("invalid", t), a = f = r = null;
              for (i in n) if (n.hasOwnProperty(i) && (h = n[i], h != null)) switch (i) {
                case "value":
                  r = h;
                  break;
                case "defaultValue":
                  f = h;
                  break;
                case "multiple":
                  a = h;
                default:
                  wt(t, e, i, h, n, null);
              }
              e = r, n = f, t.multiple = !!a, e != null ? Da(t, !!a, e, false) : n != null && Da(t, !!a, n, true);
              return;
            case "textarea":
              ct("invalid", t), r = i = a = null;
              for (f in n) if (n.hasOwnProperty(f) && (h = n[f], h != null)) switch (f) {
                case "value":
                  a = h;
                  break;
                case "defaultValue":
                  i = h;
                  break;
                case "children":
                  r = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null) throw Error(s(91));
                  break;
                default:
                  wt(t, e, f, h, n, null);
              }
              jf(t, a, i, r), $i(t);
              return;
            case "option":
              for (p in n) if (n.hasOwnProperty(p) && (a = n[p], a != null)) switch (p) {
                case "selected":
                  t.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  wt(t, e, p, a, n, null);
              }
              return;
            case "dialog":
              ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
              break;
            case "iframe":
            case "object":
              ct("load", t);
              break;
            case "video":
            case "audio":
              for (a = 0; a < di.length; a++) ct(di[a], t);
              break;
            case "image":
              ct("error", t), ct("load", t);
              break;
            case "details":
              ct("toggle", t);
              break;
            case "embed":
            case "source":
            case "link":
              ct("error", t), ct("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (A in n) if (n.hasOwnProperty(A) && (a = n[A], a != null)) switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  wt(t, e, A, a, n, null);
              }
              return;
            default:
              if (lr(e)) {
                for (M in n) n.hasOwnProperty(M) && (a = n[M], a !== void 0 && Gc(t, e, M, a, n, void 0));
                return;
              }
          }
          for (h in n) n.hasOwnProperty(h) && (a = n[h], a != null && wt(t, e, h, a, n, null));
        }
        function a0(t, e, n, a) {
          switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var i = null, r = null, f = null, h = null, p = null, A = null, M = null;
              for (T in n) {
                var U = n[T];
                if (n.hasOwnProperty(T) && U != null) switch (T) {
                  case "checked":
                    break;
                  case "value":
                    break;
                  case "defaultValue":
                    p = U;
                  default:
                    a.hasOwnProperty(T) || wt(t, e, T, null, a, U);
                }
              }
              for (var E in a) {
                var T = a[E];
                if (U = n[E], a.hasOwnProperty(E) && (T != null || U != null)) switch (E) {
                  case "type":
                    r = T;
                    break;
                  case "name":
                    i = T;
                    break;
                  case "checked":
                    A = T;
                    break;
                  case "defaultChecked":
                    M = T;
                    break;
                  case "value":
                    f = T;
                    break;
                  case "defaultValue":
                    h = T;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (T != null) throw Error(s(137, e));
                    break;
                  default:
                    T !== U && wt(t, e, E, T, a, U);
                }
              }
              nr(t, f, h, p, A, M, r, i);
              return;
            case "select":
              T = f = h = E = null;
              for (r in n) if (p = n[r], n.hasOwnProperty(r) && p != null) switch (r) {
                case "value":
                  break;
                case "multiple":
                  T = p;
                default:
                  a.hasOwnProperty(r) || wt(t, e, r, null, a, p);
              }
              for (i in a) if (r = a[i], p = n[i], a.hasOwnProperty(i) && (r != null || p != null)) switch (i) {
                case "value":
                  E = r;
                  break;
                case "defaultValue":
                  h = r;
                  break;
                case "multiple":
                  f = r;
                default:
                  r !== p && wt(t, e, i, r, a, p);
              }
              e = h, n = f, a = T, E != null ? Da(t, !!n, E, false) : !!a != !!n && (e != null ? Da(t, !!n, e, true) : Da(t, !!n, n ? [] : "", false));
              return;
            case "textarea":
              T = E = null;
              for (h in n) if (i = n[h], n.hasOwnProperty(h) && i != null && !a.hasOwnProperty(h)) switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  wt(t, e, h, null, a, i);
              }
              for (f in a) if (i = a[f], r = n[f], a.hasOwnProperty(f) && (i != null || r != null)) switch (f) {
                case "value":
                  E = i;
                  break;
                case "defaultValue":
                  T = i;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (i != null) throw Error(s(91));
                  break;
                default:
                  i !== r && wt(t, e, f, i, a, r);
              }
              qf(t, E, T);
              return;
            case "option":
              for (var P in n) if (E = n[P], n.hasOwnProperty(P) && E != null && !a.hasOwnProperty(P)) switch (P) {
                case "selected":
                  t.selected = false;
                  break;
                default:
                  wt(t, e, P, null, a, E);
              }
              for (p in a) if (E = a[p], T = n[p], a.hasOwnProperty(p) && E !== T && (E != null || T != null)) switch (p) {
                case "selected":
                  t.selected = E && typeof E != "function" && typeof E != "symbol";
                  break;
                default:
                  wt(t, e, p, E, a, T);
              }
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var J in n) E = n[J], n.hasOwnProperty(J) && E != null && !a.hasOwnProperty(J) && wt(t, e, J, null, a, E);
              for (A in a) if (E = a[A], T = n[A], a.hasOwnProperty(A) && E !== T && (E != null || T != null)) switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null) throw Error(s(137, e));
                  break;
                default:
                  wt(t, e, A, E, a, T);
              }
              return;
            default:
              if (lr(e)) {
                for (var At in n) E = n[At], n.hasOwnProperty(At) && E !== void 0 && !a.hasOwnProperty(At) && Gc(t, e, At, void 0, a, E);
                for (M in a) E = a[M], T = n[M], !a.hasOwnProperty(M) || E === T || E === void 0 && T === void 0 || Gc(t, e, M, E, a, T);
                return;
              }
          }
          for (var b in n) E = n[b], n.hasOwnProperty(b) && E != null && !a.hasOwnProperty(b) && wt(t, e, b, null, a, E);
          for (U in a) E = a[U], T = n[U], !a.hasOwnProperty(U) || E === T || E == null && T == null || wt(t, e, U, E, a, T);
        }
        var Qc = null, Vc = null;
        function Vu(t) {
          return t.nodeType === 9 ? t : t.ownerDocument;
        }
        function Lm(t) {
          switch (t) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Xm(t, e) {
          if (t === 0) switch (e) {
            case "svg":
              return 1;
            case "math":
              return 2;
            default:
              return 0;
          }
          return t === 1 && e === "foreignObject" ? 0 : t;
        }
        function Zc(t, e) {
          return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
        }
        var kc = null;
        function l0() {
          var t = window.event;
          return t && t.type === "popstate" ? t === kc ? false : (kc = t, true) : (kc = null, false);
        }
        var Ym = typeof setTimeout == "function" ? setTimeout : void 0, i0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Gm = typeof Promise == "function" ? Promise : void 0, u0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gm < "u" ? function(t) {
          return Gm.resolve(null).then(t).catch(s0);
        } : Ym;
        function s0(t) {
          setTimeout(function() {
            throw t;
          });
        }
        function Zn(t) {
          return t === "head";
        }
        function Qm(t, e) {
          var n = e, a = 0, i = 0;
          do {
            var r = n.nextSibling;
            if (t.removeChild(n), r && r.nodeType === 8) if (n = r.data, n === "/$") {
              if (0 < a && 8 > a) {
                n = a;
                var f = t.ownerDocument;
                if (n & 1 && mi(f.documentElement), n & 2 && mi(f.body), n & 4) for (n = f.head, mi(n), f = n.firstChild; f; ) {
                  var h = f.nextSibling, p = f.nodeName;
                  f[Ml] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f), f = h;
                }
              }
              if (i === 0) {
                t.removeChild(r), wi(e);
                return;
              }
              i--;
            } else n === "$" || n === "$?" || n === "$!" ? i++ : a = n.charCodeAt(0) - 48;
            else a = 0;
            n = r;
          } while (n);
          wi(e);
        }
        function Kc(t) {
          var e = t.firstChild;
          for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling, n.nodeName) {
              case "HTML":
              case "HEAD":
              case "BODY":
                Kc(n), Ps(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if (n.rel.toLowerCase() === "stylesheet") continue;
            }
            t.removeChild(n);
          }
        }
        function r0(t, e, n, a) {
          for (; t.nodeType === 1; ) {
            var i = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
              if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
            } else if (a) {
              if (!t[Ml]) switch (e) {
                case "meta":
                  if (!t.hasAttribute("itemprop")) break;
                  return t;
                case "link":
                  if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence")) break;
                  if (r !== i.rel || t.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title)) break;
                  return t;
                case "style":
                  if (t.hasAttribute("data-precedence")) break;
                  return t;
                case "script":
                  if (r = t.getAttribute("src"), (r !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                  return t;
                default:
                  return t;
              }
            } else if (e === "input" && t.type === "hidden") {
              var r = i.name == null ? null : "" + i.name;
              if (i.type === "hidden" && t.getAttribute("name") === r) return t;
            } else return t;
            if (t = Ve(t.nextSibling), t === null) break;
          }
          return null;
        }
        function c0(t, e, n) {
          if (e === "") return null;
          for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ve(t.nextSibling), t === null)) return null;
          return t;
        }
        function Jc(t) {
          return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
        }
        function o0(t, e) {
          var n = t.ownerDocument;
          if (t.data !== "$?" || n.readyState === "complete") e();
          else {
            var a = function() {
              e(), n.removeEventListener("DOMContentLoaded", a);
            };
            n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
          }
        }
        function Ve(t) {
          for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
              if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
              if (e === "/$") return null;
            }
          }
          return t;
        }
        var $c = null;
        function Vm(t) {
          t = t.previousSibling;
          for (var e = 0; t; ) {
            if (t.nodeType === 8) {
              var n = t.data;
              if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--;
              } else n === "/$" && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        function Zm(t, e, n) {
          switch (e = Vu(n), t) {
            case "html":
              if (t = e.documentElement, !t) throw Error(s(452));
              return t;
            case "head":
              if (t = e.head, !t) throw Error(s(453));
              return t;
            case "body":
              if (t = e.body, !t) throw Error(s(454));
              return t;
            default:
              throw Error(s(451));
          }
        }
        function mi(t) {
          for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
          Ps(t);
        }
        var Le = /* @__PURE__ */ new Map(), km = /* @__PURE__ */ new Set();
        function Zu(t) {
          return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
        }
        var wn = q.d;
        q.d = {
          f: f0,
          r: d0,
          D: h0,
          C: m0,
          L: p0,
          m: y0,
          X: g0,
          S: _0,
          M: v0
        };
        function f0() {
          var t = wn.f(), e = Hu();
          return t || e;
        }
        function d0(t) {
          var e = Ra(t);
          e !== null && e.tag === 5 && e.type === "form" ? dh(e) : wn.r(t);
        }
        var ul = typeof document > "u" ? null : document;
        function Km(t, e, n) {
          var a = ul;
          if (a && typeof e == "string" && e) {
            var i = Ue(e);
            i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), km.has(i) || (km.add(i), t = {
              rel: t,
              crossOrigin: n,
              href: e
            }, a.querySelector(i) === null && (e = a.createElement("link"), ee(e, "link", t), Kt(e), a.head.appendChild(e)));
          }
        }
        function h0(t) {
          wn.D(t), Km("dns-prefetch", t, null);
        }
        function m0(t, e) {
          wn.C(t, e), Km("preconnect", t, e);
        }
        function p0(t, e, n) {
          wn.L(t, e, n);
          var a = ul;
          if (a && t && e) {
            var i = 'link[rel="preload"][as="' + Ue(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ue(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ue(n.imageSizes) + '"]')) : i += '[href="' + Ue(t) + '"]';
            var r = i;
            switch (e) {
              case "style":
                r = sl(t);
                break;
              case "script":
                r = rl(t);
            }
            Le.has(r) || (t = R({
              rel: "preload",
              href: e === "image" && n && n.imageSrcSet ? void 0 : t,
              as: e
            }, n), Le.set(r, t), a.querySelector(i) !== null || e === "style" && a.querySelector(pi(r)) || e === "script" && a.querySelector(yi(r)) || (e = a.createElement("link"), ee(e, "link", t), Kt(e), a.head.appendChild(e)));
          }
        }
        function y0(t, e) {
          wn.m(t, e);
          var n = ul;
          if (n && t) {
            var a = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + Ue(a) + '"][href="' + Ue(t) + '"]', r = i;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                r = rl(t);
            }
            if (!Le.has(r) && (t = R({
              rel: "modulepreload",
              href: t
            }, e), Le.set(r, t), n.querySelector(i) === null)) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (n.querySelector(yi(r))) return;
              }
              a = n.createElement("link"), ee(a, "link", t), Kt(a), n.head.appendChild(a);
            }
          }
        }
        function _0(t, e, n) {
          wn.S(t, e, n);
          var a = ul;
          if (a && t) {
            var i = xa(a).hoistableStyles, r = sl(t);
            e = e || "default";
            var f = i.get(r);
            if (!f) {
              var h = {
                loading: 0,
                preload: null
              };
              if (f = a.querySelector(pi(r))) h.loading = 5;
              else {
                t = R({
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                }, n), (n = Le.get(r)) && Fc(t, n);
                var p = f = a.createElement("link");
                Kt(p), ee(p, "link", t), p._p = new Promise(function(A, M) {
                  p.onload = A, p.onerror = M;
                }), p.addEventListener("load", function() {
                  h.loading |= 1;
                }), p.addEventListener("error", function() {
                  h.loading |= 2;
                }), h.loading |= 4, ku(f, e, a);
              }
              f = {
                type: "stylesheet",
                instance: f,
                count: 1,
                state: h
              }, i.set(r, f);
            }
          }
        }
        function g0(t, e) {
          wn.X(t, e);
          var n = ul;
          if (n && t) {
            var a = xa(n).hoistableScripts, i = rl(t), r = a.get(i);
            r || (r = n.querySelector(yi(i)), r || (t = R({
              src: t,
              async: true
            }, e), (e = Le.get(i)) && Wc(t, e), r = n.createElement("script"), Kt(r), ee(r, "link", t), n.head.appendChild(r)), r = {
              type: "script",
              instance: r,
              count: 1,
              state: null
            }, a.set(i, r));
          }
        }
        function v0(t, e) {
          wn.M(t, e);
          var n = ul;
          if (n && t) {
            var a = xa(n).hoistableScripts, i = rl(t), r = a.get(i);
            r || (r = n.querySelector(yi(i)), r || (t = R({
              src: t,
              async: true,
              type: "module"
            }, e), (e = Le.get(i)) && Wc(t, e), r = n.createElement("script"), Kt(r), ee(r, "link", t), n.head.appendChild(r)), r = {
              type: "script",
              instance: r,
              count: 1,
              state: null
            }, a.set(i, r));
          }
        }
        function Jm(t, e, n, a) {
          var i = (i = I.current) ? Zu(i) : null;
          if (!i) throw Error(s(446));
          switch (t) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof n.precedence == "string" && typeof n.href == "string" ? (e = sl(n.href), n = xa(i).hoistableStyles, a = n.get(e), a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
              }, n.set(e, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
              };
            case "link":
              if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = sl(n.href);
                var r = xa(i).hoistableStyles, f = r.get(t);
                if (f || (i = i.ownerDocument || i, f = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: {
                    loading: 0,
                    preload: null
                  }
                }, r.set(t, f), (r = i.querySelector(pi(t))) && !r._p && (f.instance = r, f.state.loading = 5), Le.has(t) || (n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy
                }, Le.set(t, n), r || b0(i, t, n, f.state))), e && a === null) throw Error(s(528, ""));
                return f;
              }
              if (e && a !== null) throw Error(s(529, ""));
              return null;
            case "script":
              return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = rl(n), n = xa(i).hoistableScripts, a = n.get(e), a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }, n.set(e, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
              };
            default:
              throw Error(s(444, t));
          }
        }
        function sl(t) {
          return 'href="' + Ue(t) + '"';
        }
        function pi(t) {
          return 'link[rel="stylesheet"][' + t + "]";
        }
        function $m(t) {
          return R({}, t, {
            "data-precedence": t.precedence,
            precedence: null
          });
        }
        function b0(t, e, n, a) {
          t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
            return a.loading |= 1;
          }), e.addEventListener("error", function() {
            return a.loading |= 2;
          }), ee(e, "link", n), Kt(e), t.head.appendChild(e));
        }
        function rl(t) {
          return '[src="' + Ue(t) + '"]';
        }
        function yi(t) {
          return "script[async]" + t;
        }
        function Fm(t, e, n) {
          if (e.count++, e.instance === null) switch (e.type) {
            case "style":
              var a = t.querySelector('style[data-href~="' + Ue(n.href) + '"]');
              if (a) return e.instance = a, Kt(a), a;
              var i = R({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null
              });
              return a = (t.ownerDocument || t).createElement("style"), Kt(a), ee(a, "style", i), ku(a, n.precedence, t), e.instance = a;
            case "stylesheet":
              i = sl(n.href);
              var r = t.querySelector(pi(i));
              if (r) return e.state.loading |= 4, e.instance = r, Kt(r), r;
              a = $m(n), (i = Le.get(i)) && Fc(a, i), r = (t.ownerDocument || t).createElement("link"), Kt(r);
              var f = r;
              return f._p = new Promise(function(h, p) {
                f.onload = h, f.onerror = p;
              }), ee(r, "link", a), e.state.loading |= 4, ku(r, n.precedence, t), e.instance = r;
            case "script":
              return r = rl(n.src), (i = t.querySelector(yi(r))) ? (e.instance = i, Kt(i), i) : (a = n, (i = Le.get(r)) && (a = R({}, n), Wc(a, i)), t = t.ownerDocument || t, i = t.createElement("script"), Kt(i), ee(i, "link", a), t.head.appendChild(i), e.instance = i);
            case "void":
              return null;
            default:
              throw Error(s(443, e.type));
          }
          else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, ku(a, n.precedence, t));
          return e.instance;
        }
        function ku(t, e, n) {
          for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = a.length ? a[a.length - 1] : null, r = i, f = 0; f < a.length; f++) {
            var h = a[f];
            if (h.dataset.precedence === e) r = h;
            else if (r !== i) break;
          }
          r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
        }
        function Fc(t, e) {
          t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
        }
        function Wc(t, e) {
          t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
        }
        var Ku = null;
        function Wm(t, e, n) {
          if (Ku === null) {
            var a = /* @__PURE__ */ new Map(), i = Ku = /* @__PURE__ */ new Map();
            i.set(n, a);
          } else i = Ku, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
          if (a.has(t)) return a;
          for (a.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
            var r = n[i];
            if (!(r[Ml] || r[ie] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
              var f = r.getAttribute(e) || "";
              f = t + f;
              var h = a.get(f);
              h ? h.push(r) : a.set(f, [
                r
              ]);
            }
          }
          return a;
        }
        function Pm(t, e, n) {
          t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
        }
        function S0(t, e, n) {
          if (n === 1 || e.itemProp != null) return false;
          switch (t) {
            case "meta":
            case "title":
              return true;
            case "style":
              if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
              return true;
            case "link":
              if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
              switch (e.rel) {
                case "stylesheet":
                  return t = e.disabled, typeof e.precedence == "string" && t == null;
                default:
                  return true;
              }
            case "script":
              if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
          }
          return false;
        }
        function Im(t) {
          return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
        }
        var _i = null;
        function w0() {
        }
        function A0(t, e, n) {
          if (_i === null) throw Error(s(475));
          var a = _i;
          if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
              var i = sl(n.href), r = t.querySelector(pi(i));
              if (r) {
                t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Ju.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = r, Kt(r);
                return;
              }
              r = t.ownerDocument || t, n = $m(n), (i = Le.get(i)) && Fc(n, i), r = r.createElement("link"), Kt(r);
              var f = r;
              f._p = new Promise(function(h, p) {
                f.onload = h, f.onerror = p;
              }), ee(r, "link", n), e.instance = r;
            }
            a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Ju.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
          }
        }
        function E0() {
          if (_i === null) throw Error(s(475));
          var t = _i;
          return t.stylesheets && t.count === 0 && Pc(t, t.stylesheets), 0 < t.count ? function(e) {
            var n = setTimeout(function() {
              if (t.stylesheets && Pc(t, t.stylesheets), t.unsuspend) {
                var a = t.unsuspend;
                t.unsuspend = null, a();
              }
            }, 6e4);
            return t.unsuspend = e, function() {
              t.unsuspend = null, clearTimeout(n);
            };
          } : null;
        }
        function Ju() {
          if (this.count--, this.count === 0) {
            if (this.stylesheets) Pc(this, this.stylesheets);
            else if (this.unsuspend) {
              var t = this.unsuspend;
              this.unsuspend = null, t();
            }
          }
        }
        var $u = null;
        function Pc(t, e) {
          t.stylesheets = null, t.unsuspend !== null && (t.count++, $u = /* @__PURE__ */ new Map(), e.forEach(T0, t), $u = null, Ju.call(t));
        }
        function T0(t, e) {
          if (!(e.state.loading & 4)) {
            var n = $u.get(t);
            if (n) var a = n.get(null);
            else {
              n = /* @__PURE__ */ new Map(), $u.set(t, n);
              for (var i = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < i.length; r++) {
                var f = i[r];
                (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
              }
              a && n.set(null, a);
            }
            i = e.instance, f = i.getAttribute("data-precedence"), r = n.get(f) || a, r === a && n.set(null, i), n.set(f, i), this.count++, a = Ju.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), r ? r.parentNode.insertBefore(i, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
          }
        }
        var gi = {
          $$typeof: tt,
          Provider: null,
          Consumer: null,
          _currentValue: F,
          _currentValue2: F,
          _threadCount: 0
        };
        function R0(t, e, n, a, i, r, f, h) {
          this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Js(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Js(0), this.hiddenUpdates = Js(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }
        function tp(t, e, n, a, i, r, f, h, p, A, M, U) {
          return t = new R0(t, e, n, f, h, p, A, U), e = 1, r === true && (e |= 24), r = Se(3, null, null, e), t.current = r, r.stateNode = t, e = zr(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: e
          }, qr(r), t;
        }
        function ep(t) {
          return t ? (t = La, t) : La;
        }
        function np(t, e, n, a, i, r) {
          i = ep(i), a.context === null ? a.context = i : a.pendingContext = i, a = Un(e), a.payload = {
            element: n
          }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = zn(t, a, e), n !== null && (Re(n, t, e), Jl(n, t, e));
        }
        function ap(t, e) {
          if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e;
          }
        }
        function Ic(t, e) {
          ap(t, e), (t = t.alternate) && ap(t, e);
        }
        function lp(t) {
          if (t.tag === 13) {
            var e = ja(t, 67108864);
            e !== null && Re(e, t, 67108864), Ic(t, 67108864);
          }
        }
        var Fu = true;
        function x0(t, e, n, a) {
          var i = D.T;
          D.T = null;
          var r = q.p;
          try {
            q.p = 2, to(t, e, n, a);
          } finally {
            q.p = r, D.T = i;
          }
        }
        function O0(t, e, n, a) {
          var i = D.T;
          D.T = null;
          var r = q.p;
          try {
            q.p = 8, to(t, e, n, a);
          } finally {
            q.p = r, D.T = i;
          }
        }
        function to(t, e, n, a) {
          if (Fu) {
            var i = eo(a);
            if (i === null) Yc(t, e, a, Wu, n), up(t, a);
            else if (D0(i, t, e, n, a)) a.stopPropagation();
            else if (up(t, a), e & 4 && -1 < M0.indexOf(t)) {
              for (; i !== null; ) {
                var r = Ra(i);
                if (r !== null) switch (r.tag) {
                  case 3:
                    if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                      var f = na(r.pendingLanes);
                      if (f !== 0) {
                        var h = r;
                        for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                          var p = 1 << 31 - ve(f);
                          h.entanglements[1] |= p, f &= ~p;
                        }
                        tn(r), (vt & 6) === 0 && (Nu = $e() + 500, fi(0));
                      }
                    }
                    break;
                  case 13:
                    h = ja(r, 2), h !== null && Re(h, r, 2), Hu(), Ic(r, 2);
                }
                if (r = eo(a), r === null && Yc(t, e, a, Wu, n), r === i) break;
                i = r;
              }
              i !== null && a.stopPropagation();
            } else Yc(t, e, a, null, n);
          }
        }
        function eo(t) {
          return t = ur(t), no(t);
        }
        var Wu = null;
        function no(t) {
          if (Wu = null, t = Ta(t), t !== null) {
            var e = d(t);
            if (e === null) t = null;
            else {
              var n = e.tag;
              if (n === 13) {
                if (t = m(e), t !== null) return t;
                t = null;
              } else if (n === 3) {
                if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                t = null;
              } else e !== t && (t = null);
            }
          }
          return Wu = t, null;
        }
        function ip(t) {
          switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (m_()) {
                case vf:
                  return 2;
                case bf:
                  return 8;
                case Qi:
                case p_:
                  return 32;
                case Sf:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var ao = false, kn = null, Kn = null, Jn = null, vi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), $n = [], M0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function up(t, e) {
          switch (t) {
            case "focusin":
            case "focusout":
              kn = null;
              break;
            case "dragenter":
            case "dragleave":
              Kn = null;
              break;
            case "mouseover":
            case "mouseout":
              Jn = null;
              break;
            case "pointerover":
            case "pointerout":
              vi.delete(e.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              bi.delete(e.pointerId);
          }
        }
        function Si(t, e, n, a, i, r) {
          return t === null || t.nativeEvent !== r ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: r,
            targetContainers: [
              i
            ]
          }, e !== null && (e = Ra(e), e !== null && lp(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
        }
        function D0(t, e, n, a, i) {
          switch (e) {
            case "focusin":
              return kn = Si(kn, t, e, n, a, i), true;
            case "dragenter":
              return Kn = Si(Kn, t, e, n, a, i), true;
            case "mouseover":
              return Jn = Si(Jn, t, e, n, a, i), true;
            case "pointerover":
              var r = i.pointerId;
              return vi.set(r, Si(vi.get(r) || null, t, e, n, a, i)), true;
            case "gotpointercapture":
              return r = i.pointerId, bi.set(r, Si(bi.get(r) || null, t, e, n, a, i)), true;
          }
          return false;
        }
        function sp(t) {
          var e = Ta(t.target);
          if (e !== null) {
            var n = d(e);
            if (n !== null) {
              if (e = n.tag, e === 13) {
                if (e = m(n), e !== null) {
                  t.blockedOn = e, A_(t.priority, function() {
                    if (n.tag === 13) {
                      var a = Te();
                      a = $s(a);
                      var i = ja(n, a);
                      i !== null && Re(i, n, a), Ic(n, a);
                    }
                  });
                  return;
                }
              } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
              }
            }
          }
          t.blockedOn = null;
        }
        function Pu(t) {
          if (t.blockedOn !== null) return false;
          for (var e = t.targetContainers; 0 < e.length; ) {
            var n = eo(t.nativeEvent);
            if (n === null) {
              n = t.nativeEvent;
              var a = new n.constructor(n.type, n);
              ir = a, n.target.dispatchEvent(a), ir = null;
            } else return e = Ra(n), e !== null && lp(e), t.blockedOn = n, false;
            e.shift();
          }
          return true;
        }
        function rp(t, e, n) {
          Pu(t) && n.delete(e);
        }
        function C0() {
          ao = false, kn !== null && Pu(kn) && (kn = null), Kn !== null && Pu(Kn) && (Kn = null), Jn !== null && Pu(Jn) && (Jn = null), vi.forEach(rp), bi.forEach(rp);
        }
        function Iu(t, e) {
          t.blockedOn === e && (t.blockedOn = null, ao || (ao = true, c.unstable_scheduleCallback(c.unstable_NormalPriority, C0)));
        }
        var ts = null;
        function cp(t) {
          ts !== t && (ts = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            ts === t && (ts = null);
            for (var e = 0; e < t.length; e += 3) {
              var n = t[e], a = t[e + 1], i = t[e + 2];
              if (typeof a != "function") {
                if (no(a || n) === null) continue;
                break;
              }
              var r = Ra(n);
              r !== null && (t.splice(e, 3), e -= 3, nc(r, {
                pending: true,
                data: i,
                method: n.method,
                action: a
              }, a, i));
            }
          }));
        }
        function wi(t) {
          function e(p) {
            return Iu(p, t);
          }
          kn !== null && Iu(kn, t), Kn !== null && Iu(Kn, t), Jn !== null && Iu(Jn, t), vi.forEach(e), bi.forEach(e);
          for (var n = 0; n < $n.length; n++) {
            var a = $n[n];
            a.blockedOn === t && (a.blockedOn = null);
          }
          for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); ) sp(n), n.blockedOn === null && $n.shift();
          if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
            var i = n[a], r = n[a + 1], f = i[fe] || null;
            if (typeof r == "function") f || cp(n);
            else if (f) {
              var h = null;
              if (r && r.hasAttribute("formAction")) {
                if (i = r, f = r[fe] || null) h = f.formAction;
                else if (no(i) !== null) continue;
              } else h = f.action;
              typeof h == "function" ? n[a + 1] = h : (n.splice(a, 3), a -= 3), cp(n);
            }
          }
        }
        function lo(t) {
          this._internalRoot = t;
        }
        es.prototype.render = lo.prototype.render = function(t) {
          var e = this._internalRoot;
          if (e === null) throw Error(s(409));
          var n = e.current, a = Te();
          np(n, a, t, e, null, null);
        }, es.prototype.unmount = lo.prototype.unmount = function() {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            np(t.current, 2, null, t, null, null), Hu(), e[Ea] = null;
          }
        };
        function es(t) {
          this._internalRoot = t;
        }
        es.prototype.unstable_scheduleHydration = function(t) {
          if (t) {
            var e = Rf();
            t = {
              blockedOn: null,
              target: t,
              priority: e
            };
            for (var n = 0; n < $n.length && e !== 0 && e < $n[n].priority; n++) ;
            $n.splice(n, 0, t), n === 0 && sp(t);
          }
        };
        var op = l.version;
        if (op !== "19.1.0") throw Error(s(527, op, "19.1.0"));
        q.findDOMNode = function(t) {
          var e = t._reactInternals;
          if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
          return t = S(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
        };
        var U0 = {
          bundleType: 0,
          version: "19.1.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: D,
          reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
          var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ns.isDisabled && ns.supportsFiber) try {
            Rl = ns.inject(U0), ge = ns;
          } catch {
          }
        }
        return Ei.createRoot = function(t, e) {
          if (!o(t)) throw Error(s(299));
          var n = false, a = "", i = Rh, r = xh, f = Oh, h = null;
          return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (h = e.unstable_transitionCallbacks)), e = tp(t, 1, false, null, null, n, a, i, r, f, h, null), t[Ea] = e.current, Xc(t), new lo(e);
        }, Ei.hydrateRoot = function(t, e, n) {
          if (!o(t)) throw Error(s(299));
          var a = false, i = "", r = Rh, f = xh, h = Oh, p = null, A = null;
          return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks), n.formState !== void 0 && (A = n.formState)), e = tp(t, 1, true, e, n ?? null, a, i, r, f, h, p, A), e.context = ep(null), n = e.current, a = Te(), a = $s(a), i = Un(a), i.callback = null, zn(n, i, a), n = a, e.current.lanes = n, Ol(e, n), tn(e), t[Ea] = e.current, Xc(t), new es(e);
        }, Ei.version = "19.1.0", Ei;
      }
      var bp;
      function Q0() {
        if (bp) return so.exports;
        bp = 1;
        function c() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
          } catch (l) {
            console.error(l);
          }
        }
        return c(), so.exports = G0(), so.exports;
      }
      var V0 = Q0();
      async function Z0(c) {
        const l = await navigator.mediaDevices.getUserMedia({
          audio: true
        }), u = new AudioContext({
          sampleRate: 16e3
        }), s = u.createMediaStreamSource(l), o = u.createScriptProcessor(4096, 1, 1);
        return s.connect(o), o.connect(u.destination), o.onaudioprocess = (d) => {
          const m = d.inputBuffer.getChannelData(0), v = Int16Array.from(m.map((S) => S * 32767));
          c(v);
        }, () => u.close();
      }
      class k0 {
        constructor(l) {
          __publicField(this, "ws");
          this.onText = l;
        }
        connect() {
          this.ws = new WebSocket("wss://api.openai.com/v1/audio/transcriptions/stream"), this.ws.binaryType = "arraybuffer", this.ws.onmessage = (l) => {
            const u = JSON.parse(l.data);
            this.onText(u.text, u.is_final);
          }, this.ws.onopen = () => {
            this.ws.send(JSON.stringify({
              model: void 0,
              language: "de-DE"
            }));
          };
        }
        send(l) {
          var _a;
          ((_a = this.ws) == null ? void 0 : _a.readyState) === 1 && this.ws.send(l);
        }
      }
      const Eo = "RFC3986", To = {
        RFC1738: (c) => String(c).replace(/%20/g, "+"),
        RFC3986: (c) => String(c)
      }, K0 = "RFC1738", J0 = Array.isArray, en = (() => {
        const c = [];
        for (let l = 0; l < 256; ++l) c.push("%" + ((l < 16 ? "0" : "") + l.toString(16)).toUpperCase());
        return c;
      })(), fo = 1024, $0 = (c, l, u, s, o) => {
        if (c.length === 0) return c;
        let d = c;
        if (typeof c == "symbol" ? d = Symbol.prototype.toString.call(c) : typeof c != "string" && (d = String(c)), u === "iso-8859-1") return escape(d).replace(/%u[0-9a-f]{4}/gi, function(v) {
          return "%26%23" + parseInt(v.slice(2), 16) + "%3B";
        });
        let m = "";
        for (let v = 0; v < d.length; v += fo) {
          const S = d.length >= fo ? d.slice(v, v + fo) : d, y = [];
          for (let R = 0; R < S.length; ++R) {
            let x = S.charCodeAt(R);
            if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || o === K0 && (x === 40 || x === 41)) {
              y[y.length] = S.charAt(R);
              continue;
            }
            if (x < 128) {
              y[y.length] = en[x];
              continue;
            }
            if (x < 2048) {
              y[y.length] = en[192 | x >> 6] + en[128 | x & 63];
              continue;
            }
            if (x < 55296 || x >= 57344) {
              y[y.length] = en[224 | x >> 12] + en[128 | x >> 6 & 63] + en[128 | x & 63];
              continue;
            }
            R += 1, x = 65536 + ((x & 1023) << 10 | S.charCodeAt(R) & 1023), y[y.length] = en[240 | x >> 18] + en[128 | x >> 12 & 63] + en[128 | x >> 6 & 63] + en[128 | x & 63];
          }
          m += y.join("");
        }
        return m;
      };
      function F0(c) {
        return !c || typeof c != "object" ? false : !!(c.constructor && c.constructor.isBuffer && c.constructor.isBuffer(c));
      }
      function Sp(c, l) {
        if (J0(c)) {
          const u = [];
          for (let s = 0; s < c.length; s += 1) u.push(l(c[s]));
          return u;
        }
        return l(c);
      }
      const W0 = Object.prototype.hasOwnProperty, $p = {
        brackets(c) {
          return String(c) + "[]";
        },
        comma: "comma",
        indices(c, l) {
          return String(c) + "[" + l + "]";
        },
        repeat(c) {
          return String(c);
        }
      }, nn = Array.isArray, P0 = Array.prototype.push, Fp = function(c, l) {
        P0.apply(c, nn(l) ? l : [
          l
        ]);
      }, I0 = Date.prototype.toISOString, kt = {
        addQueryPrefix: false,
        allowDots: false,
        allowEmptyArrays: false,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: false,
        delimiter: "&",
        encode: true,
        encodeDotInKeys: false,
        encoder: $0,
        encodeValuesOnly: false,
        format: Eo,
        formatter: To[Eo],
        indices: false,
        serializeDate(c) {
          return I0.call(c);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      function tv(c) {
        return typeof c == "string" || typeof c == "number" || typeof c == "boolean" || typeof c == "symbol" || typeof c == "bigint";
      }
      const ho = {};
      function Wp(c, l, u, s, o, d, m, v, S, y, R, x, O, z, L, j, V, ut) {
        let B = c, tt = ut, st = 0, Q = false;
        for (; (tt = tt.get(ho)) !== void 0 && !Q; ) {
          const Tt = tt.get(c);
          if (st += 1, typeof Tt < "u") {
            if (Tt === st) throw new RangeError("Cyclic object value");
            Q = true;
          }
          typeof tt.get(ho) > "u" && (st = 0);
        }
        if (typeof y == "function" ? B = y(l, B) : B instanceof Date ? B = O == null ? void 0 : O(B) : u === "comma" && nn(B) && (B = Sp(B, function(Tt) {
          return Tt instanceof Date ? O == null ? void 0 : O(Tt) : Tt;
        })), B === null) {
          if (d) return S && !j ? S(l, kt.encoder, V, "key", z) : l;
          B = "";
        }
        if (tv(B) || F0(B)) {
          if (S) {
            const Tt = j ? l : S(l, kt.encoder, V, "key", z);
            return [
              (L == null ? void 0 : L(Tt)) + "=" + (L == null ? void 0 : L(S(B, kt.encoder, V, "value", z)))
            ];
          }
          return [
            (L == null ? void 0 : L(l)) + "=" + (L == null ? void 0 : L(String(B)))
          ];
        }
        const ft = [];
        if (typeof B > "u") return ft;
        let ot;
        if (u === "comma" && nn(B)) j && S && (B = Sp(B, S)), ot = [
          {
            value: B.length > 0 ? B.join(",") || null : void 0
          }
        ];
        else if (nn(y)) ot = y;
        else {
          const Tt = Object.keys(B);
          ot = R ? Tt.sort(R) : Tt;
        }
        const pt = v ? String(l).replace(/\./g, "%2E") : String(l), _t = s && nn(B) && B.length === 1 ? pt + "[]" : pt;
        if (o && nn(B) && B.length === 0) return _t + "[]";
        for (let Tt = 0; Tt < ot.length; ++Tt) {
          const gt = ot[Tt], Yt = typeof gt == "object" && typeof gt.value < "u" ? gt.value : B[gt];
          if (m && Yt === null) continue;
          const Ye = x && v ? gt.replace(/\./g, "%2E") : gt, sn = nn(B) ? typeof u == "function" ? u(_t, Ye) : _t : _t + (x ? "." + Ye : "[" + Ye + "]");
          ut.set(c, st);
          const Gt = /* @__PURE__ */ new WeakMap();
          Gt.set(ho, ut), Fp(ft, Wp(Yt, sn, u, s, o, d, m, v, u === "comma" && j && nn(B) ? null : S, y, R, x, O, z, L, j, V, Gt));
        }
        return ft;
      }
      function ev(c = kt) {
        if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (typeof c.encodeDotInKeys < "u" && typeof c.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (c.encoder !== null && typeof c.encoder < "u" && typeof c.encoder != "function") throw new TypeError("Encoder has to be a function.");
        const l = c.charset || kt.charset;
        if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        let u = Eo;
        if (typeof c.format < "u") {
          if (!W0.call(To, c.format)) throw new TypeError("Unknown format option provided.");
          u = c.format;
        }
        const s = To[u];
        let o = kt.filter;
        (typeof c.filter == "function" || nn(c.filter)) && (o = c.filter);
        let d;
        if (c.arrayFormat && c.arrayFormat in $p ? d = c.arrayFormat : "indices" in c ? d = c.indices ? "indices" : "repeat" : d = kt.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        const m = typeof c.allowDots > "u" ? c.encodeDotInKeys ? true : kt.allowDots : !!c.allowDots;
        return {
          addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : kt.addQueryPrefix,
          allowDots: m,
          allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : kt.allowEmptyArrays,
          arrayFormat: d,
          charset: l,
          charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : kt.charsetSentinel,
          commaRoundTrip: !!c.commaRoundTrip,
          delimiter: typeof c.delimiter > "u" ? kt.delimiter : c.delimiter,
          encode: typeof c.encode == "boolean" ? c.encode : kt.encode,
          encodeDotInKeys: typeof c.encodeDotInKeys == "boolean" ? c.encodeDotInKeys : kt.encodeDotInKeys,
          encoder: typeof c.encoder == "function" ? c.encoder : kt.encoder,
          encodeValuesOnly: typeof c.encodeValuesOnly == "boolean" ? c.encodeValuesOnly : kt.encodeValuesOnly,
          filter: o,
          format: u,
          formatter: s,
          serializeDate: typeof c.serializeDate == "function" ? c.serializeDate : kt.serializeDate,
          skipNulls: typeof c.skipNulls == "boolean" ? c.skipNulls : kt.skipNulls,
          sort: typeof c.sort == "function" ? c.sort : null,
          strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : kt.strictNullHandling
        };
      }
      function nv(c, l = {}) {
        let u = c;
        const s = ev(l);
        let o, d;
        typeof s.filter == "function" ? (d = s.filter, u = d("", u)) : nn(s.filter) && (d = s.filter, o = d);
        const m = [];
        if (typeof u != "object" || u === null) return "";
        const v = $p[s.arrayFormat], S = v === "comma" && s.commaRoundTrip;
        o || (o = Object.keys(u)), s.sort && o.sort(s.sort);
        const y = /* @__PURE__ */ new WeakMap();
        for (let O = 0; O < o.length; ++O) {
          const z = o[O];
          s.skipNulls && u[z] === null || Fp(m, Wp(u[z], z, v, S, s.allowEmptyArrays, s.strictNullHandling, s.skipNulls, s.encodeDotInKeys, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, y));
        }
        const R = m.join(s.delimiter);
        let x = s.addQueryPrefix === true ? "?" : "";
        return s.charsetSentinel && (s.charset === "iso-8859-1" ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), R.length > 0 ? x + R : "";
      }
      const ml = "4.95.1";
      let wp = false, Ci, Pp, Ip, Ro, ty, ey, ny, ay, ly;
      function av(c, l = {
        auto: false
      }) {
        if (wp) throw new Error(`you must \`import 'openai/shims/${c.kind}'\` before importing anything else from openai`);
        if (Ci) throw new Error(`can't \`import 'openai/shims/${c.kind}'\` after \`import 'openai/shims/${Ci}'\``);
        wp = l.auto, Ci = c.kind, Pp = c.fetch, Ip = c.FormData, Ro = c.File, ty = c.ReadableStream, ey = c.getMultipartRequestOptions, ny = c.getDefaultAgent, ay = c.fileFromPath, ly = c.isFsReadStream;
      }
      class lv {
        constructor(l) {
          this.body = l;
        }
        get [Symbol.toStringTag]() {
          return "MultipartBody";
        }
      }
      function iv({ manuallyImported: c } = {}) {
        const l = c ? "You may need to use polyfills" : "Add one of these imports before your first `import \u2026 from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
        let u, s, o, d;
        try {
          u = fetch, s = Request, o = Response, d = Headers;
        } catch (m) {
          throw new Error(`this environment is missing the following Web Fetch API type: ${m.message}. ${l}`);
        }
        return {
          kind: "web",
          fetch: u,
          Request: s,
          Response: o,
          Headers: d,
          FormData: typeof FormData < "u" ? FormData : class {
            constructor() {
              throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${l}`);
            }
          },
          Blob: typeof Blob < "u" ? Blob : class {
            constructor() {
              throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${l}`);
            }
          },
          File: typeof File < "u" ? File : class {
            constructor() {
              throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${l}`);
            }
          },
          ReadableStream: typeof ReadableStream < "u" ? ReadableStream : class {
            constructor() {
              throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${l}`);
            }
          },
          getMultipartRequestOptions: async (m, v) => ({
            ...v,
            body: new lv(m)
          }),
          getDefaultAgent: (m) => {
          },
          fileFromPath: () => {
            throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads");
          },
          isFsReadStream: (m) => false
        };
      }
      const iy = () => {
        Ci || av(iv(), {
          auto: true
        });
      };
      iy();
      class W extends Error {
      }
      class ae extends W {
        constructor(l, u, s, o) {
          super(`${ae.makeMessage(l, u, s)}`), this.status = l, this.headers = o, this.request_id = o == null ? void 0 : o["x-request-id"], this.error = u;
          const d = u;
          this.code = d == null ? void 0 : d.code, this.param = d == null ? void 0 : d.param, this.type = d == null ? void 0 : d.type;
        }
        static makeMessage(l, u, s) {
          const o = (u == null ? void 0 : u.message) ? typeof u.message == "string" ? u.message : JSON.stringify(u.message) : u ? JSON.stringify(u) : s;
          return l && o ? `${l} ${o}` : l ? `${l} status code (no body)` : o || "(no status code or body)";
        }
        static generate(l, u, s, o) {
          if (!l || !o) return new Ds({
            message: s,
            cause: Oo(u)
          });
          const d = u == null ? void 0 : u.error;
          return l === 400 ? new uy(l, d, s, o) : l === 401 ? new sy(l, d, s, o) : l === 403 ? new ry(l, d, s, o) : l === 404 ? new cy(l, d, s, o) : l === 409 ? new oy(l, d, s, o) : l === 422 ? new fy(l, d, s, o) : l === 429 ? new dy(l, d, s, o) : l >= 500 ? new hy(l, d, s, o) : new ae(l, d, s, o);
        }
      }
      class Xe extends ae {
        constructor({ message: l } = {}) {
          super(void 0, void 0, l || "Request was aborted.", void 0);
        }
      }
      class Ds extends ae {
        constructor({ message: l, cause: u }) {
          super(void 0, void 0, l || "Connection error.", void 0), u && (this.cause = u);
        }
      }
      class jo extends Ds {
        constructor({ message: l } = {}) {
          super({
            message: l ?? "Request timed out."
          });
        }
      }
      class uy extends ae {
      }
      class sy extends ae {
      }
      class ry extends ae {
      }
      class cy extends ae {
      }
      class oy extends ae {
      }
      class fy extends ae {
      }
      class dy extends ae {
      }
      class hy extends ae {
      }
      class my extends W {
        constructor() {
          super("Could not parse response content as the length limit was reached");
        }
      }
      class py extends W {
        constructor() {
          super("Could not parse response content as the request was rejected by the content filter");
        }
      }
      var ls = function(c, l, u, s, o) {
        if (s === "m") throw new TypeError("Private method is not writable");
        if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof l == "function" ? c !== l || !o : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return s === "a" ? o.call(c, u) : o ? o.value = u : l.set(c, u), u;
      }, ba = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, Oe;
      class Cs {
        constructor() {
          Oe.set(this, void 0), this.buffer = new Uint8Array(), ls(this, Oe, null, "f");
        }
        decode(l) {
          if (l == null) return [];
          const u = l instanceof ArrayBuffer ? new Uint8Array(l) : typeof l == "string" ? new TextEncoder().encode(l) : l;
          let s = new Uint8Array(this.buffer.length + u.length);
          s.set(this.buffer), s.set(u, this.buffer.length), this.buffer = s;
          const o = [];
          let d;
          for (; (d = uv(this.buffer, ba(this, Oe, "f"))) != null; ) {
            if (d.carriage && ba(this, Oe, "f") == null) {
              ls(this, Oe, d.index, "f");
              continue;
            }
            if (ba(this, Oe, "f") != null && (d.index !== ba(this, Oe, "f") + 1 || d.carriage)) {
              o.push(this.decodeText(this.buffer.slice(0, ba(this, Oe, "f") - 1))), this.buffer = this.buffer.slice(ba(this, Oe, "f")), ls(this, Oe, null, "f");
              continue;
            }
            const m = ba(this, Oe, "f") !== null ? d.preceding - 1 : d.preceding, v = this.decodeText(this.buffer.slice(0, m));
            o.push(v), this.buffer = this.buffer.slice(d.index), ls(this, Oe, null, "f");
          }
          return o;
        }
        decodeText(l) {
          if (l == null) return "";
          if (typeof l == "string") return l;
          if (typeof Buffer < "u") {
            if (l instanceof Buffer) return l.toString();
            if (l instanceof Uint8Array) return Buffer.from(l).toString();
            throw new W(`Unexpected: received non-Uint8Array (${l.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
          }
          if (typeof TextDecoder < "u") {
            if (l instanceof Uint8Array || l instanceof ArrayBuffer) return this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")), this.textDecoder.decode(l);
            throw new W(`Unexpected: received non-Uint8Array/ArrayBuffer (${l.constructor.name}) in a web platform. Please report this error.`);
          }
          throw new W("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.");
        }
        flush() {
          return this.buffer.length ? this.decode(`
`) : [];
        }
      }
      Oe = /* @__PURE__ */ new WeakMap();
      Cs.NEWLINE_CHARS = /* @__PURE__ */ new Set([
        `
`,
        "\r"
      ]);
      Cs.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
      function uv(c, l) {
        for (let o = l ?? 0; o < c.length; o++) {
          if (c[o] === 10) return {
            preceding: o,
            index: o + 1,
            carriage: false
          };
          if (c[o] === 13) return {
            preceding: o,
            index: o + 1,
            carriage: true
          };
        }
        return null;
      }
      function sv(c) {
        for (let s = 0; s < c.length - 1; s++) {
          if (c[s] === 10 && c[s + 1] === 10 || c[s] === 13 && c[s + 1] === 13) return s + 2;
          if (c[s] === 13 && c[s + 1] === 10 && s + 3 < c.length && c[s + 2] === 13 && c[s + 3] === 10) return s + 4;
        }
        return -1;
      }
      function yy(c) {
        if (c[Symbol.asyncIterator]) return c;
        const l = c.getReader();
        return {
          async next() {
            try {
              const u = await l.read();
              return (u == null ? void 0 : u.done) && l.releaseLock(), u;
            } catch (u) {
              throw l.releaseLock(), u;
            }
          },
          async return() {
            const u = l.cancel();
            return l.releaseLock(), await u, {
              done: true,
              value: void 0
            };
          },
          [Symbol.asyncIterator]() {
            return this;
          }
        };
      }
      class un {
        constructor(l, u) {
          this.iterator = l, this.controller = u;
        }
        static fromSSEResponse(l, u) {
          let s = false;
          async function* o() {
            if (s) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            s = true;
            let d = false;
            try {
              for await (const m of rv(l, u)) if (!d) {
                if (m.data.startsWith("[DONE]")) {
                  d = true;
                  continue;
                }
                if (m.event === null || m.event.startsWith("response.") || m.event.startsWith("transcript.")) {
                  let v;
                  try {
                    v = JSON.parse(m.data);
                  } catch (S) {
                    throw console.error("Could not parse message into JSON:", m.data), console.error("From chunk:", m.raw), S;
                  }
                  if (v && v.error) throw new ae(void 0, v.error, void 0, Ey(l.headers));
                  yield v;
                } else {
                  let v;
                  try {
                    v = JSON.parse(m.data);
                  } catch (S) {
                    throw console.error("Could not parse message into JSON:", m.data), console.error("From chunk:", m.raw), S;
                  }
                  if (m.event == "error") throw new ae(void 0, v.error, v.message, void 0);
                  yield {
                    event: m.event,
                    data: v
                  };
                }
              }
              d = true;
            } catch (m) {
              if (m instanceof Error && m.name === "AbortError") return;
              throw m;
            } finally {
              d || u.abort();
            }
          }
          return new un(o, u);
        }
        static fromReadableStream(l, u) {
          let s = false;
          async function* o() {
            const m = new Cs(), v = yy(l);
            for await (const S of v) for (const y of m.decode(S)) yield y;
            for (const S of m.flush()) yield S;
          }
          async function* d() {
            if (s) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            s = true;
            let m = false;
            try {
              for await (const v of o()) m || v && (yield JSON.parse(v));
              m = true;
            } catch (v) {
              if (v instanceof Error && v.name === "AbortError") return;
              throw v;
            } finally {
              m || u.abort();
            }
          }
          return new un(d, u);
        }
        [Symbol.asyncIterator]() {
          return this.iterator();
        }
        tee() {
          const l = [], u = [], s = this.iterator(), o = (d) => ({
            next: () => {
              if (d.length === 0) {
                const m = s.next();
                l.push(m), u.push(m);
              }
              return d.shift();
            }
          });
          return [
            new un(() => o(l), this.controller),
            new un(() => o(u), this.controller)
          ];
        }
        toReadableStream() {
          const l = this;
          let u;
          const s = new TextEncoder();
          return new ty({
            async start() {
              u = l[Symbol.asyncIterator]();
            },
            async pull(o) {
              try {
                const { value: d, done: m } = await u.next();
                if (m) return o.close();
                const v = s.encode(JSON.stringify(d) + `
`);
                o.enqueue(v);
              } catch (d) {
                o.error(d);
              }
            },
            async cancel() {
              var _a;
              await ((_a = u.return) == null ? void 0 : _a.call(u));
            }
          });
        }
      }
      async function* rv(c, l) {
        if (!c.body) throw l.abort(), new W("Attempted to iterate over a response with no body");
        const u = new ov(), s = new Cs(), o = yy(c.body);
        for await (const d of cv(o)) for (const m of s.decode(d)) {
          const v = u.decode(m);
          v && (yield v);
        }
        for (const d of s.flush()) {
          const m = u.decode(d);
          m && (yield m);
        }
      }
      async function* cv(c) {
        let l = new Uint8Array();
        for await (const u of c) {
          if (u == null) continue;
          const s = u instanceof ArrayBuffer ? new Uint8Array(u) : typeof u == "string" ? new TextEncoder().encode(u) : u;
          let o = new Uint8Array(l.length + s.length);
          o.set(l), o.set(s, l.length), l = o;
          let d;
          for (; (d = sv(l)) !== -1; ) yield l.slice(0, d), l = l.slice(d);
        }
        l.length > 0 && (yield l);
      }
      class ov {
        constructor() {
          this.event = null, this.data = [], this.chunks = [];
        }
        decode(l) {
          if (l.endsWith("\r") && (l = l.substring(0, l.length - 1)), !l) {
            if (!this.event && !this.data.length) return null;
            const d = {
              event: this.event,
              data: this.data.join(`
`),
              raw: this.chunks
            };
            return this.event = null, this.data = [], this.chunks = [], d;
          }
          if (this.chunks.push(l), l.startsWith(":")) return null;
          let [u, s, o] = fv(l, ":");
          return o.startsWith(" ") && (o = o.substring(1)), u === "event" ? this.event = o : u === "data" && this.data.push(o), null;
        }
      }
      function fv(c, l) {
        const u = c.indexOf(l);
        return u !== -1 ? [
          c.substring(0, u),
          l,
          c.substring(u + l.length)
        ] : [
          c,
          "",
          ""
        ];
      }
      const _y = (c) => c != null && typeof c == "object" && typeof c.url == "string" && typeof c.blob == "function", gy = (c) => c != null && typeof c == "object" && typeof c.name == "string" && typeof c.lastModified == "number" && Us(c), Us = (c) => c != null && typeof c == "object" && typeof c.size == "number" && typeof c.type == "string" && typeof c.text == "function" && typeof c.slice == "function" && typeof c.arrayBuffer == "function", dv = (c) => gy(c) || _y(c) || ly(c);
      async function vy(c, l, u) {
        var _a;
        if (c = await c, gy(c)) return c;
        if (_y(c)) {
          const o = await c.blob();
          l || (l = new URL(c.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
          const d = Us(o) ? [
            await o.arrayBuffer()
          ] : [
            o
          ];
          return new Ro(d, l, u);
        }
        const s = await hv(c);
        if (l || (l = pv(c) ?? "unknown_file"), !(u == null ? void 0 : u.type)) {
          const o = (_a = s[0]) == null ? void 0 : _a.type;
          typeof o == "string" && (u = {
            ...u,
            type: o
          });
        }
        return new Ro(s, l, u);
      }
      async function hv(c) {
        var _a;
        let l = [];
        if (typeof c == "string" || ArrayBuffer.isView(c) || c instanceof ArrayBuffer) l.push(c);
        else if (Us(c)) l.push(await c.arrayBuffer());
        else if (yv(c)) for await (const u of c) l.push(u);
        else throw new Error(`Unexpected data type: ${typeof c}; constructor: ${(_a = c == null ? void 0 : c.constructor) == null ? void 0 : _a.name}; props: ${mv(c)}`);
        return l;
      }
      function mv(c) {
        return `[${Object.getOwnPropertyNames(c).map((u) => `"${u}"`).join(", ")}]`;
      }
      function pv(c) {
        var _a;
        return mo(c.name) || mo(c.filename) || ((_a = mo(c.path)) == null ? void 0 : _a.split(/[\\/]/).pop());
      }
      const mo = (c) => {
        if (typeof c == "string") return c;
        if (typeof Buffer < "u" && c instanceof Buffer) return String(c);
      }, yv = (c) => c != null && typeof c == "object" && typeof c[Symbol.asyncIterator] == "function", Ap = (c) => c && typeof c == "object" && c.body && c[Symbol.toStringTag] === "MultipartBody", Sl = async (c) => {
        const l = await _v(c.body);
        return ey(l, c);
      }, _v = async (c) => {
        const l = new Ip();
        return await Promise.all(Object.entries(c || {}).map(([u, s]) => xo(l, u, s))), l;
      }, xo = async (c, l, u) => {
        if (u !== void 0) {
          if (u == null) throw new TypeError(`Received null for "${l}"; to pass null in FormData, you must use the string 'null'`);
          if (typeof u == "string" || typeof u == "number" || typeof u == "boolean") c.append(l, String(u));
          else if (dv(u)) {
            const s = await vy(u);
            c.append(l, s);
          } else if (Array.isArray(u)) await Promise.all(u.map((s) => xo(c, l + "[]", s)));
          else if (typeof u == "object") await Promise.all(Object.entries(u).map(([s, o]) => xo(c, `${l}[${s}]`, o)));
          else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${u} instead`);
        }
      };
      var by = {}, gv = function(c, l, u, s, o) {
        if (typeof l == "function" ? c !== l || true : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return l.set(c, u), u;
      }, vv = function(c, l, u, s) {
        if (typeof l == "function" ? c !== l || true : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, is;
      iy();
      async function Sy(c) {
        var _a, _b2;
        const { response: l } = c;
        if (c.options.stream) return ta("response", l.status, l.url, l.headers, l.body), c.options.__streamClass ? c.options.__streamClass.fromSSEResponse(l, c.controller) : un.fromSSEResponse(l, c.controller);
        if (l.status === 204) return null;
        if (c.options.__binaryResponse) return l;
        const s = (_b2 = (_a = l.headers.get("content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b2.trim();
        if ((s == null ? void 0 : s.includes("application/json")) || (s == null ? void 0 : s.endsWith("+json"))) {
          const m = await l.json();
          return ta("response", l.status, l.url, l.headers, m), wy(m, l);
        }
        const d = await l.text();
        return ta("response", l.status, l.url, l.headers, d), d;
      }
      function wy(c, l) {
        return !c || typeof c != "object" || Array.isArray(c) ? c : Object.defineProperty(c, "_request_id", {
          value: l.headers.get("x-request-id"),
          enumerable: false
        });
      }
      class zs extends Promise {
        constructor(l, u = Sy) {
          super((s) => {
            s(null);
          }), this.responsePromise = l, this.parseResponse = u;
        }
        _thenUnwrap(l) {
          return new zs(this.responsePromise, async (u) => wy(l(await this.parseResponse(u), u), u.response));
        }
        asResponse() {
          return this.responsePromise.then((l) => l.response);
        }
        async withResponse() {
          const [l, u] = await Promise.all([
            this.parse(),
            this.asResponse()
          ]);
          return {
            data: l,
            response: u,
            request_id: u.headers.get("x-request-id")
          };
        }
        parse() {
          return this.parsedPromise || (this.parsedPromise = this.responsePromise.then(this.parseResponse)), this.parsedPromise;
        }
        then(l, u) {
          return this.parse().then(l, u);
        }
        catch(l) {
          return this.parse().catch(l);
        }
        finally(l) {
          return this.parse().finally(l);
        }
      }
      class bv {
        constructor({ baseURL: l, maxRetries: u = 2, timeout: s = 6e5, httpAgent: o, fetch: d }) {
          this.baseURL = l, this.maxRetries = po("maxRetries", u), this.timeout = po("timeout", s), this.httpAgent = o, this.fetch = d ?? Pp;
        }
        authHeaders(l) {
          return {};
        }
        defaultHeaders(l) {
          return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...Tv(),
            ...this.authHeaders(l)
          };
        }
        validateHeaders(l, u) {
        }
        defaultIdempotencyKey() {
          return `stainless-node-retry-${Mv()}`;
        }
        get(l, u) {
          return this.methodRequest("get", l, u);
        }
        post(l, u) {
          return this.methodRequest("post", l, u);
        }
        patch(l, u) {
          return this.methodRequest("patch", l, u);
        }
        put(l, u) {
          return this.methodRequest("put", l, u);
        }
        delete(l, u) {
          return this.methodRequest("delete", l, u);
        }
        methodRequest(l, u, s) {
          return this.request(Promise.resolve(s).then(async (o) => {
            const d = o && Us(o == null ? void 0 : o.body) ? new DataView(await o.body.arrayBuffer()) : (o == null ? void 0 : o.body) instanceof DataView ? o.body : (o == null ? void 0 : o.body) instanceof ArrayBuffer ? new DataView(o.body) : o && ArrayBuffer.isView(o == null ? void 0 : o.body) ? new DataView(o.body.buffer) : o == null ? void 0 : o.body;
            return {
              method: l,
              path: u,
              ...o,
              body: d
            };
          }));
        }
        getAPIList(l, u, s) {
          return this.requestAPIList(u, {
            method: "get",
            path: l,
            ...s
          });
        }
        calculateContentLength(l) {
          if (typeof l == "string") {
            if (typeof Buffer < "u") return Buffer.byteLength(l, "utf8").toString();
            if (typeof TextEncoder < "u") return new TextEncoder().encode(l).length.toString();
          } else if (ArrayBuffer.isView(l)) return l.byteLength.toString();
          return null;
        }
        buildRequest(l, { retryCount: u = 0 } = {}) {
          var _a;
          const s = {
            ...l
          }, { method: o, path: d, query: m, headers: v = {} } = s, S = ArrayBuffer.isView(s.body) || s.__binaryRequest && typeof s.body == "string" ? s.body : Ap(s.body) ? s.body.body : s.body ? JSON.stringify(s.body, null, 2) : null, y = this.calculateContentLength(S), R = this.buildURL(d, m);
          "timeout" in s && po("timeout", s.timeout), s.timeout = s.timeout ?? this.timeout;
          const x = s.httpAgent ?? this.httpAgent ?? ny(R), O = s.timeout + 1e3;
          typeof ((_a = x == null ? void 0 : x.options) == null ? void 0 : _a.timeout) == "number" && O > (x.options.timeout ?? 0) && (x.options.timeout = O), this.idempotencyHeader && o !== "get" && (l.idempotencyKey || (l.idempotencyKey = this.defaultIdempotencyKey()), v[this.idempotencyHeader] = l.idempotencyKey);
          const z = this.buildHeaders({
            options: s,
            headers: v,
            contentLength: y,
            retryCount: u
          });
          return {
            req: {
              method: o,
              ...S && {
                body: S
              },
              headers: z,
              ...x && {
                agent: x
              },
              signal: s.signal ?? null
            },
            url: R,
            timeout: s.timeout
          };
        }
        buildHeaders({ options: l, headers: u, contentLength: s, retryCount: o }) {
          const d = {};
          s && (d["content-length"] = s);
          const m = this.defaultHeaders(l);
          return xp(d, m), xp(d, u), Ap(l.body) && Ci !== "node" && delete d["content-type"], ss(m, "x-stainless-retry-count") === void 0 && ss(u, "x-stainless-retry-count") === void 0 && (d["x-stainless-retry-count"] = String(o)), ss(m, "x-stainless-timeout") === void 0 && ss(u, "x-stainless-timeout") === void 0 && l.timeout && (d["x-stainless-timeout"] = String(Math.trunc(l.timeout / 1e3))), this.validateHeaders(d, u), d;
        }
        async prepareOptions(l) {
        }
        async prepareRequest(l, { url: u, options: s }) {
        }
        parseHeaders(l) {
          return l ? Symbol.iterator in l ? Object.fromEntries(Array.from(l).map((u) => [
            ...u
          ])) : {
            ...l
          } : {};
        }
        makeStatusError(l, u, s, o) {
          return ae.generate(l, u, s, o);
        }
        request(l, u = null) {
          return new zs(this.makeRequest(l, u));
        }
        async makeRequest(l, u) {
          var _a, _b2;
          const s = await l, o = s.maxRetries ?? this.maxRetries;
          u == null && (u = o), await this.prepareOptions(s);
          const { req: d, url: m, timeout: v } = this.buildRequest(s, {
            retryCount: o - u
          });
          if (await this.prepareRequest(d, {
            url: m,
            options: s
          }), ta("request", m, s, d.headers), (_a = s.signal) == null ? void 0 : _a.aborted) throw new Xe();
          const S = new AbortController(), y = await this.fetchWithTimeout(m, d, v, S).catch(Oo);
          if (y instanceof Error) {
            if ((_b2 = s.signal) == null ? void 0 : _b2.aborted) throw new Xe();
            if (u) return this.retryRequest(s, u);
            throw y.name === "AbortError" ? new jo() : new Ds({
              cause: y
            });
          }
          const R = Ey(y.headers);
          if (!y.ok) {
            if (u && this.shouldRetry(y)) {
              const V = `retrying, ${u} attempts remaining`;
              return ta(`response (error; ${V})`, y.status, m, R), this.retryRequest(s, u, R);
            }
            const x = await y.text().catch((V) => Oo(V).message), O = Rv(x), z = O ? void 0 : x;
            throw ta(`response (error; ${u ? "(error; no more retries left)" : "(error; not retryable)"})`, y.status, m, R, z), this.makeStatusError(y.status, O, z, R);
          }
          return {
            response: y,
            options: s,
            controller: S
          };
        }
        requestAPIList(l, u) {
          const s = this.makeRequest(u, null);
          return new Sv(this, s, l);
        }
        buildURL(l, u) {
          const s = Ov(l) ? new URL(l) : new URL(this.baseURL + (this.baseURL.endsWith("/") && l.startsWith("/") ? l.slice(1) : l)), o = this.defaultQuery();
          return Ty(o) || (u = {
            ...o,
            ...u
          }), typeof u == "object" && u && !Array.isArray(u) && (s.search = this.stringifyQuery(u)), s.toString();
        }
        stringifyQuery(l) {
          return Object.entries(l).filter(([u, s]) => typeof s < "u").map(([u, s]) => {
            if (typeof s == "string" || typeof s == "number" || typeof s == "boolean") return `${encodeURIComponent(u)}=${encodeURIComponent(s)}`;
            if (s === null) return `${encodeURIComponent(u)}=`;
            throw new W(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
          }).join("&");
        }
        async fetchWithTimeout(l, u, s, o) {
          const { signal: d, ...m } = u || {};
          d && d.addEventListener("abort", () => o.abort());
          const v = setTimeout(() => o.abort(), s), S = {
            signal: o.signal,
            ...m
          };
          return S.method && (S.method = S.method.toUpperCase()), this.fetch.call(void 0, l, S).finally(() => {
            clearTimeout(v);
          });
        }
        shouldRetry(l) {
          const u = l.headers.get("x-should-retry");
          return u === "true" ? true : u === "false" ? false : l.status === 408 || l.status === 409 || l.status === 429 || l.status >= 500;
        }
        async retryRequest(l, u, s) {
          let o;
          const d = s == null ? void 0 : s["retry-after-ms"];
          if (d) {
            const v = parseFloat(d);
            Number.isNaN(v) || (o = v);
          }
          const m = s == null ? void 0 : s["retry-after"];
          if (m && !o) {
            const v = parseFloat(m);
            Number.isNaN(v) ? o = Date.parse(m) - Date.now() : o = v * 1e3;
          }
          if (!(o && 0 <= o && o < 60 * 1e3)) {
            const v = l.maxRetries ?? this.maxRetries;
            o = this.calculateDefaultRetryTimeoutMillis(u, v);
          }
          return await Hi(o), this.makeRequest(l, u - 1);
        }
        calculateDefaultRetryTimeoutMillis(l, u) {
          const d = u - l, m = Math.min(0.5 * Math.pow(2, d), 8), v = 1 - Math.random() * 0.25;
          return m * v * 1e3;
        }
        getUserAgent() {
          return `${this.constructor.name}/JS ${ml}`;
        }
      }
      class Ay {
        constructor(l, u, s, o) {
          is.set(this, void 0), gv(this, is, l), this.options = o, this.response = u, this.body = s;
        }
        hasNextPage() {
          return this.getPaginatedItems().length ? this.nextPageInfo() != null : false;
        }
        async getNextPage() {
          const l = this.nextPageInfo();
          if (!l) throw new W("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
          const u = {
            ...this.options
          };
          if ("params" in l && typeof u.query == "object") u.query = {
            ...u.query,
            ...l.params
          };
          else if ("url" in l) {
            const s = [
              ...Object.entries(u.query || {}),
              ...l.url.searchParams.entries()
            ];
            for (const [o, d] of s) l.url.searchParams.set(o, d);
            u.query = void 0, u.path = l.url.toString();
          }
          return await vv(this, is, "f").requestAPIList(this.constructor, u);
        }
        async *iterPages() {
          let l = this;
          for (yield l; l.hasNextPage(); ) l = await l.getNextPage(), yield l;
        }
        async *[(is = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
          for await (const l of this.iterPages()) for (const u of l.getPaginatedItems()) yield u;
        }
      }
      class Sv extends zs {
        constructor(l, u, s) {
          super(u, async (o) => new s(l, o.response, await Sy(o), o.options));
        }
        async *[Symbol.asyncIterator]() {
          const l = await this;
          for await (const u of l) yield u;
        }
      }
      const Ey = (c) => new Proxy(Object.fromEntries(c.entries()), {
        get(l, u) {
          const s = u.toString();
          return l[s.toLowerCase()] || l[s];
        }
      }), wv = {
        method: true,
        path: true,
        query: true,
        body: true,
        headers: true,
        maxRetries: true,
        stream: true,
        timeout: true,
        httpAgent: true,
        signal: true,
        idempotencyKey: true,
        __metadata: true,
        __binaryRequest: true,
        __binaryResponse: true,
        __streamClass: true
      }, Bt = (c) => typeof c == "object" && c !== null && !Ty(c) && Object.keys(c).every((l) => Ry(wv, l)), Av = () => {
        var _a;
        if (typeof Deno < "u" && Deno.build != null) return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ml,
          "X-Stainless-OS": Tp(Deno.build.os),
          "X-Stainless-Arch": Ep(Deno.build.arch),
          "X-Stainless-Runtime": "deno",
          "X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : ((_a = Deno.version) == null ? void 0 : _a.deno) ?? "unknown"
        };
        if (typeof EdgeRuntime < "u") return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ml,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": `other:${EdgeRuntime}`,
          "X-Stainless-Runtime": "edge",
          "X-Stainless-Runtime-Version": process.version
        };
        if (Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]") return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ml,
          "X-Stainless-OS": Tp(process.platform),
          "X-Stainless-Arch": Ep(process.arch),
          "X-Stainless-Runtime": "node",
          "X-Stainless-Runtime-Version": process.version
        };
        const c = Ev();
        return c ? {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ml,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": `browser:${c.browser}`,
          "X-Stainless-Runtime-Version": c.version
        } : {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ml,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": "unknown",
          "X-Stainless-Runtime-Version": "unknown"
        };
      };
      function Ev() {
        if (typeof navigator > "u" || !navigator) return null;
        const c = [
          {
            key: "edge",
            pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
          },
          {
            key: "ie",
            pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
          },
          {
            key: "ie",
            pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
          },
          {
            key: "chrome",
            pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
          },
          {
            key: "firefox",
            pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
          },
          {
            key: "safari",
            pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
          }
        ];
        for (const { key: l, pattern: u } of c) {
          const s = u.exec(navigator.userAgent);
          if (s) {
            const o = s[1] || 0, d = s[2] || 0, m = s[3] || 0;
            return {
              browser: l,
              version: `${o}.${d}.${m}`
            };
          }
        }
        return null;
      }
      const Ep = (c) => c === "x32" ? "x32" : c === "x86_64" || c === "x64" ? "x64" : c === "arm" ? "arm" : c === "aarch64" || c === "arm64" ? "arm64" : c ? `other:${c}` : "unknown", Tp = (c) => (c = c.toLowerCase(), c.includes("ios") ? "iOS" : c === "android" ? "Android" : c === "darwin" ? "MacOS" : c === "win32" ? "Windows" : c === "freebsd" ? "FreeBSD" : c === "openbsd" ? "OpenBSD" : c === "linux" ? "Linux" : c ? `Other:${c}` : "Unknown");
      let Rp;
      const Tv = () => Rp ?? (Rp = Av()), Rv = (c) => {
        try {
          return JSON.parse(c);
        } catch {
          return;
        }
      }, xv = /^[a-z][a-z0-9+.-]*:/i, Ov = (c) => xv.test(c), Hi = (c) => new Promise((l) => setTimeout(l, c)), po = (c, l) => {
        if (typeof l != "number" || !Number.isInteger(l)) throw new W(`${c} must be an integer`);
        if (l < 0) throw new W(`${c} must be a positive integer`);
        return l;
      }, Oo = (c) => {
        if (c instanceof Error) return c;
        if (typeof c == "object" && c !== null) try {
          return new Error(JSON.stringify(c));
        } catch {
        }
        return new Error(c);
      }, us = (c) => {
        var _a, _b2, _c, _d;
        if (typeof process < "u") return ((_a = by == null ? void 0 : by[c]) == null ? void 0 : _a.trim()) ?? void 0;
        if (typeof Deno < "u") return (_d = (_c = (_b2 = Deno.env) == null ? void 0 : _b2.get) == null ? void 0 : _c.call(_b2, c)) == null ? void 0 : _d.trim();
      };
      function Ty(c) {
        if (!c) return true;
        for (const l in c) return false;
        return true;
      }
      function Ry(c, l) {
        return Object.prototype.hasOwnProperty.call(c, l);
      }
      function xp(c, l) {
        for (const u in l) {
          if (!Ry(l, u)) continue;
          const s = u.toLowerCase();
          if (!s) continue;
          const o = l[u];
          o === null ? delete c[s] : o !== void 0 && (c[s] = o);
        }
      }
      const Op = /* @__PURE__ */ new Set([
        "authorization",
        "api-key"
      ]);
      function ta(c, ...l) {
        if (typeof process < "u" && (by == null ? void 0 : by.DEBUG) === "true") {
          const u = l.map((s) => {
            if (!s) return s;
            if (s.headers) {
              const d = {
                ...s,
                headers: {
                  ...s.headers
                }
              };
              for (const m in s.headers) Op.has(m.toLowerCase()) && (d.headers[m] = "REDACTED");
              return d;
            }
            let o = null;
            for (const d in s) Op.has(d.toLowerCase()) && (o ?? (o = {
              ...s
            }), o[d] = "REDACTED");
            return o ?? s;
          });
          console.log(`OpenAI:DEBUG:${c}`, ...u);
        }
      }
      const Mv = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const l = Math.random() * 16 | 0;
        return (c === "x" ? l : l & 3 | 8).toString(16);
      }), Dv = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u", Cv = (c) => typeof (c == null ? void 0 : c.get) == "function", ss = (c, l) => {
        var _a;
        const u = l.toLowerCase();
        if (Cv(c)) {
          const s = ((_a = l[0]) == null ? void 0 : _a.toUpperCase()) + l.substring(1).replace(/([^\w])(\w)/g, (o, d, m) => d + m.toUpperCase());
          for (const o of [
            l,
            u,
            l.toUpperCase(),
            s
          ]) {
            const d = c.get(o);
            if (d) return d;
          }
        }
        for (const [s, o] of Object.entries(c)) if (s.toLowerCase() === u) return Array.isArray(o) ? (o.length <= 1 || console.warn(`Received ${o.length} entries for the ${l} header, using the first entry.`), o[0]) : o;
      }, Uv = (c) => {
        if (typeof Buffer < "u") {
          const l = Buffer.from(c, "base64");
          return Array.from(new Float32Array(l.buffer, l.byteOffset, l.length / Float32Array.BYTES_PER_ELEMENT));
        } else {
          const l = atob(c), u = l.length, s = new Uint8Array(u);
          for (let o = 0; o < u; o++) s[o] = l.charCodeAt(o);
          return Array.from(new Float32Array(s.buffer));
        }
      };
      function yo(c) {
        return c != null && typeof c == "object" && !Array.isArray(c);
      }
      class Ns extends Ay {
        constructor(l, u, s, o) {
          super(l, u, s, o), this.data = s.data || [], this.object = s.object;
        }
        getPaginatedItems() {
          return this.data ?? [];
        }
        nextPageParams() {
          return null;
        }
        nextPageInfo() {
          return null;
        }
      }
      class le extends Ay {
        constructor(l, u, s, o) {
          super(l, u, s, o), this.data = s.data || [], this.has_more = s.has_more || false;
        }
        getPaginatedItems() {
          return this.data ?? [];
        }
        hasNextPage() {
          return this.has_more === false ? false : super.hasNextPage();
        }
        nextPageParams() {
          const l = this.nextPageInfo();
          if (!l) return null;
          if ("params" in l) return l.params;
          const u = Object.fromEntries(l.url.searchParams);
          return Object.keys(u).length ? u : null;
        }
        nextPageInfo() {
          var _a;
          const l = this.getPaginatedItems();
          if (!l.length) return null;
          const u = (_a = l[l.length - 1]) == null ? void 0 : _a.id;
          return u ? {
            params: {
              after: u
            }
          } : null;
        }
      }
      class at {
        constructor(l) {
          this._client = l;
        }
      }
      let xy = class extends at {
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/chat/completions/${l}/messages`, zv, {
            query: u,
            ...s
          });
        }
      }, Bs = class extends at {
        constructor() {
          super(...arguments), this.messages = new xy(this._client);
        }
        create(l, u) {
          return this._client.post("/chat/completions", {
            body: l,
            ...u,
            stream: l.stream ?? false
          });
        }
        retrieve(l, u) {
          return this._client.get(`/chat/completions/${l}`, u);
        }
        update(l, u, s) {
          return this._client.post(`/chat/completions/${l}`, {
            body: u,
            ...s
          });
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/chat/completions", Hs, {
            query: l,
            ...u
          });
        }
        del(l, u) {
          return this._client.delete(`/chat/completions/${l}`, u);
        }
      };
      class Hs extends le {
      }
      class zv extends le {
      }
      Bs.ChatCompletionsPage = Hs;
      Bs.Messages = xy;
      let qs = class extends at {
        constructor() {
          super(...arguments), this.completions = new Bs(this._client);
        }
      };
      qs.Completions = Bs;
      qs.ChatCompletionsPage = Hs;
      class Oy extends at {
        create(l, u) {
          return this._client.post("/audio/speech", {
            body: l,
            ...u,
            headers: {
              Accept: "application/octet-stream",
              ...u == null ? void 0 : u.headers
            },
            __binaryResponse: true
          });
        }
      }
      class My extends at {
        create(l, u) {
          return this._client.post("/audio/transcriptions", Sl({
            body: l,
            ...u,
            stream: l.stream ?? false,
            __metadata: {
              model: l.model
            }
          }));
        }
      }
      class Dy extends at {
        create(l, u) {
          return this._client.post("/audio/translations", Sl({
            body: l,
            ...u,
            __metadata: {
              model: l.model
            }
          }));
        }
      }
      class qi extends at {
        constructor() {
          super(...arguments), this.transcriptions = new My(this._client), this.translations = new Dy(this._client), this.speech = new Oy(this._client);
        }
      }
      qi.Transcriptions = My;
      qi.Translations = Dy;
      qi.Speech = Oy;
      class Lo extends at {
        create(l, u) {
          return this._client.post("/batches", {
            body: l,
            ...u
          });
        }
        retrieve(l, u) {
          return this._client.get(`/batches/${l}`, u);
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/batches", Xo, {
            query: l,
            ...u
          });
        }
        cancel(l, u) {
          return this._client.post(`/batches/${l}/cancel`, u);
        }
      }
      class Xo extends le {
      }
      Lo.BatchesPage = Xo;
      class Yo extends at {
        create(l, u) {
          return this._client.post("/assistants", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        retrieve(l, u) {
          return this._client.get(`/assistants/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        update(l, u, s) {
          return this._client.post(`/assistants/${l}`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/assistants", Go, {
            query: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        del(l, u) {
          return this._client.delete(`/assistants/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
      }
      class Go extends le {
      }
      Yo.AssistantsPage = Go;
      function Mp(c) {
        return typeof c.parse == "function";
      }
      const gl = (c) => (c == null ? void 0 : c.role) === "assistant", Cy = (c) => (c == null ? void 0 : c.role) === "function", Uy = (c) => (c == null ? void 0 : c.role) === "tool";
      var ke = function(c, l, u, s, o) {
        if (s === "m") throw new TypeError("Private method is not writable");
        if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof l == "function" ? c !== l || !o : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return s === "a" ? o.call(c, u) : o ? o.value = u : l.set(c, u), u;
      }, Ut = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, Mo, _s, gs, Ti, Ri, vs, xi, En, Oi, Ts, Rs, pl, zy;
      class Qo {
        constructor() {
          Mo.add(this), this.controller = new AbortController(), _s.set(this, void 0), gs.set(this, () => {
          }), Ti.set(this, () => {
          }), Ri.set(this, void 0), vs.set(this, () => {
          }), xi.set(this, () => {
          }), En.set(this, {}), Oi.set(this, false), Ts.set(this, false), Rs.set(this, false), pl.set(this, false), ke(this, _s, new Promise((l, u) => {
            ke(this, gs, l, "f"), ke(this, Ti, u, "f");
          }), "f"), ke(this, Ri, new Promise((l, u) => {
            ke(this, vs, l, "f"), ke(this, xi, u, "f");
          }), "f"), Ut(this, _s, "f").catch(() => {
          }), Ut(this, Ri, "f").catch(() => {
          });
        }
        _run(l) {
          setTimeout(() => {
            l().then(() => {
              this._emitFinal(), this._emit("end");
            }, Ut(this, Mo, "m", zy).bind(this));
          }, 0);
        }
        _connected() {
          this.ended || (Ut(this, gs, "f").call(this), this._emit("connect"));
        }
        get ended() {
          return Ut(this, Oi, "f");
        }
        get errored() {
          return Ut(this, Ts, "f");
        }
        get aborted() {
          return Ut(this, Rs, "f");
        }
        abort() {
          this.controller.abort();
        }
        on(l, u) {
          return (Ut(this, En, "f")[l] || (Ut(this, En, "f")[l] = [])).push({
            listener: u
          }), this;
        }
        off(l, u) {
          const s = Ut(this, En, "f")[l];
          if (!s) return this;
          const o = s.findIndex((d) => d.listener === u);
          return o >= 0 && s.splice(o, 1), this;
        }
        once(l, u) {
          return (Ut(this, En, "f")[l] || (Ut(this, En, "f")[l] = [])).push({
            listener: u,
            once: true
          }), this;
        }
        emitted(l) {
          return new Promise((u, s) => {
            ke(this, pl, true, "f"), l !== "error" && this.once("error", s), this.once(l, u);
          });
        }
        async done() {
          ke(this, pl, true, "f"), await Ut(this, Ri, "f");
        }
        _emit(l, ...u) {
          if (Ut(this, Oi, "f")) return;
          l === "end" && (ke(this, Oi, true, "f"), Ut(this, vs, "f").call(this));
          const s = Ut(this, En, "f")[l];
          if (s && (Ut(this, En, "f")[l] = s.filter((o) => !o.once), s.forEach(({ listener: o }) => o(...u))), l === "abort") {
            const o = u[0];
            !Ut(this, pl, "f") && !(s == null ? void 0 : s.length) && Promise.reject(o), Ut(this, Ti, "f").call(this, o), Ut(this, xi, "f").call(this, o), this._emit("end");
            return;
          }
          if (l === "error") {
            const o = u[0];
            !Ut(this, pl, "f") && !(s == null ? void 0 : s.length) && Promise.reject(o), Ut(this, Ti, "f").call(this, o), Ut(this, xi, "f").call(this, o), this._emit("end");
          }
        }
        _emitFinal() {
        }
      }
      _s = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakSet(), zy = function(l) {
        if (ke(this, Ts, true, "f"), l instanceof Error && l.name === "AbortError" && (l = new Xe()), l instanceof Xe) return ke(this, Rs, true, "f"), this._emit("abort", l);
        if (l instanceof W) return this._emit("error", l);
        if (l instanceof Error) {
          const u = new W(l.message);
          return u.cause = l, this._emit("error", u);
        }
        return this._emit("error", new W(String(l)));
      };
      function Vo(c) {
        return (c == null ? void 0 : c.$brand) === "auto-parseable-response-format";
      }
      function ji(c) {
        return (c == null ? void 0 : c.$brand) === "auto-parseable-tool";
      }
      function Nv(c, l) {
        return !l || !Ny(l) ? {
          ...c,
          choices: c.choices.map((u) => ({
            ...u,
            message: {
              ...u.message,
              parsed: null,
              ...u.message.tool_calls ? {
                tool_calls: u.message.tool_calls
              } : void 0
            }
          }))
        } : Zo(c, l);
      }
      function Zo(c, l) {
        const u = c.choices.map((s) => {
          var _a;
          if (s.finish_reason === "length") throw new my();
          if (s.finish_reason === "content_filter") throw new py();
          return {
            ...s,
            message: {
              ...s.message,
              ...s.message.tool_calls ? {
                tool_calls: ((_a = s.message.tool_calls) == null ? void 0 : _a.map((o) => Hv(l, o))) ?? void 0
              } : void 0,
              parsed: s.message.content && !s.message.refusal ? Bv(l, s.message.content) : null
            }
          };
        });
        return {
          ...c,
          choices: u
        };
      }
      function Bv(c, l) {
        var _a, _b2;
        return ((_a = c.response_format) == null ? void 0 : _a.type) !== "json_schema" ? null : ((_b2 = c.response_format) == null ? void 0 : _b2.type) === "json_schema" ? "$parseRaw" in c.response_format ? c.response_format.$parseRaw(l) : JSON.parse(l) : null;
      }
      function Hv(c, l) {
        var _a;
        const u = (_a = c.tools) == null ? void 0 : _a.find((s) => {
          var _a2;
          return ((_a2 = s.function) == null ? void 0 : _a2.name) === l.function.name;
        });
        return {
          ...l,
          function: {
            ...l.function,
            parsed_arguments: ji(u) ? u.$parseRaw(l.function.arguments) : (u == null ? void 0 : u.function.strict) ? JSON.parse(l.function.arguments) : null
          }
        };
      }
      function qv(c, l) {
        var _a;
        if (!c) return false;
        const u = (_a = c.tools) == null ? void 0 : _a.find((s) => {
          var _a2;
          return ((_a2 = s.function) == null ? void 0 : _a2.name) === l.function.name;
        });
        return ji(u) || (u == null ? void 0 : u.function.strict) || false;
      }
      function Ny(c) {
        var _a;
        return Vo(c.response_format) ? true : ((_a = c.tools) == null ? void 0 : _a.some((l) => ji(l) || l.type === "function" && l.function.strict === true)) ?? false;
      }
      function jv(c) {
        for (const l of c ?? []) {
          if (l.type !== "function") throw new W(`Currently only \`function\` tool types support auto-parsing; Received \`${l.type}\``);
          if (l.function.strict !== true) throw new W(`The \`${l.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
        }
      }
      var ye = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, re, Do, xs, Co, Uo, zo, By, No;
      const Dp = 10;
      class Hy extends Qo {
        constructor() {
          super(...arguments), re.add(this), this._chatCompletions = [], this.messages = [];
        }
        _addChatCompletion(l) {
          var _a;
          this._chatCompletions.push(l), this._emit("chatCompletion", l);
          const u = (_a = l.choices[0]) == null ? void 0 : _a.message;
          return u && this._addMessage(u), l;
        }
        _addMessage(l, u = true) {
          if ("content" in l || (l.content = null), this.messages.push(l), u) {
            if (this._emit("message", l), (Cy(l) || Uy(l)) && l.content) this._emit("functionCallResult", l.content);
            else if (gl(l) && l.function_call) this._emit("functionCall", l.function_call);
            else if (gl(l) && l.tool_calls) for (const s of l.tool_calls) s.type === "function" && this._emit("functionCall", s.function);
          }
        }
        async finalChatCompletion() {
          await this.done();
          const l = this._chatCompletions[this._chatCompletions.length - 1];
          if (!l) throw new W("stream ended without producing a ChatCompletion");
          return l;
        }
        async finalContent() {
          return await this.done(), ye(this, re, "m", Do).call(this);
        }
        async finalMessage() {
          return await this.done(), ye(this, re, "m", xs).call(this);
        }
        async finalFunctionCall() {
          return await this.done(), ye(this, re, "m", Co).call(this);
        }
        async finalFunctionCallResult() {
          return await this.done(), ye(this, re, "m", Uo).call(this);
        }
        async totalUsage() {
          return await this.done(), ye(this, re, "m", zo).call(this);
        }
        allChatCompletions() {
          return [
            ...this._chatCompletions
          ];
        }
        _emitFinal() {
          const l = this._chatCompletions[this._chatCompletions.length - 1];
          l && this._emit("finalChatCompletion", l);
          const u = ye(this, re, "m", xs).call(this);
          u && this._emit("finalMessage", u);
          const s = ye(this, re, "m", Do).call(this);
          s && this._emit("finalContent", s);
          const o = ye(this, re, "m", Co).call(this);
          o && this._emit("finalFunctionCall", o);
          const d = ye(this, re, "m", Uo).call(this);
          d != null && this._emit("finalFunctionCallResult", d), this._chatCompletions.some((m) => m.usage) && this._emit("totalUsage", ye(this, re, "m", zo).call(this));
        }
        async _createChatCompletion(l, u, s) {
          const o = s == null ? void 0 : s.signal;
          o && (o.aborted && this.controller.abort(), o.addEventListener("abort", () => this.controller.abort())), ye(this, re, "m", By).call(this, u);
          const d = await l.chat.completions.create({
            ...u,
            stream: false
          }, {
            ...s,
            signal: this.controller.signal
          });
          return this._connected(), this._addChatCompletion(Zo(d, u));
        }
        async _runChatCompletion(l, u, s) {
          for (const o of u.messages) this._addMessage(o, false);
          return await this._createChatCompletion(l, u, s);
        }
        async _runFunctions(l, u, s) {
          var _a;
          const o = "function", { function_call: d = "auto", stream: m, ...v } = u, S = typeof d != "string" && (d == null ? void 0 : d.name), { maxChatCompletions: y = Dp } = s || {}, R = {};
          for (const O of u.functions) R[O.name || O.function.name] = O;
          const x = u.functions.map((O) => ({
            name: O.name || O.function.name,
            parameters: O.parameters,
            description: O.description
          }));
          for (const O of u.messages) this._addMessage(O, false);
          for (let O = 0; O < y; ++O) {
            const L = (_a = (await this._createChatCompletion(l, {
              ...v,
              function_call: d,
              functions: x,
              messages: [
                ...this.messages
              ]
            }, s)).choices[0]) == null ? void 0 : _a.message;
            if (!L) throw new W("missing message in ChatCompletion response");
            if (!L.function_call) return;
            const { name: j, arguments: V } = L.function_call, ut = R[j];
            if (ut) {
              if (S && S !== j) {
                const Q = `Invalid function_call: ${JSON.stringify(j)}. ${JSON.stringify(S)} requested. Please try again`;
                this._addMessage({
                  role: o,
                  name: j,
                  content: Q
                });
                continue;
              }
            } else {
              const Q = `Invalid function_call: ${JSON.stringify(j)}. Available options are: ${x.map((ft) => JSON.stringify(ft.name)).join(", ")}. Please try again`;
              this._addMessage({
                role: o,
                name: j,
                content: Q
              });
              continue;
            }
            let B;
            try {
              B = Mp(ut) ? await ut.parse(V) : V;
            } catch (Q) {
              this._addMessage({
                role: o,
                name: j,
                content: Q instanceof Error ? Q.message : String(Q)
              });
              continue;
            }
            const tt = await ut.function(B, this), st = ye(this, re, "m", No).call(this, tt);
            if (this._addMessage({
              role: o,
              name: j,
              content: st
            }), S) return;
          }
        }
        async _runTools(l, u, s) {
          var _a, _b2, _c;
          const o = "tool", { tool_choice: d = "auto", stream: m, ...v } = u, S = typeof d != "string" && ((_a = d == null ? void 0 : d.function) == null ? void 0 : _a.name), { maxChatCompletions: y = Dp } = s || {}, R = u.tools.map((z) => {
            if (ji(z)) {
              if (!z.$callback) throw new W("Tool given to `.runTools()` that does not have an associated function");
              return {
                type: "function",
                function: {
                  function: z.$callback,
                  name: z.function.name,
                  description: z.function.description || "",
                  parameters: z.function.parameters,
                  parse: z.$parseRaw,
                  strict: true
                }
              };
            }
            return z;
          }), x = {};
          for (const z of R) z.type === "function" && (x[z.function.name || z.function.function.name] = z.function);
          const O = "tools" in u ? R.map((z) => z.type === "function" ? {
            type: "function",
            function: {
              name: z.function.name || z.function.function.name,
              parameters: z.function.parameters,
              description: z.function.description,
              strict: z.function.strict
            }
          } : z) : void 0;
          for (const z of u.messages) this._addMessage(z, false);
          for (let z = 0; z < y; ++z) {
            const j = (_b2 = (await this._createChatCompletion(l, {
              ...v,
              tool_choice: d,
              tools: O,
              messages: [
                ...this.messages
              ]
            }, s)).choices[0]) == null ? void 0 : _b2.message;
            if (!j) throw new W("missing message in ChatCompletion response");
            if (!((_c = j.tool_calls) == null ? void 0 : _c.length)) return;
            for (const V of j.tool_calls) {
              if (V.type !== "function") continue;
              const ut = V.id, { name: B, arguments: tt } = V.function, st = x[B];
              if (st) {
                if (S && S !== B) {
                  const pt = `Invalid tool_call: ${JSON.stringify(B)}. ${JSON.stringify(S)} requested. Please try again`;
                  this._addMessage({
                    role: o,
                    tool_call_id: ut,
                    content: pt
                  });
                  continue;
                }
              } else {
                const pt = `Invalid tool_call: ${JSON.stringify(B)}. Available options are: ${Object.keys(x).map((_t) => JSON.stringify(_t)).join(", ")}. Please try again`;
                this._addMessage({
                  role: o,
                  tool_call_id: ut,
                  content: pt
                });
                continue;
              }
              let Q;
              try {
                Q = Mp(st) ? await st.parse(tt) : tt;
              } catch (pt) {
                const _t = pt instanceof Error ? pt.message : String(pt);
                this._addMessage({
                  role: o,
                  tool_call_id: ut,
                  content: _t
                });
                continue;
              }
              const ft = await st.function(Q, this), ot = ye(this, re, "m", No).call(this, ft);
              if (this._addMessage({
                role: o,
                tool_call_id: ut,
                content: ot
              }), S) return;
            }
          }
        }
      }
      re = /* @__PURE__ */ new WeakSet(), Do = function() {
        return ye(this, re, "m", xs).call(this).content ?? null;
      }, xs = function() {
        let l = this.messages.length;
        for (; l-- > 0; ) {
          const u = this.messages[l];
          if (gl(u)) {
            const { function_call: s, ...o } = u, d = {
              ...o,
              content: u.content ?? null,
              refusal: u.refusal ?? null
            };
            return s && (d.function_call = s), d;
          }
        }
        throw new W("stream ended without producing a ChatCompletionMessage with role=assistant");
      }, Co = function() {
        var _a, _b2;
        for (let l = this.messages.length - 1; l >= 0; l--) {
          const u = this.messages[l];
          if (gl(u) && (u == null ? void 0 : u.function_call)) return u.function_call;
          if (gl(u) && ((_a = u == null ? void 0 : u.tool_calls) == null ? void 0 : _a.length)) return (_b2 = u.tool_calls.at(-1)) == null ? void 0 : _b2.function;
        }
      }, Uo = function() {
        for (let l = this.messages.length - 1; l >= 0; l--) {
          const u = this.messages[l];
          if (Cy(u) && u.content != null || Uy(u) && u.content != null && typeof u.content == "string" && this.messages.some((s) => {
            var _a;
            return s.role === "assistant" && ((_a = s.tool_calls) == null ? void 0 : _a.some((o) => o.type === "function" && o.id === u.tool_call_id));
          })) return u.content;
        }
      }, zo = function() {
        const l = {
          completion_tokens: 0,
          prompt_tokens: 0,
          total_tokens: 0
        };
        for (const { usage: u } of this._chatCompletions) u && (l.completion_tokens += u.completion_tokens, l.prompt_tokens += u.prompt_tokens, l.total_tokens += u.total_tokens);
        return l;
      }, By = function(l) {
        if (l.n != null && l.n > 1) throw new W("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
      }, No = function(l) {
        return typeof l == "string" ? l : l === void 0 ? "undefined" : JSON.stringify(l);
      };
      class Ni extends Hy {
        static runFunctions(l, u, s) {
          const o = new Ni(), d = {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "runFunctions"
            }
          };
          return o._run(() => o._runFunctions(l, u, d)), o;
        }
        static runTools(l, u, s) {
          const o = new Ni(), d = {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "runTools"
            }
          };
          return o._run(() => o._runTools(l, u, d)), o;
        }
        _addMessage(l, u = true) {
          super._addMessage(l, u), gl(l) && l.content && this._emit("content", l.content);
        }
      }
      const qy = 1, jy = 2, Ly = 4, Xy = 8, Yy = 16, Gy = 32, Qy = 64, Vy = 128, Zy = 256, ky = Vy | Zy, Ky = Yy | Gy | ky | Qy, Jy = qy | jy | Ky, $y = Ly | Xy, Lv = Jy | $y, Wt = {
        STR: qy,
        NUM: jy,
        ARR: Ly,
        OBJ: Xy,
        NULL: Yy,
        BOOL: Gy,
        NAN: Qy,
        INFINITY: Vy,
        MINUS_INFINITY: Zy,
        INF: ky,
        SPECIAL: Ky,
        ATOM: Jy,
        COLLECTION: $y,
        ALL: Lv
      };
      class Xv extends Error {
      }
      class Yv extends Error {
      }
      function Gv(c, l = Wt.ALL) {
        if (typeof c != "string") throw new TypeError(`expecting str, got ${typeof c}`);
        if (!c.trim()) throw new Error(`${c} is empty`);
        return Qv(c.trim(), l);
      }
      const Qv = (c, l) => {
        const u = c.length;
        let s = 0;
        const o = (O) => {
          throw new Xv(`${O} at position ${s}`);
        }, d = (O) => {
          throw new Yv(`${O} at position ${s}`);
        }, m = () => (x(), s >= u && o("Unexpected end of input"), c[s] === '"' ? v() : c[s] === "{" ? S() : c[s] === "[" ? y() : c.substring(s, s + 4) === "null" || Wt.NULL & l && u - s < 4 && "null".startsWith(c.substring(s)) ? (s += 4, null) : c.substring(s, s + 4) === "true" || Wt.BOOL & l && u - s < 4 && "true".startsWith(c.substring(s)) ? (s += 4, true) : c.substring(s, s + 5) === "false" || Wt.BOOL & l && u - s < 5 && "false".startsWith(c.substring(s)) ? (s += 5, false) : c.substring(s, s + 8) === "Infinity" || Wt.INFINITY & l && u - s < 8 && "Infinity".startsWith(c.substring(s)) ? (s += 8, 1 / 0) : c.substring(s, s + 9) === "-Infinity" || Wt.MINUS_INFINITY & l && 1 < u - s && u - s < 9 && "-Infinity".startsWith(c.substring(s)) ? (s += 9, -1 / 0) : c.substring(s, s + 3) === "NaN" || Wt.NAN & l && u - s < 3 && "NaN".startsWith(c.substring(s)) ? (s += 3, NaN) : R()), v = () => {
          const O = s;
          let z = false;
          for (s++; s < u && (c[s] !== '"' || z && c[s - 1] === "\\"); ) z = c[s] === "\\" ? !z : false, s++;
          if (c.charAt(s) == '"') try {
            return JSON.parse(c.substring(O, ++s - Number(z)));
          } catch (L) {
            d(String(L));
          }
          else if (Wt.STR & l) try {
            return JSON.parse(c.substring(O, s - Number(z)) + '"');
          } catch {
            return JSON.parse(c.substring(O, c.lastIndexOf("\\")) + '"');
          }
          o("Unterminated string literal");
        }, S = () => {
          s++, x();
          const O = {};
          try {
            for (; c[s] !== "}"; ) {
              if (x(), s >= u && Wt.OBJ & l) return O;
              const z = v();
              x(), s++;
              try {
                const L = m();
                Object.defineProperty(O, z, {
                  value: L,
                  writable: true,
                  enumerable: true,
                  configurable: true
                });
              } catch (L) {
                if (Wt.OBJ & l) return O;
                throw L;
              }
              x(), c[s] === "," && s++;
            }
          } catch {
            if (Wt.OBJ & l) return O;
            o("Expected '}' at end of object");
          }
          return s++, O;
        }, y = () => {
          s++;
          const O = [];
          try {
            for (; c[s] !== "]"; ) O.push(m()), x(), c[s] === "," && s++;
          } catch {
            if (Wt.ARR & l) return O;
            o("Expected ']' at end of array");
          }
          return s++, O;
        }, R = () => {
          if (s === 0) {
            c === "-" && Wt.NUM & l && o("Not sure what '-' is");
            try {
              return JSON.parse(c);
            } catch (z) {
              if (Wt.NUM & l) try {
                return c[c.length - 1] === "." ? JSON.parse(c.substring(0, c.lastIndexOf("."))) : JSON.parse(c.substring(0, c.lastIndexOf("e")));
              } catch {
              }
              d(String(z));
            }
          }
          const O = s;
          for (c[s] === "-" && s++; c[s] && !",]}".includes(c[s]); ) s++;
          s == u && !(Wt.NUM & l) && o("Unterminated number literal");
          try {
            return JSON.parse(c.substring(O, s));
          } catch {
            c.substring(O, s) === "-" && Wt.NUM & l && o("Not sure what '-' is");
            try {
              return JSON.parse(c.substring(O, c.lastIndexOf("e")));
            } catch (L) {
              d(String(L));
            }
          }
        }, x = () => {
          for (; s < u && ` 
\r	`.includes(c[s]); ) s++;
        };
        return m();
      }, Cp = (c) => Gv(c, Wt.ALL ^ Wt.NUM);
      var cl = function(c, l, u, s, o) {
        if (s === "m") throw new TypeError("Private method is not writable");
        if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof l == "function" ? c !== l || !o : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return s === "a" ? o.call(c, u) : o ? o.value = u : l.set(c, u), u;
      }, Et = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, Zt, An, ol, Wn, _o, rs, go, vo, bo, cs, So, Up;
      class Bi extends Hy {
        constructor(l) {
          super(), Zt.add(this), An.set(this, void 0), ol.set(this, void 0), Wn.set(this, void 0), cl(this, An, l, "f"), cl(this, ol, [], "f");
        }
        get currentChatCompletionSnapshot() {
          return Et(this, Wn, "f");
        }
        static fromReadableStream(l) {
          const u = new Bi(null);
          return u._run(() => u._fromReadableStream(l)), u;
        }
        static createChatCompletion(l, u, s) {
          const o = new Bi(u);
          return o._run(() => o._runChatCompletion(l, {
            ...u,
            stream: true
          }, {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "stream"
            }
          })), o;
        }
        async _createChatCompletion(l, u, s) {
          var _a;
          super._createChatCompletion;
          const o = s == null ? void 0 : s.signal;
          o && (o.aborted && this.controller.abort(), o.addEventListener("abort", () => this.controller.abort())), Et(this, Zt, "m", _o).call(this);
          const d = await l.chat.completions.create({
            ...u,
            stream: true
          }, {
            ...s,
            signal: this.controller.signal
          });
          this._connected();
          for await (const m of d) Et(this, Zt, "m", go).call(this, m);
          if ((_a = d.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addChatCompletion(Et(this, Zt, "m", cs).call(this));
        }
        async _fromReadableStream(l, u) {
          var _a;
          const s = u == null ? void 0 : u.signal;
          s && (s.aborted && this.controller.abort(), s.addEventListener("abort", () => this.controller.abort())), Et(this, Zt, "m", _o).call(this), this._connected();
          const o = un.fromReadableStream(l, this.controller);
          let d;
          for await (const m of o) d && d !== m.id && this._addChatCompletion(Et(this, Zt, "m", cs).call(this)), Et(this, Zt, "m", go).call(this, m), d = m.id;
          if ((_a = o.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addChatCompletion(Et(this, Zt, "m", cs).call(this));
        }
        [(An = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakSet(), _o = function() {
          this.ended || cl(this, Wn, void 0, "f");
        }, rs = function(u) {
          let s = Et(this, ol, "f")[u.index];
          return s || (s = {
            content_done: false,
            refusal_done: false,
            logprobs_content_done: false,
            logprobs_refusal_done: false,
            done_tool_calls: /* @__PURE__ */ new Set(),
            current_tool_call_index: null
          }, Et(this, ol, "f")[u.index] = s, s);
        }, go = function(u) {
          var _a, _b2, _c, _d, _e, _f2, _g, _h, _i, _j, _k, _l2, _m, _n, _o2;
          if (this.ended) return;
          const s = Et(this, Zt, "m", Up).call(this, u);
          this._emit("chunk", u, s);
          for (const o of u.choices) {
            const d = s.choices[o.index];
            o.delta.content != null && ((_a = d.message) == null ? void 0 : _a.role) === "assistant" && ((_b2 = d.message) == null ? void 0 : _b2.content) && (this._emit("content", o.delta.content, d.message.content), this._emit("content.delta", {
              delta: o.delta.content,
              snapshot: d.message.content,
              parsed: d.message.parsed
            })), o.delta.refusal != null && ((_c = d.message) == null ? void 0 : _c.role) === "assistant" && ((_d = d.message) == null ? void 0 : _d.refusal) && this._emit("refusal.delta", {
              delta: o.delta.refusal,
              snapshot: d.message.refusal
            }), ((_e = o.logprobs) == null ? void 0 : _e.content) != null && ((_f2 = d.message) == null ? void 0 : _f2.role) === "assistant" && this._emit("logprobs.content.delta", {
              content: (_g = o.logprobs) == null ? void 0 : _g.content,
              snapshot: ((_h = d.logprobs) == null ? void 0 : _h.content) ?? []
            }), ((_i = o.logprobs) == null ? void 0 : _i.refusal) != null && ((_j = d.message) == null ? void 0 : _j.role) === "assistant" && this._emit("logprobs.refusal.delta", {
              refusal: (_k = o.logprobs) == null ? void 0 : _k.refusal,
              snapshot: ((_l2 = d.logprobs) == null ? void 0 : _l2.refusal) ?? []
            });
            const m = Et(this, Zt, "m", rs).call(this, d);
            d.finish_reason && (Et(this, Zt, "m", bo).call(this, d), m.current_tool_call_index != null && Et(this, Zt, "m", vo).call(this, d, m.current_tool_call_index));
            for (const v of o.delta.tool_calls ?? []) m.current_tool_call_index !== v.index && (Et(this, Zt, "m", bo).call(this, d), m.current_tool_call_index != null && Et(this, Zt, "m", vo).call(this, d, m.current_tool_call_index)), m.current_tool_call_index = v.index;
            for (const v of o.delta.tool_calls ?? []) {
              const S = (_m = d.message.tool_calls) == null ? void 0 : _m[v.index];
              (S == null ? void 0 : S.type) && ((S == null ? void 0 : S.type) === "function" ? this._emit("tool_calls.function.arguments.delta", {
                name: (_n = S.function) == null ? void 0 : _n.name,
                index: v.index,
                arguments: S.function.arguments,
                parsed_arguments: S.function.parsed_arguments,
                arguments_delta: ((_o2 = v.function) == null ? void 0 : _o2.arguments) ?? ""
              }) : (S == null ? void 0 : S.type, void 0));
            }
          }
        }, vo = function(u, s) {
          var _a, _b2, _c;
          if (Et(this, Zt, "m", rs).call(this, u).done_tool_calls.has(s)) return;
          const d = (_a = u.message.tool_calls) == null ? void 0 : _a[s];
          if (!d) throw new Error("no tool call snapshot");
          if (!d.type) throw new Error("tool call snapshot missing `type`");
          if (d.type === "function") {
            const m = (_c = (_b2 = Et(this, An, "f")) == null ? void 0 : _b2.tools) == null ? void 0 : _c.find((v) => v.type === "function" && v.function.name === d.function.name);
            this._emit("tool_calls.function.arguments.done", {
              name: d.function.name,
              index: s,
              arguments: d.function.arguments,
              parsed_arguments: ji(m) ? m.$parseRaw(d.function.arguments) : (m == null ? void 0 : m.function.strict) ? JSON.parse(d.function.arguments) : null
            });
          } else d.type;
        }, bo = function(u) {
          var _a, _b2;
          const s = Et(this, Zt, "m", rs).call(this, u);
          if (u.message.content && !s.content_done) {
            s.content_done = true;
            const o = Et(this, Zt, "m", So).call(this);
            this._emit("content.done", {
              content: u.message.content,
              parsed: o ? o.$parseRaw(u.message.content) : null
            });
          }
          u.message.refusal && !s.refusal_done && (s.refusal_done = true, this._emit("refusal.done", {
            refusal: u.message.refusal
          })), ((_a = u.logprobs) == null ? void 0 : _a.content) && !s.logprobs_content_done && (s.logprobs_content_done = true, this._emit("logprobs.content.done", {
            content: u.logprobs.content
          })), ((_b2 = u.logprobs) == null ? void 0 : _b2.refusal) && !s.logprobs_refusal_done && (s.logprobs_refusal_done = true, this._emit("logprobs.refusal.done", {
            refusal: u.logprobs.refusal
          }));
        }, cs = function() {
          if (this.ended) throw new W("stream has ended, this shouldn't happen");
          const u = Et(this, Wn, "f");
          if (!u) throw new W("request ended without sending any chunks");
          return cl(this, Wn, void 0, "f"), cl(this, ol, [], "f"), Vv(u, Et(this, An, "f"));
        }, So = function() {
          var _a;
          const u = (_a = Et(this, An, "f")) == null ? void 0 : _a.response_format;
          return Vo(u) ? u : null;
        }, Up = function(u) {
          var s, o, d, m;
          let v = Et(this, Wn, "f");
          const { choices: S, ...y } = u;
          v ? Object.assign(v, y) : v = cl(this, Wn, {
            ...y,
            choices: []
          }, "f");
          for (const { delta: R, finish_reason: x, index: O, logprobs: z = null, ...L } of u.choices) {
            let j = v.choices[O];
            if (j || (j = v.choices[O] = {
              finish_reason: x,
              index: O,
              message: {},
              logprobs: z,
              ...L
            }), z) if (!j.logprobs) j.logprobs = Object.assign({}, z);
            else {
              const { content: ft, refusal: ot, ...pt } = z;
              Object.assign(j.logprobs, pt), ft && ((s = j.logprobs).content ?? (s.content = []), j.logprobs.content.push(...ft)), ot && ((o = j.logprobs).refusal ?? (o.refusal = []), j.logprobs.refusal.push(...ot));
            }
            if (x && (j.finish_reason = x, Et(this, An, "f") && Ny(Et(this, An, "f")))) {
              if (x === "length") throw new my();
              if (x === "content_filter") throw new py();
            }
            if (Object.assign(j, L), !R) continue;
            const { content: V, refusal: ut, function_call: B, role: tt, tool_calls: st, ...Q } = R;
            if (Object.assign(j.message, Q), ut && (j.message.refusal = (j.message.refusal || "") + ut), tt && (j.message.role = tt), B && (j.message.function_call ? (B.name && (j.message.function_call.name = B.name), B.arguments && ((d = j.message.function_call).arguments ?? (d.arguments = ""), j.message.function_call.arguments += B.arguments)) : j.message.function_call = B), V && (j.message.content = (j.message.content || "") + V, !j.message.refusal && Et(this, Zt, "m", So).call(this) && (j.message.parsed = Cp(j.message.content))), st) {
              j.message.tool_calls || (j.message.tool_calls = []);
              for (const { index: ft, id: ot, type: pt, function: _t, ...Tt } of st) {
                const gt = (m = j.message.tool_calls)[ft] ?? (m[ft] = {});
                Object.assign(gt, Tt), ot && (gt.id = ot), pt && (gt.type = pt), _t && (gt.function ?? (gt.function = {
                  name: _t.name ?? "",
                  arguments: ""
                })), (_t == null ? void 0 : _t.name) && (gt.function.name = _t.name), (_t == null ? void 0 : _t.arguments) && (gt.function.arguments += _t.arguments, qv(Et(this, An, "f"), gt) && (gt.function.parsed_arguments = Cp(gt.function.arguments)));
              }
            }
          }
          return v;
        }, Symbol.asyncIterator)]() {
          const l = [], u = [];
          let s = false;
          return this.on("chunk", (o) => {
            const d = u.shift();
            d ? d.resolve(o) : l.push(o);
          }), this.on("end", () => {
            s = true;
            for (const o of u) o.resolve(void 0);
            u.length = 0;
          }), this.on("abort", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), this.on("error", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), {
            next: async () => l.length ? {
              value: l.shift(),
              done: false
            } : s ? {
              value: void 0,
              done: true
            } : new Promise((d, m) => u.push({
              resolve: d,
              reject: m
            })).then((d) => d ? {
              value: d,
              done: false
            } : {
              value: void 0,
              done: true
            }),
            return: async () => (this.abort(), {
              value: void 0,
              done: true
            })
          };
        }
        toReadableStream() {
          return new un(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
        }
      }
      function Vv(c, l) {
        const { id: u, choices: s, created: o, model: d, system_fingerprint: m, ...v } = c, S = {
          ...v,
          id: u,
          choices: s.map(({ message: y, finish_reason: R, index: x, logprobs: O, ...z }) => {
            if (!R) throw new W(`missing finish_reason for choice ${x}`);
            const { content: L = null, function_call: j, tool_calls: V, ...ut } = y, B = y.role;
            if (!B) throw new W(`missing role for choice ${x}`);
            if (j) {
              const { arguments: tt, name: st } = j;
              if (tt == null) throw new W(`missing function_call.arguments for choice ${x}`);
              if (!st) throw new W(`missing function_call.name for choice ${x}`);
              return {
                ...z,
                message: {
                  content: L,
                  function_call: {
                    arguments: tt,
                    name: st
                  },
                  role: B,
                  refusal: y.refusal ?? null
                },
                finish_reason: R,
                index: x,
                logprobs: O
              };
            }
            return V ? {
              ...z,
              index: x,
              finish_reason: R,
              logprobs: O,
              message: {
                ...ut,
                role: B,
                content: L,
                refusal: y.refusal ?? null,
                tool_calls: V.map((tt, st) => {
                  const { function: Q, type: ft, id: ot, ...pt } = tt, { arguments: _t, name: Tt, ...gt } = Q || {};
                  if (ot == null) throw new W(`missing choices[${x}].tool_calls[${st}].id
${os(c)}`);
                  if (ft == null) throw new W(`missing choices[${x}].tool_calls[${st}].type
${os(c)}`);
                  if (Tt == null) throw new W(`missing choices[${x}].tool_calls[${st}].function.name
${os(c)}`);
                  if (_t == null) throw new W(`missing choices[${x}].tool_calls[${st}].function.arguments
${os(c)}`);
                  return {
                    ...pt,
                    id: ot,
                    type: ft,
                    function: {
                      ...gt,
                      name: Tt,
                      arguments: _t
                    }
                  };
                })
              }
            } : {
              ...z,
              message: {
                ...ut,
                content: L,
                role: B,
                refusal: y.refusal ?? null
              },
              finish_reason: R,
              index: x,
              logprobs: O
            };
          }),
          created: o,
          model: d,
          object: "chat.completion",
          ...m ? {
            system_fingerprint: m
          } : {}
        };
        return Nv(S, l);
      }
      function os(c) {
        return JSON.stringify(c);
      }
      class vl extends Bi {
        static fromReadableStream(l) {
          const u = new vl(null);
          return u._run(() => u._fromReadableStream(l)), u;
        }
        static runFunctions(l, u, s) {
          const o = new vl(null), d = {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "runFunctions"
            }
          };
          return o._run(() => o._runFunctions(l, u, d)), o;
        }
        static runTools(l, u, s) {
          const o = new vl(u), d = {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "runTools"
            }
          };
          return o._run(() => o._runTools(l, u, d)), o;
        }
      }
      let Fy = class extends at {
        parse(l, u) {
          return jv(l.tools), this._client.chat.completions.create(l, {
            ...u,
            headers: {
              ...u == null ? void 0 : u.headers,
              "X-Stainless-Helper-Method": "beta.chat.completions.parse"
            }
          })._thenUnwrap((s) => Zo(s, l));
        }
        runFunctions(l, u) {
          return l.stream ? vl.runFunctions(this._client, l, u) : Ni.runFunctions(this._client, l, u);
        }
        runTools(l, u) {
          return l.stream ? vl.runTools(this._client, l, u) : Ni.runTools(this._client, l, u);
        }
        stream(l, u) {
          return Bi.createChatCompletion(this._client, l, u);
        }
      };
      class Bo extends at {
        constructor() {
          super(...arguments), this.completions = new Fy(this._client);
        }
      }
      (function(c) {
        c.Completions = Fy;
      })(Bo || (Bo = {}));
      class Wy extends at {
        create(l, u) {
          return this._client.post("/realtime/sessions", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
      }
      class Py extends at {
        create(l, u) {
          return this._client.post("/realtime/transcription_sessions", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
      }
      class js extends at {
        constructor() {
          super(...arguments), this.sessions = new Wy(this._client), this.transcriptionSessions = new Py(this._client);
        }
      }
      js.Sessions = Wy;
      js.TranscriptionSessions = Py;
      var k = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, xe = function(c, l, u, s, o) {
        if (s === "m") throw new TypeError("Private method is not writable");
        if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof l == "function" ? c !== l || !o : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return s === "a" ? o.call(c, u) : o ? o.value = u : l.set(c, u), u;
      }, ne, Ho, an, bs, Ke, Aa, yl, Sa, Os, Me, Ss, ws, Ui, Mi, Di, zp, Np, Bp, Hp, qp, jp, Lp;
      class Je extends Qo {
        constructor() {
          super(...arguments), ne.add(this), Ho.set(this, []), an.set(this, {}), bs.set(this, {}), Ke.set(this, void 0), Aa.set(this, void 0), yl.set(this, void 0), Sa.set(this, void 0), Os.set(this, void 0), Me.set(this, void 0), Ss.set(this, void 0), ws.set(this, void 0), Ui.set(this, void 0);
        }
        [(Ho = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakSet(), Symbol.asyncIterator)]() {
          const l = [], u = [];
          let s = false;
          return this.on("event", (o) => {
            const d = u.shift();
            d ? d.resolve(o) : l.push(o);
          }), this.on("end", () => {
            s = true;
            for (const o of u) o.resolve(void 0);
            u.length = 0;
          }), this.on("abort", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), this.on("error", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), {
            next: async () => l.length ? {
              value: l.shift(),
              done: false
            } : s ? {
              value: void 0,
              done: true
            } : new Promise((d, m) => u.push({
              resolve: d,
              reject: m
            })).then((d) => d ? {
              value: d,
              done: false
            } : {
              value: void 0,
              done: true
            }),
            return: async () => (this.abort(), {
              value: void 0,
              done: true
            })
          };
        }
        static fromReadableStream(l) {
          const u = new Je();
          return u._run(() => u._fromReadableStream(l)), u;
        }
        async _fromReadableStream(l, u) {
          var _a;
          const s = u == null ? void 0 : u.signal;
          s && (s.aborted && this.controller.abort(), s.addEventListener("abort", () => this.controller.abort())), this._connected();
          const o = un.fromReadableStream(l, this.controller);
          for await (const d of o) k(this, ne, "m", Mi).call(this, d);
          if ((_a = o.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addRun(k(this, ne, "m", Di).call(this));
        }
        toReadableStream() {
          return new un(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
        }
        static createToolAssistantStream(l, u, s, o, d) {
          const m = new Je();
          return m._run(() => m._runToolAssistantStream(l, u, s, o, {
            ...d,
            headers: {
              ...d == null ? void 0 : d.headers,
              "X-Stainless-Helper-Method": "stream"
            }
          })), m;
        }
        async _createToolAssistantStream(l, u, s, o, d) {
          var _a;
          const m = d == null ? void 0 : d.signal;
          m && (m.aborted && this.controller.abort(), m.addEventListener("abort", () => this.controller.abort()));
          const v = {
            ...o,
            stream: true
          }, S = await l.submitToolOutputs(u, s, v, {
            ...d,
            signal: this.controller.signal
          });
          this._connected();
          for await (const y of S) k(this, ne, "m", Mi).call(this, y);
          if ((_a = S.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addRun(k(this, ne, "m", Di).call(this));
        }
        static createThreadAssistantStream(l, u, s) {
          const o = new Je();
          return o._run(() => o._threadAssistantStream(l, u, {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "stream"
            }
          })), o;
        }
        static createAssistantStream(l, u, s, o) {
          const d = new Je();
          return d._run(() => d._runAssistantStream(l, u, s, {
            ...o,
            headers: {
              ...o == null ? void 0 : o.headers,
              "X-Stainless-Helper-Method": "stream"
            }
          })), d;
        }
        currentEvent() {
          return k(this, Ss, "f");
        }
        currentRun() {
          return k(this, ws, "f");
        }
        currentMessageSnapshot() {
          return k(this, Ke, "f");
        }
        currentRunStepSnapshot() {
          return k(this, Ui, "f");
        }
        async finalRunSteps() {
          return await this.done(), Object.values(k(this, an, "f"));
        }
        async finalMessages() {
          return await this.done(), Object.values(k(this, bs, "f"));
        }
        async finalRun() {
          if (await this.done(), !k(this, Aa, "f")) throw Error("Final run was not received.");
          return k(this, Aa, "f");
        }
        async _createThreadAssistantStream(l, u, s) {
          var _a;
          const o = s == null ? void 0 : s.signal;
          o && (o.aborted && this.controller.abort(), o.addEventListener("abort", () => this.controller.abort()));
          const d = {
            ...u,
            stream: true
          }, m = await l.createAndRun(d, {
            ...s,
            signal: this.controller.signal
          });
          this._connected();
          for await (const v of m) k(this, ne, "m", Mi).call(this, v);
          if ((_a = m.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addRun(k(this, ne, "m", Di).call(this));
        }
        async _createAssistantStream(l, u, s, o) {
          var _a;
          const d = o == null ? void 0 : o.signal;
          d && (d.aborted && this.controller.abort(), d.addEventListener("abort", () => this.controller.abort()));
          const m = {
            ...s,
            stream: true
          }, v = await l.create(u, m, {
            ...o,
            signal: this.controller.signal
          });
          this._connected();
          for await (const S of v) k(this, ne, "m", Mi).call(this, S);
          if ((_a = v.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return this._addRun(k(this, ne, "m", Di).call(this));
        }
        static accumulateDelta(l, u) {
          for (const [s, o] of Object.entries(u)) {
            if (!l.hasOwnProperty(s)) {
              l[s] = o;
              continue;
            }
            let d = l[s];
            if (d == null) {
              l[s] = o;
              continue;
            }
            if (s === "index" || s === "type") {
              l[s] = o;
              continue;
            }
            if (typeof d == "string" && typeof o == "string") d += o;
            else if (typeof d == "number" && typeof o == "number") d += o;
            else if (yo(d) && yo(o)) d = this.accumulateDelta(d, o);
            else if (Array.isArray(d) && Array.isArray(o)) {
              if (d.every((m) => typeof m == "string" || typeof m == "number")) {
                d.push(...o);
                continue;
              }
              for (const m of o) {
                if (!yo(m)) throw new Error(`Expected array delta entry to be an object but got: ${m}`);
                const v = m.index;
                if (v == null) throw console.error(m), new Error("Expected array delta entry to have an `index` property");
                if (typeof v != "number") throw new Error(`Expected array delta entry \`index\` property to be a number but got ${v}`);
                const S = d[v];
                S == null ? d.push(m) : d[v] = this.accumulateDelta(S, m);
              }
              continue;
            } else throw Error(`Unhandled record type: ${s}, deltaValue: ${o}, accValue: ${d}`);
            l[s] = d;
          }
          return l;
        }
        _addRun(l) {
          return l;
        }
        async _threadAssistantStream(l, u, s) {
          return await this._createThreadAssistantStream(u, l, s);
        }
        async _runAssistantStream(l, u, s, o) {
          return await this._createAssistantStream(u, l, s, o);
        }
        async _runToolAssistantStream(l, u, s, o, d) {
          return await this._createToolAssistantStream(s, l, u, o, d);
        }
      }
      Mi = function(l) {
        if (!this.ended) switch (xe(this, Ss, l, "f"), k(this, ne, "m", Bp).call(this, l), l.event) {
          case "thread.created":
            break;
          case "thread.run.created":
          case "thread.run.queued":
          case "thread.run.in_progress":
          case "thread.run.requires_action":
          case "thread.run.completed":
          case "thread.run.incomplete":
          case "thread.run.failed":
          case "thread.run.cancelling":
          case "thread.run.cancelled":
          case "thread.run.expired":
            k(this, ne, "m", Lp).call(this, l);
            break;
          case "thread.run.step.created":
          case "thread.run.step.in_progress":
          case "thread.run.step.delta":
          case "thread.run.step.completed":
          case "thread.run.step.failed":
          case "thread.run.step.cancelled":
          case "thread.run.step.expired":
            k(this, ne, "m", Np).call(this, l);
            break;
          case "thread.message.created":
          case "thread.message.in_progress":
          case "thread.message.delta":
          case "thread.message.completed":
          case "thread.message.incomplete":
            k(this, ne, "m", zp).call(this, l);
            break;
          case "error":
            throw new Error("Encountered an error event in event processing - errors should be processed earlier");
        }
      }, Di = function() {
        if (this.ended) throw new W("stream has ended, this shouldn't happen");
        if (!k(this, Aa, "f")) throw Error("Final run has not been received");
        return k(this, Aa, "f");
      }, zp = function(l) {
        const [u, s] = k(this, ne, "m", qp).call(this, l, k(this, Ke, "f"));
        xe(this, Ke, u, "f"), k(this, bs, "f")[u.id] = u;
        for (const o of s) {
          const d = u.content[o.index];
          (d == null ? void 0 : d.type) == "text" && this._emit("textCreated", d.text);
        }
        switch (l.event) {
          case "thread.message.created":
            this._emit("messageCreated", l.data);
            break;
          case "thread.message.in_progress":
            break;
          case "thread.message.delta":
            if (this._emit("messageDelta", l.data.delta, u), l.data.delta.content) for (const o of l.data.delta.content) {
              if (o.type == "text" && o.text) {
                let d = o.text, m = u.content[o.index];
                if (m && m.type == "text") this._emit("textDelta", d, m.text);
                else throw Error("The snapshot associated with this text delta is not text or missing");
              }
              if (o.index != k(this, yl, "f")) {
                if (k(this, Sa, "f")) switch (k(this, Sa, "f").type) {
                  case "text":
                    this._emit("textDone", k(this, Sa, "f").text, k(this, Ke, "f"));
                    break;
                  case "image_file":
                    this._emit("imageFileDone", k(this, Sa, "f").image_file, k(this, Ke, "f"));
                    break;
                }
                xe(this, yl, o.index, "f");
              }
              xe(this, Sa, u.content[o.index], "f");
            }
            break;
          case "thread.message.completed":
          case "thread.message.incomplete":
            if (k(this, yl, "f") !== void 0) {
              const o = l.data.content[k(this, yl, "f")];
              if (o) switch (o.type) {
                case "image_file":
                  this._emit("imageFileDone", o.image_file, k(this, Ke, "f"));
                  break;
                case "text":
                  this._emit("textDone", o.text, k(this, Ke, "f"));
                  break;
              }
            }
            k(this, Ke, "f") && this._emit("messageDone", l.data), xe(this, Ke, void 0, "f");
        }
      }, Np = function(l) {
        const u = k(this, ne, "m", Hp).call(this, l);
        switch (xe(this, Ui, u, "f"), l.event) {
          case "thread.run.step.created":
            this._emit("runStepCreated", l.data);
            break;
          case "thread.run.step.delta":
            const s = l.data.delta;
            if (s.step_details && s.step_details.type == "tool_calls" && s.step_details.tool_calls && u.step_details.type == "tool_calls") for (const d of s.step_details.tool_calls) d.index == k(this, Os, "f") ? this._emit("toolCallDelta", d, u.step_details.tool_calls[d.index]) : (k(this, Me, "f") && this._emit("toolCallDone", k(this, Me, "f")), xe(this, Os, d.index, "f"), xe(this, Me, u.step_details.tool_calls[d.index], "f"), k(this, Me, "f") && this._emit("toolCallCreated", k(this, Me, "f")));
            this._emit("runStepDelta", l.data.delta, u);
            break;
          case "thread.run.step.completed":
          case "thread.run.step.failed":
          case "thread.run.step.cancelled":
          case "thread.run.step.expired":
            xe(this, Ui, void 0, "f"), l.data.step_details.type == "tool_calls" && k(this, Me, "f") && (this._emit("toolCallDone", k(this, Me, "f")), xe(this, Me, void 0, "f")), this._emit("runStepDone", l.data, u);
            break;
        }
      }, Bp = function(l) {
        k(this, Ho, "f").push(l), this._emit("event", l);
      }, Hp = function(l) {
        switch (l.event) {
          case "thread.run.step.created":
            return k(this, an, "f")[l.data.id] = l.data, l.data;
          case "thread.run.step.delta":
            let u = k(this, an, "f")[l.data.id];
            if (!u) throw Error("Received a RunStepDelta before creation of a snapshot");
            let s = l.data;
            if (s.delta) {
              const o = Je.accumulateDelta(u, s.delta);
              k(this, an, "f")[l.data.id] = o;
            }
            return k(this, an, "f")[l.data.id];
          case "thread.run.step.completed":
          case "thread.run.step.failed":
          case "thread.run.step.cancelled":
          case "thread.run.step.expired":
          case "thread.run.step.in_progress":
            k(this, an, "f")[l.data.id] = l.data;
            break;
        }
        if (k(this, an, "f")[l.data.id]) return k(this, an, "f")[l.data.id];
        throw new Error("No snapshot available");
      }, qp = function(l, u) {
        let s = [];
        switch (l.event) {
          case "thread.message.created":
            return [
              l.data,
              s
            ];
          case "thread.message.delta":
            if (!u) throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
            let o = l.data;
            if (o.delta.content) for (const d of o.delta.content) if (d.index in u.content) {
              let m = u.content[d.index];
              u.content[d.index] = k(this, ne, "m", jp).call(this, d, m);
            } else u.content[d.index] = d, s.push(d);
            return [
              u,
              s
            ];
          case "thread.message.in_progress":
          case "thread.message.completed":
          case "thread.message.incomplete":
            if (u) return [
              u,
              s
            ];
            throw Error("Received thread message event with no existing snapshot");
        }
        throw Error("Tried to accumulate a non-message event");
      }, jp = function(l, u) {
        return Je.accumulateDelta(u, l);
      }, Lp = function(l) {
        switch (xe(this, ws, l.data, "f"), l.event) {
          case "thread.run.created":
            break;
          case "thread.run.queued":
            break;
          case "thread.run.in_progress":
            break;
          case "thread.run.requires_action":
          case "thread.run.cancelled":
          case "thread.run.failed":
          case "thread.run.completed":
          case "thread.run.expired":
            xe(this, Aa, l.data, "f"), k(this, Me, "f") && (this._emit("toolCallDone", k(this, Me, "f")), xe(this, Me, void 0, "f"));
            break;
        }
      };
      class ko extends at {
        create(l, u, s) {
          return this._client.post(`/threads/${l}/messages`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        retrieve(l, u, s) {
          return this._client.get(`/threads/${l}/messages/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        update(l, u, s, o) {
          return this._client.post(`/threads/${l}/messages/${u}`, {
            body: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            }
          });
        }
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/threads/${l}/messages`, Ko, {
            query: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        del(l, u, s) {
          return this._client.delete(`/threads/${l}/messages/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
      }
      class Ko extends le {
      }
      ko.MessagesPage = Ko;
      class Jo extends at {
        retrieve(l, u, s, o = {}, d) {
          return Bt(o) ? this.retrieve(l, u, s, {}, o) : this._client.get(`/threads/${l}/runs/${u}/steps/${s}`, {
            query: o,
            ...d,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...d == null ? void 0 : d.headers
            }
          });
        }
        list(l, u, s = {}, o) {
          return Bt(s) ? this.list(l, u, {}, s) : this._client.getAPIList(`/threads/${l}/runs/${u}/steps`, $o, {
            query: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            }
          });
        }
      }
      class $o extends le {
      }
      Jo.RunStepsPage = $o;
      let Li = class extends at {
        constructor() {
          super(...arguments), this.steps = new Jo(this._client);
        }
        create(l, u, s) {
          const { include: o, ...d } = u;
          return this._client.post(`/threads/${l}/runs`, {
            query: {
              include: o
            },
            body: d,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            },
            stream: u.stream ?? false
          });
        }
        retrieve(l, u, s) {
          return this._client.get(`/threads/${l}/runs/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        update(l, u, s, o) {
          return this._client.post(`/threads/${l}/runs/${u}`, {
            body: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            }
          });
        }
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/threads/${l}/runs`, Fo, {
            query: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        cancel(l, u, s) {
          return this._client.post(`/threads/${l}/runs/${u}/cancel`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        async createAndPoll(l, u, s) {
          const o = await this.create(l, u, s);
          return await this.poll(l, o.id, s);
        }
        createAndStream(l, u, s) {
          return Je.createAssistantStream(l, this._client.beta.threads.runs, u, s);
        }
        async poll(l, u, s) {
          const o = {
            ...s == null ? void 0 : s.headers,
            "X-Stainless-Poll-Helper": "true"
          };
          for ((s == null ? void 0 : s.pollIntervalMs) && (o["X-Stainless-Custom-Poll-Interval"] = s.pollIntervalMs.toString()); ; ) {
            const { data: d, response: m } = await this.retrieve(l, u, {
              ...s,
              headers: {
                ...s == null ? void 0 : s.headers,
                ...o
              }
            }).withResponse();
            switch (d.status) {
              case "queued":
              case "in_progress":
              case "cancelling":
                let v = 5e3;
                if (s == null ? void 0 : s.pollIntervalMs) v = s.pollIntervalMs;
                else {
                  const S = m.headers.get("openai-poll-after-ms");
                  if (S) {
                    const y = parseInt(S);
                    isNaN(y) || (v = y);
                  }
                }
                await Hi(v);
                break;
              case "requires_action":
              case "incomplete":
              case "cancelled":
              case "completed":
              case "failed":
              case "expired":
                return d;
            }
          }
        }
        stream(l, u, s) {
          return Je.createAssistantStream(l, this._client.beta.threads.runs, u, s);
        }
        submitToolOutputs(l, u, s, o) {
          return this._client.post(`/threads/${l}/runs/${u}/submit_tool_outputs`, {
            body: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            },
            stream: s.stream ?? false
          });
        }
        async submitToolOutputsAndPoll(l, u, s, o) {
          const d = await this.submitToolOutputs(l, u, s, o);
          return await this.poll(l, d.id, o);
        }
        submitToolOutputsStream(l, u, s, o) {
          return Je.createToolAssistantStream(l, u, this._client.beta.threads.runs, s, o);
        }
      };
      class Fo extends le {
      }
      Li.RunsPage = Fo;
      Li.Steps = Jo;
      Li.RunStepsPage = $o;
      class wl extends at {
        constructor() {
          super(...arguments), this.runs = new Li(this._client), this.messages = new ko(this._client);
        }
        create(l = {}, u) {
          return Bt(l) ? this.create({}, l) : this._client.post("/threads", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        retrieve(l, u) {
          return this._client.get(`/threads/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        update(l, u, s) {
          return this._client.post(`/threads/${l}`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        del(l, u) {
          return this._client.delete(`/threads/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        createAndRun(l, u) {
          return this._client.post("/threads/runs", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            },
            stream: l.stream ?? false
          });
        }
        async createAndRunPoll(l, u) {
          const s = await this.createAndRun(l, u);
          return await this.runs.poll(s.thread_id, s.id, u);
        }
        createAndRunStream(l, u) {
          return Je.createThreadAssistantStream(l, this._client.beta.threads, u);
        }
      }
      wl.Runs = Li;
      wl.RunsPage = Fo;
      wl.Messages = ko;
      wl.MessagesPage = Ko;
      class Al extends at {
        constructor() {
          super(...arguments), this.realtime = new js(this._client), this.chat = new Bo(this._client), this.assistants = new Yo(this._client), this.threads = new wl(this._client);
        }
      }
      Al.Realtime = js;
      Al.Assistants = Yo;
      Al.AssistantsPage = Go;
      Al.Threads = wl;
      class Iy extends at {
        create(l, u) {
          return this._client.post("/completions", {
            body: l,
            ...u,
            stream: l.stream ?? false
          });
        }
      }
      class t_ extends at {
        create(l, u) {
          const s = !!l.encoding_format;
          let o = s ? l.encoding_format : "base64";
          s && ta("Request", "User defined encoding_format:", l.encoding_format);
          const d = this._client.post("/embeddings", {
            body: {
              ...l,
              encoding_format: o
            },
            ...u
          });
          return s ? d : (ta("response", "Decoding base64 embeddings to float32 array"), d._thenUnwrap((m) => (m && m.data && m.data.forEach((v) => {
            const S = v.embedding;
            v.embedding = Uv(S);
          }), m)));
        }
      }
      class Wo extends at {
        retrieve(l, u, s, o) {
          return this._client.get(`/evals/${l}/runs/${u}/output_items/${s}`, o);
        }
        list(l, u, s = {}, o) {
          return Bt(s) ? this.list(l, u, {}, s) : this._client.getAPIList(`/evals/${l}/runs/${u}/output_items`, Po, {
            query: s,
            ...o
          });
        }
      }
      class Po extends le {
      }
      Wo.OutputItemListResponsesPage = Po;
      class Xi extends at {
        constructor() {
          super(...arguments), this.outputItems = new Wo(this._client);
        }
        create(l, u, s) {
          return this._client.post(`/evals/${l}/runs`, {
            body: u,
            ...s
          });
        }
        retrieve(l, u, s) {
          return this._client.get(`/evals/${l}/runs/${u}`, s);
        }
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/evals/${l}/runs`, Io, {
            query: u,
            ...s
          });
        }
        del(l, u, s) {
          return this._client.delete(`/evals/${l}/runs/${u}`, s);
        }
        cancel(l, u, s) {
          return this._client.post(`/evals/${l}/runs/${u}`, s);
        }
      }
      class Io extends le {
      }
      Xi.RunListResponsesPage = Io;
      Xi.OutputItems = Wo;
      Xi.OutputItemListResponsesPage = Po;
      class Yi extends at {
        constructor() {
          super(...arguments), this.runs = new Xi(this._client);
        }
        create(l, u) {
          return this._client.post("/evals", {
            body: l,
            ...u
          });
        }
        retrieve(l, u) {
          return this._client.get(`/evals/${l}`, u);
        }
        update(l, u, s) {
          return this._client.post(`/evals/${l}`, {
            body: u,
            ...s
          });
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/evals", tf, {
            query: l,
            ...u
          });
        }
        del(l, u) {
          return this._client.delete(`/evals/${l}`, u);
        }
      }
      class tf extends le {
      }
      Yi.EvalListResponsesPage = tf;
      Yi.Runs = Xi;
      Yi.RunListResponsesPage = Io;
      let ef = class extends at {
        create(l, u) {
          return this._client.post("/files", Sl({
            body: l,
            ...u
          }));
        }
        retrieve(l, u) {
          return this._client.get(`/files/${l}`, u);
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/files", nf, {
            query: l,
            ...u
          });
        }
        del(l, u) {
          return this._client.delete(`/files/${l}`, u);
        }
        content(l, u) {
          return this._client.get(`/files/${l}/content`, {
            ...u,
            headers: {
              Accept: "application/binary",
              ...u == null ? void 0 : u.headers
            },
            __binaryResponse: true
          });
        }
        retrieveContent(l, u) {
          return this._client.get(`/files/${l}/content`, u);
        }
        async waitForProcessing(l, { pollInterval: u = 5e3, maxWait: s = 30 * 60 * 1e3 } = {}) {
          const o = /* @__PURE__ */ new Set([
            "processed",
            "error",
            "deleted"
          ]), d = Date.now();
          let m = await this.retrieve(l);
          for (; !m.status || !o.has(m.status); ) if (await Hi(u), m = await this.retrieve(l), Date.now() - d > s) throw new jo({
            message: `Giving up on waiting for file ${l} to finish processing after ${s} milliseconds.`
          });
          return m;
        }
      };
      class nf extends le {
      }
      ef.FileObjectsPage = nf;
      class af extends at {
        create(l, u, s) {
          return this._client.getAPIList(`/fine_tuning/checkpoints/${l}/permissions`, lf, {
            body: u,
            method: "post",
            ...s
          });
        }
        retrieve(l, u = {}, s) {
          return Bt(u) ? this.retrieve(l, {}, u) : this._client.get(`/fine_tuning/checkpoints/${l}/permissions`, {
            query: u,
            ...s
          });
        }
        del(l, u) {
          return this._client.delete(`/fine_tuning/checkpoints/${l}/permissions`, u);
        }
      }
      class lf extends Ns {
      }
      af.PermissionCreateResponsesPage = lf;
      let Ls = class extends at {
        constructor() {
          super(...arguments), this.permissions = new af(this._client);
        }
      };
      Ls.Permissions = af;
      Ls.PermissionCreateResponsesPage = lf;
      class uf extends at {
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/fine_tuning/jobs/${l}/checkpoints`, sf, {
            query: u,
            ...s
          });
        }
      }
      class sf extends le {
      }
      uf.FineTuningJobCheckpointsPage = sf;
      class El extends at {
        constructor() {
          super(...arguments), this.checkpoints = new uf(this._client);
        }
        create(l, u) {
          return this._client.post("/fine_tuning/jobs", {
            body: l,
            ...u
          });
        }
        retrieve(l, u) {
          return this._client.get(`/fine_tuning/jobs/${l}`, u);
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/fine_tuning/jobs", rf, {
            query: l,
            ...u
          });
        }
        cancel(l, u) {
          return this._client.post(`/fine_tuning/jobs/${l}/cancel`, u);
        }
        listEvents(l, u = {}, s) {
          return Bt(u) ? this.listEvents(l, {}, u) : this._client.getAPIList(`/fine_tuning/jobs/${l}/events`, cf, {
            query: u,
            ...s
          });
        }
      }
      class rf extends le {
      }
      class cf extends le {
      }
      El.FineTuningJobsPage = rf;
      El.FineTuningJobEventsPage = cf;
      El.Checkpoints = uf;
      El.FineTuningJobCheckpointsPage = sf;
      class Tl extends at {
        constructor() {
          super(...arguments), this.jobs = new El(this._client), this.checkpoints = new Ls(this._client);
        }
      }
      Tl.Jobs = El;
      Tl.FineTuningJobsPage = rf;
      Tl.FineTuningJobEventsPage = cf;
      Tl.Checkpoints = Ls;
      class e_ extends at {
        createVariation(l, u) {
          return this._client.post("/images/variations", Sl({
            body: l,
            ...u
          }));
        }
        edit(l, u) {
          return this._client.post("/images/edits", Sl({
            body: l,
            ...u
          }));
        }
        generate(l, u) {
          return this._client.post("/images/generations", {
            body: l,
            ...u
          });
        }
      }
      class of extends at {
        retrieve(l, u) {
          return this._client.get(`/models/${l}`, u);
        }
        list(l) {
          return this._client.getAPIList("/models", ff, l);
        }
        del(l, u) {
          return this._client.delete(`/models/${l}`, u);
        }
      }
      class ff extends Ns {
      }
      of.ModelsPage = ff;
      class n_ extends at {
        create(l, u) {
          return this._client.post("/moderations", {
            body: l,
            ...u
          });
        }
      }
      function Zv(c, l) {
        return !l || !Kv(l) ? {
          ...c,
          output_parsed: null,
          output: c.output.map((u) => u.type === "function_call" ? {
            ...u,
            parsed_arguments: null
          } : u.type === "message" ? {
            ...u,
            content: u.content.map((s) => ({
              ...s,
              parsed: null
            }))
          } : u)
        } : a_(c, l);
      }
      function a_(c, l) {
        const u = c.output.map((o) => {
          if (o.type === "function_call") return {
            ...o,
            parsed_arguments: Fv(l, o)
          };
          if (o.type === "message") {
            const d = o.content.map((m) => m.type === "output_text" ? {
              ...m,
              parsed: kv(l, m.text)
            } : m);
            return {
              ...o,
              content: d
            };
          }
          return o;
        }), s = Object.assign({}, c, {
          output: u
        });
        return Object.getOwnPropertyDescriptor(c, "output_text") || l_(s), Object.defineProperty(s, "output_parsed", {
          enumerable: true,
          get() {
            for (const o of s.output) if (o.type === "message") {
              for (const d of o.content) if (d.type === "output_text" && d.parsed !== null) return d.parsed;
            }
            return null;
          }
        }), s;
      }
      function kv(c, l) {
        var _a, _b2, _c, _d;
        return ((_b2 = (_a = c.text) == null ? void 0 : _a.format) == null ? void 0 : _b2.type) !== "json_schema" ? null : "$parseRaw" in ((_c = c.text) == null ? void 0 : _c.format) ? ((_d = c.text) == null ? void 0 : _d.format).$parseRaw(l) : JSON.parse(l);
      }
      function Kv(c) {
        var _a;
        return !!Vo((_a = c.text) == null ? void 0 : _a.format);
      }
      function Jv(c) {
        return (c == null ? void 0 : c.$brand) === "auto-parseable-tool";
      }
      function $v(c, l) {
        return c.find((u) => u.type === "function" && u.name === l);
      }
      function Fv(c, l) {
        const u = $v(c.tools ?? [], l.name);
        return {
          ...l,
          ...l,
          parsed_arguments: Jv(u) ? u.$parseRaw(l.arguments) : (u == null ? void 0 : u.strict) ? JSON.parse(l.arguments) : null
        };
      }
      function l_(c) {
        const l = [];
        for (const u of c.output) if (u.type === "message") for (const s of u.content) s.type === "output_text" && l.push(s.text);
        c.output_text = l.join("");
      }
      class i_ extends at {
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/responses/${l}/input_items`, Pv, {
            query: u,
            ...s
          });
        }
      }
      var fl = function(c, l, u, s, o) {
        if (s === "m") throw new TypeError("Private method is not writable");
        if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof l == "function" ? c !== l || !o : !l.has(c)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return s === "a" ? o.call(c, u) : o ? o.value = u : l.set(c, u), u;
      }, Pn = function(c, l, u, s) {
        if (u === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
        if (typeof l == "function" ? c !== l || !s : !l.has(c)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return u === "m" ? s : u === "a" ? s.call(c) : s ? s.value : l.get(c);
      }, dl, fs, In, ds, Xp, Yp, Gp, Qp;
      class df extends Qo {
        constructor(l) {
          super(), dl.add(this), fs.set(this, void 0), In.set(this, void 0), ds.set(this, void 0), fl(this, fs, l, "f");
        }
        static createResponse(l, u, s) {
          const o = new df(u);
          return o._run(() => o._createResponse(l, u, {
            ...s,
            headers: {
              ...s == null ? void 0 : s.headers,
              "X-Stainless-Helper-Method": "stream"
            }
          })), o;
        }
        async _createResponse(l, u, s) {
          var _a;
          const o = s == null ? void 0 : s.signal;
          o && (o.aborted && this.controller.abort(), o.addEventListener("abort", () => this.controller.abort())), Pn(this, dl, "m", Xp).call(this);
          const d = await l.responses.create({
            ...u,
            stream: true
          }, {
            ...s,
            signal: this.controller.signal
          });
          this._connected();
          for await (const m of d) Pn(this, dl, "m", Yp).call(this, m);
          if ((_a = d.controller.signal) == null ? void 0 : _a.aborted) throw new Xe();
          return Pn(this, dl, "m", Gp).call(this);
        }
        [(fs = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakSet(), Xp = function() {
          this.ended || fl(this, In, void 0, "f");
        }, Yp = function(u) {
          if (this.ended) return;
          const s = Pn(this, dl, "m", Qp).call(this, u);
          switch (this._emit("event", u), u.type) {
            case "response.output_text.delta": {
              const o = s.output[u.output_index];
              if (!o) throw new W(`missing output at index ${u.output_index}`);
              if (o.type === "message") {
                const d = o.content[u.content_index];
                if (!d) throw new W(`missing content at index ${u.content_index}`);
                if (d.type !== "output_text") throw new W(`expected content to be 'output_text', got ${d.type}`);
                this._emit("response.output_text.delta", {
                  ...u,
                  snapshot: d.text
                });
              }
              break;
            }
            case "response.function_call_arguments.delta": {
              const o = s.output[u.output_index];
              if (!o) throw new W(`missing output at index ${u.output_index}`);
              o.type === "function_call" && this._emit("response.function_call_arguments.delta", {
                ...u,
                snapshot: o.arguments
              });
              break;
            }
            default:
              this._emit(u.type, u);
              break;
          }
        }, Gp = function() {
          if (this.ended) throw new W("stream has ended, this shouldn't happen");
          const u = Pn(this, In, "f");
          if (!u) throw new W("request ended without sending any events");
          fl(this, In, void 0, "f");
          const s = Wv(u, Pn(this, fs, "f"));
          return fl(this, ds, s, "f"), s;
        }, Qp = function(u) {
          let s = Pn(this, In, "f");
          if (!s) {
            if (u.type !== "response.created") throw new W(`When snapshot hasn't been set yet, expected 'response.created' event, got ${u.type}`);
            return s = fl(this, In, u.response, "f"), s;
          }
          switch (u.type) {
            case "response.output_item.added": {
              s.output.push(u.item);
              break;
            }
            case "response.content_part.added": {
              const o = s.output[u.output_index];
              if (!o) throw new W(`missing output at index ${u.output_index}`);
              o.type === "message" && o.content.push(u.part);
              break;
            }
            case "response.output_text.delta": {
              const o = s.output[u.output_index];
              if (!o) throw new W(`missing output at index ${u.output_index}`);
              if (o.type === "message") {
                const d = o.content[u.content_index];
                if (!d) throw new W(`missing content at index ${u.content_index}`);
                if (d.type !== "output_text") throw new W(`expected content to be 'output_text', got ${d.type}`);
                d.text += u.delta;
              }
              break;
            }
            case "response.function_call_arguments.delta": {
              const o = s.output[u.output_index];
              if (!o) throw new W(`missing output at index ${u.output_index}`);
              o.type === "function_call" && (o.arguments += u.delta);
              break;
            }
            case "response.completed": {
              fl(this, In, u.response, "f");
              break;
            }
          }
          return s;
        }, Symbol.asyncIterator)]() {
          const l = [], u = [];
          let s = false;
          return this.on("event", (o) => {
            const d = u.shift();
            d ? d.resolve(o) : l.push(o);
          }), this.on("end", () => {
            s = true;
            for (const o of u) o.resolve(void 0);
            u.length = 0;
          }), this.on("abort", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), this.on("error", (o) => {
            s = true;
            for (const d of u) d.reject(o);
            u.length = 0;
          }), {
            next: async () => l.length ? {
              value: l.shift(),
              done: false
            } : s ? {
              value: void 0,
              done: true
            } : new Promise((d, m) => u.push({
              resolve: d,
              reject: m
            })).then((d) => d ? {
              value: d,
              done: false
            } : {
              value: void 0,
              done: true
            }),
            return: async () => (this.abort(), {
              value: void 0,
              done: true
            })
          };
        }
        async finalResponse() {
          await this.done();
          const l = Pn(this, ds, "f");
          if (!l) throw new W("stream ended without producing a ChatCompletion");
          return l;
        }
      }
      function Wv(c, l) {
        return Zv(c, l);
      }
      class hf extends at {
        constructor() {
          super(...arguments), this.inputItems = new i_(this._client);
        }
        create(l, u) {
          return this._client.post("/responses", {
            body: l,
            ...u,
            stream: l.stream ?? false
          })._thenUnwrap((s) => ("object" in s && s.object === "response" && l_(s), s));
        }
        retrieve(l, u = {}, s) {
          return Bt(u) ? this.retrieve(l, {}, u) : this._client.get(`/responses/${l}`, {
            query: u,
            ...s
          });
        }
        del(l, u) {
          return this._client.delete(`/responses/${l}`, {
            ...u,
            headers: {
              Accept: "*/*",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        parse(l, u) {
          return this._client.responses.create(l, u)._thenUnwrap((s) => a_(s, l));
        }
        stream(l, u) {
          return df.createResponse(this._client, l, u);
        }
      }
      class Pv extends le {
      }
      hf.InputItems = i_;
      class u_ extends at {
        create(l, u, s) {
          return this._client.post(`/uploads/${l}/parts`, Sl({
            body: u,
            ...s
          }));
        }
      }
      class mf extends at {
        constructor() {
          super(...arguments), this.parts = new u_(this._client);
        }
        create(l, u) {
          return this._client.post("/uploads", {
            body: l,
            ...u
          });
        }
        cancel(l, u) {
          return this._client.post(`/uploads/${l}/cancel`, u);
        }
        complete(l, u, s) {
          return this._client.post(`/uploads/${l}/complete`, {
            body: u,
            ...s
          });
        }
      }
      mf.Parts = u_;
      const Iv = async (c) => {
        const l = await Promise.allSettled(c), u = l.filter((o) => o.status === "rejected");
        if (u.length) {
          for (const o of u) console.error(o.reason);
          throw new Error(`${u.length} promise(s) failed - see the above errors`);
        }
        const s = [];
        for (const o of l) o.status === "fulfilled" && s.push(o.value);
        return s;
      };
      class Xs extends at {
        create(l, u, s) {
          return this._client.post(`/vector_stores/${l}/files`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        retrieve(l, u, s) {
          return this._client.get(`/vector_stores/${l}/files/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        update(l, u, s, o) {
          return this._client.post(`/vector_stores/${l}/files/${u}`, {
            body: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            }
          });
        }
        list(l, u = {}, s) {
          return Bt(u) ? this.list(l, {}, u) : this._client.getAPIList(`/vector_stores/${l}/files`, Ys, {
            query: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        del(l, u, s) {
          return this._client.delete(`/vector_stores/${l}/files/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        async createAndPoll(l, u, s) {
          const o = await this.create(l, u, s);
          return await this.poll(l, o.id, s);
        }
        async poll(l, u, s) {
          const o = {
            ...s == null ? void 0 : s.headers,
            "X-Stainless-Poll-Helper": "true"
          };
          for ((s == null ? void 0 : s.pollIntervalMs) && (o["X-Stainless-Custom-Poll-Interval"] = s.pollIntervalMs.toString()); ; ) {
            const d = await this.retrieve(l, u, {
              ...s,
              headers: o
            }).withResponse(), m = d.data;
            switch (m.status) {
              case "in_progress":
                let v = 5e3;
                if (s == null ? void 0 : s.pollIntervalMs) v = s.pollIntervalMs;
                else {
                  const S = d.response.headers.get("openai-poll-after-ms");
                  if (S) {
                    const y = parseInt(S);
                    isNaN(y) || (v = y);
                  }
                }
                await Hi(v);
                break;
              case "failed":
              case "completed":
                return m;
            }
          }
        }
        async upload(l, u, s) {
          const o = await this._client.files.create({
            file: u,
            purpose: "assistants"
          }, s);
          return this.create(l, {
            file_id: o.id
          }, s);
        }
        async uploadAndPoll(l, u, s) {
          const o = await this.upload(l, u, s);
          return await this.poll(l, o.id, s);
        }
        content(l, u, s) {
          return this._client.getAPIList(`/vector_stores/${l}/files/${u}/content`, pf, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
      }
      class Ys extends le {
      }
      class pf extends Ns {
      }
      Xs.VectorStoreFilesPage = Ys;
      Xs.FileContentResponsesPage = pf;
      class s_ extends at {
        create(l, u, s) {
          return this._client.post(`/vector_stores/${l}/file_batches`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        retrieve(l, u, s) {
          return this._client.get(`/vector_stores/${l}/file_batches/${u}`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        cancel(l, u, s) {
          return this._client.post(`/vector_stores/${l}/file_batches/${u}/cancel`, {
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        async createAndPoll(l, u, s) {
          const o = await this.create(l, u);
          return await this.poll(l, o.id, s);
        }
        listFiles(l, u, s = {}, o) {
          return Bt(s) ? this.listFiles(l, u, {}, s) : this._client.getAPIList(`/vector_stores/${l}/file_batches/${u}/files`, Ys, {
            query: s,
            ...o,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...o == null ? void 0 : o.headers
            }
          });
        }
        async poll(l, u, s) {
          const o = {
            ...s == null ? void 0 : s.headers,
            "X-Stainless-Poll-Helper": "true"
          };
          for ((s == null ? void 0 : s.pollIntervalMs) && (o["X-Stainless-Custom-Poll-Interval"] = s.pollIntervalMs.toString()); ; ) {
            const { data: d, response: m } = await this.retrieve(l, u, {
              ...s,
              headers: o
            }).withResponse();
            switch (d.status) {
              case "in_progress":
                let v = 5e3;
                if (s == null ? void 0 : s.pollIntervalMs) v = s.pollIntervalMs;
                else {
                  const S = m.headers.get("openai-poll-after-ms");
                  if (S) {
                    const y = parseInt(S);
                    isNaN(y) || (v = y);
                  }
                }
                await Hi(v);
                break;
              case "failed":
              case "cancelled":
              case "completed":
                return d;
            }
          }
        }
        async uploadAndPoll(l, { files: u, fileIds: s = [] }, o) {
          if (u == null || u.length == 0) throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");
          const d = (o == null ? void 0 : o.maxConcurrency) ?? 5, m = Math.min(d, u.length), v = this._client, S = u.values(), y = [
            ...s
          ];
          async function R(O) {
            for (let z of O) {
              const L = await v.files.create({
                file: z,
                purpose: "assistants"
              }, o);
              y.push(L.id);
            }
          }
          const x = Array(m).fill(S).map(R);
          return await Iv(x), await this.createAndPoll(l, {
            file_ids: y
          });
        }
      }
      class ea extends at {
        constructor() {
          super(...arguments), this.files = new Xs(this._client), this.fileBatches = new s_(this._client);
        }
        create(l, u) {
          return this._client.post("/vector_stores", {
            body: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        retrieve(l, u) {
          return this._client.get(`/vector_stores/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        update(l, u, s) {
          return this._client.post(`/vector_stores/${l}`, {
            body: u,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
        list(l = {}, u) {
          return Bt(l) ? this.list({}, l) : this._client.getAPIList("/vector_stores", yf, {
            query: l,
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        del(l, u) {
          return this._client.delete(`/vector_stores/${l}`, {
            ...u,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...u == null ? void 0 : u.headers
            }
          });
        }
        search(l, u, s) {
          return this._client.getAPIList(`/vector_stores/${l}/search`, _f, {
            body: u,
            method: "post",
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...s == null ? void 0 : s.headers
            }
          });
        }
      }
      class yf extends le {
      }
      class _f extends Ns {
      }
      ea.VectorStoresPage = yf;
      ea.VectorStoreSearchResponsesPage = _f;
      ea.Files = Xs;
      ea.VectorStoreFilesPage = Ys;
      ea.FileContentResponsesPage = pf;
      ea.FileBatches = s_;
      var r_;
      class nt extends bv {
        constructor({ baseURL: l = us("OPENAI_BASE_URL"), apiKey: u = us("OPENAI_API_KEY"), organization: s = us("OPENAI_ORG_ID") ?? null, project: o = us("OPENAI_PROJECT_ID") ?? null, ...d } = {}) {
          if (u === void 0) throw new W("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
          const m = {
            apiKey: u,
            organization: s,
            project: o,
            ...d,
            baseURL: l || "https://api.openai.com/v1"
          };
          if (!m.dangerouslyAllowBrowser && Dv()) throw new W(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
          super({
            baseURL: m.baseURL,
            timeout: m.timeout ?? 6e5,
            httpAgent: m.httpAgent,
            maxRetries: m.maxRetries,
            fetch: m.fetch
          }), this.completions = new Iy(this), this.chat = new qs(this), this.embeddings = new t_(this), this.files = new ef(this), this.images = new e_(this), this.audio = new qi(this), this.moderations = new n_(this), this.models = new of(this), this.fineTuning = new Tl(this), this.vectorStores = new ea(this), this.beta = new Al(this), this.batches = new Lo(this), this.uploads = new mf(this), this.responses = new hf(this), this.evals = new Yi(this), this._options = m, this.apiKey = u, this.organization = s, this.project = o;
        }
        defaultQuery() {
          return this._options.defaultQuery;
        }
        defaultHeaders(l) {
          return {
            ...super.defaultHeaders(l),
            "OpenAI-Organization": this.organization,
            "OpenAI-Project": this.project,
            ...this._options.defaultHeaders
          };
        }
        authHeaders(l) {
          return {
            Authorization: `Bearer ${this.apiKey}`
          };
        }
        stringifyQuery(l) {
          return nv(l, {
            arrayFormat: "brackets"
          });
        }
      }
      r_ = nt;
      nt.OpenAI = r_;
      nt.DEFAULT_TIMEOUT = 6e5;
      nt.OpenAIError = W;
      nt.APIError = ae;
      nt.APIConnectionError = Ds;
      nt.APIConnectionTimeoutError = jo;
      nt.APIUserAbortError = Xe;
      nt.NotFoundError = cy;
      nt.ConflictError = oy;
      nt.RateLimitError = dy;
      nt.BadRequestError = uy;
      nt.AuthenticationError = sy;
      nt.InternalServerError = hy;
      nt.PermissionDeniedError = ry;
      nt.UnprocessableEntityError = fy;
      nt.toFile = vy;
      nt.fileFromPath = ay;
      nt.Completions = Iy;
      nt.Chat = qs;
      nt.ChatCompletionsPage = Hs;
      nt.Embeddings = t_;
      nt.Files = ef;
      nt.FileObjectsPage = nf;
      nt.Images = e_;
      nt.Audio = qi;
      nt.Moderations = n_;
      nt.Models = of;
      nt.ModelsPage = ff;
      nt.FineTuning = Tl;
      nt.VectorStores = ea;
      nt.VectorStoresPage = yf;
      nt.VectorStoreSearchResponsesPage = _f;
      nt.Beta = Al;
      nt.Batches = Lo;
      nt.BatchesPage = Xo;
      nt.Uploads = mf;
      nt.Responses = hf;
      nt.Evals = Yi;
      nt.EvalListResponsesPage = tf;
      const tb = "/browser-meeting-assistant/assets/tiktoken_bg-C5RphiaF.wasm", eb = async (c = {}, l) => {
        let u;
        if (l.startsWith("data:")) {
          const s = l.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(s, "base64");
          else if (typeof atob == "function") {
            const d = atob(s);
            o = new Uint8Array(d.length);
            for (let m = 0; m < d.length; m++) o[m] = d.charCodeAt(m);
          } else throw new Error("Cannot decode base64-encoded data URL");
          u = await WebAssembly.instantiate(o, c);
        } else {
          const s = await fetch(l), o = s.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) u = await WebAssembly.instantiateStreaming(s, c);
          else {
            const d = await s.arrayBuffer();
            u = await WebAssembly.instantiate(d, c);
          }
        }
        return u.instance.exports;
      };
      let G;
      function nb(c) {
        G = c;
      }
      const ab = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let c_ = new ab("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      c_.decode();
      let hs = null;
      function bl() {
        return (hs === null || hs.byteLength === 0) && (hs = new Uint8Array(G.memory.buffer)), hs;
      }
      function Gs(c, l) {
        return c = c >>> 0, c_.decode(bl().subarray(c, c + l));
      }
      const Tn = new Array(128).fill(void 0);
      Tn.push(void 0, null, true, false);
      let zi = Tn.length;
      function ln(c) {
        zi === Tn.length && Tn.push(Tn.length + 1);
        const l = zi;
        return zi = Tn[l], Tn[l] = c, l;
      }
      function o_(c, l) {
        try {
          return c.apply(this, l);
        } catch (u) {
          G.__wbindgen_export_0(ln(u));
        }
      }
      function Qs(c) {
        return Tn[c];
      }
      function lb(c) {
        c < 132 || (Tn[c] = zi, zi = c);
      }
      function _l(c) {
        const l = Qs(c);
        return lb(c), l;
      }
      let De = 0;
      const ib = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let As = new ib("utf-8");
      const ub = typeof As.encodeInto == "function" ? function(c, l) {
        return As.encodeInto(c, l);
      } : function(c, l) {
        const u = As.encode(c);
        return l.set(u), {
          read: c.length,
          written: u.length
        };
      };
      function wa(c, l, u) {
        if (u === void 0) {
          const v = As.encode(c), S = l(v.length, 1) >>> 0;
          return bl().subarray(S, S + v.length).set(v), De = v.length, S;
        }
        let s = c.length, o = l(s, 1) >>> 0;
        const d = bl();
        let m = 0;
        for (; m < s; m++) {
          const v = c.charCodeAt(m);
          if (v > 127) break;
          d[o + m] = v;
        }
        if (m !== s) {
          m !== 0 && (c = c.slice(m)), o = u(o, s, s = m + c.length * 3, 1) >>> 0;
          const v = bl().subarray(o + m, o + s), S = ub(c, v);
          m += S.written, o = u(o, s, m, 1) >>> 0;
        }
        return De = m, o;
      }
      function sb(c) {
        return c == null;
      }
      let hl = null;
      function Xt() {
        return (hl === null || hl.buffer.detached === true || hl.buffer.detached === void 0 && hl.buffer !== G.memory.buffer) && (hl = new DataView(G.memory.buffer)), hl;
      }
      let ms = null;
      function f_() {
        return (ms === null || ms.byteLength === 0) && (ms = new Uint32Array(G.memory.buffer)), ms;
      }
      function Vp(c, l) {
        return c = c >>> 0, f_().subarray(c / 4, c / 4 + l);
      }
      function rb(c, l) {
        const u = l(c.length * 1, 1) >>> 0;
        return bl().set(c, u / 1), De = c.length, u;
      }
      function cb(c, l) {
        const u = l(c.length * 4, 4) >>> 0;
        return f_().set(c, u / 4), De = c.length, u;
      }
      function Zp(c, l) {
        return c = c >>> 0, bl().subarray(c / 1, c / 1 + l);
      }
      function ob(c, l) {
        if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        try {
          const d = G.__wbindgen_add_to_stack_pointer(-16), m = wa(c, G.__wbindgen_export_1, G.__wbindgen_export_2), v = De;
          G.encoding_for_model(d, m, v, ln(l));
          var u = Xt().getInt32(d + 4 * 0, true), s = Xt().getInt32(d + 4 * 1, true), o = Xt().getInt32(d + 4 * 2, true);
          if (o) throw _l(s);
          return gf.__wrap(u);
        } finally {
          G.__wbindgen_add_to_stack_pointer(16);
        }
      }
      const wo = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((c) => G.__wbg_tiktoken_free(c >>> 0, 1));
      class gf {
        static __wrap(l) {
          l = l >>> 0;
          const u = Object.create(gf.prototype);
          return u.__wbg_ptr = l, wo.register(u, u.__wbg_ptr, u), u;
        }
        __destroy_into_raw() {
          const l = this.__wbg_ptr;
          return this.__wbg_ptr = 0, wo.unregister(this), l;
        }
        free() {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          const l = this.__destroy_into_raw();
          G.__wbg_tiktoken_free(l, 0);
        }
        constructor(l, u, s) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          const o = wa(l, G.__wbindgen_export_1, G.__wbindgen_export_2), d = De, m = wa(s, G.__wbindgen_export_1, G.__wbindgen_export_2), v = De, S = G.tiktoken_new(o, d, ln(u), m, v);
          return this.__wbg_ptr = S >>> 0, wo.register(this, this.__wbg_ptr, this), this;
        }
        get name() {
          try {
            const s = G.__wbindgen_add_to_stack_pointer(-16);
            G.tiktoken_name(s, this.__wbg_ptr);
            var l = Xt().getInt32(s + 4 * 0, true), u = Xt().getInt32(s + 4 * 1, true);
            let o;
            return l !== 0 && (o = Gs(l, u).slice(), G.__wbindgen_export_3(l, u * 1, 1)), o;
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        encode(l, u, s) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          try {
            const y = G.__wbindgen_add_to_stack_pointer(-16), R = wa(l, G.__wbindgen_export_1, G.__wbindgen_export_2), x = De;
            G.tiktoken_encode(y, this.__wbg_ptr, R, x, ln(u), ln(s));
            var o = Xt().getInt32(y + 4 * 0, true), d = Xt().getInt32(y + 4 * 1, true), m = Xt().getInt32(y + 4 * 2, true), v = Xt().getInt32(y + 4 * 3, true);
            if (v) throw _l(m);
            var S = Vp(o, d).slice();
            return G.__wbindgen_export_3(o, d * 4, 4), S;
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        encode_ordinary(l) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          try {
            const d = G.__wbindgen_add_to_stack_pointer(-16), m = wa(l, G.__wbindgen_export_1, G.__wbindgen_export_2), v = De;
            G.tiktoken_encode_ordinary(d, this.__wbg_ptr, m, v);
            var u = Xt().getInt32(d + 4 * 0, true), s = Xt().getInt32(d + 4 * 1, true), o = Vp(u, s).slice();
            return G.__wbindgen_export_3(u, s * 4, 4), o;
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        encode_with_unstable(l, u, s) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          try {
            const v = G.__wbindgen_add_to_stack_pointer(-16), S = wa(l, G.__wbindgen_export_1, G.__wbindgen_export_2), y = De;
            G.tiktoken_encode_with_unstable(v, this.__wbg_ptr, S, y, ln(u), ln(s));
            var o = Xt().getInt32(v + 4 * 0, true), d = Xt().getInt32(v + 4 * 1, true), m = Xt().getInt32(v + 4 * 2, true);
            if (m) throw _l(d);
            return _l(o);
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        encode_single_token(l) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          const u = rb(l, G.__wbindgen_export_1), s = De;
          return G.tiktoken_encode_single_token(this.__wbg_ptr, u, s) >>> 0;
        }
        decode(l) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          try {
            const d = G.__wbindgen_add_to_stack_pointer(-16), m = cb(l, G.__wbindgen_export_1), v = De;
            G.tiktoken_decode(d, this.__wbg_ptr, m, v);
            var u = Xt().getInt32(d + 4 * 0, true), s = Xt().getInt32(d + 4 * 1, true), o = Zp(u, s).slice();
            return G.__wbindgen_export_3(u, s * 1, 1), o;
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        decode_single_token_bytes(l) {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          try {
            const d = G.__wbindgen_add_to_stack_pointer(-16);
            G.tiktoken_decode_single_token_bytes(d, this.__wbg_ptr, l);
            var u = Xt().getInt32(d + 4 * 0, true), s = Xt().getInt32(d + 4 * 1, true), o = Zp(u, s).slice();
            return G.__wbindgen_export_3(u, s * 1, 1), o;
          } finally {
            G.__wbindgen_add_to_stack_pointer(16);
          }
        }
        token_byte_values() {
          if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
          const l = G.tiktoken_token_byte_values(this.__wbg_ptr);
          return _l(l);
        }
      }
      function fb() {
        return o_(function(c, l) {
          const u = JSON.parse(Gs(c, l));
          return ln(u);
        }, arguments);
      }
      function db() {
        return o_(function(c) {
          const l = JSON.stringify(Qs(c));
          return ln(l);
        }, arguments);
      }
      function hb(c, l) {
        const u = new Error(Gs(c, l));
        return ln(u);
      }
      function mb(c) {
        return Qs(c) === void 0;
      }
      function pb(c) {
        _l(c);
      }
      function yb(c, l) {
        if (G == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        const u = Qs(l), s = typeof u == "string" ? u : void 0;
        var o = sb(s) ? 0 : wa(s, G.__wbindgen_export_1, G.__wbindgen_export_2), d = De;
        Xt().setInt32(c + 4 * 1, d, true), Xt().setInt32(c + 4 * 0, o, true);
      }
      function _b(c, l) {
        throw new Error(Gs(c, l));
      }
      URL = globalThis.URL;
      const Pt = await eb({
        "./tiktoken_bg.js": {
          __wbindgen_object_drop_ref: pb,
          __wbindgen_is_undefined: mb,
          __wbg_stringify_f7ed6987935b4a24: db,
          __wbindgen_string_get: yb,
          __wbindgen_error_new: hb,
          __wbg_parse_def2e24ef1252aff: fb,
          __wbindgen_throw: _b
        }
      }, tb), gb = Pt.memory, vb = Pt.__wbg_tiktoken_free, bb = Pt.tiktoken_new, Sb = Pt.tiktoken_name, wb = Pt.tiktoken_encode, Ab = Pt.tiktoken_encode_ordinary, Eb = Pt.tiktoken_encode_with_unstable, Tb = Pt.tiktoken_encode_single_token, Rb = Pt.tiktoken_decode, xb = Pt.tiktoken_decode_single_token_bytes, Ob = Pt.tiktoken_token_byte_values, Mb = Pt.get_encoding, Db = Pt.encoding_for_model, Cb = Pt.__wbindgen_export_0, Ub = Pt.__wbindgen_export_1, zb = Pt.__wbindgen_export_2, Nb = Pt.__wbindgen_add_to_stack_pointer, Bb = Pt.__wbindgen_export_3, Hb = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_tiktoken_free: vb,
        __wbindgen_add_to_stack_pointer: Nb,
        __wbindgen_export_0: Cb,
        __wbindgen_export_1: Ub,
        __wbindgen_export_2: zb,
        __wbindgen_export_3: Bb,
        encoding_for_model: Db,
        get_encoding: Mb,
        memory: gb,
        tiktoken_decode: Rb,
        tiktoken_decode_single_token_bytes: xb,
        tiktoken_encode: wb,
        tiktoken_encode_ordinary: Ab,
        tiktoken_encode_single_token: Tb,
        tiktoken_encode_with_unstable: Eb,
        tiktoken_name: Sb,
        tiktoken_new: bb,
        tiktoken_token_byte_values: Ob
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      nb(Hb);
      const qb = await ob("gpt-4o-mini"), jb = new nt({
        apiKey: "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",
        dangerouslyAllowBrowser: true
      });
      let kp = "", ps = null;
      async function Lb(c) {
        kp += " " + c;
        const l = qb.encode(c);
        if (ps) {
          const o = l.filter((v) => ps.includes(v)).length, d = (/* @__PURE__ */ new Set([
            ...l,
            ...ps
          ])).size;
          if (o / d > 0.88) return null;
        }
        ps = l;
        const s = await jb.chat.completions.create({
          model: void 0,
          messages: [
            {
              role: "system",
              content: "You are a ruthless note taker \u2026"
            },
            {
              role: "user",
              content: kp.slice(-8e3)
            }
          ]
        });
        return JSON.parse(s.choices[0].message.content);
      }
      async function Xb(c) {
        const l = await fetch("https://api-inference.huggingface.co/models/pyannote/speaker-diarization", {
          method: "POST",
          headers: {
            Authorization: "Bearer VHsiqxUCoowMHWMMnuVefQotIkfebZBhbr",
            "Content-Type": "audio/wav"
          },
          body: c
        });
        if (!l.ok) throw new Error(await l.text());
        return await l.json();
      }
      var Es = {
        exports: {}
      }, Yb = Es.exports, Kp;
      function Gb() {
        return Kp || (Kp = 1, function(c, l) {
          (function(u, s) {
            s();
          })(Yb, function() {
            function u(y, R) {
              return typeof R > "u" ? R = {
                autoBom: false
              } : typeof R != "object" && (console.warn("Deprecated: Expected third argument to be a object"), R = {
                autoBom: !R
              }), R.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(y.type) ? new Blob([
                "\uFEFF",
                y
              ], {
                type: y.type
              }) : y;
            }
            function s(y, R, x) {
              var O = new XMLHttpRequest();
              O.open("GET", y), O.responseType = "blob", O.onload = function() {
                S(O.response, R, x);
              }, O.onerror = function() {
                console.error("could not download file");
              }, O.send();
            }
            function o(y) {
              var R = new XMLHttpRequest();
              R.open("HEAD", y, false);
              try {
                R.send();
              } catch {
              }
              return 200 <= R.status && 299 >= R.status;
            }
            function d(y) {
              try {
                y.dispatchEvent(new MouseEvent("click"));
              } catch {
                var R = document.createEvent("MouseEvents");
                R.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), y.dispatchEvent(R);
              }
            }
            var m = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof as == "object" && as.global === as ? as : void 0, v = m.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), S = m.saveAs || (typeof window != "object" || window !== m ? function() {
            } : "download" in HTMLAnchorElement.prototype && !v ? function(y, R, x) {
              var O = m.URL || m.webkitURL, z = document.createElement("a");
              R = R || y.name || "download", z.download = R, z.rel = "noopener", typeof y == "string" ? (z.href = y, z.origin === location.origin ? d(z) : o(z.href) ? s(y, R, x) : d(z, z.target = "_blank")) : (z.href = O.createObjectURL(y), setTimeout(function() {
                O.revokeObjectURL(z.href);
              }, 4e4), setTimeout(function() {
                d(z);
              }, 0));
            } : "msSaveOrOpenBlob" in navigator ? function(y, R, x) {
              if (R = R || y.name || "download", typeof y != "string") navigator.msSaveOrOpenBlob(u(y, x), R);
              else if (o(y)) s(y, R, x);
              else {
                var O = document.createElement("a");
                O.href = y, O.target = "_blank", setTimeout(function() {
                  d(O);
                });
              }
            } : function(y, R, x, O) {
              if (O = O || open("", "_blank"), O && (O.document.title = O.document.body.innerText = "downloading..."), typeof y == "string") return s(y, R, x);
              var z = y.type === "application/octet-stream", L = /constructor/i.test(m.HTMLElement) || m.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
              if ((j || z && L || v) && typeof FileReader < "u") {
                var V = new FileReader();
                V.onloadend = function() {
                  var tt = V.result;
                  tt = j ? tt : tt.replace(/^data:[^;]*;/, "data:attachment/file;"), O ? O.location.href = tt : location = tt, O = null;
                }, V.readAsDataURL(y);
              } else {
                var ut = m.URL || m.webkitURL, B = ut.createObjectURL(y);
                O ? O.location = B : location.href = B, O = null, setTimeout(function() {
                  ut.revokeObjectURL(B);
                }, 4e4);
              }
            });
            m.saveAs = S.saveAs = S, c.exports = S;
          });
        }(Es)), Es.exports;
      }
      var Qb = Gb();
      function ys(c, l) {
        Qb.saveAs(c, l);
      }
      function Vb(c, l, u) {
        const s = [
          "# Meeting Minutes",
          "",
          "## Transcript",
          ...c.map((o) => `- **${Kb(o.t)} ${o.speaker ?? ""}**: ${o.text}`),
          "",
          "## Decisions",
          ...l.map((o) => `- ${o}`),
          "",
          "## Open To\u2011Dos",
          ...u.map((o) => `- [ ] ${o}`)
        ].join(`
`);
        return new Blob([
          s
        ], {
          type: "text/markdown"
        });
      }
      function Zb(c) {
        const l = c.map((u, s) => `${s + 1}
${Ms(u.start)} --> ${Ms(u.end)}
${u.text}

`).join(`
`);
        return new Blob([
          l
        ], {
          type: "text/plain"
        });
      }
      function kb(c) {
        const l = `WEBVTT

`, u = c.map((s) => `${Ms(s.start)} --> ${Ms(s.end)}
${s.text}

`).join(`
`);
        return new Blob([
          l + u
        ], {
          type: "text/vtt"
        });
      }
      function Kb(c) {
        return new Date(c * 1e3).toISOString().substring(11, 19);
      }
      function Ms(c) {
        return new Date(c * 1e3).toISOString().substring(11, 23).replace(".", ",");
      }
      var Ao, Jp;
      function Jb() {
        if (Jp) return Ao;
        Jp = 1, Ao = c;
        function c(m, v) {
          v = v || {};
          var S = m.numberOfChannels, y = m.sampleRate, R = v.float32 ? 3 : 1, x = R === 3 ? 32 : 16, O;
          return S === 2 ? O = u(m.getChannelData(0), m.getChannelData(1)) : O = m.getChannelData(0), l(O, R, y, S, x);
        }
        function l(m, v, S, y, R) {
          var x = R / 8, O = y * x, z = new ArrayBuffer(44 + m.length * x), L = new DataView(z);
          return d(L, 0, "RIFF"), L.setUint32(4, 36 + m.length * x, true), d(L, 8, "WAVE"), d(L, 12, "fmt "), L.setUint32(16, 16, true), L.setUint16(20, v, true), L.setUint16(22, y, true), L.setUint32(24, S, true), L.setUint32(28, S * O, true), L.setUint16(32, O, true), L.setUint16(34, R, true), d(L, 36, "data"), L.setUint32(40, m.length * x, true), v === 1 ? o(L, 44, m) : s(L, 44, m), z;
        }
        function u(m, v) {
          for (var S = m.length + v.length, y = new Float32Array(S), R = 0, x = 0; R < S; ) y[R++] = m[x], y[R++] = v[x], x++;
          return y;
        }
        function s(m, v, S) {
          for (var y = 0; y < S.length; y++, v += 4) m.setFloat32(v, S[y], true);
        }
        function o(m, v, S) {
          for (var y = 0; y < S.length; y++, v += 2) {
            var R = Math.max(-1, Math.min(1, S[y]));
            m.setInt16(v, R < 0 ? R * 32768 : R * 32767, true);
          }
        }
        function d(m, v, S) {
          for (var y = 0; y < S.length; y++) m.setUint8(v + y, S.charCodeAt(y));
        }
        return Ao;
      }
      var $b = Jb();
      const Fb = N0($b), Wb = {
        mimeType: "audio/webm;codecs=opus"
      };
      function Pb() {
        const [c, l] = Ze.useState(""), [u, s] = Ze.useState([]), [o, d] = Ze.useState([]), [m, v] = Ze.useState([]), S = Ze.useRef(null), y = Ze.useRef(() => {
        }), R = Ze.useRef(null), x = Ze.useRef([]), O = Ze.useRef([]), z = Ze.useRef(0), L = () => {
          var _a;
          z.current = Date.now() / 1e3, S.current = new k0(async (V, ut) => {
            if (l((B) => B + " " + V), ut) {
              O.current.push({
                t: Date.now() / 1e3,
                text: V
              });
              const B = await Lb(V);
              B && (s(B.decisions), d(B.todos), v(B.suggestions));
            }
          }), (_a = S.current) == null ? void 0 : _a.connect(), Z0((V) => {
            var _a2;
            return (_a2 = S.current) == null ? void 0 : _a2.send(V);
          }).then((V) => y.current = V), navigator.mediaDevices.getUserMedia({
            audio: true
          }).then((V) => {
            R.current = new MediaRecorder(V, Wb), R.current.ondataavailable = (ut) => x.current.push(ut.data), R.current.start();
          });
        }, j = async () => {
          var _a;
          (_a = y.current) == null ? void 0 : _a.call(y), S.current = null, await new Promise((Q) => {
            if (!R.current) return Q();
            R.current.addEventListener("stop", () => Q(), {
              once: true
            }), R.current.stop();
          });
          const V = new Blob(x.current, {
            type: "audio/webm"
          }), ut = await Ib(V);
          let B = [];
          try {
            B = await Xb(ut);
          } catch (Q) {
            console.warn("Diarisation failed \u2192 weiter ohne Speaker\u2011Labels", Q);
          }
          const tt = O.current.map((Q) => {
            const ft = B.find((ot) => Q.t >= ot.start && Q.t <= ot.end);
            return {
              ...Q,
              speaker: (ft == null ? void 0 : ft.speaker) ?? "Speaker"
            };
          });
          ys(ut, "raw-audio.wav"), ys(Vb(tt, u, o), "minutes.md");
          const st = tt.map((Q, ft, ot) => {
            var _a2;
            return {
              start: Q.t - z.current,
              end: (((_a2 = ot[ft + 1]) == null ? void 0 : _a2.t) || Date.now() / 1e3) - z.current,
              text: Q.text
            };
          });
          ys(Zb(st), "captions.srt"), ys(kb(st), "captions.vtt");
        };
        return oe.jsxs("div", {
          className: "grid grid-cols-2 gap-4 p-4 font-mono text-sm",
          children: [
            oe.jsx("button", {
              className: "col-span-2 bg-black text-white p-2 rounded",
              onClick: L,
              children: "Start Meeting"
            }),
            oe.jsx("pre", {
              className: "border p-2 h-64 overflow-y-scroll whitespace-pre-wrap",
              children: c
            }),
            oe.jsxs("ul", {
              className: "border p-2",
              children: [
                oe.jsx("h3", {
                  children: "Decisions"
                }),
                u.map((V) => oe.jsxs("li", {
                  children: [
                    "\u2022 ",
                    V
                  ]
                }, V))
              ]
            }),
            oe.jsxs("ul", {
              className: "border p-2",
              children: [
                oe.jsx("h3", {
                  children: "Open\xA0To\u2011Dos"
                }),
                o.map((V) => oe.jsxs("li", {
                  children: [
                    "\u2022 ",
                    V
                  ]
                }, V))
              ]
            }),
            oe.jsxs("ul", {
              className: "border p-2",
              children: [
                oe.jsx("h3", {
                  children: "Clever things to say"
                }),
                m.map((V) => oe.jsxs("li", {
                  children: [
                    "\u{1F4A1} ",
                    V
                  ]
                }, V))
              ]
            }),
            oe.jsx("button", {
              className: "col-span-2 bg-red-600 text-white p-2 rounded",
              onClick: j,
              children: "Stop"
            })
          ]
        });
      }
      async function Ib(c) {
        const l = new AudioContext(), u = await c.arrayBuffer(), s = await l.decodeAudioData(u), o = Fb(s);
        return new Blob([
          o
        ], {
          type: "audio/wav"
        });
      }
      V0.createRoot(document.getElementById("root")).render(oe.jsx(Ze.StrictMode, {
        children: oe.jsx(Pb, {})
      }));
    })();
  }
});
export default require_stdin();
