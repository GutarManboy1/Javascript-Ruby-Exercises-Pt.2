const image = document.querySelector(".container");
const heartIcons = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {
  heartIcons.classList.add("active");
  // calcute the values of x and y position of double click event
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;
  console.log(xValue, yValue)

  //setting the position of the heart using the x and y values
  heartIcons.style.left = `${xValue}px`
  heartIcons.style.top = `${yValue}px`


  //remove timeout
  setTimeout(() => {
    heartIcons.classList.remove("active");
  }, 1000);
})
