<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuNavigation from "./components/MenuNavigation.vue";
import Divider from "./components/Divider.vue";
import Contacts from "./components/Contacts.vue";

</script>

<template>
  <div class="container">
    <header class="header">

    <MenuNavigation/>
    </header>
    <RouterView />
    <Divider ttle="Контакты"></Divider>
    <footer id="footer">
      <Contacts/>
    </footer>

  </div>
</template>

<style scoped>

</style>
