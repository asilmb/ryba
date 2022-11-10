<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuNavigation from "./components/MenuNavigation.vue";
</script>

<template>
  <header>
    <RouterLink to="/" class="logo-link">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.jpg"
        width="125"
        height="125"
    />
    </RouterLink>

    <div class="wrapper">
      <MenuNavigation  msg="You did it!" />
      <nav class="navbar navbar-expand-lg navbar-light ">
        <RouterLink to="/takeaway" class="nav-item ">Прайс самовывоз</RouterLink>
        <RouterLink to="/delivery" class="nav-item ">Прайс доставка</RouterLink>
        <a class="nav-item ">Telegram</a>
        <a class="nav-item ">87757804880</a>
        <RouterLink to="/contact" class="nav-item ">Контакты</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  place-items: center;
  max-height: 100vh;
  margin-top: 16px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  flex-wrap: wrap;
}

nav a.router-link-exact-active {
  color: var(--base-blue);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem 1rem;
  border: 1px solid var(--base-orange);
  border-radius: 10px;
  width: 100%;
  align-self: stretch;
  text-align: center;
  margin-bottom: 12px;
  font-style: oblique;
  font-weight: 600;
}
nav a:hover,nav a:active  {
  background: var(--base-blue);
  color: var(--vt-c-white);
  border: 1px solid transparent;
}

.logo-link, .logo-link:hover,.logo-link:active  {
  background: none;
  border: none;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    width: 60%;
    margin: 0 auto;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    justify-content: space-between;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  nav a {
    width: 20%;
    padding-bottom: 1rem;
    flex-basis: 29.333333%;
  }
}
</style>
