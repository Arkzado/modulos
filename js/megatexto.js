//calcular la longitud del texto
export function calcularLongitud(texto){
    return texto.trim().length;
}

//encontrar caracter en la posición indicada (desde la posición 1 para el espectador)
export function encontrarCaracter(texto, posicionCaracter){
    texto = texto.trim();
    if(posicionCaracter > texto.length || posicionCaracter <= 0){
        return `Posición fuera de los limites (1-${texto.length})`;
    }

    for(let i = 0; i < texto.length; i++){
        if(i + 1 === posicionCaracter){
            if(texto[i] === " "){
                return "' ' (espacio)";
            }
            else{
                return texto[i];
            }
        }
    }
}

//comprobar la existencia de una palabra
export function validarExistencia(texto, palabraIngresada){
    let palabrasTexto;

    texto = texto.trim();
    palabraIngresada = palabraIngresada.trim();

    palabrasTexto = texto.split(/[,\s]+/);

    for(let palabraTexto of palabrasTexto){
        if(palabraTexto === palabraIngresada){
            return `'${palabraIngresada}' Existe`;
        }
    }

    return `'${palabraIngresada}' No Existe`;
}

//reemplazar palabras existentes por palabras nuevas
export function reemplazarPalabras(texto, palabraAnterior, palabraNueva){
    let textoNuevo = "";
    let palabrasTexto = [];

    texto = texto.trim();
    palabraAnterior = palabraAnterior.trim();
    palabraNueva = palabraNueva.trim();

    palabrasTexto = texto.split(/[,\s]+/)

    palabrasTexto.forEach(palabraTexto => {
        textoNuevo += " ";
        textoNuevo += palabraTexto === palabraAnterior ? palabraNueva : palabraTexto
    });

    return textoNuevo;
}

//extraer porción del texto
export function extraerTexto(texto, posicionInicial, posicionFinal){
    let textoNuevo = "";
    texto = texto.trim();

    if(posicionFinal < posicionInicial){
        return "La posición inicial no puede ser mayor a la posición final";
    }

    if(posicionFinal > texto.length || (posicionInicial <= 0 || posicionFinal <= 0)){
        return `Posición fuera de los limites (1-${texto.length})`;
    }

    for(let i = posicionInicial - 1; i < posicionFinal; i++){
        textoNuevo += texto[i];
    }

    return textoNuevo;
}