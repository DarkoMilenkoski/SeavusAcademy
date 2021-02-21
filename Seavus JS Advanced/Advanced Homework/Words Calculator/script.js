// logikata na kalkulatorot e:
// glavno raboti so stringovi, poradi limitot na goleminata na brojot sto moze da bide store-nat vo promenliva. brojot se deli na cel broj, i decimalen broj, i se prenesuva flag vo funkciite sto im kazuva dali rabotat so cel ili decimalen broj.
// stanav svesen za if (x != null) otkako go napisav kalkulatorot, i mislam vo idnina ke probam da gi sredam ifovite vo startCalculator();

// koga raboti so cel broj, kalkulatorot dodava nuli na pocetokot na brojot so addZeros() (seuste vo string form) se dodeka dolzinata na stringot stane delliva so 3, primer 8546 -> 008546. na toj nacin potoa go passnuva brojot vo delcinja od 3 broevi vo funkcijata wordifyTriple(). koga vo funkcijata ke dojde vreme da se obraboti broj kako 546, prvo ja izolira petkata i ja konvertira vo "five hundred", pa 46 potoa go prakja vo wordifyDouble() kade sto se konvertiraat site dvocifreni broevi. ovoj wordifyDouble() e ponatamu korisen i za konverzija vo centi, i check writing. vo wordifyTriple() istotaka ima logika sto prepoznava dali prevedenite trojki se iljadnici, milioni i taka natamu, i ima zastita od edge cases, kako na primer preveduvanje na 000, primer broj 100,000,001 ili preveduvanje na broevi sto nemaat stotki kako 008.

// koga raboti so decimalen broj, zavisi dali se bara words, currency ili check writing. osnovata e sto prvo se otstranuvaat site nuli levo i desno od glavniot broj.
// 000430600->4306, 04325000->4325. potoa toj broj se pasuva kako obicen broj niz wordifyTriple(), tretiran kako cel broj. dodeka se trgaat nepotrebnite nuli, vo paralela se presmetuva kolku cifri ima od pocetokot na decimalnata tocka, do poslednata znacajna cifra. *0004306*00->7, *04325*000->5. toj number posle se koristi za da se doznae dali se raboti za ten-thousandths, hundred-millionths, ten-sextillionths etc. wordifyTriple() ke go ispecati brojot tretiran kako cel broj, i groupDecimalDecider() ke go dodade sufiksot.

// kalkulatorot ne e strog, i prima i tocno preveduva sekakvi retardirani inputi :D
// primer:
// 0061530.004080 / words
// .009 / currency
// 0002. / check writing
// 00020023.00800 / currency
// 101010101.01010101010101010101 / words
// 3.14159265358979323846264 / words

let result = document.getElementById("result");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");
let inputs = document.querySelectorAll("#input");
let single = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let double = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let combined = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let groupWhole = ["", "hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion"]; // se dodeka se dodavaat brojki vo ovoj array, se pecati do tamu, i za celi broevi i za decimali.

function groupDecimalDecider(num){ // kod sto odlucuva dali decimalniot broj e tenths, hundredths i taka natamu se do hundred-sextillionths, i go dodava toj tekst na kraj
    if (num === 1){
        result.innerText += ` ${double[0]}`;
        return;
    }
    if (num === 2){
        result.innerText += ` ${groupWhole[1]}`;
        return;
    }
    if (num === 3){
        result.innerText += ` ${groupWhole[2]}`;
        return;
    } // ako e ednocifren dvocifren ili trocifren, racno hardcoded se dodavaat tenths, hundredths, i thousandths. od ovaa linija natamu se koristi kod sto avtomatski gi dodava sufiksite do sextillions i poise, zavisi kolku elementi ima vo groupWhole arrayot
    if (num%3 === 1){
        result.innerText += ` ${double[0]}-`;
    }
    if (num%3 === 2){
        result.innerText += ` ${groupWhole[1]}-`;
    }
    if (num>3){
        if (num%3 === 0) result.innerText += ` ${groupWhole[Math.floor(parseFloat(num/3))+1]}`;
        else result.innerText += `${groupWhole[Math.floor(parseFloat(num/3))+1]}`;
    }
}

function validateInput(number){ // lesna rabota
    if (isNaN(number)){
        result.style.color = "red";
        result.innerText += `Not a number.`;
        return true;
    }
    if (number.length > groupWhole.length * 3 - 3){
        result.style.color = "red";
        result.innerText += `Number too big.`;
        return true;
    }
    if (parseFloat(number) <= 0){
        result.style.color = "red";
        result.innerText += `Number smaller or equal to 0 not allowed.`;
        return true;
    }
    if (number.length === 0){
        result.style.color = "red";
        result.innerText += `No input detected.`;
        return true;
    }
}
 
