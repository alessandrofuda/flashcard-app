<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <!--input type="email" v-model="email" class="" required-->
        <t-input value="Hello world" name="my-input" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button
          class=""
          type="submit">
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        this.$router.push('/home');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
