const carta1 = document.getElementById("carta1");
const contador1 = document.getElementById("contador1");

const visor = document.getElementById("visorCarta");
const imagen = document.getElementById("imagenCarta");
const texto = document.getElementById("textoCarta");
const cerrar = document.getElementById("cerrar");

// FECHA TEMPORAL: Configurada en el pasado para que puedas probarla de inmediato
const fechaCarta1 = new Date("2020-01-01T00:00:00");

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
            Mia, feliz cumpleaños niña linda, felices 17 años, gracias por todo lo que compartimos, eres una niña super especial.
        </p>

        <p>
            Aún recuerdo cuando te molestaba a lo lejos con un amigo mío, recuerdo que te mirabas linda, luego nos mirábamos, siempre negabas el como me mirabas, pero siempre tendré presente el como me mirabas.
        </p>

        <p>
            El primer contacto que tuvimos fue en esas gradas del colegio, nos miramos y sentí que miraba a una niña, no a Sophia sino a Mia, fue raro pero lindo a la vez porque conocí tu lado más lindo por medio de tus ojos.
        </p>

        <p>
            Quise conocerte más y te contacte por Instagram, luego me aceptaste y por molestarme subiste una nota: “Si no mejor que no me mire”. Luego quise igualarlo dandole un like a tus destacadas, luego subes tu una nota: “Y ese like?”.
        </p>

        <p>
            Desde ese momento supe que era el momento para escribirte, te escribí y me dormí, me levanté con el mensaje tuyo y se me dibujo una sonrisa en el rostro, comenzamos la historia oficialmente.
        </p>

        <p>
            Hablábamos y llego tu cumpleaños, te quise sorprender con un pastelito, no te gusto tanto pero mi detalle estuvo, quise llevarte flores pero sentí que era muy intenso de mi parte pero quiero recalcar que en mi corazón siempre estuvo el quererte, amarte y demostrarte lo que es amar a alguien que relativamente en ese tiempo “aún no conocías”.
        </p>

        <p>
            Llego la primera llamada, en esa llamada a ambos nos disgusto, ambos sentimos que fue incomoda e irrespetuosa en cierto punto pero decidimos intentar otra llamada y esa fue el inicio de varias llamadas, tu voz dulce alegraba esos momentos y siempre habían sonrisas, eso siempre hubo.
        </p>

        <p>
            Paso el tiempo y te mirabas más linda en persona, no pudimos compartir mucho pero siempre estará en mi corazón que a pesar del poco tiempo, me extrañaste, no lo digo por ego, lo digo porque pude alcanzar ese corazón y que pudiera sentir lo que yo igualmente sentía.
        </p>

        <p>
            Desde esa despedida ya no nos vimos más y hasta el día de hoy aún no hemos regresado a vernos. Dejare eso hasta aquí, por ahora ese inicio fue lindo, no te voy a negar, hubieron peleas y muy feas pero como siempre te diré, fuiste mi dolor de cabeza favorito.
        </p>

        <p>
            El dolor de cabeza siempre genera un dolor ruidoso y feo, el tuyo era sereno y liviano porque a veces el dolor de cabeza no es por algo malo, es porque algo te importa, tu me importas y eso siempre será así.
        </p>

        <p>
            Aún recuerdo el suéter, Malachi y tus gustos de ese tiempo, pero también recuerdo ese día que me demostraste que tenía lugar, cuando en la salida ignoraste todo y sacaste todo por el hecho de que yo estaba en un lugar de tu corazón, capaz no grande pero si estaba en ese lugar.
        </p>

        <p>
            Luego seguimos hablando a pesar de las adversidades y la distancia, tuvimos una conexión linda mientras aumentaba las llamadas y los textos, siempre me emocionaba cuando me mandabas una foto tuya por lo linda que siempre te mirabas.
        </p>

        <p>
            Lastimosamente las discusiones y peleas siguieron hasta distanciarnos, volvimos a hablar y pasaba lo mismo, no encontramos la solución pero a pesar de todo eso quiero que sepas que te amo y te deseo los mejores momentos en estos 17 años, disfruta este tiempo que no se repetirá más.
        </p>

        <p>
            Ama y cuida a tus seres queridos que siempre te acompañan en las buenas y malas, no será fácil ni tampoco un martirio, pero siempre estará Dios quien te acompaña en este camino largo que tienes, sigue enamorada de la vida y lo que hay en ella y pues sin nada que agregar por ahora, feliz cumpleaños Mia 🖤
        </p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

        <p>
            Por ser tu cumpleaños, te hice una segunda carta, una más dinámica, espero te guste:
        </p>

        <p style="text-align:center; margin-bottom: 30px;">
            <a href="https://adairsitooo.github.io/Cuaderno-Mia/"
               target="_blank"
               rel="noopener noreferrer"
               style="display: inline-block; padding: 12px 25px; background-color: #222; color: #fff; text-decoration: none; border-radius: 25px; font-weight: bold; font-family: sans-serif; font-size: 16px;">
                Ver carta
            </a>
        </p>

        <p>
            Hice también una playlist de canciones que me acuerdan a ti (Incluye canciones que compartimos, que me hacen pensar en ti, gustos tuyos que compartiste conmigo o en Tiktok y el Soundtrack de Omar Courtz en su concierto):
        </p>

        <p style="text-align:center; margin-top: 15px;">
            <a href="https://open.spotify.com/playlist/3XExPUavIGCiReAr8B1Br5?si=IuYQC-HhQyKLwRpLuJuSSQ&utm_source=copy-link&pi=VpgIqz7SQkmvS"
               target="_blank"
               rel="noopener noreferrer"
               style="display: inline-block; padding: 12px 25px; background-color: #1DB954; color: #fff; text-decoration: none; border-radius: 25px; font-weight: bold; font-family: sans-serif; font-size: 16px;">
                Ver playlist
            </a>
        </p>
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

// Cerrar carta
cerrar.addEventListener("click", () => {
    visor.classList.add("oculto");
});



