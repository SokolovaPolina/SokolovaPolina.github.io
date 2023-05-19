/**
* Возвращает  которая возвращает дробную часть числа num.
*
* @param {number} num Вводимое десятичное число.
* @return {number} sum, возвращает дробную часть числа.
*/
function getDecimal(num){
   let cel = Math.trunc(num);
   return num - cel; 
}