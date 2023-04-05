function validateCard(cardNumber) {
  let suma = 0;
  if (!cardNumber || cardNumber.length !== 16) return "Error";
  const cardNumberArray = cardNumber.split("").reverse();
  for (var i = 0; i < cardNumberArray.length; i++) {
    let num = parseInt(cardNumberArray[i]);
    if (i % 2 == 1) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    suma += num;
  }
  return suma % 10 == 0;
}
module.exports = validateCard;
