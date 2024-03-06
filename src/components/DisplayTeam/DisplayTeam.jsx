import { savedToDB } from "../../utilities/database";


const DisplayTeam = () => {
    const savedTeam = savedToDB();
    return (
        <div>
            <h3 className="text-xl lg:text-4xl font-bold text-blue-800 p-2 lg:p-4  text-center">Players Added To the Dream 11 Fantasy Team</h3>
        </div>
    );
};

export default DisplayTeam;