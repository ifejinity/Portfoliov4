// Darkmode Reload
const headElement = document.documentElement;
window.addEventListener("load", function(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        headElement.classList.add('dark');
        modeToggle[0].checked = true;
        modeToggle[1].checked = true;
    } else {
        headElement.classList.remove('dark');
    }
});

const navbarMobile = document.querySelector("#navbarMobile");
const navbarCheckbox = document.querySelector("#checkboxNavbar");

navbarCheckbox.addEventListener("click", navbarCheck);
function navbarCheck(){
    if(this.checked){
        navbarMobile.style.right = "0";
    }
    else{
        navbarMobile.style.right = "-100vh";
    }
};

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

// navigationDesktop
const navButtonsDesktop = document.querySelectorAll("#navButton");

for (let navButtonItems of navButtonsDesktop){
    navButtonItems.addEventListener("click", function(){
        if (this === navButtonsDesktop[0]){
            window.scrollTo(0, 0);
        }

        if (this === navButtonsDesktop[1]){
            window.location.href = "#about";
        }

        if (this === navButtonsDesktop[2]){
            window.location.href = "#skills";
        }

        if (this === navButtonsDesktop[3]){
            window.location.href = "#projects";
        }

        if (this === navButtonsDesktop[4]){
            window.location.href = "#contacts";
        }
    });
}

// nav mobile button
const navButtonsMobile = document.querySelectorAll("#navButtonMobile");
for (let navButtonMobile of navButtonsMobile){
    navButtonMobile.addEventListener("click", function(){
        if (this === navButtonsMobile[0]){
            window.scrollTo(0, 0);
        }

        if (this === navButtonsMobile[1]){
            window.location.href = "#about";
        }

        if (this === navButtonsMobile[2]){
            window.location.href = "#skills";
        }

        if (this === navButtonsMobile[3]){
            window.location.href = "#projects";
        }

        if (this === navButtonsMobile[4]){
            window.location.href = "#contacts";
        }
        navbarClose();
    });
}

// function to close the navbar after navigating
function navbarClose(){
    navbarCheckbox.checked = false;
    navbarCheck();
}

