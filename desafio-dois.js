// Declarando as variáveis
let vitorias = 100;
let derrotas = 17;
let nivel = "";

// Calculando o saldo de vitórias
function ved(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Armazenando o saldo de vitórias
let saldoVitorias = ved(vitorias, derrotas);

// Determinando o nível do herói com base no saldo de vitórias
if (saldoVitorias < 10)
    nivel = "Ferro";
else if (saldoVitorias > 10 && saldoVitorias <= 20)
    nivel = "Bronze";
else if (saldoVitorias > 20 && saldoVitorias <= 50)
    nivel = "Prata";
else if (saldoVitorias > 50 && saldoVitorias <= 80)
    nivel = "Ouro";
else if (saldoVitorias > 80 && saldoVitorias <= 90)
    nivel = "Diamante";
else if (saldoVitorias > 90 && saldoVitorias <= 100)
    nivel = "Lendário";
else if (saldoVitorias > 100)
    nivel = "Imortal";

// Saída
console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + nivel);