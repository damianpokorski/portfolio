<template>
  <div >
    <h1>Experience &amp; Projects</h1>
    <h5 class="description">(Hover for extra details, click for full description)</h5>

    <div class="row project">
      <project-card 
        v-for="project in projects"
        :key="project.title"
        :project="project">
      </project-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  mounted: function(){
    var self = this;
    $.getJSON("static/projects/projects.json", function(data) {
        self.projects = data;
    });
  },
  data () {
    return {
      projects: []
    }
  }
}
</script>

<style scoped>
</style>
