<template>
  <div id="app">
    <main class="page-container">
      <router-link class="my-5" to="/home">Home</router-link>
      <router-link class="my-5" to="/login">Login</router-link>
      <router-link class="my-5" to="/register">Register</router-link>
      <!--router-link class="my-5" to="/logout">Logout</router-link-->

     <router-view></router-view>

    </main>
  </div>
</template>

<script>

</script>

<style lang="sass">
// @import 'src/assets/sass/main.sass'

.page-container
  margin-left: auto
  margin-right: auto
  max-width: 1120px
  padding-top: 1.5rem
  padding-left: 1rem
  padding-right: 1rem
  overflow: hidden
</style>
