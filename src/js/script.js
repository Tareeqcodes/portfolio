document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box');

  window.addEventListener('scroll', checkBoxes);

  function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4;

      boxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;

          if (boxTop < triggerBottom) {
              box.classList.add('show');
          } else {
              box.classList.remove('show');
          }
      });
  }

  checkBoxes(); // Initial check
  var acc = document.getElementsByClassName('accordion');
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle('active');
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
  
  ()=> {
    console.log('hello word !');
  }

});

