function validateForm() {
  var email = document.querySelector('input[type="text"]').value;
  var password = document.querySelector('input[type="password"]').value;

  if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
  }

  if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
  }

  return true;
}


function showFormWithAnimation() {
  var wrapper = document.querySelector('.wrapper');
  wrapper.style.display = 'block'; // Display the form
  wrapper.classList.add('fade-in'); // Add fade-in animation
}


window.addEventListener('load', showFormWithAnimation);


const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach((box, index) => {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#33fff6']; 
    const hoverInfo = box.querySelector('.hover-info');
    hoverInfo.style.backgroundColor = colors[index % colors.length];

    box.addEventListener('mouseenter', () => {
        hoverInfo.style.backgroundColor = colors[index % colors.length];
    });

    box.addEventListener('mouseleave', () => {
        hoverInfo.style.backgroundColor = colors[index % colors.length];
    });
});
