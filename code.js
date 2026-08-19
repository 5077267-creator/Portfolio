document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// ===========================
// Active Navbar Link
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================
// Scroll To Top Button
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 18px rgba(0,0,0,0.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===========================
// Contact Form
// ===========================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});


// ===========================
// Fade Animation
// ===========================

const cards = document.querySelectorAll(

".project-card,.skill-card,.info-box,.education-card,.resume-box,.contact-form,.contact-info"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="0.8s";

    observer.observe(card);

});


// ===========================
// Hero Typing Effect
// ===========================

const heading = document.querySelector(".hero-content h2");

const text = "B.Sc. Information Technology Student";

let index = 0;

heading.textContent = "";

function typeText(){

    if(index < text.length){

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typeText,70);

    }

}

window.onload = typeText;
