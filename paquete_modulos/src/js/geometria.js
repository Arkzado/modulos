//calculos para el circulo
export function calcularDiametroCirculo(radio){
    return parseFloat((radio * 2).toFixed(2));
}

export function calcularAreaCirculo(radio){
    return parseFloat((Math.PI * Math.pow(radio, 2)).toFixed(2));
}

export function calcularPerimetroCirculo(radio){
    return parseFloat((2 * Math.PI * radio).toFixed(2));
}


//calculos para el rectangulo
export function calcularDiagonalRectangulo(base, altura){
    return parseFloat((Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))).toFixed(2));
}

export function calcularAreaRectangulo(base, altura){
    return parseFloat((base * altura).toFixed(2));
}

export function calcularPerimetroRectangulo(base, altura){
    return parseFloat(((2 * base) + (2 * altura)).toFixed(2));
}

//calculos para el triangulo rectangulo
export function calcularPitagorasTriangulo(base, altura){
    return parseFloat((Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))).toFixed(2));
}

export function calcularAreaTriangulo(base, altura){
    return parseFloat(((base * altura) / 2).toFixed(2));
}

export function calcularPerimetroTriangulo(base, altura){
    let hipotenusa = calcularPitagorasTriangulo(base, altura);
    return parseFloat((base + altura + hipotenusa).toFixed(2));
}