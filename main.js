const boxText = document.querySelectorAll('.text');
const card = document.querySelectorAll('.card');
const switcher = document.querySelector('.switch');
const switchContainer = document.querySelector('.oval-bg');
const bodyBackgroundColor = document.querySelector('body');
const clickHere = document.querySelector('.click-here');
const loremParagraph = document.querySelector('.filler')

const toSwitch = [switcher, switchContainer, bodyBackgroundColor, clickHere, loremParagraph];

const switchTheme = () => {
  if (clickHere.innerHTML === 'Dark <i class="fa-solid fa-arrow-right"></i>') {
    clickHere.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Light';
  } else {
    clickHere.innerHTML = 'Dark <i class="fa-solid fa-arrow-right"></i>';
  }  
  for (let i = 0; i < boxText.length; i++) {
  boxText[i].classList.toggle('active');
  }  
  for (let j = 0; j < card.length; j++) {
  card[j].classList.toggle('active');
  }  
  for (let k = 0; k < toSwitch.length; k++) {
  toSwitch[k].classList.toggle('active');
  }
}

switchContainer.addEventListener("click", switchTheme);
switcher.addEventListener("click", switchTheme);