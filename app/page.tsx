import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <Image src="/logo.png" alt="ICET Logo" width={130} height={130} className="mx-auto mb-8 rounded-full" />
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
            Coordinating the Global <span className="text-red-500">Tamil Diaspora</span> for Rights, Justice & Self-Determination
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We, Tamil Country Councils, Federation and Forums from many countries, recognizing the need to speak with one voice in asserting our legitimate rights, needs and concerns, wish to express our support for one International Council of Eelam Tamils to coordinate and represent the Diaspora Tamils internationally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wide transition">
              Learn More
            </Link>
            <Link href="/donate" className="border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-400 px-8 py-3 font-semibold text-sm uppercase tracking-wide transition">
              Support Us
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-gradient-to-br from-zinc-900 to-black py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-700 transition group">
            <div className="text-4xl mb-4">🌍</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Representing the voice of Tamils at global platforms and promoting a political solution based on the Vaddukoddai Resolution (1976).
            </p>
            <div className="bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 inline-block">
              International Advocacy
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-yellow-500 transition group">
            <div className="text-4xl mb-4">🤝</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Connecting and strengthening Tamil organizations worldwide through cooperation, communication and shared strategies.
            </p>
            <div className="bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 inline-block">
              Diaspora Unity
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-white transition group">
            <div className="text-4xl mb-4">⚙️</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Supporting projects that uplift, empower and advance Tamil communities everywhere.
            </p>
            <div className="bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 inline-block">
              Community Development
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-8 bg-red-700" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Latest News</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/projects" className="group border border-zinc-800 hover:border-red-700 transition p-6 block">
              <p className="text-red-500 text-xs uppercase tracking-wider mb-2">Press Release</p>
              <h3 className="text-white font-bold mb-3 group-hover:text-red-400 transition">Urimaikkaha Ezhu Tamila 2025</h3>
              <p className="text-gray-500 text-sm">The protest took place in Brussels, Belgium on 23.06.2025 to condemn the systematic genocide against Tamils...</p>
              <p className="text-red-600 text-xs mt-4 font-semibold">Read more →</p>
            </Link>
            <Link href="/projects" className="group border border-zinc-800 hover:border-red-700 transition p-6 block">
              <p className="text-red-500 text-xs uppercase tracking-wider mb-2">Conference 2026</p>
              <h3 className="text-white font-bold mb-3 group-hover:text-red-400 transition">ICET Conference Updates</h3>
              <p className="text-gray-500 text-sm">Stay updated with the latest developments from our international conference planning and activities...</p>
              <p className="text-red-600 text-xs mt-4 font-semibold">Read more →</p>
            </Link>
            <Link href="/media" className="group border border-zinc-800 hover:border-red-700 transition p-6 block">
              <p className="text-red-500 text-xs uppercase tracking-wider mb-2">Media</p>
              <h3 className="text-white font-bold mb-3 group-hover:text-red-400 transition">Photo Gallery</h3>
              <p className="text-gray-500 text-sm">View our media gallery showcasing global Tamil diaspora events, demonstrations, and community activities...</p>
              <p className="text-red-600 text-xs mt-4 font-semibold">View gallery →</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
