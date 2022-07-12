import "./styles.css";

let randomNumber = 4;

const returnDigit = (number) => {
  switch (number) {
    case "0":
      return "🯰";
    case "1":
      return "🯱";
    case "2":
      return "🯲";
    case "3":
      return "🯳";
    case "4":
      return "🯴";
    case "5":
      return "🯵";
    case "6":
      return "🯶";
    case "7":
      return "🯷";
    case "8":
      return "🯸";
    case "9":
      return "🯹";
    case ":":
      return ":";
    default:
      return "🯰";
  }
};

function toggleGlitchClass() {
  document.getElementById("app").classList.toggle("glitching");
}

function activateGlitches() {
  document.getElementById("app").className = "glitching";
}

activateGlitches();

setInterval(toggleGlitchClass, 30000);

const writeTextToHTML = (message) => {
  const output = document.getElementById("app");

  const digits = [...message].map((char) => returnDigit(char));
  const digitString = digits.join("");

  output.innerHTML = `${digitString}`;
};

const resetTimer = () => {
  const now = new Date();
  const hours = now.getHours();

  const mins = parseInt(now.getMinutes());

  if (mins === 0) {
    getNewRandomNumber();
  }
  let newHours = hours;
  let randomMinutes = mins + randomNumber;
  if (mins + randomNumber > 59) {
    randomMinutes = randomMinutes - 60;
    newHours++;
  }

  const message = `${newHours}:${randomMinutes}`;
  writeTextToHTML(message);
};

const updateIntervall = 60 * 1000;
function callEveryHour() {
  setInterval(resetTimer, updateIntervall);
}

const getNewRandomNumber = () => {
  randomNumber = 4 + Math.floor(Math.random() * 7);
};

getNewRandomNumber();
resetTimer();
callEveryHour();
