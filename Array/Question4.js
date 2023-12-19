// const array=[21,22,12,23,24];
// console.log(array.reverse());


function reverseArr(input){
    var ret=new Array;
    for(var i=input.length-1;i>=0;i--){
        ret.push(input[i]);
    }
    return ret;
}
var a=[3,5,7];
var b=reverseArr(a);
console.log(b);