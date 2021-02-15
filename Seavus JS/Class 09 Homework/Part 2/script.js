let text = $("input").first();
let color = $("input").last();
let button = $("button");
let result = $("#result");
let message = $("h3");

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}//stolen

function validateInput(textLength, color){
    if (!isColor(color) || textLength === 0){
        message.text(`Error, try again.`);
        return false;
    }
    return true;
}

button.click(function(){
    result.html("");
    message.html("");
    if (validateInput(text.val().length, color.val())){
        result.html(`<h1>${text.val()}</h1>`).css("color", color.val());
    }
    text.val("");
    color.val("");
})