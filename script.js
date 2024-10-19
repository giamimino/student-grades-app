const subjects = document.querySelectorAll("#subject");

//studen grade calc

const nums = [10, 10, 10, 8, 8, 10, 9, 8, 9, 10, 10, 10, 10, 10, 10, 10];
const sum = nums.reduce((acc, num) => acc + num, 0);
const gradeCalc = sum / nums.length;
const round = Math.round(gradeCalc);

console.log(round);

