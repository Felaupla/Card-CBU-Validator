function validate(num) {
  if (!num) return false;
  const stringNum = num.toString();
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
  let result = [response];
  return result;
  //return response;
}
console.log(validate(4509950237804350));
module.exports = {
  validate,
};
