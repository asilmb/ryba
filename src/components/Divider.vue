<script setup lang="ts">
defineProps<{
  ttle: string;
}>();
</script>

<template>
  <div class="row divider">
    <div class="col-sm d-">
      <hr/>

    </div>
    <div class="col-sm">
      <h2>{{ ttle }}</h2>
    </div>
    <div class="col-sm">
      <hr/>
    </div>
  </div>
</template>
