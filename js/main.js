function validateForm(){
	var valor = document.getElementById("name").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    alert("Campo obligatorio");
  }
    else{
        var m = /^[a-zA-Z]*$/;
        if(!valor.search(m))
               console.log("letra")
               m=/[a-z]/g;
               if(!valor.search(m)){
                   alert("La primera letra debe empezar con maýuscula")
               }
          else
             alert ("Ingrese datos válidos (A-Z)");
    }

	var valorDos = document.getElementById("lastname").value;
	if( valorDos == null || valorDos.length == 0 || /^[a-zA-Z._.-]/.test(valorDos) ) {
 		 return alert("Faltan ingresar tu Apellido!");
	}
	var valorTres = document.getElementById("input-email").value;
	if( valorTres == null || valorTres.length == 0 || !/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(valorTres) ) {
 		 return alert("Faltan ingresar tu Email!");
	}
	var valorCuatro = document.getElementById("input-password").value;
	if( valorCuatro == null || valorCuatro.length == 0 || /^\s+$/.test(valorCuatro) ) {
 		 return alert("Faltan ingresar tu contraseña!");
 		 } else if (valorCuatro.length < 6){
        return alert("tu contraseña debe tener más de 6 carácteres")
	}
	var valosCinco = document.getElementById("input-social").value;
	if( valosCinco == null || valosCinco.length == 0 || /^\s+$/.test(valorCinco) ) {
 		 return alert("Elige una opción!");
	}/* Escribe tú código aquí */
}


