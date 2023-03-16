import './App.css';

function App() {

  // DOM Ready Function
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // DOM Ready Called
  ready(function () {

    var prevScrollpos = window.pageYOffset;

    const nav = document.getElementById('nav');
    const navMove = document.getElementById('navMove');
    const navButton = document.getElementById('navButton');
    const navMenuIcon = document.getElementsByClassName('navMenuIcon');
    const navLogo = document.getElementById('navLogo');

    const navMenuAbout = document.getElementsByClassName('navMenuAbout');
    const sectionAbout = document.getElementById('sectionAbout');

    const navMenuPortfolio = document.getElementById('navMenuPortfolio');
    const sectionPortfolio = document.getElementById('sectionPortfolio');

    const navMenuContact = document.getElementById('navMenuContact');
    const sectionContact = document.getElementById('sectionContact');

    // Hide or show icon menu navbar
    let hideNavMenuIcon = (menu) => {
      for (let index = 0; index < menu.length; index++) {
        if (menu[index].classList.contains('block')) {
          menu[index].classList.remove('block')
          menu[index].classList.add('hidden')
        } else {
          menu[index].classList.remove('hidden')
          menu[index].classList.add('block')
        }
      }
    }

    // Hide or show sidebar
    let hideSidebar = (sidebar) => {
      if (sidebar.classList.contains('invisible')) {
        sidebar.classList.remove('invisible', 'translate-x-full');
        sidebar.classList.add('translate-x-0');
      } else {
        sidebar.classList.add('translate-x-full');
        sidebar.classList.remove('translate-x-0');

        setTimeout(() => {
          sidebar.classList.add('invisible');
        }, 500)
      }
    }

    // Show sidebar event

    if (navButton) {
      navButton.addEventListener('click', () => {
        hideNavMenuIcon(navMenuIcon)
        hideSidebar(navMove)
      });
    }

    // Scroll to element event
    let scrollToView = (by, to) => {

      if (by) {
        by.addEventListener('click', () => {

          // Check if the sidebar open.
          //if open then, close it
          if (navMove.classList.contains('translate-x-0')) {
            // Then change menu
            hideNavMenuIcon(navMenuIcon)
            //finally hide the sidebar
            hideSidebar(navMove)
          }

          to.scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    }

    // Call scroll to view event
    for (let index = 0; index < navMenuAbout.length; index++) {
      scrollToView(navMenuAbout[index], sectionAbout)
    }
    scrollToView(navMenuPortfolio, sectionPortfolio)
    scrollToView(navMenuContact, sectionContact)


    //On scroll hide nav menu event
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      // if (navMove) {
      if (navMove.classList.contains('invisible')) {
        if (prevScrollpos > currentScrollPos) {
          if (!nav.classList.contains('translate-y-auto')) {
            nav.classList.add('translate-y-auto')
            nav.classList.remove('-translate-y-24')
          }
        } else {

          if (nav.classList.contains('translate-y-auto')) {
            nav.classList.remove('translate-y-auto')
            nav.classList.add('-translate-y-24')
          }
        }
      }
      // }
      prevScrollpos = currentScrollPos;
    }


    //scroll to top event
    if (navLogo) {
      navLogo.addEventListener('click', () => {

        // Check if the sidebar open.
        //if open then, close it
        if (navMove.classList.contains('translate-x-0')) {
          // Then change menu
          hideNavMenuIcon(navMenuIcon)
          //finally hide the sidebar
          hideSidebar(navMove)
        }

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }



  });


  return (
    <body class="mx-auto flex h-auto w-full flex-col flex-wrap justify-center overflow-x-hidden scroll-smooth bg-primary">
      {/* <!-- Navbar --> */}
      <nav id="nav"
        class="translate-y-auto sticky top-0 z-40 h-max w-full flex-1 justify-center bg-primary p-6 transition duration-500 lg:p-4">
        <div class="mx-auto max-w-6xl flex-col flex-wrap items-center justify-between text-primary">
          <div class="flex flex-1 flex-wrap items-center font-open-sans">
            {/* <!-- Nav Title --> */}
            <button id="navLogo" type="button" class="z-50 inline-flex flex-1 gap-2 text-xl font-bold">
              <div class="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">
                Peter LIoyd
              </div>
            </button>
            {/* <!-- End Nav Title --> */}

            {/* <!-- Nav Menu --> */}
            <div id="navMove"
              class="invisible fixed inset-0 z-40 flex-none basis-full translate-x-full bg-primary text-lg transition duration-500 lg:visible lg:relative lg:top-0 lg:basis-auto lg:translate-x-0 lg:transition-none">
              <div
                class="flex h-full flex-col flex-nowrap items-center justify-center space-x-0 space-y-8 p-6 lg:flex lg:flex-row lg:justify-end lg:space-x-14 lg:space-y-0 lg:p-0">
                <button class="navMenuAbout text-xl hover:text-secondary lg:text-base">
                  About Me
                </button>
                <button id="navMenuPortfolio" class="text-xl hover:text-secondary lg:text-base">
                  My Portofolio
                </button>
                <button id="navMenuContact"
                  class="group inline-flex items-center gap-3 rounded-full border-2 border-primary px-8 py-4 hover:border-transparent hover:bg-senary hover:font-semibold hover:text-senary">
                  GET IN TOUCH
                  {/* <!-- Arrow top left --> */}
                  <svg class="h-6 w-6 fill-primary group-hover:fill-tertiary" fill="none"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z" />
                  </svg>
                  {/* <!-- End Arror Top Left --> */}
                </button>
              </div>
            </div>
            {/* <!-- End Nav Menu --> */}

            {/* <!-- Nav Icon --> */}
            <div class="z-50 flex-none">
              <div class="flex justify-end lg:hidden">
                <button id="navButton"
                  class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary">
                  {/* <!-- Open Icon --> */}
                  <svg class="navMenuIcon block w-8 fill-primary" fill="none"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z" />
                  </svg>
                  {/* <!-- End Open Icon --> */}

                  {/* <!-- Close Icon --> */}
                  <svg class="navMenuIcon hidden w-8 fill-primary" fill="none"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" />
                  </svg>
                  {/* <!-- End Close Icon --> */}
                </button>
              </div>
            </div>

            {/* <!-- End Nav Icon --> */}
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}

      <main class="my-12 h-full w-full flex-1 overflow-hidden">
        {/* <!-- Section One --> */}
        <section class="mx-auto h-auto px-3 pt-20 text-primary sm:max-w-4xl md:max-w-4xl md:px-6 lg:max-w-5xl lg:pt-3">
          <div class="flex flex-col items-center gap-6 font-poppins font-semibold sm:gap-3">
            <div type="button" class="inline-flex flex-wrap justify-center gap-3 text-center text-5xl sm:text-6xl">
              <div class="inline-flex after:text-secondary after:content-[',']">
                Hi
              </div>
              I'm
              <span class="before:text-secondary before:content-['.']">
                Peter
              </span>
            </div>
            <div class="inline-flex flex-wrap justify-center text-2xl sm:text-4xl">
              A full stack
              <div class="text-secondary">-</div>
              Developer
            </div>
            <div class="relative flex-none">
              {/* <!-- Hero Image --> */}
              <div class="z-10 flex">
                <img class="overflow-hidden object-cover object-top sm:h-[500px] sm:w-[500px]"
                  src="./assets/img/hero/person.png" alt="Peter LIoyd" />
                {/* <!-- Scroll Down Button --> */}

                {/* <!-- Just remove the "hidden" show scroll button on other screen size --> */}
                <div class="absolute bottom-12 left-[46%] z-20 hidden sm:bottom-8 sm:left-[45%] lg:block">
                  <button
                    class="navMenuAbout inline-flex h-32 w-16 flex-col items-center justify-center gap-2 rounded-full border border-primary/5 bg-white/5 backdrop-blur-sm sm:h-40 sm:w-20">
                    <svg class="h-5 w-5 fill-tertiary" fill="none" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 19.575q-.2 0-.375-.063q-.175-.062-.325-.212l-6.6-6.6q-.3-.3-.3-.713q0-.412.3-.712t.7-.3q.4 0 .7.3l4.9 4.9v-11.2q0-.425.288-.7Q11.575 4 12 4t.713.287Q13 4.575 13 5v11.175l4.9-4.9q.3-.3.7-.3q.4 0 .7.3q.3.3.3.712q0 .413-.3.713l-6.6 6.6q-.15.15-.325.212q-.175.063-.375.063Z" />
                    </svg>
                    <span class="px-3 font-open-sans text-sm font-semibold text-senary">
                      Scroll Down
                    </span>
                  </button>
                </div>
                {/* <!-- End Scroll Down Button --> */}
              </div>
              {/* <!-- hero Image --> */}

              {/* <!-- Filter Image --> */}
              <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141416]"></div>
              <div class="absolute inset-x-0 bottom-0 h-20 bg-primary/30 blur-lg"></div>
              {/* <!-- End Filter Image --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Section One --> */}

        {/* <!-- Section Two --> */}
        <section id="sectionAbout"
          class="mx-auto h-auto px-6 py-28 text-primary sm:max-w-4xl sm:py-40 md:max-w-4xl lg:max-w-6xl lg:px-12">
          <div class="flex flex-col">
            <div class="mb-12 flex-1 md:mb-0">
              {/* <!-- Section Title --> */}
              <div class="inline-flex gap-2 font-open-sans text-xl font-bold">
                <div
                  class="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">
                  About Me
                </div>
              </div>
              {/* <!-- End Section Title --> */}
            </div>

            {/* <!-- Profile Detail --> */}
            <div class="flex-1 space-y-6 md:space-y-0 lg:space-y-12">
              <div class="flex md:justify-end">
                <div class="space-y-6 md:basis-7/12 lg:flex-none lg:basis-1/2 lg:space-y-6">
                  <h2 class="font-poppins text-5xl md:text-6xl">Me... at a PC</h2>
                  <p class="break-words font-open-sans text-xl leading-loose text-tertiary">
                    It did not start like this, I wasn't always just glued to the
                    computer. I used to play a lot of Basketball 🏀.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-1 basis-full">
                  <div class="flex flex-col-reverse items-center gap-12 md:flex-row lg:gap-16">
                    <div class="flex-none space-y-16 font-open-sans md:w-5/12">
                      <div class="space-y-4">
                        <span class="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">
                          From
                        </span>
                        <div class="font-bold">Berlin, Germany</div>
                        <div class="text-tertiary">
                          Currently living in Berlin, I moved here with my Family
                          when I was 15.
                        </div>
                      </div>
                      <div class="space-y-4">
                        <span class="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">
                          School
                        </span>
                        <div class="font-bold">Bachelors in Mechatronics</div>
                        <div class="text-tertiary">
                          Well.. not really as I kind of dropped out after 4
                          months, but that was the start to my coding curiosity.
                        </div>
                      </div>
                      <div class="space-y-4">
                        <span class="rounded-md bg-quaternary py-2 px-6 font-bold text-secondary">
                          Coding
                        </span>
                        <div class="font-bold">4 Years of Experience</div>
                        <div class="text-tertiary">
                          I started with Electronics and Arduinos back in 2017...
                          But now Im really into web dev.
                        </div>
                      </div>
                    </div>
                    <div class="mt-8 flex-1 md:mt-0">
                      <div class="relative">
                        <img class="absolute inset-0" src="./assets/img/about/person.png"
                          alt="Peter LIoyd" />
                        <img src="./assets/img/about/bg.png" alt="Linear Bg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Profile Detail --> */}
          </div>
        </section>
        {/* <!-- End Section Two --> */}

        {/* <!-- Section Three --> */}
        <section id="sectionPortfolio"
          class="mx-auto h-auto px-6 py-28 text-primary sm:max-w-4xl sm:py-40 md:max-w-4xl lg:max-w-6xl lg:px-12">
          <div class="flex flex-col">
            <div class="mb-10 flex-none">
              {/* <!-- Section Title --> */}
              <div class="inline-flex gap-2 font-open-sans text-xl font-bold">
                <div
                  class="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">
                  Portfolio
                </div>
              </div>
              {/* <!-- End Section Title --> */}
            </div>
            <div class="mb-10 flex-1 font-open-sans leading-relaxed text-tertiary md:w-1/2 lg:w-2/5">
              This are some of the projects I have done from scrip tinging to web
              development I have tried a bunch of things.
            </div>
            <div class="mb-10 flex-1 md:w-1/2 lg:w-2/5">
              <div class="flex flex-wrap gap-3 font-poppins sm:gap-6">
                <div class="inline-flex gap-2">
                  <div class="text-tertiary before:text-secondary before:content-['//']">
                    Full-stack Website
                  </div>
                </div>
                <div class="inline-flex gap-2">
                  <div class="text-tertiary before:text-secondary before:content-['//']">
                    Blender Python Scripts
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Post Card --> */}
          <div class="space-y-16 sm:space-y-12">
            <div class="flex flex-col gap-10 md:flex-row lg:gap-24">
              <a href="https://github.com" target="_blank" class="mt-12 h-72 flex-1  sm:mt-0">
                <img class="h-full w-full rounded-2xl object-cover object-center"
                  src="./assets/img/portfolio/portfolio1.png" alt="Post" />
              </a>
              <div class="flex-none md:w-2/5 lg:w-2/6">
                <div class="flex h-full items-end">
                  <div class="flex-1 space-y-8">
                    <span
                      class="rounded-md bg-quaternary py-2 px-6 font-open-sans font-bold text-secondary">
                      Latest
                    </span>
                    <div class="space-y-8 font-poppins text-primary">
                      <div class="text-3xl font-semibold">Portfolio</div>
                      <div>Full stack Webs</div>
                      <div>
                        Built from scratch, using Next.js, Typescript, Tailwind
                        and Firebase.
                      </div>
                    </div>
                    <div class="flex items-center justify-between gap-6 md:justify-start">
                      <a href="https://github.com" target="_blank"
                        class="inline-flex items-center rounded-lg bg-tertiary py-2 px-3 font-poppins text-sm before:content-['<'] after:content-['>'] hover:bg-quaternary hover:text-secondary">
                        /
                      </a>
                      <div class="font-open-sans">
                        <a href="https://example.com" target="_blank"
                          class="group inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 hover:border-transparent hover:bg-senary hover:font-semibold hover:text-senary">
                          SEE IT LIVE

                          {/* <!-- Arrow top left --> */}
                          <svg class="h-6 w-6 fill-primary group-hover:fill-tertiary" fill="none"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z" />
                          </svg>
                          {/* <!-- End Arroe top left --> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-10 md:flex-row lg:gap-24">
              <a href="https://github.com" target="_blank" class="mt-12 h-72 flex-1  sm:mt-0">
                <img class="h-full w-full hover:border border-transparent bg-secondary hover:border-secondary/50 rounded-2xl object-cover object-center"
                  src="./assets/img/portfolio/portfolio1.png" alt="Post" />
              </a>
              <div class="flex-none md:w-2/5 lg:w-2/6">
                <div class="flex h-full items-end">
                  <div class="flex-1 space-y-8">
                    <div class="space-y-8 font-poppins text-primary">
                      <div class="text-3xl font-semibold">360 Generator</div>
                      <div>Blender Script</div>
                      <div>
                        Blender script that generates a 6.png images that generate
                        a 360 render.
                      </div>
                    </div>
                    <div class="flex items-center justify-between gap-6 md:justify-start">
                      <a href="https://github.com" target="_blank"
                        class="inline-flex items-center rounded-lg bg-tertiary py-2 px-3 font-poppins text-sm before:content-['<'] after:content-['>'] hover:bg-quaternary hover:text-secondary">
                        /
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Post Card --> */}
        </section>
        {/* <!-- End Section Three --> */}

        {/* <!-- Section Four --> */}
        <section id="sectionContact"
          class="mx-auto h-auto px-6 py-28 text-primary sm:max-w-4xl sm:py-40 md:max-w-4xl lg:max-w-6xl lg:px-12">
          <div class="flex flex-col">
            <div class="mb-8 flex-none md:mb-10">
              {/* <!-- Section Title --> */}
              <div class="inline-flex gap-2 font-open-sans text-xl font-bold">
                <div
                  class="before:text-secondary before:content-['<'] after:text-secondary after:content-['/>']">
                  Contact Me
                </div>
              </div>
              {/* <!-- End Section Title --> */}
            </div>
            <h2 class="mb-8 font-poppins text-4xl font-medium leading-relaxed md:mb-10 md:text-5xl lg:text-6xl">
              I've worked on many projects and believe I can help with yours.
            </h2>
            <p class="break-words font-open-sans text-xl leading-loose text-tertiary">
              Anything from simple designs to full-stack development.
            </p>
          </div>
          <div class="mt-6 flex flex-col-reverse items-center gap-20 md:flex-row md:gap-12 lg:gap-20">
            <div class="w-full flex-none md:w-2/5 lg:w-3/5">
              {/* <!-- Social Card --> */}
              <div class="mx-8 grid grid-cols-2 gap-10 md:mx-0">
                {/* <!-- Githu Card --> */}
                <a href="https://github.com/peter" target="_blank"
                  class="group col-span-2 rounded-xl bg-quinary py-10 px-6 hover:bg-senary/10 lg:py-12">
                  <div class="flex flex-col gap-8">
                    <div
                      class="inline-flex h-20 w-20 flex-none items-center justify-center rounded-full bg-quaternary">
                      {/* <!-- Github Icon --> */}
                      <svg class="h-10 w-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-primary group-hover:fill-secondary" fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.0005 0.833374C15.2525 0.835837 10.6603 2.51747 7.04482 5.57758C3.42939 8.63769 1.02655 12.8767 0.265948 17.5367C-0.49465 22.1967 0.436585 26.9737 2.89316 31.0137C5.34973 35.0536 9.17144 38.093 13.6749 39.5883C14.6685 39.7727 15.0427 39.157 15.0427 38.6334C15.0427 38.1098 15.0228 36.5917 15.0162 34.9321C9.45237 36.134 8.27668 32.5842 8.27668 32.5842C7.36925 30.2791 6.05777 29.6732 6.05777 29.6732C4.2429 28.4416 6.19356 28.4647 6.19356 28.4647C8.20383 28.6063 9.2603 30.5162 9.2603 30.5162C11.0421 33.5556 13.9399 32.6764 15.0791 32.1627C15.258 30.8751 15.7779 29.9992 16.3509 29.502C11.9064 29.0014 7.23677 27.2957 7.23677 19.6757C7.20923 17.6996 7.94675 15.7885 9.29673 14.3378C9.09139 13.8373 8.40584 11.8154 9.49211 9.06909C9.49211 9.06909 11.1712 8.53563 14.993 11.1074C18.2712 10.2161 21.7298 10.2161 25.0079 11.1074C28.8264 8.53563 30.5022 9.06909 30.5022 9.06909C31.5918 11.8088 30.9063 13.8307 30.7009 14.3378C32.0552 15.7887 32.7942 17.7031 32.7642 19.6823C32.7642 27.3187 28.0846 29.0014 23.6335 29.4921C24.3489 30.1112 24.9881 31.3197 24.9881 33.1769C24.9881 35.8376 24.9649 37.9781 24.9649 38.6334C24.9649 39.1635 25.3259 39.7826 26.3393 39.5883C30.8433 38.0928 34.6654 35.0529 37.1219 31.0123C39.5784 26.9716 40.5092 22.1939 39.7477 17.5335C38.9863 12.873 36.5822 8.63397 32.9656 5.57438C29.349 2.5148 24.7556 0.834276 20.0071 0.833374H20.0005Z"
                          fill="none" />
                      </svg>
                      {/* <!-- End Github Icon --> */}
                    </div>
                    <div class="inline-flex flex-col space-y-3 font-open-sans">
                      <div class="text-xl font-bold text-primary">Github</div>
                      <div class="break-words text-quaternary">
                        https://github.com/peter
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- End Github Card --> */}

                {/* <!-- Linked InCard --> */}
                <a href="https://linkedin.com/Peter" target="_blank"
                  class="group col-span-2 rounded-xl bg-quinary py-10 px-6 hover:bg-senary/10 lg:col-span-1 lg:py-12">
                  <div class="flex flex-col gap-8">
                    <div
                      class="inline-flex h-20 w-20 flex-none items-center justify-center rounded-full bg-quaternary">
                      {/* <!-- LinkedIn Icon --> */}
                      <svg class="h-10 w-10" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_228_43040)">
                          <path
                            d="M37.0391 0H2.95312C1.32031 0 0 1.28906 0 2.88281V37.1094C0 38.7031 1.32031 40 2.95312 40H37.0391C38.6719 40 40 38.7031 40 37.1172V2.88281C40 1.28906 38.6719 0 37.0391 0ZM11.8672 34.0859H5.92969V14.9922H11.8672V34.0859ZM8.89844 12.3906C6.99219 12.3906 5.45312 10.8516 5.45312 8.95312C5.45312 7.05469 6.99219 5.51562 8.89844 5.51562C10.7969 5.51562 12.3359 7.05469 12.3359 8.95312C12.3359 10.8438 10.7969 12.3906 8.89844 12.3906ZM34.0859 34.0859H28.1562V24.8047C28.1562 22.5938 28.1172 19.7422 25.0703 19.7422C21.9844 19.7422 21.5156 22.1562 21.5156 24.6484V34.0859H15.5938V14.9922H21.2812V17.6016H21.3594C22.1484 16.1016 24.0859 14.5156 26.9688 14.5156C32.9766 14.5156 34.0859 18.4688 34.0859 23.6094V34.0859Z"
                            class="fill-primary group-hover:fill-secondary" fill="none" />
                        </g>
                        <defs>
                          <clipPath id="clip0_228_43040">
                            <rect width="40" height="40"
                              class="fill-primary group-hover:fill-secondary" fill="none" />
                          </clipPath>
                        </defs>
                      </svg>

                      {/* <!-- End LinkedIn Icon --> */}
                    </div>
                    <div class="inline-flex flex-col space-y-3 font-open-sans">
                      <div class="text-xl font-bold text-primary">LinkedIn</div>
                      <div class="break-words text-quaternary">
                        https://linkedin.com/Peter
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- End LinkedIn Card --> */}

                {/* <!-- Twitter Card --> */}
                <a href="https://twitter.com/peter" target="_blank"
                  class="group col-span-2 rounded-xl bg-quinary py-10 px-6 hover:bg-senary/10 lg:col-span-1 lg:py-12">
                  <div class="flex flex-col gap-8">
                    <div
                      class="inline-flex h-20 w-20 flex-none items-center justify-center rounded-full bg-quaternary">
                      {/* <!-- Twitter Icon --> */}
                      <svg class="h-10 w-10" viewBox="0 0 40 34" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-primary group-hover:fill-secondary"
                          d="M12.5836 33.25C27.6742 33.25 35.9305 20.7445 35.9305 9.9031C35.9305 9.55154 35.9227 9.19216 35.907 8.8406C37.5131 7.6791 38.8992 6.24042 40 4.59216C38.5042 5.25767 36.9161 5.6923 35.2898 5.88123C37.0021 4.85485 38.2842 3.24245 38.8984 1.34294C37.2876 2.2976 35.526 2.97102 33.6891 3.33435C32.4514 2.01927 30.815 1.14853 29.0328 0.856752C27.2506 0.564976 25.422 0.868417 23.8296 1.72016C22.2372 2.5719 20.9697 3.92451 20.2231 5.56885C19.4765 7.2132 19.2924 9.05769 19.6992 10.8172C16.4375 10.6535 13.2466 9.80617 10.3333 8.33016C7.42004 6.85415 4.84949 4.78239 2.78828 2.24919C1.74067 4.05541 1.42009 6.19274 1.89172 8.22682C2.36334 10.2609 3.59177 12.0391 5.32734 13.2C4.02438 13.1586 2.74996 12.8078 1.60938 12.1765V12.2781C1.60821 14.1736 2.2635 16.011 3.46385 17.4779C4.6642 18.9449 6.33554 19.9509 8.19375 20.325C6.98676 20.6552 5.71997 20.7033 4.49141 20.4656C5.01576 22.0957 6.03596 23.5215 7.40962 24.5439C8.78328 25.5663 10.4419 26.1343 12.1539 26.1687C9.24737 28.4518 5.65696 29.6902 1.96094 29.6844C1.30548 29.6833 0.650665 29.6432 0 29.564C3.75476 31.9729 8.12255 33.2523 12.5836 33.25Z"
                          fill="none" />
                      </svg>

                      {/* <!-- End Twitter Icon --> */}
                    </div>
                    <div class="inline-flex flex-col space-y-3 font-open-sans">
                      <div class="text-xl font-bold text-primary">Twitter</div>
                      <div class="break-words text-quaternary">
                        https://twitter.com/peter
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- End Twitter card --> */}
              </div>
              {/* <!-- End Social Card --> */}
            </div>
            <div class="flex-1">
              <img src="./assets/img/contact/person.png" alt="Peter LIoyd" />
            </div>
          </div>
        </section>
        {/* <!-- Section Four --> */}
      </main>

      {/* Footer  */}
      <footer class="relative mx-auto my-20 h-full w-full">
        <div class="flex justify-center">
          <span class="font-open-sans text-xl text-primary text-quaternary before:content-['©']">
            Peter LIoyd 2023
          </span>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </body>

  );
}

export default App;
