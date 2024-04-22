const getAverage = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
const getAverageGrade = (students) =>
  getAverage(students.map((student) => getAverage(student.grades)));

module.exports = getAverageGrade;
