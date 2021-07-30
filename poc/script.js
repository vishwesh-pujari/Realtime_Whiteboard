const canvas = document.querySelector("canvas");

// window means the current window which client is seeing
canvas.height = window.innerHeight; // set canvas height and width properties
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d"); // we will use tool to draw on the canvas

// black color is the default color
tool.fillRect(0, 0, canvas.width, canvas.height); // (0,0) is the upper left corner, y increases downwards, x increases rightward
tool.fillStyle = "white";
tool.strokeStyle = "red"; // default stroke color is also black
tool.strokeRect(10, 10, canvas.width / 2, canvas.height / 2); // doesn't fill the rec

/*
Canvas has 2 types of operations: Fill and Stroke
Stroke: Draw outlines
Fill: Fill color inside outline
*/

/**
 * 1. tool.beginPath() - starts drawing a path
 * 2. tool.moveTo(xi, yi) - moves tool without drawing anything on the board
 * 3. tool.lineTo(xf, yf) - draws line from current point to previous point
 * Line will be drawn only when stroke() is called
 */

tool.beginPath();
tool.moveTo(canvas.width / 2, canvas.height / 2);
tool.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 100);
tool.moveTo(canvas.width / 2 + 300, canvas.height / 2 + 300);
tool.lineTo(canvas.width / 2 + 400, canvas.height / 2 + 300);

tool.lineWidth = 5
tool.stroke(); // once stroke is called, then only changes will be reflected

/*canvas.addEventListener("mousedown", function (event) {
    tool.beginPath();
    tool.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("mouseup", function (event) {
    tool.lineTo(event.clientX, event.clientY); // draws a straight line. in the same way here we can draw rectangle
    tool.stroke();
});*/

// to draw curve, we have to draw straight lines on very short short intervals to give a feel for curve

let isMouseDown = false;

canvas.addEventListener("mousedown", function (event) {
    tool.beginPath();
    tool.moveTo(event.clientX, event.clientY);
    isMouseDown = true; // once mouse is down, we make true
});

canvas.addEventListener("mousemove", function (event) {
    if (isMouseDown) { // if isMouseDown is true then only draw line
        tool.lineTo(event.clientX, event.clientY);
        tool.stroke();
    }
});

canvas.addEventListener("mouseup", function (event) {
    isMouseDown = false; // if mouse is up then do isMouseDown as false
});
