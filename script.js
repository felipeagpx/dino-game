const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let pulando = false;
let position = 0;

function apertarEspaco(event){
    if(event.keyCode === 32)
    {
        if(!pulando)
        {
            pular();
        }
        
    }
}

function pular(){
    
    pulando = true;

    let sobe = setInterval(() => {
        if(position >= 150)
        {
            clearInterval(sobe)

            let descer = setInterval(() => {
                if(position <=0)
                {
                    clearInterval(descer)
                    pulando = false;
                }
                else
                {
                    position -= 10;
                    dino.style.bottom = position + 'px';
                }
                
            }, 10); 
        }        
        else 
        {
            position += 10;
            dino.style.bottom = position + 'px';
        }        

    }, 10);
}

function criarCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1100;
    let tempoAleatorio = Math.random() * 5000;

    cactus.classList.add('cactus');
    cactus.style.left = 1100 + 'px';
    fundo.appendChild(cactus);

    let irEsquerda = setInterval(() => {
        
        if(cactusPosition < -60)
        {
            clearInterval(irEsquerda);
            fundo.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && position < 60)
        {
            clearInterval(irEsquerda)
            document.body.innerHTML = '<h1 class="end-game">FIM DE JOGO</h1>';   
        }
        else
        {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(criarCactus, tempoAleatorio);

}

criarCactus();
document.addEventListener('keyup', apertarEspaco);