
interface respuesta <Tdato,Udato> {
    type: string;
    success: boolean;
    message: Tdato;
    relleno?: Udato;
}

let primera: respuesta < boolean, string > = {
    type: "hola",
    success: false,
    message: true
}

let segunda: respuesta < string, object > = {
    type: "hola",
    success: false,
    message: "true"
}


type Nota = { mensaje: string }
type Foto =  { url: string }
type Video = Foto & { type:"video", duracion: number }


function subir <Publicacion>(p: Publicacion): Publicacion {
    return p
}

let post: Nota = { mensaje: "Hola mundo" }
let x = subir(post)
