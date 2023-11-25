'use client'
import React, { useRef } from 'react'
import { CiMobile1, CiSearch } from 'react-icons/ci'
import { FiAlignJustify } from 'react-icons/fi'
import style from '@/app/components/stye.module.css'
const Header = () => {
  const ref = useRef()
  const HandlerMobile = () => {
    const mobEl = document.getElementById('mob-menu')
    if (mobEl.style.display == 'none') {
      mobEl.style.display = 'block'
    } else {
      mobEl.style.display = 'none'
    }
  }
  return (
    <div className="container w-full mx-auto">
      <header className="bg-orange-500 h-[40px] flex items-center  max-w-7xl  rounded-md justify-between relative mx-auto">
        <div className="flex  items-center justify-between ">
          <h1 className="ml-2 sm:ml-1">
            <span className="text-slate-200 text-lg font-semibold py-2  sm:pl-2">
              Mehran
            </span>
            <span className="text-sm font-semibold py-2 px-2">Autos</span>
          </h1>

          <nav className="hidden lg:flex justify-center ">
            <div className="flex items-center bg-slate-200 rounded-md">
              <input
                type="text"
                className="mx-1 h-[30px] w-[155px] md:w-[300px] rounded-md focus:outline-none px-2 bg-transparent"
                placeholder="Search ..."
              />
              <CiSearch className="px-1 w-8 h-8 border border-l-gray-800  cursor-pointer hover:text-orange-700" />
            </div>
            <ul className="flex items-center">
              <li className="hidden sm:block text-base px-1 hover:text-slate-200 cursor-pointer">
                Home
              </li>
              <li className="hidden sm:block text-base px-1 hover:text-slate-200 cursor-pointer">
                Categories
              </li>
              <li className="hidden sm:block text-base px-1 hover:text-slate-200 cursor-pointer">
                About Us
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex  items-center  justify-between ">
          <div className="pr-1 text-base px-1 hover:text-slate-200 cursor-pointer">
            login
          </div>
          <div className="hidden sm:block text-base px-1 hover:text-slate-200 cursor-pointer">
            Register
          </div>
          <div className="text-base  hover:text-slate-200 cursor-pointer">
            Cart
          </div>
          <div>
            <FiAlignJustify
              className="h-8 w-8 px-1  block lg:hidden hover:text-white cursor-pointer"
              onClick={HandlerMobile}
            />
          </div>
        </div>
      </header>
      <div
        className={`${style.hide} sm:hidden  w-full bg-white absolute  right-0 left-0`}
        id="mob-menu"
      >
        <div className="show">
          <div className={style.gridbox}>
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
            {/* another category */}
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
          </div>
          {/* another columns */}
          <div className={style.gridbox}>
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
            {/* another category */}
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
            <div>
              <h1 className="bg-gray-200 shadow-md px-2 ">Categories </h1>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Interior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Exterior
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Dash Spray
              </div>
              <div className="px-2 hover:bg-gray-300 cursor-pointer">
                Perfume
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
