(self.webpackChunk = self.webpackChunk || []).push([
  ["654"],
  {
    941: function (e, t, n) {
      "use strict";
      var r = n(3949),
        i = n(6011);
      i.setEnv(r.env),
        r.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return B;
        },
        clearRequested: function () {
          return w;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return V;
        },
        eventStateChanged: function () {
          return U;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return x;
        },
        instanceStarted: function () {
          return j;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return v;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return F;
        },
        sessionInitialized: function () {
          return P;
        },
        sessionStarted: function () {
          return b;
        },
        sessionStopped: function () {
          return L;
        },
        stopRequested: function () {
          return D;
        },
        testFrameRendered: function () {
          return G;
        },
        viewportWidthChanged: function () {
          return Q;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: u,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: E,
          IX2_CLEAR_REQUESTED: p,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: _,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: y,
          IX2_INSTANCE_ADDED: O,
          IX2_INSTANCE_STARTED: m,
          IX2_INSTANCE_REMOVED: A,
          IX2_ELEMENT_STATE_CHANGED: R,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: C,
          IX2_VIEWPORT_WIDTH_CHANGED: N,
          IX2_MEDIA_QUERIES_DEFINED: S,
        } = a.IX2EngineActionTypes,
        { reifyState: h } = o.IX2VanillaUtils,
        F = (e) => ({ type: u, payload: { ...h(e) } }),
        P = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        b = () => ({ type: c }),
        L = () => ({ type: s }),
        M = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        v = ({
          actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: u,
          verbose: l,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: u,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: l,
            rawData: c,
          },
        }),
        D = (e) => ({ type: E, payload: { actionListId: e } }),
        w = () => ({ type: p }),
        V = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        G = (e = 1) => ({ type: g, payload: { step: e } }),
        U = (e, t) => ({ type: _, payload: { stateKey: e, newState: t } }),
        B = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: y, payload: { key: e, value: t } }),
        X = (e) => ({ type: O, payload: { ...e } }),
        j = (e, t) => ({ type: m, payload: { instanceId: e, time: t } }),
        x = (e) => ({ type: A, payload: { instanceId: e } }),
        W = (e, t, n, r) => ({
          type: R,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: C,
          payload: { actionListId: e, isPlaying: t },
        }),
        Q = ({ width: e, mediaQueries: t }) => ({
          type: N,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: S });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return p;
          },
          init: function () {
            return E;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let o = n(9516),
        u = (r = n(7243)) && r.__esModule ? r : { default: r },
        l = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var r = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, a, o)
                : (r[a] = e[a]);
            }
          return (r.default = e), n && n.set(e, r), r;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(u.default);
      function f(e) {
        e() && (0, l.observeRequests)(d);
      }
      function E(e) {
        p(), (0, l.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function p() {
        (0, l.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        elementContains: function () {
          return y;
        },
        getChildElements: function () {
          return m;
        },
        getClosestElement: function () {
          return R;
        },
        getProperty: function () {
          return p;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return C;
        },
        getSiblingElements: function () {
          return A;
        },
        getStyle: function () {
          return E;
        },
        getValidDocument: function () {
          return _;
        },
        isSiblingNode: function () {
          return O;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: u } = a.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function E(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function p(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[u](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              r = n[0];
            if (((t = n[1]), r !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function _(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function y(e, t) {
        return e.contains(t);
      }
      function O(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function m(e) {
        let t = [];
        for (let n = 0, { length: r } = e || []; n < r; n++) {
          let { children: r } = e[n],
            { length: i } = r;
          if (i) for (let e = 0; e < i; e++) t.push(r[e]);
        }
        return t;
      }
      function A(e = []) {
        let t = [],
          n = [];
        for (let r = 0, { length: i } = e; r < i; r++) {
          let { parentNode: i } = e[r];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let a = i.firstElementChild;
          for (; null != a; )
            -1 === e.indexOf(a) && t.push(a), (a = a.nextElementSibling);
        }
        return t;
      }
      let R = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[u] && n[u](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function C(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        observeRequests: function () {
          return q;
        },
        startActionGroup: function () {
          return ep;
        },
        startEngine: function () {
          return er;
        },
        stopActionGroup: function () {
          return eE;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = T(n(9777)),
        o = T(n(4738)),
        u = T(n(4659)),
        l = T(n(3452)),
        c = T(n(6633)),
        s = T(n(3729)),
        d = T(n(2397)),
        f = T(n(5082)),
        E = n(7087),
        p = n(9468),
        I = n(3946),
        g = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = y(t);
          if (n && n.has(e)) return n.get(e);
          var r = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, a, o)
                : (r[a] = e[a]);
            }
          return (r.default = e), n && n.set(e, r), r;
        })(n(5012)),
        _ = T(n(8955));
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (y = function (e) {
          return e ? n : t;
        })(e);
      }
      let O = Object.keys(E.QuickEffectIds),
        m = (e) => O.includes(e),
        {
          COLON_DELIMITER: A,
          BOUNDARY_SELECTOR: R,
          HTML_ELEMENT: C,
          RENDER_GENERAL: N,
          W_MOD_IX: S,
        } = E.IX2EngineConstants,
        {
          getAffectedElements: h,
          getElementId: F,
          getDestinationValues: P,
          observeStore: b,
          getInstanceId: L,
          renderHTMLElement: M,
          clearAllStyles: v,
          getMaxDurationItemIndex: D,
          getComputedStyle: w,
          getInstanceOrigin: V,
          reduceListToGroup: G,
          shouldNamespaceEventParameter: U,
          getNamespacedParameterId: B,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: X,
          clearObjectCache: j,
          stringifyTarget: x,
          mediaQueriesEqual: W,
          shallowEqual: H,
        } = p.IX2VanillaUtils,
        {
          isPluginType: Q,
          createPluginInstance: Y,
          getPluginDuration: $,
        } = p.IX2VanillaPlugins,
        z = navigator.userAgent,
        K = z.match(/iPad/i) || z.match(/iPhone/);
      function q(e) {
        b({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          b({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          b({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          b({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let r = () => {
          er({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(r, 0) : r();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: r,
            actionItemId: i,
            eventId: a,
            allowEvents: o,
            immediate: u,
            testManual: l,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (r && i && s && u) {
          let e = s.actionLists[r];
          e && (s = G({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (er({ store: t, rawData: s, allowEvents: o, testManual: l }),
          (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || m(n))
        ) {
          eE({ store: t, actionListId: r }),
            ed({ store: t, actionListId: r, eventId: a });
          let e = ep({
            store: t,
            eventId: a,
            actionListId: r,
            immediate: u,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? eE({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), v({ store: t, elementApi: g });
      }
      function er({ store: e, rawData: t, allowEvents: n, testManual: r }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(R),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              eu(e),
                (0, d.default)(n, (t, n) => {
                  let r = _.default[n];
                  if (!r)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let r in e) {
                        let { eventTypeId: i, target: a } = e[r],
                          o = g.getQuerySelector(a);
                        t[o] ||
                          ((i === E.EventTypeConsts.MOUSE_CLICK ||
                            i === E.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: r, handler: i } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: c } = l,
                      s = el(n, es);
                    if (!(0, u.default)(s)) return;
                    (0, d.default)(s, (e, r) => {
                      let i = n[r],
                        {
                          action: u,
                          id: s,
                          mediaQueries: d = l.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = u.config;
                      W(d, l.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        u.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: r } = n,
                              i = (0, o.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              u = (0, a.default)(i, ({ id: e }) => e === r),
                              l = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            u &&
                              e.forEach((e, r) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: r,
                                  eventConfig: i,
                                  actionListId: a,
                                  parameterGroup: u,
                                  smoothing: l,
                                  restingValue: c,
                                }) {
                                  let { ixData: s, ixSession: d } =
                                      e.getState(),
                                    { events: f } = s,
                                    p = f[r],
                                    { eventTypeId: I } = p,
                                    _ = {},
                                    T = {},
                                    y = [],
                                    { continuousActionGroups: O } = u,
                                    { id: m } = u;
                                  U(I, i) && (m = B(t, m));
                                  let C =
                                    d.hasBoundaryNodes && n
                                      ? g.getClosestElement(n, R)
                                      : null;
                                  O.forEach((e) => {
                                    let { keyframe: t, actionItems: r } = e;
                                    r.forEach((e) => {
                                      let { actionTypeId: r } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let a = i.boundaryMode ? C : null,
                                        o = x(i) + A + r;
                                      if (
                                        ((T[o] = (function (e = [], t, n) {
                                          let r,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((r = n), !0)
                                            ),
                                            null == r &&
                                              ((r = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[r].actionItems.push(n),
                                            i
                                          );
                                        })(T[o], t, e)),
                                        !_[o])
                                      ) {
                                        _[o] = !0;
                                        let { config: t } = e;
                                        h({
                                          config: t,
                                          event: p,
                                          eventTarget: n,
                                          elementRoot: a,
                                          elementApi: g,
                                        }).forEach((e) => {
                                          y.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    y.forEach(({ element: t, key: n }) => {
                                      let i = T[n],
                                        u = (0, o.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = u,
                                        d = (
                                          s === E.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                u.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Q(s)
                                        )
                                          ? Y(s)?.(t, u)
                                          : null,
                                        f = P(
                                          {
                                            element: t,
                                            actionItem: u,
                                            elementApi: g,
                                          },
                                          d
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: r,
                                        actionListId: a,
                                        actionItem: u,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: m,
                                        actionGroups: i,
                                        smoothing: l,
                                        restingValue: c,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + A + r,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: u,
                                  smoothing: l,
                                  restingValue: d,
                                });
                              });
                          }),
                        (u.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_START_ACTION ||
                          m(u.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: s });
                    });
                    let p = (e) => {
                        let { ixSession: r } = t.getState();
                        ec(s, (a, o, u) => {
                          let c = n[o],
                            s = r.eventState[u],
                            { action: d, mediaQueries: f = l.mediaQueryKeys } =
                              c;
                          if (!k(f, r.mediaQueryKey)) return;
                          let p = (n = {}) => {
                            let r = i(
                              {
                                store: t,
                                element: a,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: u,
                              },
                              s
                            );
                            H(r, s) ||
                              t.dispatch((0, I.eventStateChanged)(u, r));
                          };
                          d.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(p)
                            : p();
                        });
                      },
                      _ = (0, f.default)(p, 12),
                      T = ({ target: e = document, types: n, throttle: r }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = r ? _ : p;
                            e.addEventListener(n, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(r)
                      ? r.forEach(T)
                      : "string" == typeof r && T(e);
                  })({ logic: r, store: e, events: t });
                });
              let { ixSession: r } = e.getState();
              r.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    eu(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(S) && (e.className += ` ${S}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              b({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    v({ store: e, elementApi: g }),
                    er({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let n = (r) => {
                let { ixSession: i, ixParameters: a } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(r, a)), t)) {
                    let t = b({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, r);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(ea), j(), e.dispatch((0, I.sessionStopped)());
        }
      }
      function ea({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function eu(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          r = window.innerWidth;
        if (r !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: r, mediaQueries: t })
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, s.default)(e, t), c.default),
        ec = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, r) => {
              t(e, n, n + A + r);
            });
          });
        },
        es = (e) =>
          h({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: r, ixSession: i } = e.getState(),
          { actionLists: a, events: u } = r,
          l = u[n],
          c = a[t];
        if (c && c.useFirstGroupAsInitialState) {
          let a = (0, o.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, o.default)(l, "mediaQueries", r.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          a.forEach((r) => {
            let { config: i, actionTypeId: a } = r,
              o = h({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : i,
                event: l,
                elementApi: g,
              }),
              u = Q(a);
            o.forEach((i) => {
              let o = u ? Y(a)?.(i, r) : null;
              eI({
                destination: P({ element: i, actionItem: r, elementApi: g }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: r,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: r } = t;
            eg(t, e),
              r &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i,
      }) {
        let { ixInstances: a, ixSession: u } = e.getState(),
          l = u.hasBoundaryNodes && n ? g.getClosestElement(n, R) : null;
        (0, d.default)(a, (n) => {
          let a = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            u = !r || n.eventStateKey === r;
          if (n.actionListId === i && n.eventId === t && u) {
            if (l && a && !g.elementContains(l, n.element)) return;
            eg(n, e),
              n.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i,
        groupIndex: a = 0,
        immediate: u,
        verbose: l,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: d } = c,
          f = d[t] || {},
          { mediaQueries: E = c.mediaQueryKeys } = f,
          { actionItemGroups: p, useFirstGroupAsInitialState: I } = (0,
          o.default)(c, `actionLists.${i}`, {});
        if (!p || !p.length) return !1;
        a >= p.length && (0, o.default)(f, "config.loop") && (a = 0),
          0 === a && I && a++;
        let _ =
            (0 === a || (1 === a && I)) && m(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          T = (0, o.default)(p, [a, "actionItems"], []);
        if (!T.length || !k(E, s.mediaQueryKey)) return !1;
        let y = s.hasBoundaryNodes && n ? g.getClosestElement(n, R) : null,
          O = D(T),
          A = !1;
        return (
          T.forEach((o, c) => {
            let { config: s, actionTypeId: d } = o,
              E = Q(d),
              { target: p } = s;
            p &&
              h({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: p.boundaryMode ? y : null,
                elementApi: g,
              }).forEach((s, f) => {
                let p = E ? Y(d)?.(s, o) : null,
                  I = E ? $(d)(s, o) : null;
                A = !0;
                let T = w({ element: s, actionItem: o }),
                  y = P({ element: s, actionItem: o, elementApi: g }, p);
                eI({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: r,
                  actionListId: i,
                  groupIndex: a,
                  isCarrier: O === c && 0 === f,
                  computedStyle: T,
                  destination: y,
                  immediate: u,
                  verbose: l,
                  pluginInstance: p,
                  pluginDuration: I,
                  instanceDelay: _,
                });
              });
          }),
          A
        );
      }
      function eI(e) {
        let t,
          { store: n, computedStyle: r, ...i } = e,
          {
            element: a,
            actionItem: o,
            immediate: u,
            pluginInstance: l,
            continuous: c,
            restingValue: s,
            eventId: d,
          } = i,
          f = L(),
          { ixElements: p, ixSession: _, ixData: T } = n.getState(),
          y = F(p, a),
          { refState: O } = p[y] || {},
          m = g.getRefType(a),
          A = _.reducedMotion && E.ReducedMotionTypes[o.actionTypeId];
        if (A && c)
          switch (T.events[d]?.eventTypeId) {
            case E.EventTypeConsts.MOUSE_MOVE:
            case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let R = V(a, O, r, o, g, l);
        if (
          (n.dispatch(
            (0, I.instanceAdded)({
              instanceId: f,
              elementId: y,
              origin: R,
              refType: m,
              skipMotion: A,
              skipToValue: t,
              ...i,
            })
          ),
          e_(document.body, "ix2-animation-started", f),
          u)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), n));
            let { ixInstances: r } = e.getState();
            eT(r[t], e);
          })(n, f);
        b({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
          c || n.dispatch((0, I.instanceStarted)(f, _.tick));
      }
      function eg(e, t) {
        e_(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: r } = e,
          { ixElements: i } = t.getState(),
          { ref: a, refType: o } = i[n] || {};
        o === C && X(a, r, g), t.dispatch((0, I.instanceRemoved)(e.id));
      }
      function e_(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
      }
      function eT(e, t) {
        let {
            active: n,
            continuous: r,
            complete: i,
            elementId: a,
            actionItem: o,
            actionTypeId: u,
            renderType: l,
            current: c,
            groupIndex: s,
            eventId: d,
            eventTarget: f,
            eventStateKey: E,
            actionListId: p,
            isCarrier: _,
            styleProp: T,
            verbose: y,
            pluginInstance: O,
          } = e,
          { ixData: m, ixSession: A } = t.getState(),
          { events: R } = m,
          { mediaQueries: S = m.mediaQueryKeys } = R && R[d] ? R[d] : {};
        if (k(S, A.mediaQueryKey) && (r || n || i)) {
          if (c || (l === N && i)) {
            t.dispatch((0, I.elementStateChanged)(a, u, c, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: r, refState: i } = e[a] || {},
              s = i && i[u];
            (r === C || Q(u)) && M(n, i, s, d, o, T, g, l, O);
          }
          if (i) {
            if (_) {
              let e = ep({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: E,
                actionListId: p,
                groupIndex: s + 1,
                verbose: y,
              });
              y &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: p,
                    isPlaying: !1,
                  })
                );
            }
            eg(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eE;
          },
        });
      let i = d(n(5801)),
        a = d(n(4738)),
        o = d(n(3789)),
        u = n(7087),
        l = n(1970),
        c = n(3946),
        s = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: E,
          MOUSE_DOWN: p,
          MOUSE_UP: I,
          MOUSE_OVER: g,
          MOUSE_OUT: _,
          DROPDOWN_CLOSE: T,
          DROPDOWN_OPEN: y,
          SLIDER_ACTIVE: O,
          SLIDER_INACTIVE: m,
          TAB_ACTIVE: A,
          TAB_INACTIVE: R,
          NAVBAR_CLOSE: C,
          NAVBAR_OPEN: N,
          MOUSE_MOVE: S,
          PAGE_SCROLL_DOWN: h,
          SCROLL_INTO_VIEW: F,
          SCROLL_OUT_OF_VIEW: P,
          PAGE_SCROLL_UP: b,
          SCROLLING_IN_VIEW: L,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: v,
          ECOMMERCE_CART_OPEN: D,
          PAGE_START: w,
          PAGE_SCROLL: V,
        } = u.EventTypeConsts,
        G = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: B } = u.IX2EngineConstants,
        { getNamespacedParameterId: k } = s.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        j = X(({ element: e, nativeEvent: t }) => e === t.target),
        x = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, i.default)([j, x]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Q = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!H(e, r);
        },
        Y = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: u } = t,
            { actionListId: c, autoStopEventId: s } = o.config,
            d = H(e, s);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + B + r.split(B)[1],
                actionListId: (0, a.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: r,
              actionListId: c,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: r,
              actionListId: c,
            }),
            i
          );
        },
        $ = (e, t) => (n, r) => !0 === e(n, r) ? t(n, r) : r,
        z = { handler: $(W, Y) },
        K = { ...z, types: [G, U].join(" ") },
        q = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: q },
        ee = { PAGE_START: w, PAGE_FINISH: M },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        er = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            a = e.contains(r);
          if ("mouseover" === n && a) return !0;
          let o = e.contains(i);
          return "mouseout" === n && !!a && !!o;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = et(),
            a = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? a : (i * (a || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: r,
            bottom: i - o,
          });
        },
        ea = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = -1 !== [G, U].indexOf(r) ? r === G : n.isActive,
            a = { ...n, isActive: i };
          return ((!n || a.isActive !== n.isActive) && e(t, a)) || a;
        },
        eo = (e) => (t, n) => {
          let r = { elementHovered: er(t) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              e(t, r)) ||
            r
          );
        },
        eu =
          (e) =>
          (t, n = {}) => {
            let r,
              i,
              { stiffScrollTop: a, scrollHeight: o, innerHeight: u } = et(),
              {
                event: { config: l, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = l,
              f = o - u,
              E = Number((a / f).toFixed(2));
            if (n && n.percentTop === E) return n;
            let p = ("PX" === d ? s : (u * (s || 0)) / 100) / f,
              I = 0;
            n &&
              ((r = E > n.percentTop),
              (I = (i = n.scrollingDown !== r) ? E : n.anchorTop));
            let g = c === h ? E >= I + p : E <= I - p,
              _ = {
                ...n,
                percentTop: E,
                inBounds: g,
                anchorTop: I,
                scrollingDown: r,
              };
            return (n && g && (i || _.inBounds !== n.inBounds) && e(t, _)) || _;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let r = { clickCount: (n.clickCount % 2) + 1 };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          },
        es = (e = !0) => ({
          ...K,
          handler: $(
            e ? W : j,
            ea((e, t) => (t.isActive ? z.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...K,
          handler: $(
            e ? W : j,
            ea((e, t) => (t.isActive ? t : z.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((r = (e, t) => {
              let { elementVisible: n } = t,
                { event: r, store: i } = e,
                { ixData: a } = i.getState(),
                { events: o } = a;
              return !o[r.action.config.autoStopEventId] && t.triggered
                ? t
                : (r.eventTypeId === F) === n
                ? (Y(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  r(e, n)) ||
                n
              );
            }),
        },
        eE = {
          [O]: es(),
          [m]: ed(),
          [y]: es(),
          [T]: ed(),
          [N]: es(!1),
          [C]: ed(!1),
          [A]: es(),
          [R]: ed(),
          [D]: { types: "ecommerce-cart-open", handler: $(W, Y) },
          [v]: { types: "ecommerce-cart-close", handler: $(W, Y) },
          [f]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                Q(e) ? 1 === t && Y(e) : Y(e);
              })
            ),
          },
          [E]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                2 === t && Y(e);
              })
            ),
          },
          [p]: { ...z, types: "mousedown" },
          [I]: { ...z, types: "mouseup" },
          [g]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered && Y(e);
              })
            ),
          },
          [_]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered || Y(e);
              })
            ),
          },
          [S]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: r,
                eventStateKey: i,
              },
              a = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: E = a.clientX,
                  clientY: p = a.clientY,
                  pageX: I = a.pageX,
                  pageY: g = a.pageY,
                } = r,
                _ = "X_AXIS" === l,
                T = "mouseout" === r.type,
                y = f / 100,
                O = s,
                m = !1;
              switch (o) {
                case u.EventBasedOn.VIEWPORT:
                  y = _
                    ? Math.min(E, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                case u.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: r,
                  } = et();
                  y = _ ? Math.min(e + I, n) / n : Math.min(t + g, r) / r;
                  break;
                }
                case u.EventBasedOn.ELEMENT:
                default: {
                  O = k(i, s);
                  let e = 0 === r.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: r })) break;
                  let n = t.getBoundingClientRect(),
                    { left: a, top: o, width: u, height: l } = n;
                  if (!e && !el({ left: E, top: p }, n)) break;
                  (m = !0), (y = _ ? (E - a) / u : (p - o) / l);
                }
              }
              return (
                T && (y > 0.95 || y < 0.05) && (y = Math.round(y)),
                (o !== u.EventBasedOn.ELEMENT || m || m !== a.elementHovered) &&
                  ((y = d ? 1 - y : y),
                  e.dispatch((0, c.parameterChanged)(O, y))),
                {
                  elementHovered: m,
                  clientX: E,
                  clientY: p,
                  pageX: I,
                  pageY: g,
                }
              );
            },
          },
          [V]: {
            types: q,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: a, clientHeight: o } = et(),
                u = i / (a - o);
              (u = r ? 1 - u : u), e.dispatch((0, c.parameterChanged)(n, u));
            },
          },
          [L]: {
            types: q,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: a,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: s,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: E,
                  continuousParameterGroupId: p,
                  startsEntering: I,
                  startsExiting: g,
                  addEndOffset: _,
                  addStartOffset: T,
                  addOffsetValue: y = 0,
                  endOffsetValue: O = 0,
                } = n;
              if (f === u.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === E ? a / l : o / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(p, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(r, p),
                  a = e.getBoundingClientRect(),
                  o = (T ? y : 0) / 100,
                  u = (_ ? O : 0) / 100;
                (o = I ? o : 1 - o), (u = g ? u : 1 - u);
                let l = a.top + Math.min(a.height * o, d),
                  f = Math.min(d + (a.top + a.height * u - l), s),
                  E = Math.min(Math.max(0, d - l), f) / f;
                return (
                  E !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, E)),
                  { scrollPercent: E }
                );
              }
            },
          },
          [F]: ef,
          [P]: ef,
          [h]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown && Y(e);
            }),
          },
          [b]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown || Y(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Y(e), n;
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => (t || Y(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: r } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === r ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let r = n(7087),
        i = n(9468),
        a = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: u,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = r.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: E,
          createBezierEasing: p,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = r.IX2EngineConstants,
        {
          getItemConfigByKey: g,
          getRenderType: _,
          getStyleProp: T,
        } = i.IX2VanillaUtils,
        y = (e, t) => {
          let n,
            r,
            i,
            o,
            {
              position: u,
              parameterId: l,
              actionGroups: c,
              destinationKeys: s,
              smoothing: d,
              restingValue: p,
              actionTypeId: I,
              customEasingFn: _,
              skipMotion: T,
              skipToValue: y,
            } = e,
            { parameters: O } = t.payload,
            m = Math.max(1 - d, 0.01),
            A = O[l];
          null == A && ((m = 1), (A = p));
          let R = f((Math.max(A, 0) || 0) - u),
            C = T ? y : f(u + R * m),
            N = 100 * C;
          if (C === u && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: a } = c[e];
            if ((0 === e && (n = a[0]), N >= t)) {
              n = a[0];
              let u = c[e + 1],
                l = u && N !== t;
              (r = l ? u.actionItems[0] : null),
                l && ((i = t / 100), (o = (u.keyframe - t) / 100));
            }
          }
          let S = {};
          if (n && !r)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              S[t] = g(I, t, n.config);
            }
          else if (n && r && void 0 !== i && void 0 !== o) {
            let e = (C - i) / o,
              t = E(n.config.easing, e, _);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                a = g(I, i, n.config),
                o = (g(I, i, r.config) - a) * t + a;
              S[i] = o;
            }
          }
          return (0, a.merge)(e, { position: C, current: S });
        },
        O = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: u,
              verbose: l,
              actionItem: c,
              destination: s,
              destinationKeys: d,
              pluginDuration: p,
              instanceDelay: g,
              customEasingFn: _,
              skipMotion: T,
            } = e,
            y = c.config.easing,
            { duration: O, delay: m } = c.config;
          null != p && (O = p),
            (m = null != g ? g : m),
            u === I ? (O = 0) : (o || T) && (O = m = 0);
          let { now: A } = t.payload;
          if (n && r) {
            let t = A - (i + m);
            if (l) {
              let t = O + m,
                n = f(Math.min(Math.max(0, (A - i) / t), 1));
              e = (0, a.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / O), 1)),
              o = E(y, n, _),
              u = {},
              c = null;
            return (
              d.length &&
                (c = d.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(r[t]) || 0,
                    a = parseFloat(n) - i;
                  return (e[t] = a * o + i), e;
                }, {})),
              (u.current = c),
              (u.position = n),
              1 === n && ((u.active = !1), (u.complete = !0)),
              (0, a.merge)(e, u)
            );
          }
          return e;
        },
        m = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case u:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: u,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: d,
                  origin: f,
                  destination: E,
                  immediate: I,
                  verbose: g,
                  continuous: y,
                  parameterId: O,
                  actionGroups: m,
                  smoothing: A,
                  restingValue: R,
                  pluginInstance: C,
                  pluginDuration: N,
                  instanceDelay: S,
                  skipMotion: h,
                  skipToValue: F,
                } = t.payload,
                { actionTypeId: P } = i,
                b = _(P),
                L = T(b, P),
                M = Object.keys(E).filter(
                  (e) => null != E[e] && "string" != typeof E[e]
                ),
                { easing: v } = i.config;
              return (0, a.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: E,
                destinationKeys: M,
                immediate: I,
                verbose: g,
                current: null,
                actionItem: i,
                actionTypeId: P,
                eventId: o,
                eventTarget: u,
                eventStateKey: l,
                actionListId: c,
                groupIndex: s,
                renderType: b,
                isCarrier: d,
                styleProp: L,
                continuous: y,
                parameterId: O,
                actionGroups: m,
                smoothing: A,
                restingValue: R,
                pluginInstance: C,
                pluginDuration: N,
                instanceDelay: S,
                skipMotion: h,
                skipToValue: F,
                customEasingFn:
                  Array.isArray(v) && 4 === v.length ? p(v) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: r } = t.payload;
              return (0, a.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: a } = i;
              for (let t = 0; t < a; t++) {
                let a = i[t];
                a !== n && (r[a] = e[a]);
              }
              return r;
            }
            case d: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let i = r[o],
                  u = e[i],
                  l = u.continuous ? y : O;
                n = (0, a.set)(n, i, l(u, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: a,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case r:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case a: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(9516),
        i = n(4609),
        a = n(628),
        o = n(5862),
        u = n(9468),
        l = n(7718),
        c = n(1540),
        { ixElements: s } = u.IX2ElementsReducer,
        d = (0, r.combineReducers)({
          ixData: i.ixData,
          ixRequest: a.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: l.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: a,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: l,
        } = r.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [a]: { value: "preview" },
          [o]: { value: "playback" },
          [u]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        d = (e = c, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let r = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: a,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: u,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: E,
          IX2_MEDIA_QUERIES_DEFINED: p,
        } = r.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        g = (e = I, t) => {
          switch (t.type) {
            case a: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
            }
            case o:
              return (0, i.set)(e, "active", !0);
            case u: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case l:
              return I;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case c: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], r);
            }
            case f: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], r);
            }
            case E: {
              let { width: n, mediaQueries: r } = t.payload,
                a = r.length,
                o = null;
              for (let e = 0; e < a; e++) {
                let { key: t, min: i, max: a } = r[e];
                if (n >= i && n <= a) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case p:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return a;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = (e) => e.value,
        a = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        u = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let r = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * r);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = "--wf-rive-fit",
        a = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        u = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: r = {} } = t.config.value;
          for (let e in r) null == r[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        E = (e, { PLUGIN_RIVE: t }, n) => {
          let r = u();
          if (!r) return;
          let o = r.getInstance(e),
            l = r.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), i in s || a in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    r = s[a] ?? t.alignment;
                  (n !== t.fit || r !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: r }));
                }
                for (let e in s) {
                  if (e === i || e === a) continue;
                  let r = n.find((t) => t.name === e);
                  if (null != r)
                    switch (r.type) {
                      case l.Boolean:
                        null != s[e] && (r.value = !!s[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (r.value = n);
                        break;
                      }
                      case l.Trigger:
                        s[e] && r.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : r.setLoadHandler(e, d);
        },
        p = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        a = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        u = (e, t) => e.value[t],
        l = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        E = (e, t, n) => {
          let r = a();
          if (!r) return;
          let i = r.getInstance(e),
            o = n.config.target.objectId,
            u = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: r } = t;
              null != r.positionX && (n.position.x = r.positionX),
                null != r.positionY && (n.position.y = r.positionY),
                null != r.positionZ && (n.position.z = r.positionZ),
                null != r.rotationX && (n.rotation.x = r.rotationX),
                null != r.rotationY && (n.rotation.y = r.rotationY),
                null != r.rotationZ && (n.rotation.z = r.rotationZ),
                null != r.scaleX && (n.scale.x = r.scaleX),
                null != r.scaleY && (n.scale.y = r.scaleY),
                null != r.scaleZ && (n.scale.z = r.scaleZ);
            };
          i ? u(i.spline) : r.setLoadHandler(e, u);
        },
        p = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = n(380),
        o = (e, t) => e.value[t],
        u = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            r = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(r);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, a.normalizeColor)(i)
            : void 0;
        },
        c = (e) => e.value,
        s = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: r }) =>
              [e, t, n, r].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
              `rgba(${e}, ${t}, ${n}, ${r})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: r },
              value: { unit: i },
            } = n.config,
            a = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(a, i));
          o && document.documentElement.style.setProperty(r, o.getValue(a, i));
        },
        E = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(7087),
        i = c(n(7377)),
        a = c(n(2866)),
        o = c(n(2570)),
        u = c(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var r = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(r, a, o)
              : (r[a] = e[a]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      let s = new Map([
        [r.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [r.ActionTypeConsts.PLUGIN_SPLINE, { ...a }],
        [r.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [r.ActionTypeConsts.PLUGIN_VARIABLE, { ...u }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return O;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return p;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return y;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return E;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return _;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return A;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return a;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return u;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return R;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return m;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = "IX2_RAW_DATA_IMPORTED",
        a = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        u = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        E = "IX2_EVENT_STATE_CHANGED",
        p = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        _ = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        y = "IX2_ELEMENT_STATE_CHANGED",
        O = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        m = "IX2_VIEWPORT_WIDTH_CHANGED",
        A = "IX2_MEDIA_QUERIES_DEFINED",
        R = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return U;
        },
        BACKGROUND_COLOR: function () {
          return G;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return B;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return Q;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return E;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return p;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return v;
        },
        FLEX: function () {
          return j;
        },
        FONT_VARIATION_SETTINGS: function () {
          return D;
        },
        HEIGHT: function () {
          return V;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return z;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return q;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return er;
        },
        RENDER_PLUGIN: function () {
          return ea;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return S;
        },
        ROTATE_Y: function () {
          return h;
        },
        ROTATE_Z: function () {
          return F;
        },
        SCALE_3D: function () {
          return N;
        },
        SCALE_X: function () {
          return A;
        },
        SCALE_Y: function () {
          return R;
        },
        SCALE_Z: function () {
          return C;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return P;
        },
        SKEW_X: function () {
          return b;
        },
        SKEW_Y: function () {
          return L;
        },
        TRANSFORM: function () {
          return _;
        },
        TRANSLATE_3D: function () {
          return m;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return y;
        },
        TRANSLATE_Z: function () {
          return O;
        },
        WF_PAGE: function () {
          return a;
        },
        WIDTH: function () {
          return w;
        },
        WILL_CHANGE: function () {
          return x;
        },
        W_MOD_IX: function () {
          return u;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = "|",
        a = "data-wf-page",
        o = "w-mod-js",
        u = "w-mod-ix",
        l = ".w-dyn-item",
        c = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        E = "xUnit",
        p = "yUnit",
        I = "zUnit",
        g = "unit",
        _ = "transform",
        T = "translateX",
        y = "translateY",
        O = "translateZ",
        m = "translate3d",
        A = "scaleX",
        R = "scaleY",
        C = "scaleZ",
        N = "scale3d",
        S = "rotateX",
        h = "rotateY",
        F = "rotateZ",
        P = "skew",
        b = "skewX",
        L = "skewY",
        M = "opacity",
        v = "filter",
        D = "font-variation-settings",
        w = "width",
        V = "height",
        G = "backgroundColor",
        U = "background",
        B = "borderColor",
        k = "color",
        X = "display",
        j = "flex",
        x = "willChange",
        W = "AUTO",
        H = ",",
        Q = ":",
        Y = "|",
        $ = "CHILDREN",
        z = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        q = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        er = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        ea = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return a;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        a = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return u;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return a.QuickEffectIds;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = c(n(1833), t),
        o = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let u = d(n(8023)),
        l = d(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var r = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(r, a, o)
              : (r[a] = e[a]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: r,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: a,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: u,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        s = { [r]: !0, [i]: !0, [a]: !0, [o]: !0, [u]: !0, [l]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return a;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return u;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var r in n)
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        a = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        u = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function r(e) {
        let t,
          r,
          i,
          a = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          u = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (u.startsWith("#")) {
          let e = u.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (r = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (a = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (r = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (a = parseInt(e.substring(6, 8), 16) / 255));
        } else if (u.startsWith("rgba")) {
          let e = u.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (r = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (a = parseFloat(e[3]));
        } else if (u.startsWith("rgb")) {
          let e = u.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (r = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (u.startsWith("hsla")) {
          let e,
            n,
            o,
            l = u.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            s = parseFloat(l[1].replace("%", "")) / 100,
            d = parseFloat(l[2].replace("%", "")) / 100;
          a = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            E = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = d - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = E), (o = 0))
            : c >= 60 && c < 120
            ? ((e = E), (n = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (o = E))
            : c >= 180 && c < 240
            ? ((e = 0), (n = E), (o = f))
            : c >= 240 && c < 300
            ? ((e = E), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = E)),
            (t = Math.round((e + p) * 255)),
            (r = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        } else if (u.startsWith("hsl")) {
          let e,
            n,
            a,
            o = u.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            c = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * c,
            f = d * (1 - Math.abs(((l / 60) % 2) - 1)),
            E = s - d / 2;
          l >= 0 && l < 60
            ? ((e = d), (n = f), (a = 0))
            : l >= 60 && l < 120
            ? ((e = f), (n = d), (a = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = d), (a = f))
            : l >= 180 && l < 240
            ? ((e = 0), (n = f), (a = d))
            : l >= 240 && l < 300
            ? ((e = f), (n = 0), (a = d))
            : ((e = d), (n = 0), (a = f)),
            (t = Math.round((e + E) * 255)),
            (r = Math.round((n + E) * 255)),
            (i = Math.round((a + E) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: r, blue: i, alpha: a };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        IX2BrowserSupport: function () {
          return a;
        },
        IX2EasingUtils: function () {
          return u;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = f(n(2662)),
        o = f(n(8686)),
        u = f(n(3767)),
        l = f(n(5861)),
        c = f(n(1799)),
        s = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var r = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(r, a, o)
              : (r[a] = e[a]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return u;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return E;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let o = (r = n(9777)) && r.__esModule ? r : { default: r },
        u = "undefined" != typeof window,
        l = (e, t) => (u ? e() : t),
        c = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let r = 0; r < n; r++) {
              let n = t[r];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let r = 0; r < n; r++) {
              let n = t[r] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        E = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var r = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, a, o)
                : (r[a] = e[a]);
            }
          return (r.default = e), n && n.set(e, r), r;
        })(n(8686)),
        u = (r = n(1361)) && r.__esModule ? r : { default: r };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let r = Math.pow(n, t),
          i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, u.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = {
          bounce: function () {
            return j;
          },
          bouncePast: function () {
            return x;
          },
          ease: function () {
            return u;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return v;
          },
          inCirc: function () {
            return P;
          },
          inCubic: function () {
            return p;
          },
          inElastic: function () {
            return V;
          },
          inExpo: function () {
            return S;
          },
          inOutBack: function () {
            return w;
          },
          inOutCirc: function () {
            return L;
          },
          inOutCubic: function () {
            return g;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return F;
          },
          inOutQuad: function () {
            return E;
          },
          inOutQuart: function () {
            return y;
          },
          inOutQuint: function () {
            return A;
          },
          inOutSine: function () {
            return N;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return _;
          },
          inQuint: function () {
            return O;
          },
          inSine: function () {
            return R;
          },
          outBack: function () {
            return D;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return b;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return G;
          },
          outExpo: function () {
            return h;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return T;
          },
          outQuint: function () {
            return m;
          },
          outSine: function () {
            return C;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return B;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let o = (r = n(1361)) && r.__esModule ? r : { default: r },
        u = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        c = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function E(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function p(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function _(e) {
        return Math.pow(e, 4);
      }
      function T(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function O(e) {
        return Math.pow(e, 5);
      }
      function m(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function A(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function R(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function C(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function N(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function S(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function h(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function F(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function P(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function b(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function L(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function v(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function D(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function w(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          r = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            r < 1
              ? ((r = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            -(
              r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          r = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            r < 1
              ? ((r = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            r * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          r = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            r < 1
              ? ((r = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            e < 1)
          ? -0.5 *
            (r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : r *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function B(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function x(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return E;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = n(2662),
        o = n(3690);
      function u(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!a.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let r = n[e];
          if (!r) throw Error(`IX2 invalid plugin method: ${e}`);
          return r;
        },
        c = l("getPluginConfig"),
        s = l("getPluginOrigin"),
        d = l("getPluginDuration"),
        f = l("getPluginDestination"),
        E = l("createPluginInstance"),
        p = l("renderPlugin"),
        I = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return ej;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return ez;
        },
        getAffectedElements: function () {
          return eO;
        },
        getComputedStyle: function () {
          return em;
        },
        getDestinationValues: function () {
          return eP;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return eE;
        },
        getInstanceOrigin: function () {
          return eN;
        },
        getItemConfigByKey: function () {
          return eF;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eb;
        },
        getStyleProp: function () {
          return eL;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eM;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eq;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = I(n(4075)),
        o = I(n(1455)),
        u = I(n(5720)),
        l = n(1185),
        c = n(7087),
        s = I(n(7164)),
        d = n(3767),
        f = n(380),
        E = n(1799),
        p = n(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: _,
          TRANSLATE_3D: T,
          SCALE_3D: y,
          ROTATE_X: O,
          ROTATE_Y: m,
          ROTATE_Z: A,
          SKEW: R,
          PRESERVE_3D: C,
          FLEX: N,
          OPACITY: S,
          FILTER: h,
          FONT_VARIATION_SETTINGS: F,
          WIDTH: P,
          HEIGHT: b,
          BACKGROUND_COLOR: L,
          BORDER_COLOR: M,
          COLOR: v,
          CHILDREN: D,
          IMMEDIATE_CHILDREN: w,
          SIBLINGS: V,
          PARENT: G,
          DISPLAY: U,
          WILL_CHANGE: B,
          AUTO: k,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: j,
          BAR_DELIMITER: x,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: H,
          RENDER_STYLE: Q,
          RENDER_PLUGIN: Y,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: z,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: q,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: er,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: ea,
          OBJECT_VALUE: eo,
        } = c.ActionTypeConsts,
        eu = (e) => e.trim(),
        el = Object.freeze({ [en]: L, [er]: M, [ei]: v }),
        ec = Object.freeze({
          [p.TRANSFORM_PREFIXED]: _,
          [L]: g,
          [S]: S,
          [h]: h,
          [P]: P,
          [b]: b,
          [F]: F,
        }),
        es = new Map();
      function ed() {
        es.clear();
      }
      let ef = 1;
      function eE() {
        return "i" + ef++;
      }
      let ep = 1;
      function eI(e, t) {
        for (let n in e) {
          let r = e[n];
          if (r && r.ref === t) return r.id;
        }
        return "e" + ep++;
      }
      function eg({ events: e, actionLists: t, site: n } = {}) {
        let r = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          a = [];
        return (
          i
            ? (a = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: r,
              mediaQueries: i,
              mediaQueryKeys: a,
            },
          }
        );
      }
      let e_ = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: n, comparator: r = e_ }) {
        let { getState: i, subscribe: a } = e,
          o = a(function () {
            let a = t(i());
            if (null == a) return void o();
            r(a, u) || n((u = a), e);
          }),
          u = t(i());
        return o;
      }
      function ey(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: r,
            selectorGuids: i,
            appliesTo: a,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: r,
            selectorGuids: i,
            appliesTo: a,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eO({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: r,
        elementApi: i,
      }) {
        let a, o, u;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, a) =>
              e.concat(
                eO({
                  config: { target: a },
                  event: t,
                  eventTarget: n,
                  elementRoot: r,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: E,
            getSiblingElements: I,
            matchSelector: g,
            elementContains: _,
            isSiblingNode: T,
          } = i,
          { target: y } = e;
        if (!y) return [];
        let {
          id: O,
          objectId: m,
          selector: A,
          selectorGuids: R,
          appliesTo: C,
          useEventTarget: N,
        } = ey(y);
        if (m) return [es.has(m) ? es.get(m) : es.set(m, {}).get(m)];
        if (C === c.EventAppliesTo.PAGE) {
          let e = s(O);
          return e ? [e] : [];
        }
        let S = (t?.action?.config?.affectedElements ?? {})[O || A] || {},
          h = !!(S.id || S.selector),
          F = t && d(ey(t.target));
        if (
          (h
            ? ((a = S.limitAffectedElements), (o = F), (u = d(S)))
            : (o = u = d({ id: O, selector: A, selectorGuids: R })),
          t && N)
        ) {
          let e = n && (u || !0 === N) ? [n] : f(F);
          if (u) {
            if (N === G) return f(u).filter((t) => e.some((e) => _(t, e)));
            if (N === D) return f(u).filter((t) => e.some((e) => _(e, t)));
            if (N === V) return f(u).filter((t) => e.some((e) => T(e, t)));
          }
          return e;
        }
        return null == o || null == u
          ? []
          : p.IS_BROWSER_ENV && r
          ? f(u).filter((e) => r.contains(e))
          : a === D
          ? f(o, u)
          : a === w
          ? E(f(o)).filter(g(u))
          : a === V
          ? I(f(o)).filter(g(u))
          : f(u);
      }
      function em({ element: e, actionItem: t }) {
        if (!p.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case er:
          case ei:
          case ea:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eA = /px/,
        eR = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eD[t.type]), e),
            e || {}
          ),
        eC = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ew[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eN(e, t = {}, n = {}, r, i) {
        let { getStyle: o } = i,
          { actionTypeId: u } = r;
        if ((0, E.isPluginType)(u)) return (0, E.getPluginOrigin)(u)(t[u], r);
        switch (r.actionTypeId) {
          case $:
          case z:
          case K:
          case q:
            return t[r.actionTypeId] || ev[r.actionTypeId];
          case J:
            return eR(t[r.actionTypeId], r.config.filters);
          case ee:
            return eC(t[r.actionTypeId], r.config.fontVariations);
          case Z:
            return { value: (0, a.default)(parseFloat(o(e, S)), 1) };
          case et: {
            let t,
              i = o(e, P),
              u = o(e, b);
            return {
              widthValue:
                r.config.widthUnit === k
                  ? eA.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, a.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                r.config.heightUnit === k
                  ? eA.test(u)
                    ? parseFloat(u)
                    : parseFloat(n.height)
                  : (0, a.default)(parseFloat(u), parseFloat(n.height)),
            };
          }
          case en:
          case er:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: r,
            }) {
              let i = el[t],
                o = r(e, i),
                u = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eB, eU.test(o) ? o : n[i]).split(X);
              return {
                rValue: (0, a.default)(parseInt(u[0], 10), 255),
                gValue: (0, a.default)(parseInt(u[1], 10), 255),
                bValue: (0, a.default)(parseInt(u[2], 10), 255),
                aValue: (0, a.default)(parseFloat(u[3]), 1),
              };
            })({
              element: e,
              actionTypeId: r.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case ea:
            return { value: (0, a.default)(o(e, U), n.display) };
          case eo:
            return t[r.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eF = (e, t, n) => {
          if ((0, E.isPluginType)(e)) return (0, E.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, u.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, u.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eP({ element: e, actionItem: t, elementApi: n }) {
        if ((0, E.isPluginType)(t.actionTypeId))
          return (0, E.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case z:
          case K:
          case q: {
            let { xValue: e, yValue: n, zValue: r } = t.config;
            return { xValue: e, yValue: n, zValue: r };
          }
          case et: {
            let { getStyle: r, setStyle: i, getProperty: a } = n,
              { widthUnit: o, heightUnit: u } = t.config,
              { widthValue: l, heightValue: c } = t.config;
            if (!p.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
            if (o === k) {
              let t = r(e, P);
              i(e, P, ""), (l = a(e, "offsetWidth")), i(e, P, t);
            }
            if (u === k) {
              let t = r(e, b);
              i(e, b, ""), (c = a(e, "offsetHeight")), i(e, b, t);
            }
            return { widthValue: l, heightValue: c };
          }
          case en:
          case er:
          case ei: {
            let {
              rValue: r,
              gValue: i,
              bValue: a,
              aValue: o,
              globalSwatchId: u,
            } = t.config;
            if (u && u.startsWith("--")) {
              let { getStyle: t } = n,
                r = t(e, u),
                i = (0, f.normalizeColor)(r);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: r, gValue: i, bValue: a, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eS, {});
          case ee:
            return t.config.fontVariations.reduce(eh, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eb(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? Q
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function eL(e, t) {
        return e === Q ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eM(e, t, n, r, i, a, u, l, c) {
        switch (l) {
          case W:
            var s = e,
              d = t,
              f = n,
              I = i,
              g = u;
            let _ = eG
                .map((e) => {
                  let t = ev[e],
                    {
                      xValue: n = t.xValue,
                      yValue: r = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: a = "",
                      yUnit: o = "",
                      zUnit: u = "",
                    } = d[e] || {};
                  switch (e) {
                    case $:
                      return `${T}(${n}${a}, ${r}${o}, ${i}${u})`;
                    case z:
                      return `${y}(${n}${a}, ${r}${o}, ${i}${u})`;
                    case K:
                      return `${O}(${n}${a}) ${m}(${r}${o}) ${A}(${i}${u})`;
                    case q:
                      return `${R}(${n}${a}, ${r}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: S } = g;
            ek(s, p.TRANSFORM_PREFIXED, g),
              S(s, p.TRANSFORM_PREFIXED, _),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: r }
              ) {
                return (
                  (e === $ && void 0 !== r) ||
                  (e === z && void 0 !== r) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(I, f) && S(s, p.TRANSFORM_STYLE_PREFIXED, C);
            return;
          case Q:
            return (function (e, t, n, r, i, a) {
              let { setStyle: u } = a;
              switch (r.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = r.config,
                    { widthValue: o, heightValue: l } = n;
                  void 0 !== o &&
                    (t === k && (t = "px"), ek(e, P, a), u(e, P, o + t)),
                    void 0 !== l &&
                      (i === k && (i = "px"), ek(e, b, a), u(e, b, l + i));
                  break;
                }
                case J:
                  var l = r.config;
                  let c = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eV(n, l)})`,
                      ""
                    ),
                    { setStyle: s } = a;
                  ek(e, h, a), s(e, h, c);
                  break;
                case ee:
                  r.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = a;
                  ek(e, F, a), f(e, F, d);
                  break;
                case en:
                case er:
                case ei: {
                  let t = el[r.actionTypeId],
                    i = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    c = n.aValue;
                  ek(e, t, a),
                    u(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${i},${o},${l})`
                        : `rgba(${i},${o},${l},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = r.config;
                  ek(e, i, a), u(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, a, u);
          case H:
            var L = e,
              M = i,
              v = u;
            let { setStyle: D } = v;
            if (M.actionTypeId === ea) {
              let { value: e } = M.config;
              D(L, U, e === N && p.IS_BROWSER_ENV ? p.FLEX_PREFIXED : e);
            }
            return;
          case Y: {
            let { actionTypeId: e } = i;
            if ((0, E.isPluginType)(e)) return (0, E.renderPlugin)(e)(c, t, i);
          }
        }
      }
      let ev = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [z]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ew = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eV = (e, t) => {
          let n = (0, u.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eG = Object.keys(ev),
        eU = /^rgb/,
        eB = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!p.IS_BROWSER_ENV) return;
        let r = ec[t];
        if (!r) return;
        let { getStyle: i, setStyle: a } = n,
          o = i(e, B);
        if (!o) return void a(e, B, r);
        let u = o.split(X).map(eu);
        -1 === u.indexOf(r) && a(e, B, u.concat(r).join(X));
      }
      function eX(e, t, n) {
        if (!p.IS_BROWSER_ENV) return;
        let r = ec[t];
        if (!r) return;
        let { getStyle: i, setStyle: a } = n,
          o = i(e, B);
        o &&
          -1 !== o.indexOf(r) &&
          a(
            e,
            B,
            o
              .split(X)
              .map(eu)
              .filter((e) => e !== r)
              .join(X)
          );
      }
      function ej({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: r = {}, actionLists: i = {} } = n;
        Object.keys(r).forEach((e) => {
          let n = r[e],
            { config: a } = n.action,
            { actionListId: o } = a,
            u = i[o];
          u && ex({ actionList: u, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            ex({ actionList: i[e], elementApi: t });
          });
      }
      function ex({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: r, continuousParameterGroups: i } = e;
        r &&
          r.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: r } = e;
              r.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: r } = e;
        r.forEach((e) => {
          let r,
            { actionTypeId: i, config: a } = e;
          (r = (0, E.isPluginType)(i)
            ? (t) => (0, E.clearPlugin)(i)(t, e)
            : eQ({ effect: eY, actionTypeId: i, elementApi: n })),
            eO({ config: a, event: t, elementApi: n }).forEach(r);
        });
      }
      function eH(e, t, n) {
        let { setStyle: r, getStyle: i } = n,
          { actionTypeId: a } = t;
        if (a === et) {
          let { config: n } = t;
          n.widthUnit === k && r(e, P, ""), n.heightUnit === k && r(e, b, "");
        }
        i(e, B) && eQ({ effect: eX, actionTypeId: a, elementApi: n })(e);
      }
      let eQ =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case $:
            case z:
            case K:
            case q:
              e(r, p.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(r, h, n);
              break;
            case ee:
              e(r, F, n);
              break;
            case Z:
              e(r, S, n);
              break;
            case et:
              e(r, P, n), e(r, b, n);
              break;
            case en:
            case er:
            case ei:
              e(r, el[t], n);
              break;
            case ea:
              e(r, U, n);
          }
        };
      function eY(e, t, n) {
        let { setStyle: r } = n;
        eX(e, t, n),
          r(e, t, ""),
          t === p.TRANSFORM_PREFIXED && r(e, p.TRANSFORM_STYLE_PREFIXED, "");
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, r) => {
            let { config: i } = e,
              a = i.delay + i.duration;
            a >= t && ((t = a), (n = r));
          }),
          n
        );
      }
      function ez(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
          { actionItem: i, verboseTimeElapsed: a = 0 } = t,
          o = 0,
          u = 0;
        return (
          n.forEach((e, t) => {
            if (r && 0 === t) return;
            let { actionItems: n } = e,
              l = n[e$(n)],
              { config: c, actionTypeId: s } = l;
            i.id === l.id && (u = o + a);
            let d = eb(s) === H ? 0 : c.duration;
            o += c.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(u / o) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: r, continuousParameterGroups: i } = e,
          a = [],
          o = (e) => (
            a.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          r && r.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: a }] },
          })
        );
      }
      function eq(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + j + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + x + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
        return t + x + n + x + r;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (let i = 0; i < r.length; i++)
          if (!Object.hasOwn(t, r[i]) || !n(e[r[i]], t[r[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        createElementState: function () {
          return R;
        },
        ixElements: function () {
          return A;
        },
        mergeActionState: function () {
          return C;
        },
      };
      for (var i in r)
        Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
      let a = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: u,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: E,
          CONFIG_X_UNIT: p,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: _,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: y,
          IX2_ELEMENT_STATE_CHANGED: O,
        } = o.IX2EngineActionTypes,
        m = {},
        A = (e = m, t = {}) => {
          switch (t.type) {
            case T:
              return m;
            case y: {
              let {
                  elementId: n,
                  element: r,
                  origin: i,
                  actionItem: o,
                  refType: u,
                } = t.payload,
                { actionTypeId: l } = o,
                c = e;
              return (
                (0, a.getIn)(c, [n, r]) !== r && (c = R(c, r, u, n, o)),
                C(c, n, l, i, o)
              );
            }
            case O: {
              let {
                elementId: n,
                actionTypeId: r,
                current: i,
                actionItem: a,
              } = t.payload;
              return C(e, n, r, i, a);
            }
            default:
              return e;
          }
        };
      function R(e, t, n, r, i) {
        let o =
          n === l ? (0, a.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, a.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
      }
      function C(e, t, n, r, i) {
        let o = (function (e) {
          let { config: t } = e;
          return N.reduce((e, n) => {
            let r = n[0],
              i = n[1],
              a = t[r],
              o = t[i];
            return null != a && null != o && (e[i] = o), e;
          }, {});
        })(i);
        return (0, a.mergeIn)(e, [t, "refState", n], r, o);
      }
      let N = [
        [s, p],
        [d, I],
        [f, g],
        [E, _],
      ];
    },
    9606: function () {
      Webflow.require("ix2").init({
        events: {
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd417",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd417",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885a4cf64,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd418",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd418",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19885a4cf64,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd419",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd419",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885a4cf64,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd41a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd41a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885a4cf64,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd41b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|00af1eee-dd93-9de7-3e7d-600dddffd41b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885a4cf64,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885f4154f,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885f4154f,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "POP_EFFECT",
              instant: !1,
              config: { actionListId: "pop", autoStopEventId: "e-46" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|9ebd70c6-515d-aee6-f86d-46b8ab34a135",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|9ebd70c6-515d-aee6-f86d-46b8ab34a135",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885febf2b,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "POP_EFFECT",
              instant: !1,
              config: { actionListId: "pop", autoStopEventId: "e-45" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6889d5e7471866da5922c6ce|9ebd70c6-515d-aee6-f86d-46b8ab34a135",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6889d5e7471866da5922c6ce|9ebd70c6-515d-aee6-f86d-46b8ab34a135",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19885febf2b,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68997e48bfd9f1032972381e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68997e48bfd9f1032972381e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1989982cd4b,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68997e48bfd9f1032972381e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68997e48bfd9f1032972381e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1989982cd4c,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "translate",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|8ca82398-8f75-789a-7c33-c10c95bd490c",
                      },
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|8ca82398-8f75-789a-7c33-c10c95bd490c",
                      },
                      yValue: 26,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|8ca82398-8f75-789a-7c33-c10c95bd490c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198851d936a,
          },
          "a-2": {
            id: "a-2",
            title: "Grow custom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|f842514d-3c2d-7656-8da2-aee2ca7b3302",
                      },
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|f842514d-3c2d-7656-8da2-aee2ca7b3302",
                      },
                      xValue: 1.5,
                      yValue: 1.5,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|f842514d-3c2d-7656-8da2-aee2ca7b3302",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1988520fa81,
          },
          "a-3": {
            id: "a-3",
            title: "traslate 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|1e17725e-2a36-b5c4-33cf-b3c4643dd6a6",
                      },
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|1e17725e-2a36-b5c4-33cf-b3c4643dd6a6",
                      },
                      xValue: 20,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "px",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|1e17725e-2a36-b5c4-33cf-b3c4643dd6a6",
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198855fec10,
          },
          "a-4": {
            id: "a-4",
            title: "grow2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|723e0fd2-a888-ec84-512f-0e5c6fd027a5",
                      },
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|723e0fd2-a888-ec84-512f-0e5c6fd027a5",
                      },
                      xValue: 0.7,
                      yValue: 0.7,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|723e0fd2-a888-ec84-512f-0e5c6fd027a5",
                      },
                      xValue: 1,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19885629e12,
          },
          "a-5": {
            id: "a-5",
            title: "translate 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|efeb8b0e-7d44-4da2-04c7-68f0479248cf",
                      },
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|efeb8b0e-7d44-4da2-04c7-68f0479248cf",
                      },
                      yValue: -15,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 4e3,
                      target: {
                        useEventTarget: !0,
                        id: "6889d5e7471866da5922c6ce|efeb8b0e-7d44-4da2-04c7-68f0479248cf",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1988564fe77,
          },
          "a-6": {
            id: "a-6",
            title: "Navbar scroll in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: { id: "b127da39-369a-7703-5b2b-fe3f0c48fadf" },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19885f34bea,
          },
          "a-7": {
            id: "a-7",
            title: "navbar scroll down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inQuad",
                      duration: 400,
                      target: { id: "b127da39-369a-7703-5b2b-fe3f0c48fadf" },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19885f545f1,
          },
          pop: {
            id: "pop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
