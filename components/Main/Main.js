import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Products, Categories } from "./mock";
import { MdArrowBackIos, MdCheck } from "react-icons/md";

function Main() {
  //accordion
  const [visiblePriceFilter, setVisiblePriceFilter] = useState(false);
  const [visibleBrandFilter, setVisibleBrandFilter] = useState(false);
  const [visibleColorFilter, setVisibleColorFilter] = useState(false);

  //range slider


  //category filter
  const [categoryFilter, setCategoryFilter] = useState(Categories);
  const [products, setProducts] = useState(Products);

  const changeCategoryFilter = (e, categoryName) => {
    let arr = [...categoryFilter];

    if (e.target.checked) {
      arr = [...arr, categoryName];
      setCategoryFilter(arr);
    } else {
      arr = arr.filter(function (item) {
        return item !== categoryName;
      });
      setCategoryFilter(arr);
    }
  };

  useEffect(() => {
    let arr = Products;
    arr = arr.filter((product) => {
      return categoryFilter.includes(product.category);
    });
    setProducts(arr);
  }, [categoryFilter]);

  const resetTabs = () => {
    setVisiblePriceFilter(false);
    setVisibleBrandFilter(false);
    setVisibleColorFilter(false);
    setProducts(Products);
  };

  return (
    <main className="container mx-auto flex flex-col lg:flex-row justify-center items-start my-14">
      <div className="w-full p-6 lg:w-1/4 lg:p-0 lg:pr-10">
        <div className="accordion border border-1 border-[#E2E2E2] rounded-t-xl">
          <div className="accordion-main-title bg-[#0065DB] text-white flex flex-col lg:flex-row font-bold justify-between items-center uppercase text-center px-8 py-3 text-xl rounded-t-xl">
            <h2>Filter by:</h2>
            <button
              onClick={() => resetTabs()}
              className="border rounded border-white px-4 py-2 hover:bg-white hover:text-[#0065DB] transition"
            >
              Reset
            </button>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title bg-[#FAF8F8] py-4 px-8 flex justify-between font-bold"
              onClick={() => setVisiblePriceFilter(!visiblePriceFilter)}
            >
              <div>Price</div>
              <div>
                {visiblePriceFilter ? (
                  <MdArrowBackIos className="rotate-90 origin-center mt-1 transition" />
                ) : (
                  <MdArrowBackIos className="-rotate-90 origin-center transition" />
                )}
              </div>
            </div>
            {visiblePriceFilter && (
              <div className="accordion-content animate-fade py-4 px-8">
                <div className="relative pt-1">
                  <label htmlFor="customRange1" className="form-label">
                    Sort by price:
                  </label>
                  <input
                    min={0}
                    max={999}
                    type="range"
                    className="form-range appearance-none w-full h-6 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none"
                    id="customRange1"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title bg-[#FAF8F8] py-4 px-8 flex justify-between font-bold"
              onClick={() => setVisibleBrandFilter(!visibleBrandFilter)}
            >
              <div>Brand</div>
              <div>
                {visibleBrandFilter ? (
                  <MdArrowBackIos className="rotate-90 origin-center mt-1 transition" />
                ) : (
                  <MdArrowBackIos className="-rotate-90 origin-center transition" />
                )}
              </div>
            </div>
            {visibleBrandFilter && (
              <div className="accordion-content animate-fade py-4 px-8 flex flex-col">
                {Categories &&
                  Categories.map((category, index) => (
                    <label className="capitalize" key={index}>
                      <input
                        onClick={(e) => changeCategoryFilter(e, category)}
                        type="checkbox"
                        id={category}
                        name={category}
                        className="mr-2 mb-4"
                        defaultChecked={true}
                      />
                      {category}
                    </label>
                  ))}
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title bg-[#FAF8F8] py-4 px-8 flex justify-between font-bold"
              onClick={() => setVisibleColorFilter(!visibleColorFilter)}
            >
              <div>Product Color</div>
              <div>
                {visibleColorFilter ? (
                  <MdArrowBackIos className="rotate-90 origin-center mt-1 transition" />
                ) : (
                  <MdArrowBackIos className="-rotate-90 origin-center transition" />
                )}
              </div>
            </div>
            {visibleColorFilter && (
              <div className="accordion-content animate-fade py-4 px-8 flex">
                <div className="flex flex-wrap justify-around">
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-black"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-red-600"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-blue-600"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-green-600"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-yellow-600"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-orange-600"></span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] bg-gray-600 flex justify-center items-center">
                    <MdCheck />
                  </span>
                  <span className="rounded-full w-[64px] h-[64px] m-[2px] border border-gray-200 bg-white flex justify-center items-center">
                    <MdCheck />
                  </span>
                </div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full justify-start lg:w-3/4 flex flex-wrap">
        {products &&
          products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
              />
            );
          })}
      </div>
    </main>
  );
}
export default Main;
