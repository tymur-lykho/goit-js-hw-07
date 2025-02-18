const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const inpVal = input.value.trim();
  output.textContent = inpVal !== '' ? inpVal : 'Anonymous';
});
