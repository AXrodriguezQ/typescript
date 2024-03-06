
interface Geometria {
    lados: number
    pintar(): void
}

interface Triangulo extends Geometria {
    base: number
    altura: number
}

interface Circulo extends Geometria {
    radio: number
}

function procesar(g:Geometria) {
    if (g.lados === 3) {
        let triangulo = g as Triangulo
        triangulo.lados
    }
}



class coche {
    fabricante: string = "Honda"
}

let coche1 = new coche()
//Es como un typeOf de tipo y no funciona con interfaces
console.log(coche1 instanceof coche);

function esUnTriangulo(x:any): x is Triangulo {
    return x.base && x.altura
}

//--------------enum------------------//

interface diaSemana {
    dia: "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo" ;
}

let day: diaSemana = {
    dia: "martes"
}

enum diasSemana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}

interface selectDia {
    dias: diasSemana
}

let cc: selectDia = {
    dias: diasSemana.martes
}

