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
