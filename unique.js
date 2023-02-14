const a=[1,2,2,5,8,4,4,8];
const b=[];
for (let i of a){
    if ((b.indexOf(i))==-1){
        b.push(i)
    }
}
console.log(b);