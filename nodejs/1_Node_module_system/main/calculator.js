function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function multi(a,b){
    console.log(a*b)
}

function divide(a,b){
    console.log(a/b)
}

function mod(a,b){
    console.log(a%b)
}
module.exports = {
    addition : add,
    substract : sub,
    multiplication : multi,
    division: divide,
    modulus : mod
}