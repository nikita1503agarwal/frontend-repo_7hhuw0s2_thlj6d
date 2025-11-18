import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-[#0A2342] text-white grid place-items-center font-bold">A</div>
          <span className="font-semibold text-[#0A2342]">Athly Global</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/search" className={({isActive})=> isActive? 'text-[#0A2342] font-medium' : 'text-slate-600 hover:text-[#0A2342]'}>Find a Trainer</NavLink>
          <NavLink to="/signup/trainer" className={({isActive})=> isActive? 'text-[#0A2342] font-medium' : 'text-slate-600 hover:text-[#0A2342]'}>Become a Trainer</NavLink>
          <NavLink to="/help" className={({isActive})=> isActive? 'text-[#0A2342] font-medium' : 'text-slate-600 hover:text-[#0A2342]'}>Help Center</NavLink>
          <Link to="/signup/client" className="inline-flex items-center px-4 py-2 rounded-md bg-[#FF6B00] text-white font-medium shadow hover:shadow-md transition">Sign up</Link>
        </nav>
        <button className="md:hidden p-2 text-[#0A2342]"><Menu /></button>
      </div>
    </header>
  )
}
