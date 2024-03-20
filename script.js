var clickableParts = document.getElementsByClassName("clickable-part");

for (var i = 0; i < clickableParts.length; i++) {
    clickableParts[i].addEventListener("mouseover", mouseOver);
    clickableParts[i].addEventListener("mouseout", mouseOut);
}

function mouseOver() {
    this.style.color = "#A8CD9F"; 
}

function mouseOut() {
    this.style.color = ""; 
}

