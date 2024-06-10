import { useEffect, useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:3000/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = response.data;

          if (data.username) {
            setUserName(data.username);
          }
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="flex justify-between p-6 pl-20 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div className="flex gap-5 pt-2">
        <div>Shop</div>
        <div>FAQ</div>
        <div>Contact</div>  
      </div>
      <div className="font-mono text-4xl font-normal tracking-wide">
        MASKCRAFT
      </div>

      <div className="flex gap-6 mr-20 hover:bg-sky-700" onClick={() => navigate(userName ? "/profile" : "/signin")}>
        <div className="flex gap-1">
          <div>
            <IoPersonCircle size={25} />
          </div>
          {userName ? (
            <div className="text-base">{userName}</div>
          ) : (
            <div className="text-base">Login</div>
          )}
        </div>
        <div>
          <IoBagCheckOutline size={22} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
