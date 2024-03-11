export const setLogIn = () => {
    localStorage.setItem("isLoggedIn", true);
}

export const getLogIn = () => {
    // debugger
    const loginCheck = localStorage.getItem("isLoggedIn");
    return (loginCheck === 'true')

}

export const setlogOut = () => {
    localStorage.setItem("isLoggedIn", false)
}

export const getlogOut = () => {
    const loginCheck = localStorage.setItem("isLoggedIn")
    return (loginCheck === 'true')
}