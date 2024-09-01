import React, { useState } from 'react'
import Card  from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  const data = [
    { image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png", name: "Bohemian Rhapsody", artist: "Queen", added: true },
    { image: "https://pure-music.co.uk/wp-content/uploads/2019/04/Hotel-California-Album-Cover.png", name: "Hotel California", artist: "Eagles", added: false },
    { image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png", name: "Shape of You", artist: "Ed Sheeran", added: true },
    { image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png", name: "Blinding Lights", artist: "The Weeknd", added: false },
    { image: "https://i.pinimg.com/736x/a6/95/02/a69502cd0d82b8de16e017c3776918f1.jpg", name: "Stairway to Heaven", artist: "Led Zeppelin", added: true },
];
const [val,setVal] =useState(data)
const favHandler = (songIndex) =>{
  setVal(val.map((item,index) => index == songIndex? {...item, added:!item.added} : item))
}
  return (
    <div className='w-full h-screen px-20 bg-zinc-200'>
      <Navbar data={val}/>
      <div className='flex flex-wrap gap-4'>
      {val.map((obj,index)=>(
        <Card data={obj} favHandler={favHandler} index={index} key={index}/>
      ))}
      </div>

    </div>
  )
}

export default App