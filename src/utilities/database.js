function addToDB(id) {
  let newTeam;
  const existTeam = savedToDB();
  console.log(existTeam);
  if (existTeam.length == 0) {
    newTeam = [id];
  } else {
    for (let n of existTeam) {
      if (n == id) {
        alert("Player is already in the Dream 11 Fantasy Team");
        return;
      } else {
        newTeam = [...existTeam, id];
      }
    }
  }

  console.log(newTeam);
  const newTeamStringified = JSON.stringify(newTeam);
  localStorage.setItem("Team", newTeamStringified);
}
function removeFromDB(id) {
  let remainingPlayers;
  console.log("player removed ", id);
  const existTeam = savedToDB();
  remainingPlayers = [...existTeam];
  if (existTeam.length == 0) {
    alert("No player is Added to Dream 11 Fantasy Team");
  } else if (!existTeam.includes(id)) {
    alert("Players is not in the Fantasy Team");
  } else {
    remainingPlayers = existTeam.filter((p) => p !== id);
  }
  console.log(remainingPlayers);
  const remainingPlayerStringifed = JSON.stringify(remainingPlayers);
  localStorage.setItem("Team", remainingPlayerStringifed);
}
function savedToDB() {
  let Team = [];
  const savedTeam = localStorage.getItem("Team");
  console.log(savedTeam);
  if (savedTeam) {
    Team = JSON.parse(savedTeam);
  }
  console.log(Team);
  return Team;
}

function displayTeam() {
  const savedTeam = savedToDB();
  console.log(savedTeam);
//   console.log(typeof(savedTeam));
  return savedTeam;
}
savedToDB();

export { addToDB, savedToDB, displayTeam, removeFromDB };
