

const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', ()=> {
  const fontSizeForText = fontSizeControl.value;
  text.style.fontSize = fontSizeForText + 'px';
}) 
