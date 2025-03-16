// gsap.to("#test1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor : "blue",
//     borderRadius : "50%,",
//     scale : 0.6,
//     repeat : 2,
//     yoyo:true
// })

// gsap.to("#test2",{
//     x:799,
//     y:600,
//     duration:3,
//     delay:1,
//     rotate:360
// })
// gsap.from("#test3",{
//     x:799,
//     y:600,
//     duration:3,
//     delay:1,
//     rotate:360
// })
// gsap.from("h1",{
//     color : "red",
//     duration : 2,
//     x:200,
//     stagger : -1,
//     opacity : 1
// })
let tl = gsap.timeline();
tl.from("h2",{
    opacity : 0,
    y: 30,
    // color : "red",
    duration : 1,
    delay : 0.8
})
tl.from("h4",{
    opacity : 0,
    y: 30,
    // color : "red",
    duration : 1,
    stagger : 0.3
})


gsap.from("#div1 #box",{
    scale : 0,
    duration : 2,
    delay : 1,
    rotate : 360
})
gsap.from("#div2 #box",{
    scale : 0,
    duration : 2,
    delay : 1,
    rotate : 360,
    // scrollTrigger : "#div2 #box"
    scrollTrigger : {
        trigger : "#div2 #box",
        scroller : "body",
        markers : true,
        start : "top 50%",
        end:"top 30%",
        // scrub : true
        scrub : 2 // can have value from 1 to 5
    }
})
gsap.from("#div3 #box",{
    scale : 0,
    duration : 2,
    delay : 1,
    rotate : 360
})