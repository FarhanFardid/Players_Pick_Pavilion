
function addToDB(id) {
    let newTeam;
    const existTeam = savedToDB();
    console.log(existTeam);
    if(existTeam.length == 0){
    newTeam = [id];
    }
    else{ 
        for(let n of existTeam ){
        if(n == id){
            alert("Player is already in the Team");
            return;
        }
        else{
            newTeam =[...existTeam, id];
        }
    }
}
   
console.log(newTeam);
const newTeamStringified = JSON.stringify(newTeam);
localStorage.setItem("Team",newTeamStringified);
}

function savedToDB() {
    let Team=[];
    const savedTeam = localStorage.getItem("Team");
    if(savedTeam){
        Team = JSON.parse(savedTeam);
    }
    return Team;
    
}

function displayTeam (){
    const savedTeam = savedToDB();
    console.log(savedTeam);
}
export {addToDB,savedToDB,displayTeam};