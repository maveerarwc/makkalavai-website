export default function DonatePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Support Our Cause</h1>
          </div>
          <p className="text-gray-400">Your donation helps us continue our work for Tamil rights and self-determination.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          The International Council of Eelam Tamils relies on the support of the Tamil diaspora worldwide to continue its advocacy work. Every contribution helps us represent Tamil voices at international forums, document human rights violations, and coordinate global Tamil organizations.
        </p>
        <div className="bg-zinc-900 border border-zinc-800 p-8 mb-8">
          <h2 className="text-white font-bold text-xl mb-4">Bank Transfer</h2>
          <p className="text-gray-400 text-sm mb-2">For donation details, please contact us at:</p>
          <a href="mailto:belgium@tamilyouthorganisation.com" className="text-red-400 hover:text-red-300 transition font-semibold">
            belgium@tamilyouthorganisation.com
          </a>
        </div>
        <p className="text-gray-600 text-sm">All donations go directly towards Tamil advocacy and community support programs.</p>
      </div>
    </div>
  )
}
