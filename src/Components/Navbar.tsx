import { IoBagCheckOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";

function navbar() {
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

      <div className="flex gap-6 mr-20">
        <div className="flex gap-1">
          <div className="">
            <IoPersonCircle size={25} />
          </div>
          <div className="text-base">Login</div>
        </div>
        <div>
          <IoBagCheckOutline size={22}/>
        </div>
      </div>
    </div>
  );
}

export default navbar;
