<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuNavigation from "./components/MenuNavigation.vue";
import Divider from "./components/Divider.vue";
import Contacts from "./components/Contacts.vue";

</script>

<template>
  <div class="container">
    <header class="header">
      <RouterLink to="/" class="logo-link">
        <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.jpg"
            width="125"
            height="125"
        />
      </RouterLink>
      <MenuNavigation/>
    </header>
    <RouterView />
    <Divider/>
    <footer id="footer">
      <Contacts/>
    </footer>

  </div>
</template>

<style scoped>

</style>
