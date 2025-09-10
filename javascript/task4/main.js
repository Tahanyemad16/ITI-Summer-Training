// -----------------------task on session-----------------------------
// let str=prompt("enter string");
// const convert=function(str){
//     let str2='';
//     for(let c of str){
//         if(c==c.toLowerCase()){
//             str2+=c.toUpperCase();
//         }else{
//             str2+=c.toLowerCase();
//         }
//     }
//     return str2;
// }
// console.log(convert(str));
// ------------------------------------------------------------------


// ===================================task1======================================
// let str=prompt("Enter collections of names");//ali mohammed ahmed sama tahany
// let arr=str.split(' ');

// const rand=function(arr){
//  let fIndex = Math.floor(Math.random()*arr.length);
//   let sIndex;
//   do {
//     sIndex = Math.floor(Math.random()*arr.length);
//   } while (sIndex === fIndex);

//   let res=[];
//   res.push(arr[fIndex]);
//   res.push(arr[sIndex]);
//   return res;
// }

// if (arr.length < 2) {
//   alert("You must enter 2 names!");
// } else {
//   console.log(rand(arr));
// }

// =====================================task2==================================
// ----number 1-----
// let str = prompt("enter full name");
// let arr = str.split(' ');

// const up=function(arr) {
//   for (let i in arr) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return arr;
// }

// console.log(up(arr).join(' '));



//---- number 2----
// let str = prompt("enter sentence");
// let arr = str.split(' ');
// const long=function(arr){
//     let longest=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//         longest = arr[i];
//         }
//     }   
//      return longest;
// }
// console.log(long(arr));


//---- number 3----
// let str=prompt("enter string");
// let arr = str.split('');
// function alpha(arr){
//     arr.sort();
//     console.log(arr.join(''));
// }
// alpha(arr);


//---- number 4----
// let d=new Date('2025-9-11');

// const getName=function(date) {
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   return months[date.getMonth()];
// }

// console.log(getName(d));



//---- number 5 ------
// let r=+prompt("enter radius");
// const  area=function(r){
//     let res=Math.PI*Math.pow(r,2);
//     return res;
// }
// console.log(area(r));



// =====================================task3==================================

let size = +prompt("Enter the size of the array:");
let arr = [];
for (let i = 0; i < size; i++) {
  let num = +prompt(`Enter number ${i + 1}:`);
  arr.push(num);
}

const even=function(arr){
    let arr2=arr.filter(k=>k%2===0);
    if(arr2.length==0) alert("Array doesn't contain even numbers");
    return arr2;
}

const remainder=function(arr,num){
    let arr2=arr.filter(k=>num%k===0);
     if(arr2.length==0) alert("not divisable");
    return arr2;
}

do{
   let option=prompt("enter char from a to h");
    switch(option){
        case 'a':
            console.log(arr);
            break;
        case 'b':
            console.log(arr.sort((a,b)=>a-b));
            break;
        case 'c':
            console.log(arr.sort((a,b)=>b-a));
            break;
        case 'd':
            console.log(arr.slice().reverse());
            break;
        case 'e':
            console.log(even(arr));
            break;
        case 'f':
            let num=+prompt("enter number");
            console.log(remainder(arr,num));
            break;
        case 'g':
            const discount = arr => arr.map(k => k - k * 0.03);
            console.log(discount(arr));
            break;
        case 'h':
            console.log(arr.join('***'));
            break;
        default:
            console.log("invalid option")
            break;
    }

}while(confirm("Do you want to repeat"));

