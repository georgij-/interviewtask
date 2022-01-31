import { useState } from "react";
import Image from "next/image";
import {
  MdCompareArrows,
  MdFavorite,
  MdFavoriteBorder,
  MdShoppingBag,
  MdStar,
  MdStarHalf,
  MdCheckCircle,
} from "react-icons/md";

function ProductCard(props) {
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCart, setIsCart] = useState(false);

  return (
    <div className="ProductCard w-[28%] mr-[3%] mb-[3%] bg-white border rounded-[20px] border-[#E2E2E2] flex flex-col justify-start items-center transition-all duration-300 hover:shadow-2xl  hover:cursor-pointer hover:scale-[1.025">
      <div className="relative w-[80%] block h-[220px] select-none">
        {props.image && (
          <Image
            src={props.image.src}
            layout="fill"
            objectFit="contain"
            alt={props.title}
          />
        )}
      </div>
      <div className="content w-full p-4">
        <h2 className="font-bold text-[#1A202C] text-xl">{props.title}</h2>
        <div className="flex mt-4 justify-center items-stretch">
          <div className="flex w-4/5 flex-col">
            <div className="flex items-center">
              <span className="text-[#F6AD55] flex items-center text-xl">
                {props.reviews && props.rating <= 3 ? (
                  <MdStarHalf />
                ) : (
                  <MdStar />
                )}
                <span className="pl-1">{props.rating}</span>
              </span>
              <span className="text-[#A0AEC0] pl-1 text-normal">
                ({props.reviews}) Reviews
              </span>
            </div>
            <p className="whitespace-pre-wrap	pt-2 text-[#969696]">
              {props.description}
            </p>
            <span className="text-[#1A202C] pt-8 font-bold text-2xl">
            €{props.price}
            </span>
          </div>
          <div className="flex h-full w-1/5 flex-col flex-1 justify-evenly items-center">
            <span className="py-2 text-[#7F9CF5] text-2xl">
              <MdCompareArrows />
            </span>
            <span
              className={
                isWishlist
                  ? "text-red-600 py-2 text-2xl transition duration-300 animate-scale"
                  : "py-2 text-[#241B55] text-2xl transition duration-300"
              }
              onClick={() => setIsWishlist(!isWishlist)}
            >
              {isWishlist ? <MdFavorite /> : <MdFavoriteBorder />}
            </span>
            <span
              className={
                isCart
                  ? "text-green-600 py-2 text-2xl transition duration-300 animate-scale"
                  : "py-2 text-[#241B55] text-2xl transition duration-300"
              }
              onClick={() => setIsCart(!isCart)}
            >
              {isCart ? <MdCheckCircle /> : <MdShoppingBag />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
