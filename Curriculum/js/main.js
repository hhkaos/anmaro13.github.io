(function () {
  'use strict';

}());
var habilidades = document.getElementById('habilidades');
  console.log('habilidades = ', habilidades);

var $elemento = $('#habilidades');

 // Le añado un listener (o disparador), cuando se haga click
 $elemento.click(function(){
   var classList = '';

   if($elemento.hasClass('clicked')){
     // Si myBtn contiene la clase active la elimino
     $(this).removeClass('clicked');

     // Recuperamos el atributo clase y los partimos
     classList = $elemento.attr('class').split(' ');
     console.log('classList === ', classList);
   }else{
     // En caso contrario la añado
     $(this).addClass('clicked');

         }
           });
