const a=["python","list","exercises","practice","solution"];
const ram=[];
for (let i of a){
    x=a.length-1
    c="";
    while (x>=0){
        c+=i[x];
        console.log(i[x])
        x--
    }
    ram.push(c);
}
console.log(ram);