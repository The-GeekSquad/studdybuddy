document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');
    
    openLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            tabContents.forEach(content => content.style.display = 'none');
            tabLinks.forEach(link => link.className = link.className.replace(" active", ""));
            const activeTab = document.getElementById(event.target.textContent);
            if (activeTab) activeTab.style.display = 'block';
            event.currentTarget.className += " active";
        });
    });

    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle login form submission
    });

    document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle signup form submission
    });
});
