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



diffList.addEventListener('click', (e) => {
  e = e.target;
  if(e == easy) {
    easy.classList.add(itemActive);
    normal.classList.remove(itemActive);
    hard.classList.remove(itemActive);
  }else if(e == normal){
    normal.classList.add(itemActive);
    easy.classList.remove(itemActive);
    hard.classList.remove(itemActive);
  }else if(e == hard){
    hard.classList.add(itemActive);
    easy.classList.remove(itemActive);
    normal.classList.remove(itemActive);
  }
})

startBtn.addEventListener('click', () => {
  if(easy.classList.contains(itemActive)){
    difficulty.classList.add(diffNone);
    playCard.classList.remove('play__card_none');
    for(i = 0; i < 2 ; i++){
      cardGameWrapper.insertAdjacentHTML('beforeend', copyCard());
    }
  }
})