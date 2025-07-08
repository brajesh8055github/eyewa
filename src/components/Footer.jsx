import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#131616] text-white px-6 py-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
  <h2 className="text-2xl font-bold text-white tracking-wide">eyewa</h2>

          <p className="font-semibold mb-1">Contact us:</p>
          <p className="text-lg font-bold mb-1">04247 2979</p>
          <p className="text-sm text-gray-300">Available daily: 10:00 AM - 11:00 PM</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQs</li>
            <li>Track My Order</li>
            <li>My Account</li>
            <li>Shipping and Delivery</li>
            <li>Payment Methods</li>
            <li>Return and Exchange</li>
            <li>Frames Warranty</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Top categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact lenses</li>
            <li>Sunglasses for Men</li>
            <li>Sunglasses for Women</li>
            <li>Colored Contact Lenses</li>
            <li>Glasses</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">About eyewa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About us</li>
            <li>Our Stores</li>
            <li>Contact us</li>
            <li>Insurance</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms and condition</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Social media</h3>
          <div className="flex items-center gap-4 mb-6">
            <FaFacebookF className="hover:text-teal-400" />
            <FaTwitter className="hover:text-teal-400" />
            <FaInstagram className="hover:text-teal-400" />
            <FaLinkedinIn className="hover:text-teal-400" />
          </div>

          <h3 className="font-bold mb-2">We accept</h3>
          <div className="flex items-center gap-4">
            <img src="/images/apple-pay.png" alt="Apple Pay" className="h-6" />
            <img src="/images/tamara.png" alt="Tamara" className="h-6" />
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/mastercard.png" alt="MasterCard" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
