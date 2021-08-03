function checkZero(x) {
  if (x < 10) return (`0${x}`);
  return x;
 } //if the number is less than 10 add 0 in front of it

function getFormattedDate(d) {
  let str1, 
      str2,
      day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  str1 = `${checkZero(d.getDate())}.${checkZero(d.getMonth() + 1)}.${d.getFullYear()}`;
  str2 = `${checkZero(d.getHours())}:${checkZero(d.getMinutes())} ${day[d.getDay()]}`;

  return str1 + ' ' + str2;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday
