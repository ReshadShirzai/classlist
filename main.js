const div = document.querySelector(".box");
const test = document.querySelector(".run");
// const change = document.querySelector(".change");
const anim = document.querySelector(".animation");
const divTwo = document.querySelector(".box-two");

// Opdr 1-4
/* test.addEventListener("click", function(){
    div.classList.add("error");
});

change.addEventListener("click", function(){
    div.classList.remove("error")
});
*/


test.addEventListener("click", function(){
    div.classList.toggle("error");
});


// Opdr 5-7
anim.addEventListener("click", function(){
    divTwo.classList.toggle("animation");
    divTwo.classList.toggle("font");
})
