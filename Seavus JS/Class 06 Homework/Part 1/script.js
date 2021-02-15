let firstDiv = document.querySelector("div");
firstDiv.querySelector("h1").innerText = "Title changed";
firstDiv.querySelector("p").innerText = "paragraph changed";

document.getElementsByClassName("second")[0].innerText = "paragraph changed";
document.getElementsByTagName("text")[0].innerText = "text changed";

let lastDiv = document.getElementsByTagName("div")[2];
lastDiv.querySelector("h1").innerText = "last div h1 title changed";
lastDiv.querySelector("h3").innerText = "last div h3 title changed";