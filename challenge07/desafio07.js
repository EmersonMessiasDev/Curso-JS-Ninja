/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 'emerson', 2, {namorada: 'brenda'}, function(){}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arg){
    arr.push(arg)
    return arr
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
let arr2 = ['messias','casa', 'trabalho']

addItem(arr2)

console.log(addItem())
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(`Ò segundo elemento do segundo array é ${arr[4][1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[4].length}`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
num =10
while(num <= 20){
    if( num % 2 == 0){
        console.log(num)
    }
    num++
}
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?
num =10
while(num <= 20){
    if( num % 2 != 0){
        console.log(num)
    }
    num++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/


console.log( 'Números pares entre 100 e 120:' );
for(count = 100; count <= 120; count++)
    if( count % 2 == 0){
        console.log(count)
    }

console.log( 'Números ímpares entre 111 e 125:' );
for(count = 111; count <= 125; count++)
    if( count % 2 != 0){
        console.log(count)
    }