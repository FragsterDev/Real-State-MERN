import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className="bg-slate-200 shadow-md"
    >
      <div className="flex max-w-6xl mx-auto justify-between items-center p-3">
        <Link to={"/"}>
          <div
            onClick={() => {}}
            className="font-bold text-sm sm:text-xl flex flex-wrap gap-1 hover:cursor-pointer"
          >
            <span className="text-slate-500">Estate</span>
            <span className="text-slate-700">Siliguri</span>
          </div>
        </Link>

        <form 
          action=""
          className="flex bg-slate-100 items-center p-3 rounded-lg"
        >
          <input 
            type="text"
            name="search"
            id="search"
            placeholder="Search..." 
            className="w-24 sm:w-64 focus:outline-none text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="hover:cursor-pointer"
          >
            <FaSearch className="text-slate-500"/>
          </button>
        </form>

        <ul className="flex items-center gap-4">
          <Link to={"/"}>
            <li className="hover:cursor-pointer">Home</li>
          </Link>

          <Link to={"/about"}>
            <li className="hover:cursor-pointer">About</li>
          </Link>

          <Link to={"/signin"}>
            <li className="hover:cursor-pointer">Sign In</li>
          </Link>
        </ul>

        <ul className="flex items-center gap-4">
          {
            ["Home", "About", "Sign In"].map((text, index) => (
              <li key={index} className="hover:cursor-pointer">
                <Link to={text === "Home"? "/":`/${text.replace(/\s+/g,'').toLowerCase()}`}>{text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header