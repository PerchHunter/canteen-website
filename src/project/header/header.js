function getCopyEmailButton(e) {
  let button = document.getElementById("copyEmailButton");
  //если кнопки пока нет
  if (!button) {
    //e.currentTarget  то же что и this
    e.currentTarget.insertAdjacentHTML(
      "beforeend",
      '<button type="button" id="copyEmailButton">Скопировать</button>'
    );
  } else {
    return;
  }

  button = document.getElementById("copyEmailButton");
  button.addEventListener("click", copyEmail);
}

function copyEmail(e) {
  e.stopPropagation();

  const email = e.target.previousElementSibling.innerText;

  navigator.clipboard.writeText(email);
  e.target.remove();
}

const headerChapterEmail = document.querySelector(".chapter_copyEmail");
headerChapterEmail.addEventListener("click", getCopyEmailButton);
