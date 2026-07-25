/* ========================================
   AK COUTURE
   MAIN JS
======================================== */

/* ==========================
   MENU MOBILE
========================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}

/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.background = 'rgba(255,255,255,.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,.08)';

    }else{

        header.style.background = 'rgba(255,255,255,.75)';
        header.style.boxShadow = 'none';

    }

});

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

const hiddenElements = document.querySelectorAll(
`
.section-title,
.product-card,
.category-card,
.about-image,
.about-content,
.benefit,
.testimonial-card,
.instagram-grid img,
.contact-form
`
);

hiddenElements.forEach(el => {

    el.classList.add('hidden');
    observer.observe(el);

});

/* ==========================
   PRODUCT BUTTONS
========================== */

const productButtons =
document.querySelectorAll('.product-info button');

productButtons.forEach(button => {

    button.addEventListener('click', () => {

        const product =
        button.parentElement.querySelector('h3').textContent;

        const message =
        `Hola, estoy interesada en ${product}`;

        const whatsapp =
        `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;

        window.open(whatsapp, '_blank');

    });

});

/* ==========================
   CONTACT FORM
========================== */

const form =
document.querySelector('.contact-form');

if(form){

    form.addEventListener('submit',(e)=>{

        e.preventDefault();

        const nombre =
        form.querySelector('input[type="text"]').value;

        alert(
            `Gracias ${nombre}, hemos recibido tu mensaje 💕`
        );

        form.reset();

    });

}

/* ==========================
   PARALLAX WATERMARK
========================== */

window.addEventListener('scroll',()=>{

    const watermarks =
    document.querySelectorAll('.watermark');

    watermarks.forEach(section=>{

        let offset =
        window.pageYOffset;

        section.style.backgroundPositionY =
        `${offset * 0.05}px`;

    });

});

/* ==========================
   CURRENT YEAR
========================== */

const footerYear =
document.querySelector('.year');

if(footerYear){

    footerYear.textContent =
    new Date().getFullYear();

}