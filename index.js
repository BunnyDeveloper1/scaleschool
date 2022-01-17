$(document).ready(function(){
    $(window).scroll(function(){
    scrolls = $(this).scrollTop();
    if(scrolls > 20){
        document.getElementById("menu").style.backgroundColor="#0070AD";

    }
    else{
        document.getElementById("menu").style.backgroundColor="transparent";
    }
    }

    );
}

);
//$(document).ready(function() {
//  $('ul li a').click(function(e) {
//    e.preventDefault();
//    $(this).addClass('active');
//  });
//});

//$(document).ready(function () {
//    $("ul.navbar-nav > li > a").click(
//    function(e){
//        $(this).css("color", "#d7f0ed");}
//
//    );
//});

function rotate_img(id_img, id_cont){
var list = ['c', 'java', 'c++', 'python', 'wordpress', 'html'];
var list_content = ['c_content', 'java_content', 'c++_content', 'python_content', 'wordpress_content', 'html_content'];
    var index_img = list.indexOf(id_img);
    var index_cont = list_content.indexOf(id_cont);
    list.splice(index_img, 1);
    list_content.splice(index_cont, 1);

    for(var i=0; i<list.length; i++){
        if(list_content[i] != null && list[i] != null){

        document.getElementById(list_content[i]).style.display="None";

        document.getElementById(list[i]).style.display="block";

        }
        else{
            console.log("Null");
        }
    }
    var current_img = document.getElementById(id_img);
    var current_content = document.getElementById(id_cont);
    current_img.classList.add("rotateimg");
    var remove_img = setTimeout(function(){
        current_img.classList.remove("rotateimg");
    current_img.style.display = "None";
    current_content.style.display="block";
    },500);


};
var model = document.getElementById("popup");
var open_btn = document.getElementById("btn_register");
var open_menu = document.getElementById("open_register");
var span = document.getElementsByClassName("cancel")[0];
open_btn.onclick = function() {
  model.style.display = "block";
}
open_menu.onclick = function() {
  model.style.display = "block";
}

span.onclick = function() {
  model.style.display = "none";
}