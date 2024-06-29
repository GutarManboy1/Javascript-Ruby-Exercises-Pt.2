const countValue = document.getElementById("#count");
const colorPart = document.querySelector(".color-part");
const container = document.querySelector(".container");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");
const wrapper = document.querySelector(".wrapper");

const colors = {
    color1: {
        current: "#027802",
        new: "#025602",
    },
    color2: {
        current: "#950303",
        new: "#6c0303",
    },
    color3: {
        current: "#01018a",
        new: "#01015a",
    },
    color4: {
        current: "#919102",
        new: "#6e6e02"
    }
}

let randomColors = [];
let pathGeneratorBool = false;
let count, clickCount = 0;

//function to start game
startButton.addEventListener("click", () => {
    count = 0;
    clickCount = 0;
    randomColors = [];
    pathGeneratorBool = false;
    pathGenerate();
});
//function to generate colors
const pathGenerate = () => {
    randomColors.push(generateRandomValue(colors))
    count = randomColors.length;
    pathGeneratorBool = true;
    pathDecide(count);
}
const generateRandomValue = (obj) => {
    let array = Object.keys(obj);
    return array[Math.floor(Math.random() * array.length)];
}
const pathDecide = async (count) => {
    countValue.innerText = count;
    for (let i of randomColors) {
        let currentColor = document.querySelector(`${i}`);
        await delay(500);
        currentColor.style.backgroundColor = `${colors[i]["new"]}`;
        await delay(600);
        currentColor.style.backgroundColor = `${colors[i]["current"]}`;
        await delay(600);
    }
    pathGeneratorBool = false;
}

//blink effect
async function delay(time) {
    return await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}