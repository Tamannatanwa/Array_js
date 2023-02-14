const x=[["g","f","g"],["i","s"],["b","e","s","t"]];
let t="";
for (let j of x){
    for (let i of j){
        t+=i;
    }
}
console.log(t);