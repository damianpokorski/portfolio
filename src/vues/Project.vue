
<template>
  <div>
     <router-link to="/" class="noStyle">
        <div class="backButton" >
            <h4>Back</h4>
        </div>
     </router-link>
     
    <div v-html="currentProject" style="padding:10px; background:rgba(255,255,255,0.6);"></div>

     <router-link to="/" class="noStyle">
        <div class="backButton" >
            <h4>Back</h4>
        </div>
     </router-link>
  </div>
</template>

<script>
export default {
  props: {
      id:"test"
  },
  mounted:function(){
      this.LoadProject();
  },
  data () {
    return {
        currentProject: ''
    }
  },
  methods: {
      LoadProject: function(){
          var self = this;
            $.getJSON("static/projects/projects.json", function(data) {
                var url = data.find(function(element){return element.id == self.$route.params.id}).html;
                console.log(url);
                $.get(url, function(data) {
                    self.currentProject = data;
                    self.OnProjectLoad();
                });
            });
      },
      OnProjectLoad: function(){
          setTimeout(function() {
                $('.gallery a').simpleLightbox();
                $(".youtube").click(function() {
                    $(this).find("h3,h4").slideToggle();
                    $(this).find(".embed-responsive").slideToggle();
                    $('video').trigger('play');
                });
            }, 250);
      }
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      console.log(from);
    }
  },
  name: 'app'
}
</script>

<style>
    .backButton{
        margin-top:25px;
        margin-bottom:25px;
    }
</style>
