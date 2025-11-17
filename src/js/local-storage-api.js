export const saveInLs = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLs = key => {
  const json = JSON.parse(localStorage.getItem(key));
  if (!json) return null;
  else return json;
};
