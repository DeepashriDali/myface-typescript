document.addEventListener('DOMContentLoaded', function() {
    
    const colourChangeBtn = document.getElementById("my-button");
    const postCol = document.getElementsByClassName('post');
    const mobMenu = document.getElementById("mobile-menu");
    //Change background

    colourChangeBtn.addEventListener("click", function(){
        for (const post of postCol) {
        post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        }
    });
    // Hamburger menu
    const crossBtn = document.getElementById("cross-btn");
    crossBtn.addEventListener("click", function(){
    mobMenu.classList.toggle("mobile-menu-hidden");
    })
    
    const hamBtn = document.getElementById("ham-btn");
    hamBtn.addEventListener("click", function(){
    mobMenu.classList.toggle("mobile-menu-open");
    });

 

});