import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from "../assets/images/getImages";


export default function Header() {
  return (
    <header className='pt-9 lg:pt-16 pb-4 flex justify-center'>
      <nav className='w-10/12'>
          <div className='inline-block'>
            <Link to="/">
              <img src={logo} alt='logo' />
            </Link>
          </div>
      </nav>
    </header>
  )
}
