'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

type Photo = {
  id: string
  title: string
  image_url: string
  category: string
  created_at: string
}

export default function MediaPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    async function fetchPhotos() {
      const { data } = await supabase.from('photos').select('*').order('created_at', { ascending: false })
      if (data) {
        setPhotos(data)
        const cats = ['All', ...Array.from(new Set(data.map((p: Photo) => p.category).filter(Boolean)))]
        setCategories(cats)
      }
    }
    fetchPhotos()
  }, [])

  const filtered = activeCategory === 'All' ? photos : photos.filter(p => p.category === activeCategory)

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Media</h1>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Our media page offers a visual overview of ICET's global activities, events, and collaborations. These photos reflect the unity, engagement, and ongoing efforts of the international Tamil diaspora.
          </p>
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
          <p className="text-gray-500 text-center py-20">No photos yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {filtered.map(photo => (
              <div key={photo.id} className="relative aspect-video overflow-hidden cursor-pointer group" onClick={() => setSelected(photo.image_url)}>
                <img src={photo.image_url} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {photo.title && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                    <p className="text-white text-sm font-medium">{photo.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" />
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelected(null)}>×</button>
        </div>
      )}
    </div>
  )
}
