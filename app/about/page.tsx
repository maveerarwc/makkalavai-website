export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">About ICET</h1>
          </div>
          <p className="text-gray-400">International Council of Eelam Tamils</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-4 text-red-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            The International Council of Eelam Tamils (ICET) — அனைத்துலக எழத்தமிழர் மக்களவை — is a global coordinating body representing Tamil Country Councils, Federations, and Forums from across the world. Our mission is to speak with one unified voice in asserting the legitimate rights, needs and concerns of the Tamil people.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4 text-red-400">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            We envision a future where the Tamil people of Eelam exercise their right to self-determination, living with dignity, freedom and justice. We work to coordinate and represent the Diaspora Tamils internationally through peaceful advocacy, diplomacy and community engagement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4 text-red-400">Our Objectives</h2>
          <ul className="space-y-3">
            {[
              'To represent Eelam Tamils at international forums and institutions',
              'To coordinate Tamil diaspora organizations worldwide',
              'To advocate for political solutions based on the Vaddukoddai Resolution (1976)',
              'To document and raise awareness about human rights violations against Tamils',
              'To support Tamil community development projects globally',
              'To build bridges between Tamil organizations across different countries',
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400">
                <span className="text-red-600 font-bold mt-0.5">→</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6">
          <p className="text-yellow-400 font-semibold mb-2">Registration</p>
          <p className="text-gray-400 text-sm">Registration Number: 1018.804.460</p>
          <p className="text-gray-400 text-sm">Email: belgium@tamilyouthorganisation.com</p>
        </div>
      </div>
    </div>
  )
}
