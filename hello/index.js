var body = document.getElementsByTagName("body");

function addOutput() {
    var output = document.createElement("p");
    var outputText = document.createTextNode("The script ran!");
    
    output.appendChild(outputText);
    body[0].appendChild(output);
}

var link = document.getElementById("run-script");
link.addEventListener("click", addOutput);