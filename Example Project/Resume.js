let subBut = document.getElementById("fake-submit")
let realSubBut = document.getElementById("submit")

subBut.addEventListener('click', event => {
    //let fn = document.getElementById("first-name");
    //fn.value = "";
    ar = document.querySelectorAll(".troll");

    ar.forEach((input) => {
        input.value = "";
    });

    subBut.style.visibility = "hidden"
    realSubBut.style.visibility = "visible"
});
