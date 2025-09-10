// --------task1---------

// let msg=prompt("enter message");
// for(let i=1;i<=6;i++){
//     document.writeln(`<h${i}>${msg}</h${i}>`);
// }


// --------task2---------
// let num=+prompt("Enter num");
// let res=0;
// while(num!=0  && res<=100){
//     res += num;
//      num=+prompt("Enter num");
// }
// console.log(`sum : ${res}`);


// --------task3---------
// let num1 = +prompt("number 1");
// let num2 = +prompt("number 2");
// let num3 = +prompt("number 3");
// let operation = prompt("enter type of operation");

// function add(num1, num2, num3) {
//     return num1+num2+num3;
// }
// function multi(num1, num2, num3) {
//     return num1 * num2 * num3;
// }
// function divide(num1, num2, num3) {
//     if (num1 === 0 || num2 === 0 || num3 === 0) return "invalid";
//     return num1 / num2 / num3;
// }
// function operat(op, num1, num2, num3) {
//     if (op === "add") {
//         document.writeln(`<span style="color:red">The sum of 3 numbers</span>: ${num1}+${num2}+${num3} = ${add(num1, num2, num3)}`);
//     } else if (op === "multi") {
//         document.writeln(`<span style="color:red">The multi of 3 numbers</span> : ${num1}*${num2}*${num3} = ${multi(num1, num2, num3)}`);
//     } else if (op === "divide") {
//         document.writeln(`<span style="color:red">The divion of 3 numbers</span> : ${num1}/${num2}/${num3} = ${divide(num1, num2, num3)}`);
//     } else {
//         document.writeln("invalid operation");
//     }
// }

// operat(operation, num1, num2, num3);


// --------task4---------
// let arr = [1, 2, 3, 4, 5, 6];
// function tab(array) {
//     document.writeln(`<table border="1" style="border-collapse: collapse; text-align: center; width: 50%;">`);
//     let sum = 0;
//     document.writeln(`<tr style="background-color: lightgray;"><td>Values</td></tr>`);
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         if (i % 2 === 0) {
//             document.writeln(`<tr style="background-color: lightblue;"><td>${array[i]}</td></tr>`);
//         } else {
//             document.writeln(`<tr style="background-color: lightgreen;"><td>${array[i]}</td></tr>`);
//         }
//     }
//     document.writeln(`<tr style="background-color: yellow; font-weight: bold;">
//                         <td>Summations = ${sum}</td>
//                       </tr>`);
//     document.writeln("</table>");
// }

// tab(arr);

