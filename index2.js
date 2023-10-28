// Solicita ao usuário o nome do herói
var nome = prompt("Digite o nome do herói:");

// Solicita ao usuário a quantidade de experiência (XP) do herói
var xp = parseFloat(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Inicializa a variável de nível com um valor padrão
var nivel = "Desconhecido";

// Utilize uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP
if (!isNaN(xp)) {
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
}

// Exibe a mensagem com o nome e o nível do herói
alert("O Herói de nome " + nome + " está no nível de " + nivel);
