var d=new Promise(function(resolve){
    setTimeout(() => {
        
        resolve(" Foo");
    }, 1000);
});
function callback(){
    console.log(d);
}
console.log(d);
d.then(callback);