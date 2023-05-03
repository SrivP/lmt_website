import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute bg-transperant text-white flex items-center justify-between px-6 py-3 w-full top-3">
      <div className="flex items-center">
        <Link href="/"></Link>
        <h1 className="ml-2 text-lg font-bold">Company Name</h1>
      </div>
      <ul className="flex items-center">
        <li className="ml-6">
          <button className="bg-transparent hover:bg-slate-50 hover:bg-opacity-10 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            <Link href="/" className="hover:text-slate-100">
              Home
            </Link>
          </button>
        </li>
        <li className="ml-6">
          <button className="bg-transparent hover:bg-slate-50 hover:bg-opacity-10 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            <Link href="/about" className="hover:text-slate-100">
              About
            </Link>
          </button>
        </li>
        <li className="ml-6">
          <button className="bg-transparent hover:bg-slate-50 hover:bg-opacity-10 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            <Link href="/contact" className="hover:text-slate-100">
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
