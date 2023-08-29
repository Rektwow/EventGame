const allGameFields = document.querySelectorAll(".gameField");
let nextFieldTS = Date.now();
let gamePoints = 0;
let gameMoves = 0;

allGameFields.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
        event.target.classList.add("myhover");
        if (event.target.classList.contains("active")) {
            console.log("Dauer: " + (Date.now() - nextFieldTS));
            let deltaMS = Date.now() - nextFieldTS;
            if (deltaMS < 1000) {
                gamePoints += Math.floor((1000 - deltaMS)/100);
                document.querySelector("#gamePoints").innerHTML = gamePoints;
            }
            gameMoves++;
            document.querySelector("#gameMoves").innerHTML = gameMoves;
            nextField(event.target);
        }
        //console.log(event);
    });
    element.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("myhover");
        //console.log(event);
    });
});


function nextField(activeElement) {
    let tempIndex = 0;
    do {
        tempIndex = Math.floor(Math.random() * allGameFields.length);
    } while(allGameFields[tempIndex].classList.contains("active"));

    allGameFields[tempIndex].classList.add("active");
    nextFieldTS = Date.now();

    if (activeElement != undefined) {
        activeElement.classList.remove("active");
    }
}

nextField();