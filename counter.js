const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = () => {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = () => {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = () => {
  count = 0;
  countLabel.textContent = count;
};
