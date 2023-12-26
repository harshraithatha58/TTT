let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

resetBtn.addEventListener("click", () => {
    window.location.href = "./index.html"
})

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.color = "#E6AF2E";
    });

    box.addEventListener("mouseout", () => {
        box.style.color = "#001514";
    });
    box.addEventListener("click", () => {
        // console.log("box was clickded");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        box.style.color = "#001514";
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        val1 = boxes[pattern[0]].innerText
        val2 = boxes[pattern[1]].innerText
        val3 = boxes[pattern[2]].innerText

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                if (turnO) {
                    winner = "X";
                } else {
                    winner = "O";
                }
                for (let i = 0; i < 9; i++) {
                    boxes[i].disabled = true;
                }
                alert(`Winner is ${winner}`);
                window.location.href = "./index.html"
            }
        }
    }
}