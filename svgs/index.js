let initialPath = `M 20 100 Q 250 100 490 100`;
let finalPath = `M 20 100 Q 250 100 490 100`;
let string = document.querySelector("#string");

string.addEventListener("mouseenter",function(){
    console.log("mouseenter")
})
string.addEventListener("mousemove",function(val){
    // console.log("mousemove")
    initialPath = `M 20 100 Q ${val.x} ${val.y} 490 100`
    gsap.to("svg path",{
        attr : {d : initialPath},
        ease : "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    console.log("ii")
    gsap.to("svg path",{
        attr : {d : finalPath},
        duration : 1.2,
        ease : "elastic.out(1,0.2)"
    })
})