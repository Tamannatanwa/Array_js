const a=[1,2,77,88,22,11];
let f=0;
let s=0;
let t=0;
for (let i of a){
    if (f<i){
        t=s
        s=f
        f=i
    }
    else if(s<i){
        t=s
        s=i
     }
     else if (t<i){
        t=i
     }
}
console.log(f,s,t);