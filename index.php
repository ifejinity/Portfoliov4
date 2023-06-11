<!DOCTYPE html>
<html class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./dist/output.css" rel="stylesheet">
    <link rel="shortcut icon" href="./src/resources/logo-gradient.png" type="image/x-icon">
    <title>Jeffrey Lonzanida</title>
    <!-- aos -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <!-- swiper js -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <!-- gfonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- animate css -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"> -->
</head>
<body class="flex items-center flex-col dark:bg-theme-black bg-theme-white overflow-x-hidden font-outfit">

    <!-- header -->
    <header class="sticky top-0 grid dark:bg-theme-black/80 bg-theme-white/80 backdrop-blur-sm grid-cols-navDesktop gap-10 w-full py-3 items-center z-20 px-5" id="navDesktop">
        <img class="w-logo dark:hidden" src="./src/resources/logo.png" alt="logo" srcset="">
        <img class="w-logo hidden dark:block" src="./src/resources/logo-dark.png" alt="logo" srcset="">

        <!-- navbar desktop -->
        <div class="relative hidden sm:grid grid-cols-navDesktopBtn gap-10 font-semibold text-theme-black dark:text-theme-white">
            <button id="navButton" class=" hover:text-theme-dblue">Home</button>
            <button id="navButton" class=" hover:text-theme-dblue">About</button>
            <button id="navButton" class=" hover:text-theme-dblue">Skills</button>
            <button id="navButton" class=" hover:text-theme-dblue">Projects</button>
            <button id="navButton" class=" hover:text-theme-dblue">Contacts</button>
            <label class="switch">
                <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                <input type="checkbox" class="input">
                <span class="slider"></span>
            </label>
        </div>

        <!-- nav mobile -->
        <input type="checkbox" id="checkboxNavbar">
        <label for="checkboxNavbar" class="toggle sm:hidden flex">
            <div class="bars dark:bg-theme-white" id="bar1"></div>
            <div class="bars dark:bg-theme-white" id="bar2"></div>
            <div class="bars dark:bg-theme-white" id="bar3"></div>
        </label>
    </header>

    <!-- sections -->
    <div class="w-full flex flex-col justify-center items-center bg-theme-white dark:bg-theme-black overflow-x-hidden" id="pageWrapper">
        <!-- Hero section -->
        <section class="relative h-[80vh] flex md:flex-row max-w-[1440px] flex-col justify-center items-center gap-5 z-[2] md:mx-[10%] mx-[5%]" id="hero">
            <!-- Hero section left side -->
            <div class="relative md:w-[45%] flex flex-col justify-center md:justify-start h-fit">
                <h1 class="text-theme-black font-black text-3xl md:text-[4vw] xl:text-[50px] leading-none dark:text-theme-white md:text-start text-center" data-aos="fade-right" data-aos-delay="100">Hi there, I am</h1>
                <h1 class="w-full bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 font-black text-4xl md:text-[6vw] xl:text-[80px] leading-none h-full md:text-start text-center" data-aos="fade-right" data-aos-delay="400"
                id="heroText">Jeffrey Lonzanida</h1>
            </div>
            <!-- hero section right side -->
            <div class="relative md:w-[55%] flex justify-center md:justify-end">
                <div class="relative">
                    <img data-aos="zoom-in" data-aos-delay="700" class="max-w-md md:max-w-xl w-full" src="./src/resources/bg-back2.png" alt="geometry" srcset="">
                </div>  
            </div>
            <img src="./src/resources/Untitled design.png" class="absolute z-[1] w-[30vw] max-w-[300px] bottom-[-250px] left-[-15%] animate-updown1">
        </section>

        <!-- about -->
        <div id="about" class="scroll-mt-[-150px]"></div>
        <section class="relative mt-52 flex flex-col items-center gap-2 z-[1] w-[-webkit-fill-available] bg-gray-200 dark:bg-gray-800 py-10">
            <div class="grid grid-cols-[repeat(2,auto)]">
                <h1 class="font-black text-theme-black dark:text-theme-white text-[2rem] md:text-[3.5vw] xl:text-[3rem]">ABOUT</h1>
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 font-black text-[2rem] md:text-[3.5vw] xl:text-[3rem]">ME</h1>
            </div>

            <div class="relative grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-[1440px] md:mx-[10%] mx-[5%]">
                <div class="flex justify-center relative">
                    <div class="grid xs:grid-cols-navDesktop grid-cols-1 gap-5 z-[1]">
                        <img src="./src/resources/aboutme.jpg" alt="" srcset="" class="rounded-xl w-[300px] drop-shadow-xl">
                        <div class="flex xs:flex-col flex-row items-center justify-center gap-5">
                            <a href="https://www.facebook.com/ifejinity" target="_blank" class="">
                                <i class="bi bi-facebook text-[2rem] text-blue-500"></i>
                            </a>
                            <a href="https://github.com/ifejinity" target="_blank" class="">
                                <i class="bi bi-github text-[2rem] dark:text-white"></i>
                            </a>
                            <a href="tel:09305303720" class="">
                                <i class="bi bi-telephone text-[2rem] text-green-500"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="./src/resources/Untitled design (1).png" class="absolute z-[-1] w-[90vw] max-w-[400px] bottom-[-200px] right-[-30%] animate-updown2">
                    <img src="./src/resources/Untitled design (15).png" class="absolute z-[-1] w-[45vw] max-w-[250px] bottom-[100px] right-[-20%] animate-updown1">
                    <p class="mb-5 text-justify text-theme-black dark:text-theme-white indent-10 text-[1rem]">
                        In 2017, I started my programming journey in the K-12 program's ICT strand. I quickly developed a passion for programming after learning C++ and working on a Room Utilization system using VB6 and Microsoft Access during my internship. In Grades 11 and 12, I ranked first in the ICT strand, earning recognition and the title of Most Outstanding ICT Student.
                    </p>
        
                    <p class="mb-5 text-justify text-theme-black dark:text-theme-white indent-10 text-[1rem]">
                        In college, I focused on C# and VB.net, showcasing my skills through a Police Clearance system and a 2D endless runner game called Jump Ninja, created with the Unity game engine. I also expanded into web development, mastering HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap, Tailwind CSS, and various libraries. My first freelance project was a "Freelance Marketplace" for a student from the University of San Agustin.

                    </p>
        
                    <p class="mb-5 text-justify text-theme-black dark:text-theme-white indent-10 text-[1rem]">
                        During the CAPSTONE Development phase, I gained expertise in Content Management Systems (CMS) and created an Ecommerce website for Barbie Sweet Little Things Shop. Throughout college, I consistently earned a spot on the Dean's List and anticipate graduating cum laude, reflecting my dedication and pursuit of excellence.
                    </p>
                </div>
            </div>
        </section>

        <!-- skills -->
        <div id="skills" class="scroll-mt-[-150px]"></div>
        <section id="skillsSec" class="relative mt-52 w-full h-fit flex flex-col items-center max-w-[1440px]">
            <div class="w-[1000px] h-[1000px] rounded-full absolute left-[-30%] border-4 border-gray-300 dark:border-gray-700"></div>
            <img src="./src/resources/Untitled design (11).png" class="absolute z-[0] w-[30vw] max-w-[100px] top-[0] left-[20%] animate-updown1">
            <img src="./src/resources/Untitled design (7).png" class="absolute z-[1] w-[40vw] max-w-[200px] bottom-[20%] left-[0] animate-updown2">
            <img src="./src/resources/Untitled design (15).png" class="absolute z-[0] w-[90vw] max-w-[350px] bottom-[-20%] left-[0] animate-updown1">

            <div class="grid grid-cols-1 mb-2 max-w-[1440px] text-center mx-[5%] md:mx-[10%] z-[1] relative">
                <div class="grid grid-cols-[repeat(2,auto)]">
                    <h1 class="font-black text-theme-black dark:text-theme-white text-[2rem] md:text-[3.5vw] xl:text-[3rem] text-end">SKILL</h1>
                    <h1 class="text-start bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 font-black text-[2rem] md:text-[3.5vw] xl:text-[3rem]">S</h1>
                </div>
                <p class="text-[1.2rem] dark:text-theme-white">I have experience with these technologies</p>
            </div>
            <div class="grid lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 xs:gap-5 gap-4 items-center justify-center max-w-[1440px] mx-[5%] md:mx-[10%] mt-2 z-[1]">
                <img src="./src/resources/skills/react.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/tailwind.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <!-- <img src="./src/resources/skills/material ui.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800"> -->
                <img src="./src/resources/skills/html5.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/css.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/js.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/jquery-dark.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-800 hidden dark:block">
                <img src="./src/resources/skills/jquery.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:hidden">
                <img src="./src/resources/skills/swiperjs.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/bootstrap.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/mysql.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/php.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/prestashop.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <!-- <img src="./src/resources/skills/wix-dark.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-800 hidden dark:block">
                <img src="./src/resources/skills/wix.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:hidden"> -->
                <img src="./src/resources/skills/unity-dark.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-800 hidden dark:block">
                <img src="./src/resources/skills/unity.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:hidden">
                <img src="./src/resources/skills/git.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/github-dark.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-800 hidden dark:block">
                <img src="./src/resources/skills/github.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:hidden">
                <img src="./src/resources/skills/csharp.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <!-- <img src="./src/resources/skills/c++.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/java.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800"> -->
                <img src="./src/resources/skills/figma.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/ai.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/ps.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
                <img src="./src/resources/skills/canva.png" alt="" class="max-h-[100px] max-w-[100px] w-full rounded-md hover:-translate-y-2 transition-transform
                hover:drop-shadow-xl p-2 bg-gray-200 dark:bg-gray-800">
            </div>
        </section>

        <!-- projects -->
        <div id="projects" class="scroll-mt-[-150px]"></div>
        <section class="relative mt-52 w-[-webkit-fill-available] flex flex-col items-center max-w-[1440px] mx-[5%] md:mx-[10%]">
            <img src="./src/resources/Untitled design (14).png" class="absolute z-[0] w-[30vw] max-w-[100px] top-[0] right-[-10%] animate-updown2">
            <img src="./src/resources/Untitled design (10).png" class="absolute z-[0] w-[70vw] max-w-[300px] bottom-[-20%] right-[-20%] animate-updown1">

            <div class="grid grid-cols-[repeat(2,auto)] mb-2 z-[1]">
                <h1 class="font-black text-theme-black dark:text-theme-white text-[2rem] md:text-[3.5vw] xl:text-[3rem]">PROJECT</h1>
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 font-black text-[2rem] md:text-[3.5vw] xl:text-[3rem]">S</h1>
            </div>
            <!-- Swiper projects -->
            <div class="swiper mySwiper text-center w-full h-[450px]">
                <div class="swiper-wrapper h-full">
                    <!--affordapos -->
                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/logo.png" class="w-[150px] h-[150px]" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">AffordaPOS</p>
                                <p class="dark:text-theme-white">A website for AffordaPOS</p>
                                <a href="https://ifejinity.github.io/affordaPOS/" target="_blank" class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md">VISIT</a>
                            </div>
                        </div>
                    </div>

                    <!-- ecommerce bslts -->
                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/bslts.png" class="w-[150px] h-[150px] dark:hidden" alt="" srcset="">
                                <img src="./src/resources/projects/bslts-dark.png" class="w-[150px] h-[150px] hidden dark:block" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">BSLTS</p>
                                <p class="dark:text-theme-white">An Ecommerce website for BSLTS developed with Prestashop</p>
                                <a href="https://github.com/ifejinity/e-commerce-website-for-BSLTS-Prestashop-" target="_blank" class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md">CODE</a>
                            </div>
                        </div>
                    </div>

                    <!-- jump ninja -->
                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/ninja.png" class="w-[150px] h-[150px] rounded-full" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">JumpNinja</p>
                                <p class="dark:text-theme-white">An Endless runner game developed with Unity game engine</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://drive.google.com/file/d/1V6kcqIPhMP_SS_xoxJy7aumWFi5DuRAs/view?usp=sharing"
                                target="_blank">DOWNLOAD</a>
                            </div>
                        </div>
                    </div>

                    <!-- police clearance system -->
                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/taytay.png" class="w-[150px] h-[150px]" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">ClearCheck</p>
                                <p class="dark:text-theme-white">A Police clearance system for municipality of Taytay, Rizal</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://github.com/ifejinity/policeclearancesystem"
                                target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>

                    <!-- marketplace -->
                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/University_of_San_Agustin.png" class="w-[150px] h-[150px]" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">FreelanceHub</p>
                                <p class="dark:text-theme-white">A freelance marketplace for University of san agustin</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://github.com/ifejinity/freelance-marketplace"
                                target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/logo - Copy.png" class="w-[150px] h-[150px]" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">UniversityChat</p>
                                <p class="dark:text-theme-white">Connect all students from a specific institution by offering a real-time messaging platform</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://universitychat.synergize.co/"
                                target="_blank">VISIT</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/projects/whispersec.png" class="w-[150px] h-[150px]" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">WhisperSec</p>
                                <p class="dark:text-theme-white">WhisperSec, an app that allows users to post and receive comments anonymously.</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://whispersec.totalh.net"
                                target="_blank">VISIT</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/logo.png" class="w-[150px] h-[150px] dark:hidden" alt="" srcset="">
                                <img src="./src/resources/logo-dark.png" class="w-[150px] h-[150px] hidden dark:block" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">Memoria</p>
                                <p class="dark:text-theme-white">An Online Gallery created with PHP</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://github.com/ifejinity/Online_Gallery"
                                target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/logo.png" class="w-[150px] h-[150px] dark:hidden" alt="" srcset="">
                                <img src="./src/resources/logo-dark.png" class="w-[150px] h-[150px] hidden dark:block" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">Portfoliov3</p>
                                <p class="dark:text-theme-white">A Portfolio created with Vanilla Js, CSS3, and HTML5</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://ifejinity.github.io/portfolio-v3/"
                                target="_blank">VISIT</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide relative max-w-[280px] max-h-[410px] border-solid border-theme-black rounded-xl p-5 bg-gray-200 dark:bg-gray-800
                    flex flex-col items-center shadow-lg">
                        <div class="flex flex-col w-full h-full gap-2">
                            <div class="flex flex-row gap-2">
                                <div class="rounded-full bg-red-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-yellow-500 w-[15px] h-[15px]"></div>
                                <div class="rounded-full bg-green-500 w-[15px] h-[15px]"></div>
                            </div>
                            <div class="flex flex-col justify-between h-full items-center gap-4">
                                <img src="./src/resources/logo.png" class="w-[150px] h-[150px] dark:hidden" alt="" srcset="">
                                <img src="./src/resources/logo-dark.png" class="w-[150px] h-[150px] hidden dark:block" alt="" srcset="">
                                <p class="text-[30px] font-black dark:text-theme-white leading-none">Portfoliov2</p>
                                <p class="dark:text-theme-white">A Portfolio created with Vanilla Js, CSS3, and HTML5</p>
                                <a class="w-full font-medium text-[1rem] bg-gradient-to-r from-teal-300 to-sky-500 rounded-xl
                                p-3 hover:opacity-90 hover:-translate-y-2 transition-all hover:drop-shadow-md"
                                href="https://ifejinity.github.io/portfolio/"
                                target="_blank">VISIT</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination bottom-0"></div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </section>

        <!-- contacts -->
        <div id="contacts" class="scroll-mt-[-150px]"></div>
        <section class="relative mt-52 w-full flex flex-col items-center bg-gray-200 dark:bg-gray-800 py-5">
            <div class="grid grid-cols-[repeat(2,auto)] mx-[5%] md:mx-[10%]">
                <h1 class="font-black text-theme-black dark:text-theme-white text-[2rem] md:text-[3.5vw] xl:text-[3rem]">CONTACT</h1>
                <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 font-black text-[2rem] md:text-[3.5vw] xl:text-[3rem]">S</h1>
            </div>
            <div class="mx-[5%] md:mx-[10%]">
                <p class="text-[1.1rem] text-center mb-2 dark:text-white">Let's embark on a meaningful conversation and create something extraordinary together.</p>
            </div>
            <div class="w-[-webkit-fill-available] md:p-10 pt-10 max-w-[1440px] mx-[5%] md:mx-[10%]">
                <form name="mail" id="mail">
                    <div class="w-full flex flex-col gap-5 justify-center items-center">
                        <div class="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
                            <input type="text" name="fname" id="fname" placeholder="Full name" class="p-3 outline-none rounded-lg" required>
                            <input type="email" name="email" id="email" placeholder="Email" class="p-3 outline-none rounded-lg" required>
                        </div>
                        <textarea name="message" id="message" cols="30" rows="5" class="resize-none p-3 outline-none w-full rounded-lg" placeholder="Message" required></textarea>
                        
                        <button type="submit" name="send" id="send" class="max-w-[200px] w-full font-medium text-[1rem] bg-theme-dblue rounded-xl p-3 hover:opacity-90 hover:-translate-y-1 transition-all hover:drop-shadow-md text-white flex justify-center">SEND</button>
                    </div>
                </form>
            </div>
        </section>

        <footer class="w-full py-5 flex justify-center items-center text-center dark:text-theme-white font-medium bg-gray-300 dark:bg-gray-900">
            <div class="[-webkit-fill-available] mx-[5%] md:mx-[10%]">
                <p>Built and Designed by: Lonzanida, Jeffrey B.</p>
            </div>
        </footer>
    </div>

    <!-- navbar mobile -->
    <div class="flex flex-col items-center backdrop-blur-sm z-10 fixed h-screen w-screen sm:hidden overflow-hidden gap-5 py-28 px-5 font-semibold ease-in-out duration-200 bg-theme-white/80 dark:bg-theme-black/80" id="navbarMobile">
        <button id="navButtonMobile" class=" text-lg rounded-xl h-11 hover:text-theme-dblue dark:text-theme-white">Home</button>
        <button id="navButtonMobile" class="text-lg rounded-xl h-11 hover:text-theme-dblue dark:text-theme-white">About</button>
        <button id="navButtonMobile" class="text-lg rounded-xl h-11 hover:text-theme-dblue dark:text-theme-white">Skills</button>
        <button id="navButtonMobile" class="text-lg rounded-xl h-11 hover:text-theme-dblue dark:text-theme-white">Projects</button>
        <button id="navButtonMobile" class="text-lg rounded-xl h-11 hover:text-theme-dblue dark:text-theme-white">Contacts</button>
        <p class="dark:text-theme-white text-lg">Mode</p>
        <label class="switch">
            <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
            <input for="switch" for="switch" type="checkbox" class="input">
            <span class="slider"></span>
        </label>
        <p class="mt-auto font-normal text-sm text-slate-400 text-center">This site is Developed by Jeffrey Lonzanida</p>
    </div>
        

    <!-- script -->
    <script src="./index.js"></script>
    <!-- aos -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <!-- swiper js -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

    <script>
        AOS.init();
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>
</body>
</html>