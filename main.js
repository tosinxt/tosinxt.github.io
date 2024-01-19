document.querySelector(".intro").classList.add("go");

let response = "";

const sendMail = () => {
    let ajaxUrl = `send-mail.php?response=${response}`;
    let ajaxRequest = new XMLHttpRequest();
    
    ajaxRequest.open("GET", ajaxUrl);
    ajaxRequest.send();
};

const hearts = (sceneName) => {
    let scene = document.querySelector(sceneName);

    let heart = document.createElement("span");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * 100);

    heart.style.bottom = `${y}px`;
    heart.style.left = `${x}px`;
    heart.classList.add("heart");

    scene.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
};

const yes = () => {
    document.querySelector(".answers").style.display = "block";
    document.querySelector(".answers .si").style.display = "flex";

    response = "Dijo que si :)";

    sendMail();
};

const no = () => {
    document.querySelector(".answers").style.display = "block";
    document.querySelector(".answers .no").style.display = "flex";

    response = "Dijo que no :(";

    sendMail();
};

const exit = () => {
    window.top.close();
};

const flipCard = () => {
    document.querySelector(".flip-card").classList.toggle("active");
}

setInterval(() => {
    hearts(".hearts");
    hearts(".si .hearts");
}, 100);

setInterval(() => {
    hearts(".front .hearts");
    hearts(".back .hearts");
    hearts(".hearts-broken");
}, 500);
