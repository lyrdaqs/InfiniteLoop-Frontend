import Vue from 'vue'
import App from './App.vue'
import buyCourse from './buyCourse.vue'
import newPage from './newPage.vue'
import register from './register.vue'
import login from './login.vue'
import contact from './contact.vue'
import allCourse from './allCourse.vue'
import Blog from './Blog.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueScrollProgress from 'vue-scroll-progress'
import VueProgress from 'vue-progress-path'


Vue.use(VueResource)
Vue.use(VueScrollProgress)
Vue.use(VueProgress)
Vue.use(VueRouter)


new Vue({
    el: '#app',
    render: h => h(App)
})

new Vue({
    el: '#buyCourse',
    render: h => h(buyCourse)
})

new Vue({
    el: '#newPage',
    render: h => h(newPage)
})

new Vue({
    el: '#login',
    render: h => h(login)
})

new Vue({
    el: '#register',
    render: h => h(register)
})

new Vue({
    el: '#contact',
    render: h => h(contact)
})

new Vue({
    el: '#allCourse',
    render: h => h(allCourse)
})
new Vue({
    el: '#Blog',
    render: h => h(Blog)
})