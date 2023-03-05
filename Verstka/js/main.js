const btnDarkMode = document.querySelector(".dark-mode-btn");

//check darkMode on system settings

if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add('dark')
}

//check darkMode in local storage
if(localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add('dark')
}else if(localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove("dark-mode-btn__active");
    document.body.classList.remove('dark')
}

//change theme with system settings
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) =>{
    const newColorScheme = event.matches ? "dark" : "light"

    if(newColorScheme === 'dark'){
        btnDarkMode.classList.add("dark-mode-btn__active");
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')
    }else{
        btnDarkMode.classList.remove("dark-mode-btn__active");
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})

//Set darkMode on button click
btnDarkMode.onclick = function (){
    btnDarkMode.classList.toggle("dark-mode-btn__active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    }else {
        localStorage.setItem('darkMode', 'light')
    }

}