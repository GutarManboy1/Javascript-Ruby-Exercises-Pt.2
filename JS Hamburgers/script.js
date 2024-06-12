let icons = document.querySelectorAll(".icon");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", (e) => {
    let target = e.target;
    target.classList.toggle("active");
    // console.log(target)
  })

}
