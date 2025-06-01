document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.main-nav ul li, .sidebar-nav ul li');
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  // Scroll logic for showing/hiding main nav
  window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const mainNav = document.getElementById('main-nav');
    const header = document.querySelector('.main-header');

    const fromTop = window.scrollY;
    const homeHeight = homeSection.offsetHeight;
    const isMobile = window.innerWidth <= 768;

    if (fromTop > homeHeight - 100) {
      if (!isMobile) mainNav.style.display = 'none';
      hamburger.style.display = 'block';
      header.style.boxShadow = 'none';
      header.style.background = 'transparent';
    } else {
      if (!isMobile) mainNav.style.display = 'flex';
      hamburger.style.display = isMobile ? 'block' : 'none';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.background = 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)';
    }
  });

  // Sidebar toggle
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
  });

  // Close sidebar on nav click
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    });
  });

  // Close sidebar on outside click
  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    if (!isClickInsideSidebar && !isClickOnHamburger) {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    }
  });

  // ✅ PROJECT SECTION FIX STARTS HERE

  const cards = document.querySelectorAll('.project-card');
  const toggleBtn = document.querySelector('.see-more-btn');

  if (cards.length > 0 && toggleBtn) {
    // Initially show only 4 cards
    cards.forEach((card, index) => {
      if (index < 4) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });

    // See More / See Less toggle
    toggleBtn.addEventListener('click', function () {
      const isExpanded = toggleBtn.textContent === "See Less";
      if (isExpanded) {
        cards.forEach((card, index) => {
          card.classList.remove('show');
          if (index < 4) card.classList.add('show');
        });
        toggleBtn.textContent = "See More";
      } else {
        cards.forEach(card => card.classList.add('show'));
        toggleBtn.textContent = "See Less";
      }
    });
  }

  // Expand "Continue reading"
  document.querySelectorAll('.continue-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      const fullText = card.querySelector('.project-full-text');
      fullText.classList.toggle('visible');
      button.textContent = fullText.classList.contains('visible') ? "Show less" : "Continue reading";
    });
  });

});
