export const validateFormData = (email , password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    
    //Minimum eight characters, at least one letter, one number and one special character:
    const isPasswordValid =/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
     
    if(!isEmailValid) return "Email ID not valid."
    if(!isPasswordValid) return "Password is not valid."

    return null
}