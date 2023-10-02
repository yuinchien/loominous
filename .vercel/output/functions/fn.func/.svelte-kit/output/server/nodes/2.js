

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.65e52523.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js","_app/immutable/chunks/environment.9e0b1bba.js"];
export const stylesheets = [];
export const fonts = [];
