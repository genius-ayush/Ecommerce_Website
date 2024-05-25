import { EcommerceCard } from "./EcommerceCard";
function Shop() {
  return (
    <div className="">
      <div className="font-serif ml-10 p-4 font-mono text-3xl font-normal tracking-wide">
        MASKS FOR YOU
      </div>

      <div className="flex justify-center">
        <div className=" grid grid-cols-4  gap-10 p-5">
          <EcommerceCard
            imageUrl="./public/store/shop/p1/img1.jpg"
            productName="Yellow Mask"
            price="$5.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p2/img1.jpg"
            productName="Black Mask"
            price="$3.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p3/img1.jpg"
            productName="Maroon Mask"
            price="$2.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p4/img1.jpg"
            productName="Light Color Mask"
            price="$10.00"
          />

          <EcommerceCard
            imageUrl="./public/store/shop/p5/img1.jpg"
            productName="Yellow Mask"
            price="$5.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p6/img1.jpg"
            productName="Black Mask"
            price="$3.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p7/img1.jpg"
            productName="Maroon Mask"
            price="$2.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p8/img1.jpg"
            productName="Light Color Mask"
            price="$10.00"
          />

          <EcommerceCard
            imageUrl="./public/store/shop/p9/img1.jpg"
            productName="Yellow Mask"
            price="$5.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p10/img1.jpg"
            productName="Black Mask"
            price="$3.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p11/img1.jpg"
            productName="Maroon Mask"
            price="$2.00"
          />
          <EcommerceCard
            imageUrl="./public/store/shop/p12/img1.jpg"
            productName="Light Color Mask"
            price="$10.00"
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
