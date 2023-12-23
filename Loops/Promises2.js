function kiratAsyncFunction(){
    let p=new Promise(function(resolve){
        setTimeout(resolve, 2000);
    });
    return p;
}
const value=kiratAsyncFunction();
value.then(function(){
    console.log("Hi there ");
})