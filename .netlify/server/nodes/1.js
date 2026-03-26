

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a3add30d.js","_app/immutable/chunks/index.10d72061.js","_app/immutable/chunks/singletons.0707bff0.js","_app/immutable/chunks/index.91ade801.js"];
export const stylesheets = [];
export const fonts = [];
