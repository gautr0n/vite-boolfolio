<script>
//import Projects from './components/Projects.vue'
//import ProjectCard from './components/ProjectCard.vue'

export default{
  components: {
    //Projects,
    //ProjectCard
  }
}

</script>

<template>
  <div>
    <main>
     <router-view></router-view>      
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
