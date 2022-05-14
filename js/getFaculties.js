const getFaculties = () => {
  const links = document.querySelectorAll(".university__name");
  const renderCards = (cards) => {
    const cardsContainer = document.querySelector(".faculty");

    cardsContainer.innerHTML = "";

    cards.forEach((card) => {
      const cardBlock = document.createElement("div");
      // cardBlock.classList.add("faculty__link");

      cardBlock.innerHTML = `
      <a href="philological.html" class="faculty__link">

      <div class="faculty__card ${card.class}">
        <div class="faculty__icon ${card.class}__icon"></div>
        <div class="faculty__name">
          <p class="faculty__title" data-field="facultyName">${card.title}</p>
        </div>
      </div>
      </a>
      `;
      cardsContainer.append(cardBlock);
    });

    console.log(cardsContainer);
  };

  const getData = (value, category) => {
    fetch(API + "/faculties")
      .then((res) => res.json())
      .then((data) => {
        const array = category
          ? data.filter((item) => item[category] === value)
          : data;

        localStorage.setItem("cards", JSON.stringify(array));

        if (window.location.pathname !== "/chgu") {
          window.location.href = "/chgu";
        } else {
          renderCards(array);
        }
      });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const linkValue = link.textContent;
      const category = link.dataset.field;
      //console.log(category);
      getData(linkValue, category);
    });
  });
  if (localStorage.getItem("cards") && window.location.pathname === "/chgu") {
    renderCards(JSON.parse(localStorage.getItem("cards")));
  }
};

getFaculties();
