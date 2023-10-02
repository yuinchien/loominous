# SvelteKit & Github Pages Setup

> [SvelteKit](https://kit.svelte.dev/) set-up deployable to [GitHub Pages](https://metonym.github.io/sveltekit-gh-pages/).

## Create a Sveltekit project
```sh
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```


## Install adapter-static & gh-pages

```sh
npm i -D @sveltejs/adapter-static gh-pages
```

**package.json**

```diff
  "devDependencies": {
+   "@sveltejs/adapter-static": "^2.0.3",
    "@sveltejs/kit": "^1.22.6",
    "gh-pages": "^5.0.0",
    "svelte": "^4.2.0",
    "vite": "^4.4.9"
  }
```

## Modify `paths.base` in the config

`kit.paths.base` should be your repo URL subpath (see the [Vite docs](https://vitejs.dev/guide/static-deploy.html#github-pages)). In the example below, replace `/repository-name` with your repository name.

**svelte.config.js**

```diff
+import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
+   paths: {
+     base: process.env.NODE_ENV === "production" ? "/repository-name" : "",
+   },
  },
};

export default config;

```


**src/routes/+layout.js**

```js
export const prerender = true;
```

**Note:** You will also need to prepend relative paths with the [SvelteKit `base` path](https://kit.svelte.dev/docs/modules#$app-paths) so that your app can build successfully for production.


```svelte
<script>
  import { base } from "$app/paths";
</script>

<a href="{base}/about">About</a>
```

## Access assets in static folder in CSS

**vite.config.js**

```diff
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
+  resolve: {
+    alias: {
+      $static: mode === "production" ? "./static/" : "../..",
+    },
+  },
}));
```

**src/routes/styles.css**

```css
:root {
  --icon-close: url($static/images/icon_close.svg);
}
```

## Add a `.nojekyll` file to the `/static` folder

The last step is to add an empty `.nojekyll` file to the static folder to [bypass Jekyll on GitHub Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/). SvelteKit will copy `static` assets to the final build folder.

## Add the `deploy` script
**package.json**

```diff
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
+    "deploy": "gh-pages -d build -t true"
  }
}
```

The deploy script instructs `gh-pages` to do the following:

- `-d build`: Publish the `build` folder
- `-t true`: Include dotfiles (e.g., `.nojekyll`)
