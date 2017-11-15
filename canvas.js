var canvas = document.querySelector('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var c = canvas.getContext('2d');
var x = 200;
var dx = 1;

c.beginPath();
c.arc(x, 200, 30, 0, Math.PI * 2, false);
c.strokeStyle = "#0000ff";
c.stroke();
function animal() { 
    requestAnimationFrame(animal);
    c.clearRect(0, 0, innerWidth, innerHeight);
   
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "#0000ff";
    c.stroke();
    x += dx;
}