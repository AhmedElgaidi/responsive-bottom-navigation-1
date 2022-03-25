/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// this returns all the elements with .section class with their id like this:
// section#home.container.section.section__height
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, // returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.
            sectionTop = current.offsetTop - 50, // returns the top position (in pixels) relative to the parent.
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 10) {// the div height is 100vh
        header.classList.add('scroll-header'); 
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)
