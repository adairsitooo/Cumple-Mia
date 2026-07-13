const carta1 = document.getElementById("carta1");
const carta2 = document.getElementById("carta2");
const carta3 = document.getElementById("carta3");

const contador1 = document.getElementById("contador1");
const contador2 = document.getElementById("contador2");
const contador3 = document.getElementById("contador3");

const visor = document.getElementById("visorCarta");
const imagen = document.getElementById("imagenCarta");
const texto = document.getElementById("textoCarta");
const cerrar = document.getElementById("cerrar");

// Fechas de desbloqueo (Carta 1 configurada para el 9 de Julio de 2026)
const fechaCarta1 = new Date("2026-07-09T00:00:00");
const fechaCarta2 = new Date("2026-09-05T00:00:00");
const fechaCarta3 = new Date("2026-10-05T00:00:00");

// Abrir primera carta
carta1.addEventListener("click", () => {

    if(new Date() < fechaCarta1){
        alert("Esta carta todavía no está disponible.");
        return;
    }

    imagen.src = "img/foto1.png";

    texto.innerHTML = `
        <h2>Para ti, Mia</h2>

        <p>
            Mia, feliz cumpleaños, niña linda. Felices 17 años.
            Gracias por todo lo que compartimos, eres una niña súper especial.
        </p>

        <p>
            Para la primera carta quise empezar desde cuando nos conocimos.
            Aún recuerdo cuando te molestaba a lo lejos con un amigo mío,
            recuerdo que te mirabas linda. Luego nos mirábamos, siempre negabas
            el cómo me mirabas, pero siempre tendré presente la forma en que lo hacías.
        </p>

        <p>
            El primer contacto que tuvimos fue en esas gradas del colegio.
            Nos miramos y sentí que miraba a una niña, no a Sophia sino a Mia.
            Fue raro, pero lindo a la vez, porque conocí tu lado más lindo por medio
            de tus ojos.
        </p>

        <p>
            Quise conocerte más y te contacté por Instagram. Luego me aceptaste
            y por molestarme subiste una nota:
            "Si no, mejor que no me mire".
        </p>

        <p>
            Luego quise igualarlo dándole un like a tus destacadas y después
            subiste tú una nota:
            "¿Y ese like?"
        </p>

        <p>
            Desde ese momento supe que era el momento para escribirte.
            Te escribí y me dormí. Me levanté con un mensaje tuyo y se me dibujó
            una sonrisa en el rostro. Ahí comenzamos nuestra historia oficialmente.
        </p>

        <p>
            Hablábamos y llegó tu cumpleaños. Quise sorprenderte con un pastelito,
            no te gustó tanto, pero mi detalle estuvo. Quise llevarte flores,
            pero sentí que era muy intenso de mi parte.
        </p>

        <p>
            Aun así, quiero recalcar que en mi corazón siempre estuvo el quererte,
            amarte y demostrarte lo que es amar a alguien que, relativamente,
            en ese tiempo "aún no conocías".
        </p>

        <p>
            Llegó la primera llamada. En esa llamada a ambos nos disgustó,
            ambos sentimos que fue incómoda e irrespetuosa en cierto punto,
            pero decidimos intentar otra llamada y esa fue el inicio de varias.
        </p>

        <p>
            Tu voz dulce alegraba esos momentos y siempre habían sonrisas.
            Eso siempre estuvo presente.
        </p>

        <p>
            Pasó el tiempo y te mirabas más linda en persona.
            No pudimos compartir mucho, pero siempre estará en mi corazón que,
            a pesar del poco tiempo, me extrañaste.
        </p>

        <p>
            No lo digo por ego, lo digo porque pude alcanzar ese corazón
            y hacer que sintiera algo parecido a lo que yo igualmente sentía.
        </p>

        <p>
            Desde esa despedida ya no nos vimos más y hasta el día de hoy
            aún no hemos regresado a vernos.
        </p>

        <p>
            Dejaré eso hasta aquí. Por ahora, ese inicio fue lindo,
            no te lo voy a negar. Hubieron peleas y muy feas, pero como siempre
            te diré: fuiste mi dolor de cabeza favorito.
        </p>

        <p>
            El dolor de cabeza siempre genera un dolor ruidoso y feo.
            El tuyo era sereno y liviano, porque a veces un dolor de cabeza
            no es por algo malo, es porque algo te importa.
        </p>

        <p>
            Tú me importas y eso siempre será así.
            Aún recuerdo el suéter, Malachi y tus gustos de ese tiempo,
            pero también recuerdo ese día que me demostraste que tenía lugar.
        </p>

        <p>
            Cuando en la salida ignoraste todo y sacaste todo por el hecho
            de que yo estaba en un lugar de tu corazón. Capaz no era un lugar
            grande, pero sí estaba ahí.
        </p>

        <p>
            Te amo y te deseo los mejores momentos en estos 17 años.
            Disfruta este tiempo que no se repetirá más.
        </p>

        <p>
            Ama y cuida a tus seres queridos que siempre te acompañan
            en las buenas y en las malas. No será fácil ni tampoco un martirio,
            pero siempre estará Dios quien te acompaña en este camino largo que tienes.
        </p>

        <p>
            Sigue enamorada de la vida y de todo lo que hay en ella.
            Sin nada más que agregar por ahora, espera la siguiente carta.
        </p>

        <p>
            Feliz cumpleaños, Mia 🖤
        </p>
        <p>
            Por ser tu cumpleaños, te hice una segunda carta, una más dinámica, espero te guste.
        </p>

        <p style="text-align:center;">
            <a href="https://adairsitooo.github.io/Cuaderno-Mia/"
               target="_blank"
               rel="noopener noreferrer">
                Ver regalo
            </a>
        </p>
    `;

    visor.classList.remove("oculto");

});

