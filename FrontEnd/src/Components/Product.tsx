import { FaRegCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import  { useState } from "react";
const data = [
  {
    imgelink: "./public/store/shop/p1/img1.jpg",
  },
  {
    imgelink: "./public/store/shop/p1/img2.jpg",
  },
  {
    imgelink: "./public/store/shop/p1/img3.jpg",
  },
];

function Product() {
  const [active, setActive] = useState("./public/store/shop/p1/img1.jpg");

  return (
    <div className="flex justify-center h-3/4 mt-20 pb-10 gap-10">
      <div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {data.map(({ imgelink }) => (
              <div>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))} 
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="font-sans font-semibold text-xl">YELLOW MASK</div>
        <div className="pb-1">$ 4.00</div>
        <div>Color</div>
        <div className="flex gap-0.5 pb-2">
          <FaRegCircle className="text-yellow-200 bg-yellow-200 rounded-full" onClick={()=>setActive("./public/store/shop/p1/img2.jpg")} />
          <FaRegCircle className="text-blue-900 bg-blue-900 rounded-full" onClick={()=>setActive("./public/store/shop/p1/img3.jpg")}/>
        </div>

        <div>Quantity</div>

        <div className="pb-2">
          <input
            id="number"
            name="number"
            type="number"
            autoComplete="number"
            required
            className="pl-2 block w-12 h-9 rounded-md border-back py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-10 focus:ring-inset  sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex">
          <button
            type="button"
            className="text-black border-2 hover:bg-black hover:text-white border-black   font-bold rounded-lg text-sm px-28 h-10 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
          >
            Add to Cart
          </button>
          <div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-lg">
              <FaRegHeart size={25} />
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="text-white bg-black border-2 hover:bg-white hover:text-black border-black   font-bold rounded-lg text-sm px-10 h-10 w-[354px] me-2 mb-8 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
          >
            Buy Now
          </button>
        </div>

        <div className="divide-y divide-black">
          <div className="flex justify-between pb-5">
            <div className="">Product Info</div>
            <div>
              <LuPlus />
            </div>
          </div>
          <div className="flex justify-between pb-5 pt-2">
            <div>Return & Refund Policy</div>
            <div>
              <LuPlus />
            </div>
          </div>
          <div className="flex justify-between pt-2 pb-5">
            <div>Shipping Info</div>
            <div>
              <LuPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
