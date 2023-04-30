import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <Link href="/">
        </Link>
        <h1 className="ml-2 text-lg font-bold">Company Name</h1>
      </div>
      <ul className="flex items-center">
        <li className="ml-6">
          <Link href="/">
            <a className="hover:text-gray-400">Home</a>
          </Link>
        </li>
        <li className="ml-6">
          <Link href="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
        </li>
        <li className="ml-6">
          <Link href="/contact">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
