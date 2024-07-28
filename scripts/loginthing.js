document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');

    // Open modal
    openLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close modal
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Tab switching
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', (event) => {
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });

            tabLinks.forEach(tabLink => {
                tabLink.classList.remove('active');
            });

            document.getElementById(event.target.textContent).classList.add('active');
            event.currentTarget.classList.add('active');
        });
    });

    // Default to showing the login tab content
    document.getElementById('Login').classList.add('active');
    document.querySelector('.tablinks:first-of-type').classList.add('active');
});
