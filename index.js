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

        // personal information
        if (this === aboutCards[0]){
            modalHeader.innerHTML = "Personal Information";
            modalContent.innerHTML =`
            <div class="w-full text-theme-black dark:text-theme-white grid xs:grid-cols-2 grid-cols-1 z-[0] xs:gap-2 text-center xs:text-start">
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

        // educational attaintment
        if (this === aboutCards[1]){
            modalHeader.innerHTML = "Educational Attainment";
            modalContent.innerHTML =`
            <div class="w-full text-theme-black dark:text-theme-white flex justify-center z-[0] m-[10px]">
                <div class="grid-cols-timeLineDesktop w-full sm:grid hidden">

                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-3 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">University of Rizal System</p>
                            <p class="text-[0.8rem] text-center">Bachelor of Science in Information Technology</p>
                            <p class="text-[0.8rem]">2019-2023</p>
                        </div>
                    </div>
                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div></div>

                    <div></div>
                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">College of Arts and Sciences of Asia and the Pacific</p>
                            <p class="text-[0.8rem] text-center">Information and Communication Technology</p>
                            <p class="text-[0.8rem]">2019-2023</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">Casimiro A. Ynares Sr. Memorial National Highschool</p>
                            <p class="text-[0.8rem]">2013-2017</p>
                        </div>
                    </div>
                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div></div>

                    <div></div>
                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500">
                            <p class="text-center text-[1rem] font-medium leading-none">Taytay Elementary School Unit-1</p>
                            <p class="text-[0.8rem]">2007-2013</p>
                        </div>
                    </div>

                </div>

                <div class="grid-cols-timeLineMobile w-full grid sm:hidden">

                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-3 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">University of Rizal System</p>
                            <p class="text-[0.8rem] text-center">Bachelor of Science in Information Technology</p>
                            <p class="text-[0.8rem]">2019-2023</p>
                        </div>
                    </div>

                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">College of Arts and Sciences of Asia and the Pacific</p>
                            <p class="text-[0.8rem] text-center">Information and Communication Technology</p>
                            <p class="text-[0.8rem]">2019-2023</p>
                        </div>
                    </div>

                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">Casimiro A. Ynares Sr. Memorial National Highschool</p>
                            <p class="text-[0.8rem]">2013-2017</p>
                        </div>
                    </div>

                    <div class="flex justify-center relative">
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[20px] h-[20px] rounded-full absolute top-[-10px] z-[1]"></div>
                        <div class="bg-gradient-to-r from-teal-300 to-sky-500 w-[8px] h-full z-[0]"></div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mx-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">Taytay Elementary School Unit-1</p>
                            <p class="text-[0.8rem]">2007-2013</p>
                        </div>
                    </div>

                </div>
            </div>
            `;
            aboutModal.style.display = "flex";
        }

        // Awards and certifications
        if (this === aboutCards[2]){
            modalHeader.innerHTML = "Awards & Certifications";
            modalContent.innerHTML =`
            <div class="w-full text-theme-black dark:text-theme-white grid xs:grid-cols-2 grid-cols-1 z-[0] xs:gap-2 text-center xs:text-start">
                
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