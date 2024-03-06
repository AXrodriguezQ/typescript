
//---------------------ALIAS--------------------//

type NumeroXD = number;

//Es lo mismo!
let normal: number = 5;
let anormal: NumeroXD = 5;

type LoginCredentials = {
    username: string;
    password: string;
    remember?: boolean;
}

function login(data: LoginCredentials) {
    console.log(data.username);
    console.log(data.password);
}

/*
En otras palabras
function login(username: string, password: string) {
    console.log(username);
    console.log(password);
}
*/ 

login({
    username: "juan",
    password: "<PASSWORD>"
})

login({
    username: "juan",
    password: "<PASSWORD>",
    remember: true
})

//------------------------------------------------------//





//---------------------LITERALES--------------------//

//De esta manera tenemos que dar el msimo tipo de dato a lo que vale la variable
let verdadero: true = true;

let numero: 5 = 5;

let cadena: 'hola' = "hola";

//const da extrictamente el valor ya que nunca puede cambiar 
//El tipo de la variable no es string si no 'hola'
const saludo = 'hola'

const permiso = true

type loginOperation = {
    op: 'login',
    username: string;
    password: string;
}

let loginData: loginOperation = {
    username: 'admin',
    password: '<PASSWORD>',
    op: 'login'
}

//------------------------------------------------------//





//---------------------UNION--------------------//

function convertir(valor: string | number) {
    if (typeof valor ==='string') {
        valor.trim();
    } else {
        valor.toFixed();
    }
    console.log(valor);
}

convertir(5);
convertir('hola');

type A = {
    uno: boolean;
    dos: boolean;
}

type B = {
    tres: boolean;
}

let valores: A | B = { tres: true }
let valores2: A | B = { uno: true, dos: true }

//------------------------------------------------------//




//---------------------CAMPOS DISCRIMINATES--------------------//

type OperacionSuma = {
    numero1: number,
    numero2: number,
    operacion: 'suma'
}

type OperacionMultiplicar = {
    numero1: number,
    numero2: number,
    operacion:'multiplicar'
}

type Operacion = OperacionMultiplicar | OperacionSuma

function operar(o: Operacion) {
    if (o.operacion === 'suma') {
        return o.numero1 + o.numero2;
    }else if (o.operacion === 'multiplicar') {
        return o.numero1 * o.numero2;
    }
}

//------------------------------------------------------//




//----------------------INTERSECCIONES---------------------------//

type Coordenada = [x: number, y: number]
type Vector = [x: number, y: number]

type Posisionable = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector
    aceleracion: Vector
}

type MovibleYPosicionable = Posisionable & Movible

let mover: MovibleYPosicionable = {
    posicion: [5, 5],
    velocidad: [3, 3],
    aceleracion: [1, 1]
}

//------------------------------------------------------//
