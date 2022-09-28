// --------------------------- aula do site -------------------------------
let person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    get fullName() {
        // isso:
        return `${this.firstName} ${this.lastName}`; // preferível usar o this, pois não dá brecha para ambiguidade
        // também poderia ser escrito assim:
        //console.log(${person.firstName} ${person.lastName})
        // Já que a palavra-chave "this" é usada dentro do método fullName() e este método 
        // é definido no objeto "person", "this" terá o valor do objeto "person" porque este 
        // invocará showFullName()​.
    }
};

console.log(person.fullName);

//exemplo em jquery:
/*$( 'button' ).on( 'click', function( event ) {
    // $( this ) terá o valor do objeto "button" porque ele invoca o clique
    console.log ( $( this ).prop( 'name' ) );
} );*/

//######## no escopo global
//let firstName = 'Peter';
//let lastName  = 'Ally';
​//
//function showFullName () {
    // "this" dentro dessa função terá o valor do objeto "window" porque a função "showFullName"
    // é definida no escopo global, assim como "firstName" and "lastName​".
   // console.log( this.firstName + ' ' + this.lastName );
//}

​//showFullName();

//////////// existem alguns cenários nos quais this não tem o valor do objeto sendo invocado.

// --------------------------- aula do video -------------------------------
// method (function) references -> obj
// function (regular function, not part of an object) -> global (window, global)

// usar this em callback:

//jeito 1: se a função em questão permitir mais um parâmetro que seja um objeto, é só passar o this
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {

       this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this)
    }
}

video.showTags();

//jeito 2: declarar uma variável e atribuir this a ela
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const object = this;
       this.tags.forEach(function(tag) {
            console.log(object.title, tag);
        })
    }
}

video2.showTags();

//jeito 3: escrever a callback como uma função anônima
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
       this.tags.forEach((tag) => {
            console.log(this.title, tag);
        })
    }
}

video3.showTags();