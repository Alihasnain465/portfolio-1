import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-black">
      
      <Link
        href="/"
        className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition"
      >
        About
      </Link>

      <Link
        href="/contact"
        className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition"
      >
        Contact
      </Link>

    </nav>
  );
}
