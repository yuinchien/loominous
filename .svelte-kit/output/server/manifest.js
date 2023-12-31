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
		client: {"start":"_app/immutable/entry/start.c2946ddd.js","app":"_app/immutable/entry/app.07ce84b0.js","imports":["_app/immutable/entry/start.c2946ddd.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/singletons.060c3920.js","_app/immutable/chunks/environment.9e0b1bba.js","_app/immutable/entry/app.07ce84b0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
