export default function AboutPage() {
  const aims = [
    'To organize Diaspora-Tamils on a democratic and cooperative basis for Tamil interests, and advancing the interests of the entire Tamil community.',
    'To campaign for a political solution based on the "Vaddukoddai Resolution", the resolution which was unanimously adopted on May 14, 1976 and endorsed by overwhelming Tamil majority. The resolution resolved for a free and secular state of TAMIL EELAM, based on the right of self determination inherent to every nation, has become inevitable in order to safeguard the very existence of the Tamil Nation in this Country.',
    'To provide a common framework within which Diaspora-Tamils can communicate, exchange information, and share expertise, skills and ideas.',
    'To promote the effective use and distribution of the resources of the Diaspora-Tamil community.',
    'To promote unity amongst Diaspora-Tamils to discuss and co-operatively achieve necessary social, and economic change wherever decision-making affects Diaspora-Tamils.',
    'To facilitate co-operation among Tamil organizations world-wide in organizing services which supplement the political, social and economic experience, provide for human needs that develop a sense of community with our peers and with other members of society.',
    'To articulate the desires of Diaspora-Tamils to fulfill the duties and be accorded the rights of citizens in their respective Countries, and in the international community.',
    'To achieve the goal of a system of social and economic coordination for the progressive development of the Tamil community.',
    'To promote Tamil interests in the international arena by co-operating and working with like-minded Tamil and external organizations in different countries.',
  ]

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">About ICET</h1>
          </div>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            This page provides a clear overview of ICET and our role as a global Tamil diaspora organization. Here you can learn about our mission, vision, and the values that guide our work, as well as the history and purpose of our council. It serves as an introduction to who we are, what we represent, and how we work to support and unite Tamil communities worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-12">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-700 pl-4">Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our mission is to unite the global Tamil diaspora and represent their shared political, social and cultural aspirations. ICET is committed to advancing self-determination for the Tamil Nation, protecting Tamil rights, and strengthening our communities worldwide through democratic cooperation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-700 pl-4">Vision</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            A globally connected and empowered Tamil diaspora that stands united for justice, equality, self-determination, and the long-term security and prosperity of future generations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-700 pl-4">Preamble</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            We, Tamil Country Councils, Federation and Forums from many countries, recognizing the need to speak with one voice in asserting our legitimate rights, needs and concerns, wish to express our support for one International Council of Eelam Tamils to coordinate and represent the Diaspora Tamils internationally whose basic aims will be as follows:
          </p>
          <div className="space-y-4">
            {aims.map((aim, i) => (
              <div key={i} className="flex items-start gap-4 border-l-2 border-zinc-700 hover:border-red-700 transition pl-6 py-2">
                <span className="text-red-600 font-bold text-sm mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-400 leading-relaxed text-sm">{aim}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6">
          <p className="text-yellow-400 font-semibold mb-2">Registration</p>
          <p className="text-gray-400 text-sm">Registration Number: 1018.804.460</p>
          <p className="text-gray-400 text-sm mt-1">Email: belgium@tamilyouthorganisation.com</p>
        </div>

      </div>
    </div>
  )
}
