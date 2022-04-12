import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa'
function Footer() {
  const arrow = (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="antiquewhite"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
  return (
    <footer className="bg-gray-900 text-center text-white">
      <div className="container flex flex-col items-center justify-between px-6 pt-6">
        <div className="mb-6 flex items-center justify-center">
          <h1 className="text-2xl font-extrabold "> Fallow Us On </h1>{' '}
          &nbsp;&nbsp;&nbsp;
          <a
            href="#"
            type="button"
            className="m-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            type="button"
            className="m-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            type="button"
            className="m-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            type="button"
            className=" m-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaYoutube />
          </a>
        </div>

        <div className="m-auto grid w-[80%] justify-center justify-items-center  text-left md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-[#998c8c]">text</h5>

            <ul className="mb-0 list-none">
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-[#998c8c]">
              QUICK LINKS
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-[#998c8c]">
              TOP PROCEDURES
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-white "
                >
                  {arrow} text text text
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="p-4 text-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright :<a href="#"> &nbsp; Prem kumar S</a>
      </div>
    </footer>
  )
}

export default Footer