function wordifyDouble(doubleDigit){ // 83 = eighty-three
    if (parseInt(doubleDigit)<10) result.innerText += ` ${single[parseInt(doubleDigit)]}`; // ednocifreni broevi go koristat arrayot single.
    if (parseInt(doubleDigit)>=10 && parseInt(doubleDigit)<20) result.innerText += ` ${double[parseInt(doubleDigit[1])]}`; // broevi od 9 do 20 koristat array double.
    if (parseInt(doubleDigit)>=20){ // broevi od 20 do 99 koristat arrays combined i single. isklucok e preskoknuvanjeto na pecatenje na bilo kakvi edinici dokolku brojot e deliv so 10, odnosno edinicata e nula
        result.innerText += ` ${combined[parseInt(doubleDigit[0]-1)]}`;
        if (parseInt(doubleDigit)%10 === 0) return;
        result.innerText += `-${single[parseInt(doubleDigit[1])]}`;
    } 
}

function addZeros(number){ // ako nema dovolno broevi za brojot na cifri da se deli so 3, togas sledniot kod:
    if (number.length%3 != 0) return number.padStart((number.length + 3 - number.length%3), "0"); // dodavanje na nuli za brojot (vo string form) da se sostoi od segmenti od 3 brojki. 3214 = 003214, 41532 = 041532, 123456 = 123456
    return number; // ako ima dovolno broevi nema sto da se pravi
}

function wordifyTriple(number){
    number = addZeros(number);
    let groupCounterWhole = number.length / 3; // brojac sto podocna odlucuva dali ke se koristat thousand ili million etc.
    for (let i=1; i<number.length; i+=3, groupCounterWhole-=1){ // selektiranje po tri brojki
        let doubleDigitFromTriplet = number.substring(i,i+2); // vadenje na poslednite dve brojki za da se koristat vo wordifyDouble. 813 -> 13
        if (parseInt(number[i-1]) != 0){ // pecatenje na hundreds prvo, pa povikuvanje na pecatenje na 13. 813 -> eight hundred + thirteen
            result.innerText += ` ${single[parseInt(number[i-1])]} ${groupWhole[1]}`;
            wordifyDouble(doubleDigitFromTriplet);
        }
        else wordifyDouble(doubleDigitFromTriplet); // vo slucaj da nema hundreds, direktno pecatenje na 13. 1,013 -> (one thousand) thirteen
        if (groupCounterWhole != 1 && number.substring(i-1,i+2) !== "000") result.innerText += ` ${groupWhole[groupCounterWhole]}` //  if  (groupCounterWhole ne stignal do hundred || triplet ne se sostoi od "000"). sekoj broj bi imal hundred na kraj bidejki groupCounterWhole eventualno ke stigne do 1, odnosno hundred, 45 -> forty-five hundred || 100,000,001 bi bil zapisan kako "one hundred million thousand one", ne bi imalo sto da go spreci thousand da se izvede. 
    }
}

function wordify(numberInput, flag){
    if (parseInt(numberInput) === 0 || numberInput === ""){
        return;
    }

    if (flag){ // flag = cel broj
        wordifyTriple(numberInput);
    }
    if (!flag){ // !flag = decimalen broj. dolnava logika gi trga nepotrebnite nuli, objasnato vo header komentarot na prvite linii na fajlot
        let groupCounterDecimal = numberInput.length;
        numberInput = parseInt(numberInput);
        groupCounterDecimal -= numberInput.toString().length;
        while (numberInput%10 === 0) numberInput /= 10;
        groupCounterDecimal += numberInput.toString().length;
        numberInput = numberInput.toString();
        wordifyTriple(numberInput);
        groupDecimalDecider(groupCounterDecimal);
        if (parseInt(numberInput) === 1) result.innerText += `th`;
        else result.innerText += `ths`;
    }
}

