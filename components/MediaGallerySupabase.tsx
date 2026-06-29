'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Photo = {
  id: string
  title: string
  image_url: string
  category: string
  created_at: string
}

export default function MediaGallerySupabase() {
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

  if (photos.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">Community Submissions</h2>

      {categories.length > 1 && (
        <div className="flex gap-1 overflow-x-auto mb-6">
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
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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

      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" />
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelected(null)}>×</button>
        </div>
      )}
    </div>
  )
}
