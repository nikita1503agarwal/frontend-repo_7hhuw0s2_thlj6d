import { useEffect, useState } from 'react'

export default function FeaturedCarousel(){
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/trainers/featured`).then(r=>r.json()).then(d=>{
      setItems(d.items || [])
    }).catch(()=>{})
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2342]">Meet Our Top-Rated Coaches</h2>
        <div className="mt-8 overflow-x-auto scrollbar-thin">
          <div className="flex gap-4 min-w-max">
            {items.map((t, idx) => (
              <div key={idx} className="w-72 flex-shrink-0 rounded-xl border border-slate-200 bg-white">
                <div className="h-40 w-full bg-slate-200 rounded-t-xl overflow-hidden">
                  {t.photo_url ? (
                    <img src={`${t.photo_url}&auto=format&fit=crop&w=600&q=60`} alt={t.full_name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-slate-500">No Photo</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-semibold text-[#0A2342]">{t.full_name}</div>
                  <div className="text-sm text-slate-600">{(t.specializations||[]).join(' • ')}</div>
                  <div className="mt-2 text-sm"><span className="font-semibold">⭐ {t.rating?.toFixed ? t.rating.toFixed(1) : t.rating}/5</span> · {t.reviews_count || 0} reviews</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
