type Producto = {
    nombre: string;
    precio: number;
    cantidad: number;
};

let productos: Producto[] = [
    { nombre: "Manzanas", precio: 1.5, cantidad: 10 },
    { nombre: "Naranjas", precio: 2.0, cantidad: 5 },
    { nombre: "Plátanos", precio: 1.2, cantidad: 8 }
];

function calcularTotalInventario(listaDeProductos: Producto[]): number {
    let granTotal: number = 0; // Nuestro carrito de compras empieza en cero

    // La máquina revisa uno por uno
    for (let articulo of listaDeProductos) {
        // Le sumamos al carrito el resultado de: precio x cantidad
        granTotal = granTotal + (articulo.precio * articulo.cantidad);
    }

    return granTotal;
}console.log(calcularTotalInventario(productos));