import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-pink-100 border-b-2 border-pink-400"> 
            
            {/* Brand */}
            <h1 className="text-pink-500 font-bold text-xl">
                TWICE FAN PAGE
            </h1>

            {/* Navigation Links */}
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-pink-500 transition">
                    Home
                </Link>
                <Link href="/members" className="hover:text-pink-500 transition">
                    Members
                </Link>
                <Link href="/albums" className="hover:text-pink-500 transition">
                    Albums
                </Link>
                <Link href="/favorites" className="hover:text-pink-500 transition">
                    Favorites
                </Link>
                <Link href="/about" className="hover:text-pink-500 transition">
                    About
                </Link>
            </div>
        </nav>
    )
}