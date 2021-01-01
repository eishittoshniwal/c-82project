var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var colour="red"
var mouseevent=""
var lastX,lastY,currentY,currentX
canvas.addEventListener("mousedown",MD)
function MD(e){
lastX=e.clientX-canvas.offsetLeft
lastY=e.clientY-canvas.offsetTop
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",MU)
function MU(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",ML)
function ML(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",MM)
function MM(e){
    currentX=e.clientX-canvas.offsetLeft
    currentY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=3
       ctx.arc(currentX,currentY,40,0,2*Math.PI)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}
