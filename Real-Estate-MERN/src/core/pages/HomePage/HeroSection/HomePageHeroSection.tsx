import { Link } from "react-router-dom"

function HeroSection() {
    return (
      <div 
        className="max-w-6xl mx-auto h-[452px] flex flex-col justify-center gap-6"
      >
  
        <h1 className="text-slate-700 text-3xl lg:text-6xl font-bold">
          Find your next <span className="text-slate-500">perfect</span> <br/>
          place in Siliguri
        </h1>
  
        <p className="text-xs sm:text-sm text-gray-400">
          Estate Siliguri will help you find your home in Siliguri fast, easy and comfortable. <br/>
          Our export support is always available.
        </p>
  
        <Link
            to={"/about"}
        >
            <p className="text-xs sm:text-sm font-bold hover:underline text-blue-800">
                Let's Start now...
            </p>
        </Link>
  
      </div>
    )
  }
  
  export default HeroSection