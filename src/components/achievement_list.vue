<template>
  <div class="row">
      <h1>Achievements &amp; Education</h1>
      <h5 class="description">(Hover for details)</h5>
      <div class="row">
          <achievement-card 
          v-for="achievement in achievements" 
          :achievement="achievement" 
          :key="achievement.title">
          </achievement-card>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    achievement: {}
  },
  mounted: function(){
    var self = this;
    $.getJSON("static/achievements/achievements.json", function(data) {
        self.achievements = data;
    });
  },
  name: 'AchievementList',
  data () {
    return {
      achievements: []
    }
  }
}
</script>

<style scoped>

</style>
