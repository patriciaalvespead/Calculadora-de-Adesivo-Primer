function calcular() {

  function calcularLinha(bitola, ml) {
    if (!ml || ml <= 0) return 0;

    let barras = Math.ceil(ml / 6);
    let juntas = barras > 0 ? barras - 1 : 0;

    let rendimento;

    if (bitola <= 32) {
      rendimento = 50;
    } else if (bitola <= 60) {
      rendimento = 40;
    } else if (bitola <= 110) {
      rendimento = 25;
    } else {
      rendimento = 15;
    }

    return juntas / rendimento;
  }

  let b1 = parseFloat(document.getElementById("bitola1").value);
  let ml1 = parseFloat(document.getElementById("ml1").value);

  let b2 = parseFloat(document.getElementById("bitola2").value);
  let ml2 = parseFloat(document.getElementById("ml2").value);

  let consumoTotal =
    calcularLinha(b1, ml1) +
    calcularLinha(b2, ml2);

  let adesivo = Math.ceil(consumoTotal * 1.3); // margem de segurança
  let primer = adesivo;

  document.getElementById("resultado").innerHTML =
    "🧴 Adesivo: " + adesivo + " latas<br>" +
    "🧪 Primer: " + primer + " latas";
}