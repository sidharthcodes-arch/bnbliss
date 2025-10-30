let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxShow = document.getElementsByClassName("tax-show");
  for (show of taxShow) {
    if (show.style.display !== "inline") {
      show.style.display = "inline";
    } else {
      show.style.display = "none";
    }
  }
});
let filters = document.querySelectorAll(".filter");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((filter) => (filter.style.opacity = "0.7"));
    filter.style.opacity = "1";
    const category = filter.dataset.category;
    const cards = document.querySelectorAll(".listing-card");
    cards.forEach((card) => {
      if (card.dataset.category !== category) {
        card.style.display = "none";
      } else {
        card.style.display = "";
      }
    });
  });
});
