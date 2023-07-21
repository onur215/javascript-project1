// const categoryElement = document.querySelector(".dropdown");
// categoryElement.addEventListener("click", () => {
//   const dropDown = document.querySelector(".dropdown-menu");
//   dropDown.classList.toggle("open");
// });

const dropDownMenus = document.querySelectorAll(".dropdown");

dropDownMenus.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const dropDown = menuItem.querySelector("ul.dropdown-menu");
    dropDown.classList.toggle("open");
  });
});

document.body.addEventListener("click", (event) => {
  dropDownMenus.forEach((menuItem) => {
    const dropDown = menuItem.querySelector(".dropdown-menu");
    if (event.target != menuItem && event.target != dropDown) {
      dropDown.classList.remove("open");
    }
  });
});
