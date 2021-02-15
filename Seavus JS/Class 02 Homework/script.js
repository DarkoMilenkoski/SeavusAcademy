let year=prompt("Enter your year of birth: ");
let yearRemainder = (year-4)%12;
let chineseZodiac = ['Rat', 'Rabbit', 'Horse', 'Rooster', 'Ox', 'Dragon', 'Goat', 'Dog', 'Tiger', 'Snake', 'Monkey', 'Pig'];
var i;
for(i=0;i<12;i++){
    if (yearRemainder == i)
    alert(chineseZodiac[i]);
}