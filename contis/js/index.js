function toggleContent() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("mybtun");
  
    if (dots.style.display === "none") {
      dots.style.display ="inline";
      btnText.innerHTML = "Read more ";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  let cli=document.querySelector('#cc');
cli.addEventListener('click',function(){
        window.location.href="http://127.0.0.1:5500/pricing.html"

})
  