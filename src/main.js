import { loadFromLs, saveInLs } from './js/local-storage-api';
import { refs } from './js/refs';
import { addTask, loadTasks } from './js/render-tasks';
import { changeTheme } from './js/theme-switcher';

let arr = loadFromLs('arr') ?? [];
let theme = loadFromLs('theme') ?? 'dark';

changeTheme(document.body, theme, true);
if (arr.length > 0) loadTasks(arr);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const title = refs.form.elements.taskName.value.trim();
  const desc = refs.form.elements.taskDescription.value.trim();

  if (title === '' || desc === '') {
    alert('Заповніть всі поля');
    return;
  }

  const task = {
    title: title,
    desc: desc,
  };

  refs.list.insertAdjacentHTML('beforeend', addTask(task));
  arr.push(task);

  saveInLs('arr', arr);

  refs.form.reset();
});

refs.list.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  e.target.parentElement.remove();
  arr = arr.filter(el => el.title !== e.target.nextElementSibling.textContent);
  saveInLs('arr', arr);
});

refs.btn.addEventListener('click', () => {
  changeTheme(document.body, loadFromLs('theme'), false);
});
