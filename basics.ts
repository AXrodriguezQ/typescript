
//Los parametros de la funcion por defecto tienen type any

function saludar ( name ) {
    console.log(`Hola ${name}`)
}

saludar("pepe")
saludar(2)


//Evitamos ese error dandole un type
function saludar2 ( name: string ) {
    console.log(`Hola ${name}`)
}

saludar2("pepe")
//saludar2(2)

function saludoEdad ( {name, age} ) {
    console.log(`Hola ${name}, tienes ${age}`)
}
//WTF 
saludoEdad({name: 2, age: "Hola"})

//Primera forma
function saludoEdad2 ( {name, age}: {name: string, age: number} ) {
    console.log(`Hola ${name}, tienes ${age}`)
}
//AHORA SIII
saludoEdad2({name: "hola", age: 2})

//Segunda forma
function saludoEdad3 ( persona: {name: string, age: number} ) {
    const {name, age} = persona;
    console.log(`Hola ${name}, tienes ${age}`)
}
//AHORA SIII
saludoEdad3({name: "hola", age: 2})

const sayHiFromFunction = (fnc) => {
    return fnc("Juan")
}

sayHiFromFunction((name) => {
    console.log(`Hola ${name}`)
})

//Tipar las arrow functions
const sumar = ( a:number, b:number ): number => {
    return a + b
}

const restar : ( a:number, b:number ) => number = ( a, b ) => {
    return a + b
}

//Never 

function throwError( msg:string): never {
    throw new Error(msg);
}

//Void

function logMessage( msg:string): void {
    console.log(msg)
    //return implicito <-- No va a devolver nada
}

//Alias

type Hero = {
    name:string
    age:number
    //Solo es de lectura
    readonly id?:number
    //Optional properties
    isActive?:boolean
}

let hero: Hero = {
    name: "Hero",
    age: 20
}

function createHero( hero: Hero ): Hero {
    const { name, age } = hero
    return { name, age }
}

const thor = createHero({ name: "Thorn", age: 20 })

thor.id?.toString() // <-- Si esta o no esta el dato
