<template>
  <div class="info" id="iii">
    <h1>{{ titulo }}</h1>
    <br><br>
    <p>{{intro}}</p>
    <br>
    <h3>
      <p>Autor: {{autor}}</p>
      <p>Projeto: {{projeto}}</p>
      <p>Data: {{dataAno}}</p>
      <br>
      Descição
    </h3>
    <p>{{desc}}</p>
    <br>
    <h3>Função:</h3>
    <p>{{func}}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      titulo: 'Página de Informações',
      intro: `Conheça mais sobre...`,
      autor: `Lucas Zingaro de Jesus`,
      projeto: `Webtec Fatec Jundiaí`,
      dataAno: `2º semestre 2018`,
      desc: `Um SPA baseado no projeto modelo disponibilizado durante a Webtec na Fatec Jundiaí.`,
      func: `Sua função é indefinida ....`
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Play');
  body {
    font-family: 'Play', sans-serif;
  }
  .info{
    margin: 0 Auto;
    max-width: 400px;
    font-size: 125%;
  }
</style>
