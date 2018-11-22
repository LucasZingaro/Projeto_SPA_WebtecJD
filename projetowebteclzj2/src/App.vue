<template>
  <div id="app" class="space-between">
    <router-view/>
  </div>
</template>

<script>
var cor = "rgb(4, 65, 99)";
export default {
  name: 'App',
  data () {
    return {
      nota: 'rgb(4, 65, 99)'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.space-between {
  padding-top: 50px;
}
.page {
  position: fixed;
  width: inherit;
  margin: 0 auto;
}
</style>
