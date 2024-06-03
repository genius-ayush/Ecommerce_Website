import { FaRegCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuPlus, LuMinus } from "react-icons/lu"; 
import { useState } from "react";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

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
              <div key={imgelink}>
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
          <FaRegCircle
            className="text-yellow-200 bg-yellow-200 rounded-full"
            onClick={() => setActive("./public/store/shop/p1/img2.jpg")}
          />
          <FaRegCircle
            className="text-blue-900 bg-blue-900 rounded-full"
            onClick={() => setActive("./public/store/shop/p1/img3.jpg")}
          />
        </div>

        <div>Quantity</div>

        <div className="pb-2">
          <input
            id="number"
            name="number"
            type="number"
            autoComplete="number"
            required
            className="pl-2 block w-12 h-9 rounded-md border-back py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-10 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex">
          <button
            type="button"
            className="text-black border-2 hover:bg-black hover:text-white border-black font-bold rounded-lg text-sm px-28 h-10 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
            className="text-white bg-black border-2 hover:bg-white hover:text-black border-black font-bold rounded-lg text-sm px-10 h-10 w-[354px] me-2 mb-8 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Buy Now
          </button>
        </div>

        <div className="divide-y divide-gray-300">
          <div
            className="flex justify-between items-center pb-2 cursor-pointer"
            onClick={() => toggleDropdown("productInfo")}
          >
            <div className="font-semibold font-serif">Product Info</div>
            <div>{openDropdown === "productInfo" ? <LuMinus /> : <LuPlus />}</div>
          </div>
          {openDropdown === "productInfo" && (
            <div className="pb-5 border-b border-gray-300">
              <p className="dropdown-content w-96 font-serif italic">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes this
                product special and how your customers can benefit from this item.
              </p>
            </div>
          )}
          <div
            className="flex justify-between items-center pb-2 pt-2 cursor-pointer"
            onClick={() => toggleDropdown("returnPolicy")}
          >
            <div className="font-semibold font-serif">
              Return & Refund Policy
            </div>
            <div>{openDropdown === "returnPolicy" ? <LuMinus /> : <LuPlus />}</div>
          </div>
          {openDropdown === "returnPolicy" && (
            <div className="pb-5 border-b border-gray-300">
              <p className="dropdown-content w-96 font-serif italic">
                I'm a Return and Refund policy. I'm a great place to let your
                customers know what to do in case they are dissatisfied with their
                purchase. Having a straightforward refund or exchange policy is a
                great way to build trust and reassure your customers that they can
                buy with confidence.
              </p>
            </div>
          )}
          <div
            className="flex justify-between items-center pt-2 pb-2 cursor-pointer"
            onClick={() => toggleDropdown("shippingInfo")}
          >
            <div className="font-semibold font-serif">Shipping Info</div>
            <div>{openDropdown === "shippingInfo" ? <LuMinus /> : <LuPlus />}</div>
          </div>
          {openDropdown === "shippingInfo" && (
            <div className="pb-5 border-b border-gray-300">
              <p className="dropdown-content w-96 font-serif italic">
                I'm a shipping policy. I'm a great place to add more information
                about your shipping methods, packaging and cost. Providing
                straightforward information about your shipping policy is a great
                way to build trust and reassure your customers that they can buy
                from you with confidence.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
