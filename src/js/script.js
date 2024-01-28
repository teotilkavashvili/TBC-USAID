// ------------------------Burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        burger.classList.toggle('toggle');
    });
});

// ------------------------carousel

let index = 0; 

function moveSlide(step) {
  const items = document.getElementsByClassName('carousel-item');
  const totalItems = items.length;
  
  index = (index + step + totalItems) % totalItems;
  const offset = -index * 100; 
  
  for (let item of items) {
    item.style.transform = `translateX(${offset}%)`;
  }
}

// --------------accordion-Questions

document.addEventListener('DOMContentLoaded', () => {
    const accButtons = document.querySelectorAll('.question-button');
  
    accButtons.forEach(button => {
      button.addEventListener('click', () => {
        const accContent = button.nextElementSibling;
  
        // Toggle the content display
        if (accContent.style.display === 'block') {
          accContent.style.display = 'none';
        } else {
          accContent.style.display = 'block';
        }
      });
    });
  });
  

