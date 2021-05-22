import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" bg-gray-100 py-3 ">
      <div className="lg:max-w-7xl mx-auto md:max-w-2xl  sm:max-w-sm ">
        <div className="flex justify-between align-center">
          <Link className="text-xl" to="/">
            Hindsight
          </Link>
          <div className="md:space-x-20 lg:space-x-20">
            <Link to="/advice">Advice</Link>
            <Link
              to="/register"
              className="visible sm:invisible md:visible lg:visible bg-transparent hover:bg-green-400 text-green-700 hover:text-white px-2 py-1 border border-green-400 hover:border-transparent rounded"
            >
              Register/Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
