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

// Darkmode function
const modeToggle = document.querySelectorAll(".input");
for (let modeToggleAll of modeToggle){
    modeToggleAll.addEventListener("click", function(){
        if(this == modeToggle[0]){
            if(modeToggle[0].checked){
                localStorage.theme = 'dark';
                document.documentElement.classList.add('dark');
                modeToggle[1].checked = true;
            }
            else{
                localStorage.theme = 'light';
                document.documentElement.classList.remove('dark');
                modeToggle[1].checked = false;
            }
        }

        if(this == modeToggle[1]){
            if(modeToggle[1].checked){
                localStorage.theme = 'dark';
                document.documentElement.classList.add('dark');
                modeToggle[0].checked = true;
            }
            else{
                localStorage.theme = 'light';
                document.documentElement.classList.remove('dark');
                modeToggle[0].checked = false;
            }
        }
    });
}

window.addEventListener("load", function(){
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.add('dark');
        modeToggle[0].checked = true;
        modeToggle[1].checked = true;
    }
    else{
        document.documentElement.classList.remove('dark');
    }
});