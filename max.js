const a=[[0],[1,3],[9,11],[13,15,17]];
let max=0;
let i=0;
while (i<a.length){
    if (max<a[i].length){
        max=a[i].length
        c=a[i]
    }
    i++
}
console.log(max,c);