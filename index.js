import datetime from './utils/DateTime.js';

const dayOfWeek = datetime.dayOfWeek('1900', '01', 1)
const dayOfWeek2 = datetime.dayOfWeek('2004', '02', '7')

console.log(dayOfWeek);
console.log(dayOfWeek2);