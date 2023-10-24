import React from 'react'

function Login() {
    // ALWAYS START SESSION!!!
    session_start();
    window.addEventListener('submit', function checkPasswordMatch(event) {
        if (!isset($_SESSION['sessionuser'])) {
            alert("User does not exist");
            event.preventDefault();
        }
    });

    return (
        <div>
            <div id="main-signin-box">
                <h2>Sign In</h2>

                {/* Form (email, password, remember me, and forgot password) */}
                <form method="post" action="login.php">
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Type Your Email"
                            maxlength="100"
                            required
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Type Your Password"
                            maxlength="100"
                            required
                        />
                    </div>
                    {/* Submission of form */}
                    <button type="submit">
                        Sign In
                    </button>
                    {/* Remember me */}
                    <div>
                        <input
                            type="checkbox"
                            id="rememberme"
                            name="rememberme"
                        />
                        Remember Me
                    </div>
                    {/* Forgot password */}
                    <p>
                        <a href="recover-account.html">Forgot Your Password?</a>
                    </p>
                </form>
            </div>

            {/* Create account */}
            <p>
                Don't have an account?
                <a href="signup.html">Create an account</a>
            </p>
        </div>
    )
}

export default Login