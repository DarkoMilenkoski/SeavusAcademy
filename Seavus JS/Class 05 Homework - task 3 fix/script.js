function minMaxSum(array){
    if(!Array.isArray(array)){
        console.log(`This function only takes arrays!`);
        return;
    }
    if(array === undefined || array.length === 0){
        console.log(`Array is empty!`);
        return;
    }
    for (let j=0;j<array.length;j++){
        if(typeof array[j] === "number" && !Number.isSafeInteger(array[j]) && !isNaN(array[j])){
            console.log(`One or more of the numbers is too big!`);
            return;
        }
        if(typeof array[j] === "string" && array[j].length>25){
            console.log(`Too many characters in a string.`);
            return;
        }
    }
    let i=0;
    let max,min;
    while(i<array.length){ //ovoj while ciklus odbegnuva da im dade non-number value na min i max. Na primer ke znae deka "G" i "ABCDA" se strings i ke gi preskokne.
        if(typeof array[i] === "number"){
            max=array[i];
            min=array[i];
            break;
        }
        else i++;
    }
    if(i === array.length){
        console.log(`There are no numbers in your string.`);
        return;
    }
    for(i=0; i<array.length; i++){ // so toa sto "let i=0" e napisan na linija 20, i so pomos na linija 28, pri izvrsuvanjeto na ovoj for, vo vtoroto povikuvanje na funkcijata na primer, i zapocnuva so 2, bidejki vekje e utvrdeno deka "G" i "ABCDA" se stringovi.
        if(typeof array[i]!="number") continue;
        if(array[i]>max) max=array[i];
        if(array[i]<min) min=array[i];
    }
    console.log(`min=${min}, max=${max}, total=${min+max}`);
}

minMaxSum([3, 5, 6, 8, 11]);
minMaxSum(["G", "ABCDA", 3, "BSV", 10, 20]);
minMaxSum([90071992547409912,-3,0]);
minMaxSum(["A", "GEA", "LAED", "DABND"]);
minMaxSum([]);
minMaxSum([ , , , ,]);
minMaxSum(["h̴̛͈ẹ̴̇͐͜l̷̹̇l̴̻̓͝ô̵̞͎",3, ,4]);
minMaxSum(3);
minMaxSum(true);
minMaxSum(NaN);
minMaxSum([true, 3, "i overengineered this code", , 20]);
minMaxSum([true, 3321, undefined, 0, null, NaN, -742421, "6666"]);



// Old code:
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