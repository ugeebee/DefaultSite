document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    
    let message = "Welcome!";
    
    if (hours < 12) {
        message = "Good Morning!";
    } else if (hours < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }
    
    greetingElement.textContent = message;

    // Simple interaction
    const btn = document.getElementById('cta-button');
    btn.addEventListener('click', () => {
        alert('Welcome to the journey!');
    });
});