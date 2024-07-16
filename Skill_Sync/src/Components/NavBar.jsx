import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Utills/authContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogoutClick = () => {
    logout(); // Clear token from localStorage and set isLoggedIn to false
    navigate("/"); // Redirect to home page after logout
  };
  return (
    <>
      <nav className="border-gray-200 py-0 bg-slate-50 sticky top-0 z-50 bg-opacity-70 backdrop-blur-lg">
        <div className="w-full mx-auto ">
          <div className="mx-2 flex   items-center justify-between">
            <NavLink to="/" className="flex items-center">
              {/* Logo */}
              <img
                className="h-10 w-auto md:h-10 md:w-auto"
                src="SkillSyn_Logo.png"
                alt="SkillSyn Logo"
              />
            </NavLink>

            {/* Navigation Links */}
            <div className="flex items-center ">
              <ul className="flex md:space-x-3 md:text-sm md:font-medium">
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                  >
                    Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about-us"
                    className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                  >
                    About Us
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <NavLink
                        onClick={handleLogoutClick}
                        className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/register"
                        className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                        activeClassName="text-blue-700 bg-gray-50"
                      >
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="text-gray-700 hover:bg-gray-50 hover:text-blue-700 px-3 py-2 rounded-md transition duration-300"
                        activeClassName="text-blue-700 bg-gray-50"
                      >
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
