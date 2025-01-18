function toggleFilter() {
  const filter = document.querySelector(".filter-content");
  filter.className = "";
  filter.classList.add("mobile-filter");
}

function closeFilter() {
  const filter = document.querySelector(".mobile-filter");
  filter.className = "";
  filter.classList.add("filter-content", "filter-container");
}
