let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newg = document.querySelector(".win");
let msg = document.querySelector("#msg");

let turno = false;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let startWithX = true;

const resetGame = () => {
    turno = startWithX;
    startWithX = !startWithX;
    newg.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
        box.style.backgroundColor = "";
        box.disabled = false;
    }
}


const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno){
            box.innerText = "O";
            box.style.backgroundColor = "#f4845f";
            box.style.color = "#fae0e4";
            turno = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#ffdab9";
            box.style.color = "#ff0a54";
            turno = true;
        }
        box.disabled = true;
        chwin();
    });
});

const showwin = (winner) => {
    msg.innerText = `CONGRATULATIONS \n Mr.${winner}`;
    newg.classList.remove("hide");
    disablebox();
}

const chwin = () => {
    for (let pattern of winPatterns) {
        let po1 = boxes[pattern[0]].innerText; 
        let po2 = boxes[pattern[1]].innerText; 
        let po3 = boxes[pattern[2]].innerText;  
        if (po1 != "" && po1 == po2 && po2 == po3) {
            showwin(po1);
        }     
    }
};

reset.addEventListener("click", resetGame);
