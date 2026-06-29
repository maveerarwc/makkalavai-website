'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Article = {
  id: string
  title: string
  content: string
  image_url: string
  category: string
  published_at: string
}

export default function ProjectsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All Posts')

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
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Projects & News</h1>
          </div>
          <p className="text-gray-400">Latest updates, press releases and news from ICET.</p>
        </div>
      </div>

      {categories.length > 1 && (
        <div className="border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto">
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No articles yet.</p>
        ) : (
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
