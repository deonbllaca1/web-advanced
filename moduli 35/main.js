function search(){
    var input,filter,ul,li,a,i,textvalue;
    filter = input.ariavaluemax.touppercase();
    ul = document.getElementById ("mylist");
    li =ul.getElementsByTagName("li")





for (i=0; i<li.length;i++){
    a=li[i]

    textvalue = a.textcontent
    if(textvalue.toUpperCase().indexof(filter)>-1){
        li[i].style.display="block"
    }else{
        li[i].style.display ="none"

    }
}
}

