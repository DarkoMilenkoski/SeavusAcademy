let form = document.getElementById("animalForm");
let result = document.getElementById("result");

form.getElementsByTagName("button")[0].addEventListener("click", function(){
    result.innerHTML = "";
    let animal = {
        Name: form.children[0].value,
        kind: form.children[1].value,
        speak: function(message){
            result.innerHTML += `<text>${this.kind} says: ${message}</text>`;
        }
    }
    animal.speak(form.children[2].value);
    form.children[0].value = "";
    form.children[1].value = "";
    form.children[2].value = "";
});
