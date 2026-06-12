import { Link } from "react-router-dom";
import amazon from "../assets/images/amazon.jpeg"

function Header() {
  return (
    <>
      <div className="flex p-4 bg-gray-800 justify-between">
        <div className="w-20">
          <img src={amazon} alt="" />
        </div>
        <div className="">
          <Link to="/home" className="text-white hover:underline">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;