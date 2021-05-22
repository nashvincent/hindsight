import React, { useState } from 'react'
import regimg from '../asset/regimg.jpg'
import Form from './Form'
const Register = () => {
  const [Selected, setSelected] = useState(false)
  const handleSelected = (event) => {
    event.target.value === 'true' ? setSelected(true) : setSelected(false)
    console.log(Selected)
  }
  return (
    <div className="h-screen lg:grid lg:grid-rows-8 lg:grid-cols-12 lg:gap-10 md:grid md:grid-rows-8 md:grid-cols-12 md:gap-10 sm:grid sm:grid-rows-6 sm:grid-cols-10">
      <div className="lg:col-start-3 lg:col-end-6 lg:row-start-3 md:col-start-3 md:col-end-6 md:row-start-3 sm:invisible md:visible ">
        <img src={regimg} alt="Welp Register" />
      </div>
      <div className="lg:row-start-2 lg:row-span-3 lg:col-start-9 lg:col-end-10 lg:flex lg:justify-center md:row-start-2 md:row-span-3 md:col-start-9 md:col-end-10 md:flex md:justify-center sm:col-start-2 sm:col-end-10 sm:row-start-2">
        <div>
          <div className="border-2 shadow-xl border-green-400 px-14 py-20 rounded-xl">
            <div className="flex justify-around m-2 sm:m-0">
              <button
                className="py-1 px-3 border focus:outline-none rounded "
                onClick={handleSelected}
                value="true"
              >
                Signup
              </button>
              <button
                className="py-1 px-3 border focus:outline-none rounded"
                onClick={handleSelected}
                value="false"
              >
                Login
              </button>
            </div>
            <div className="pt-20 sm:pt-15">
              <Form Selected={Selected} />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
