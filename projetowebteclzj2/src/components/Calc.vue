<template>
    <div id="calc">
        <h2>{{tt}}</h2>
        <div id="calc_run">
            <div id="visor" value="null"></div>
            <div class="Btn" id="soma" value="+" v-on:click="fsoma">+</div>
            <div class="Btn" id="sub" value="-" v-on:click="fsub">-</div>
            <div class="Btn" id="mult" value="*" v-on:click="fmult">x</div>
            <div class="Btn" id="divi" value="/" v-on:click="fdivi">/</div>
            <div class="Btn" id="igual" value="=" v-on:click="figual">=</div>

            <div class="Btn" id="n0" value="0" v-on:click="f0">0</div>
            <div class="Btn" id="n1" value="1" v-on:click="f1">1</div>
            <div class="Btn" id="n2" value="2" v-on:click="f2">2</div>
            <div class="Btn" id="n3" value="3" v-on:click="f3">3</div>
            <div class="Btn" id="n4" value="4" v-on:click="f4">4</div>
            <div class="Btn" id="n5" value="5" v-on:click="f5">5</div>
            <div class="Btn" id="n6" value="6" v-on:click="f6">6</div>
            <div class="Btn" id="n7" value="7" v-on:click="f7">7</div>
            <div class="Btn" id="n8" value="8" v-on:click="f8">8</div>
            <div class="Btn" id="n9" value="9" v-on:click="f9">9</div>

            <div class="Btn" id="apagar" value="a"  v-on:click="fapagar"><--</div>
            <div class="Btn" id="zerar" value="z" v-on:click="fzerar">CE</div>
            <div class="Btn" id="reset" value="r" v-on:click="freset">C</div>
        </div>
    </div>
</template>

