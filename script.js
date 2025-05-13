document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.main-nav ul li, .sidebar-nav ul li');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    
    // Highlight active nav item
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
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
    
    // Close sidebar when clicking a link
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        });
    });
});