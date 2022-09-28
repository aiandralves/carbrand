/** Show Menu Nav **/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/** Remove Menu Mobile **/

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/** Scroll Sections Active Link **/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/** Change Background Header **/

function scrollHeader() {
    const nav = document.getElementById("header");

    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/** Swiper Slider Featured Car */

let swiperFeatured = new Swiper(".featured-container", {
    loop: true,
    autoplay: true,
    slidesPerView: "auto",
    spaceBetween: 34,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 48,
        },
    },
});

/** Swiper Slider Popular Car */

let swiperPopular = new Swiper(".popular-container", {
    loop: true,
    autoplay: true,
    slidesPerView: "auto",
    spaceBetween: 34,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

/** MixitUp Filter Cars **/

let mixerCars = mixitup(".car-content", {
    selectors: {
        target: ".car-card"
    },
    animation: {
        duration: 300
    }
});

const linkCar = document.querySelectorAll(".car-item");

function activeCar() {
    linkCar.forEach(c => c.classList.remove("active-car"))
    this.classList.add("active-car");
}

linkCar.forEach(c => c.addEventListener("click", activeCar));

/** Show Scroll Up **/

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
