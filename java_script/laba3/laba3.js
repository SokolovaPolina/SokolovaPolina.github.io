/**
* Возвращает дробную часть числа num.
*
* @param {number} num Вводимое десятичное число.
* @return {number} sum, возвращает дробную часть числа.
*/
function getDecimal(num){
   let res =0;
   if (num >= 0) {
      let cel = Math.trunc(num);
      res = num - cel;
      return Math.floor(res * 100) / 100; 
   } else {
      cel = Math.floor(num);
      return num - cel;
   }
}
/**
* Возвращает строку str с заглавным первым символом..
*
* @param {string} str Вводимая строка.
* @return {string} str, возвращает строку str с заглавным первым символом.
*/
function ucFirst(str){
   if (!str) return str;
   else return str[0].toUpperCase() + str.slice(1);
}
/**
* Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false..
*
* @param {string} str Вводимая строка.
* @param {string} strNew перевод строки в нижний регистр.
* @param {string} strNew1 перевод строки в верхний регистр.
* @return {string} strNew strNew1, возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
*/
function checkSpam(str){
   let strNew = str.toLowerCase();
   let strNew1 = str.toUpperCase();
  return strNew.includes("xxx") || strNew.includes("viagra") || strNew1.includes("XXX") || strNew1.includes("VIAGRA") ;
}
