import { useEffect, useState } from 'react'

export default function Search(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [filters, setFilters] = useState({ specialization:'HIIT', price_min:'', price_max:'', timezone:'', language:'', min_rating:4.5 })
  const [items, setItems] = useState([])

  const runSearch = async () => {
    const payload = {
      specialization: filters.specialization,
      price_min: filters.price_min? Number(filters.price_min): null,
      price_max: filters.price_max? Number(filters.price_max): null,
      timezone: filters.timezone || null,
      language: filters.language || null,
      min_rating: Number(filters.min_rating || 4.5)
    }
    const res = await fetch(`${baseUrl}/trainers/search`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    const data = await res.json()
    setItems(data.items || [])
  }

  useEffect(()=>{ runSearch() }, [])

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#0A2342]">Find a Trainer</h1>
        <div className="mt-6 grid lg:grid-cols-[280px,1fr] gap-6">
          <aside className="p-4 bg-white border border-slate-200 rounded-xl space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Specialization</label>
              <select value={filters.specialization} onChange={e=>setFilters({...filters, specialization:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md">
                {['HIIT','Strength','Yoga','Nutrition','Mobility','Pilates','Conditioning'].map(s=> <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700">Min $</label>
                <input value={filters.price_min} onChange={e=>setFilters({...filters, price_min:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Max $</label>
                <input value={filters.price_max} onChange={e=>setFilters({...filters, price_max:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Timezone</label>
              <input value={filters.timezone} onChange={e=>setFilters({...filters, timezone:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Language</label>
              <input value={filters.language} onChange={e=>setFilters({...filters, language:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Min Rating</label>
              <input type="number" step="0.1" min="0" max="5" value={filters.min_rating} onChange={e=>setFilters({...filters, min_rating:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
            </div>
            <button onClick={runSearch} className="w-full px-4 py-2 rounded-md bg-[#FF6B00] text-white font-semibold">Search</button>
          </aside>

          <main>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((t, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <div className="h-40 w-full bg-slate-200">
                    {t.photo_url ? (
                      <img src={`${t.photo_url}&auto=format&fit=crop&w=600&q=60`} alt={t.full_name} className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-[#0A2342]">{t.full_name}</div>
                    <div className="text-sm text-slate-600">{(t.specializations||[]).join(' • ')}</div>
                    <div className="mt-2 text-sm"><span className="font-semibold">⭐ {t.rating}/5</span> · {t.reviews_count || 0} reviews</div>
                    <div className="mt-3 flex gap-2">
                      {t.price_30 && <div className="px-2 py-1 rounded bg-slate-100 text-xs">30m ${t.price_30}</div>}
                      {t.price_60 && <div className="px-2 py-1 rounded bg-slate-100 text-xs">60m ${t.price_60}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
