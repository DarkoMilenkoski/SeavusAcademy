// function stringToSentence(array){
//     let sentence = "";
//     var i;
//     for(i=0;i<(array.length - 2);i++){
//         sentence+=array[i] + " ";
//     }
//     sentence+=array[i]+array[i+1]; //ovde gi spojuvam posledniot zbor i izvicnikot za da nema nepotrebni prazni mesta
//     console.log(sentence);
// }
// stringToSentence(["Hello", "there", "students", "of", "SEDC", "!"]);

//

// function loop(){
//     for(let i=1;i<=20;i++){
//         if(i%2==0) console.log(`${i + "\n"}`);
//         else console.log(`${i + " even"}`); //se nadevam ova treba da e resenieto
//     }
// }
// loop();

//

// function minMaxSum(array){
//     var max=array[0];
//     var min=array[0];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max) max=array[i];
//         if(array[i]<min) min=array[i];
//     }
//     console.log(max+min);
// }
// minMaxSum([3,5,6,8,11]);
// minMaxSum(["G","ABCDA","BSV"]); //se nadevam go resiv bonusot tocno

//

// function nameCombiner(firstNames, lastNames){
//     let fullNameList = [firstNames];
//     for(let i=0;i<firstNames.length;i++){
//         fullNameList[i]=(`${i+1}. ${firstNames[i]} ${lastNames[i]}`);
//     }
//     console.log(fullNameList);
// }
// let first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"];
// nameCombiner(first,last);