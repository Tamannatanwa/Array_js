const list=[6,1,3,5,6,3,1];
const b=[];
let sum1=1;
for (let i of list){
    if (b.indexOf(i)==-1){
        b.push(i)
        sum1*=i
    }
}
console.log(sum1);

// let arr = ["scale", "happy", "strength",
//             "peace", "happy", "happy"];
 
//     function removeDuplicates(arr) {
//         let unique = [];
//         for(i=0; i < arr.length; i++){ 
//             if(unique.indexOf(arr[i]) === -1) { 
//                 unique.push(arr[i]); 
//             } 
//         }
//         return unique;
//     }
 
//     console.log(removeDuplicates(arr));