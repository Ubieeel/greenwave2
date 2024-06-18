
document.getElementById("cadastro").style.display = "none";
document.getElementById("login").style.display = "none";
document.getElementById("back").style.display = "none";


function Abriraba() {
  document.getElementById("aba").style.display = "block";
  }

  function fecharaba() {
    document.getElementById("aba").style.display = "none";
    }

function AbrirLogin() {
  document.getElementById("back").style.display = "block";
  document.getElementById("login").style.display = "block";
  document.getElementById("cadastro").style.display = "none";
  }
  
  function FecharLogin() {
    document.getElementById("back").style.display = "none";
    document.getElementById("login").style.display = "none";
  }

  function Abrircadastro() {
    document.getElementById("back").style.display = "block";
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("login").style.display = "none";
    }
    
    function Fecharcadastro() {
      document.getElementById("back").style.display = "none";
      document.getElementById("cadastro").style.display = "none";
    }

    
  // parte carrossel
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cont++

    if(cont >5){
      cont = 1  
    }

    document.getElementById('radio'+cont).checked = true
}



