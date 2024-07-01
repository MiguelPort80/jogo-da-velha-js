let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer;

//contador de jogadas
var player1 = 0
var player2 = 0

// adicionando o evento do click aos boxes 
for(i = 0; i < boxes.length; i++){
    //quando alguém clica na caixa
    //NÂO USE ARROW FUNCTION NESSE EVENTO
    boxes[i].addEventListener('click',function() {

        let element = checkElement(player1, player2);
	//verifica se ja tem x ou o 
	    if(this.childNodes.length == 1){
                let cloneElement = element.cloneNode(true)
                this.appendChild(cloneElement)

		//computar jogadas 
		if(player1 == player2){
		    player1++
		    if(secondPlayer == 'vs-cpu'){
                        computerPlay()
			player2++
		    }
		}else{
		    player2++
		}
		checkWinCondition()
	    }
  })
}
//lógica dos botões
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
	secondPlayer = this.getAttribute('id')
        for(let j = 0; j < buttons.length; j++){
	    buttons[j].style.display = 'none'
	}

	setTimeout(function(){
	    let container = document.querySelector('#container')
	    container.classList.remove('hide')
	},500)
    })
}

//checa quem ira jogar  
function checkElement(player1,player2){

    if(player1 == player2){
	//x 
	element = x
    }else{
        //o 
        element = o
    }
    return element
}
//ve quem ganha
function checkWinCondition(){
    
    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b1Child = b1.children[0].className
	    let b2Child = b2.children[0].className
	    let b3Child = b3.children[0].className

	    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
	        declareWinner('x')
	    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
	        declareWinner('o')
	    }
        }catch(err){
        }
    }
    
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b4Child = b4.children[0].className
	    let b5Child = b5.children[0].className
	    let b6Child = b6.children[0].className

	    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
		declareWinner('x')
	    }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b7Child = b7.children[0].className
	    let b8Child = b8.children[0].className
	    let b9Child = b9.children[0].className

	    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
		declareWinner('x')
	    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b7Child = b7.children[0].className
	    let b1Child = b1.children[0].className
	    let b4Child = b4.children[0].className

	    if(b7Child == 'x' && b1Child == 'x' && b4Child == 'x'){
		declareWinner('x')
	    }else if(b7Child == 'o' && b1Child == 'o' && b4Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b2Child = b2.children[0].className
	    let b5Child = b5.children[0].className
	    let b8Child = b8.children[0].className

	    if(b2Child == 'x' && b8Child == 'x' && b5Child == 'x'){
		declareWinner('x')
	    }else if(b2Child == 'o' && b8Child == 'o' && b5Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b3Child = b3.children[0].className
	    let b6Child = b6.children[0].className
	    let b9Child = b9.children[0].className

	    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
		declareWinner('x')
	    }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    if(b7.childNodes.length > 0 && b5.childNodes.length > 0 && b3.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b7Child = b7.children[0].className
	    let b5Child = b5.children[0].className
	    let b3Child = b3.children[0].className

	    if(b7Child == 'x' && b5Child == 'x' && b3Child == 'x'){
		declareWinner('x')
	    }else if(b7Child == 'o' && b5Child == 'o' && b3Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
	//gambiarra pq o js tava dando erro de undefined, pq ele checava todos os inputs de uma vez
	try{
            let b1Child = b1.children[0].className
	    let b5Child = b5.children[0].className
	    let b9Child = b9.children[0].className

	    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
		declareWinner('x')
	    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
		declareWinner('o')
	    }
        }catch(err){
        }
    }

    //deu velha
    let counter = 0

    for(let i=0; i < boxes.length; i++){
	if(boxes[i].children[0] !== undefined ){
	    counter++
	}
    }

    if(counter == 9){
	declareWinner('')
    }
}
//limpa o jogo, e exibe a tela de que venceu
function declareWinner(winner){
    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardY = document.querySelector('#scoreboard-2')
    let msg = ' '
    if(winner == 'x'){
	scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
	msg = 'jogador 1 venceu!'
    }else if(winner == 'o'){
	scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1
        msg = 'jogador 2 venceu!'
    }else{
	msg = 'deu velha!'
    }
    
    //exibe msg
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    setTimeout(()=>{
	messageContainer.classList.add('hide')
    },3000)

    //zera as jogadas
    player1 = 0
    player2 = 0

    let boxesToRemove = document.querySelectorAll('.box div')
    for(let i=0; i < boxesToRemove.length; i++){
	boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

//logica da jogada do cpu
function computerPlay(){
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0 
    //só preencer se o filho estiver vazio
    for(let i=0;i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5)
        if(boxes[i].children[0] === undefined){
	    if(randomNumber <= 1){
		boxes[i].appendChild(cloneO)
		counter++
		break
	    }
	    //chacagem de quantas serão preencidas
	}else {
	    filled++
	}
    }

    if(counter == 0 && filled < 9){
	computerPlay()
    }
}
