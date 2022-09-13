var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var dom = ['.com','.net','.org'];

var first = pronoun[Math.floor(Math.random() * pronoun.length)];
var second = adj[Math.floor(Math.random() * adj.length)];
var third = noun[Math.floor(Math.random() * noun.length)];
var fourth = dom[Math.floor(Math.random() * dom.length)];

var dominio = first + second + third + fourth;

console.log(dominio);

