'use client'
export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Contact</h1>
          </div>
          <p className="text-gray-400">Get in touch with the International Council of Eelam Tamils.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">📧</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:belgium@tamilyouthorganisation.com" className="text-white hover:text-red-400 transition">
                    belgium@tamilyouthorganisation.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">🏢</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Registration</p>
                  <p className="text-white">1018.804.460</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Name</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Email</label>
                <input type="email" className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Message</label>
                <textarea rows={5} className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
              </div>
              <button type="submit" className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 font-semibold text-sm transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
