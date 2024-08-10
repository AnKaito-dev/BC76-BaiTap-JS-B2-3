/*
#################################################
Bài 1 - Tính tiền lương nhân viên
#################################################
*/
const calculateSalary = (salary, day) => salary * day;

document.getElementById("salary-calculator").onclick = function () {
  let salary = +document.getElementById("salary").value;
  let day = +document.getElementById("day").value;
  let salaryPerDay = calculateSalary(salary, day);
  console.log("Salary Per Day =", salaryPerDay);

  document.getElementById("salary-result").value = salaryPerDay;
};


/*
#################################################
Bài 2 - Tính giá trị trung bình
#################################################
*/
const calculateAverage = (number1, number2, number3, number4, number5) => (number1 + number2 + number3 + number4 + number5) / 5;

document.getElementById("average-calculator").onclick = function () {
  let number1 = +document.getElementById("number-1").value;
  let number2 = +document.getElementById("number-2").value;
  let number3 = +document.getElementById("number-3").value;
  let number4 = +document.getElementById("number-4").value;
  let number5 = +document.getElementById("number-5").value;
  let average = calculateAverage(number1, number2, number3, number4, number5);
  console.log("Average =", average);

  document.getElementById("average-result").value = average;
};


/*
#################################################
Bài 3 - Quy đổi tiền
#################################################
*/
const convertCurrency = (vndValue, usd) => vndValue * usd;

document.getElementById("convert").onclick = function () {
  let usd = +document.getElementById("usd").value;
  let convert = convertCurrency(23500, usd);
  console.log("USD to VND =", convert);

  document.getElementById("convert-result").value = convert;
};


/*
#################################################
Bài 4 - Tính diện tích, chu vi hình chữ nhật
#################################################
*/
const calculateArea = (width, height) => width * height;
const calculatePerimeter = (width, height) => (width + height) * 2;

document.getElementById("area-perimeter").onclick = function () {
  let width = +document.getElementById("width").value;
  let height = +document.getElementById("height").value;
  let area = calculateArea(width, height);
  let perimeter = calculatePerimeter(width, height);
  console.log("Area =", area);
  console.log("Perimeter =", perimeter);

  document.getElementById("area-result").value = "Diện tích = " + area;
  document.getElementById("perimeter-result").value = "Chu vi = " + perimeter;
};


/*
#################################################
Bài 5 - Tính tổng 2 ký số
#################################################
*/
const sumNumber = (num2num) => parseInt((num2num / 10) + (num2num % 10));

document.getElementById("sum-number").onclick = function () {
  let num2num = +document.getElementById("num2num").value;
  let sum = sumNumber(num2num);
  console.log("Sum =", sum);

  document.getElementById("sum-result").value = sum;
};