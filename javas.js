/* Getting elements from html file */
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

/* Added event to generate a grid with a specified number from the user */
btn.addEventListener("click" , function(){
    let gridNum = prompt("Enter a square number", "16");
    container.innerHTML = "";
    generateGrid(parseInt(gridNum));
});

/* Function to generate a random hex code for colour */
function randomColour(){
    return Math.floor(Math.random()*16777215).toString(16);
}

/* Function to change the colour of a specified element */
function changeColour(element, colour){
    element.style.backgroundColor = "#" + colour;
}

/* Function to generate num^2 colour-changing divs */
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

/* Generating default grid */
generateGrid(16);