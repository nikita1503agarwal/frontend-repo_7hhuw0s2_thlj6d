import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="pt-28 pb-16 bg-[#0A2342] text-white relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-[#FF6B00]/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">Train Global. Live Local. Your world-class coach is one click away.</h1>
            <p className="mt-4 text-slate-200 text-lg">Access verified specialists in HIIT, Strength, Yoga, and Nutrition from over 50 countries, available for live, 1:1 online sessions.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/signup/client" className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold text-center">I want to Hire a Trainer</Link>
              <Link to="/signup/trainer" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 text-center">I am a Certified Trainer</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <iframe
              src="https://my.spline.design/retrofuturismbganimation-R4vDY1cEauk91BNaqkv7Mjiu/"
              title="Athly 3D Globe"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
