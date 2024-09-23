
let btn = document.getElementById('playBtn');
console.log(btn)
btn.addEventListener('click', (e) => {
    document.getElementById('audio').play(); 
})



function edit() {
    var x = prompt("Type Player1 Name");
    var y = prompt("Type Player2 Name");
    document.getElementsByClassName("name")[0].innerHTML = x;
    document.getElementsByClassName("name")[1].innerHTML = y;
    

}

function play() {

    var x = (Math.floor(Math.random() * 6)) + 1;
    var y = (Math.floor(Math.random() * 6)) + 1;

    var pictures = [];
    pictures[1] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837239911350302/dice1.png?ex=66d98822&is=66d836a2&hm=f237c84285c8eec9ab7576f6e2437d8c52ee568772fdc503da475ae7745007e2&=&format=webp&quality=lossless&width=450&height=450'>";
    pictures[2] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837240305483786/dice2.png?ex=66d98822&is=66d836a2&hm=1eb7133befc935466952d3b15733f1929d0a38388a2fd32bd07a6b7818711ff7&=&format=webp&quality=lossless&width=628&height=628'>";
    pictures[3] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837240662130741/dice3.png?ex=66d98822&is=66d836a2&hm=07b598fbd8cca7f5b18b9f547b6b3f70f203a43d7eea9c1ee78d57a9a67fc953&=&format=webp&quality=lossless&width=450&height=450'>";
    pictures[4] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837241052074078/dice4.png?ex=66d98823&is=66d836a3&hm=8fcd77ae6f71f29602d5a881108fd97948fcde6c24d32d964834a326a49416fb&=&format=webp&quality=lossless&width=450&height=450'>";
    pictures[5] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837241337548800/dice5.png?ex=66d98823&is=66d836a3&hm=58b5cee1e5a7b73963d660af8d72edbb1cb59daa7934e2577b329c1b9658f1fa&=&format=webp&quality=lossless&width=628&height=628'>";
    pictures[6] = "<img src='https://media.discordapp.net/attachments/1113404400984129576/1280837241542938644/dice6.png?ex=66d98823&is=66d836a3&hm=cd1d654a5f04a6cef9bac272564ca933d18676f18fa923f604c036476e400db7&=&format=webp&quality=lossless&width=450&height=450'>";

    if (x == y) {
        document.getElementById("dice1").innerHTML = pictures[x];
        document.getElementById("dice2").innerHTML = pictures[y];
        document.getElementById("result").innerHTML = "MATCH DRAW";
        document.getElementById("result").style.color = "white";
    } else if (x > y) {
        document.getElementById("dice1").innerHTML = pictures[x];
        document.getElementById("dice2").innerHTML = pictures[y];
        document.getElementById("result").innerHTML = document.getElementsByClassName("name")[0].innerHTML + " WINS";
        document.getElementById("result").style.color = "white";
    } else {
        document.getElementById("dice1").innerHTML = pictures[x];
        document.getElementById("dice2").innerHTML = pictures[y];
        document.getElementById("result").innerHTML = document.getElementsByClassName("name")[1].innerHTML + " WINS";
        document.getElementById("result").style.color = "white";
    }
}

