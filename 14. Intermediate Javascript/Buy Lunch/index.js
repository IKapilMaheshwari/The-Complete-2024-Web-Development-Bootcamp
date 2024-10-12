const name = document.getElementById("names");
var lunchList = [" Kapil", " Disha", " Saumya", " Anup", " Harshit"];
const addNameBtn = document.getElementById("btn");
const removeNameBtn = document.getElementById("btn1");
const resultBtn = document.getElementById("btn2");
const result = document.getElementById("result");

addNameBtn.addEventListener("click", addName);
removeNameBtn.addEventListener("click", removeName);
resultBtn.addEventListener("click", showResult);

function addName() {
    var nameValue = name.value;
    nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();
    nameValue.trim();
    const nameArr = nameValue.split(" ");
    nameValue = nameArr[0];
    if(lunchList.includes(` ${nameValue}`)) {
        alert(`${nameValue} is already in the list.`);
    } else {
        lunchList.push(` ${nameValue}`);
        result.innerHTML = `LunchList: ${lunchList}`;
    }
}

function removeName() {
    var nameValue = name.value;
    nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();
    nameValue.trim();
    const nameArr = nameValue.split(" ");
    nameValue = nameArr[0];
    if(lunchList.includes(` ${nameValue}`)) {
        var index = lunchList.indexOf(` ${nameValue}`);
        lunchList.splice(index, 1);
        result.innerHTML = `LunchList: ${lunchList}`;
    } else {
        alert(`${nameValue} is not in the list.`);
    }
}

function showResult() {
    var random = Math.floor(Math.random() * lunchList.length);
    var name = lunchList[random];
    result.innerHTML = `${name} is going to buy today's Lunch! 🍔`;
}