//mobile menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu =  document.querySelector('#nav-links');

//add event listener to burger icon.
burgerIcon.addEventListener ('click',()=>{

    // classlist gets all the classes from nav bar and toogle helps to add or remove given class.name in parameter.
    navBarMenu.classList.toggle('is-active');
});