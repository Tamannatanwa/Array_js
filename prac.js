var ages=[10,13,15,18,20];
console.log(ages);
var b=ages.some(checkAdult);
console.log(b);
function checkAdult(age){
    return age>=18
}