const $details = document.getElementsByClassName("form__category")[0];
const $div = document.getElementsByClassName("category__dropdown")[0];
const $summary = document.getElementsByClassName("category__checked")[0];

// подогнал размер details под размер контента. Иначе он становился по ширине как выпад. список
const summaryWidth = () => {
  const widthContent = `${$details.firstElementChild.clientWidth + 20}px`;
  $details.style.width = widthContent;
};

//вешаю обработчик onclick на category__dropdown
const highlightGreen = (li) => {
  let $selectedLi = document.querySelector(
    ".category__dropdown li.highlightGreen"
  );

  if ($selectedLi) {
    // убрать существующую подсветку, если она есть у какого-то li
    $selectedLi.classList.remove("highlightGreen");
  }

  $selectedLi = li;
  $selectedLi.classList.add("highlightGreen"); // подсветить новый li
  $summary.innerText = `${$selectedLi.textContent}`;
  summaryWidth();
};

$div.onclick = (event) => {
  let $li = event.target.closest("li"); // проверяю, явл-ся ли эл-т на кот кликнули потомком  category__dropdown
  if (!$li) return;

  highlightGreen($li);
};

summaryWidth();
