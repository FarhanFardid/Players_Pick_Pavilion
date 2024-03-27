import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import {
  addToDB,
  deleteDB,
  removeFromDB,
  savedToDB,
} from "../../utilities/database";
import DisplayTeam from "../DisplayTeam/DisplayTeam";

const Players = () => {
  const savedTeam = savedToDB();
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState(savedTeam);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  const addPlayer = (id) => {
    // console.log(id);
    if (!team.includes(id)) {
      let newTeam = [...team, id];
      setTeam(newTeam);
    }
    addToDB(id);
  };
  const removePlayer = (id) => {
    // console.log(id);
    if (team.includes(id)) {
      let modifiedTeam = team.filter((p) => p !== id);
      setTeam(modifiedTeam);
    }
    removeFromDB(id);
  };
  const deleteTeam = () => {
    deleteDB();
    setTeam([]);
  };
  return (
    <div className="bg-slate-500 grid grid-cols-8">
      <div className="col-span-5">  <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">
        Players Profile
      </h3>
      <p className="text-center text-sm lg:text-2xl font-semibold my-1 lg:my-5 text-white">
        Total Number of Available Players: {players.length}
      </p>
      <div className="grid grid-cols-2  gap-2">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            addPlayer={addPlayer}
            removePlayer={removePlayer}
          >
            {" "}
          </Player>
        ))}
      </div></div>
    
    <div className="col-span-3">  <DisplayTeam team={team} deleteTeam={deleteTeam}></DisplayTeam></div>
    
    </div>
  );
};

export default Players;
