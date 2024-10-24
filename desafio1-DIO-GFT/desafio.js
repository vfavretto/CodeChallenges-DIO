const herois = [
  { nome: "superVictor", xp: 10500 },
  { nome: "incrivelSenhor", xp: 2500 },
  { nome: "maravilhaMulher", xp: 5000 },
];

function classificarHeroi(nome, xp) {
  let nivel;

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

herois.forEach((heroi) => {
  console.log(classificarHeroi(heroi.nome, heroi.xp));
});
