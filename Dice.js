
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
    pictures[1] = "<img src='https://i.pinimg.com/236x/ea/74/64/ea7464d0770902b7914e50d999f74281.jpg'>";
    pictures[2] = "<img src='https://i.pinimg.com/236x/7f/61/02/7f61023837aa64b7cea96e1dd7f62013.jpg'>";
    pictures[3] = "<img src='https://i.pinimg.com/236x/cd/9d/9b/cd9d9b0305278ceebf3640475261864b.jpg'>";
    pictures[4] = "<img src='https://i.pinimg.com/236x/e7/14/c5/e714c59afb4c8a8f6aac5cf0373f6b31.jpg'>";
    pictures[5] = "<img src='https://i.pinimg.com/236x/eb/e0/9c/ebe09c40004e078ce01afeeb8fb70767.jpg'>";
    pictures[6] = "<img src='https://i.pinimg.com/236x/b1/86/c0/b186c08557bab8b51ccfd511dd4d1819.jpg'>";

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

