const guestName = document.getElementById("name");
var guestList = ["Kapil", "Disha", "Saumya", "Anup", "Harshit"];
const btn = document.getElementById("btn");
const img = document.getElementById("img");
const result = document.getElementById("result");

btn.addEventListener("click", checkGuest);

function checkGuest() {
    var guestNameValue = guestName.value;
    guestNameValue = guestNameValue.charAt(0).toUpperCase() + guestNameValue.slice(1).toLowerCase();
    guestNameValue.trim();
    const guestNameArr = guestNameValue.split(" ");
    guestNameValue = guestNameArr[0];
    if(guestList.includes(guestNameValue)) {
        result.innerHTML = `${guestNameValue} Welcome to the Party! 🎉`;
    } else {
        img.style.visibility='hidden';
        result.innerHTML = `Sorry ${guestNameValue}, You are not invited! 😢 <br> May be next time.`;
    }
}