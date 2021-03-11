// App state
let total;

// Cached elements
const inputEl = document.querySelector('input');
const addEl = document.getElementById('add');
const minusEl = document.getElementById('minus');
const totalEl = document.querySelector('span');

// Event listeners
addEl.addEventListener('click', handleAddition);
minusEl.addEventListener('click', handleSubtraction);

// functions
function init() {
  total = 0;
  inputEl.value = 1;
  render()
}

init();

function render() {
  if (total > 0) {
    totalEl.textContent = `+${total}`;
    totalEl.style.color = 'green';
  } else if (total < 0) {
    totalEl.textContent = total;
    totalEl.style.color = 'red';
  }
}

function handleAddition() {
  let value = parseInt(inputEl.value)
  total += value;
  render();
}

function handleSubtraction() {
  let value = parseInt(inputEl.value)
  total -= value;
  render();
}