import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const PictureCard = ({item}) => {
    return (
        <div className="w-38 h-50">
            {/* <img
                src={item}
                alt="Picture"
                className="object-cover w-38 h-40" // Increase the width and height values
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            /> */}
            <Avatar>
                <AvatarImage src={item} />
            </Avatar>
        </div>
    );
}

export default PictureCard


