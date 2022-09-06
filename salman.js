let x=[1,[2,3],[7,[4,8]]]
let y=[...x];    
console.log(y)
let z=[...y[2]]  
let c=[...z[1]]  
console.log(c)

let mobile={Tecno:{Spark6:{ram:21,price:9982},Saprk3:{ram:19,price:8221}}}
let a={...mobile} 
console.log(a)
let {Tecno:{Spark6:{...rem}}}=mobile  
console.log(rem)