const dice = document.getElementById("dice");
const diceTwo = document.getElementById("diceTwo");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const diceThree = document.getElementById("diceThree");
const diceFour = document.getElementById("diceFour");

btnOne.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = roll;
});

btnTwo.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceTwo.textContent = roll;
});
btnOne.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceThree.textContent = roll;
});

btnTwo.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceFour.textContent = roll;
});
