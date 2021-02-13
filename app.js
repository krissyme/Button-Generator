const myButton = document.querySelector('button');

const myInputs = document.querySelectorAll('input');

for (let input of myInputs) {
  input.addEventListener('input', () => {
    let inputValue = input.id;
    switch (inputValue) {
      case 'btn-font-size':
        myButton.style.fontSize = `${input.value}rem`;
        break;

      case 'btn-bradius':
        myButton.style.borderRadius = `${input.value}rem`;
        break;

      case 'btn-width':
        myButton.style.width = `${input.value}rem`;
        break;

      case 'btn-height':
        myButton.style.height = `${input.value}rem`;
        break;

      case 'btn-text-color':
        myButton.style.color = `${input.value}`;
        break;

      case 'bg-color':
        myButton.style.background = `${input.value}`;
        break;

      case 'btn-vertical':
        console.log(input.value);
        break;
      case 'btn-horizontal':
        console.log(input.value);
        break;
      case 'btn-blur':
        console.log(input.value);
        break;
      default:
        console.log(input.id);
        break;
    }
    document.querySelector('#btn-style').innerText = myButton.getAttribute(
      'style'
    );
  });
}
