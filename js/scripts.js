const inputArea = document.querySelector('#input-area');
const criptografarBotao = document.getElementById('crypto-button');
let textoNormal;
let textoCriptografado = [];

    criptografarBotao.addEventListener('click',()=> {
        textoNormal = inputArea.value.split('');

        for (let index = 0; index < textoNormal.length; index+=1) {

            if (textoNormal[index] == 'a'){
                textoCriptografado[index] = 'ai';
            } else {
                textoCriptografado[index] = textoNormal[index];
            }
        }
        console.log(textoCriptografado);          
    })   

