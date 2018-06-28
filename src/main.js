import Vue from 'vue'
import router from './router'

import '@/scripts/simple-lightbox.min.js'
// My commponents

Vue.config.productionTip = false

// Registering components

// Creating router

const app = new Vue({
        router,
        template: '<transition name="slide" mode="out-in"><router-view></router-view></transition>'
    }).$mount("#router")
    // 
    // // # Libraries
    // 
    // // Animate.css
    // // import "./animate/index"
    // 
    // // Tether js - fixes bootstrap tooltips
    // require("tether")
    // 
    // 
    // // Font Awesome 
    // //import("css!@/lib/font-awesome")
    // 
    // // # My Style files
import './css/achievement.css'
import './css/contact.css'
import './css/project.css'
import './css/simplelightbox.min.css'
import './css/skill.css'
import './css/style.css'
import './css/youtube.css'

//require('./scripts/sketch.js')
//require('./scripts/vue.js')