<template>
    <div id="cont">
        <h1>{{tt}}</h1>
        <div id="conter">{{conte}}</div>
        <br>
        <p>
            (1<input type="radio" name="num1" checked="checked" @click="val=1"/>)
            (5<input type="radio" name="num5" @click="val=5"/>)
            (10<input type="radio" name="num10" @click="val=10"/>)
            <br>
            (25<input type="radio" name="num10" @click="val=25"/>)
            (33<input type="radio" name="num10" @click="val=33"/>)
            (42<input type="radio" name="num10"  @click="val=42"/>)
        </p>
        <div class="BoxConter" id="bCmais" @click="conte+=val">+</div>
        <div class="BoxConter" id="bCmenos" @click="conte-=val;">-</div>
        
    </div>
</template>

<script>
export default {
  name: 'Cont',
  data () {
    return {
        tt:'Contador Vue',
        conte:0,
        val:1
    }
  }
}
</script>

<style>
#cont{
    margin: 0 auto;
    min-height:500px;
    width: 75%;
    max-width: 400px;
    text-align:center;
}
.BoxConter{
    text-align:center;

    margin: 0 auto;
    width:150px;
    height:150px;
    background:orange;

    font-size:140px;
}
#bCmais{
    background:#00fff3;
}
#conter{
    font-size:50px;
}
p{
    font-size:25px;
}
</style>