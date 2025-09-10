// console.log(num1); //undefined with var / can't access with let  
// console.log(num2); //undefined with var /can't access with let
// console.log(num3); //undefined with var /can't access with let

// console.log(x); not defined

x=5;
var num1=3;
var num2=2.9;
var num3=0xff;


var firstName="Tahany";
var middleName='Emad';
var lastName=`Mohamed`;

firstName = firstName.substring(0, 3) + "A" + firstName.substring(4);
// console.log(`my first name:${firstName}`);


var flag=true;

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof firstName);
// console.log(typeof middleName);
// console.log(typeof lastName);
// console.log(typeof flag);

// console.log("This is the External Javascript file");

// // array in table
// let students = ["Ahmed", "Mona", "Tahany", "Ali"];
// console.table(students);

// odd or even
var number=+prompt("enter number");
if(number%2==0){
    console.log("even");
}else{
    console.log("odd");
}
console.log("================");

// print num 1 to 10
for(var i=0;i<=10;i++){
    console.log(i);
}
console.log("================");


// number is –ve , +ve or zero
if(number>0){
    console.log("+ve");
}else if(number<0){
    console.log("-ve");
}else{
    console.log("zero");
}
console.log("================");


// multiplication table
for(var i=1;i<=12;i++){
    console.log(i*number);
}
console.log("================");


// 1 -> "Sunday", 2 ->"Monday", etc.)
switch(number){
    case 1: console.log("sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("friday"); break;
    case 7: console.log("Saterday"); break;
    default: console.log("invalid num"); break;

}
console.log("================");


// weekend or a weekday.
switch(number){
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: console.log("ًWeekday"); break;
    case 6: 
    case 7: console.log("Weekend"); break;
    default: console.log("invalid num"); break;

}