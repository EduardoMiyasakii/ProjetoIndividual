class MobileNavBar{
    constructor(MobileMenu,navList, navLinks){
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = ""):
            (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.MobileMenu.addEventListener("click", this.handleClick);
    }
    init (){
        if(this.MobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const  mobileNavBar = new mobileNavBar (

    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();
    
