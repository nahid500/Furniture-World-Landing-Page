import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
    return (
        <div>
            {/* Social Media Icons */}
            <div className="bg-gray-300 justify-end flex gap-5 text-center p-1 px-6">
                <p className="text-red-600"> || Latest Offers! ||</p>
                <p className="text-black">Find us at:</p>
                <FontAwesomeIcon icon={faFacebook} size="x" className="text-black pt-1 hover:text-gray-300 cursor-pointer" />
                <FontAwesomeIcon icon={faInstagram} size="x" className="text-black pt-1 hover:text-gray-300 cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} size="x" className="text-black pt-1 hover:text-gray-300 cursor-pointer" />
            </div>

            {/* Navbar with Logo and Links */}
            <div className="grid grid-cols-2 items-center bg-neutral-600 p-4 text-white sticky top-0 shadow-md z-10 px-20">
                
                {/* Left side - Logo */}
                <div className="text-2xl font-bold">
                    Furniture World
                </div>

                {/* Right side - Navigation links */}
                <div>
                    <ul className="flex justify-end gap-6 text-lg">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">Categories</li>
                        <li className="hover:underline cursor-pointer">Services</li>
                        <li className="hover:underline cursor-pointer">About us</li>
                        <li className="hover:underline cursor-pointer">Cart</li>
                        <li className="hover:underline cursor-pointer">Log In</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
