// 55. Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
// encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
// elemento minimax, mostrando também sua posição.

let matriz = [];
let maior = 0; menor = 0; pos = 0; linha = 0;


for(i = 0; i < 10; i++) {
    let itens = [];
    for(j = 0; j < 10; j++) {
        itens.push(Math.floor(Math.random() * 500));
    }
    matriz.push(itens);
}   

for(let i = 0; i < matriz.length; i++) {
  for(let j = 0; j < matriz[i].length; j++) {

    if(maior < matriz[i][j]){
      maior = matriz[i][j];
      linha = i
      menor = matriz[i][j];
    }

    for(let k = 0; k < matriz[linha].length; k++) {
      if(matriz[linha][k] < menor) {
        menor = matriz[linha][k];
        pos = k;
      }    
    }   
  } 
}

console.table(matriz);
console.log(`O maior número da matriz é: ${maior}.`)
console.log(`O minimax é: ${menor}.`);
console.log(`Posição de ${menor} na matriz: (${linha}, ${pos}).`)














   



