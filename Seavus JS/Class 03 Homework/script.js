var car;
function typeCheck(x){
    return (typeof x);
}
console.log(`${typeCheck(car)}`);
console.log(`${typeCheck(3)}`);
console.log(`${typeCheck(`i am a string`)}`);
console.log(`${typeCheck(true)}`);
console.log(`${typeCheck([0,1,2])}`);

//

let flag = prompt(`Type 1 for Dog to Human years, 0 for Human to Dog years`);
let years = prompt(`Type age`);
function dogYearCalculator(years, flag){
    if (flag == 1){ //bev dosta razocaran sto ne mozam da napisam if(flag){ kako kaj C :(
        return years/7;
    }
    else return 7*years;
}
console.log(`${dogYearCalculator(years, flag)}`);

//

let balance = 500;
let request = prompt(`How much do you wish to withdraw?`);
function withdraw(x){
    if (x>500) console.log(`Not enough balance`);
    else {
        console.log(`You have withdrawn ${x}, and have ${500-x} remaining.`);
    }

}
withdraw(request);