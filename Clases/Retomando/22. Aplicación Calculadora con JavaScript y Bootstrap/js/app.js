function sumar() {
  let operandoA = document.getElementById("numeroUno");
  let operandoB = document.getElementById("numeroDos");
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    resultado = "No es posible sumar";
  }
  document.getElementById("resultado").innerHTML = `Resultado : ${resultado}`;
}
