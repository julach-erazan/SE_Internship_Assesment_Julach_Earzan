const handleGoogleLogin = async () => {
    window.open("http://localhost:8001/auth/google?scope=profile%20email", "_self");
}

export { handleGoogleLogin };