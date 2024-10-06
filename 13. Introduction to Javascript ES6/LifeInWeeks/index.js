var age = document.getElementById('age');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {lifeInWeeks(age.value)});

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let daysRemaining = yearsRemaining * 365;
    let weeksRemaining = yearsRemaining * 52;
    let monthsRemaining = yearsRemaining * 12;
    document.getElementById('h2id').innerHTML = `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`
}