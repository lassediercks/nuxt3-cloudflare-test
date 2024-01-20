// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  nitro: {
    preset: "cloudflare-pages",
  },
  devServer: {
    port: parseInt(process.env.PORT || "") || 5000, // default: 8000
    host: "0.0.0.0", // default: localhost
  },
  devtools: { enabled: true },
  routeRules: {
    "/prerendered": { prerender: true },
    "/swr": { swr: 10 },
    "/swrtrue": { swr: true },
    "/isr": { isr: 10 },
    "/isrtrue": { isr: true },
    "/ssr": { ssr: true },
    "/nossr": { ssr: false },
  },
});
