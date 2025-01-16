// Select all nav items
const navItems = document.querySelectorAll("footer ul li a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class and reset images for all items
    navItems.forEach((nav) => {
      nav.classList.remove("active-mobile-nav");
      // Hide all spans by adding d-none class
      const span = nav.querySelector("span");
      if (span) {
        span.classList.add("d-none");
      }
      // Reset to inactive SVG for unselected nav
      const img = nav.querySelector("img");
      if (img) {
        img.src = img.src.replace("-active", "-inactive");
      }
    });

    // Add active class to the clicked item
    item.classList.add("active-mobile-nav");
    // Show span for the selected item by removing d-none class
    const selectedSpan = item.querySelector("span");
    if (selectedSpan) {
      selectedSpan.classList.remove("d-none");
    }
    // Update the image for the selected nav
    const selectedImg = item.querySelector("img");
    if (selectedImg) {
      selectedImg.src = selectedImg.src.replace("-inactive", "-active");
    }
  });
});
