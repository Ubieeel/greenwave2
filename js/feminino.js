
document.getElementById("cadastro").style.display = "none";
document.getElementById("login").style.display = "none";
document.getElementById("back").style.display = "none";

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

// cria o modal
var modal = document.getElementById('myModal');
// pega as imagens usando o nome de classe delas
var images = document.getElementsByClassName('myImages');
// a imagem que vai no modal
var modalImg = document.getElementById("img01");


// vai pelo vetor vendo todas as imagens com essa classe 
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // e adiciona a imagem que foi clicada pra ser mostrada
    img.onclick = function (evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// botao pra fechar o modal
var fechar = document.getElementsByClassName("btnCancelarCompra")[0];

// fecha o modal
fechar.onclick = function () {
    modal.style.display = "none";
}

function mudarIMG() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0002.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 180";
}

function mudarIMG2() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0003.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Malibu Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 240";

}

function mudarIMG3() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0004.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Top Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 120";

}

function mudarIMG4() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0005.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Slip Bege";
    document.getElementById('precoBiquini').innerHTML = "R$ 90";

}

function mudarIMG5() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0006.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Hot Pant Top Marrom";
    document.getElementById('precoBiquini').innerHTML = "R$ 180";

}

function mudarIMG6() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0007.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Top Marrom";
    document.getElementById('precoBiquini').innerHTML = "R$ 240";

}

function mudarIMG7() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0008.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Top Bege";
    document.getElementById('precoBiquini').innerHTML = "R$ 120";

}

function mudarIMG8() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0009.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Hot Pant Mostarda";
    document.getElementById('precoBiquini').innerHTML = "R$ 90";

}

function mudarIMG9() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0010.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Cortininha Slip Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 180";

}

function mudarIMG10() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0011.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Top Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 240";

}

function mudarIMG11() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0012.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Cortininha Bege";
    document.getElementById('precoBiquini').innerHTML = "R$ 120";

}

function mudarIMG12() {
    document.getElementById('img01').src="../img/Vitrine feminino/IMG-20240604-WA0013.jpg"
    document.getElementById('prodDescr').innerHTML = "Biquini Slip Verde";
    document.getElementById('precoBiquini').innerHTML = "R$ 90";

}
