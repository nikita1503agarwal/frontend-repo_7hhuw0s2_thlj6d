import { useState } from 'react'

export default function TrainerSignup(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [step, setStep] = useState(1)
  const [s1, setS1] = useState({ full_name:'', email:'', password:'' })
  const [s2, setS2] = useState({ certifications:[], verified:false })
  const [s3, setS3] = useState({ specializations:[], bio:'' })
  const [s4, setS4] = useState({ price_30:'', price_60:'', timezone:'' })
  const [status, setStatus] = useState(null)

  const specs = ['HIIT','Strength','Yoga','Nutrition','Mobility','Pilates','Conditioning']

  const toggle = (state, setState, key, value) => {
    setState(prev => ({...prev, [key]: prev[key].includes(value) ? prev[key].filter(x=>x!==value) : [...prev[key], value]}))
  }

  const submit = async () => {
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/trainer/signup`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          step1: s1, step2: s2, step3: s3, step4: { ...s4, price_30: s4.price_30? Number(s4.price_30): null, price_60: s4.price_60? Number(s4.price_60): null }
        })
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('ok')
    } catch(e){ setStatus('error') }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#0A2342]">Become a Trainer</h1>
        <p className="text-slate-600 mt-1">Multi-step onboarding to showcase your expertise.</p>

        <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-sm">
            {[1,2,3,4].map(n => (
              <div key={n} className={(step>=n? 'bg-[#0A2342] text-white':'bg-slate-200 text-slate-600')+" px-3 py-1 rounded-full"}>Step {n}</div>
            ))}
          </div>

          {step===1 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input value={s1.full_name} onChange={e=>setS1({...s1, full_name:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" value={s1.email} onChange={e=>setS1({...s1, email:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <input type="password" value={s1.password} onChange={e=>setS1({...s1, password:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="flex justify-end"><button onClick={()=>setStep(2)} className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Continue</button></div>
            </div>
          )}

          {step===2 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Certifications (comma separated)</label>
                <input value={s2.certifications.join(', ')} onChange={e=>setS2({...s2, certifications: e.target.value.split(',').map(x=>x.trim()).filter(Boolean)})} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <label className="inline-flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={s2.verified} onChange={e=>setS2({...s2, verified:e.target.checked})} /> Mark as verified</label>
              <div className="flex justify-between">
                <button onClick={()=>setStep(1)} className="px-5 py-3 rounded-md border">Back</button>
                <button onClick={()=>setStep(3)} className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Continue</button>
              </div>
            </div>
          )}

          {step===3 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Specializations</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {specs.map(s => (
                    <button type="button" key={s} onClick={()=>toggle(s3,setS3,'specializations',s)} className={(s3.specializations.includes(s)?'bg-[#0A2342] text-white':'bg-slate-100 text-slate-700')+" px-3 py-1 rounded-full text-sm"}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Bio</label>
                <textarea value={s3.bio} onChange={e=>setS3({...s3, bio:e.target.value})} rows={4} className="mt-1 w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="flex justify-between">
                <button onClick={()=>setStep(2)} className="px-5 py-3 rounded-md border">Back</button>
                <button onClick={()=>setStep(4)} className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Continue</button>
              </div>
            </div>
          )}

          {step===4 && (
            <div className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Price (30 min)</label>
                  <input value={s4.price_30} onChange={e=>setS4({...s4, price_30:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Price (60 min)</label>
                  <input value={s4.price_60} onChange={e=>setS4({...s4, price_60:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Timezone</label>
                  <input value={s4.timezone} onChange={e=>setS4({...s4, timezone:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" />
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={()=>setStep(3)} className="px-5 py-3 rounded-md border">Back</button>
                <button onClick={submit} className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Finish</button>
              </div>
              {status==='ok' && <p className="text-[#0A2342]">Profile created! You can manage your schedule soon.</p>}
              {status==='error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
