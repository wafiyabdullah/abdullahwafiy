import React from 'react'
import ThemeToggle from './ThemeToggle'
import PictureCard from './PictureCard';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = ({item}) => {
  return (
    <div className="text-center mb-8">
      <div className='flex justify-between items-center mb-1'>
        <div className='flex items-center'>
          {/* <PictureCard item={item}/> */}
          <Avatar>
            <AvatarImage src={item} />
          </Avatar>
          <div>
            <p className='ml-2 flex items-center'>Abdullah Wafiy</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
