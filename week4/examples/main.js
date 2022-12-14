const form = document.forms["search"];
const input = form.elements.searchInput;

input.addEventListener(
  "focus",
  function () {
    if (input.value === "Search Here") {
      input.value = "";
    }
  },
  false
);

input.addEventListener(
  "blur",
  function () {
    if (input.value === "") {
      input.value = "Search Here";
    }
  },
  false
);
input.addEventListener("change", () => alert("changed"), false);

form.addEventListener("submit", search, false);

function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}
input.value = "Search Here";
