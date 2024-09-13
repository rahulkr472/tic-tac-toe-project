let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msg-container") 
let msg = document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn");


let turnO = true;
let count = 0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
box.addEventListener('click', () => {
    if(turnO) {
      box.innerText = "O"; //player O
       turnO = false;
    } else {
        box.innerText = "X" //player X
        turnO = true; 
    }
    box.disabled = true;
    count++
 let winner = checkwinner();
 if (count === 9 && !winner){
    draw();
 }
})
})

const draw = () => {
    msg.innerText = "game was draw"
    msgcontainer.classList.remove("hide")
    disabledboxes();
};

const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.remove("hide")
    msg.innerText = "play Again"
  

}

const newgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide")
   
}



const showwinner = (winner) => {
    msg.innerText = `congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disabledboxes();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showwinner(pos1);
                return true
            }
        }
    }
}

const disabledboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerText = ""
    }
}

   

reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", newgame);

