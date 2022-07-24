function crearCalculadora(){
   let Objeto = {
   x: 0 ,
   valor: function valor(){ this.x= this.x+0;return this.x },
   sumar: function sumar (a){this.x = this.x + a; return this.x},
   restar: function restar(a){this.x= this.x-a ; return this.x},
   reset: function reset(){this.x=0;return this.x}
}
return Objeto
}
/* }
function solution(arr) {
   let array = [];
   for(let i = 1; i<= arr.length; i++){
      
      let a = arr[i-1];
      let b = arr[i];
      let c = arr[i+1];
       if (a+b>c && a+c>b && c+b>a){
         array.push(1)
         
       }else if (!(a+b>c && a+c>b && c+b>a)){
         array.push(0)
         return array}
   }
}
    */