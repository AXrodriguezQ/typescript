
function sumar (a: number, b: number): number {
    let suma = a + b;
    console.log(`${a}+${b}=${suma}`);
    return suma;
}

sumar(2,3)

let restar : (a: number, b: number) => number = function (a: number, b: number) {
    let resta = a - b;
    console.log(`${a}-${b}=${resta}`);
    return resta;
}

restar(2,3)

let multiplicar: (a: number, b: number) => number 
multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3));

let dividir : (a: number, b: number, callback:(r: number) => void) => void
dividir = (a, b, callback) => callback(a/b)

dividir(10, 2, (r) => console.log(r));
