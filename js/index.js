
// El usuario debera ingresar los items (1 o 2), mas las unidades que desee  para que finalizar la compra tendrá que ingresar "salir" y obtendrá el monto final


function calcularCostoTotal() {
    // productos y sus precios
    const productos = {
        "1": { nombre: "Refill VOL.2: Restauración", precio: 1000 },
        "2": { nombre: "Refill Defensa AM/PM", precio: 2000 },
    };

    let total = 0;
    let continuar = true;

    while (continuar) {
        console.log("Selecciona un producto:");
        for (const clave in productos) {
            const { nombre, precio } = productos[clave];
            console.log(`${clave}. ${nombre} - $${precio.toFixed(2)}`);
        }

        const seleccion = prompt("Ingresa el item  del producto (o 'salir' para terminar):");

        if (seleccion.toLowerCase() === 'salir') {
            continuar = false;
            break;
        }

        if (productos[seleccion]) {
            const cantidad = parseInt(prompt("¿Cuántas unidades deseas?:"), 10);
            if (!isNaN(cantidad) && cantidad > 0) {
                const { nombre, precio } = productos[seleccion];
                total += precio * cantidad;
                console.log(`Agregaste ${cantidad} ${nombre}(s) al carrito. Costo total actual: $${total.toFixed(2)}`);
            } else {
                console.log("Cantidad inválida. Intenta de nuevo.");
            }
        } else {
            console.log("Selección inválida. Intenta de nuevo.");
        }
    }

    console.log(`Costo total final: $${total.toFixed(2)}`);
}

// Llamar a la función
calcularCostoTotal();
