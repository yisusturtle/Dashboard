window.onload = function(){ //Funcion de js que indica que se ha cargado el contenido
    let contenedor = document.getElementById('loading'); //Asignacion a variable Id del contenido creado en HMTL para la pantalla de carga
    let contenido = document.getElementById('contenido'); //Asignacion a variable Id del contenido creado en HMTL el cual es todo el contenido

    window.setTimeout(function(){ //Retardo para que cumpla la animacion aunque haya cargado el contenido *1
        contenedor.style.visibility='hidden'; //Cambiando opciones de visibilidad al loading y al contenido
        contenedor.style.opacity = '0';
        contenido.style.visibility='visible';
        contenido.style.opacity='100'
    }, 2000)
    
    //*1 -Eso basicamente lo hago porque al no tener demasiada informacion que cargar, la pantalla del loading cargaría al instante y no se vería
    //    es un punto estetico y le da buena visibilidad al usuario
}

