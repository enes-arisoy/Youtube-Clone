import millify from 'millify'
import moment from 'moment'
import React, { useState } from 'react'


const Description = ({video}) => {

    const [isOpen, setIsOpen] = useState(false)

      const text =  isOpen ? video.description : video.description.slice(0, 100) + "... daha fazla"


  return (
    <div onClick={() => setIsOpen(!isOpen)} 

    className='bg-[#3E403F] p-4 cursor-pointer rounded-lg mt-4 hover:opacity-80 transition duration-300'>
        <div className='flex items-center gap-10 mb-3'>
            <p>{millify(video.viewCount)} Görüntülenme</p>
            <p>{moment(video.publishDate).format("D MMM YYYY")} </p>
        </div>

        <div>
            <p className='whitespace-pre-wrap'>{text}</p>
        </div>
    </div>
  )
}

export default Description