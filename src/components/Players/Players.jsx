import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = () => {

    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then (data => setPlayers(data.players))
    },[])

    return (
        <div className="bg-slate-500">
            <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">Players Profile</h3>
            <p className="text-center text-sm lg:text-2xl font-semibold my-1 lg:my-5 text-white">Total Number of Available Players: {players.length}</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    players.map(player => <Player key={player.id} player={player}> </Player>)
                }
            </div>
        </div>
    );
};

export default Players;