let box = document.querySelectorAll(".case");
let firstPlayer = "X";
const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let player1 = [];
let player2 = [];
let overlay = document.querySelector(".overlay");

const endGame = () => {
  box.forEach((e) => {
    e.classList.add("played");
    overlay.style.display = "block";
    document.querySelector(".endtitle").textContent = firstPlayer + " WON !" ;
  });
};

const isWon = (targettedPlayer) => {
    winConditions.forEach((currentCombination) => {
      if (currentCombination.every((e) => targettedPlayer.includes(e))) {
        endGame();
      };
    });
};

box.forEach((e, index) => {
  e.dataset.number = index + 1;
  e.addEventListener("click", (event) => {
    event.target.textContent = firstPlayer;
    if (firstPlayer === "X") {
        player1.push(parseInt(event.target.dataset.number));
        isWon(player1);
        firstPlayer = "O";
    } else {
        player2.push(parseInt(event.target.dataset.number));
        isWon(player2);
        firstPlayer = "X";
    }
    event.target.classList.add("played");
  });
});

document.querySelector(".abort").addEventListener("click", () => {
    overlay.style.display = "none";
}); 

document.querySelector(".reset").addEventListener("click", () => {
    overlay.style.display = "none";
    player1 = [];
    player2 = [];
    box.forEach((e) => {
        e.textContent = "";
        e.classList.remove("played");
    });
}); 

