import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { useState as l, useEffect as f } from "react";
const t = {
  visibility: !1,
  listener: void 0,
  subscribe(e) {
    this.listener = e;
  },
  toggle(e) {
    this.listener && (this.visibility = !this.visibility, this.listener(this.visibility, e || ""));
  }
}, b = () => {
  const [e, i] = l(!1), [r, n] = l();
  if (f(() => {
    t.subscribe((o, a) => {
      i(o), n(a || "");
    });
  }, []), !!e)
    return /* @__PURE__ */ s("div", { id: "loading-spinner", className: "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50", children: /* @__PURE__ */ c("div", { className: "w-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ s("div", { className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" }),
      (() => r ? /* @__PURE__ */ s("span", { children: r }) : null)()
    ] }) });
}, m = (e) => {
  const i = () => {
    t.toggle();
  };
  return t.toggle(e), { close: i };
};
export {
  b as Loader,
  m as loading
};
