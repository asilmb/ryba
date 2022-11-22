<script setup lang="ts">
</script>

<template>
  <div class='logo-block'>
    <div class="logo-decoration logo-decoration_left"/>
    <RouterLink to="/" class="logo-link"></RouterLink>
    <div class="logo-decoration logo-decoration_right"/>
  </div>
  <div class='menu-navigator'>
    <nav class="menu-navigator-navbar navbar navbar-expand-lg navbar-light ">
      <RouterLink to="/takeaway" class="nav-item ">Прайс самовывоз</RouterLink>
      <RouterLink to="/delivery" class="nav-item ">Прайс доставка</RouterLink>
      <a class="nav-item " href="https://telegram.me/tarmanau">Telegram</a>
      <a class="nav-item " href="https://wa.me/2217777777">watsap</a>
      <RouterLink to="/contact" class="nav-item ">Контакты</RouterLink>
    </nav>
  </div>
</template>
