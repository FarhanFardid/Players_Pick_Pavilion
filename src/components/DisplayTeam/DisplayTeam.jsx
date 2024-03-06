import { useEffect, useState } from "react";
import { savedToDB } from "../../utilities/database";

const DisplayTeam = (props) => {
  const modTeam = props.team;
  const [team, setTeam] = useState(modTeam);
  console.log(modTeam);
  console.log(team);
  useEffect(() => {
    setTeam(savedToDB());
  }, [modTeam]);

  console.log(team);

  return (
    <div>
      <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">
        Players Added To the Dream 11 Fantasy Team
      </h3>
      <p className="text-red-600 text-2xl text-center p-4">
        Players in the Team: {team.length}
      </p>
    </div>
  );
};

export default DisplayTeam;
