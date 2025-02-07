import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="text-xl font-bold">MovieApp</div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/top-rated" className="hover:text-gray-400">Top Rated</Link>
      <Link to="/upcoming" className="hover:text-gray-400">Upcoming</Link>
    </div>
  </nav>
  )
}

export default Navbar