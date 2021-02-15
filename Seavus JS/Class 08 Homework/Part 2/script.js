let form = document.getElementById("bookForm");
let result = document.getElementById("result");
let radioButtons = document.querySelectorAll(`input[name="read"]`);

form.getElementsByTagName("button")[0].addEventListener("click", function(){
    result.innerHTML = "";

    let book = {
        title: form.children[0].value,
        author: form.children[1].value,
        readingStatus: function(status){
            if (status) result.innerHTML += `<text>Already read '${this.title}' by ${this.author}.</text>`;
            else result.innerHTML += `<text>You still need to read '${this.title}' by ${this.author}.</text>`
        }
    }
    if (radioButtons[0].checked){
        book.readingStatus(true);
        radioButtons[0].checked = false;
    }
    else {
        book.readingStatus(false);
        radioButtons[1].checked = false;
    } 

    form.children[0].value = "";
    form.children[1].value = "";
});