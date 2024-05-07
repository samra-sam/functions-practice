function welcome() {
    console.log("Aasalam o alaikum \n");
}
welcome();
function intro() {
    var name = "samra";
    console.log(name, "\n");
}
intro();
function myintro() {
    var name = "samra";
    var name2 = "hameed";
    var age = 25;
    console.log("my name is ".concat(name, " ").concat(name2, "\n"));
    console.log("i'm ".concat(age, " years old \n"));
}
myintro();
function hello() {
    var sum = 2 + 3;
    console.log(sum, "\n");
}
hello();
function greet() {
    console.log("hellow");
    var name = "Bushra";
    return name;
}
var result = greet();
console.log(result, "\n");
function intoduction(firstname, middlename, lastname) {
    console.log("My name is ".concat(firstname, " ").concat(middlename, " ").concat(lastname, " \n"));
}
intoduction("Samra", "abdul", "hameed");
function hi(fno, sno) {
    console.log("my first number is ".concat(fno, " my second number is  ").concat(sno));
    var a = fno * sno;
    return a;
}
var answer = hi(2, 8);
console.log(answer, "\n");
function game(oneno, twono) {
    if (oneno === void 0) { oneno = 3; }
    //console.log(`Add numbers ${oneno} ${twono}`)
    var b = oneno + twono;
    return b;
}
var see = game(4, 9);
console.log(see, "\n");
function sum() {
}
var d = 4 + 2;
console.log(d, "\n");
function my(q1, q2) {
    console.log("Hi ".concat(q1, " ").concat(q2));
    var e = "Are u bzy? \n where are u?";
    return e;
}
var f = my("How are you? \n", "My name is Samra");
console.log(f);
