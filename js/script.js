const diffList = document.querySelector('.difficulty__list');
const difficulty = document.querySelector('.difficulty');
const diffNone = 'difficulty__none';
const cardGameWrapper = document.querySelector('.cardgame__wrapper');
const easy = document.querySelector('#easy');
const noramal = document.querySelector('#noraml');
const hard = document.querySelector('#hard');
const itemActive = 'difficulty__item_active';
const startBtn = document.querySelector('#startbtn');
const playCard = document.querySelector('.play__card');
const copyCard = () => playCard.outerHTML;
const cardsFront = 'play__card-front';
const cardsBack = 'play__card-back';
const allCard = document.querySelectorAll('.play__card');
let level;
const random = (num) => Math.floor(Math.random() * num);

diffList.addEventListener('click', (e) => {
  if(e.target == easy) {
    easy.classList.add(itemActive);
    normal.classList.remove(itemActive);
    hard.classList.remove(itemActive);
    level = [easy, 3];
  }else if(e.target == normal){
    normal.classList.add(itemActive);
    easy.classList.remove(itemActive);
    hard.classList.remove(itemActive);
    level = [normal, 6];
  }else if(e.target == hard){
    hard.classList.add(itemActive);
    easy.classList.remove(itemActive);
    normal.classList.remove(itemActive);
    level = [hard, 10];
  }
})


startBtn.addEventListener('click', () => {
  if(level[0].classList.contains(itemActive)){
    difficulty.classList.add(diffNone);
    cardGameWrapper.classList.remove('play__card_none');
    for(let i = 0; i < level[1] - 1 ; i++){
      cardGameWrapper.insertAdjacentHTML('beforeend', copyCard());
    }
    let allCradsBack = document.querySelectorAll('.play__card-back');
    let bug = random(level[1]);
    console.log(`Bug card is : ${bug + 1}`);
    let bugCard = allCradsBack[bug];
    bugCard.classList.add('bugcard');
    if(level[0] == hard){
      cardGameWrapper.style.width = '80%';
    }
    }
})


cardGameWrapper.addEventListener('click' , (e) => {
  e = e.target;
  if(e.classList.contains(cardsFront)){
    curentCard = e.parentElement;  
    curentCard.parentElement.classList.add('play__card_active');
    cardGameWrapper.addEventListener('click' , () => {
      location.reload() 
    })
  }
})


