import logo from "../../assets/images/logo/logo.png";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-4">
        <div className="container mx-auto flex flex-col  items-center">
          {/* Logo and Name */}
          <div className="flex items-center mb-2">
            <img
              src={logo} 
              alt="Players Pick Pavilion Logo"
              className="w-8 h-8 mr-2 rounded-3xl"
            />
            <span className="text-lg font-bold">Players Pick Pavilion</span>
          </div>
  
          {/* Copyright Text */}
          <div className="text-center">
            <p>&copy;  Farhan Fardid {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;