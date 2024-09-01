import React from 'react'

const Card = ({data, favHandler, index}) => {
  return (
    <div className='w-60 h-36 rounded-md bg-white p-4 flex gap-4 relative justify-center pb-5 mt-5'>
        <div className='w-30 h-20 bg-orange-500 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={data.image} alt="" />
        </div>
        <div>
            <h3 className='font-semibold leading-none text-xl'>{data.name}</h3>
            <h6 className='text-sm '>{data.artist}</h6>
        </div>
        <button onClick={()=>favHandler(index)} className={`px-4 py-1 ${data.added ? 'bg-blue-400' : 'bg-orange-500'} rounded-full absolute bottom-2 text-white`}>{data.added ? 'Added!':'Add To Favourites'}</button>
    </div>
  )
}

export default Card