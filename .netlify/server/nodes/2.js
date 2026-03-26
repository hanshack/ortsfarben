import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.2032f870.js","_app/immutable/chunks/index.10d72061.js","_app/immutable/chunks/index.91ade801.js"];
export const stylesheets = ["_app/immutable/assets/2.c1987acd.css"];
export const fonts = [];
