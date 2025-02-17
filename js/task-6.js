const ctrl = document.querySelector('#controls');
const input = ctrl.querySelector('input');
const createBtn = ctrl.querySelector('button[data-create]');
const destroyBtn = ctrl.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

console.log(createBtn);
console.log(destroyBtn);

createBtn.addEventListener('click', (event) => { 
  if (input.value >= 1 && input.value <= 100) {
    event.preventDefault();
    createBoxes(input.value);
    input.value = '';
  } else {
    alert("Введіть число від 1 до 100");
  }
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
  const createBoxes = amount => {
    box.innerHTML = '';
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i += 1){
      const color = getRandomHexColor();
      const divBox = document.createElement('div');
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = color;
    fragment.append(divBox);
    size += 10;
  }
  
  box.append(fragment);
}

const destroyBoxes = () => box.innerHTML = '';

destroyBtn.addEventListener('click', destroyBoxes);
