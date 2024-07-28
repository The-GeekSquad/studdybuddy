import * as Index from './index';

var auth = Index.auth;

document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.getElementById('login-form');
    let signUpForm = document.getElementById('signup-form');
    let passResetForm = document.getElementById('pass-reset-form');
        
    if (loginForm) {
        loginForm.addEventListener('submit', () => {
            let formData = new FormData(loginForm);
            
            Index.loginEmailPass(formData.get('email'), formData.get('password'));
        });
    }
    
    if (signUpForm) {
        signUpForm.addEventListener('submit', () => {
            let formData = new FormData(signUpForm);
            
            Index.signUpEmailPass(formData.get('email'), formData.get('password'));
        });
    }

    if (passResetForm) {
        passResetForm.addEventListener('submit', () => {
            let formData = new FormData(passResetForm);
            
            Index.resetPassword(formData.get('email'));
        });
    }
});