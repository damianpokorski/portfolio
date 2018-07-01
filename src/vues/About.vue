<template>
  <div>

    <br>
    <router-link to="/">
      <div class="text-center">
          <button class="btn btn-lg btn-outline-secondary">Back</button>
      </div>
    </router-link>
    
    <div class="fullWidth row">
        <div class="col-md-6 offset-1 col-sm-12 contactItem">
            <h1>About Me</h1>
            <p>
                So yeah, I'm a developer.
            </p>

            <p>
                Recently (May 2018) have moved a Manchester in order to enhance my career progression, as well as to change scenery.
            </p>

            <p style="text-align: justify">
                 Right now I am happily employed at Moneta Communications Ltd. as a full-time Developer, where I am responsible for a few of their very complicated (and sometimes mind boggling) projects. Doing my best and handling issues on
                one by one case appears to be the best approach.
                <br>
                I have graduated Blackpool and the Fylde College (which is the subsidiary of well-esteemed Lancaster University) with the first class honours degree which I am extremely proud of as only two of those have been awarded within my class.
            </p>
            <h5>Professional approach</h5>
            <p>I like to think of myself as an all-rounder when it comes to Software Engineering, due to my versatile career path which allowed me to experience a lot of different environments and programming stack. If you need someone to build you a responsive website, make you a game, swifly create you a mobile app, manage your database, or establishing a deployment pipeline - I am your guy.</p>

            <h5>Background</h5>
            <p style="text-align: justify">
                Born in Poland, I've moved to the UK at a tender age of 16 when I have decided to pursue a career related to software engineering.

                <br> After the initial struggle with the language barrier, I have realized that I am quite capable in the field and it is possible for me to stand toe to toe with best of my peers (I'm still quite smug about it). 
            </p><p>
                Since then I have achieved the best marks in my class for 6 consecutive years throughout all of the courses that I have attended (Level 2, Extended Level 3 Diploma, Foundation Degree &amp; Honours Degree), which is
                one of my proudest achievements to this date.
            </p>
            <h5>Hobbies &amp; Interests</h5>
            <p style="text-align: justify">
                In my free time I do enjoy socialising, a good book (Currently reading 'Computing with quantum cats', it's pretty good), music and video games. Usually, I would say I am fairly quiet and slightly introverted (yet not socially incapacitated :D ), so my
                interests are fairly easy going, and casual.
            </p>
            <p>
                I really want to get back to learning how to play the guitar but after years of not practising, it will be a quite challenging journey.
            </p>
        </div>

        <div class="col-md-4 col-sm-12 offset-1">
            <h1>&nbsp;</h1>
            <img class="img-fluid" src="/static/img/me.jpg" />
            <p class="text-center" style="color:white;">Me</p>
        </div>

        <div class="fullWidth row">
            <div class="col-md-4 text-center">
                <a href="https://www.linkedin.com/in/damianpokorski/">
                    <h1>
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
                    </h1>
                </a>
            </div>

            <div class="col-md-4 text-center">
                <a href="https://www.facebook.com/pokorskidamian">
                    <h1>
                        <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                    </h1>
                </a>
            </div>

            <div class="col-md-4 text-center">
                <a href="mailto:damianpokorski@hotmail.com">
                    <h1>
                        <i class="fa fa-envelope" aria-hidden="true"></i> E-mail
                    </h1>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
