export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.c2946ddd.js","app":"_app/immutable/entry/app.bcd67a12.js","imports":["_app/immutable/entry/start.c2946ddd.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/singletons.060c3920.js","_app/immutable/chunks/environment.9e0b1bba.js","_app/immutable/entry/app.bcd67a12.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
