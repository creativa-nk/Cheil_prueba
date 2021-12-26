function vermas() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      document.getElementById("mas").style.display="inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      document.getElementById("mas").style.display="none";
      document.getElementById("menos").style.display="inline";
      moreText.style.display = "inline";
    }
  }