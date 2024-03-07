
export default function getProducto () {

    type producto = {
        nombre: string,
        precio: number
    }

    let producto1: producto = {
        nombre: "papas",
        precio: 3000
    }

    console.log("Aqui esta el producto");
    console.log(producto1);
}