'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Article = {
  id: string
  title: string
  content: string
  image_url: string
  category: string
  published_at: string
}

const FEATURED_ARTICLES = [
  {
    id: 'ezhu-thamila-2026',
    title: 'Urimaikkaha Ezhu Tamila 2026',
    category: 'Press Release',
    date: '22 June 2026',
    location: 'Brussels, Belgium',
    image: '/Media/01_Ezhu Thamila 2026/1.jpg',
    images: [
      '/Media/01_Ezhu Thamila 2026/2.jpg',
      '/Media/01_Ezhu Thamila 2026/3.jpg',
      '/Media/01_Ezhu Thamila 2026/4.jpg',
    ],
    paragraphs: [
      `On 22 June 2026, Tamils from across Europe gathered in Brussels, Belgium, for the annual Urimaikkaha Ezhu Tamila protest. Youth, families, activists, and members of the public travelled from numerous countries to take part in a united call for justice for the Tamil genocide and the liberation of Tamileelam.`,
      `The day's events began with a march through the streets of Brussels. Accompanied by drums, slogans, and national flags, participants carried banners highlighting the ongoing realities faced by Tamils in their homeland. The march passed through key areas of the city and attracted the attention of members of the public, tourists, and international institutions based in Brussels.`,
      `Following the rally, participants gathered for the main event programme. The Common Flame of Remembrance (Pothu Chudar) was lit, followed by tributes to the martyrs and civilians who gave their lives during the Tamil national struggle. Floral tributes were placed and a moment of silence was observed in remembrance of all those who lost their lives.`,
      `Speakers from different countries reflected on the continued challenges facing the Tamil people seventeen years after the end of the armed conflict. They highlighted ongoing militarisation, land occupation, enforced disappearances, political repression, and the lack of meaningful international accountability. Speakers stressed that despite repeated calls for justice, the Tamil national question remains unresolved.`,
      `A recurring message throughout the day was the responsibility of the younger generation to continue raising the Tamil cause on international platforms. Youth representatives reaffirmed their commitment to ensuring that the history, rights, and aspirations of the Tamil nation are not forgotten.`,
      `The event also featured cultural performances and artistic presentations which reflected the resilience and determination of the Tamil people. The programme concluded with the reading of a declaration reaffirming the Tamil nation's demand for justice, self-determination, and a permanent political solution based on the recognition of the Tamil people's collective rights.`,
      `As the event came to a close, participants joined together in singing "Nambungal Tamileelam," bringing an emotional end to a day marked by remembrance, unity, and determination.`,
      `Urimaikkaha Ezhu Tamila 2026 was organised by the Tamil Youth Organization (TYO) in coordination with Anaithulaga Thodarpakam and with the support of the Tamil Coordinating Committee (TCC) and the International Council of Eelam Tamils (ICET).`,
      `The strong participation witnessed in Brussels once again demonstrated that the Tamil people's demand for justice, freedom, and self-determination continues to live on across generations and across borders.`,
    ],
  },
]

export default function ProjectsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All Posts')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await supabase.from('articles').select('*').order('published_at', { ascending: false })
      if (data) {
        setArticles(data)
        const cats = ['All Posts', ...Array.from(new Set(data.map((a: Article) => a.category).filter(Boolean)))]
        setCategories(cats)
      }
    }
    fetchArticles()
  }, [])

  const filtered = activeCategory === 'All Posts' ? articles : articles.filter(a => a.category === activeCategory)

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Projects & News</h1>
          </div>
          <p className="text-gray-400 pl-5">Latest updates, press releases and news from ICET.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">

        {/* Featured static articles */}
        {FEATURED_ARTICLES.map(article => {
          const isExpanded = expanded[article.id]
          const visibleParagraphs = isExpanded ? article.paragraphs : article.paragraphs.slice(0, 2)
          return (
            <div key={article.id} className="border border-zinc-800">
              {/* Hero image */}
              <div className="relative w-full h-52 md:h-96 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400 border border-red-700 px-2 py-1 mr-3">{article.category}</span>
                  <span className="text-gray-400 text-xs">{article.date} — {article.location}</span>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mt-2">{article.title}</h2>
                </div>
              </div>

              {/* 3 secondary images */}
              <div className="grid grid-cols-3 gap-1">
                {article.images.map((img, i) => (
                  <div key={i} className="h-28 overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Text content */}
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {visibleParagraphs.map((p, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed">{p}</p>
                  ))}
                </div>
                <button
                  onClick={() => setExpanded(prev => ({ ...prev, [article.id]: !isExpanded }))}
                  className="mt-6 text-sm font-semibold text-red-400 hover:text-red-300 transition border border-red-700 hover:border-red-500 px-4 py-2"
                >
                  {isExpanded ? 'Show less ▲' : 'Read full press release ▼'}
                </button>
              </div>
            </div>
          )
        })}

        {/* Supabase category filter */}
        {categories.length > 1 && (
          <div className="border-b border-zinc-800 -mx-4 px-4">
            <div className="flex gap-1 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition ${activeCategory === cat ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Supabase articles */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => (
              <div key={article.id} className="border border-zinc-800 hover:border-red-700 transition group">
                {article.image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img src={article.image_url} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                )}
                <div className="p-6">
                  {article.category && (
                    <p className="text-red-500 text-xs uppercase tracking-wider mb-2">{article.category}</p>
                  )}
                  <h2 className="text-white font-bold mb-3 group-hover:text-red-400 transition">{article.title}</h2>
                  <p className="text-gray-500 text-sm line-clamp-3">{article.content}</p>
                  <p className="text-gray-600 text-xs mt-4">{new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
