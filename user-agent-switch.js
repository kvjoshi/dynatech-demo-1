function loadBrowserSpecificCSS() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  let cssFile = "";
  const desktopNav = document.querySelector(".desktop-nav");
  const mobileTopNaV = document.querySelector(".mobile-nav-top");
  const mobileBottomNav = document.querySelector(".mobile-nav-bottom");

  // Detect mobile devices first
  if (isMobile) {
    cssFile = "mobile.css";
    if (desktopNav) {
      desktopNav.classList.add("d-none");
    }
    if (mobileTopNaV) {
      mobileTopNaV.classList.remove("d-none");
    }
    if (mobileBottomNav) {
      mobileBottomNav.classList.remove("d-none");
    }
  } else {
    cssFile = "main.css";
    if (mobileTopNaV) {
      mobileTopNaV.classList.add("d-none");
    }
    if (mobileBottomNav) {
      mobileBottomNav.classList.add("d-none");
    }
    if (desktopNav) {
      desktopNav.classList.remove("d-none");
    }
  }

  // Only load additional CSS if we have a specific one
  if (cssFile) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssFile;
    // This ensures the browser-specific CSS overrides the default
    document.head.appendChild(link);
  }
}

document.addEventListener("DOMContentLoaded", loadBrowserSpecificCSS);
