document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.main-nav ul li, .sidebar-nav ul li');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    
    // Highlight active nav item
window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const mainNav = document.getElementById('main-nav');
    const header = document.querySelector('.main-header');
    const hamburger = document.getElementById('hamburger');

    const fromTop = window.scrollY;
    const homeHeight = homeSection.offsetHeight;
    const isMobile = window.innerWidth <= 768;

    if (fromTop > homeHeight - 100) {
        if (!isMobile) {
            mainNav.style.display = 'none';
        }
        hamburger.style.display = 'block';
        header.style.boxShadow = 'none';
        header.style.background = 'transparent';
    } else {
        if (!isMobile) {
            mainNav.style.display = 'flex';
        }
        hamburger.style.display = isMobile ? 'block' : 'none';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)';
    }
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
    // Close sidebar when clicking anywhere outside the sidebar
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnHamburger) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
});

});