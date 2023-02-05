function menuBar(x) {
    x.classList.toggle("change");
}

const topMenu = document.getElementById('menu');
const logoMenu = document.getElementById('logoMenu');
const buttonMenu = document.getElementById('linkMenu');
const links = document.getElementsByClassName('menu__link')


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    links[0].style.color = 'blue';

    if(scrollDistance >= 200){
        topMenu.classList.add('menu__color');
        logoMenu.src = "https://sssgen.github.io/StanAssets-siteLayout/style/img/menu__Logo.png"
        for (const link of links) {
            link.style.color = 'blue';
        }
    } else {
        topMenu.classList.remove('menu__color');
        logoMenu.src = "style/img/menu__Logo.png"
        for (const link of links) {
            link.style.color = 'white';
        }
    }
    
})

function phoneMenu() {
    document.getElementById("phoneMenu").classList.toggle("show");
}
