var input = document.getElementById('dog_age');
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let dogAge = input.value;
    let humanAge;
    humanAge = (dogAge - 2) * 4 + 21;
  document.getElementById("h2id").innerHTML = `Your dog is ${humanAge} years old in human years.`;
});