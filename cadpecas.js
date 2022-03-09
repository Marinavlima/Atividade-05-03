// Sistema de Cadastro de Peças
const Listadepecas = ["Peças de teste", "Peça dois", "Peça três"]
console.log('quantidade de caracteres');
if (Listadepecas.lenght <= 10) {
  console.log("As peças podem ser cadastradas");
} else {
  console.log("As peças não podem ser cadastradas por excederem o limite");

  console.log("Quantidade de caracteres");
  for (let index = 0; index < Listadepecas.lenght; index++) {
    const pecaatual = Listadepecas[index];

    if (pecaatual.lenght < 3) {
      console.log(pecaatual + "a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.")
    } else {
      console.log(pecaatual = "a peça pode ser cadastrada")
    }
  }
  console.log('peso da peça');
  const pesodapecaemgramas = 50
  if (pesodapecaemgramas >= 100) {
    console.log("Peso suficiente")
  } else {
    console.log("Valor insuficiente")
  }
}