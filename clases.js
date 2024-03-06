var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Rectangulo.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            console.log("Seteo el nombre");
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "area", {
        //Por fuera es una funcion y por dentro es un atrivuto
        get: function () {
            return this.ancho * this.alto;
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo.prototype.perimetro = function () {
        return this.ancho * 2 + this.alto * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(10, 15);
r1.nombre = "A";
//Herencia
//Sirve para obligar afuera a llamar alguna clase, es decir que no sea solo un vehiculo si no un avion, barco etc.
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca) {
        this.marca = marca;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("El vehiculo se mueve");
    };
    Vehiculo.prototype.llevarAlTaller = function () {
        console.log("Llevar al taller...");
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(marca, tipo) {
        var _this = _super.call(this, marca) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        console.log("Run Run! ".concat(this.tipo));
        _super.prototype.moverse.call(this);
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log("Se esta revisando el manual de ".concat(this.marca));
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        console.log("Fiuuuuu");
        _super.prototype.moverse.call(this);
    };
    VehiculoAereo.prototype.reparar = function () {
        this.llevarAlTaller();
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoMaritimo.prototype.moverse = function () {
        console.log("Shhhhhhh");
        _super.prototype.moverse.call(this);
    };
    return VehiculoMaritimo;
}(Vehiculo));
var v1 = new VehiculoTerrestre("Yamaha", "moto");
v1.moverse();
