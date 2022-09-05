const hireBtn = document.querySelectorAll(".hire");
const modalBg = document.querySelector(".modal-bg");

hireBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBg.classList.add("active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modalBg) modalBg.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalBg.classList.remove("active");
});
