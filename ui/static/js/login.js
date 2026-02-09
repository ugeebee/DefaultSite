// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Switch to Signup
    signupBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    // Switch to Login
    loginBtn.addEventListener('click', () => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    // Basic Form Submission Handling
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(`${form.id} submitted!`);
            // Here is where you would normally send data to your server
        });
    });
});