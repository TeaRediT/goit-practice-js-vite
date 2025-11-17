import { saveInLs } from './local-storage-api';

export const changeTheme = (body, theme, load) => {
  if (load) {
    theme = theme === 'light' ? 'dark' : 'light';
  }
  if (theme === 'dark') {
    body.classList.replace('theme-dark', 'theme-light');
    saveInLs('theme', 'light');
  } else {
    body.classList.replace('theme-light', 'theme-dark');
    saveInLs('theme', 'dark');
  }
};
