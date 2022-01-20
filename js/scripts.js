const inputArea = document.querySelector('#input-area');
const criptografarBotao = document.getElementById('crypto-button');

criptografarBotao.addEventListener('click',function (){
    let texto;
    texto = inputArea.innerHTML;
    console.log(texto);
})

