<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 achievement">
      <div class="col-xs-12">
          <img class="img-fluid" v-bind:src="'static/img/' + achievement.image" />
      </div>

      <h2 class="text-center title">{{ achievement.title }}</h2>
      <h5 class="text-center subtitle">{{ achievement.subtitle }}</h5>
      <h5 class="text-center date">{{ achievement.date }}</h5>
      <span class="description" v-html="achievement.description"></span>
  </div>
</template>

<script>
export default {
  props: {
    achievement: {}
  },
  name: 'AchievementCard',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
