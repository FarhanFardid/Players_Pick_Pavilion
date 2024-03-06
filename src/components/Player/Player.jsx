

const Player = ({player,playerClicked}) => {
   
    const {id,player_name,image,role,price,country} = player;
    // const playerClick = playerClicked;

    return (
       
<div  className="flex flex-col items-center  bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-400 ">
    <div className="w-32 h-32 lg:w-52 lg:h-52">    <img className="object-cover w-full h-full bg-slate-100 rounded-lg p-1 lg:p-2" src={image} alt="player image"/></div>

    <div className="flex flex-col justify-center items-center p-1 lg:p-2 text-center mx-auto">
        <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-green-800 ">{player_name}</h5>
        <p className="mb-3 font-semibold text-sm lg:text-lg text-red-700 ">Role: {role}</p>
        <p className="mb-3 font-semibold text-sm lg:text-lg  text-blue-600 ">Price: {price}</p>
        <p className="mb-3 font-semibold text-sm lg:text-lg text-green-950 ">Country: {country}</p>
        <button onClick={()=>{playerClicked(player)} } className="border-2 border-black rounded-lg py-1 px-2 font-bold text-sm bg-slate-800 text-white hover:bg-slate-950 ">Pick for Dream11</button>
    </div>
</div>
        
    );
};

export default Player;