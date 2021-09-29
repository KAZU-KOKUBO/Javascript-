function getRandomInteger (from, to) {
  if (from >= to) {
    return new ReferenceError('Минимальное значение не может превышать максимальное');
  }
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1) + from);
}
getRandomInteger (0, 10);

function getRandomIntegerPoint (to, from, number) {
  if (from >= to) {
    return new ReferenceError('Минимальное значение не может превышать максимальное');
  }
  const Digits = Math.random() * (to - from + 1) + to;
  return +Digits.toFixed(number);
}
getRandomIntegerPoint (0, 10, 5);
