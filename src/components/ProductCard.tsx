/* eslint-disable @typescript-eslint/no-explicit-any */

import Rating from "./Ratings";

const ProductCard = ({ product }: any) => {
  return (
    <div key={product.id} className="border p-4">
      <img src={product.img} alt="" className="w-full" />
      <h3 className="text-lg font-bold truncate">{product.name}</h3>
      <Rating value={product.ratings} />
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button className="bg-primary text-white px-4 py-2 mt-2 rounded-md w-full">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
