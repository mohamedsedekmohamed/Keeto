import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/NewKeetaLogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-16 pb-8 mt-20">
      
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="space-y-4">
          <img src={logo} alt="logo" className="h-10" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Order your favorite food anytime, anywhere. Fast delivery and the best restaurants near you.
          </p>

          {/* Social */}
          <div className="flex gap-4 pt-2">
            <div className="bg-white/10 p-3 rounded-full hover:bg-[#D4AC0D] hover:text-black transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white/10 p-3 rounded-full hover:bg-[#D4AC0D] hover:text-black transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-white/10 p-3 rounded-full hover:bg-[#D4AC0D] hover:text-black transition cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#D4AC0D]">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#D4AC0D]">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Safety</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#D4AC0D]">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get special offers and updates.
          </p>

          <div className="flex bg-white/10 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 bg-transparent outline-none text-sm"
            />
            <button className="bg-[#D4AC0D] text-black px-5 font-semibold hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Keeto. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

