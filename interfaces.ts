
interface userData {
    username: string
    created_at?: Date
    superuser: boolean
    readonly personal: {
        name: string
        age: number
    }
    logout(): void
    rename: (username: string) => void
}

function login(): userData {
    return {
        username: "juan",
        created_at: new Date(),
        superuser: true,
        personal: {
            name: "juan",
            age: 21
        },
        logout: () => { },
        rename: (username) => {
            username.toUpperCase()
         }
    }
}

let data = login();

data.created_at && data.created_at.getDay()
data.created_at?.getHours()



interface shape {
    readonly sides: number
    area(): number
    perimeter(): number
}

function procces(s: shape) {

}

class Rectangulo implements shape {

    sides: number = 4

    constructor( readonly width: number, readonly height: number) {
    }

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return 2 * this.width + 2 * this.height
    }

}

let l = new Rectangulo(2,2);



interface Vehiculo {
    readonly fabricante: string
    arrancarMotor(): void
    pararMotor(): void
}

interface VehiculoTerrestre extends Vehiculo {
    conducir(): void
}

interface VehiculoAereo extends Vehiculo {
    volar(): void
}

class pruebaVehiculo implements VehiculoTerrestre {
    fabricante: string = "Mercedes"
    arrancarMotor(): void {
        console.log("Arrancando el motor")
    }
    pararMotor(): void {
        console.log("Parando el motor")
    }
    conducir(): void {
        console.log("Conduciendo")
    }
}

function procesar(v: Vehiculo) {
    v.arrancarMotor()
}

procesar(new pruebaVehiculo());

//----------------------Indices--------------------------//

let vector: number[] = []

vector[0]

type Account= {
    name: string;
    age: number;
}

let obj: Account = {
    name: "juan",
    age: 21
}

let x = obj['name']
let y = obj.name


//Se utiliza mas que todo para el tema de retornos
interface Indizable {
    [index: number]: string
}


let f: Indizable = {}

//sin importar el valor me retorna el tipo string
let k = f[2]

//-----------Hibridos---------------//

interface Comparador {
    (first: string, second: string): boolean
    existe: boolean
}

//Esto no permite la ejecucion sin el campo 'existe'
/*type Comparador = {
    (first: string, second: string) => boolean
    existe: boolean
}*/


function probar(c: Comparador) {
    //Algo que se puede llamar pero tambien tiene atributos
    c("juan", "juan")
    c.existe = true
}



//Diferencias entre interfaces y tipos

interface Z {
    aa: string
}

interface Z {
    bb: string
}

interface Z {
    cc: string
}

function usoInterface(z: Z) {
    z.aa
}
