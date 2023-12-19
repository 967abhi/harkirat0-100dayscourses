const array=[25,26,36,25,41];
let max = array[0];
for (let i=1; i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
    console.log(max);
}