function square(n){
    return n*n;
}
function cubes(n){
    return n*n*n;
}
function sumofSomething(a,b,callback){
    console.log(callback);
    let val1=callback(a);
    let val2=callback(b);
    return val1+val2;

}
const ans=sumofSomething(2,2,cubes);
console.log(ans);