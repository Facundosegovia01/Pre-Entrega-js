

// Función principal para interactuar con el usuario
function main() {
    let continuar = true;

    while (continuar) {
        // Solicitar al usuario que ingrese los datos
        const monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (sin %):"));
        const numCuotas = parseInt(prompt("Ingrese el número de cuotas:"));

        if (isNaN(monto) || isNaN(tasaInteresAnual) || isNaN(numCuotas) || numCuotas <= 0) {
            alert("Por favor, ingrese valores numéricos válidos.");
            continue;
        }

        // Calcular el pago mensual
        const pagoMensual = calcularPagoMensual(monto, tasaInteresAnual, numCuotas);
        
        alert(`El pago mensual es: ${pagoMensual.toFixed(2)}`);

        // Preguntar si el usuario quiere calcular otro pago
        continuar = confirm("¿Desea calcular el pago de otro préstamo?");
    }
}

// calcular
function calcularPagoMensual(monto, tasaInteresAnual, numCuotas) {
    const tasaInteresMensual = tasaInteresAnual / 12 / 100;
    const pagoMensual = monto * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -numCuotas));
    return pagoMensual;
}
// Ejecutar la función principal
main();

