// write the program that prints all the male people firstname given a complex object 
// const personArray=["Abhishek","abhinav","riya "];
// const genderArray=["male","male","female"];


// for(let i=0;i<personArray.length;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }
// ============Object ==================
// const user1={
//     Firstname:"Abhishek",
//     gender:"male"
// }
//  =====ArrayofObject=================
const allUsers=[{
    Firstname:"Abhishek",
    gender:"male"
},{
    Firstname:"Harkirat",
    gender:" male"
},{
    Firstname:"priya",
    gender:"female"
}]
for(let i=0; i<allUsers.length;i++){
     if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["Firstname"])

     }
}