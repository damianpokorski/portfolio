<template>

  <div class="row">
      <div class="col-12 col-xs-12" style="margin-top:10%; margin-bottom: 10%;">
          <h1 class="text-center">Damian Pokorski</h1>
          <h2 class="text-center">Portfolio</h2>

          <br>

          <div class="col-6 offset-3 flavourText">
              Hi, I'm Damian. Software developer, an adaptable, enthusiastic and highly motivated individual with passion for programming.

              <br> Keen to learn and confident with strong attention to the detail and a ‘can do’ attitude.
          </div>

          <h5 class="text-center">
              Welcome to my shabby website, filled with some of my projects and experiences!
          </h5>

          <br>

          <div class="text-center">
              <router-link to="/about">
                <button class="btn btn-outline-secondary btn-lg">
                    About Me &amp; Contact
                </button>
              </router-link>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
