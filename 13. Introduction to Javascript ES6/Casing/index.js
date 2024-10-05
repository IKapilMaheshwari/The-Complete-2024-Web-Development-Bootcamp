const btn = document.getElementById('Sbtn');
const input = document.getElementById('name');
const output = document.getElementById('h1id');

btn.addEventListener('click', () => {
    let name = input.value;
    output.innerHTML = `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
});