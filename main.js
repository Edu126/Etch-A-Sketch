const container = document.querySelector("#container");

// save viewport height for math
const contSize = window.innerHeight - container.offsetTop * 2

//set height to viewport height
container.style.height = contSize + 'px'

//set same size to width to make a square
container.style.width = container.style.height





const  btnRequest = document.querySelector("#btnRequest");
        btnRequest.addEventListener("click", askSize);


        function askSize() {
        let rows = 16;
        do
        {
          rows = +prompt("How many squares per side?");
        } while (rows > 100 || rows < 1);

        makeRows(rows);
        
}; 


function makeRows(rows){
    //clear grid entirely
    container.innerHTML = ''

    //to house our cells
    const row = document.createElement('div')
    row.classList.add('single-row')

      //create same cells as number of columns
      for (let i = 0; i < rows; i++){
        //append each cell to a row
        row.insertAdjacentHTML('beforeend', '<div class="cell"></div>')
    }

    const storedRow = row.outerHTML
    //duplicate the row the amount as the user input
    for (let j = 0; j < rows; j++){
      container.insertAdjacentHTML('beforeend', storedRow)
  }


  //set container row amount (not really)
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  //set column amount
  const allRows = document.querySelectorAll('.single-row')
  allRows.forEach(row => row.style.gridTemplateColumns = `repeat(${rows}, 1fr)`)


      //add event listener to cells
      const newCells = document.querySelectorAll('.cell')
      newCells.forEach(cell => {
          const size = contSize / rows;
          cell.style.width = size + 'px'
          cell.style.height = size + 'px'
          cell.addEventListener('mouseover', () => {cell.backgroundColor = 'black'});

          cell.style.backgroundColor = 'lightblue';
      })
  }





