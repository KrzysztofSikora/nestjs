console.log('start');
setTimeout(() => {
  console.log('Funaaaaakcja zwrotna setTimeout');
}, 0);
setImmediate(() => {
  console.log('Funkcja zwrotna setImmediate');
});

setTimeout(() => {
  console.log('Funkcja zwrotna setTimeout');
}, 0);

console.log('Koniec');
