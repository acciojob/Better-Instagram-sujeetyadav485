//your code here
const divs = document.querySelectorAll('.image');

// Set the position of each div to absolute
divs.forEach((div) => {
  div.style.position = 'absolute';
});

// Initialize the dragStartIndex variable
let dragStartIndex;
divs.forEach((div, index) => {
    div.addEventListener('dragstart', () => {
      dragStartIndex = index;
    });
  });
  
  // Add a dragover event listener to each div
  divs.forEach((div) => {
    div.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  });
  divs.forEach((div, index) => {
    div.addEventListener('drop', () => {
      // Swap the background images of the two divs
      let temp = divs[dragStartIndex].style.backgroundImage;
      divs[dragStartIndex].style.backgroundImage = div.style.backgroundImage;
      div.style.backgroundImage = temp;
    });
  });