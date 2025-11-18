import { useState } from 'react'

export default function ClientSignup(){
  const [form, setForm] = useState({ full_name:'', email:'', password:'', goals:[], timezone:'' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const goalsList = ['Weight Loss','Strength','HIIT','Yoga','Mobility','Nutrition']

  const toggleGoal = (g) => {
    setForm(f => ({...f, goals: f.goals.includes(g) ? f.goals.filter(x=>x!==g) : [...f.goals, g]}))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/client/signup`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      if(!res.ok) throw new Error('Failed')
      setStatus('ok')
    } catch(err){ setStatus('error') }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#0A2342]">Create your client account</h1>
        <p className="text-slate-600 mt-1">Sign up and start searching for certified trainers.</p>

        <form onSubmit={submit} className="mt-8 p-6 bg-white rounded-xl border border-slate-200 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} className="mt-1 w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Fitness Goals</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {goalsList.map(g => (
                <button type="button" key={g} onClick={()=>toggleGoal(g)} className={(form.goals.includes(g)?'bg-[#0A2342] text-white':'bg-slate-100 text-slate-700')+" px-3 py-1 rounded-full text-sm"}>{g}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Timezone</label>
            <input value={form.timezone} onChange={e=>setForm({...form, timezone:e.target.value})} placeholder="e.g., Europe/London" className="mt-1 w-full px-3 py-2 border rounded-md" />
          </div>
          <button className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Create Account</button>
          {status==='ok' && <p className="text-[#0A2342]">Account created! Redirecting to search...</p>}
          {status==='error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  )
}
