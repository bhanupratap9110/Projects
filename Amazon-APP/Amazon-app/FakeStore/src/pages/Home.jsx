import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import iphone from "../assets/images/iphone.jpeg"

function Home() {
  return (
    <>
      <div className="border p-3 w-full ">
        
        <div className="border rounded-lg overflow-hidden w-70 h-full flex flex-col items-center gap-2">
          <div className="bg-[#F6F6F6] w-full">
            <div className="w-full h-40  ">
              <img
                src={iphone}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
        
          <div className="p-1.5 flex flex-col  gap-1">
            <p className="font-medium text-sm">
              APPLE iPhone 17 pro Max (cosmic Orange, 256 GB)<br />
              . 256 GB Rom <br />
              . 17.53cm (6.9inch) super Retina XDR Display <br />
              . 48MP + 48MP + 48MP |18MP Front Camera <br />
              . A19 chip, 6 core Processor <br />
              . Apple One (1) year Limited Warranty <br />
            </p>
            
            <div className="flex flex-row ">
              <p className="me-1">4.8</p>
              <div className="flex gap-0">
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaAngleDown />
                <p>(1.1k+)</p>
              </div>
            </div>
            <div>
              <button className="bg-[#CC0C39] p-1 rounded text-white font-medium text-sm">
                Limited time deal
              </button>
            </div>
            
            <div className="flex ">
              <div className="flex items-start">
                <span className="text-lg">₹</span>
              </div>
              <span className="text-3xl">1,37,900</span>
              <div className="flex items-end ms-1">
                <span className="text-sm">
                  M.R.P: <span className="line-through">₹1,49,900</span>
                </span>
              </div>
            </div>
            <p>(8% off)</p>
            <p className="opacity-80">Up to 5% back with Amazon Pay I...</p>
            <div className="flex">
              <p>FREE Delivery</p>
              <span className="font-bold ms-1">Mon, 13 Nov</span>
            </div>
            <button className="bg-[#FFD814] rounded-2xl p-1 mb-2">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;