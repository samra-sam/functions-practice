//practice

function welcome(){
    console.log("Aasalam o alaikum \n");
}
welcome();




function intro(){
    let name = "samra"
    console.log(name , "\n")
}
intro();




function myintro(){
    let name = "samra";
    let name2 = "hameed";
    let age = 25;
    console.log(`my name is ${name} ${name2}\n`);
    console.log(`i'm ${age} years old \n`);
}
myintro();




function hello(){
    let sum = 2+3;
    console.log(sum , "\n");
}
hello();





function greet(){ 
    console.log("hellow")
    let name = "Bushra";
    return name;
}
let result = greet();
console.log(result , "\n");




function intoduction(firstname:string , middlename:string , lastname:string){
console.log(`My name is ${firstname} ${middlename} ${lastname} \n`)
}
intoduction("Samra" , "abdul" , "hameed");



function hi(fno:number, sno:number){
console.log(`my first number is ${fno} my second number is  ${sno}`)
let a = fno * sno
return a;
}
let answer = hi(2 , 8);
console.log(answer , "\n");





function game(oneno:number = 3, twono:number ){
//console.log(`Add numbers ${oneno} ${twono}`)
let b = oneno + twono
return b;
}
let see = game(4 , 9)
console.log(see , "\n");



function sum(){
}
let d = 4 + 2
console.log(d ,"\n");





function my(q1:string , q2:string){
    console.log(`Hi ${q1} ${q2}`) 
    let e = "Are u bzy? \n where are u?"
    return e;

}
 let f = my("How are you? \n" , "My name is Samra")
 console.log(f);
 
 