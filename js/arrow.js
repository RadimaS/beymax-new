const directionFunc = () => {
  const directionArrow = document.querySelector(".direction__arrow");
  const directionArrowDown = document.querySelector(".direction__arrow--down");
  const directionArrowUp = document.querySelector(".direction__arrow--up");
  const subjectList = document.querySelector(".subjects");

  directionArrow.addEventListener("click", () => {
    subjectList.style.display = "block";
    directionArrowDown.style.display = "none";
    directionArrowUp.style.display = "block";
  });
  directionArrowUp.addEventListener("click", () => {
    subjectList.style.display = "none";
    directionArrowDown.style.display = "block";
    directionArrowUp.style.display = "none";
  });
};
directionFunc();
