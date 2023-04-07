const btnDarkMode = document.querySelector('.dark__mode-btn')

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark__mode-btn--active')
    document.body.classList.add('dark')

} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark__mode-btn--active')
    document.body.classList.remove('dark')
}


btnDarkMode.onclick = function () {

    btnDarkMode.classList.toggle('dark__mode-btn--active')

    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')

    } else {
        localStorage.setItem('darkMode', 'light')
    }
}


