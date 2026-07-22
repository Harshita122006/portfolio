/* ==========================================================================
   GARDEN CITY UNIVERSITY — SCRIPT
   Organized into sections, matching style.css. Chatbot logic (Nova) is kept
   from the original project and will be improved in a later step.
   ========================================================================== */

/* ==========================================================================
   1. NAVBAR — scroll state
   Adds a "scrolled" class to the navbar once the user moves past the top,
   so CSS can deepen the glass background (see #navbar.scrolled in style.css).
   ========================================================================== */
const navbar = document.getElementById("navbar");

function updateNavbarOnScroll() {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNavbarOnScroll);
updateNavbarOnScroll(); // run once on load in case the page opens mid-scroll (e.g. refresh)


/* ==========================================================================
   2. MOBILE MENU
   Toggles the hamburger icon, the slide-in panel, and the dimmed overlay
   together so they always stay in sync.
   ========================================================================== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMobileMenu() {
  hamburger.classList.add("open");
  mobileMenu.classList.add("open");
  menuOverlay.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuOverlay.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

hamburger.addEventListener("click", () => {
  // If it's already open, clicking again closes it (toggle behaviour)
  const isOpen = mobileMenu.classList.contains("open");
  isOpen ? closeMobileMenu() : openMobileMenu();
});

// Clicking the dark overlay behind the menu also closes it
menuOverlay.addEventListener("click", closeMobileMenu);

// Closing the menu automatically when a link inside it is tapped,
// so the user isn't left staring at the menu after navigating
document.querySelectorAll(".mobile-link, .mobile-cta").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});


/* ==========================================================================
   3. ACTIVE LINK HIGHLIGHTING
   Watches which section is currently in view and highlights the matching
   nav link, so the underline (see .nav-link.active in style.css) follows
   the user as they scroll.
   ========================================================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // small offset for the fixed navbar
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();


/* ==========================================================================
   3b. FOOTER — auto-fill current year
   Keeps the copyright year correct forever without manual edits.
   ========================================================================== */
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


/* ==========================================================================
   4. NOVA CHATBOT (original logic, unchanged for now — improved later)
   ========================================================================== */
function toggleNova() {
  let chat = document.getElementById("nova");
  if (chat.style.display === "none" || chat.style.display === "") {
    chat.style.display = "flex";
  } else {
    chat.style.display = "none";
  }
}

function sendMessage() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += "<div class='user'>" + input + "</div>";

  let response = "Sorry, I didn't understand that.";
  if (input.includes("admission")) {
    response = "You can apply through the Garden City University admission portal.";
  } else if (input.includes("course")) {
    response = "GCU offers programs like BCA, BBA, BCom and many postgraduate courses.";
  } else if (input.includes("fee")) {
    response = "Fee details are available in the admissions section of the website.";
  } else if (input.includes("hostel")) {
    response = "Yes, Garden City University provides hostel facilities for students.";
  } else if (input.includes("location")) {
    response = "Garden City University is located in Bangalore, Karnataka.";
  }

  chatbox.innerHTML += "<div class='bot'>" + response + "</div>";
  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
