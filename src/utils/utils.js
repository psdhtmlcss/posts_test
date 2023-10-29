export const formatter = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

export const showDateFormat = (container) => {
  return function() {
    const date = new Date();
    container.innerHTML = formatter.format(date);
  }
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};