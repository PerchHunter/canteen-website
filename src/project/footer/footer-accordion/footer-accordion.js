// нашёл все пункты аккордиона
const accItems = document.querySelectorAll(".accordion__item");

accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // удаляю активный класс у всех кроме this
  accItems.forEach((item) =>
    item != this ? item.classList.remove("accordion__item--active") : null
  );

  // переключить активный класс на текущий элемент
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}
