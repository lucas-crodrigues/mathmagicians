export const AddToOutput = (e) => {
  const char = e.target.innerHTML;

  if (char === '%') {
    document.querySelector('.output').value += '/100';
  } else if (char === 'x') {
    document.querySelector('.output').value += '*';
  } else if (char === '÷') {
    document.querySelector('.output').value += '/';
  } else {
    document.querySelector('.output').value += char;
  }
};

export const SolveOutput = () => {
  const calculation = eval(document.querySelector('.output').value); // eslint-disable-line no-eval
  document.querySelector('.output').value = '';
  document.querySelector('.output').placeholder = calculation;
};

export const ClearAll = () => {
  document.querySelector('.output').value = '';
  document.querySelector('.output').placeholder = 0;
};

export const ChangeSign = () => {
  document.querySelector('.output').value = -document.querySelector('.output').value;
};
