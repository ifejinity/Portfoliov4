const navbarMobile = document.querySelector("#navbarMobile");
const navbarCheckbox = document.querySelector("#checkboxNavbar");

navbarCheckbox.addEventListener("click", function(){
    if(this.checked){
        navbarMobile.style.right = "0";
    }
    else{
        navbarMobile.style.right = "-100vh";
    }
});