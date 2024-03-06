
function addToDB(play) {
console.log(play);
const playStringified = JSON.stringify(play);
localStorage.setItem("Team",playStringified);
}

function savedToDB() {
    let Team ={};
    const savedTeam = localStorage.getItem("Team");
    if(savedTeam){
        Team = JSON.parse(savedTeam);
    }
    return Team;
    
}
export {addToDB,savedToDB};