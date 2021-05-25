let slideIndex = 0;
carousel();

function carousel() {
  
  let x = document.getElementsByClassName("carousel");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {
  	slideIndex = 1
  } 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); 
}



let modal = document.getElementById("modal_id");

let imgs = document.getElementsByClassName("farm_imgs");
let modalImg = document.getElementById("inside_modal");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}