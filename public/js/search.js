let availableSuggestions = window.searchTitles;
let resultBox = document.querySelector(".suggestions-dropdown");
let inputBox = document.querySelector(".search-inp");

//onclick and onpressing input box
inputBox.onkeyup = inputBox.onclick = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length === 0) {
    result = [];
  } else {
    result = availableSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
  }
  display(result);
};

//display suggestions
function display(result) {
  if (result.length > 0) {
    resultBox.classList.add("show");
    let content = result
      .map((list) => {
        return `<li class="suggestion" >${list}</li> `;
      })
      .join("");

    resultBox.innerHTML = "<ul>" + content + "</ul>";
  } else {
    hideDropdown();
  }
}
//hide suggestions
function hideDropdown() {
  resultBox.classList.remove("show");
  resultBox.innerHTML = "";
}
//hide suggestion except when clicked inside inputbox
document.addEventListener("click", (e) => {
  if (!inputBox.contains(e.target)) {
    hideDropdown();
  }
});
//   Click a suggestion → fill input + hide
resultBox.addEventListener("click", (e) => {
  let item = e.target.closest(".suggestion");
  inputBox.value = item.textContent;
});
