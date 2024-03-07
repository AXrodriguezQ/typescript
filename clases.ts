
class Rectangulo {
    //Privado, no usable fuera de la clase
    private readonly ancho: number;
    //Inmuable, el valor inicial es el que se le queda siempre
    private readonly alto: number;
    private _nombre: string;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value: string) {
        console.log("Seteo el nombre");
        this._nombre = value;
    }

    //Por fuera es una funcion y por dentro es un atrivuto
    get area() {
        return this.ancho * this.alto;
    }

    perimetro() {
        return this.ancho * 2 +  this.alto * 2;
    }
}

let r1 = new Rectangulo(10,15);
r1.nombre = "A"


//Herencia

//Sirve para obligar afuera a llamar alguna clase, es decir que no sea solo un vehiculo si no un avion, barco etc.
abstract class Vehiculo {

    //Sirve para que sea privada fuera de la clase, pero modificable para sus hererderos
    protected marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    moverse() {
        console.log("El vehiculo se mueve");
    }

    protected llevarAlTaller() {
        console.log("Llevar al taller...");
    }

}

class VehiculoTerrestre extends Vehiculo {

    tipo: string

    constructor(marca: string, tipo: string) {
        super(marca);
        this.tipo = tipo;
    }

    moverse() {
        console.log(`Run Run! ${this.tipo}`);
        super.moverse();
    }

    reparar() {
        console.log(`Se esta revisando el manual de ${this.marca}`);
    }

}

class VehiculoAereo extends Vehiculo {

    moverse() {
        console.log("Fiuuuuu");
        super.moverse();
    }

    reparar() {
        this.llevarAlTaller();
    }

}

class VehiculoMaritimo extends Vehiculo {

    moverse() {
        console.log("Shhhhhhh");
        super.moverse();
    }

}

let v1: Vehiculo = new VehiculoTerrestre("Yamaha", "moto");
v1.moverse();
