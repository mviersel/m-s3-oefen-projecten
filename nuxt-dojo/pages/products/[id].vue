<template>
  <div>
    <h1>Product details for {{ id }}</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
      neque voluptates deserunt ad consequuntur adipisci placeat odit molestiae
      veritatis. Facere?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
