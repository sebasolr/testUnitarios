function setPropsOnObj(n){
 n.p = 5;
 n.plataforma = 5;
 n.proximo = function prox(x){return x+1};
 n.la= {clave :{secreta:{es:404}}}

}
function setPropsOnArr(n){
n.hola = function hi(){
   return 'Hola!'
}
n.river = 'plate'
n[0]= 5;
n.doble = function dub(x){return x*2}
}


let functionObject = 'Soy una función con propiedades!'


/* {
   year : ()=> {return '2017'},
   mitad : (x)=>{return x/2},
   prototype: function helloWorld(){return 'Hello World'},
   'Soy una función con propiedades!'
      
   } */

  function setPropsOnFunc (n){
   n.year = '2017';
   n.mitad = function mita(x){return x/2};
   n.prototype = {helloWorld(){return 'Hello World'}}
   
   return n
  }