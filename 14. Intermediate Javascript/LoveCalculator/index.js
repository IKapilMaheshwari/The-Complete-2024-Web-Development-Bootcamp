const btn = document.getElementById('btn');
const p1 = document.getElementById('name1');
const p2 = document.getElementById('name2');
const div1 = document.getElementById('content');

btn.addEventListener('click', edditContent);

function edditContent() {
    let name1 = p1.value;
    let name2 = p2.value;
    name1 = name1.slice(0, 1).toUpperCase() + name1.slice(1).toLowerCase();
    name2 = name2.slice(0, 1).toUpperCase() + name2.slice(1).toLowerCase();
    let LoveScore = Math.random() * 100;
    LoveScore = Math.round(LoveScore);
    div1.style.textAlign = 'center';
    if(name1.slice(0, 5) == 'Kapil' && name2.slice(0, 5) == 'Disha' || name1.slice(0, 5) === 'Disha' && name2.slice(0, 5) === 'Kapil' || name1.slice(0, 5) == 'Kapil' && name2.slice(0, 5) == 'Nini' || name1.slice(0, 5) === 'Nini' && name2.slice(0, 5) === 'Kapil'  ) {
        LoveScore = 100;
    } else if(name1.slice(0, 5) == 'Disha' || name2.slice(0, 5) == 'Disha' || name1.slice(0, 5) == 'Nini' || name2.slice(0, 5) == 'Nini') {
        LoveScore = 0;
    }
    div1.innerHTML = `<h1>Love Calculator results</h1> <h2> These are the results of the calculations by Kapil:</h2> <h2 style="color: red;">${name1} 💓 ${name2} </h2> <h1 style="color: red;">${LoveScore} %</h1>`;
    if (LoveScore > 70) {
        div1.innerHTML += `<p style="text-align: left;">The chance of a relationship working out between ${name1} and ${name2} is great, so you should go for it! This relationship has a very good chance of being successful. You should put a lot of effort into it, and you will see it will be worth it. Long-term relationships, marriages, and families are founded on the kind of love that this relationship indicates.</p>`;
    } else if (LoveScore > 30) {
        div1.innerHTML += `<p style="text-align: left;">The chance of a relationship working out between ${name1} and ${name2} is big, but you must work on it. This relationship might work out, but it will require a lot of effort from both of you.</p>`;
    } else {
        div1.innerHTML += `<p style="text-align: left;">The chance of a relationship working out between ${name1} and ${name2} is not very big, but a relationship is very well possible if both of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.</p>`;
    }
}
