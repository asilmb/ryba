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
      <a class="nav-item ">Telegram</a>
      <a class="nav-item ">87757804880</a>
      <RouterLink to="/contact" class="nav-item ">Контакты</RouterLink>
    </nav>
  </div>
</template>
