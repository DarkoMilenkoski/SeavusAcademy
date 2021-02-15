// ------------- Task 00 -----------
// function createArray(n){
//     if (n<1) return console.log([]);
//     let array = [n];
//     for (let i=0; i<n; i++) array[i] = i+1;
//     console.log(array);
// }
// createArray(5);
// createArray(10);
// createArray(-5);


// ------------- Task 01 -----------
// function getFirstValue(array){
//     console.log(array.shift());
// }
// getFirstValue([1, 2, 3]);
// getFirstValue([80, 5, 100]);
// getFirstValue([-500, 0, 50]);


// ------------- Task 02 -----------
// function reverse(array){
//     console.log(array.reverse()); // :D
// }
// function reverse2(array){
//     for (let i=0, temp; i<array.length/2; i++){
//         temp = array[i];
//         array[i] = array[array.length-(i+1)];
//         array[array.length-(i+1)] = temp;
//     }
//     console.log(array);
// }
// reverse([1, 2, 3, 4]);
// reverse([9, 9, 2, 3, 4]);
// reverse([]);
// reverse2([1, 2, 3, 4]);
// reverse2([9, 9, 2, 3, 4]);
// reverse2([]);


// ------------- Task 03 -----------
// function search(array, value){
//     console.log(array.indexOf(value));
// }
// search([1, 2, 3, 4], 3);
// search([2, 4, 6, 8, 10], 8);
// search([1, 3, 5, 7, 9], 11);


// ------------- Task 04 -----------
// function check(array, value){
//     if (array === undefined || array.length === 0){
//         return console.log(false);
//     }
//     for (let i=0; i<array.length; i++){
//         if (array[i] === value){
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }
// check([1, 2, 3, 4, 5], 3);
// check([1, 1, 2, 1, 1], 3);
// check([5, 5, 5, 6], 5);
// check([], 5);


// ------------- Task 05 -----------
// function negate(array){
//     if (array === undefined || array.length === 0){
//         return console.log([]);
//     }
//     for (let i=0; i<array.length; i++){
//         array[i]*=-1;
//     }
//     console.log(array);
// }
// negate([1, 2, 3, 4]);
// negate([-1, 2, -3, 4]);
// negate([]);


// ------------- Task 06 -----------
// function diffMaxMin(array){
//     let min = array[0];
//     let max = array[0];
//     for (let i=0; i<array.length; i++){
//         if(array[i]>max) max=array[i];
//         if(array[i]<min) min=array[i];
//     }
//     console.log(`${max-min}. Smallest number is ${min}, biggest is ${max}.`);
// }
// diffMaxMin([10, 4, 1, 4, -10, Infinity, 32, 21]);
// diffMaxMin([44, 32, -Infinity, 19]);


// ------------- Task 07 -----------
// function MultiplyByLength(array){
//     for (let i=0; i<array.length; i++){
//         array[i]*=array.length;
//     }
//     console.log(array);
// }
// MultiplyByLength([2, 3, 1, 0]);
// MultiplyByLength([4, 1, 1]);
// MultiplyByLength([1, 0, 3, 3, 7, 2, 1]);
// MultiplyByLength([0]);


// ------------- Task 08 -----------
// function hurdleJump(array, jumpHeight){
//     if (array === undefined || array.length === 0){
//         return console.log(true);
//     }
//     for (let i=0; i<array.length; i++){
//         if (array[i]>jumpHeight)
//         return console.log(false);
//     }
//     return console.log(true);
// }
// hurdleJump([1, 2, 3, 4, 5], 5);
// hurdleJump([5, 5, 3, 4, 5], 3);
// hurdleJump([5, 4, 5, 6], 10);
// hurdleJump([1, 2, 1], 1);
// hurdleJump([], 3);


// ------------- Task 09 -----------
// function countdown(n){
//     let array = [n+1];
//     for (let i=0; i<=n; i++){
//         array[i]=n-i;
//     }
//     console.log(array);
// }
// function countdown2(n){
//     let array = [];
//     for (let i=0; i<=n; i++){
//         array.push(n-i);
//     }
//     console.log(array);
// }
// countdown(5);
// countdown(1);
// countdown(0);
// countdown2(5);
// countdown2(1);
// countdown2(0);


// ------------- Task 10 -----------
// function transform(array){
//     for (let i=0; i<array.length; i++){
//         if (array[i]%2===0) array[i]--;
//         else array[i]++;
//     }
//     console.log(array);
// }
// transform([1, 2, 3, 4, 5]);
// transform([3, 3, 4, 3]);
// transform([2, 2, 0, 8, 10]);