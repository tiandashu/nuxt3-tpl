<template>
  <div>
    {{ $route.params.id }}
    {{ $route.query.kk }}
    {{ id }}
    {{ kk }}
  </div>
</template>

<script setup lang="ts">
let route = useRoute();
let id = route.params.id;
let kk = route.query.kk;
</script>

<style lang="scss" scoped></style>
