import { refs } from './refs';

export const addTask = obj => {
  return `<li class="task-list-item">
    <button class="task-list-item-btn">Delete</button>
    <h3>${obj.title}</h3>
    <p>${obj.desc}</p>
</li>`;
};

export const loadTasks = arr => {
  return (refs.list.innerHTML = arr.map(el => addTask(el)).join(''));
};
