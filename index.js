function calcularPropina(monto, porcentaje) {
  return monto * (porcentaje / 100);
}

var montoCuenta = parseFloat(prompt("Escriba el monto total de la cuenta:"));
var porcentajePropina = parseFloat(prompt("Escriba el porcentaje de propina:"));

var montoPropina = calcularPropina(montoCuenta, porcentajePropina);

var totalPagar = montoCuenta + montoPropina;

console.log("-> Resumen de la Cuenta <-");
console.log("Monto de cuenta base: $" + montoCuenta);
console.log("Monto de propina (" + porcentajePropina + "%): $" + montoPropina);
console.log("Total a pagar: $" + totalPagar);
