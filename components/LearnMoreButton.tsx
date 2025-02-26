// components/LearnMoreButton.tsx
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LearnMoreButton() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsLearnMoreOpen(true)}
        className="bg-neutral-800 text-white px-6 py-2 rounded-md hover:bg-neutral-700 transition-colors text-sm"
      >
        Learn More
      </button>

      {isLearnMoreOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsLearnMoreOpen(false)}
        >
          <motion.div 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="bg-beige-100 p-8 rounded-lg max-w-md" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-light mb-4 text-neutral-700">About NeuroTrade</h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600">
              <li>NeuroTrade is your intelligent trading companion.</li>
              <li>Designed for precision. Built for profitability.</li>
              <li>A seamless experience that simplifies automated trading.</li>
            </ul>
            <button 
              onClick={() => setIsLearnMoreOpen(false)}
              className="mt-6 bg-neutral-800 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors text-sm"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}