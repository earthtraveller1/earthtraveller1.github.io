var body = document.getElementsByTagName("body");
var output = document.getElementById("output");

function addOutput() {
    var outputText = document.createTextNode("The script ran!");
    output.appendChild(outputText);
    output.appendChild(document.createElement("br"));
}

var link = document.getElementById("run-script");
link.addEventListener("click", addOutput);