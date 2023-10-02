import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, h as each, e as escape, i as add_classes, v as validate_component } from "../../chunks/ssr.js";
import { v as version } from "../../chunks/environment.js";
const Squares = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pattern = [] } = $$props;
  let { classname = "" } = $$props;
  let { sectionId = "" } = $$props;
  let { interactive = false } = $$props;
  let { index = -1 } = $$props;
  const convertColorIndex = ["a", "b", "c", "d"];
  createEventDispatcher();
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.classname === void 0 && $$bindings.classname && classname !== void 0)
    $$bindings.classname(classname);
  if ($$props.sectionId === void 0 && $$bindings.sectionId && sectionId !== void 0)
    $$bindings.sectionId(sectionId);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `<squares${add_attribute("class", classname, 0)}${add_attribute("index", index, 0)}>${interactive ? `${each(pattern, (item, i) => {
    return `<div class="${"box " + escape(convertColorIndex[item], true)}"></div>`;
  })}` : `${each(pattern, (item) => {
    return `<div class="${"box " + escape(convertColorIndex[item], true)}"></div>`;
  })}`}</squares>`;
});
const Circles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pattern = [] } = $$props;
  let { classname = "" } = $$props;
  let { sectionId = "" } = $$props;
  let { parentIndex = -1 } = $$props;
  createEventDispatcher();
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.classname === void 0 && $$bindings.classname && classname !== void 0)
    $$bindings.classname(classname);
  if ($$props.sectionId === void 0 && $$bindings.sectionId && sectionId !== void 0)
    $$bindings.sectionId(sectionId);
  if ($$props.parentIndex === void 0 && $$bindings.parentIndex && parentIndex !== void 0)
    $$bindings.parentIndex(parentIndex);
  return `<circles${add_attribute("class", classname, 0)}>${each(pattern, (item, i) => {
    return `<div class="${["box", item === 1 ? "x" : ""].join(" ").trim()}"></div>`;
  })}</circles>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawdown = [];
  let PARAMS = {
    v: 0.1,
    pattern: 0,
    colorA: "#f0e130",
    colorB: "#303ff0",
    colorC: "#FF007F",
    colorD: "#444",
    shafts: 2,
    wefts: 24,
    warps: 24,
    tieups: 4,
    threading: [],
    treadling: [],
    tieup: [],
    colorWefts: [],
    colorWarps: [],
    checklist: [],
    size: 20
  };
  return `<div id="lastUpdate"${add_classes("".trim())}>Updated ${escape(version)}</div> <div id="canvas"><div class="row"><div id="colorWarps" class="container borderless">${validate_component(Squares, "Squares").$$render(
    $$result,
    {
      pattern: PARAMS.colorWarps,
      classname: "row reverse",
      sectionId: "colorWarps",
      interactive: true
    },
    {},
    {}
  )}</div></div> <div class="row sticky"><div id="threading" class="container dots">${each(PARAMS.threading, (list, i) => {
    return `${validate_component(Circles, "Circles").$$render(
      $$result,
      {
        pattern: list,
        classname: "row reverse",
        sectionId: "threading",
        parentIndex: i
      },
      {},
      {}
    )}`;
  })}</div> <div id="tieup" class="container dots">${each(PARAMS.tieup, (list, i) => {
    return `${validate_component(Circles, "Circles").$$render(
      $$result,
      {
        pattern: list,
        classname: "col reverse",
        sectionId: "tieup",
        parentIndex: i
      },
      {},
      {}
    )}`;
  })}</div></div> <div class="row"><div id="drawdown" class="container borderless">${each(drawdown, (list, i) => {
    return `${validate_component(Squares, "Squares").$$render(
      $$result,
      {
        pattern: list,
        classname: "row reverse",
        sectionId: "drawdown",
        interactive: false
      },
      {},
      {}
    )}`;
  })}</div> <div id="treadling" class="container dots">${each(PARAMS.treadling, (list, i) => {
    return `${validate_component(Circles, "Circles").$$render(
      $$result,
      {
        pattern: list,
        classname: "row",
        sectionId: "treadling",
        parentIndex: i
      },
      {},
      {}
    )}`;
  })}</div> <div id="colorWefts" class="container borderless">${validate_component(Squares, "Squares").$$render(
    $$result,
    {
      pattern: PARAMS.colorWefts,
      classname: "col",
      sectionId: "colorWefts",
      interactive: true
    },
    {},
    {}
  )}</div> <div id="checklist" class="container borderless">${validate_component(Circles, "Circles").$$render(
    $$result,
    {
      pattern: PARAMS.checklist,
      classname: "col",
      sectionId: "checklist"
    },
    {},
    {}
  )}</div></div></div>`;
});
export {
  Page as default
};
