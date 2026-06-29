'use client'
import { useState, useEffect } from 'react'

const SIZE_PATTERN = ['row-span-2', '', '', 'row-span-2', '', '', '', 'row-span-2', '', '', '', '']

export default function PhotoGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [index, setIndex] = useState<number | null>(null)

  const showPrev = () => setIndex(i => (i === null ? null : (i - 1 + photos.length) % photos.length))
  const showNext = () => setIndex(i => (i === null ? null : (i + 1) % photos.length))

  useEffect(() => {
    if (index === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'Escape') setIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-2">
        {photos.map((photo, i) => (
          <div
            key={photo}
            className={`overflow-hidden cursor-pointer group ${SIZE_PATTERN[i % SIZE_PATTERN.length]}`}
            onClick={() => setIndex(i)}
          >
            <img
              src={photo}
              alt={alt}
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 select-none pointer-events-auto"
            />
          </div>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl z-10"
            onClick={() => setIndex(null)}
          >
            ×
          </button>
          <button
            className="absolute left-2 md:left-8 text-white text-4xl z-10 px-3 py-2 hover:text-red-400"
            onClick={e => { e.stopPropagation(); showPrev() }}
          >
            ‹
          </button>
          <img
            src={photos[index]}
            alt={alt}
            draggable={false}
            onContextMenu={e => e.preventDefault()}
            onClick={e => e.stopPropagation()}
            className="max-h-[90vh] max-w-[85vw] object-contain select-none"
          />
          <button
            className="absolute right-2 md:right-8 text-white text-4xl z-10 px-3 py-2 hover:text-red-400"
            onClick={e => { e.stopPropagation(); showNext() }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
