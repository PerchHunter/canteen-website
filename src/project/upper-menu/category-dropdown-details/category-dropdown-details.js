const $details = document.getElementsByClassName("form__category")[0];
const $div = document.getElementsByClassName("category__dropdown")[0];
const $summary = document.getElementsByClassName("category__checked")[0];
const $search = document.getElementById("searchLine");

const highlightGreen = (li) => {
  let $selectedLi = document.querySelector(".highlightGreen");

  if ($selectedLi) {
    // убрать существующую подсветку, если она есть у какого-то li
    $selectedLi.classList.remove("highlightGreen");
  }

  li.classList.add("highlightGreen"); // подсветить новый li
  $summary.innerText = `${li.textContent}`;

  // подогнал размер details под размер контента. Иначе он становился по ширине как выпад. список
  const widthContent = `${$details.firstElementChild.clientWidth + 20}px`;
  $details.style.width = widthContent;
};

$div.onclick = (e) => {
  let $li = e.target.closest("li"); // проверяю, явл-ся ли эл-т на кот кликнули потомком $div

  if (!$li) return;

  highlightGreen($li);
};

window.onunload = () => ($search.value = "");
