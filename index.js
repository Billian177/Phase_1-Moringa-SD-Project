let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function getTeamsData(){
    fetch("https://www.balldontlie.io/api/v1/teams")
        .then(response=>response.json())
        .then(dataT =>{
            console.log(dataT)
        })
}
getTeamsData()