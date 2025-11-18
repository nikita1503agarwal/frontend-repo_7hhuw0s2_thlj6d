import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-[#0A2342] text-white grid place-items-center font-bold">A</div>
            <span className="font-semibold text-[#0A2342]">Athly Global</span>
          </div>
          <div className="flex justify-start md:justify-end gap-4 text-slate-600">
            <a href="#" aria-label="Instagram" className="hover:text-[#0A2342]"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#0A2342]"><Facebook size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0A2342]"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-600">
          {['Home','Find a Trainer','Become a Trainer','Blog','Help Center','Terms of Service','Privacy Policy'].map(l => (
            <Link key={l} to="#" className="hover:text-[#0A2342]">{l}</Link>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Athly Global. All rights reserved.</p>
      </div>
    </footer>
  )
}
