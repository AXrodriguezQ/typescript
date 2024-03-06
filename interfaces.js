var _a;
function login() {
    return {
        username: "juan",
        created_at: new Date(),
        superuser: true,
        personal: {
            name: "juan",
            age: 21
        },
        logout: function () { },
        rename: function (username) {
            username.toUpperCase();
        }
    };
}
var data = login();
data.created_at && data.created_at.getDay();
(_a = data.created_at) === null || _a === void 0 ? void 0 : _a.getHours();
function procces(s) {
}
var Rectangulo = /** @class */ (function () {
    function Rectangulo(width, height) {
        this.width = width;
        this.height = height;
        this.sides = 4;
    }
    Rectangulo.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangulo.prototype.perimeter = function () {
        return 2 * this.width + 2 * this.height;
    };
    return Rectangulo;
}());
var l = new Rectangulo(2, 2);
var pruebaVehiculo = /** @class */ (function () {
    function pruebaVehiculo() {
        this.fabricante = "Mercedes";
    }
    pruebaVehiculo.prototype.arrancarMotor = function () {
        console.log("Arrancando el motor");
    };
    pruebaVehiculo.prototype.pararMotor = function () {
        console.log("Parando el motor");
    };
    pruebaVehiculo.prototype.conducir = function () {
        console.log("Conduciendo");
    };
    return pruebaVehiculo;
}());
function procesar(v) {
    v.arrancarMotor();
}
procesar(new pruebaVehiculo());
//----------------------Indices--------------------------//
var vector = [];
vector[0];
var obj = {
    name: "juan",
    age: 21
};
var x = obj['name'];
var y = obj.name;
var f = {};
//sin importar el valor me retorna el tipo string
var k = f[2];
//Esto no permite la ejecucion sin el campo 'existe'
/*type Comparador = {
    (first: string, second: string) => boolean
    existe: boolean
}*/
function probar(c) {
    //Algo que se puede llamar pero tambien tiene atributos
    c("juan", "juan");
    c.existe = true;
}
function usoInterface(z) {
    z.aa;
}
