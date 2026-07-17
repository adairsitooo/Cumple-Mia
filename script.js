const carta1 = document.getElementById("carta1");
const contador1 = document.getElementById("contador1");

const visor = document.getElementById("visorCarta");
const imagen = document.getElementById("imagenCarta");
const texto = document.getElementById("textoCarta");
const cerrar = document.getElementById("cerrar");

const fechaCarta1 = new Date("2026-08-05T00:00:00");

carta1.addEventListener("click", () => {

    if(new Date() < fechaCarta1){
        alert("Esta carta todavía no está disponible.");
        return;
    }

    texto.innerHTML = `
      
    `;

    visor.classList.remove("oculto");

});

function actualizarContadores(){

    const ahora = new Date();

    if(ahora >= fechaCarta1){
        carta1.classList.remove("bloqueada");
        contador1.innerHTML = "Disponible";
    }else{
        contador1.innerHTML = tiempoRestante(fechaCarta1);
    }

}

function tiempoRestante(fecha){

    const diferencia = fecha - new Date();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    return `Disponible en ${dias} días, ${horas} horas y ${minutos} minutos`;

}

actualizarContadores();
setInterval(actualizarContadores, 60000); 

cerrar.addEventListener("click", () => {
    visor.classList.add("oculto");
});




