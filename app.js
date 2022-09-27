var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var dom = ['.com','.net'];


var third = noun[Math.floor(Math.random() * noun.length)];
var fourth = dom[Math.floor(Math.random() * dom.length)];

for (let i = 0; i < pronoun.length; i++) {
    var first = pronoun[i];    
    for (let j = 0; j < adj.length; j++) {
        var second = adj[j];
    
        for (let k = 0; k < noun.length; k++) {
            var third = noun[k];
        
            for (let l = 0; l < dom.length; l++) {
                var fourth = dom[l];
                console.log(first + second + third + fourth);                         
            }
        }
    }                 
}










