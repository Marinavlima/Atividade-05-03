var valorum = 5;
var valordois = 4;
var valortres = 7;
var valorquatro = 6;
var total;
total = valorum + valordois + valortres + valorquatro / 4;
console.log(total);
var media = total;
var faltas = 1;
if (media >= 7) {
  console.log("Aprovado")
} else if (media >= 5 && faltas < 2) {
  console.log("Recuperação");
} else {
  console.log("Reprovado")
}
