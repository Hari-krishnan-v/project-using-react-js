import React from 'react';
import { BiGridAlt, BiUser, BiEnvelope, BiQuestionMark } from "react-icons/bi";

const Sheet = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ zIndex: 999 }}
    >
      <div className="w-64 bg-gray-100 p-4 h-full overflow-y-auto relative">

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-blue-900 text-xl"
        >
          &times; {/* Close icon */}
        </button>
        <ul className="space-y-2">
          <li>
            <a href="/" className="flex items-center p-2 rounded-md hover:bg-gray-200 active:bg-gray-300" aria-label="Dashboard">
              <BiGridAlt className="text-xl" />
              <span className="ml-2">Dashboard</span>
            </a>
          </li>
          <li className="mt-4 font-semibold">Pages</li>
          <li>
            <a href="/contact/profile/" className="flex items-center p-2 rounded-md hover:bg-gray-200 active:bg-gray-300" aria-label="Profile">
              <BiUser className="text-xl" />
              <span className="ml-2">Profile</span>
            </a>
          </li>
          <li>
            <a href="/faq/" className="flex items-center p-2 rounded-md hover:bg-gray-200 active:bg-gray-300" aria-label="FAQ">
              <BiQuestionMark className="text-xl" />
              <span className="ml-2">F.A.Q</span>
            </a>
          </li>
          <li>
            <a href="/contact/contact/" className="flex items-center p-2 rounded-md hover:bg-gray-200 active:bg-gray-300" aria-label="Contact">
              <BiEnvelope className="text-xl" />
              <span className="ml-2">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sheet;
