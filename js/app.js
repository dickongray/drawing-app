//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately


//When clicking on control list items
  //Deselect sibling elements
  //Select clicked element

//When new color is pressed
  //Show color select or hide the color select

//When color sliders change
  //update the new color span

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines

//Stage one
/*
//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//When color sliders change
  //update the new color span

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines

*/

//Stage two
/*
//When clicking on control list items
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines
*/

//Stage three
/*
//When clicking on control list items
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){
//Append the color to the controls ul
var $newColor = $("<li></li>");
$newColor.css("background-color", $("#newColor").css("background-color"));
$(".controls ul").append($newColor);
//Select the new color
$newColor.click();
});
  
  

//On mouse events on the canvas
  //Draw lines
*/

//Stage four
/*
//When clicking on control list items
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent; 
var mouseDown = false;
//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){
//Append the color to the controls ul
var $newColor = $("<li></li>");
$newColor.css("background-color", $("#newColor").css("background-color"));
$(".controls ul").append($newColor);
//Select the new color
$newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(function(e){
  	lastEvent = e;
  	mouseDown = true;
 }).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
  	context.beginPath();
  	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  	context.lineTo(e.offsetX, e.offsetY);
  	context.strokeStyle = color;
  	context.stroke();
  	lastEvent = e;
	}
  }).mouseup(function(){
  	mouseDown = false;
});
*/
//Stage five

//When clicking on control list items
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent; 
var mouseDown = false;
//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){
//Append the color to the controls ul
var $newColor = $("<li></li>");
$newColor.css("background-color", $("#newColor").css("background-color"));
$(".controls ul").append($newColor);
//Select the new color
$newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(function(e){
  	lastEvent = e;
  	mouseDown = true;
 }).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
  	context.beginPath();
  	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  	context.lineTo(e.offsetX, e.offsetY);
  	context.strokeStyle = color;
  	context.stroke();
  	lastEvent = e;
	}
  }).mouseup(function(){
  	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});




