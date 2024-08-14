document.querySelector('.tous.produita').addEventListener('click', function(event) {
  event.preventDefault();
  var subMenu = this.nextElementSibling;
  subMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
  
    menuIcon.addEventListener('click', function() {
      sideMenu.classList.toggle('open');
    });
  });
  
  
  