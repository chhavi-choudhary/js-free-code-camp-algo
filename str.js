const strReverse=(str)=>{
    return str.split("").reverse().join('');
}
console.log(strReverse("intelligent"));

const stringReverse=(string)=>{
    let rString="";
    for(let i=string.length-1;i>=0;i--){
        rString+=string[i];
    }
    return rString;
}
console.log(stringReverse("positive energy"));
console.log(stringReverse("intelligent"));