<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'Details',  params:{id:job.id}}">
    <h3>{{job.title}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
   data(){
       return{
           jobs:[
               {title:'Web Developer', id:1, desc:'lorem'},
               {title:'Web Designer', id:2, desc:'lorem'},
               {title:'Manager', id:3, desc:'lorem'}
           ]
       }
   
}
}
</script>

<style scoped>
 h3{
    margin: auto;
    margin:1rem auto;
    padding: 1rem;
    border-radius: 1rem;
    background: #dfdfdf;
    width: 20%;
    color: #2c3e50;
    font-weight: bold;
    font-size: 1.4rem;
}
a{
    color: #2c3e50;
    text-decoration:none;
}
</style>