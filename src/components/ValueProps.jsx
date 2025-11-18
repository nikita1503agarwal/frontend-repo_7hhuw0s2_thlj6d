import { Globe, BadgeCheck, CalendarCheck2 } from 'lucide-react'

const features = [
  { icon: Globe, title: 'Global Access', desc: 'Connect with verified experts across all major time zones.' },
  { icon: BadgeCheck, title: 'Verified Expertise', desc: 'Mandatory certification and background checks for all trainers.' },
  { icon: CalendarCheck2, title: 'Seamless Booking', desc: 'Integrated scheduling, secure payment, and direct video link generation.' },
]

export default function ValueProps(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2342]">Why Athly Global?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition">
              <Icon className="text-[#0A2342]" />
              <h3 className="mt-3 font-semibold text-[#0A2342]">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
