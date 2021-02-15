let array = [2, 4, 5];
let myDiv = document.querySelector("div");
myDiv.innerHTML += `<ul>`;
for (let i=0; i<array.length; i++){
    document.querySelector("ul").innerHTML += `<li>Number ${i+1}: ${array[i]}</li>`;
}
myDiv.innerHTML += `</ul>`;

myDiv.innerHTML += `<text>`;
let sum = 0;
for (let i=0; i<array.length-1; i++){
    document.querySelector("text").innerHTML += `${array[i]} + `;
    sum+=array[i];
}
sum+=array[array.length-1];
document.querySelector("text").innerHTML += `${array[array.length-1]} = ${sum}`;
myDiv.innerHTML += `</text>`;