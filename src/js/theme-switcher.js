import { saveInLs } from './local-storage-api';

export const changeTheme = (body, theme, load) => {
  let temp = theme;
  if (load) {
    temp = theme === 'light' ? 'dark' : 'light';
  }
  if (temp === 'dark') {
    body.classList.replace('theme-dark', 'theme-light');
    saveInLs('theme', 'light');
  } else {
    body.classList.replace('theme-light', 'theme-dark');
    saveInLs('theme', 'dark');
  }
};
