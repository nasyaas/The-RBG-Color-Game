//MODAL
var modal = $(".modal")[0];
var modalBtn = $("#modalBtn")[0];
var closeBtn = $(".closeBtn")[0];

//Listen for open click
modalBtn.addEventListener("click", openModal);

//Listen for close click
closeBtn.addEventListener("click", closeModal);

//Listen for outside click
window.addEventListener("click", clickOutside);

//Function to open modal
function openModal() {
  modal.style.display = "block";
}

//Function to close modal
function closeModal() {
  modal.style.display = "none";
}

//Function to close from outside click
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
