// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function etapa1(x,y){
    return x + y
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var etapa2 = etapa1(5,5) + 5 

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var etapa3

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function etapa4(x){
    etapa3 = x

    return 'o novo valor da variavel é: ' + etapa3
}

// Invoque a função criada acima.
console.log(etapa4(23))

// Qual o retorno da função? (Use comentários de bloco).
//? o novo valor da variavel é: 23
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function etapa5(x,y,z){
    if (x == null || y == null || z == null){
        resultado =  'Preencha todos os valores corretamente!'
    } else {
        resultado = x * y * z + 2
    }
    return resultado
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(etapa5(10,5))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//? Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(etapa5(10,5,10))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//? 502

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function etapa6(x,y,z){
    if (y == null && z == null){
        resultado = x
    }else if ( z == null){
        resultado = x + y
    }else if ( x != null && y != null && z != null){
        resultado = (x + y) / z
    }else if (x === undefined && y === undefined && z === undefined ){
        resultado = 'false'
    }else {
        resultado = 'null'
    }
    return resultado
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(etapa6())