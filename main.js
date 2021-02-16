canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d") ;
var rover_width = 100;
var rover_height = 100;
var rover_x = 0;
var rover_y = 0;
background_img ="mars.jpg";
rover_img="rover.png";
function add() {
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_img;
    r_img=new Image();
    r_img.onload=uploadrover;
    r_img.src=rover_img
}
function uploadbg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover() {
ctx.drawImage(r_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    key_pressed=e.keyCode;
    console.log(key_pressed);
}