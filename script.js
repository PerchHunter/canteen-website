function getCopyEmailButton(e) {
  const button = document.querySelector(".copyEmailButton");

  if (button == null) {
    return e.target.insertAdjacentHTML(
      "beforeend",
      '<button type="button" class="copyEmailButton" onClick="copyEmail(event)">Скопировать</button>'
    );
  } else {
    return;
  }
}

function copyEmail() {
  const blockContent = document.querySelector(".chapter_copyEmail").textContent;
  const regexp = /info\@stolovay\.ru/;
  const email = blockContent.match(regexp)[0];

  navigator.clipboard
    .writeText(email)
    .then(() => {
      // Получилось!
    })
    .catch((err) => {
      console.log("Что-то пошло не так", err);
    });

  document.getElementsByClassName("copyEmailButton")[0].remove();
}

function replaceSupplierPortalImage(e) {
  const src = e.target.firstChild.getAttribute("src");
  if (src === "images/section-with-search-string/supplier-portal.svg") {
    e.target.firstChild.setAttribute(
      "src",
      "images/section-with-search-string/supplier-portal-hover.svg"
    );
  } else {
    e.target.firstChild.setAttribute(
      "src",
      "images/section-with-search-string/supplier-portal.svg"
    );
  }
}

const supplierPortalImage =
  document.getElementsByClassName("supplierPortal")[0];
supplierPortalImage.addEventListener("mouseenter", replaceSupplierPortalImage);
supplierPortalImage.addEventListener("mouseleave", replaceSupplierPortalImage);

// Инициализирую свайпер
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpointsBase: "container",
});
