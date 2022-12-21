// Desafio da semana #4
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
 let isTruthy = function(x){
    return !!x
 }
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(NaN))
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy('emerson'))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(function(){}))
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
//? let carro = new Object()
 let carro = {
    marca: 'renault',
    modelo: 'kwid',
    placa: 'pch4769',
    ano : 2020,
    cor:'branco',
    quatasPortas: 4,
    assentos: 5,
    quatidadePessoas: 0
 }
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
let mudarCor = function(cor){
    carro.cor = cor
}
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
let obterCor = function(){
    return carro.cor
}
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
let obterModelo = function(){
    return carro.modelo
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
 let obterMarca = function(){
    return carro.marca
 }
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
 let obterMarcaModelo = function(){
    return `Esse carro é um ${carro.marca} ${carro.modelo}`
 }
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

let adicionarPessoas = function(x){
    let assentosDisponiveis =carro.assentos - carro.quatidadePessoas
    if (x > assentosDisponiveis){
        if(carro.assentos - carro.quatidadePessoas == 0){
            return 'O carro esta lotado'
        }else{
            return `Só cabem mais ${carro.assentos -carro.quatidadePessoas} ${carro.assentos - carro.quatidadePessoas > 1? 'pessoas': 'pessoa'}!`
        }
    }else{
        carro.quatidadePessoas += x
    }
}
 

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro 
*/
 console.log(obterCor()) //? branco

// Mude a cor do carro para vermelho.
 mudarCor('vermelho')

// E agora, qual a cor do carro 
console.log(obterCor()) //? vermelho

// Mude a cor do carro para verde musgo.
mudarCor('verde musgo')

// E agora, qual a cor do carro 
console.log(obterCor()) //? verde musgo

// Qual a marca e modelo do carro 
 console.log(obterMarca())

// Adicione 2 pessoas no carro.
 adicionarPessoas(2)

// Adicione mais 4 pessoas no carro.
 adicionarPessoas(4)

// Faça o carro encher.
 adicionarPessoas(3)


// Tire 4 pessoas do carro.
 adicionarPessoas(-4)

// Adicione 10 pessoas no carro.
adicionarPessoas(10)

// Quantas pessoas temos no carro 
 //? 1
