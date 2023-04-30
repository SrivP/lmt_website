import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-white font-bold">My Website</a>
            </Link>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <Link href="/about">
                <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
