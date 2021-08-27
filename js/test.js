const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', e => {
  const target = e.target;
  if(target && target.matches('button.red')) {
    console.log(target);
  }
});
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('click');
//   });
// });


const btn = document.createElement('button');

btn.classList.add('red');
wrapper.append(btn);