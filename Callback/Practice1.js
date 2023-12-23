function sqaure(n){
    return n*n;
}
function cubes(n){
    return n*n*n;
}
function quad(n){
    return n*n*n*n;

}
function sumofsquare(a,b,fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 +square2;
    
}
let ans=sumofsquare(1,2,cubes);
console.log(ans);