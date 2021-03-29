const translate = document.querySelectorAll(".translate");
const liana1 = document.querySelector(".liana1");
const topParallax = document.querySelector(".top-parallax");

//geting the height of top-parallax part
let topParallax_height = topParallax.offsetHeight;
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;

    })
    liana1.style.opacity = - scroll / (topParallax_height*1.5)+1.2
});

// validate the subcribe to newsletter 
function validateSubscribeForm() {
    let email = document.getElementById["subscribe-newsletter"];

    // check if email field is not empty.
    if (email.value == "") {
        return false;
    } else {

        alert("Thanks a lot, You have succesfully subscribed our newsletter!");
        return true;
    }
}