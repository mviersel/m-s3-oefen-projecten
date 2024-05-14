<template>
  <div>

    <input v-model="titel" placeholder="Titel" />
    <input v-model="beschrijving" placeholder="Beschrijving" />
    <input v-model="icon" placeholder="Icon" />
    <input v-model="status" placeholder="Status" />
    <button @click="createItem">Create item</button>

  </div>
</template>

<script setup>
import { ref } from "vue";

const titel = ref("");
const beschrijving = ("");
const icon = ("");
const status = ("");

const createItem = async () => {
  await fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ titel: titel.vlue, beschrijving.value, icon.value, status.value})
  });
};

</script>

<style lang="css" scoped></style>
