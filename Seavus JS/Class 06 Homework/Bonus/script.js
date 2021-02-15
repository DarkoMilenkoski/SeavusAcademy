let recipeName = prompt(`Recipe name:`);
while (recipeName.length>60 || recipeName.length === 0){
    alert(`Invalid name. Press OK to try again`);
    recipeName = prompt(`Recipe name:`);
}

let numberOfIngredients = prompt(`Number of ingredients:`);
while (isNaN(parseInt(numberOfIngredients)) || numberOfIngredients.length === 0){
    alert(`Not a number. Press OK to try again`);
    numberOfIngredients = prompt(`Number of ingredients:`);
} // proveruva dali e vnesen broj
parseInt(numberOfIngredients);

let ingredients = [numberOfIngredients];
for (let i=0; i<numberOfIngredients; i++){
    ingredients[i]=prompt(`Ingredient number ${i+1}:`);
    if (ingredients[i].length>20 || ingredients[i].length < 3 || Number.isInteger(parseInt(ingredients[i]))){
        alert(`Invalid ingredient. Press OK to try again`);
        i--;
    }
}
document.getElementById("title").innerHTML += `${recipeName}`;
for (let i=0; i<numberOfIngredients; i++){
    document.getElementById("ingredientTable").innerHTML += `<tr><td>${ingredients[i]}</td><td>X grams/liters</td></tr>`;
}