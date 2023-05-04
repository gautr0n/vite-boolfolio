import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import AboutUs from './pages/AboutUs.vue'
import ProjectsShow from './pages/Projects.show.vue'

const history = createWebHashHistory()
console.log('history', history)

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,            
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,            
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs,            
        },
        {
            path: '/blog/:slug',
            name: 'projects.show',
            component: ProjectsShow,
        }
    ]
})

export { router }