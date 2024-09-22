const myText = document.getElementById("myText");
const mySubmit = document.getElementById("submit-btn");
const resultElement = document.getElementById("result-element");
let age;

mySubmit.onclick = () => {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are TOO OLD to enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `You can't enter. You were just born.`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    resultElement.textContent = `Your age can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ years old to enter this site`;
  }
};
