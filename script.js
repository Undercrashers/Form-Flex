const navbar = document.getElementById('navbar');
let lastScrollTop = 0;


function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '0';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '-100%';
}

window.addEventListener('resize', () => {
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth > 800) {
    sidebar.style.right = '-100%';
  }
});
