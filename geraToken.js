const generateWord = (wordLength) => {
  const ALL_NUMBERS = "0123456789";
  const ALL_LOWER = "abcdefghijklmnopqrstuvwxyz";
  const ALL_UPPER = ALL_LOWER.toUpperCase();
  const ALL_SYMBOLS = "!@#$%*(.)+-{><}";
  const charsOfAll = ALL_LOWER + ALL_NUMBERS + ALL_SYMBOLS + ALL_UPPER;
  let password = "";
  const charLength = charsOfAll.length;
  while (password.length < wordLength) {
    password += charsOfAll[Math.floor(Math.random() * charLength)];
  }
  return password;
};
module.exports = generateWord;
