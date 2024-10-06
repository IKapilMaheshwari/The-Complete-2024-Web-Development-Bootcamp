var weight = document.getElementById('weight');
var height = document.getElementById('height');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {bmi(weight.value, height.value)});

function bmi(weight, height) {
    let bmi = weight / Math.pow(height,2);
    document.getElementById('h3id').innerHTML = `Your BMI is ${Math.round(bmi)}`;

}