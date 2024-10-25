const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function inputNumber(text) {
  return new Promise((resolve, reject) => {
    rl.question(text, candidate => {
      const number = parseInt(candidate);

      if (Number.isNaN(number)) {
        reject(new Error('Invalid number'));
      } else {
        resolve(number);
      }
    });
  });
}

async function inputString(text) {
  return new Promise((resolve) => {
    rl.question(text, string => {
      resolve(string);
    });
  });
}

module.exports = {
  inputNumber,
  inputString,
};
