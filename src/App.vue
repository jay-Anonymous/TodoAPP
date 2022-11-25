<template>
  <div class="wrapper" :class="{darkmode: inDarkmode}">
    <Background :darkmode="inDarkmode" />
    <section id="container">
      <Header @toggle-darkmode="toggleDarkmode" />
      <the-app :window-width="windowWidth"></the-app>
    </section>
    <Attribution />
 </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheBackground from "./components/layouts/TheBackground.vue";
import TheAttribution from "./components/layouts/TheAttribution.vue";
import TheApp from "./components/todo-app/TheApp.vue";

export default {
  components:{
    'Header': TheHeader,
    'Background':  TheBackground,
    'Attribution': TheAttribution,
    TheApp
  },
  data(){
    return {
      inDarkmode: false,
      windowWidth: window.screen.width,
    }
  },provide(){
    return{
      darkMode: this.inDarkmode,
      windowWidth: this.windowWidth
    }
  },
  methods:{
    toggleDarkmode(boolean){
      this.inDarkmode = boolean
      // console.log(boolean)
      this.saveMode()
    },
    myEventHandler(e) {
       let width =  e.target.innerWidth
       this.windowWidth = width
    },
    saveMode(){
      const parsed = JSON.stringify(this.inDarkmode);
      localStorage.setItem('darkmode', parsed)
    }
  },
  mounted(){
    if(localStorage.darkmode){
        this.inDarkmode = JSON.parse(localStorage.getItem('darkmode'))
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },

}
</script>