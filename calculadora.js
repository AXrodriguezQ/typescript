function sumar(a, b) {
    var suma = a + b;
    console.log("".concat(a, "+").concat(b, "=").concat(suma));
    return suma;
}
sumar(2, 3);
var restar = function (a, b) {
    var resta = a - b;
    console.log("".concat(a, "-").concat(b, "=").concat(resta));
    return resta;
};
restar(2, 3);
var multiplicar;
multiplicar = function (a, b) { return a * b; };
console.log(multiplicar(2, 3));
var dividir;
dividir = function (a, b, callback) { return callback(a / b); };
dividir(10, 2, function (r) { return console.log(r); });
