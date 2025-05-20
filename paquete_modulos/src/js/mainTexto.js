import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import '../styles/megatexto.css';
import * as Texto from "./megatexto.js";

let megatexto = document.querySelector("#megaTexto");
let btnLongitud = document.querySelector("#btnLongitud");
let btnCaracter = document.querySelector("#btnCaracter");
let btnVerificarPalabra = document.querySelector("#btnVerificarPalabra");
let btnReemplazarPalabra = document.querySelector("#btnReemplazarPalabra");
let btnExtraerTexto = document.querySelector("#btnExtraerTexto");

btnLongitud.addEventListener("click", (e) => {
    e.preventDefault();
    traerLongitud();
});

btnCaracter.addEventListener("click", (e) => {
    e.preventDefault();
    traerCaracter();
});

btnVerificarPalabra.addEventListener("click", (e => {
    e.preventDefault();
    verificarPalabra();
}));

btnReemplazarPalabra.addEventListener("click", (e) => {
    e.preventDefault();
    reemplazarPalabras();
});

btnExtraerTexto.addEventListener("click", (e) => {
    e.preventDefault();
    extraerTexto();
});

function traerLongitud() {
    let mostrarLongitud = document.querySelector("#mostrarLongitud");

    return mostrarLongitud.textContent = megatexto.value.length > 0 ? Texto.calcularLongitud(megatexto.value) : "MegaTexto vacio";
}

function traerCaracter() {
    let mostrarCaracter = document.querySelector("#mostrarCaracter");
    let posicionCaracter = document.querySelector("#posicionCaracter").value.trim();

    if (posicionCaracter.length > 0) {
        posicionCaracter = parseInt(posicionCaracter);

        return mostrarCaracter.textContent = megatexto.value.length > 0 ? Texto.encontrarCaracter(megatexto.value, posicionCaracter) : "MegaTexto vacio";
    }
    else {
        return mensaje("error", "Campo Invalido", "Complete el campo con valores positivos para buscar el caracter en el MegaTexto");
    }
}

function verificarPalabra() {
    let palabraIngresada = document.querySelector("#palabraIngresada").value.trim();
    let mostrarVerificacion = document.querySelector("#mostrarVerificacion");
    let contarPalabraIngresada = palabraIngresada.split(/\s+/);

    if (megatexto.value.length > 0) {
        if (contarPalabraIngresada.length > 1) {
            return mostrarVerificacion.textContent = "Ingresa solo una palabra";
        }

        if (palabraIngresada.length > 0) {
            return mostrarVerificacion.textContent = Texto.validarExistencia(megatexto.value, palabraIngresada);
        }
        else {
            return mensaje("error", "Campos Incompletos", "Complete el campo para poder verificar la existencia de la palabra");
        }
    }
    else {
        return mostrarVerificacion.textContent = "MegaTexto vacio";
    }
}

function reemplazarPalabras() {
    let palabraAnterior = document.querySelector("#palabraAnterior");
    let palabraNueva = document.querySelector("#palabraNueva");

    if (palabraAnterior.value.length > 0 || palabraNueva.value.length > 0) {
        let contarPalabrasAnteriores = palabraAnterior.value.trim().split(/[\s]+/);
        let contarPalabrasNuevas = palabraNueva.value.trim().split(/[\s]+/);

        if (contarPalabrasAnteriores.length > 1 || contarPalabrasNuevas.length > 1) {
            return mensaje("error", "Muchas Palabras", "No ingreses varias palabras en los campos de reemplazo");
        }

        if (megatexto.value.length > 0) {
            mensaje("success", "Reemplazo Exitoso", `Se han reemplazados todas las palabras '${palabraAnterior.value}' por '${palabraNueva.value}'`);

            megatexto.value = Texto.reemplazarPalabras(megatexto.value, palabraAnterior.value, palabraNueva.value);
            palabraAnterior.value = "";
            palabraNueva.value = "";
        }
        else {
            return mensaje("error", "MegaTexto Vacio", "no hay palabras para modificar");
        }
    }
    else {
        return mensaje("error", "Campos Incompletos", "Complete los campos para poder reemplazar las palabras");
    }
}

function extraerTexto() {
    let mostrarExtraccion = document.querySelector("#mostrarExtraccion");
    let posicionInicial = document.querySelector("#posicionInicial").value.trim();
    let posicionFinal = document.querySelector("#posicionFinal").value.trim();

    if (posicionInicial.length > 0 && posicionFinal.length > 0) {
        if (megatexto.value.length > 0) {
            posicionInicial = parseInt(posicionInicial);
            posicionFinal = parseInt(posicionFinal);

            mostrarExtraccion.textContent = Texto.extraerTexto(megatexto.value, posicionInicial, posicionFinal);
        }
        else {
            mostrarExtraccion.textContent = "MegaTexto Vacio";
        }
    }
    else {
        mensaje("error", "Campos Invalidos", "Complete los campos de posiciones con valores positivos dentro del limite para poder extraer el texto");
    }
}

function mensaje(icono, titulo, descripcion) {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: descripcion
    });
}