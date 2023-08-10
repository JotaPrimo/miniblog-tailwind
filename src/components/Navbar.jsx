import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="container sm:mx-auto md:mx-auto">
        <nav className="py-5 font-semibold">
          <div className="flex justify-between align-middle">
            <NavLink>
              Min <span className="text-black font-extrabold">BLOG</span>
            </NavLink>
            <div className="flex gap-5">
              <NavLink to="/" className={({isActive}) => (isActive ? 'link-active' : '')}>
                <button className="bg-transparent cursor-pointer border-none hover:text-white">
                  Home
                </button>
              </NavLink>

              <NavLink to="/about" className={({isActive}) => (isActive ? 'link-active' : '')}>
                <button className="bg-transparent cursor-pointer border-none hover:text-white">
                    About
                    </button>
              </NavLink>

              <NavLink to="/login" className={({isActive}) => (isActive ? 'link-active' : '')}>
                <button className="bg-transparent cursor-pointer border-none hover:text-white">
                    Entrar
                    </button>
              </NavLink>

              <NavLink to="/register" className={({isActive}) => (isActive ? 'link-active' : '')}>
                <button className="bg-transparent cursor-pointer border-none hover:text-white">
                    Registrar
                    </button>
              </NavLink>
            </div>
          </div>
        </nav>        
      </div>
    </div>
  );
};

export default Navbar;
