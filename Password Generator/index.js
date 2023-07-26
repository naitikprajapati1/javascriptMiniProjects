const inputslider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copyBtn]");
const copyMSg = document.querySelector("[data-copyMsg]");
let upperCaseCheck = document.querySelector("#upperCase");
let lowerCaseCheck = document.querySelector("#Lowercase");
let numbersCheck = document.querySelector("#Numbers");
let symbolCheck = document.querySelector("#Symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
let symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
// set strength color to gray
setIndicator('#ccc')
// set password length according to  slider changes
function handleSlider() {
  inputslider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;

}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomNum() {
  return getRandomNum(0, 9);
}
function generateLowerCase() {
  return String.fromCharCode(getRandomNum(97, 123));
}
function generateUpperCase() {
  return String.fromCharCode(getRandomNum(65, 91));
}
function genrateSymbol() {
  const randomNum = getRandomNum(0, symbol.length);
  return symbol.charAt(randomNum);
}

function calculateStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;
  if (upperCaseCheck.checked) hasUpper=true;
  if (lowerCaseCheck.checked) hasLower=true;
  if (numbersCheck.checked) hasNumber=true;
  if (symbolCheck.checked) hasSymbol=true;
    
  
  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMSg.innerText = "Copied";
  } catch (error) {
    copyMSg.innerText = "Failed to copy";
  }
  // to make copy wala text visible
  copyMSg.classList.add("active");
  setTimeout(() => {
    copyMSg.classList.remove("active");
  }, 2000);
}

// function shufflePassword(shufflePAssword){
//     console.log(shufflePAssword);
//     // Fisher Yates MEthod
// }
//
function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
    if (passwordLength < checkCount) {
      passwordLength = checkCount;
      handleSlider();
    }
  });
}
allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

inputslider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", (e) => {
  if (passwordDisplay.value) {
    copyContent();
  }
});

generateBtn.addEventListener("click", function (e) {
  document.getElementById('myaudio').play();

  if (checkCount <= 0) {
    return;
  }
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  // let's the find new password

  // remove all password
  password = "";

  // if (upperCaseCheck.checked)
  // {
  //     password+=generateUpperCase();
  // }
  // if (lowerCaseCheck.checked) {
  //     password+=generateLowerCase();
  // }
  // if(numbersCheck.checked){
  //     password+=generateRandomNum();
  // }
  // if (symbolCheck.checked) {
  //     password+=genrateSymbol();
  // }
  // console.log(password);
  // passwordDisplay.value=password;

  let funcArr = [];
  if (upperCaseCheck.checked) {
    funcArr.push(generateUpperCase());
  }
  if (lowerCaseCheck.checked) {
    funcArr.push(generateLowerCase());
  }
  if (numbersCheck.checked) {
    funcArr.push(generateRandomNum());
  }
  if (symbolCheck.checked) {
    funcArr.push(genrateSymbol());
  }
  // compolsary Addition
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i];
  }
  // reamaining addition
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randomIndex = getRandomNum(0, funcArr.length);
    password += funcArr[randomIndex];
  }
//   shuffle password
// password=shufflePAssword(Array.from(password));
passwordDisplay.value=password;
calculateStrength();

});
