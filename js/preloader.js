window.onload = function(){
    let contenedor = document.getElementById('loading');
    let contenido = document.getElementById('contenido');
    window.setTimeout(function(){
        contenedor.style.visibility='hidden';
        contenedor.style.opacity = '0';
        contenido.style.visibility='visible';
        contenido.style.opacity='100'
    }, 2000)
    
}

