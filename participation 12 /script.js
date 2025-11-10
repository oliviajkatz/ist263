// Get the div element
let div = document.getElementById("school");

// Add a click event listener
div.addEventListener("click", function() {
    div.textContent = "Orange Nation";   // change the text
    div.style.color = "orange";          // change text color to orange
    div.style.fontSize = "32px";         // optional: make it a bit bigger
    div.style.textAlign = "center";      // center it
});
