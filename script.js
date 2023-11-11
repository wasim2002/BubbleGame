function bubbles() {
    let printBubble = ""
    for (let i = 1; i <= 189; i++) {
        let raNu = Math.floor(Math.random() * 10)
        printBubble += `<div class="bubble">${raNu}</div>`
    }
    document.querySelector(".bottom").innerHTML = printBubble
}
let rn = ""
function hit() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector(".hit").textContent = rn
}
function timer() {
    let time = 60;
    let interval = setInterval(() => {
        if (time > 0) {
            time--
            document.querySelector(".time").textContent = time
        } else {
            clearInterval(interval);
            document.querySelector(".hit").innerHTML = "";
            document.querySelector(".time").innerHTML = "";
            document.querySelector(".score").innerHTML = "";
            document.querySelector(".bottom").innerHTML = `<h1>Your Score is :- <strong>${score}</strong></h1>`;
        }
    }, 1000);
}
let score = 0
function scoreInc() {
    score += 10
    document.querySelector(".score").textContent = score
}
function scoreDec() {
    if (score > 0) {
        score -= 5
        document.querySelector(".score").textContent = score
    }
}
document.querySelector(".bottom").addEventListener("click", function (dets) {
    let clicked = Number(dets.target.innerHTML)
    if (rn === clicked) {
        scoreInc()
        hit()
        bubbles()
    } else {
        scoreDec()
    }
})
bubbles()
hit()
timer()
gsap.from(".bubble", {
    scale: 0
})