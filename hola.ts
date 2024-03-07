console.log('Hola mundo!');

function saludar (nombre: string) {
    return `Hola ${nombre}`;
}

console.log(saludar("Alex"))

//booleans
let logicoTrue: boolean = true;
let logicoFalse: boolean = false; 

//decimales
let entero: number = 12;
let decimal: number = 12.21;
let hexadecimal: number = 0x21211;
let binario: number = 0b101010110100;
let numerosextremadamnetelargos: number = 3_2_3892329382_7392372932_939;

//strings
let string: string = "sanjsiaoisaiosoa";

//void
function saludo (): void {
    console.log("Hola");
}

let x = saludo();

//arrays
let vocales: string[] = ['a','e','i','o','u'];

let all: [string, number, boolean] = ['Alex', 2121, true];

//tuplas
let tupla: [nombre:string, edad:number, humano:boolean] = ['Alex', 20, true];

let persona: {
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    mascota: boolean,
    labora: {
        empresa: string,
        activo: boolean,
    }
} = {
    nombre: "Pepe",
    edad: 30,
    pais: "Canada",
    fecha_nac: new Date(1990, 5, 14),
    mascota: false,
    labora: {
        empresa: "Glovant",
        activo: true,
    }
}

let obj: object = {}
