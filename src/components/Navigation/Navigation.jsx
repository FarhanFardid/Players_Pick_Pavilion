
import logo from '../../assets/images/logo/logo.png';

const Navigation = () => {
    
    return (
  
<nav className="bg-gray-400 w-full z-20 top-0 start-0  ">
  
  <div  className="flex items-center justify-around lg:p-4 p-1">
      <img src={logo} className="h-10 w-10 lg:h-24 lg:w-24 rounded-full m-1 lg:m-3" alt="Player Pick Logo"/>
      <div className='flex flex-col items-center justify-center' >
        <h3 className="self-center text-xl lg:text-5xl font-bold whitespace-nowrap text-sky-900 py-1 lg:py-2">Players Pick Pavilion</h3> 
        <p className=' text-sm lg:text-lg text-amber-800 font-semibold py-1 lg:py-2' >Pick you favorite players and make a team</p></div>
      <img src={logo} className="h-10 w-10 lg:h-24 lg:w-24 rounded-full m-1 lg:m-3" alt="Player Pick Logo"/>
  </div>
  
</nav>

    );
};

export default Navigation;