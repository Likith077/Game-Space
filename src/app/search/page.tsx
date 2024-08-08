"use client";
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'

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

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const filteredGames = productData.filter(game => 
    game.title.toLowerCase().includes(query?.toLowerCase() || '')
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {filteredGames.map((game, index) => (
          <ProductCard
            key={index}
            img={game.img}
            title={game.title}
            rating={game.rating}
            gamePath={game.gamePath}
          />
        ))}
      </div>
      {filteredGames.length === 0 && <p>No games found matching your search.</p>}
    </div>
  )
}