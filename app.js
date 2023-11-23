
let listOfDrawnNumbers = [];
let maxPossibleNumbers = 10;
let secretNumber = generateRandonNumber();
let attempts = 1;

inicialMessage()

function showText(tag, text){
  let field = document.querySelector(tag)
  field.innerHTML = text;
  responsiveVoice.speak(text, `Brazilian Portuguese Female`, {rate: 1.2});
}
function inicialMessage(){
  showText('h1', 'Jogo do número Secreto');
  showText('p', 'Escolha um numero entre 1 e 10');
}

function verificarChute(){
  let tryKick = document.querySelector('input').value;
  let worldTentativa = attempts > 1 ? `tentativas` : 'tentativa';
  let messageAttempt = `Você descobriu o numero Secreto com ${attempts} ${worldTentativa}!`;

  if (tryKick == secretNumber){
    showText(`h1`,`Parabéns`);
    showText(`p`, messageAttempt);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
  }  else{
        if (tryKick > secretNumber) {
          showText(`p`,`O numero secreto é menor que o numero informado`);
        } else {
          showText(`p`,`O numero secreto é maior que o numero informado`);
        }
        attempts ++;
        clearField();
}
}

function generateRandonNumber(){
let numberChosen = parseInt(Math.random() * maxPossibleNumbers + 1);
let totalElements = listOfDrawnNumbers.length;

  if( totalElements == maxPossibleNumbers){
    listOfDrawnNumbers = [];
  }

  if ( listOfDrawnNumbers .includes(numberChosen)){
    return generateRandonNumber();
  } else{
    listOfDrawnNumbers.push(numberChosen);
    return numberChosen;
  }
}

function clearField(){
  tryKick = document.querySelector(`input`);
  tryKick.value = '';
}

function reiniciarJogo() {
  secretNumber = generateRandonNumber();
  clearField();
  attempts = 1

  inicialMessage()

  document.getElementById(`reiniciar`).setAttribute(`disabled`, true);

}
