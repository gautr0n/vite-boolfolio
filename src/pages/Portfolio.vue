<template>
    <div>
        <div v-for="project in projects" :key="project.id">
            <a href="{{ project.website_link }}">{{ project.title }}</a>
            <p class="mb-3" >{{ project.description }}</p>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
    export default{
        data() {
            return {
                projects: []
            }
        },
        methods: {
            fetchProjects() {
                axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res)
                    const { results } = res.data
                    this.projects = results
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.fetchProjects()
        },
    }
  
  </script>
  
  <style>
  .mb-3{
    margin-bottom: 100px;
  }
  </style>