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
		client: {"start":"_app/immutable/entry/start.c052d761.js","app":"_app/immutable/entry/app.e53ac868.js","imports":["_app/immutable/entry/start.c052d761.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/singletons.989c9f7f.js","_app/immutable/entry/app.e53ac868.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d62097a6.js","_app/immutable/chunks/index.186cdfe7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
