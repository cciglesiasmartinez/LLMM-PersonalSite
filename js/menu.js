document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelectorAll('.bars-icon')[0];
    const menu = document.querySelectorAll('.collapse-menu-mobile')[0];
  
    burger.addEventListener('click', function () {
      menu.classList.toggle('active');
      console.log("Clickinnn")
    });
  });