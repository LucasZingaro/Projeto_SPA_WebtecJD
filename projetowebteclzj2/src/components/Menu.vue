<template>
  <div id="menu">
    <div class="flex-container">
      
      <div><router-link to="/options"><img :src="menu_img" class="menu-icon"></router-link></div>
      <div ><router-link to="/"><img :src="home_img" class="menu-icon"></router-link></div>
      <div ><router-link to="/teste"><img :src="menu_img" class="menu-icon"></router-link><h1></h1></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {
      contato_img: require('@/../static/icons/contato.png'),
      home_img: require('@/../static/icons/home.png'),
      info_img: require('@/../static/icons/info.png'),
      menu_img: require('@/../static/icons/menu.png')
    }
  }
}





// background-color: rgb(4, 65, 99);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');

body {
  font-family: 'Play', sans-serif;
}
#menu {
  background-color: rgb(99, 99, 99);
  position: fixed;
  bottom: 0;
  width: 100%;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  box-shadow: 0px 0px 2px 1px  black;
}

.flex-container > div {
  width: 100px;
  margin: 10px;
  text-align: center;
}
</style>
