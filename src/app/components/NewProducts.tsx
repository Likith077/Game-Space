import React from 'react'
import ProductCard from './ProductCard'

const productData = [
  {
    img:"/Screenshot (46).png",
    title: "Ghost Hunting",
    rating: 4,
    gamePath: "/games/Ghost/index.html",
  },
{
    img:"/Screenshot (45).png",
    title:"GO-GO",
    rating:4,
    gamePath: "/games/Go Go/index.html",
  },
  {
    img:"/image18.png",
    title:"Snake",
    rating:5,
    gamePath: "/games/snake/index.html",
  },
  {
    img:"/Screenshot (48).png",
    title:"Scroll game",
    rating:4,
    gamePath: "/games/Scroll/index.html",
  },
  {
    img:"/image3.jpg",
    title:"Car racing",
    rating:3,
    gamePath: "/games/Car racing/index.html",
  },
  {
    img:"/image2.jpg",
    title:"Flappy-Bird",
    rating:4,
    gamePath: "/games/Flappy-Bird/index.html",
  },
  {
    img:"/image4.jpg",
    title:"Tic-Tac-Toe",
    rating:3,
    gamePath: "/games/TicTacToe/index.html",
  },
  {
    img:"/Screenshot (44).png",
    title:"2048-Master",
    rating:3,
    gamePath: "/games/2048-master/index.html",
  },
  {
    img:"/Screenshot (43).png",
    title:"Space Huggers",
    rating:3,
    gamePath: "/games/SpaceHuggers/index.html",
  },
  {
    img:"/image12.png",
    title:"Zombie shooting",
    rating:3,
    gamePath: "/games/zombie shooting/index.html",
  },
  {
    img:"/image5.png",
    title:"Tetris",
    rating:3,
    gamePath: "/games/Tetris/index.html",
  },
  {
    img:"/90423.jpg",
    title:"Space",
    rating:3,
    gamePath: "/games/space/index.html",
  },
  {
    img:"/image6.jpg",
    title:"Quiz-Game",
    rating:3,
    gamePath: "/games/Quiz-Game/index.html",
  },
  {
    img:"/image7.png",
    title:"Wack-A-Mole",
    rating:3,
    gamePath: "/games/Mole/index.html",
  },
  {
    img:"/image8.jpg",
    title:"Fruit Slicer",
    rating:3,
    gamePath: "/games/fruit/index.html",
  },  {
    img:"/image9.jpg",
    title:"Crossy Road",
    rating:3,
    gamePath: "/games/Cross-road/index.html",
  },
  {
    img:"/image10.png",
    title:"Breakout",
    rating:3,
    gamePath: "/games/Breakout/index.html",
  },
  {
    img:"/image11.png",
    title:"Archery",
    rating:3,
    gamePath: "/games/Archery/index.html",
  },
  {
    img:"/image13.png",
    title:"Typing-Speed",
    rating:3,
    gamePath: "/games/Typing-Speed/index.html",
  },
  {
    img:"/image14.jpg",
    title:"Maze",
    rating:3,
    gamePath: "/games/Maze-Game/index.html",
  },
  {
    img:"/image15.png",
    title:"Candy Crush",
    rating:3,
    gamePath: "/games/Candy-Crush/index.html",
  },
]


const NewProducts = () => {
  return (
    <div><div className='container pt-16 pb-24'>
      <h2 className='font-medium text-2xl pb-4'>Mini Games</h2>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
  {productData.map((item, index) => (
    <ProductCard
      key={index}
      img={item.img}
      title={item.title}
      rating={item.rating}
      gamePath={item.gamePath}
    />
  ))}
</div>

      </div>
      </div>
  )
}

export default NewProducts