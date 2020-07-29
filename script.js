function createGrid(background = "#FFFFFF", foreground = "#000000") {
  let grid = document.createElement("div");
  grid.classList.add("grid-item");
  grid.style.background = background;
  grid.addEventListener("mouseover", function(e) {
    e.target.style.background = foreground;
  });
  return grid;
}

const container = document.querySelector(".grid-container");
let length = 16;

for (let i = 0; i < 256; ++i) {
  let grid = createGrid();
  container.appendChild(grid);
}

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", () => {
  length = prompt("Enter size", 16);
  let background = prompt("Enter background color", "#FFFFFF");
  let foreground = prompt("Enter foreground color", "#000000");

  let grids = document.querySelectorAll(".grid-item");
  grids.forEach((grid) => {
    grid.remove();
  });

  container.style.gridTemplateRows = `repeat(${length}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${length}, 1fr)`;

  const total = length * length;
  for (let i = 0; i < total; ++i) {
    let grid = createGrid(background, foreground);
    container.appendChild(grid);
  }

});

