import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full py-3 flex justify-between items-center mb-5'>
        <h3 className='text-2xl text-orange-400 font-bold'>Scottify</h3>
        <div className='flex bg-orange-400 px-3 py-1 rounded-md text-white gap-3'>
            <h3>Favourites</h3>
            <h3>{data.filter(item => item.added).length}</h3>
        </div>
    </div>
  )
}

export default Navbar