
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
    document.getElementById('img01').src="../img/Vitrine feminino/meia-taça-marlim.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI TRIÂNGULO OFF WHITE";
    document.getElementById('precoBiquini').innerHTML = "R$ 149";
}

function mudarIMG2() {
    document.getElementById('img01').src="../img/Vitrine feminino/cortininha-marlim.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI TRIÂNGULO";
    document.getElementById('precoBiquini').innerHTML = "R$ 159";

}

function mudarIMG3() {
    document.getElementById('img01').src="../img/Vitrine feminino/biquini-sport-marlim.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI SPORT MARLIM";
    document.getElementById('precoBiquini').innerHTML = "R$ 139";

}

function mudarIMG4() {
    document.getElementById('img01').src="../img/Vitrine feminino/triangulo-marlim.png"
    document.getElementById('prodDescr').innerHTML = "BIQUINI TRIÂNGULO MARLIM";
    document.getElementById('precoBiquini').innerHTML = "R$ 149";

}

function mudarIMG5() {
    document.getElementById('img01').src="../img/Vitrine feminino/top-triangulo-fixo-off.jpg"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI TRIÂNGULO OFF WHITE";
    document.getElementById('precoBiquini').innerHTML = "R$ 180";

}

function mudarIMG6() {
    document.getElementById('img01').src="../img/Vitrine feminino/top-faixa-cafe.webp"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI HOT PANTS CAFÉ";
    document.getElementById('precoBiquini').innerHTML = "R$ 240";

}

function mudarIMG7() {
    document.getElementById('img01').src="../img/Vitrine feminino/top-cortininha-off.jpg"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI CORTININHA OFF WHITE";
    document.getElementById('precoBiquini').innerHTML = "R$ 120";

}

function mudarIMG8() {
    document.getElementById('img01').src="../img/Vitrine feminino/top-sport-cafee.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI SPORT CAFÉ";
    document.getElementById('precoBiquini').innerHTML = "R$ 90";

}

function mudarIMG9() {
    document.getElementById('img01').src="../img/Vitrine feminino/faixa-avocado.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI FAIXA AVOCADO";
    document.getElementById('precoBiquini').innerHTML = "R$ 180";

}

function mudarIMG10() {
    document.getElementById('img01').src="../img/Vitrine feminino/cortininha-amarelo.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI CORTININHA AMARELO";
    document.getElementById('precoBiquini').innerHTML = "R$ 240";

}

function mudarIMG11() {
    document.getElementById('img01').src="../img/Vitrine feminino/sport-amarelo.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI SPORT AMARELO";
    document.getElementById('precoBiquini').innerHTML = "R$ 120";

}

function mudarIMG12() {
    document.getElementById('img01').src="../img/Vitrine feminino/hot-pants-avocado.png"
    document.getElementById('prodDescr').innerHTML = "BIQUÍNI PANTS AVOCADO";
    document.getElementById('precoBiquini').innerHTML = "R$ 90";

}
