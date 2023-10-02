

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2afffe7c.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js","_app/immutable/chunks/singletons.2d1dc653.js","_app/immutable/chunks/environment.9e0b1bba.js"];
export const stylesheets = [];
export const fonts = [];
