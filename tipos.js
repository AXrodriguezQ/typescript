//---------------------ALIAS--------------------//
//Es lo mismo!
var normal = 5;
var anormal = 5;
function login(data) {
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
});
login({
    username: "juan",
    password: "<PASSWORD>",
    remember: true
});
//------------------------------------------------------//
//---------------------LITERALES--------------------//
//De esta manera tenemos que dar el msimo tipo de dato a lo que vale la variable
var verdadero = true;
var numero = 5;
var cadena = "hola";
//const da extrictamente el valor ya que nunca puede cambiar 
//El tipo de la variable no es string si no 'hola'
var saludo = 'hola';
var permiso = true;
var loginData = {
    username: 'admin',
    password: '<PASSWORD>',
    op: 'login'
};
//------------------------------------------------------//
//---------------------UNION--------------------//
function convertir(valor) {
    if (typeof valor === 'string') {
        valor.trim();
    }
    else {
        valor.toFixed();
    }
    console.log(valor);
}
convertir(5);
convertir('hola');
var valores = { tres: true };
var valores2 = { uno: true, dos: true };
function operar(o) {
    if (o.operacion === 'suma') {
        return o.numero1 + o.numero2;
    }
    else if (o.operacion === 'multiplicar') {
        return o.numero1 * o.numero2;
    }
}
var mover = {
    posicion: [5, 5],
    velocidad: [3, 3],
    aceleracion: [1, 1]
};
//------------------------------------------------------//
