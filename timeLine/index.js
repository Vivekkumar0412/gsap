let menuIcon = document.querySelector("#nav i");
let closeIcon = document.querySelector("#full i");

let tl = gsap.timeline();
tl.to("#full",{
    right : 0,
    duration : 0.8
})
tl.from("#full h4",{
    x : 150,
    duration : 0.7,
    opacity : 0.3,
    stagger : 0.3,
})
tl.from("#full i",{
    opacity : 0
})
tl.pause();

menuIcon.addEventListener("click",function(){
    tl.play()
})
closeIcon.addEventListener("click",function(){
    tl.reverse()
})