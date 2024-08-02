const toggleButton = document.querySelector('.toggleBtn');
toggleButton.addEventListener('click', () => {
    toggleFunction();
})


function toggleFunction() {
    const mobileLink = document.querySelector(".mobileLinks");
    if (mobileLink.style.display === "flex") {
        mobileLink.style.display = "none";
    } else {
        mobileLink.style.display = "flex";
    }
  }

