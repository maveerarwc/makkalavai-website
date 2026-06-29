export default function AntonBalasinghamPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Anton Balasingham</h1>
          </div>
          <p className="text-yellow-400 text-lg font-semibold">The Voice of the Nation</p>
          <p className="text-gray-400 mt-2 text-sm">
            This is the official archive of the works and interviews of Anton Balasingham. His works have been published by kind permission of his wife Dr Adele Balasingham, the sole heir and copyright holder of his works.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="flex justify-center">
          <img src="/Anton Balasingam.avif" alt="Anton Balasingham" className="w-64 h-64 object-cover rounded-full border-4 border-red-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">Who Was Anton Balasingham?</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Anton Balasingham was the chief political strategist, chief negotiator and political adviser of the Liberation Tigers of Tamil Eelam. Affectionately known among the Tamil people as <span className="text-yellow-400 font-semibold">"Bala Annai"</span> (elder brother), he dedicated his entire life to the cause of Tamil liberation and the pursuit of a just and peaceful resolution to the Tamil national question.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            He was a prolific writer, a powerful orator and a deeply principled thinker whose works spanned decades of political struggle. His speeches, interviews, booklets and books remain essential documents for understanding the Tamil struggle for self-determination.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">His Words, His Vision</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Balasingham's writings and speeches reveal a man driven not by hatred, but by an unwavering commitment to justice for his people. In his historic speech at the inaugural session of the peace talks in Thailand in September 2002, he expressed the core aspiration of the Tamil people in words that still resonate today:
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-6 bg-zinc-900 p-6">
            <p className="text-yellow-400 text-xl italic leading-relaxed">
              "The deepest aspiration of our people is peace, a peace with justice and freedom; a permanent peace in which our people enjoy their right to self-determination and co-exist with others."
            </p>
          </blockquote>
          <p className="text-gray-400 leading-relaxed">
            He consistently argued that the Tamil struggle was not one of aggression, but of defence against a state that had systematically oppressed and marginalised the Tamil people. In his booklet "A Struggle for Justice", he wrote that the document sought to clarify misconceptions surrounding the Tamil armed struggle, arguing that the Tamils reserved the right to armed defence against military repression and genocide.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">Diplomat, Negotiator, Theoretician</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Balasingham led the LTTE delegation in every major round of peace talks, from the Thimpu talks of 1985 through to the Geneva talks of 2006. He engaged with governments, international bodies and the media with remarkable clarity and intellectual force.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            In interview after interview — from 1991 through to his final weeks in 2006 — he consistently called for a negotiated political solution, warning that military approaches would only deepen the conflict. He argued for federal models of governance, the protection of Tamil civilian rights, and the recognition of the Tamil homeland.
          </p>
          <p className="text-gray-400 leading-relaxed">
            His published works include speeches, interviews, booklets and books in both English and Tamil, covering topics such as the national question, self-determination, the peace process, and the history of the Tamil liberation movement. Among his key works are <span className="text-white font-semibold">"The Birth of the Tiger Movement"</span>, <span className="text-white font-semibold">"Our Theoretical Guide to the National Question"</span>, and <span className="text-white font-semibold">"A Struggle for Justice"</span>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">His Final Words</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            In his last public statement, published on 22 November 2006 — just weeks before his passing — Balasingham spoke with characteristic humility and selflessness:
          </p>
          <blockquote className="border-l-4 border-red-700 pl-6 py-2 my-6 bg-zinc-900 p-6">
            <p className="text-gray-300 text-lg italic leading-relaxed">
              "It is an unfortunate personal tragedy. However, when compared to the vast ocean of the collective tragedy faced by my people, my illness is merely a pebble. I am deeply sad that I am crippled by this illness, unable to contribute anything substantial towards the alleviation of the immense suffering and oppression of my people."
            </p>
          </blockquote>
          <p className="text-gray-400 leading-relaxed">
            These words capture the essence of the man — someone who, even in his final days, thought not of himself but of his people.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">His Legacy</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Anton Balasingham passed away on 14 December 2006. His works continue to inspire and guide the Tamil liberation movement and all those who believe in justice, self-determination and the rights of oppressed peoples.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 p-6">
            <p className="text-gray-400 text-sm mb-2">His complete collection of speeches, interviews, articles, booklets and books is preserved and accessible at:</p>
            <p className="text-yellow-400 font-semibold">antonbalasingham.com</p>
            <p className="text-gray-600 text-xs mt-3">Published by kind permission of Dr Adele Balasingham, sole heir and copyright holder of his works.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
