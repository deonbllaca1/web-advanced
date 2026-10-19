//var ushqimev = ["mish", "bukë", "kos", "vaj", "sheqer"];

//console.log(ushqimev[0]);

//for (let i in ushqimev){
//    console.log(ushqimev[i]);
//}

//for (let i = 0; i < 5; i++){
//    console.log(ushqimev[i]);
//}

var input = document.getElementById("input_id");
var buttoni = document.getElementById("btn_id");
var texti = document.getElementById("teksti_id");

buttoni.onclick = function(){
    teksti.innerHTML = input.value;
}

//var teksti2 = "the best school in the world is digital school";
//var result = teksti2.search("digital school");
//document.getelementbyid*("result1").innerhtml = result;

//var teksti2 = "The best school in the world is Digital school";
//var result = teksti2.search(/Digital/,"Another school");
//document.getElementById("reseult3").innerHTML = teksti2.replace(/Digital/,"Another school");



//var teksti3 = "abcdef"
//var regex = new RegExp('abc');

//document.getElementById("reseult4").innerHTML = regex.test(teksti3);

//var teksti3 = "abcdef"
//var regex = new RegExp('abc');



//document.getElementById("reseult4").innerHTML = regex.test(teksti3);


var teksti2 = "My school is the best school in the world ";
var regex = /school/g;
document.getElementById("reseult5").innerHTML = teksti2.match(regex);

var teksti6 = "My school is the best school in the world ";
var regex6 = /i/g;
document.getElementById("reseult6").innerHTML = teksti6.match(regex6);

var teksti7 = "My school is the best school in the world ";
var regex7 = /[abc]/g;
document.getElementById("reseult7").innerHTML = teksti6.match(regex6);


var teksti6 = "My school is the best school in the world 10 ";
var regex8 = /[0-9]/g;
document.getElementById("reseult8").innerHTML = teksti6.match(regex8);
