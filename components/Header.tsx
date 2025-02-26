import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <header className="py-6 px-8 flex justify-between items-center bg-white shadow-md relative">
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        {showText ? (
          <p className="text-lg font-normal text-gray-600">Made for the Connoisseur...</p>
        ) : (
          <p className="text-lg font-normal text-gray-600">Alternative Text</p>
        )}
        <button
          onClick={() => setShowText(!showText)}
          className="text-sm font-light text-gray-500 hover:text-gray-700 transition"
        >
          Learn More
        </button>
      </div>

      <nav className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition"
        >
          Menu <ChevronDown className="w-4 h-4" />
        </button>

        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 min-w-[160px] bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            {[
              "Dashboard",
              "Create a Bot",
              "My Bots",
              "Trade History",
              "Settings",
              "Support & FAQs",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