function startCalculator(inputs){
    result.style.color = "black"; // validateInput vrakja text so crvena boja, ova go resetira
    result.innerText = ``;
    if (validateInput(inputs[0].value)) return; // validate number

    let number = inputs[0].value.split("."); // se deli na cel broj i decimalen broj (string form)
    let wholePart = number[0];
    let decimalPart = number[1]; // se dodeluvaat na dve promenlivi
    let wholeFlag = true;
    let decimalFlag = false; // flag za odlucuvanje dali ke se izvrsi kod za cel del ili decimalen del

    //
    // na mnogu mesta ima if statements sto pomagaat da nekoi zborovi kako "and" stojat na tocnoto mesto vo tocnoto vreme, i eden kup validacii
    //

    if (!inputs[1].checked && !inputs[2].checked && !inputs[3].checked){
        result.style.color = "red";
        result.innerText += `No button is selected.`;
        return;
    }
    if (inputs[1].checked){ // words
        wordify(wholePart, wholeFlag);
        if (decimalPart != undefined && parseInt(decimalPart) != 0){
            if (wholePart != "" && parseInt(wholePart) != 0 && decimalPart != "") result.innerText += ` and`;
            wordify(decimalPart, decimalFlag);
        }
    }
    if (inputs[2].checked){ // currency
        let centsFlag = true; // ovoj flag kazuva dali se raboti za cent ili cents
        if (wholePart.length != 0){
            wordify(wholePart, wholeFlag);
            if (parseInt(wholePart) === 1) result.innerText += ` dollar`;
            else result.innerText += ` dollars`;
        }
        if (decimalPart != undefined){ // ako postojat decimali:
            decimalPart = decimalPart.padEnd(decimalPart.length+3, "0"); // dodaj 3 nuli na krajot na stringot. 46->46000, 3->3000. ova e potrebno bidejki:
            decimalPart = parseFloat(decimalPart.slice(0, 3)); // se oddeluvaat prvite 3 cifri od noviot string. zatoa nulite bea potrebni, ne moze da se odvojat tri cifri ako stringot bil samo "3" ili "46"
            if (wholePart != "" && parseInt(wholePart) != 0 && decimalPart > 4) result.innerText += ` and`; // dodaj "and" ako postojat dolari, i ima barem 005 centi (1 cent zaokruzi)
            if (decimalPart > 4 && decimalPart < 15) centsFlag = false; // update flag ako ima 005 do 014 centi (1 cent zaokruzeno) za da pecati cent a ne cents
            decimalPart = Math.round((decimalPart)/10); // konecno zaokruzi go tricifreniot broj vo dvocifreni centi i pecati
            if (decimalPart != 0){ // dokolku e vnesena decimala sto ne e sve nuli pogore koencno prati go brojot na centi vo preveduvackata funkcija. ako se vneseni 004 centi ili pomalce, ne pecati nisto, ne postojat centi.
                wordifyDouble(decimalPart.toString());
                if (centsFlag) result.innerText += ` cents`;
                else result.innerText += ` cent`
            }
        }
    }
    if (inputs[3].checked){ // check writing. ovoj kod izgleda mnogu loso bidejki bev uporen i sakav tocno da go izvedam dizajnot sto kazuva "this or this" dokolku nekoj pise cel broj na dolari. probaj da pises "3.0" i select check writing. slicna logika kako currency
        if (decimalPart === undefined){
            wordify(wholePart, wholeFlag);
            if (parseInt(wholePart) === 1) result.innerText += ` dollar`
            else result.innerText += ` dollars`
            result.innerHTML += `<br>or<br>`;
            wordify(wholePart, wholeFlag);
            if (wholePart != "" && parseInt(wholePart) != 0) result.innerText += ` and`;
            result.innerText += ` 00/100 dollars`;
        }
        if (decimalPart != undefined){
            decimalPart = decimalPart.padEnd(decimalPart.length+2, "0");
            decimalPart = parseFloat(decimalPart.slice(0, 3));
            decimalPart = Math.round((decimalPart)/10);
            if (decimalPart === 0 ){
                wordify(wholePart, wholeFlag);
                if (parseInt(wholePart) === 1) result.innerText += ` dollar`
                else result.innerText += ` dollars`
                result.innerHTML += `<br>or<br>`
            }
            wordify(wholePart, wholeFlag);
            if (wholePart != "" && parseInt(wholePart) != 0) result.innerText += ` and`;
            if (decimalPart >= 0 && decimalPart < 10) result.innerText += ` 0${decimalPart}/100`;
            else result.innerText += ` ${decimalPart}/100`;
            result.innerText += ` dollars`
        }
    }
    switch (inputs[4].value){ // letter case
        case "lowercase":
            result.style.textTransform = "lowercase";
            break;
        case "uppercase":
            result.style.textTransform = "uppercase";
            break;
        case "titlecase":
            result.style.textTransform = "capitalize"; // poradi nekoja pricina, dokolku se smeni od uppercase na capitalize, samo posledniot zbor e capitalized.. treba da se klikne uste ednas za ostanatite da se capitalizenat.. ne znam zosto
            break;
        case "sentencecase":
            result.style.textTransform = "none";
            result.innerText = result.innerText.charAt(0).toUpperCase() + result.innerText.slice(1); // ova nikako da go pogodam. go ostaviv
            break;
    }
}

calculate.addEventListener("click", function(){
    startCalculator(inputs); // pass the number, to: and letter case
});

clear.addEventListener("click", function(){
    inputs[0].value = "";
    inputs[1].checked = false;
    inputs[2].checked = false;
    inputs[3].checked = false;
    inputs[4].value = "lowercase";
});