var circle = document.getElementById("circle")
var uparrow = document.getElementById("uparrow")
var downarrow = document.getElementById("downarrow")

var rotate = circle.style.transform;
var rotatesum;
uparrow.onclick = function()
{
    rotatesum = rotate + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotate = rotatesum;
}
downarrow.onclick = function()
{
    rotatesum = rotate + "rotate(+90deg)";
    circle.style.transform = rotatesum;
    rotate = rotatesum;
}