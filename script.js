let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let newButton = document.querySelector(".new");
let msg = document.querySelector(".msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if(turnO){
            box.innerText = "O";
            turnO = false;
            // box.classList.add("o");

        }else{
            box.innerText = "X";
            turnO = true;
            // box.classList.add("x");
        }
        box.disabled = true;
        count++;
        
        let iswin = checkWin();
        if(count === 9 && ! iswin){
            msg.innerText=`Game is Draw`;
            msgcontainer.classList.remove("hide");
            disableBoxes();
        }

        checkWin();
    });
});

const disableBoxes = () => {
    for (box of boxes ){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWin = () => {
    for (pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val=== pos3val){
            console.log("Winner is " + pos1val);
            // alert("Winner is " + pos1val);
            showWinner(pos1val); 
        }
       }
    }
    
};

const resetGame = () => {
    turnO = true;
    msgcontainer.classList.add("hide");
    enableBoxes();

}


reset.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);