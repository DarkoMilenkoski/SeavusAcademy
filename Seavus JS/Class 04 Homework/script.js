let activities = ['Darko', 'happy', 'sleeping'];
function tellStory(a){
    console.log(`This is ${a[0]}. ${a[0]} is a nice person. Today they are ${a[1]}. They are ${a[2]} all day. The end.`);
}
tellStory(activities);

//

function sumArray(array){
    var i; var sum = 0; var flag = false;
    for(i=0;array[i]!=undefined;i++){ //resenie za da mozat da rabotat i fiksniot array, i arrayot vnesen preku prompt (line 28-37)
        if (validateNumber(array[i])){
            console.log(`Error, "${array[i]}" is not a number.`);
            flag = true; //ovoj flag sprecuva da se otpecati krajniot sum dokolku se detektira NaN
            break;
        }
        else {
            array[i] = parseInt(array[i]); //resenie za da mozam da gi soberam tie broevi so ke pominat niz validateNumber, se nadevam postoi poednostavno resenie mesto da gi parsiram vo int celo vreme :( jas ne bi go ni koristel prompt nikogas poradi toa sto vrakja samo stringovi
            sum+=array[i];
        }
    }
    if (flag == false) console.log(sum);
}
function validateNumber(arrayNumber){
    if (isNaN(arrayNumber))
    return true;
}
let array = [2,5,6,3,4];
sumArray(array);
// pod ovaa linija e prompt resenie
var n = prompt(`Array length:`);
let array2 = [n];
var j;
for(j=0;j<n;j++){
    array2[j] = prompt(`Element ${j}:`);
}
sumArray(array2);