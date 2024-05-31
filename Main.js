const navbar = document.querySelector("#navbar");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

close.addEventListener("click", function() {
    navbar.classList.remove("active");
});

// Website animation starts here

gsap.from(".home-text", {
    duration: 1,
    y: 200,
    opacity: 0
});

gsap.from(".contact-us", {
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none" 
    }
});

gsap.from(".de-box", {
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none" 
    }
});