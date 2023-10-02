import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/loominous" : "",
    },
    version: {
      name: new Date().toLocaleDateString()
    }
  }
};

export default config;
