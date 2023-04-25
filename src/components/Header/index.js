import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="mt-8 mx-6 flex items-center justify-between md:mx-16 md:mt-10">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold">iBuy</h1>
        </div>

        {/* Menu */}
        <div className="hidden space-x-16 md:flex">
          <a href="/" className="font-bold border-b-2 border-b-black">
            Home
          </a>
          <a href="#" className="hover:border-b-2 border-b-black">
            Catalog
          </a>
          <a href="#" className="hover:border-b-2 border-b-black">
            About Us
          </a>
        </div>

        {/* Profile */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="36px"
            viewBox="0 0 20 20"
            width="36px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path d="M10 5.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4.5c-.83 0-1.5-.67-1.5-1.5S9.17 7 10 7s1.5.67 1.5 1.5S10.83 10 10 10z" />
                <path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.5c-1.49 0-2.86-.51-3.96-1.36C7.19 14.42 8.55 14 10 14s2.81.42 3.96 1.14c-1.1.85-2.47 1.36-3.96 1.36zm5.07-2.44c-1.44-.99-3.19-1.56-5.07-1.56s-3.62.58-5.07 1.56C4.04 12.95 3.5 11.54 3.5 10c0-3.58 2.92-6.5 6.5-6.5s6.5 2.92 6.5 6.5c0 1.54-.54 2.95-1.43 4.06z" />
              </g>
            </g>
          </svg>
        </div>
      </nav>
    </header>
  );
}
