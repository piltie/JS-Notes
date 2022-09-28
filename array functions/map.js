/* map() -> usar quando for preciso ou mapear todos os elementos de um array pra outro conjunto de valores
-> não altera o array original
*/

const number = [ 1, 4, 5, 9, 14, 23]

// jeito 1: 
const doubledNumbers = numbers.map( function (elem) {
    return elem * 2
})

// jeito 2:
function doubleNumbers2(num) {
    return num * 2;
}

const doubledNumbers = numbers.map( doubleNumbers2 )

// jeito 3:
const doubledNumbers = numbers.map(elem => elem * 2)
