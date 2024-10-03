/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import react from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

const TopProducts = () => {
    return( 
    <div>
      <div className="container">
     {/*Header section */}
     <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-primary"> Best Selling Products</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Outfit</h1>
        <p data-aos="fade-up" className="text-xl text-gray-600 ">
            Savxe clothing stands for classy style and comfort all in one 
          package.This brand was designed around excellence and structured for 
          customer satisfaction.
        </p>
     </div>
        {/* Body section */}
        <div
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
         gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
             <div
             data-aos="zoom-in"
             className="rounded-2xl bg-white dark:bg-gray-700
             hover:bg-black/80 dark:hover:bg-primary hover:text-white
             relative shadow-xl duration-300 max-w-[300px]">
              {/* image section */}
              <div className="h-[100px]">
                <img 
                src={data.img} 
                alt="" 
                className="max-w-[140px] block mx-auto transform -translate-y-20
                group-hover:scale-105 duration-300 drop-shadow-md"
                />
                </div>
                {/* details section */}
                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300
                  text-sm line-clamp-2">
                    {data.description}
                    </p>
                    <button
                    className="bg-primary hover:scale-105 duration-300
                    text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                    group-hover:text-primary"
                   // onClick={handleOrderPopup}
                    >
                    Order Now
                    </button>
                </div>
             </div>
            ))}
        </div>
      </div>
    </div>
 );
};

export default TopProducts;