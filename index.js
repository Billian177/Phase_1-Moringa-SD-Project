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
  setTimeout(showSlides, 3000);
}

function getTeamsData(){
    fetch("https://www.balldontlie.io/api/v1/teams")
        .then(response=>response.json())
        .then(dataT =>{
            console.log(dataT)
            displayTeamNames(dataT)
        })
}
getTeamsData()

let teamList= document.getElementById("NbaTeams")

function displayTeamNames(dataT){

    dataT["data"].forEach(team => {
        let teamName= document.createElement("li")
        teamName.className= "Team Items"
        teamName.innerHTML= `${team.name.toUpperCase()} <hr>`
        teamList.append(teamName)
        teamName.addEventListener('click', () => {
            displayPlayerNames(team)
        })
    });

}

function acquirePlayerNames(){
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(resp=>resp.json())
    .then(dataP=>{
        console.log(dataP);
        displayPlayerNames(dataP)

    })
}
acquirePlayerNames()

let playerList= document.getElementById("list2")

function displayPlayerNames(dataP){

    dataP["data"].forEach(player => {
        let playerName= document.createElement("li")
        playerName.className= "player Items"
        playerName.innerHTML= `<span style="color:#FF7F50">${player.first_name} ${player.last_name} </span><br> Team Name:${player.team.full_name} <br> Division: ${player.team.division} `
        playerList.append(playerName)
        
    });

}

document.addEventListener("DOMContentLoaded", () => {
  
    let newCommentForm = document.getElementById("commentSection");
    let likeButton= document.getElementById("like");
    
    newCommentForm.addEventListener("submit", createNewComment);
    likeButton.addEventListener("click", addLikeNum);
    
  });
  
  let addNewComment = (comment) => {
    document.getElementById("listOfComments").appendChild(comment);
  };
  
  let createNewComment = (event) => {
    event.preventDefault();

    let newCommentDescription = document.getElementById("commentsAdd");
    let newComment = document.createElement("li");
    newComment.innerText = newCommentDescription.value;

    addNewComment(newComment);

    event.target.reset();
  
  };

  function addLikeNum(array){
    let likeTotal=[0]
    

  }
  