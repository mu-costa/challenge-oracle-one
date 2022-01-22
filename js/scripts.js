const inputArea = document.querySelector('#input-area');
const outputArea = document.querySelector('#output-area');
const criptografarBotao = document.getElementById('crypto-button');
const descriptografarBotao = document.getElementById('decrypto-button')


    criptografarBotao.addEventListener('click',()=> {
        let textoNormal;
        let textoCriptografado = [];
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

    //o algoritmo é diferente tenho que buscar um modo de encontrar as sílabas especificas na string

    descriptografarBotao.addEventListener('click',()=> {
        let textoDoOutput;
        let textoDescriptografado;
        let novoTexto;
        
        textoDoOutput = inputArea.value;
        textoDescriptografado = textoDoOutput.replace(/ai/gi,'a').replace(/enter/g, 'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');

        outputArea.value = textoDescriptografado;
           
    })
