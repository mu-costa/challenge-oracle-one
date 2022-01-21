const inputArea = document.querySelector('#input-area');
const criptografarBotao = document.getElementById('crypto-button');
const outputArea = document.querySelector('#output-area');
let textoNormal;
let textoCriptografado = [];

    criptografarBotao.addEventListener('click',()=> {
        textoNormal = inputArea.value.split('');
        //algoritmo para converter o array textoNormal para o array criptografado textoCriptografago
        for (let index = 0; index < textoNormal.length; index+=1) {

            if (textoNormal[index] == 'a' /* && textoNormal[index] != 'ai' */){
                textoCriptografado[index] = 'ai';
            } else if (textoNormal[index] == 'e' /* && textoNormal[index] != 'enter' */){
                textoCriptografado[index] = 'enter';
            } else if (textoNormal[index] == 'i' /* && textoNormal[index] != 'imes' */){
                textoCriptografado[index] = 'imes';
            } else if (textoNormal[index] == 'o' /* && textoNormal[index] != 'ober' */){
                textoCriptografado[index] = 'ober';
            } else if (textoNormal[index] == 'u' /* && textoNormal[index] != 'ufat' */){
                textoCriptografado[index] = 'ufat';
            } else{
                textoCriptografado[index] = textoNormal[index];
            }
        }
     outputArea.value = textoCriptografado.join('');        
    })   

