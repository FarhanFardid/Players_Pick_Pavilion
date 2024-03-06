import { useEffect, useState } from "react";
import { savedToDB } from "../../utilities/database";
import Team from "../Team/Team";

const DisplayTeam = (props) => {
  const modTeam = props.team;
  const [team, setTeam] = useState(modTeam);
  const[data,setData] = useState([]);
//   console.log(modTeam);
//   console.log(team);
  useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data =>setData(data.players))

  },[])
  useEffect(() => {
    setTeam(savedToDB());
  }, [modTeam]);

  console.log(team);

  const detailsData = team.map (id => {
    return data.find(p=> p.id === id)});
console.log(detailsData)


  return (
    <div className="bg-purple-400">
      <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">
        Players Added To the Dream 11 Fantasy Team
      </h3>
      <p className="text-red-600 text-2xl text-center p-4 font-bold">
      {team.length}  Players Already Picked Up for the Team
      </p>
      {/* <p className="text-red-600 text-2xl text-center p-4">
        Players in the Data: {data.length}
      </p> */}
      {
      detailsData.map(player => <Team key={player.id} player={player}> </Team>)
    
      }
    </div>
  );
};

export default DisplayTeam;
