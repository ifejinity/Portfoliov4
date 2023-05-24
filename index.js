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

// closeCert
const certModal = document.querySelector("#certModal");
const certModalItem = document.querySelector("#certItems");
certModalItem.addEventListener("click",function(){
    certModal.style.display = "none";
});

// About cards
const aboutCards = document.querySelectorAll("#aboutCards");
const aboutModal = document.querySelector("#aboutModal");
const modalHeader = document.querySelector("#modalHeader");
const modalContent = document.querySelector("#modalContent");
const body = document.querySelector("body");

for(let aboutcardsItem of aboutCards){
    aboutcardsItem.addEventListener("click", function(){

        // personal information
        if (this === aboutCards[0]){
            body.style.overflowY = "hidden";
            modalHeader.innerHTML = "Personal Information";
            modalContent.innerHTML =`
            <div class="text-theme-black dark:text-theme-white grid xs:grid-cols-2 grid-cols-1 z-[0] gap-3 text-center xs:text-start">
                <div class="flex flex-col gap-2">
                    <p><strong>Name: </strong> <br> Jeffrey B. Lonzanida</p>
                    <p><strong>Sex: </strong> <br>  Male</p>
                    <p><strong>Birthday: </strong> <br> January 08, 2001</p>
                    <p><strong>Age: </strong> <br> 22 years old</p>
                    <p><strong>Birth Place: </strong> <br> Taytay, Rizal</p>
                    <p><strong>Address: </strong> <br> #52 Sitio Tibagan, Brgy. Dolores, Taytay, Rizal</p>
                </div>
                <div class="flex flex-col gap-2">
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
            body.style.overflowY = "hidden";
            modalHeader.innerHTML = "Educational Attainment";
            modalContent.innerHTML =`
            <div class="text-theme-black dark:text-theme-white flex justify-center z-[0] m-[10px]">
                <div class="grid-cols-timeLineDesktop w-full sm:grid hidden">

                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mr-5 p-3 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-5 rounded-xl shadow-md
                        hover:bg-gradient-to-r from-teal-300 dark:hover:text-theme-black to-sky-500 mb-5">
                            <p class="text-center text-[1rem] font-medium leading-none">College of Arts and Sciences of Asia and the Pacific</p>
                            <p class="text-[0.8rem] text-center">Information and Communication Technology</p>
                            <p class="text-[0.8rem]">2019-2023</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit mr-5 p-5 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-5 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-3 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-5 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-5 rounded-xl shadow-md
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
                        <div class="w-full bg-theme-black/5 dark:bg-theme-white/5 flex flex-col justify-center items-center h-fit ml-5 p-5 rounded-xl shadow-md
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
            body.style.overflowY = "hidden";
            modalHeader.innerHTML = "Awards & Certifications";
            modalContent.innerHTML =`
            <div class="text-theme-black dark:text-theme-white mt-2 z-[0]">
                <div class="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5">
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/1.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/2.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/3.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/4.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/CERTIFICATE-OF-PARTICIPANTS-37-1.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/Git and Github.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/TAILWIND - LONZANIDA.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/INTERNSHIP ORIENTATION - LONZANIDA.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_184548.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_184617.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_184703.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_184830.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_184956.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_185046.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_185132.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_185235.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_185349.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_185501.jpg"/>
                    <img id="certImg" class="hover:drop-shadow-xl grayscale hover:grayscale-0 cursor-zoom-in hover:-translate-y-2 transition-all" src="./src/resources/certificates/IMG_20230313_210451.jpg"/>
                </div>
            </div>
            `;
            const certImg = document.querySelectorAll("#certImg");
            for (certImgItems of certImg){
                certImgItems.addEventListener("click", function(){
                    for(let i = 0; i < certImg.length; i++){
                        if(this === certImg[i]){
                            certModalItem.src = this.src;
                            certModal.style.display = "flex";
                        }
                    }
                });
            }
            aboutModal.style.display = "flex";
        }
    });
}

// Close about modal
const closeAboutModal = document.querySelector("#aboutmodalClose");
closeAboutModal.addEventListener("click", function(){
    body.style.overflowY = "scroll";
    aboutModal.style.display = "none";
})

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