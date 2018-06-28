<template>
  <div class="col-lg-4 col-md-6 col-sm-12 projectElement">
    <router-link :to="projectPath()" class="noStyle">
      <img v-if="project.ribbon" v-bind:src="project.ribbon" class="img-responsive ribbon" />
      <h3 class="title">{{ project.title }}</h3>

      <h5 class="subtitle">{{project.subtitle}}</h5>

      <p class="myText">{{ project.description }}</p>

      <div class="skills row">
          <h4>Skills involved:</h4>

          <!-- Skills as objects Template: {name:'', class:''}  -->
          <div class="col-12" 
            v-if="typeof(skill) =='object'" 
            v-for="skill in project.skills" 
            style="padding:5px;" 
            v-bind:key="skill.name">
              <h5>&minus;&nbsp; {{skill.name}}</h5>
              <button 
                class="btn btn-sm" 
                v-for="item in skill.items" 
                v-bind:class="skill.class" 
                v-bind:key="item">
                {{ item }}
              </button>
          </div>

          <!-- Skills as strings -->
          <button 
            v-if="typeof(skill) !=='object'" 
            class="btn btn-sm btn-info" 
            v-for="skill in project.skills" 
            v-bind:key="skill.name">
            {{ skill }}
          </button>

      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    project: {}
  },
  name: 'ProjectCard',
  data () {
    return {}
  },
  methods:{
    projectPath:function(){
      if(this.project == {}){
        return '';
      }
      return '/projects/' + this.project.id;
    }
  }
}
</script>

<style scoped>

</style>
