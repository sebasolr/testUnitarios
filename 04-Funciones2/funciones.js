function concatenar (...arguments){
    let conca = '';
   conca = arguments.join('');
    return conca;
};
// para mi esto funcionaba
/* function invocarFunciones(...fn){
    return "".concat(...fn); 
} */
//3
function invocarFunciones (x,y){
    if(y === undefined){
        return x()
    }return x() + y();
}

function funcionParaInvocar (){
    return  'Me llamaron!';}

function otraFuncion(){
    return ' y después a otra!';}
//4
function creadorDeIncrementos(x){
    return function(y){return x + y}}

//5


function invocacionUnica(func) {
    let veces = 0 // veces que func ha sido ejecutada
    function funcRetorno() {
      if (veces == 0) {
        func()
        veces++;
      }
    }
    return funcRetorno
  }

  //6
function objetoConClousure (){
        let x = 0;
        objetoss={
        incremento:function(){this.x = x; x+= 1; return x},
        incrementoPor10:function(){this.x= x; x += 10; return x},
        pedirValor:function(n){if(n=== undefined){return x}else{  this.x =x; x += n ;return x}},
        cambiarValor:function(y){if(y === undefined){return this.x } else{ return x = y}}
}
return objetoss
}
//7
function ListaDeFuncionesInvitados(fn1,fn2){
    

}