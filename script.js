const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", function() {
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.opacity = "0.7";
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.opacity = "1";
        }
    });
});
