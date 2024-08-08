import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container  px-4 py-4 flex items-center justify-between">
        <div className="hidden lg:flex gap-1">
        <div className="header_top_icon_wrapper">
        <BsFacebook />
        </div>
        <div className="header_top_icon_wrapper">
        <BsTwitter />
        </div>
        <div className="header_top_icon_wrapper">
        <BsInstagram />
        </div>
        <div className="header_top_icon_wrapper">
        <BsLinkedin/>
        </div>
        </div>
        <div className="text-gray-500 text-[12px]">
            <p>PLAY, WIN, REPEAT</p>
        </div>
        <div>
          <select className='text-gray-500 text-[12px] w-[80px]'
          name='language'
          id='language'>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            
          </select>
        </div>
        </div>
    </div>
  )
}

export default HeaderTop