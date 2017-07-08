
var eda=document.getElementById("ed");
var tda=eda.querySelectorAll("td");
var ip=document.getElementById("hd");

  for (var i = 0; i < tda.length; i++) {
    tda[i].addEventListener("click",cl);
    ip.addEventListener("blur",d);
  }


  function cl() {

    this.className="sh";

  }

function d() {
  var v=this.value;
  console.log(v);
  this.parentNode.innerHTML=v+hd;
}
