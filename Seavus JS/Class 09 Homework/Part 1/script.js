let input = $("input").first();
let button = $("button");
let result = $("#result");

button.on("click", function(){
    if (input.val().length > 30 || input.val().length === 0){
        alert(`Error, try again`);
        return;
    }
    result.html(`<h1>Hello there ${input.val()}</h1>`);
})