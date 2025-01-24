document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add");
    const libContent = document.getElementById("libcontent");

    addButton.addEventListener("click", function () {
        libContent.classList.toggle("hidden");
        libContent.classList.toggle("visible");

        const rightSide = document.querySelector(".rightSide");
        if (rightSide.style.width === "30%") {
            rightSide.style.width = "3%";  
        } else {
            rightSide.style.width = "30%"; 
        }
    });
    const signin=document.querySelector(".signin");
    signin.addEventListener("click",function(){
    window.location.href='login.html';
});
    const signup=document.querySelector(".signup");
    signup.addEventListener("click",function(){
    window.location.href='register.html';
    });

});

