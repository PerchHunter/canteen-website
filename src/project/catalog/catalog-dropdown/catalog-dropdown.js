const $catalog = document.querySelector(".catalog");
const $main = document.querySelector(".page_blackoutAfterCatalog");
const categories = document.querySelectorAll(`.catalog div`);

let isVisible = false;

const loadDropdown = (event, $dropdown) => {
  if (!isVisible) {
    $main.style.filter = "brightness(0.5)";
    $dropdown.style.visibility = "visible";

    isVisible = true;
  }

  document.body.onclick = (e) => {
    if (e.target.closest(".dropdowns_wrapper")) {
      return;
    } else {
      $main.style.filter = "none";
      $dropdown.style.visibility = "hidden";
      isVisible = false;
    }
  };
};

$catalog.onclick = (event) => {
  if (isVisible) return;
  let elem = event.target.closest(".catalog");
  if (!elem) return;

  for ($category of categories) {
    const id = $category.getAttribute("id");
    if (!id) {
      continue;
    } else {
      const string = id.slice(9);
      const $dropdown = document.querySelector(`.${string}__dropdown_wrapper`);

      event.stopPropagation();
      loadDropdown(event, $dropdown);
      return;
    }
  }
};
