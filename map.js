const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')

console.log(items);

function f(a, b, c) {
    var S = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
  }
  f(1, 'a', true);
  //saida esperada: "1,a,true"

var A = function() { this.hey = function() { alert('from A') } };

console.log(A)

var A = [];
console.log(A.prototype) // undefined
A = function() {}
console.log(A.prototype) // {} // got created when function() {} was defined