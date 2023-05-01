
function desencriptar() {
  var txt1 = document.getElementById("inputtxt1").value.toLowerCase();

  var cifrado = txt1.replace(/enter/igm,"e");
  var cifrado = cifrado.replace(/ober/igm,"o");
  var cifrado = cifrado.replace(/imes/igm,"i");
  var cifrado = cifrado.replace(/ai/igm,"a");
  var cifrado = cifrado.replace(/ufat/igm,"u");


document.getElementById("img1").style.display = "none"; 

document.getElementById("txt1").style.display = "none"; 

document.getElementById("txt2").innerHTML = cifrado;

document.getElementById("copiar").style.display = "show"; 

document.getElementById("copiar").style.display = "inherit";


}

function encriptar() {
  var txt1 = document.getElementById("inputtxt1").value.toLowerCase();

  var cifrado = txt1.replace(/e/igm,"enter");
  var cifrado = cifrado.replace(/o/igm,"ober");
  var cifrado = cifrado.replace(/i/igm,"imes");
  var cifrado = cifrado.replace(/a/igm,"ai");
  var cifrado = cifrado.replace(/u/igm,"ufat");


document.getElementById("img1").style.display = "none"; 

document.getElementById("txt1").style.display = "none"; 

document.getElementById("txt2").innerHTML = cifrado;

document.getElementById("copiar").style.display = "show"; 

document.getElementById("copiar").style.display = "inherit"; 

}

function copy() {
 var mensaje = document.querySelector("#txt2");
mensaje.select();
document.execCommand("copy");
alert("¡se copió!"); 

}


