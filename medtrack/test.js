let h1 = document.querySelector('h1');
h1.addEventListener('click',()=>{ //no arguments
  //can use preventDefault() to prevent the selection from doing default actions
  h1.style.color = 'red';
})
