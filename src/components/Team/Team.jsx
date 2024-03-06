const Team = (props) => {
  const { image, player_name, role } = props.player;
  return (
    <div className="max-w-full bg-slate-600 border border-gray-200 rounded-lg shadow hover:bg-slate-500 ">
      <a href="#">
        <img
          className="rounded-lg h-32 w-32 lg:w-64 lg:h-64 mx-auto p-1 lg:p-3"
          src={image}
          alt="player Image"
        />
      </a>
      <div className="p-2 lg:p-5 text-center">
        <h5 className="mb-2 lg:mb-2  text-lg lg:text-2xl font-bold tracking-tight text-slate-900">
          {player_name}
        </h5>
        <p className=" mb-1 lg:mb-3 font-semibold text-white text-sm lg:text-lg">
          Role: {role}
        </p>
      </div>
    </div>
  );
};

export default Team;
