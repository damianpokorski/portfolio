// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// jQuery
var $ = require('jquery');
window.jQuery = $;
window.$ = $;

// Vue
import Vue from 'vue'
import router from './router'

// CSS Styles
import './css/achievement.css'
import './css/contact.css'
import './css/project.css'
import './css/simplelightbox.min.css'
import './css/skill.css'
import './css/style.css'
import './css/youtube.css'


import '@/scripts/simple-lightbox.min.js'
// My commponents

Vue.config.productionTip = false;
// Creating router

const app = new Vue({
    router,
    template: '<transition name="slide" mode="out-in"><router-view></router-view></transition>'
}).$mount("#router");