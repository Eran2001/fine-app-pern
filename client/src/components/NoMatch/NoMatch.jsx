import Navbar from "../Navbar/Navbar"
import "./NoMatch.css"

const NoMatch = () => {
  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 no-match">
        404 Not Found
      </h1>
    </div>
  )
}

export default NoMatch
