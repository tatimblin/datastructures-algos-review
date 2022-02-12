import { DOMStore } from './DOMStore.js';

const store = new DOMStore();
const clickableEls = document.querySelectorAll('a, button');

for (const el of clickableEls) {
  el.addEventListener('click', store.set(el, el.innerHTML || el.value));
}
