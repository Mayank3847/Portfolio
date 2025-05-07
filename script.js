// script.js (enhanced with auto-hide sidebar)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
  
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
  
      navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(current)) {
          li.classList.add('active');
        }
      });
    });
  
    // Toggle sidebar on hamburger click
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      document.body.classList.toggle('sidebar-open');
    });
  
    // Auto-close sidebar on nav link click
    navLi.forEach(li => {
      li.querySelector('a').addEventListener('click', () => {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
      });
    });
  });