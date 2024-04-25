let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turno = true;

const resetGame = () => {
  turno = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turno) {
      //turn O
      box.innerText = "o";
      turno = false;
    } else {
      //turn X
      box.innerText = "x";
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `congratulation winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let posv2al = boxes[pattern[1]].innerText;
    let posv3al = boxes[pattern[2]].innerText;

    if (pos1val != "" && posv2al != "" && posv3al != "") {
      if (pos1val == posv2al && posv2al == posv3al) {
        console.log("Winner is ", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
