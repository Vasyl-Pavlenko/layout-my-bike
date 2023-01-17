'use strict';

const form = document.querySelector('.form');
const fromSubmit = document.querySelector('#form-submit');
const textArea = document.querySelector('#form-textarea');
const textareaResizer = document.querySelector('#textarea-resizer');
const toTop = document.querySelector('.to-top');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

textArea.addEventListener('input', () => {
  textareaResizer.innerText = textArea.value;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  form.classList.remove('form--failed-submit');
  form.reset();
  textareaResizer.innerText = '';
});

fromSubmit.addEventListener('click', () => {
  form.classList.add('form--failed-submit');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTop.classList.add('to-top--shown');
  } else {
    toTop.classList.remove('to-top--shown');
  }
});
