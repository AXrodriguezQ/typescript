"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumarTotal(productos) {
    var precio = 0;
    for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
        var producto = productos_1[_i];
        precio += producto.precio;
    }
    return precio;
}
