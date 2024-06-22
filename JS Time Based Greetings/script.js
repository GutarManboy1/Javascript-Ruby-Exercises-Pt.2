let container = document.querySelector(".container")
let timeNow = new Date().getHours();
let minutesNow = new Date().getMinutes();
timeNow = 19;
console.log(timeNow, minutesNow);

let greeting = timeNow >= 5 && timeNow < 12
    ? "good morning"
    : timeNow >= 12 && timeNow <= 18
        ? "sup foo"
        : "sleep time!";
console.log(greeting);

container.innerHTML = `<h1>${greeting}</h1>`;