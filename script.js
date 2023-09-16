// Inicializar un objeto JSON para acumular el IVA
const ivaAcumulado = {
    '5%': 0,
    '10%': 0
};

// Variable para llevar un registro del total acumulado de impuestos
let totalImpuestos = 0;

// ... (código anterior) ...

function calcularIVA() {
    const precioInput = document.getElementById('precio');
    const precioTexto = precioInput.value.trim(); // Obtener el valor del campo de entrada

    // Validar que el precio sea un número válido
    if (precioTexto === '') {
        alert('Por favor, ingrese un precio.');
        return;
    }

    const precio = parseFloat(precioTexto);

    if (isNaN(precio)) {
        alert('Por favor, ingrese un precio válido.');
        return;
    }

    const impuesto = parseFloat(document.getElementById('impuesto').value);
    let iva = 0;

    // Calcular el IVA según la tasa seleccionada
    if (!isNaN(impuesto)) {
        if (impuesto === 5) {
            iva = precio / 21;
        } else if (impuesto === 10) {
            iva = precio / 11;
        }

        // Acumular el IVA en el objeto JSON
        ivaAcumulado[`${impuesto}%`] += iva;

        // Mostrar el IVA a pagar y el acumulado en la página
        document.getElementById('iva-pagar').textContent = iva.toFixed(2);
        document.getElementById('iva-5').textContent = ivaAcumulado['5%'].toFixed(2);
        document.getElementById('iva-10').textContent = ivaAcumulado['10%'].toFixed(2);

        // Actualizar el total de impuestos acumulados
        totalImpuestos += iva;

        // Limpiar el campo de entrada después de calcular el IVA
        precioInput.value = '';
    } else {
        alert('Por favor, seleccione un impuesto.');
    }
}

function finalizar() {
    // Mostrar el total acumulado de impuestos
    document.getElementById('total-impuestos').textContent = totalImpuestos.toFixed(2);
}
