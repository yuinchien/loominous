export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "loominous/_app",
	assets: new Set([".DS_Store"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.8ce6091f.js","app":"_app/immutable/entry/app.5995eeed.js","imports":["_app/immutable/entry/start.8ce6091f.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/singletons.2d1dc653.js","_app/immutable/chunks/environment.9e0b1bba.js","_app/immutable/entry/app.5995eeed.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js"],"stylesheets":[],"fonts":[]},
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
