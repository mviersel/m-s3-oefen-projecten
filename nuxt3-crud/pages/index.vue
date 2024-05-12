<template>
  <div class="">
    <form action="">
      <div>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" class="bg-blue-500 border-black ml-5" />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" class="bg-blue-500 border-black ml-5" />
      </div>
      <div>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" class="bg-blue-500 border-black ml-5" />
      </div>
    </form>
  </div>
</template>

<script setup>
const person = {
  firstName: "Bob",
  lastName: "McKing",
  age: "26",
  isEmployed: true,
};

console.log(person.firstName);
console.log(person.lastName);
</script>

<style lang="scss" scoped></style>
