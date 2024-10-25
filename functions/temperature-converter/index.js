const { inputString, inputNumber } = require('../../utils/input');

async function main() {
  const temperature = await inputNumber('Какая температура? ');
  const units = await inputString('В каких единицах измерения? ');
  const targetUnits = await inputString('Перевести в единицы измерения: ');

  // todo
}

main();
