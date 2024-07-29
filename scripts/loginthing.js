// Import Firebase authentication functions from your index.js
import { loginEmailPass, signUpEmailPass, resetPassword } from './index';

document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');

    // Open login modal
    openLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close modal if clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Handle tab switching in the modal
    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetTab = event.currentTarget.dataset.tab;
            tabContents.forEach(content => content.style.display = 'none');
            tabLinks.forEach(link => link.classList.remove("active"));
            document.getElementById(targetTab).style.display = 'block';
            event.currentTarget.classList.add("active");
        });
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        loginEmailPass(email, password);
    });

    // Handle signup form submission
    document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        signUpEmailPass(email, password);
    });

    // Handle password reset form submission
    document.getElementById('pass-reset-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');

        resetPassword(email);
    });
});
