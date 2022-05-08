// const directionFunc = () => {
//   const directionArrow = document.querySelector(".direction__arrow");
//   const directionArrowDown = document.querySelector(".direction__arrow--down");
//   const directionArrowUp = document.querySelector(".direction__arrow--up");
//   const subjectList = document.querySelector(".subjects");

//   directionArrow.addEventListener("click", () => {
//     subjectList.style.display = "block";
//     directionArrowDown.style.display = "none";
//     directionArrowUp.style.display = "block";
//   });
//   directionArrowUp.addEventListener("click", () => {
//     subjectList.style.display = "none";
//     directionArrowDown.style.display = "block";
//     directionArrowUp.style.display = "none";
//   });
// };
// directionFunc();

// your code
// const arr = document.querySelectorAll(".directionarrow");
// const subj = document.getElementsByClassName("subjects");
// let i;
// let j;

// for (let i = 0; i < arr.length; i++) {
//   arr[i].addEventListener("click", function () {
//     //this.classList.toggle("up");
//     this.classList.toggle("up");
//   });
// }

// arr.addEventListener("click", () => {
//   subj.style.display = "block";
// });

// document.getElementsByClassName("directinarrow").onclick = function() {
//   for (let i = 0; i < subj.length; i++) {
//     subj.classList.toggle("show");
//   }
// };
// for (i in subj){
//   let arra
//   i.classList.add(arra)
// }
// for (let j = 0; j > subj.length; j++) {
//   subj[j].addEventListener("click", function () {
//     this.classList.toggle("show");
//   });
// }

const cards = document.querySelectorAll(".direction__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("show");
  });
});
