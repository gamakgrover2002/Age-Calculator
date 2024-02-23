const myFunction = () => {
  var day = document.getElementById("day").value;
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value - 1;
  var userdate = new Date(year, month, day);
  var nowdate = new Date();
  var time = nowdate - userdate;
  var years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
  time = time - years * Math.floor(1000 * 60 * 60 * 24 * 365);
  var months = Math.floor(time / (1000 * 60 * 60 * 24 * 30.4375));
  time = time - months * Math.floor(1000 * 60 * 60 * 24 * 30.4375);
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  console.log(months);
  document.getElementById("out-day").innerText = days;
  document.getElementById("out-month").innerText = months;
  document.getElementById("out-year").innerText = years;
};
