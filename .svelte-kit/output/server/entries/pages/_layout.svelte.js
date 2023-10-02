import { c as create_ssr_component } from "../../chunks/ssr.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16l3j2e_START -->${$$result.title = `<title>Loominous</title>`, ""}<!-- HEAD_svelte-16l3j2e_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
