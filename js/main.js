const instructionFunc = () => {
  const instructionBtn = document.querySelector(".instruction__button");
  const aboutBtn = document.querySelector(".aboutlink__button");
  const instructionBlock = document.querySelector(".modal");

  instructionBtn.addEventListener("click", () => {
    instructionBlock.classList.add("modal--active");
  });
  aboutBtn.addEventListener("click", () => {
    instructionBlock.classList.add("modal--active");
  });
};
instructionFunc();
