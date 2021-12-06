var selecione = document.getElementById('selecionar');
var inputCifradeCesar =  document.getElementById('numbercifradecesar');
var labelCifradeCesar = document.querySelector('.passosdecesar');
var divPassos = document.getElementById('cifra-de-cesar');

selecione.addEventListener('change', ()=>{
    if(selecione.value == 'cifradecesar'){
        inputCifradeCesar.style.display = 'inline-block';
        labelCifradeCesar.style.display = 'inline-block';
        divPassos.style.display = 'inline-block';
    }else {
        inputCifradeCesar.style.display = 'none';
        labelCifradeCesar.style.display = 'none';
        divPassos.style.display = 'none';
    }
});

var botaoRadioCod = document.getElementById('codificar');
var botaoRadioDecod = document.getElementById('decodificar');
var botaoEnviar = document.getElementById('submit');

botaoRadioCod.addEventListener('change', ()=>{
    botaoEnviar.value = "Codificar Mensagem"
});
botaoRadioDecod.addEventListener('change', ()=>{
    botaoEnviar.value = "Decodificar Mensagem"
});


function cifraDeCesar(str,chave){
    var arrNovo = []
    for(var i = 0; i<str.length ;i++){
        let code = str[i].charCodeAt()
        if(code >= 65  && code <= 90){
            arrNovo.push(String.fromCharCode(((code - 65 + chave )%26)+65))
        }else if(code >= 97 && code <= 122){
            arrNovo.push(String.fromCharCode(((code - 97 + chave )%26)+97))
        }else{
            arrNovo.push(str[i])
        }

    }
    return arrNovo.join('')
}

function decCifradeCesar(str, chave){
    var arrNovo = []
    for(var i = 0; i<str.length ;i++){
        let code = str[i].charCodeAt()
        if(code >= 65  && code <= 90){
            arrNovo.push(String.fromCharCode(((code - 90 - chave )%26)+90))
        }else if(code >= 97 && code <= 122){
            arrNovo.push(String.fromCharCode(((code - 122 - chave )%26)+122))
        }else{
            arrNovo.push(str[i])
        }

    }
    return arrNovo.join('')
}

var enviarMensagem = document.getElementById('resultadocifrado');
var enviarParag = document.getElementById('presultado');

botaoEnviar.addEventListener('click', function(x){
    x.preventDefault();

    if(selecione.value === 'base64'){
        var texto = document.getElementById('mensage').value;
        if(botaoEnviar.value === "Codificar Mensagem"){            
            enviarParag.innerText = btoa(texto);
        }else{            
            enviarParag.innerText = atob(texto);
        }
    }else if(selecione.value === 'cifradecesar'){
        if(botaoEnviar.value === "Codificar Mensagem"){
            var texto = document.getElementById('mensage').value.split('');
            var deslocamento = parseInt(document.getElementById('numbercifradecesar').value);
           
            enviarParag.innerText = cifraDeCesar(texto,deslocamento);
        }else{
            var texto = document.getElementById('mensage').value;
            var deslocamento = parseInt(document.getElementById('numbercifradecesar').value);
       
            enviarParag.innerText = decCifradeCesar(texto,deslocamento);
        }
    }

});



