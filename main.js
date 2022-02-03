var canvas = document.getElementById("meu_canvas");
var ctx = canvas.getContext("2d");
var cor = "black";
var largura_linha = 1;
var ultima_posicao_x, ultima_posicao_y;
var largura = screen.width;
var nova_largura = screen.width - 70; 
var nova_altura = screen.height - 300;

if (largura < 992) {
    document.getElementById("meu_canvas").width = nova_largura;
    document.getElementById("meu_canvas").height = nova_altura;

    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", dedo_pressionado);
function dedo_pressionado(e) {
    cor = document.getElementById("cor").value;
    largura_linha = document.getElementById("largura").value;
    console.log("Meu touch iniciou");
    ultima_posicao_x = e.touches[0].clientX - canvas.offsetLeft;
    ultima_posicao_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", dedo_mexendo);

function dedo_mexendo(e) {
    var dedo_x = e.touches[0].clientX - canvas.offsetLeft;
    var dedo_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("Meu touch move iniciou")

    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura_linha; 
    console.log("x =" + ultima_posicao_x + ", y =" + ultima_posicao_y);
    ctx.moveTo(ultima_posicao_x, ultima_posicao_y);
    console.log("x =" + mouse_x + ", y =" + mouse_y);
    ctx.lineTo(mouse_x, mouse_y);
    ctx.stroke();

    ultima_posicao_x = dedo_x;
    ultima_posicao_y = dedo_y;

}

function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
