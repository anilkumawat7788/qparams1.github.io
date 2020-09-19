import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import courses from "@/components/pages/courses.vue"
import placement from "@/components/pages/placement.vue"
import news from "@/components/pages/news.vue"
import contact from "@/components/pages/contact.vue"
import details from "@/components/pages/details.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"/courses",
            name:'courses',
            component:courses
        },
        {
            path:"/placement",
            name:'placement',
            component:placement
        },
        {
            path:"/news",
            name:'news',
            component:news
        },
        {
            path:"/contact",
            name:'contact',
            component:contact
        },
        {
            path:"/details",
            name:'details',
            component:details
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        }
    ]
})