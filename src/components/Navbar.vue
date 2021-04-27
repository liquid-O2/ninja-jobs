<template>
  <div class="nav">
      <router-link to="/">Home</router-link>
      <!-- preferred way -->
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name:'Jobs'}">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1.1rem;
  border-radius: 1rem;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: white;
  background:rgb(216, 111, 134);
}
</style>