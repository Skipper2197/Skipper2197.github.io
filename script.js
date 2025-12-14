// We wanted to make the website responsive on mobile, so we created a
// menu icon that displays a menu on click (aka on tap). This function 
// is what displays the menu options. We also used media queries in our
// css file to hide the menu icon when on desktop, and just display the
// normal menu options instead. 

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}