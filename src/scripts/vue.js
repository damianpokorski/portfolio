import Vue from 'vue'
import $ from 'jquery';

$(document).ready(function() {

    // Load background projects
    $.getJSON("static/projects/projects.json", function(data) {
        projectList.projects = data;
        console.log(data);
    });
    $.getJSON("static/achievements/achievements.json", function(data) {
        projectList.achievements = data;
        console.log(data);
    });


    // Initialize vues
    var projectList = new Vue({
        el: '#mainContent',
        data: {
            views: {
                Home: 0,
                Project: 1,
                About: 2
            },
            view: 0,
            currentProject: "<h2>Loading!</h2>",
            projects: [],
            achievements: []
        },
        methods: {
            show: function(project) {
                console.log(project);
                var self = this;
                $(".container-fluid").fadeOut(250, function() {
                    // Change view state and update content
                    self.view = self.views.Project;
                    projectList.currentProject = project.htmlPage;

                    // Tiny quicckfix which registers events for the newly loaded html elements
                    setTimeout(function() {
                        //$('.gallery a').simpleLightbox();
                        $(".youtube").click(function() {
                            $(self).find("h3,h4").slideToggle();
                            $(self).find(".embed-responsive").slideToggle();
                            $('video').trigger('play');
                        });
                    }, 250);

                }).fadeIn(250);
            },
            back: function() {
                var self = this;
                $(".container-fluid").fadeOut(250, function() {
                    self.view = self.views.Home;
                    $(document).scrollTop();
                }).fadeIn(250);
            },
            setView: function(newView) {
                var self = this;
                $(".container-fluid").fadeOut(250, function() {
                    self.view = newView;
                    $(document).scrollTop();
                }).fadeIn(250);
            }
        }
    });

    console.log(projectList);
});