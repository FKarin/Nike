var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
window.onload = function(){
    drawShape(context,-300,-200);
}
function drawShape(context, xoff, yoff) {
    context.scale(1, 1);
    context.beginPath();
    context.moveTo(334 + xoff, 224 + yoff);
    context.bezierCurveTo(335 + xoff, 235 + yoff, 341 + xoff, 244 + yoff, 398 + xoff, 207 + yoff);
    context.bezierCurveTo(401 + xoff, 205 + yoff, 349 + xoff, 247 + yoff, 338 + xoff, 247 + yoff);
    context.bezierCurveTo(323 + xoff, 247 + yoff, 330 + xoff, 227 + yoff, 334 + xoff, 224 + yoff);
    context.stroke();
    context.fill();
    context.closePath();
  }

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrolling", window.scrollY > 0);
})

document.getElementById("alert").onclick = function () { 
    Swal.fire({
        icon: 'info',
        title: 'Credits!',
        text: 'This website was made for a school project by Karin Fornazarič!',
		confirmButtonColor: '#1C2028',
    }) 
};