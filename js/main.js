// Restamos el alto del body menos el alto de la ventana
const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

// onscroll se ejecutara cada que el usuario haga scroll en la pagina
window.onscroll = () => {
    // Iremos calculando el ancho de la imagen que tiene hojas para que se vaya mostrando
    const anchoFondo = (window.pageYOffset / altura) * 900;
    
    // Evita que el ancho sobrepase el 100% que declaramos en los estilos css
    if( anchoFondo <= 100 ){
        // Una vez caculado actualizamos el estilo de la imagen de fondo(hojas)
        fondo.style.width = anchoFondo + '%';
    }
}