import React from 'react'
import Header from "../layout/Header";

function Enquiry() {
  return (

     <div>
         <Header />

    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-15 space-y-8 bg-light">
  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
    Business & Export Enquiry
  </h1>

  {/* Sections */}
  <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
    {/* Exports Section */}
    <div className="flex flex-col items-center max-w-xs text-center p-4 rounded-xl border border-gray-200 hover:shadow-lg transition">
      <div className="text-6xl text-green-500 mb-4">🌍</div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Exports</h2>
      <p className="text-gray-600">
        Collaborate with us for international exports and global distribution.
      </p>
    </div>

    {/* Business Section */}
    <div className="flex flex-col items-center max-w-xs text-center p-4 rounded-xl border border-gray-200 hover:shadow-lg transition">
      <div className="text-6xl text-orange-500 mb-4">🏢</div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Business</h2>
      <p className="text-gray-600">
        Explore business partnerships, bulk orders, and commercial opportunities.
      </p>
    </div>
  </div>

  {/* Contact Details */}
  <div className="flex flex-col items-center space-y-2 text-center text-gray-700">
    <p>📞 Call: +91 83172 84314</p>
    <p>💬 WhatsApp: +91 83172 84314</p>
    <p>✉️ Email: gramlokfruits@gmail.com</p>
  </div>

 
</div>
 </div>

  )
}

export default Enquiry