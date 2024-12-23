// register.js
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
    } else {
        alert("Registration Successful!");
    }
});
