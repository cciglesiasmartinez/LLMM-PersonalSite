/*
 * This script creates an evenlistener for the burguer menu button
 * which toggles the class "active" (becoming display: flex) for the 
 * menu. Giving its functionality.
 */

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelectorAll('.bars-icon')[0];
    const menu = document.querySelectorAll('.collapse-menu-mobile')[0];
  
    burger.addEventListener('click', function () {
      menu.classList.toggle('active');
      console.log("Clickinnn")
    });
  });