

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     document.getElementById("nav").style.background = " rgba(255,255,255,.9)"; 
     document.getElementById("logo-derecha").style.display = "none"; 
     document.getElementById("logo").style.display = "none"; 
     document.getElementById("logo-extra").style.display = "block"; 


  } else {
    document.getElementById("nav").style.background = "linear-gradient(-90deg, rgba(255,255,255,1) 19%, rgba(181,237,219,1) 56%)";
    document.getElementById("logo-derecha").style.display = "block"; 
    document.getElementById("logo").style.display = "block"; 
    document.getElementById("logo-extra").style.display = "none"; 
  }
}