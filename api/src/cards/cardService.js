function validate(cardNumber) {
  if (!cardNumber) return false;
  const stringNum = cardNumber.toString();
  const reversedNum = stringNum.split("").reverse();
  let sum = 0;
  for (let i = 0; i < reversedNum.length; i++) {
    const digit = parseInt(reversedNum[i]);
    if (i % 2 !== 0) {
      const doubledDigit = digit * 2;
      sum += doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
    } else {
      sum += digit;
    }
  }
  let response = sum % 10 === 0;

  return { cardNumber, response };
}
module.exports = {
  validate
};
