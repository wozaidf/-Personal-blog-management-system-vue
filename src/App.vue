<template>
  <div class="app">
    <!-- <nav> -->
    <!-- <router-link to="/aa">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <router-view />
    
  </div>
</template>
<script>
import EventBus from "./bus";
import CandyLib from "./views/componet/CandyLib.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    CandyLib,
    HelloWorld
},
  mounted() {
    EventBus.$emit('giveMoney', { count: 123 })
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
.app {
  height: 100%;
}
</style>
