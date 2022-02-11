function getCopyEmailButton(e) {
  const $button = document.querySelector(".copyEmailButton");

  if ($button == null) {
    return e.target.insertAdjacentHTML(
      "beforeend",
      '<button type="button" class="copyEmailButton" onClick="copyEmail(event)">Скопировать</button>'
    );
  } else {
    return;
  }
}

function copyEmail() {
  const $blockContent =
    document.querySelector(".chapter_copyEmail").textContent;
  const regexp = /info\@stolovay\.ru/;
  const email = $blockContent.match(regexp)[0];

  navigator.clipboard
    .writeText(email)
    .then(() => {})
    .catch((err) => {
      console.log("Что-то пошло не так", err);
    });

  document.getElementsByClassName("copyEmailButton")[0].remove();
}
