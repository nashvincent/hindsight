import React from 'react'

const Singup = () => {
  const handleSubmit = () => {}
  const handleName = () => {}
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your Name"
        className="border-2 border-blue-300 rounded pl-2 py-1 pr-20 my-2 focus:outline-none"
      />
      <input
        placeholder="Your Email"
        className="border-2 border-blue-300 rounded pl-2 py-1 pr-20 my-2 focus:outline-none"
      />
      <input
        className="border-2 border-blue-300 rounded pl-2 py-1 pr-20 my-2 focus:outline-none"
        placeholder="Password"
      />
      <input
        placeholder="Confirm Password"
        className="border-2 border-blue-300 rounded pl-2 py-1 pr-20 my-2 focus:outline-none"
      />
      <button className="my-10 focus:outline-none flex mx-auto bg-transparent hover:bg-green-400 text-green-700  hover:text-white py-1 px-3 border border-green-400 hover:border-transparent rounded">
        Submit
      </button>
    </form>
  )
}

export default Singup
