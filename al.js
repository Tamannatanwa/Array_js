const a=["a","b","A","S","T","R","r","t"];
for (let x of a){
    if (x>="A" && x<="Z"){
        console.log(x,"upper case")
    }
    else{
        console.log(x,"lower case")
    }
}