const lyrics = document.getElementById("lyrics");
const btn = document.getElementById("lBtn");
var bottles = 99;

btn.addEventListener("click", showLyrics);

function showLyrics() {
    if (bottles > 1) {
        lyrics.innerHTML += `<br>${bottles} bottles of beer on the wall, ${bottles} bottles of beer.<br>Take one down and pass it around, ${--bottles} bottles of beer on the wall.<br>`;
    } else if (bottles === 1) {
        lyrics.innerHTML += `<br>${bottles} bottles of beer on the wall, ${bottles} bottles of beer.<br>Take one down and pass it around, no more bottles of beer on the wall.<br>`;
        bottles--;
    } else {
        lyrics.innerHTML += `<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall.<br>`;
        bottles = 99;
    }
}
