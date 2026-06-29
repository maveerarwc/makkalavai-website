export default function PeaceTalksPage() {
  const talks = [
    {
      id: 'thimpu',
      year: '1985',
      location: 'Thimbu, Bhutan',
      title: '1985 – Thimbu, Bhutan',
      pdf: '/peace talks/10_Thimpu Samathana Peechu Vaarthai (850 x 2050 mm).pdf',
      content: `The earliest recorded formal negotiations, held during President Jayawardene's presidency. The Tamil side presented four cardinal principles, including recognition of Tamils as a distinct nationality and their right to self-determination. The talks collapsed due to Indian diplomatic pressure, lack of proper Sri Lankan political representation, and ceasefire violations by the Sri Lankan government.`
    },
    {
      id: 'colombo',
      year: '1989',
      location: 'Colombo',
      title: '1989–1990 – Colombo',
      pdf: '/peace talks/11_Colombo_Samathana Peechu Vaarthai (850 x 2050 mm).pdf',
      content: `Held during President Premadasa's presidency. Focused on the withdrawal of Indian military occupation, the repeal of the 6th Amendment, and dissolving the North-Eastern Provincial Council. The talks broke down when Premadasa rejected changes to the constitution and resumed military operations against Tamil areas.`
    },
    {
      id: 'jaffna',
      year: '2002',
      location: 'Jaffna / Oslo',
      title: '2002–2003 – Oslo Process',
      pdf: '/peace talks/12_Jaffna_Samathana Peechu Vaarthai (850 x 2050 mm).pdf',
      content: `The most significant peace process, facilitated by Norway. A formal ceasefire agreement was signed in February 2002. Six rounds of talks took place in various countries. The LTTE proposed a model of internal self-determination (ISGA). Talks collapsed when the Sri Lankan government refused to share power meaningfully and the peace process was undermined politically.`
    },
    {
      id: 'norway',
      year: '2006',
      location: 'Geneva / Norway',
      title: '2006 – Geneva & Norway',
      pdf: '/peace talks/13_Norway_Samathana Peechu Vaarthai (850 x 2050 mm).pdf',
      content: `Two rounds of talks were held in Geneva focusing on implementing the 2002 ceasefire agreement. Both sides agreed to uphold the ceasefire and respect humanitarian principles. However, the Sri Lankan military escalated violence shortly after, effectively ending any prospects for peace.`
    },
  ]

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Peace Talks</h1>
          </div>
          <p className="text-yellow-400 text-lg font-semibold mb-4">Peace Talks: Tamileelam – Sri Lanka</p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Throughout decades of conflict, multiple rounds of peace negotiations took place between the Tamil Eelam leadership and the Sri Lankan government. Each attempt represented a genuine effort to find a peaceful political solution to the Tamil question — yet every round of talks ultimately collapsed, primarily due to the Sri Lankan government's failure to honour agreements and its continued military aggression against the Tamil people.
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed mt-4">
            These peace talks stand as historical evidence that the Tamil leadership consistently pursued a negotiated solution, while the Sri Lankan state repeatedly chose war over peace.
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto">
          {talks.map(talk => (
            <a key={talk.id} href={`#${talk.id}`} className="px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white hover:bg-zinc-800 transition whitespace-nowrap border-b-2 border-transparent hover:border-red-700">
              {talk.location}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Overview of Peace Talks</h2>
        <div className="w-8 h-0.5 bg-red-700 mx-auto mb-12" />

        <div className="space-y-16">
          {talks.map(talk => (
            <div key={talk.id} id={talk.id} className="scroll-mt-20">
              <div className="border-l-2 border-red-700 pl-8 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">{talk.title}</h3>
                <p className="text-gray-400 leading-relaxed">{talk.content}</p>
              </div>

              {/* PDF viewer */}
              <div className="bg-zinc-900 border border-zinc-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-400 text-sm">📄 Official Document — {talk.location}</p>
                  <a
                    href={talk.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 text-xs font-semibold border border-red-700 px-3 py-1 transition"
                  >
                    Open PDF ↗
                  </a>
                </div>
                <iframe
                  src={talk.pdf}
                  className="hidden md:block w-full h-96 border border-zinc-700"
                  title={talk.title}
                />
                <p className="md:hidden text-gray-500 text-xs mt-2">Open the PDF via the button above to view the document.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
