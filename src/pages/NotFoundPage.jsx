import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link to="/">
          <Button color="blue" className="px-6 py-2 text-lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
