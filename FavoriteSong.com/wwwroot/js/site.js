// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var string = "Wonderwall by Oasis";
var myAnimation = string.split("");
var el = document.getElementById('myAnimation');
(function animate() {
    myAnimation.length > 0 ? el.innerHTML +=
        myAnimation.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();