import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProfile, logout } from "../../services/AdminService";

const NavButton = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={`text-gray-700 py-1 px-3 my-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg ${className}`}
    >
      {children}
    </Link>
  );
};

export const Nav = ({ user, setUser }) => {
  const location = useLocation();
  useEffect(() => {
    getProfile().then((info) => {
      if (info.userName) {
        setUser(info);
      }
    });
  }, [location]);
  return (
    <div className="backdrop-blur fixed w-full top-0 left-0 right-0 px-2 py-1 text-white flex flex-col md:flex-row z-50 md:items-center z-50">
      <Link
        to="/"
        className="font-semibold py-1 px-2 bg-gray-800 rounded-lg m-auto ml-0"
      >
        <p className="truncate">TEAM-20 Apartment</p>
      </Link>
      <div className="flex flex-1 md:justify-end">
        <NavButton to="/floor-plan">
          <p className="truncate">Floor Plan</p>
        </NavButton>
        <NavButton to="/amenities">
          <p className="truncate">Amenities</p>
        </NavButton>

        {Object.keys(user).length > 0 && (
          <>
            {user.type === "Admin" && (
              <NavButton to={`/admin/${user._id}`}>
                <p className="truncate">{`Welcome ${user.type}, ${user.firstName} ${user.lastName}`}</p>
              </NavButton>
            )}
            {user.type === "Resident" && (
              <NavButton to={`/resident/${user._id}/profile`}>
                <p className="truncate">{`Welcome ${user.type}, ${user.firstName} ${user.lastName}`}</p>
              </NavButton>
            )}
            <NavButton to={`/`}>
              <button
                onClick={() => logout().then(() => setUser({}))}
                className="truncate"
              >
                Logout
              </button>
            </NavButton>
          </>
        )}
        {Object.keys(user).length <= 0 && (
          <>
            <NavButton to="/resident/login">
              <p className="truncate">Tenant Login</p>
            </NavButton>
            <NavButton to="/admin">
              <p className="truncate">Admin Login</p>
            </NavButton>
          </>
        )}
      </div>
    </div>
  );
};
