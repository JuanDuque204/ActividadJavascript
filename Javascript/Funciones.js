const saludar = () => {

    return "Holaaaaa";

}



const calcularAreaCuadrado = lado => {
    return lado * lado;
}

const calcularVolumenCilindro = (radio, altura) => {
    const areaBase = Math.PI * radio ** 2;
    return areaBase * altura;
}

const ladoCuadrado = 5;
const radioCilindro = 3;
const alturaCilindro = 8;

let areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
let volumenCilindro = calcularVolumenCilindro(radioCilindro, alturaCilindro);

console.log(saludar());

console.log("El área del cuadrado es: " + areaCuadrado);
console.log("El volumen del cilindro es: " + volumenCilindro);
