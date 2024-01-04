function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var dms = document.getElementById('mds')
var alo = document.querySelector('.alo')
msg.innerHTML = `Agora são : ${hora} horas`
msg.style.padding = '30px'
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'Luan MANHÃ.png'
    document.body.style.background = '#55a0c5'
    dms.style.webkitTextStroke = '2pt black'
    img.style.borderRadius = '100px'
    alo.style.background = 'rgba(0, 0, 0, 0.1)';
    alo.style.border = 'solid rgba(0, 0, 0, 0.1)' 
    img.style.boxShadow = '10px 10px 10px black'  
} else if(hora >= 12 && hora < 18)
{
    //boa tarde
    img.src = 'Luan tarde.png'
    document.body.style.background = '#bd9518'
    dms.style.webkitTextStroke = '2pt black'
    alo.style.background = 'rgba(0, 0, 0, 0.4)';
    img.style.boxShadow = '10px 10px 10px black'
    alo.style.border = 'solid rgba(0, 0, 0, 0.1)'
    img.style.borderRadius = '100px'
    msg.style.color = 'white'
    msg.style.webkitTextStroke = '1pt black'
    msg.style.fontSize = '28px'
    msg.style.paddingLeft = '34px'
    
}
else{
    // boa noiti
    img.src = 'Luan Noite.png'
    document.body.style.background = '#02060d'
    dms.style.textShadow = '0px 0 5px blue';
    alo.style.background = 'rgba(0, 0, 0, 0.4)';
    msg.style.color = 'white'
    msg.style.textShadow = '0px 0 5px blue';
    img.style.boxShadow = '10px 10px 10px black'
    img.style.borderRadius = '100px'
    setTimeout(function() {
        msg.classList.add('piscar');
    },500);

}

    img.style.width = '200px';

}
