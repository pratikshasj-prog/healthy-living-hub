/**
 * HEALTHY LIVING HUB - MAIN JAVASCRIPT
 * Handles mobile navigation, dynamic search & filtering, form validations,
 * reading progress bar, clipboard sharing, FAQ accordion, and toast alerts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initReadingProgress();
  initBlogFilterAndSearch();
  initNewsletterForms();
  initContactForm();
  initShareButtons();
  initFaqAccordion();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');

  if (!menuBtn || !drawer || !backdrop) return;

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   2. Active Navigation Link Highlighting
   -------------------------------------------------------------------------- */
function initActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href').toLowerCase();
    
    // Check if current path ends with this href or is root index
    if (currentPath.endsWith(href) || 
       (currentPath.endsWith('/') && href === 'index.html') ||
       (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href !== 'index.html' && currentPath.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Article Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Blog Filter, Live Search & Sorting (blog.html)
   -------------------------------------------------------------------------- */
function initBlogFilterAndSearch() {
  const blogContainer = document.querySelector('.blog-archive-container');
  if (!blogContainer) return;

  const searchInput = document.getElementById('articleSearch');
  const searchClear = document.querySelector('.search-clear-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const sortSelect = document.getElementById('articleSort');
  const articles = Array.from(document.querySelectorAll('.articles-grid .article-card'));
  const countDisplay = document.getElementById('resultsCount');
  const noResultsBox = document.getElementById('noResultsBox');
  const articlesGrid = document.querySelector('.articles-grid');

  let activeCategory = 'all';
  let searchQuery = '';

  // Check URL parameters for direct category or search links
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramSearch = urlParams.get('search');

  if (paramCategory) {
    activeCategory = paramCategory.toLowerCase().trim();
    filterPills.forEach(pill => {
      if (pill.dataset.category.toLowerCase() === activeCategory) {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  }

  if (paramSearch && searchInput) {
    searchQuery = paramSearch.toLowerCase().trim();
    searchInput.value = paramSearch;
    if (searchClear) searchClear.style.display = 'block';
  }

  function applyFilters() {
    let visibleCount = 0;

    articles.forEach(card => {
      const title = (card.querySelector('.article-card-title')?.textContent || '').toLowerCase();
      const excerpt = (card.querySelector('.article-card-excerpt')?.textContent || '').toLowerCase();
      const category = (card.dataset.category || '').toLowerCase();

      const matchesCat = (activeCategory === 'all') || (category === activeCategory);
      const matchesSearch = !searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery) || category.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update count display
    if (countDisplay) {
      countDisplay.textContent = `Showing ${visibleCount} article${visibleCount === 1 ? '' : 's'}`;
    }

    // Toggle empty state
    if (noResultsBox) {
      noResultsBox.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (searchClear) {
        searchClear.style.display = searchQuery ? 'block' : 'none';
      }
      applyFilters();
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        searchInput.focus();
        applyFilters();
      });
    }
  }

  // Handle Category Pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category.toLowerCase().trim();
      applyFilters();
    });
  });

  // Handle Sorting
  if (sortSelect && articlesGrid) {
    sortSelect.addEventListener('change', () => {
      const mode = sortSelect.value;
      const sorted = [...articles].sort((a, b) => {
        if (mode === 'readingTime') {
          const timeA = parseInt(a.dataset.readingTime || '0', 10);
          const timeB = parseInt(b.dataset.readingTime || '0', 10);
          return timeA - timeB;
        } else if (mode === 'title') {
          const titleA = a.querySelector('.article-card-title').textContent.trim();
          const titleB = b.querySelector('.article-card-title').textContent.trim();
          return titleA.localeCompare(titleB);
        } else {
          // Default: date newest
          const dateA = new Date(a.dataset.date || '2026-01-01');
          const dateB = new Date(b.dataset.date || '2026-01-01');
          return dateB - dateA;
        }
      });

      sorted.forEach(card => articlesGrid.appendChild(card));
    });
  }

  // Initial Filter Run
  applyFilters();
}

/* --------------------------------------------------------------------------
   5. Newsletter Form Validation & Toast Notification
   -------------------------------------------------------------------------- */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailVal || !emailRegex.test(emailVal)) {
        showToast('Please enter a valid email address.', '⚠️');
        emailInput.focus();
        return;
      }

      // Success demonstration
      showToast('Thank you for subscribing to Healthy Living Hub! 🌱', '✓');
      emailInput.value = '';
    });
  });
}

/* --------------------------------------------------------------------------
   6. Contact Form Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    // Reset error states
    [nameInput, emailInput, messageInput].forEach(inp => {
      if (inp) inp.classList.remove('error');
    });

    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please complete all required fields correctly.', '⚠️');
      return;
    }

    // Success response
    showToast('Message sent! Thank you for reaching out to Healthy Living Hub.', '✓');
    contactForm.reset();
  });
}

/* --------------------------------------------------------------------------
   7. Copy Link & Social Share
   -------------------------------------------------------------------------- */
function initShareButtons() {
  const copyBtns = document.querySelectorAll('.copy-link-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Article link copied to clipboard! 📋', '✓');
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Article link copied to clipboard! 📋', '✓');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. FAQ Accordion Component
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other open items
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const topBtn = document.getElementById('backToTopBtn');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   10. Toast Notification System
   -------------------------------------------------------------------------- */
let toastTimeout;
function showToast(message, icon = '✓') {
  let toast = document.querySelector('.toast-container');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-container';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}
