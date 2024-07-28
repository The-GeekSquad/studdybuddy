import * as Index from './index';

document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');
    const passResetForm = document.getElementById('pass-reset-form');

    // Show the login/signup modal
    openLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close the modal
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Handle tab switching between Login and Signup
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

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');
            
            Index.loginEmailPass(email, password)
                .then(() => {
                    console.log("User logged in successfully");
                    // Handle successful login (e.g., redirect to a dashboard)
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        // User not found, prompt for sign-up
                        if (confirm("No account found with this email. Would you like to sign up?")) {
                            showSignUpForm(email);
                        }
                    } else {
                        console.error("Login error:", error.message);
                        alert("Login failed: " + error.message);
                    }
                });
        });
    }

    // Handle signup form submission
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(signUpForm);
            const email = formData.get('email');
            const password = formData.get('password');
            
            Index.signUpEmailPass(email, password)
                .then(() => {
                    console.log("User signed up successfully");
                    // Handle successful signup (e.g., redirect to a welcome page)
                })
                .catch(error => {
                    console.error("Signup error:", error.message);
                    alert("Signup failed: " + error.message);
                });
        });
    }

    // Handle password reset form submission
    if (passResetForm) {
        passResetForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(passResetForm);
            const email = formData.get('email');
            
            Index.resetPassword(email)
                .then(() => {
                    console.log("Password reset email sent");
                    alert("Password reset email sent to " + email);
                })
                .catch(error => {
                    console.error("Password reset error:", error.message);
                    alert("Password reset failed: " + error.message);
                });
        });
    }

    // Function to show the signup form and pre-fill the email
    function showSignUpForm(email) {
        document.getElementById('Login').style.display = 'none';
        document.getElementById('Signup').style.display = 'block';
        tabLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('.tablinks[onclick*="Signup"]').classList.add('active');
        if (email) {
            signUpForm.querySelector('input[name="email"]').value = email;
        }
    }
});
