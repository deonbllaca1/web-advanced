//function pritnames()
//document.write("Elda");
//document.write("br")
//setTimeout(function(){document.write("Olta");}3000);

//document.write ("Drini")



//pritNames()


var colors=['red','green','blue','purple'];

function changebgcolor(){
    document.querySelector('body').style.background =
    colors[math.floor(math.random()*colors.length)]
}

setinterval(changebgcolor,1000)
