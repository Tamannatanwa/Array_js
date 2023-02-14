// const a=[1,2,3,4,5,6];
// for (let i=0;i<a.length;i++){
//     console.log(a[i]);
// }


// const ram=[];
// ram[0]="tamanna";
// ram[1]="priya";
// ram[2]="tani";
// ram[3]="tamo";
// ram[4]="aniket";
// console.log(ram)


// const geek=new Array();
// geek[0]="ram";
// geek[1]="tamanna";
// console.log(geek);


// const a=geek.length;
// console.log(a);



// const geek=new Array();
// geek[0]="ram";
// geek[1]="tamanna";
// const a=geek.length;
// console.log(geek[0]);
// console.log(geek[a-1]);


// const fruits=["banana","orange","apple","mango"];
// let text="";
// fruits.forEach(myfunction);
// text+="";
// function myfunction(value) {
//     text+=value
//     text+=" ";
// }
// console.log(text);



// const fruits=["banana","orange","apple"];
// fruits.push("cherry");
// console.log(fruits);



// const fruits=["banana","apple"];
// fruits[2]="tanu";
// console.log(fruits);


// const a=["kook","mom","hello","ramram"];
// let i=0;
// let d=a.length;
// while (i<a.length){
//     geek=a[i].reverse();
//     console.log(geek);
//     if (geek==a[i]){
//         console.log(a[i],"it is polindrom");
//     }
//     else{
//         console.log(a[i],"not polindrom");
//     }
//     i++
// }


// var arr = [[2,3],[5,6]];
// for (let i=0;i<arr.length;i++){
//     v=arr[i].reverse();
//     console.log(v);
// }


// function ReverseString(str) {
//     if(!str || str.length < 2 ||
//             typeof str!== 'string') {
//         return 'Not valid';
//     }
//     const revArray = [];
//     const length = str.length - 1;
//     for(let i = length; i >= 0; i--) {
//         revArray.push(str[i]);
//     }
//     return revArray.join('');
// }
  
// console.log(ReverseString("Geeks for Geeks"))



// var a=[1,2,3,4,5];
// var a=a.shift();
// console.log(a);


// const a=[1,2,3,45];
// delete a[0];
// console.log(a)

// const ar=[1,2,3,4,5];
// const b=[6,7,8,9,10];
// const c=[11,12,13,14,15]
// const demo=ar.concat(b,c);
// console.log(demo);


// const a=["hello"];
// const b=a.concat("poterl");
// console.log(b)


// const a=["jack","tom"];
// a.splice(2,0,"herry");
// console.log(a);



// const a=["jack","tom"];
// a.splice(0,1);
// console.log(a);



// const a=["jack","tom"];
// const b=a.slice(1);
// console.log(b);



// const a=[2,3,1,5,7];
// a.sort()
// console.log(a);





// const a=[2,3,1,5,7];
// const b=a.max;
// // a.sort()
// // a.reverse()
// console.log(b);




// const a=[2,3,1,5,7];
// a.sort(function(){
//     return 0.5-Math.random();
// })
// console.log(a);





// const a=[2,3,1,5,7];
// a.sort(function(a,b){
//     return a-b;
// })
// console.log(a);



// const a=[2,3,1,5,7];
// a.sort(function(a,b){
//     return a-b;
// })
// console.log(a);


// const arr=[1,2,23,43,56,65];
// function myarr(arr){
//     return Math.max.apply(null,arr);
// }
// console.log(arr);



// const a=[2,3,1,5,7];
// const b=a.map(myarr);
// function myarr(value){
//     console.log(value*2)
// }




// const a=[2,3,1,5,7];
// const b=a.map(myarr);
// function myarr(value){
//     if (value>5){
//         console.log(value)
//     }
// }



// const a=[2,3,1,5,7];
// const b=a.reduce(myarr);
// function myarr(total,value){
//     console.log(total+value);
// }



// let a=["hii","byy"];
// let b=a.includes("hii");
// console.log(b);


// let a=["hii","hello","byy","lalntop"];
// let b=a.entries();
// for (let x of b){
//     console.log(x);
// }


// const a=["hii","hello","namaste","tata"];
// const b=a.keys();
// text=0
// for (let x of b){
//     console.log(x);
//     text+=x
// }
// console.log(text);


// let b=Array.from("ABCDEFG");
// console.log(b);


// let b=Array.from("1234565");
// console.log(b);


// const a=[1,2,3,4,5,66];

// const x=["flour","cheese","carrots"];
// let j=0;
// for (let i of x){
//     console.log(j,i)
//     j++
// }


// console.log(Math.max(1, 3, 2));

// const a=[808,1,2,22,4,77,99];
// for (let i of a){
//     var b=Math.max(i);
// }
// console.log(b);
