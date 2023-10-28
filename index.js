// Solicita ao usuário o nome do herói
var nome = prompt("Digite o nome do herói:");

// Solicita ao usuário a quantidade de experiência (XP) do herói
var xp = parseFloat(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Inicializa a variável nível com um valor padrão
var nivel = "Ferro";

// Utilize uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP
if (xp >= 1000 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp > 2000 && xp <= 5000) {
  nivel = "Prata";
} else if (xp > 6000 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
  nivel = "Platina";
} else if (xp > 8000 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
  nivel = "Imortal";
} else if (xp > 10000) {
  nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
