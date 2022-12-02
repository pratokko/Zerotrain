<template>
    <div class="bg-gray-200">
      <CheckoutPage />
      <router-view />
    </div>
  </template>
  
  <script>
  import CheckoutPage from "../pages/CheckoutPage.vue";
  export default {
    name: "Checkout",
    components: {
      CheckoutPage
    }
  };
  </script>
