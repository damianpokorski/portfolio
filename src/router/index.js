import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Pages
import Homepage from '@/vues/Homepage'
import Project from '@/vues/Project'
import About from '@/vues/About'

// Components
import Heading from '@/components/heading.vue'
import AchievementCard from '@/components/achievement_card.vue'
import AchievementList from '@/components/achievement_list.vue'
import ProjectCard from '@/components/project_card.vue'
import ProjectList from '@/components/project_list.vue'
Vue.component('my-heading', Heading);
Vue.component('project-card', ProjectCard);
Vue.component('project-list', ProjectList);
Vue.component('achievement-card', AchievementCard);
Vue.component('achievement-list', AchievementList);
// Routes
export default new Router({
    routes: [{
        path: '/',
        name: 'Homepage',
        component: Homepage
    }, {
        path: '/projects/:id',
        name: 'Project',
        component: Project
    }, {
        path: '/about',
        name: 'About',
        component: About
    }]
})