import React from 'react'
import front from '../asset/front.jpg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="h-full lg:grid lg:grid-row-4 lg:grid-cols-12 lg:gap-10 md:grid md:grid-row-3 md:grid-cols-6 sm:grid sm:grid-cols-5 sm:grid-rows-5">
      <div className="lg:row-start-2 lg:col-start-3 lg:col-end-6 flex justify-start flex-col md:col-start-2 md:col-span-3 md:row-start-2 sm:col-start-2 sm:col-span-3 sm:row-start-2">
        <h1 className="text-4xl antialiased mb-6">Hindsight,</h1>
        <h1 className="mb-6 text-xl">
          Progression being the bedrock. We bring to you a platform to share
          your advice to the community that is hindsight to help build a better
          tomorrow.{' '}
        </h1>
        <Link
          to="/register"
          className="bg-transparent hover:bg-green-400 text-green-700  hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded mr-auto"
        >
          Register
        </Link>
      </div>
      <img
        className="lg:row-start-2 lg:col-start-8 lg:col-end-12 md:col-start-4 md:col-end-6 md:row-start-3 sm:row-start-4 sm:col-start-3 sm:col-span-4"
        src={front}
        alt="welp frontpage"
      />
    </div>
  )
}
export default Homepage
