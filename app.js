let threePoint = 3
let onePoint = 1
let awayScore = 0
let homeScore = 0
let addTeamScore = 0
let score = ''
let team = {}
let teams = []

loadTeam()




function homeTeamScore3(){
  if(threePoint + homeScore){
    homeScore += 3
  } 
  draw()
}

function homeTeamScore(){
  if(onePoint + homeScore){
    homeScore += 1
  } 
  draw()
}

function awayTeamScore3(){
  if(threePoint + awayScore){
    awayScore += 3
  }
  draw()
}

function awayTeamScore(){
  if(onePoint + awayScore){
    awayScore += 1
  } 
  draw()
}

function addedTeamScore3(){
  if(threePoint + addTeamScore){
    awayScore += 3
  }
  draw()
}

function addedTeamScore(){
  if(onePoint + addTeamScore)
    awayScore += 1
  draw()
}



function draw(){
  let homeScoreElem = document.getElementById("home-score")
  homeScoreElem.innerText = homeScore
  let awayScoreElem = document.getElementById("away-score")
  awayScoreElem.innerText = awayScore 
  let addTeamScoreElem = document.getElementById("teams")
  addTeamScoreElem.innerText = addTeamScore
}





function reset(){
  debugger

  homeScore = 0
  awayScore = 0

draw()

}

function addTeam(event) {
  event.preventDefault()
  
  let form = event.target

  let name = form.name.value

  team = teams.find(team => team.name == name)

  if(team){
    alert("This team name is already being used!")
  }
  else {
    team = {
      name: name
    }

  }

  form.reset()
  drawTeam()
  console.log(team);
}

function saveTeam(){
  window.localStorage.setItem("teams", JSON.stringify(teams))
}

function loadTeam(){
  let teamsData = JSON.parse(window.localStorage.getItem("teams"))
    if(teamsData){
      teams = teamsData
    }
  }


function drawTeam(){
loadTeam()
let teamsElement = document.getElementById("teams")
let teamTemplate = ""

teams.forEach(team => {
teamTemplate += `
  <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
    <div id="added-team-score" class="col-12 col-md-6 d-flex align-items-center justify-content-center rounded m-3">
      <div class="d-flex justify-content-center m-1">Name: ${team.name}</div>
      <div class="d-flex justify-content-center m-1">Added Team +1: ${addedTeamScore()}</div>
      <div class="d-flex justify-content-center m-1">Added Team +3: ${addedTeamScore3()}</div>
      <div class="d-flex justify-content-center">
        <button class="button m-1" onclick="${addedTeamScore()}')">Added Team +1</button>
        <button class="btn-cancel m-1" onclick="${addedTeamScore3()}">Added Team +3</button>
      </div> 
    </div> 
  </div>
  `
})
teamsElement.innerHTML = teamTemplate

draw()
}




