<template>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/swr">swr</nuxt-link>
    <nuxt-link to="/swrtrue">swrtrue</nuxt-link>
    <nuxt-link to="/defaultcomponent">defaultcomponent</nuxt-link>
    <nuxt-link to="/defaultserver">defaultserver</nuxt-link>
    <nuxt-link to="/isr">isr</nuxt-link>
    <nuxt-link to="/nossr">nossr</nuxt-link>
    <nuxt-link to="/prerendered">prerendered</nuxt-link>
    <nuxt-link to="/ssr">ssr</nuxt-link>
    <nuxt-link to="/somethingsomething">somewhere local</nuxt-link>
    <nuxt-link to="/gojsdapgjado">somewhere dynamic</nuxt-link>
    <nuxt-link to="/gojsdapsadgasdggjado">somewhere dynamic 2</nuxt-link>

    <br />

    <NuxtPage />

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup></script>
<style>
a {
  display: block;
}
</style>
