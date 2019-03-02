var pars = document.getElementsByClassName("mcq")[0].childNodes[0].childNodes[0];

var text = "";

pars.childNodes.forEach(child => {
    console.log(child.innerText);
    text += child.innerText;
});

var link = "https://google.com/search?q=" + text.replace(" ", "+");

window.open(link);