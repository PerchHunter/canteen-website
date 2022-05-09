const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuList = document.querySelector(".burger-menu__list");
const burgerItem = document.querySelectorAll(".burger-menu__list a");
let visible = false;

burgerMenu.onclick = (event) => {
  if (visible) {
    for (item of burgerItem) {
      item.style.cssText = `height: 0;
      opacity: 0;
      padding: 0;
      border-top: none;`;
    }

    visible = false;
    return;
  }
  console.log(burgerItem);
  for (item of burgerItem) {
    item.style.cssText = `height: initial;
    opacity: 1;
    padding: 12px 30px;
    border-top: 1px solid #D7D7D7;`;
  }

  visible = true;
};

burgerMenuList.onclick = (event) => {
  //   const elem = event.target.closest(".menu-burger__list");
  //   console.log(elem);

  for (item of burgerItem) {
    item.style.cssText = `height: 0;
      opacity: 0;
      padding: 0;
      border-top: none;`;
  }

  event.stopPropagation();
  visible = false;
};
