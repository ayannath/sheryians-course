
// Create an HTML page with a button. When the button is clicked, change the text of a paragraph element.

var t01_btn = document.querySelector("#t01_btn");
var t01_p = document.querySelector("#t01_p");

t01_btn.addEventListener("click", function() {
    // alert("Button Clicked!");
    t01_p.textContent = "Button was Clicked!";
});