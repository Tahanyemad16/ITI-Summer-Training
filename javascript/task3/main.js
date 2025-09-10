// ----------------------task1-----------------------

// let size = +prompt("Enter the size of the array:");
// let arr = [];
// for (let i = 0; i < size; i++) {
//   let num = +prompt(`Enter number ${i + 1}:`);
//   arr.push(num);
// }


// const ascending = function(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const descending = function(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const even=function(arr){
//     let arr2=[];
//     for(let k of arr){
//         if (k%2==0){
//             arr2.push(k);
//         }
//     }
//     if(arr2.length==0) alert("Array doesn't contain even numbers");
//     return arr2;
// }

// const remainder=function(arr,num){
//     let arr2=[];
//     for(let k of arr){
//         if(num%k==0){
//             arr2.push(k);
//         }
//     }
//      if(arr2.length==0) alert("not divisable");
//     return arr2;
// }
// const discount=function(arr){
//     let arr2=[];
//     for(let k of arr){
//         arr2.push(k-k*.03);
//     }
//     return arr2;
// }


// do{
//    let option=prompt("enter char from a to h");
//     switch(option){
//         case 'a':
//             console.log(arr);
//             break;
//         case 'b':
//             console.log(ascending(arr));
//             break;
//         case 'c':
//             console.log(descending(arr));
//             break;
//         case 'd':
//             console.log(arr.slice().reverse());
//             break;
//         case 'e':
//             console.log(even(arr));
//             break;
//         case 'f':
//             let num=+prompt("enter number");
//             console.log(remainder(arr,num));
//             break;
//         case 'g':
//             console.log(discount(arr));
//             break;
//         case 'h':
//             console.log(arr.join('***'));
//             break;
//         default:
//             console.log("invalid option")
//             break;
//     }

// }while(confirm("Do you want to repeat"));




// -------------------------task2----------------------------
let student = {
  name: "Eman",
  age: 20,
  subjects: [
    { subject: "Math", score: 85 },
    { subject: "English", score: 90 },
    { subject: "Science", score: 78 }
  ],
   getTotalGrade: function() {
    let total = 0;
    for (let subj of this.subjects) {
      total += subj.score;
    }
    return (total / (this.subjects.length * 100)) * 100;
  },

  getAverageGrade: function() {
    if (this.subjects.length === 0) return 0;
    let total = 0;
    for (let subj of this.subjects) {
      total += subj.score;
    }
    return total / this.subjects.length;
  }
};

console.log("Total Grade:", student.getTotalGrade());
console.log("Average Grade:", student.getAverageGrade());


let stClone = JSON.parse(JSON.stringify(student));
stClone.getTotalGrade = function() {
  let total = 0;
    for (let subj of this.subjects) {
      total += subj.score;
    }
    return (total / (this.subjects.length * 100)) * 100;
};

stClone.getAverageGrade = function() {
   if (this.subjects.length === 0) return 0;
    let total = 0;
    for (let subj of this.subjects) {
      total += subj.score;
    }
    return total / this.subjects.length;
  }

console.log("Original:", student);
console.log("Clone:", stClone);

