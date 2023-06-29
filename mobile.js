// Mobile Navigation

const headerMenu= document.querySelector('.header__bars');
const mobileNav= document.querySelector('.mobile-nav')
const mobileLinks= document.querySelectorAll('.mobile-nav__link')
let isMoblieNavOpen= false;
headerMenu.addEventListener('click', ()=>{
    isMoblieNavOpen= !isMoblieNavOpen;
    if(isMoblieNavOpen)
    {
        mobileNav.style.display= 'flex';
        document.body.style.overflow= 'hidden';
    }
    else{
        mobileNav.style.display= 'none';
        document.body.style.overflow= 'auto';
    }
   
});

mobileLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
            isMoblieNavOpen=false;
            mobileNav.style.display= 'none';
            document.body.style.overflow= 'auto';
        })
})

// Theme toggle

const themeToggle= document.querySelectorAll('#theme-toggle')
    let isDarkTheme= true;

    const theme= localStorage.getItem('theme');
    theme && document.body.classList.add(theme);
themeToggle.forEach(btn=>{
    
    btn.addEventListener('click', ()=>{
     document.body.classList.toggle('light-mode'); 

     if(document.body.classList.contains('light-mode'))
     {
        localStorage.setItem('theme','light-mode')
     }
     else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
     }
    })

})
