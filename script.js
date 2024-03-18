
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const thirdQuestion = document.querySelectorAll(".question")[2];

let clickCount = 0;

yesBtn.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
        question.innerHTML = "I Like You";
        secondQuestion.innerHTML = "How About You!!";
        thirdQuestion.innerHTML = " ";
        yesBtn.innerHTML = " I Think Soo .... ";
        img.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
        yesBtn.removeEventListener("click");
        secYesBtn.removeEventListener("click");
    } else if (clickCount === 2) {
        window.open("https://www.instagram.com/_leotrim.th");
    }
});




noBtn.addEventListener("mouseover", () => {
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})

