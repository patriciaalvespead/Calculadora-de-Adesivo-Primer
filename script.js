function calcular() {

  let bitola = parseFloat(document.getElementById("bitola").value);
  let tubos = parseInt(document.getElementById("tubos").value);
  let conexoes = parseInt(document.getElementById("conexoes").value);

  let emendas = tubos > 0 ? tubos - 1 : 0;
  let juntas = emendas + conexoes;

  let rendimento;

  if (bitola <= 1) {
    rendimento = 50;
  } else if (bitola <= 2) {
    rendimento = 40;
  } else if (bitola <= 4) {
    rendimento = 25;
  } else {
    rendimento = 15;
  }

  let adesivo = Math.ceil(juntas / rendimento);
  let primer = adesivo;

  document.getElementById("resultado").innerHTML =
    "Juntas: " + juntas +
    "<br>Adesivo: " + adesivo + " latas" +
    "<br>Primer: " + primer + " latas";
}