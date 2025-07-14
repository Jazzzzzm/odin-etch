
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

btn.addEventListener("click" , function(){
    let gridNum = prompt("Enter a square number", "16");
    container.innerHTML = "";
    generateGrid(parseInt(gridNum));
});

function randomColour(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function changeColour(element, colour){
    element.style.backgroundColor = "#" + colour;
}

function generateGrid(num){
    for(let i = 0; i < num; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        let dim = 960/num;

        for(let j = 0; j < num; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.width = dim + "px";
            newDiv.style.height = dim + "px";
            newDiv.addEventListener("mouseover", () => changeColour(newDiv, randomColour()));
            row.appendChild(newDiv);
        }
        container.appendChild(row);
    }
}

generateGrid(16);