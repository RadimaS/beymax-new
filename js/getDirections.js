const getDirection = () => {
  const links = document.querySelectorAll(".faculty__titleNew");
  const renderDirections = (directions) => {
    const directionsContainer = document.querySelector(".direction");

    directionsContainer.innerHTML = "";

    directions.forEach((direction) => {
      const directionBlock = document.createElement("div");
      directionBlock.classList.add("direction__card");

      directionBlock.innerHTML = `
        
      
        <div class="direction__block">
          <div class="direction__name">
            <p class="direction__title">${direction.title}</p>
          </div>

          <div class="subjects">
            <div class="subjects__block">
              <div class="subjects__item">
                <a class="subjects__name" href="#">${direction.item1}
                </a>
              </div>
              <div class="subjects__item">
                <a class="subjects__name" href="#">${direction.item2}
                </a>
              </div>
              <div class="subjects__item">
                <a class="subjects__name" href="#">${direction.item3}
                </a>
              </div>
              <div class="subjects__item">
                <a class="subjects__name" href="#">${direction.item4}
                </a>
              </div>
            </div>
          </div>

          <img src="${direction.img}" alt="" class="directionarrow" />
        </div>
        
      `;
      directionsContainer.append(directionBlock);
    });

    console.log(directionsContainer);
  };

  const getData = (value, facultyName) => {
    fetch("/db/db2.json")
      .then((res) => res.json())
      .then((data) => {
        const array = facultyName
          ? data.filter((item) => item[facultyName] === value)
          : data;

        localStorage.setItem("directions", JSON.stringify(array));

        if (window.location.pathname !== "/philological.html") {
          window.location.href = "/philological.html";
        } else {
          renderDirections(array);
        }
      });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      // const jsdb = require("../db/db.json")
      // const linkTitle = card[1];
      const linkValue = jsdb[title];
      const facultyName = link.dataset.field;
      getData(linkValue, facultyName);
    });
  });
  if (
    localStorage.getItem("directions") &&
    window.location.pathname === "/philological.html"
  ) {
    renderDirections(JSON.parse(localStorage.getItem("directions")));
  }
};

getDirection();
