<template>
    <div>
        <h1>
            {{ $route.params.slug }}
        </h1>
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