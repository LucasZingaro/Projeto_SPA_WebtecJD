<template>
  <div class="hello">
    <div class="flip">
      <div class="fundo">
        <img src="@/assets/logo2.png">
      </div>
      <div class="frente">
        <img src="@/assets/logo-2.png">
      </div>
    </div>

    <br>

    <div class="flip">
      <div class="fundo">
        <img src="@/assets/logo2-2.png">
      </div>
      <div class="frente">
        <img src="@/assets/logo.png">
      </div>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bem-vindo ao SPA Multi Task App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');

/*Animação*/
.flip{
  width:200px;
  height:200px;
  margin:0 auto;
  perspective:400px;
}
.flip .frente{
  position: absolute;
  /*transform: rotateX(0deg);*/
  transform: rotateY(0deg);
  backface-visibility: hidden;
  transition: all .4s linear;
}
.flip .fundo{
  position: absolute;
  /*transform: rotateX(180deg);*/
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all .4s linear;
}
.flip:hover .frente{
  /*transform: rotateX(-180deg);*/
  transform: rotateY(-180deg);
  cursor: pointer;
}
.flip:hover .fundo{
  /*transform: rotateX(0deg);*/
  transform: rotateY(0deg);
  cursor: pointer;
}
body {
  font-family: 'Play', sans-serif;
}

</style>
