import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; 
import logo from '../../public/vite.svg';

const Footer = () => {
    return (
        <footer className="bg-neutral-500 py-6 text-white mx-12 rounded-t-full">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                
                {/* Logo & Contact */}
                <div className="text-center sm:text-left">
                    <img src={logo} alt="Logo" className="mx-auto sm:mx-0 w-32 h-auto mb-4" />
                    <h3 className="font-bold text-lg">Got a Question? Call us</h3>
                    <p className=" flex items-center justify-center sm:justify-start space-x-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>09613-800800</span>
                    </p>
                </div>

                {/* Company Info */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">Company</h4>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">
                            {/* <Link to="/about-us">About Us</Link> */}
                            About Us
                        </li>
                        <li className="hover:underline cursor-pointer">
                            {/* <Link to="/contact-us">Contact Us</Link> */}
                            Contact Us
                        </li>
                        <li className="hover:underline cursor-pointer">
                            {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
                            Privacy Policy
                        </li>
                        <li className="hover:underline cursor-pointer">
                            {/* <Link to="/terms-and-conditions">Terms & Conditions</Link> */}
                            Terms & Conditions
                        </li>
                    </ul>
                </div>

                {/* My Account */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">My Account</h4>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">
                        {/* <Link to="/login">Sign In</Link> */}
                        </li>
                        <li className="hover:underline cursor-pointer">
                            {/* <Link to ="/register">Register </Link> */}
                            </li>
                        <li className="hover:underline cursor-pointer">Orders</li>
                        <li className="hover:underline cursor-pointer">Track My Order</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">Customer Service</h4>
                    <ul className="space-y-2">
                        {/* <Link to = '/payment-methods'> */}
                        <li className="hover:underline cursor-pointer">Payment Methods</li>
                        {/* </Link> */}
                        
                        {/* <Link to = '/support-center'> */}
                        <li className="hover:underline cursor-pointer">Support Center</li>
                        {/* </Link> */}

                        {/* <Link to = '/refund'> */}
                        <li className="hover:underline cursor-pointer">Cancellation, Return & Refund</li>
                        {/* </Link> */}
                    </ul>
                </div>
            </div>



            {/* Copyright */}
            <p className="text-center mt-6">
                &copy; {new Date().getFullYear()} | Furniture World | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
