<template>
  <div class="Options" >
    <h2>{{ msg }}</h2>
    <div class="opBlock" id="opred" v-on:click="tema01"></div>
    <div class="opBlock" id="opgreen" v-on:click="tema02"></div>
    <div class="opBlock" id="opblue" v-on:click="tema03"></div>

  </div>
</template>

<script>
export default {
  name: 'Options',
  data () {
    return {
      msg: 'Página de Opções'
    }
  },
  methods: {
    tema01: function (event) {
      var cor ='rgb(100, 4, 4)';
      document.getElementById('header').style.backgroundColor=cor;
      document.getElementById('menu').style.backgroundColor=cor;
      document.body.style.backgroundColor='rgb(230, 230, 255)';
      document.getElementById('app').style.color='rgb(4, 200, 4)';
    },
    tema02: function (event) {
      var cor ='rgb(4, 100, 4)';
      document.getElementById('header').style.backgroundColor=cor;
      document.getElementById('menu').style.backgroundColor=cor;
      document.body.style.backgroundColor='rgb(255, 230, 230)';
      document.getElementById('app').style.color='rgb(4, 4, 200)';
    },
    tema03: function (event) {
      var cor ='rgb(4, 4, 100)';
      document.getElementById('header').style.backgroundColor=cor;
      document.getElementById('menu').style.backgroundColor=cor;
      document.body.style.backgroundColor='rgb(230, 255, 230)';
      document.getElementById('app').style.color='rgb(200, 4, 4)';
    }
  }
}

</script>

<style>
.opBlock{
  width:100px;
  height:100px;
  background-color:rgb(0, 0, 0);
  margin:10px auto;
}
#opred{
  background-color:rgb(100, 5, 5);
}
#opgreen{
  background-color:rgb(5, 100, 5);
}
#opblue{
  background-color:rgb(5, 5, 100);
}
</style>
