document.addEventListener ('DOMContentLoaded', () => {
    const SignInForm = document.querySelector ('#sign-in-form');
    const SignUpForm = document.querySelector ('#sign-up-form'); 
    

    // validation rules
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d._]{8,}$/.test(password);
        const validateUsername = (username) => /^[a-zA-Z0-9]{5,}$/.test(username);
        const validatePhone = (phone) => /^\d{11}$/.test(phone);

      // Utility function for showing/hiding errors 
      //Utility function now accepts the Error Element directly
        const showError = (errorElement, message) => {
            errorElement.innerText = message;
            errorElement.classList.remove('hidden');
        };

        const hideError = (errorElement) => {
        errorElement.classList.add('hidden');
        };

      // sign in form validation
    SignInForm.addEventListener ('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const username = SignInForm.querySelector ('#signin-username');
        const usernameError = SignInForm.querySelector('#username-error');
        if (!username.value.trim()) {
            showError(usernameError, 'Username is required');
            isValid = false;
        } else {
            hideError(usernameError);
        }

        const password = SignInForm.querySelector('#signin-password');
        const passwordError = SignInForm.querySelector('#password-error');

        if (!password.value.trim()) {
            showError(passwordError, 'Password is required');
            isValid = false;
        } else {
            hideError(passwordError);
        }

        if (isValid) {
            alert('Sign in successful');
        }
    });

    // sign up form validation
    SignUpForm.addEventListener ('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Username
        const username = SignUpForm.querySelector('#signup-username');
        const usernameError = SignUpForm.querySelector('#signup-username-error');

        if (!username.value.trim()) {
            showError(usernameError, 'Username is required');
            isValid = false;
        } else if (!validateUsername(username.value)) {
            showError(usernameError, 'Username must be at least 5 characters (letters/numbers)');
            isValid = false;
        } else {
            hideError(usernameError);
        }

        // Email
        const email = SignUpForm.querySelector('#signup-email');
        const emailError = SignUpForm.querySelector('#signup-email-error');

        if (!email.value.trim()) {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(emailError, 'Email is invalid');
            isValid = false;
        } else {
            hideError(emailError);
        }

        // Password
        const password = SignUpForm.querySelector('#signup-password');
        const passwordError = SignUpForm.querySelector('#signup-password-error');

        if (!password.value.trim()) {
            showError(passwordError, 'Password is required');
            isValid = false;
        } else if (!validatePassword(password.value)) {
            showError(passwordError, 'Password must be 8+ chars (1 letter, 1 number)');
            isValid = false;
        } else {
            hideError(passwordError);
        }

        // Confirm Password
        const confirmPassword = SignUpForm.querySelector('#signup-confirm-password');
        const confirmError = SignUpForm.querySelector('#signup-confirm-password-error');

        if (!confirmPassword.value.trim()) {
            showError(confirmError, 'Confirm is required');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmError, 'Passwords do not match');
            isValid = false;
        } else {
            hideError(confirmError);
        }

        // Phone Validation
        const phone = SignUpForm.querySelector('#signup-phone');
        const phoneError = SignUpForm.querySelector('#signup-phone-error');

        // Check if empty
        if (!phone.value.trim()) {
            showError(phoneError, 'Phone number is required');
            isValid = false;
        } 
        // Check regex format (must be 11 digits)
        else if (!validatePhone(phone.value)) {
            showError(phoneError, 'Phone number must be 11 digits');
            isValid = false;
        } 
        // Valid
        else {
            hideError(phoneError);
        }


        // Terms
        const terms = SignUpForm.querySelector("#signup-terms");
        const termsError = SignUpForm.querySelector("#signup-terms-error");

        if (!terms.checked) {
            showError(termsError, "You must agree to the terms.");
            isValid = false;
        } else {
            hideError(termsError);
        }

        if (isValid) {
            alert('Sign up successful');
        }

    });

    // 1. Helper function to link an Input to its Error
    const setupClearError = (inputId, errorId) => {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        
        if (input && error) {
            input.addEventListener('input', () => {
                // When user types, add 'hidden' class to the error
                error.classList.add('hidden');
            });
        }
    };

    // 2. Setup the links for Sign In form
    setupClearError('signin-username', 'username-error');
    setupClearError('signin-password', 'password-error');

    // 3. Setup the links for Sign Up form
    setupClearError('signup-username', 'signup-username-error');
    setupClearError('signup-email', 'signup-email-error');
    setupClearError('signup-password', 'signup-password-error');
    setupClearError('signup-confirm-password', 'signup-confirm-password-error');
    setupClearError('signup-phone', 'signup-phone-error');
    
    // Special case for Checkbox (uses 'change' event instead of 'input')
    const termsInput = document.getElementById('signup-terms');
    const termsError = document.getElementById('signup-terms-error');
    if(termsInput && termsError){
        termsInput.addEventListener('change', () => {
            if(termsInput.checked) termsError.classList.add('hidden');
        });
    }

});

function toggleSection(sectionId) {
    document.getElementById('sign-in-form').classList.add('hidden-section');
    document.getElementById('sign-up-form').classList.add('hidden-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}