<script>
var isSimbolo = false;//ultimo caractere foi simbolo
var isNumero = false;//ultimo caractere foi numero
var max= 13;//limite maximo de caracteres(14)
var ops=['+','-','x','/'];//opções em caractere;
export default {
    name: 'Calc',
    data () {
        return {
            tt: 'Calculadora'
        }
    },
    methods:{
        //Método(vue) para apagar um caractere
        fapagar: function(event){
            var str = document.getElementById('visor').value;
            if(!(str==undefined) && (str.length>0)){
                setVisor(str.substring(0, str.length - 1));
            }
        },
        //Método(vue) para zerar o Visor
        fzerar: function(event){
            var str = document.getElementById('visor').value;
            if(!(str==undefined) && (str.length>0)){
                var ini=0; 
                var fim=0;
                var i = str.length-1;
                while(i>0){
                    if(str.charAt(i)==ops[0] || str.charAt(i)==ops[1] || str.charAt(i)==ops[2] || str.charAt(i)==ops[3]){
                        fim=i;
                        break;
                    }else{
                        fim=0;
                    }
                    i--;
                }
                
                setVisor(str.substring(ini, fim));
            }
        },
        //Método(vue) para reiniciar o Visor
        freset: function(event){
            setVisor("");
        },
        //Método(vue) para efetuar contas
        figual: function(event){
            
            var str=document.getElementById('visor').value;
            var index = str.length-1;
            if(str.charAt(index)==ops[0] || str.charAt(index)==ops[1] || str.charAt(index)==ops[2] || str.charAt(index)==ops[3]){
                alert("Operação inválida");
            }else{
                var nums = [0];
                var ultimoIndex=0;
                for(var i=0;i<str.length;i++){
                    if(str.charAt(i)==ops[0] || str.charAt(i)==ops[1] || str.charAt(i)==ops[2] || str.charAt(i)==ops[3]){
                        nums.push(""+str.substring(ultimoIndex, i));
                        nums.push(""+str.charAt(i));
                        ultimoIndex = i+1;
                    }
                    if((i+1)==str.length){
                        nums.push(""+str.substring(ultimoIndex,str.length));
                    }
                }
                nums = calculo(nums);
                setVisor(""+nums[1].toFixed(2));//fixa casas decimais
                isNumero==true;
                isSimbolo==false;
            }
        },
        //Método(vue) para declarar uma soma
        fsoma: function(event){
            var str=document.getElementById('visor').value;
            if(!isSimbolo && isNumero){
                addVisor('+');
                isSimbolo=true;
            }else if(isSimbolo){
                setVisor(str.substring(0, str.length-1));
                addVisor('+');
            }
        },
        //Método(vue) para declarar uma subtração
        fsub: function(event){
            var str=document.getElementById('visor').value;
            if(!isSimbolo && isNumero){
                addVisor('-');
                isSimbolo=true;
            }else if(isSimbolo){
                setVisor(str.substring(0, str.length-1));
                addVisor('-');
            }
        },
        //Método(vue) para declarar uma multiplicação
        fmult: function(event){
            var str=document.getElementById('visor').value;
            if(!isSimbolo && isNumero){
                addVisor('x');
                isSimbolo=true;
            }else if(isSimbolo){
                setVisor(str.substring(0, str.length-1));
                addVisor('x');
            }
        },
        //Método(vue) para declarar uma divisão
        fdivi: function(event){
            var str=document.getElementById('visor').value;
            if(!isSimbolo && isNumero){
                addVisor('/');
                isSimbolo=true;
            }else if(isSimbolo){
                setVisor(str.substring(0, str.length-1));
                addVisor('/');
            }
        },
        
        //Métodos(vue) para declarar numeros de 0 á 9
        f0: function(event){
            addVisor('0');
            isNumero=true;
            isSimbolo=false;
        },
        f1: function(event){
            addVisor('1');
            isNumero=true;
            isSimbolo=false;
        },
        f2: function(event){
            addVisor('2');
            isNumero=true;
            isSimbolo=false;
        },
        f3: function(event){
            addVisor('3');
            isNumero=true;
            isSimbolo=false;
        },
        f4: function(event){
            addVisor('4');
            isNumero=true;
            isSimbolo=false;
        },
        f5: function(event){
            addVisor('5');
            isNumero=true;
            isSimbolo=false;
        },
        f6: function(event){
            addVisor('6');
            isNumero=true;
            isSimbolo=false;
        },
        f7: function(event){
            addVisor('7');
            isNumero=true;
            isSimbolo=false;
        },
        f8: function(event){
            addVisor('8');
            isNumero=true;
            isSimbolo=false;
        },
        f9: function(event){
            addVisor('9');
            isNumero=true;
            isSimbolo=false;
        },
    }
}
//Acrescenta um caractere ao Visor
function addVisor( c ){
    if(document.getElementById('visor').value==undefined){
        setVisor(c);
    }else if(document.getElementById('visor').value.length<=max){
        document.getElementById('visor').value += c;
        c=""+document.getElementById('visor').value;
        
        c=format2lines7(c);
        
        document.getElementById('visor').innerHTML=c;
    }
}
//Atribui o valor do Visor
function setVisor(t){
    document.getElementById('visor').value=t;
    t=format2lines7(t);
    document.getElementById('visor').innerHTML=t;
}
//Formata a string para 2 linhas de 7 caracteres
function format2lines7(c){
    if(c.length>7 && c!="Infinity"){
        c=c.substring(0, 7)+"<br>"+c.substring(7, c.length);
    }
    return c;
}
//Realiza os calculos
function calculo(nums){
    //parse float
    for(var i=2; i<nums.length;i+=2){
        if(nums[i]=='x'){
            var ant = parseFloat(nums[i-1]);
            var pro = parseFloat(nums[i+1]);
            nums[i-1]=ant*pro;
            nums.splice(i,2);
            i=0;
        }else if(nums[i]=='/'){
            var ant = parseFloat(nums[i-1]);
            var pro = parseFloat(nums[i+1]);
            nums[i-1]=ant/pro;
            nums.splice(i,2);
            i=0;
        }else if(nums[i]=='+'){
            var ant = parseFloat(nums[i-1]);
            var pro = parseFloat(nums[i+1]);
            nums[i-1]=(ant+pro);
            nums.splice(i,2);
            i=0;
        }else if(nums[i]=='-'){
            var ant = parseFloat(nums[i-1]);
            var pro = parseFloat(nums[i+1]);
            nums[i-1]=(ant-pro);
            nums.splice(i,2);
            i=0;
        }
    }
    return nums;
}

    // 4 colunas e 6 linhas
</script>
<style>
#calc_run{ 
    margin: 0 auto;
    background:green;
    height:100%;
    min-height:460px;

    width: 75%;
    max-width: 400px;

    display:Grid;
    grid-gap:1%;

    text-align:center;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 25% auto auto auto auto auto;
    grid-template-areas:'v  v  v  v'
                        'a  z  r  sm'
                        'n7 n8 n9 sb'
                        'n4 n5 n6 m'
                        'n1 n2 n3 d'
                        'n0 n0 i  i';
}
.Btn{
    background: yellow;
    font-size: xx-large;
    min-width: 5%;
    height:auto;
}

#visor{
    font-size: 300%;
    max-width: 100%;
    height:100%;
    background:#ffd000;
    grid-area:v;}
#soma{grid-area:sm;}
#sub{grid-area:sb;}
#mult{grid-area:m;}
#divi{grid-area:d;}
#igual{grid-area:i;}

#n0{grid-area:n0;}
#n1{grid-area:n1;}
#n2{grid-area:n2;}
#n3{grid-area:n3;}
#n4{grid-area:n4;}
#n5{grid-area:n5;}
#n6{grid-area:n6;}
#n7{grid-area:n7;}
#n8{grid-area:n8;}
#n9{grid-area:n9;}

#apagar{grid-area:a;}
#zerar{grid-area:z;}
#reset{grid-area:r;}
</style>