$(document).ready(function(){
  $("#nav-icon1").click(function(){
    $(".header .secondry-container, .header .profile-section").fadeToggle();
  });
});
$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var getdiv = document.getElementById("icontext");
output.innerHTML = slider.value;

function clickfunction() {
    switch (output.innerHTML) {
        case '1998':
            var node = document.createElement("dv");
            var textnode = document.createTextNode("Water");
            node.appendChild(textnode);
            document.getElementById("create").appendChild(node);
            break;
        default:
            'not selected';
    }
}
slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(output.innerHTML);
    if(output.innerHTML == ''){
        output.innerHTML = '1991';
    }
    else if(output.innerHTML == 2018){
        getdiv.style.right = '10px';
    }
    else if(output.innerHTML == 2017){
        getdiv.style.right = '23px';
    }
    else if(output.innerHTML == 2016){
        getdiv.style.right = '36px';
    }
    else if(output.innerHTML == 2015){
        getdiv.style.right = '49px';
    }
    else if(output.innerHTML == 2014){
        getdiv.style.right = '62px';
    }
    else if(output.innerHTML == 2013){
        getdiv.style.right = '75px';
    }
    else if(output.innerHTML == 2012){
        getdiv.style.right = '86px';
    }
    else if(output.innerHTML == 2011){
        getdiv.style.right = '99px';
    }
    else if(output.innerHTML == 2010){
        getdiv.style.right = '113px';
    }
    else if(output.innerHTML == 2009){
        getdiv.style.right = '126px';
    }
    else if(output.innerHTML == 2008){
        getdiv.style.right = '139px';
    }
    else if(output.innerHTML == 2007){
        getdiv.style.right = '152px';
    }
    else if(output.innerHTML == 2006){
        getdiv.style.right = '163px';
    }
    else if(output.innerHTML == 2005){
        getdiv.style.right = '176px';
    }
    else if(output.innerHTML == 2004){
        getdiv.style.right = '190px';
    }
    else if(output.innerHTML == 2003){
        getdiv.style.right = '203px';
    }
    else if(output.innerHTML == 2002){
        getdiv.style.right = '212px';
    }
    else if(output.innerHTML == 2001){
        getdiv.style.right = '228px';
    }
    else if(output.innerHTML == 2000){
        getdiv.style.right = '242px';
    }
    else if(output.innerHTML == 1999){
        getdiv.style.right = '253px';
    }
    else if(output.innerHTML == 1998){
        getdiv.style.right = '264px';
    }
    else if(output.innerHTML == 1997){
        getdiv.style.right = '278px';
    }
    else if(output.innerHTML == 1996){
        getdiv.style.right = '291px';
    }
    else if(output.innerHTML == 1995){
        getdiv.style.right = '303px';
    }
    else if(output.innerHTML == 1994){
        getdiv.style.right = '317px';
    }
    else if(output.innerHTML == 1993){
        getdiv.style.right = '329px';
    }
    else if(output.innerHTML == 1992){
        getdiv.style.right = '342px';
    }
    else if(output.innerHTML == 1991){
        getdiv.style.right = '354px';
    }
    else if(output.innerHTML == 1990){
        getdiv.style.right = '368px';
    }
    else if(output.innerHTML == 1989){
        getdiv.style.right = '383px';
    }
    else if(output.innerHTML == 1988){
        getdiv.style.right = '394px';
    }
    else if(output.innerHTML == 1987){
        getdiv.style.right = '409px';
    }
}

