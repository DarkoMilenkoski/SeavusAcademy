// ----------- Task 01 --------------
// function isOddOrEven(x){
//     if (x%2==0) console.log(`It's even.`);
//     else console.log(`It's odd.`);
// }
// isOddOrEven(prompt(`Number:`));


// ------------ Task 02 --------------
// function secondConverter(x){
//     console.log(x*60);
// }
// secondConverter(prompt(`Minutes:`));


// ------------ Task 03 -------------
// function scoreCalculator(twoPoint, threePoint){
//     console.log(twoPoint*2+threePoint*3);
// }
// scoreCalculator(prompt(`Two pointers:`), prompt(`Three pointers:`));


// ------------ Task 04 ------------ 
// function legs(chicken, cow, pig){
//     console.log(chicken*2+cow*4+pig*4);
// }
// legs(prompt(`Chicken legs:`), prompt(`Cow legs:`), prompt(`Pig legs:`));


// ------------ Task 05 ------------
// function calculate(num1, num2, operator){
//     switch(operator){
//         case '+': console.log(num1+num2); break;
//         case '-': console.log(num1-num2); break;
//         case '*': console.log(num1*num2); break;
//         case '/': console.log(num1/num2); break;
//         case '%': console.log(num1%num2); break;
//     }
// }
// calculate(parseInt(prompt(`Number 1:`)), parseInt(prompt(`Number 2:`)), prompt(`Operator:`));


// ------------- Task 06 -----------
// function compare(stringA, stringB){
//     if (stringA.length == stringB.length) console.log(`True`);
//     else console.log(`False`);
// }
// compare(prompt(`First string`), prompt(`Second string:`));


// ------------- Task 07 -----------
// function shouldServeDrinks(age, pause){
//     if (age>=18 && pause == 'true') console.log(`True`);
//     else console.log(`False`);
// }
// shouldServeDrinks(prompt(`Age`), prompt(`true/false`));


// ------------- Task 08 -----------
// function moodToday(mood){
//     if (mood == "") console.log(`Today I'm Feeling neutral.`);
//     else console.log(`Today I'm feeling ${mood}.`);
// }
// moodToday(prompt(`Mood: (can be left blank)`));


// ------------ Task 09 -----------
// function equalSlices(total, people, slices){
//     if ((people*slices)<=total) console.log(`true (${people} people * ${slices} slices = ${slices*people} slices </= ${total} slices).`);
//     else console.log(`false (${people} people * ${slices} slices = ${slices*people} slices > ${total} slices).`);
// }
// equalSlices(prompt(`Total slices:`), prompt(`People:`), prompt(`Slices per person:`));

// ---------- Task 10 ----------
// function totalCups(cups){
//     var total = parseInt(cups/6) + cups;
//     console.log(total);
// }
// totalCups(parseInt(prompt(`Amount of cups:`)));