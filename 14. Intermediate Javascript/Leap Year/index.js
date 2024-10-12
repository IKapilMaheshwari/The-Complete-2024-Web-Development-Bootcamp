const year = document.getElementById("year");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", showResult);

function showResult() {
    var yearValue = year.value;
    if(yearValue % 4 === 0 && yearValue % 100 !== 0 || yearValue % 400 === 0) {
        result.innerHTML = `${yearValue} is a Leap Year`;
    } else {
        result.innerHTML = `${yearValue} is not a Leap Year`;
}
}