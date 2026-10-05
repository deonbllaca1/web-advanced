var butoni1=document.getElementById("btn1")

var butoni2=document.getElementById("btn2")

var butoni3=document.getElementById("btn3")

var butoni4=document.getElementById("btn4")

butoni1.onclick = function() {
    alert("ky buton eshte klikuar");
}

butoni2.onmousedown = function() {
    alert(" butoni 2  eshte klikuar");
}
butoni3.onmouseleave = function() {
    alert("keni larguar kursorin");
}
butoni4.onmousewheel = function() {
    alert("keni perdorur rrotullimin e mouse");
}