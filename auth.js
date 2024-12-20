// Handle Registration
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent form submission
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            alert('Registration successful!');
            console.log(userCredential.user);
            // Redirect to login or another page
            window.location.href = 'login.html';
        } catch (error) {
            alert(error.message);
        }
    });
}

// Handle Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent form submission
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            alert('Login successful!');
            console.log(userCredential.user);
            // Redirect to a dashboard or another page
            window.location.href = 'dashboard.html';
        } catch (error) {
            alert(error.message);
        }
    });
}
