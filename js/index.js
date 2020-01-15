// Your code goes here

const changeBus = document.querySelector(".intro img");
changeBus.addEventListener("dblclick", () => {
    changeBus.src = "https://images.unsplash.com/photo-1548776556-e5e904ce5fce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
})

const blackout = document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", () => {
        el.style.backgroundColor = "black";
    })
})

const hoverPic = document.querySelector(".content-destination img");
hoverPic.addEventListener("mouseenter", () => {
    hoverPic.src = "https://images.unsplash.com/photo-1494806465803-34e97e0ec1c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80";
}) 

hoverPic.addEventListener("mouseleave", () => {
    hoverPic.src = "img/destination.jpg";
}) 

let realHover = document.querySelector(".content-section .img-content img");
realHover.addEventListener("mouseover" , () => {
    realHover.style.transform = "scale(1.1)";
    realHover.style.transition = "transform .5s"
})
let realHoverOne = document.querySelector(".inverse-content .img-content img");
realHoverOne.addEventListener("mouseover" , () => {
    realHoverOne.style.transform = "scale(1.1)";
    realHoverOne.style.transition = "transform .5s"
})

let darkmode = document.querySelector("body");
darkmode.addEventListener("keydown", () => {
    darkmode.style.backgroundColor = "black";
})
darkmode.addEventListener("keyup", () => {
    darkmode.style.backgroundColor = "white";
})

let selector = document.querySelector(".footer");
selector.addEventListener("contextmenu", () => {
    selector.style.backgroundColor = "red";
})

let backSelector = document.querySelector("body");
backSelector.addEventListener("mouseup", () => {
    backSelector.style.backgroundColor = "blue";
})