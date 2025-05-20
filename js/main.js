import * as Calculos from "./geometria.js";

let btnCalcularCirculo = document.querySelector("#circulo");
let btnCalcularRectangulo = document.querySelector("#rectangulo");
let btnCalcularTriangulo = document.querySelector("#triangulo");

btnCalcularCirculo.addEventListener("click", (e) => {
    e.preventDefault();
    calculosCirculo();
});

btnCalcularRectangulo.addEventListener("click", (e) => {
    e.preventDefault();
    calculosRectangulo()
});

btnCalcularTriangulo.addEventListener("click", (e) => {
    e.preventDefault();
    calculosTriangulo();
});

function calculosCirculo() {
    let radioRecibido = document.querySelector("#radio").value.trim();
    let radio = Number(radioRecibido);
    let area = document.querySelector("#areaCirculo");
    let perimetro = document.querySelector("#perimetroCirculo");
    let diametro = document.querySelector("#diametroCirculo");

    if (radioRecibido.length > 0) {
        if (radio >= 0) {
            radio = parseInt(radio);

            area.textContent = `${Calculos.calcularAreaCirculo(radio)} U²`;
            perimetro.textContent = `${Calculos.calcularPerimetroCirculo(radio)} U`;
            diametro.textContent = `${Calculos.calcularDiametroCirculo(radio)} U`;
        }
        else {
            area.textContent = "-";
            perimetro.textContent = "-";
            diametro.textContent = "-";
            return mensajeError("Valores Invalidos", "Ingrese solo valores positivos");
        }
    }
    else {
        area.textContent = "-";
        perimetro.textContent = "-";
        diametro.textContent = "-";

        return mensajeError("Valores Invalidos", "Por favor complete el campo con valores positivos para realizar el calculo");
    }
}

function calculosRectangulo() {
    let baseRecibida = document.querySelector("#baseRectangulo").value.trim();
    let alturaRecibida = document.querySelector("#alturaRectangulo").value.trim();
    let area = document.querySelector("#areaRectangulo");
    let perimetro = document.querySelector("#perimetroRectangulo");
    let diagonal = document.querySelector("#diagonalRectangulo");
    let base = Number(baseRecibida);
    let altura = Number(alturaRecibida);

    if (baseRecibida.length > 0 && alturaRecibida.length > 0) {

        if (base >= 0 && altura >= 0) {
            area.textContent = `${Calculos.calcularAreaRectangulo(base, altura)} U²`;
            perimetro.textContent = `${Calculos.calcularPerimetroRectangulo(base, altura)} U`;
            diagonal.textContent = `${Calculos.calcularDiagonalRectangulo(base, altura)} U`;
        }
        else {
            area.textContent = "-";
            perimetro.textContent = "-";
            diagonal.textContent = "-";

            return mensajeError("Valores Invalidos", "Por favor ingrese solo valores positivo");
        }

    }
    else {
        area.textContent = "-";
        perimetro.textContent = "-";
        diagonal.textContent = "-";

        return mensajeError("Campos Invalidos", "Por favor complete los campos con valores positivos para realizar el calculo");
    }
}

function calculosTriangulo() {
    let base = document.querySelector("#baseTriangulo").value.trim();
    let altura = document.querySelector("#alturaTriangulo").value.trim();
    let area = document.querySelector("#AreaTriangulo");
    let perimetro = document.querySelector("#perimetroTriangulo");
    let hipotenusa = document.querySelector("#hipotenusaTriangulo");

    if (base.length > 0 && altura.length > 0) {
        base = parseInt(base);
        altura = parseInt(altura);

        if (altura >= 0 && base >= 0) {
            area.textContent = `${Calculos.calcularAreaTriangulo(base, altura)} U²`;
            perimetro.textContent = `${Calculos.calcularPerimetroTriangulo(base, altura)} U`;
            hipotenusa.textContent = `${Calculos.calcularPitagorasTriangulo(base, altura)} U`;
        }
        else {
            area.textContent = "-";
            perimetro.textContent = "-";
            hipotenusa.textContent = "-";
            return mensajeError("Valores Invalidos", "Por favor ingrese solo valores positivo");
        }

    }
    else {
        area.textContent = "-";
        perimetro.textContent = "-";
        hipotenusa.textContent = "-";

        return mensajeError("Campos Invalidos", "Por favor complete los campos con valores positivos para realizar el calculo");
    }
}

function mensajeError(titulo, descripcion) {
    Swal.fire({
        icon: "error",
        title: titulo,
        text: descripcion
    });
}
