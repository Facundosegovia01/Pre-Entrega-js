
class guardados {
    constructor(monto, tasaInteresAnual, numCuotas, pagoMensual) {
        this.monto = monto;
        this.tasaInteresAnual = tasaInteresAnual;
        this.numCuotas = numCuotas;
        this.pagoMensual = pagoMensual;
    }
}
function main() {
    let continuar = true;
    let prestamos = [];  // Array para almacenar los préstamos

    while (continuar) {
        // Solicitar al usuario que ingrese los datos
        const monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (sin %):"));
        const numCuotas = parseInt(prompt("Ingrese el número de cuotas:"));

        // Verificar que los datos sean numéricos
        if (isNaN(monto) || isNaN(tasaInteresAnual) || isNaN(numCuotas) || numCuotas <= 0) {
            alert("Por favor, ingrese valores numéricos válidos.");
            continue;
        }

        // Calcular el pago mensual
        const pagoMensual = calcularPagoMensual(monto, tasaInteresAnual, numCuotas);
        
        alert(`El pago mensual es: ${pagoMensual.toFixed(2)}`);

        // Guardar los datos del préstamo en el array usando la clase Prestamo
        prestamos.push(new guardados (monto, tasaInteresAnual, numCuotas, pagoMensual.toFixed(2)))

        // Preguntar si el usuario quiere calcular otro pago
        continuar = confirm("¿Desea calcular el pago de otro préstamo?");
    }

    // Mostrar todos los préstamos calculados
    alert("Préstamos calculados:");
    prestamos.forEach((prestamo, index) => {
        alert(`Préstamo ${index + 1}: Monto = ${prestamo.monto}, Tasa de Interés Anual = ${prestamo.tasaInteresAnual}%, Número de Cuotas = ${prestamo.numCuotas}, Pago Mensual = ${prestamo.pagoMensual}`);
    });
}

// Función para calcular el pago mensual
function calcularPagoMensual(monto, tasaInteresAnual, numCuotas) {
    const tasaInteresMensual = tasaInteresAnual / 12 / 100;
    const pagoMensual = monto * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -numCuotas));
    return pagoMensual;
}

// Ejecutar la función principal
main();