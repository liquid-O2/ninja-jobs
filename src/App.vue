<template>
  <Navbar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <button @click="Redirect">Redirect</button>
  <button @click="Back">Back</button>
  <button @click="Forward">Forward</button>
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    Redirect() {
      this.$router.push({ name: "Home" });
    },
    Back() {
      this.$router.go(-1);
    },
    Forward() {
      this.$router.go(1);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
}
button {
  padding: 1rem;
  margin: 0rem 1rem;
  border-radius: 1rem;
  border: none;
}
</style>