// Abrir segunda carta
carta2.addEventListener("click", () => {

    if(new Date() < fechaCarta2){
        alert("Esta carta todavía no está disponible.");
        return;
    }

    imagen.src = "img/foto2.png";

    texto.innerHTML = `
        <h2>Segunda carta</h2>
        <p>Aquí estará la segunda carta.</p>
    `;

    visor.classList.remove("oculto");

});

// Abrir tercera carta
carta3.addEventListener("click", () => {

    if(new Date() < fechaCarta3){
        alert("Esta carta todavía no está disponible.");
        return;
    }

    imagen.src = "img/foto3.png";

    texto.innerHTML = `
        <h2>Tercera carta</h2>
        <p>Aquí estará la tercera carta.</p>
    `;

    visor.classList.remove("oculto");

});

// Contadores
function actualizarContadores(){

    const ahora = new Date();

    // Contador Carta 1
    if(ahora >= fechaCarta1){
        carta1.classList.remove("bloqueada");
        contador1.innerHTML = "Disponible";
    }else{
        contador1.innerHTML = tiempoRestante(fechaCarta1);
    }

    // Contador Carta 2
    if(ahora >= fechaCarta2){
        carta2.classList.remove("bloqueada");
        contador2.innerHTML = "Disponible";
    }else{
        contador2.innerHTML = tiempoRestante(fechaCarta2);
    }

    // Contador Carta 3
    if(ahora >= fechaCarta3){
        carta3.classList.remove("bloqueada");
        contador3.innerHTML = "Disponible";
    }else{
        contador3.innerHTML = tiempoRestante(fechaCarta3);
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

// Opcional: Cambiado a 1000 (1 segundo) para que si está en la misma hora 
// se vea fluida la cuenta atrás, si prefieres dejarlo en 60000 está perfecto.
setInterval(actualizarContadores, 60000); 

// Cerrar carta
cerrar.addEventListener("click", () => {
    visor.classList.add("oculto");
});
