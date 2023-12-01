const iconsBookmark = document.querySelectorAll(".bi-bookmark");

for (let i = 0; i < iconsBookmark.length; i++) {
  iconsBookmark[i].addEventListener("mouseover", function () {
    iconsBookmark[i].classList.replace("bi-bookmark", "bi-bookmark-fill");
    iconsBookmark[i].classList.add("text-danger");
  });
}

for (let i = 0; i < iconsBookmark.length; i++) {
  iconsBookmark[i].addEventListener("mouseout", function () {
    iconsBookmark[i].classList.replace("bi-bookmark-fill", "bi-bookmark");
    iconsBookmark[i].classList.remove("text-danger");
  });
}
