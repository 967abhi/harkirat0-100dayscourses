//Learning about the async and await 
function  kiratAsyncFunction(){
    let p=new Promise(function(resolve){
        resolve("Hi there");

    })
    return p;
}
async function main(){
    const value = await kiratAsyncFunction();
    console.log(value);

}
main();