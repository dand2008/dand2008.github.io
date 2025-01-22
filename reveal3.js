// Debounce function to limit the rate of scroll event firing
function debounce(func, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
    };
  }
  
  function reveal() {
    var reveals = document.querySelectorAll(".info");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  // Add a debounced scroll event listener
  window.addEventListener("scroll", debounce(reveal, 450)); // Adjust the delay as needed