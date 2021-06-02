let quizArea = document.getElementById('btnGoHere');

console.log(quizArea)

let startButton = document.getElementById('btnStart');

let btns = [1,2,3,4]; 

function getStarted() {
    for (var i = 0; i < btns.length; i++){
        btn = document.createElement('BUTTON');
        btn.innerText = btns[i];
        quizArea.appendChild(btn);
    }
}