let moonIcon = document.querySelector('.icon');

let storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    moonIcon.classList.remove('fa-sun-o');
    moonIcon.classList.add('fa-moon-o');
    moonIcon.style.color = 'white';
} else {
    moonIcon.style.color = 'yellow';
}

moonIcon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        moonIcon.classList.remove('fa-sun-o');
        moonIcon.classList.add('fa-moon-o');
        moonIcon.style.color = 'white';
        localStorage.setItem('theme', 'dark');
    } else {
        moonIcon.classList.remove('fa-moon-o');
        moonIcon.classList.add('fa-sun-o');
        moonIcon.style.color = 'yellow';
        localStorage.setItem('theme', 'light'); 
    }
}


