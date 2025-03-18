let h1Text = document.querySelector("h1");
let heinner = h1Text.textContent;
let textArry = heinner.split("");
let halflength = Math.floor(textArry.length)/2;
let clutter = "";

textArry.forEach((elem, indx) => {
    console.log(indx,"indx")
    console.log(halflength,"halflength")
  if (indx < halflength) {
    clutter += `<span class='a'>${elem}</span>`;
  } else {
    clutter += `<span class='b'>${elem}</span>`;
  }
});

h1Text.innerHTML = clutter;
gsap.from("h1 .a",{
    y : -50,
    duration : 0.5,
    opacity : 0,
    delay : 1,
    stagger : 0.2
})
gsap.from("h1 .b",{
    y : 50,
    duration : 0.5,
    opacity : 0,
    delay : 1,
    stagger : 0.2
})