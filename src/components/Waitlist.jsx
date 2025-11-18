import { useState } from 'react'

export default function Waitlist(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/waitlist`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      if(!res.ok) throw new Error('Failed')
      setStatus('ok')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2342]">Can't find a trainer immediately?</h2>
            <p className="mt-2 text-slate-600">Join our Priority Waitlist and we'll match you with a new coach that fits your needs as they join our network.</p>
          </div>
          <form onSubmit={submit} className="flex gap-3">
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Email Address" className="flex-1 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
            <button className="px-5 py-3 rounded-md bg-[#FF6B00] text-white font-semibold">Join Waitlist</button>
          </form>
          {status === 'ok' && <p className="md:col-span-2 text-[#0A2342]">Thanks! You're on the list.</p>}
          {status === 'error' && <p className="md:col-span-2 text-red-600">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  )
}
