<template>
  <div id="header">
    <div class="box-title">
      <h1 id="title"> {{ title }} </h1>
    </div>
    <div>
      <router-link to="/info"><img :src="infoIcon_img" class="infoIcon-img"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return { 
      infoIcon_img: require('@/../static/icons/infoIcon.png'),
      title: 'SPA Multi Task'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Play');

body {
  font-family: 'Play', sans-serif;
  text-align:center;
}
.infoIcon-img{
  width:42px;
  margin-left:20px
}

#header {
  justify-content: center;
  display: flex;
  width: 100%;
  color: white;
  position: fixed;
  background-color:rgb(4, 65, 99);
  box-shadow: 0px 1px 1px 0px black;
}

#logo img {
  width: 100%;
}
</style>

