import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","img/.DS_Store","img/opengraph-800x600.png","landuse.pmtiles"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2e270db8.js","app":"_app/immutable/entry/app.50dd7c61.js","imports":["_app/immutable/entry/start.2e270db8.js","_app/immutable/chunks/index.10d72061.js","_app/immutable/chunks/singletons.0707bff0.js","_app/immutable/chunks/index.91ade801.js","_app/immutable/entry/app.50dd7c61.js","_app/immutable/chunks/index.10d72061.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
