function procesar(g) {
    if (g.lados === 3) {
        var triangulo = g;
        triangulo.lados;
    }
}
var coche = /** @class */ (function () {
    function coche() {
        this.fabricante = "Honda";
    }
    return coche;
}());
var coche1 = new coche();
//Es como un typeOf de tipo y no funciona con interfaces
console.log(coche1 instanceof coche);
function esUnTriangulo(x) {
    return x.base && x.altura;
}
var day = {
    dia: "martes"
};
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["lunes"] = 0] = "lunes";
    diasSemana[diasSemana["martes"] = 1] = "martes";
    diasSemana[diasSemana["miercoles"] = 2] = "miercoles";
    diasSemana[diasSemana["jueves"] = 3] = "jueves";
    diasSemana[diasSemana["viernes"] = 4] = "viernes";
    diasSemana[diasSemana["sabado"] = 5] = "sabado";
    diasSemana[diasSemana["domingo"] = 6] = "domingo";
})(diasSemana || (diasSemana = {}));
var cc = {
    dias: diasSemana.martes
};
