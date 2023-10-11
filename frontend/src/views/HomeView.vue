<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>


    <div class="hello">
      https://material.balmjs.com/guide/quick-start <br>
      BalmUI TEST:
      <!-- Add a test button -->
      <ui-button icon="add" @click="$alert('Hello BalmUI')">Click Me</ui-button>
    </div>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <TheWelcome />
  </main>
</template>
