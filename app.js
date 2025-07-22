const navigation = document.querySelector('nav');

console.log(navigation)

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        navigation.classList.add('animation');
    }else{
        navigation.classList.remove('animation')
    }
}) 


const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})