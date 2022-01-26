import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello Developer :D';
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());