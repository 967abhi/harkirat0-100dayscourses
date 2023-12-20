function findsum(n){
    let ans=0;
    for(let i=0; i<n;i++){
        ans=ans+i;
    }
    return ans;
}
function findsumTill100(){
    console.log(findsum(100));
}
function sysncSleep(){
    let a=0;
    for(let i=0; i<1000000000;i++){
        a++;
    }
    console.log(a);
}
setTimeout(sysncSleep,1000);
console.log("Hello world ");