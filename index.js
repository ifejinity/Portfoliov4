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
// Darkmode Reload
window.addEventListener("load", function(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        modeToggle[0].checked = true;
        modeToggle[1].checked = true;
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// About cards
const aboutCards = document.querySelectorAll("#aboutCards");
const aboutModal = document.querySelector("#aboutModal");
const modalHeader = document.querySelector("#modalHeader");
const modalContent = document.querySelector("#modalContent");

for(let aboutcardsItem of aboutCards){
    aboutcardsItem.addEventListener("click", function(){
        if (this === aboutCards[0]){
            modalHeader.innerHTML = "Personal Information";
            modalContent.innerHTML =`
            <div class="w-full text-theme-black dark:text-theme-white grid xs:grid-cols-2 grid-cols-1 z-[0] gap-2">
                <div>
                    <p><strong>Name: </strong> <br> Jeffrey B. Lonzanida</p>
                    <p><strong>Sex: </strong> <br>  Male</p>
                    <p><strong>Birthday: </strong> <br> January 08, 2001</p>
                    <p><strong>Age: </strong> <br> 22 years old</p>
                    <p><strong>Birth Place: </strong> <br> Taytay, Rizal</p>
                    <p><strong>Address: </strong> <br> #52 Sitio Tibagan, Brgy. Dolores, Taytay, Rizal</p>
                </div>
                <div>
                    <p><strong>Citizenship: </strong> <br> Filipino</p>
                    <p><strong>Religion: </strong> <br> Catholic</p>
                    <p><strong>Marital Status: </strong> <br> Married</p>
                    <p><strong>Height: </strong> <br> 5'5</p>
                    <p><strong>Weight: </strong> <br> 51kg</p>
                </div>
            </div>
            `;
            aboutModal.style.display = "flex";
        }
    });
}

// Close about modal
const closeAboutModal = document.querySelector("#aboutmodalClose");
closeAboutModal.addEventListener("click", function(){
    aboutModal.style.display = "none";
})