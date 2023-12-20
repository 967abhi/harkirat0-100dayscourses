//Finds the square of the input 
function square(n){
    return n*n;
}
//find sum of the square of the inputs
function sumofSquare(a,b){
    const val1=square(a);
    const val2=square(b);
    return val1+val2;

}
console.log(sumofSquare(1,2))