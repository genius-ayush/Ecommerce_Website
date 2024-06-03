import { IoBagCheckOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function navbar() {
  const navigate = useNavigate();
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

      <div className="flex gap-6 mr-20 hover:bg-sky-700 " onClick={()=> navigate("/Signin")}>
        <div className="flex gap-1">
          <div className="" >
            <IoPersonCircle size={25} />
          </div>
          <div className="text-base"  >Profile</div>
        </div>
        <div>
          <IoBagCheckOutline size={22}/>
        </div>
      </div>
    </div>
  );
}

export default navbar;
