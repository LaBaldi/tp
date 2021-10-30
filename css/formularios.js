 const formulario = document.getElementById('formulario');
 const inputs = document.querySelectorAll ('#formulario input');
 const expresiones = {
 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
 	apellido:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  }
  


 const validarFormulario = (e) => {
     switch (e.target.name) {
 		case "nombre":
 			 if(expresiones.nombre. test(e.target.value) ){
 				 document.getElementById('grupo-nombre') .classList.remuve ('form-grupo-incorrecto');
 				 document.getElementById('grupo-nombre') .classList.add ('form-grupo-correcto');
 				 document.querySelector ('#grupo-nombre .form-input-error') .classList.remove ('form-input-error-activo');
			     
			
 				} else {
 				document.getElementById('grupo-nombre') .classList.add ('form-grupo-incorrecto');
 				document.getElementById('grupo-nombre') .classList.remuve ('form-grupo-correcto');
 				document.querySelector ('#grupo-nombre .form-input-error') .classList.add ('form-input-error-activo');
				
			}
 		break;
 		case "apellido":
 			if(expresiones.apellido. test(e.target.value) ){
 				document.getElementById('grupo-apellido') .classList.remuve ('form-grupo-incorrecto');
 				document.getElementById('grupo-apellido') .classList.add ('form-grupo-correcto');
 				document.querySelector ('#grupo-apellido .form-input-error') .classList.remove ('form-input-error-activo');
				
 			} else {
 			   document.getElementById('grupo-apellido') .classList.add ('form-grupo-incorrecto');
 			   document.getElementById('grupo-apellido') .classList.remuve ('form-grupo-correcto');
			   document.querySelector ('#grupo-apellido .form-input-error') .classList.add ('form-input-error-activo');
			   
 			}
 		 break;
 		 case "correo":
 			if(expresiones.correo. test(e.target.value) ){
 				document.getElementById('grupo-email') .classList.remuve ('form-grupo-incorrecto');
 				document.getElementById('grupo-email') .classList.add ('form-grupo-correcto');
 				document.querySelector ('#grupo-email .form-input-error') .classList.remove ('form-input-error-activo');
				
 			} else {
 			   document.getElementById('grupo-email') .classList.add ('form-grupo-incorrecto');
 			   document.getElementById('grupo-email') .classList.remuve ('form-grupo-correcto');
 			   document.querySelector ('#grupo-email .form-input-error') .classList.add ('form-input-error-activo');
		       
			}
  		 break;
  		 case "telefono":
 			if(expresiones.telefono. test(e.target.value) ){
 				document.getElementById('grupo-telefono') .classList.remuve ('form-grupo-incorrecto');
 				document.getElementById('grupo-telefono') .classList.add ('form-grupo-correcto');
 				document.querySelector ('#grupo-telefono .form-input-error') .classList.remove ('form-input-error-activo');
				
 			} else {
 			   document.getElementById('grupo-telefono') .classList.add ('form-grupo-incorrecto');
 			   document.getElementById('grupo-telefono') .classList.remuve ('form-grupo-correcto');
 			   document.querySelector ('#grupo-telefono .form-input-error') .classList.add ('form-input-error-activo');
			   
			}
 		 break;		
  	} 
 }

    inputs.forEach ((input) =>{
 	input.addEventListener('keyup', ValidarFormulario);
 	input.addEventListener('blur', ValidarFormulario);

 });


 formulario.addEventListener ('submit', (e)=>{
 e.preventDefault();

  });

 document.addEventListener("DOMContentLoaded", function(){
 	document.getElementById("formulario").addEventListener( 'submit',validar_envio);

 });

 function validar_envio(evento){
 	 evento.preventDefault();
 	var nombre = document.getElementById('nombre').value;
 	if (nombre.length==o){
 			alert ("Escriba su nombre"); 			return;	
 			}
 			var apellido = document.getElementById('apellido').value;
			if (apellido.length==o){
				alert ("Escriba su apellido");
				return;	
				 }
				var email = document.getElementById('email').value;
 				if (email.length==o){
 					alert ("Escriba su correo");
 					return;	
					}
 					var telefono = document.getElementById('telefono').value;
 					if (telefono.length==o){
 						alert ("Escriba su telefono");
 						return;	
 						}
             alert ("mensaje enviado");
             this.submit();
 }





 
//  function valida_envia() {

//     if (document.fvalida.nombre.value.length==o){
// 		alert ("Escriba su nombre")
// 		document.fvalida.nombre.focus ()
//         return 0; 
		
// 	}
 
//  if (document.fvalida.apellido.value.length==o){
// 	alert ("Escriba su apellido")
// 	document.fvalida.apellido.focus ()
// 	return 0; 
	
//     } 
// 	if (document.fvalida.email.value.length==o){
// 		alert ("Escriba su email")
// 		document.fvalida.email.focus ()
// 		return 0; 
		
// 		} if (document.fvalida.telefeno.value.length==o){
// 			alert ("Escriba su telefono")
// 			document.fvalida.telefeno.focus ()
// 			return 0; 
			
// 			} 	 if (document.fvalida.mensaje.value.length==o){
// 				alert ("Escriba su mensaje")
// 				document.fvalida.nombre.focus ()
// 				return 0; 
				
// 				} 
//             alert ("Mensaje enviado");
//            document.fvalida.submit ();
//  }