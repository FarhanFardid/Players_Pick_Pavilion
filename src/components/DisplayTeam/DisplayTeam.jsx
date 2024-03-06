import { useEffect, useState } from "react";
import { savedToDB } from "../../utilities/database";
import Team from "../Team/Team";

const DisplayTeam = (props) => {
  const modTeam = props.team;
  const deleteTeam = props.deleteTeam;

  const [team, setTeam] = useState(modTeam);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(modTeam);
  //   console.log(team);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        setData(jsonData.players);
        setLoading(false);
        // Update team state after data is loaded
        setTeam(savedToDB());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [modTeam]);

  //   console.log(team);
  //   console.log(data);

  const detailsData = team.map((id) => {
    return data.find((p) => p.id === id);
  });
  // console.log(detailsData)

  return (
    <div className="bg-purple-400 p-4">
      <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">
        Players Added To the Squad for Dream 11 Fantasy Team
      </h3>
      <p className="text-red-600 text-sm lg:text-2xl text-center p-4 font-bold">
        {team.length} Players Already Picked Up for the Team
      </p>
      {/* <p className="text-red-600 text-sm lg:text-2xl text-center p-4 font-bold">
        Players in the Data: {data.length}
      </p> */}
      <div className="grid   grid-cols-3 lg:grid-cols-4 gap-2 p-1 lg:p-3">
        {!loading &&
          detailsData.map((player) => (
            <Team key={player.id} player={player}>
              {" "}
            </Team>
          ))}
      </div>
      <div className="mx-auto text-center m-1 lg:m-3">
        <button
          onClick={deleteTeam}
          className="text-sm lg:text-lg font-bold text-white bg-red-800 border-2 border-black p-1 lg:p-3 rounded-lg mx-auto hover:bg-red-600"
        >
          Drop Full Team
        </button>
      </div>
    </div>
  );
};

export default DisplayTeam;
