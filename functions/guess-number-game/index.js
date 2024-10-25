const { inputNumber } = require('../../utils/input');

function endOfGame() {
  console.log('Ты угадал!');
  process.exit(0);
}

function gameOver() {
  console.log('Попытки закончились. Повезет в другой раз');
  process.exit(0);
}

async function main() {
  const maxValue = await inputNumber('Загадай число от 0 до ');
  const maxAttempts = await inputNumber('За сколько попыток ты угадаешь число? ');

  // todo
}

main();
