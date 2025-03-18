let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#imgdiv");

main.addEventListener("mousemove",function(val){
    gsap.to(cursor,{
        x : val.x,
        y : val.y,
        duration : 1,
        ease : "back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(val){
    cursor.innerHTML = "Know More";
    gsap.to(cursor,{
        scale : 4
    })
})
imageDiv.addEventListener("mouseleave",function(val){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale : 1
    })
})