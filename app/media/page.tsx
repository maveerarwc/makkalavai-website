import fs from 'fs'
import path from 'path'
import MediaGallerySupabase from '@/components/MediaGallerySupabase'
import PhotoGallery from '@/components/PhotoGallery'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']

const PROJECT_BLURBS: Record<string, string> = {
  'Ezhu Thamila 2026': 'Brussels, Belgium — 22 June 2026',
}

function getMediaProjects() {
  const mediaDir = path.join(process.cwd(), 'public', 'Media')
  if (!fs.existsSync(mediaDir)) return []

  return fs
    .readdirSync(mediaDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const folderName = entry.name
      const folderPath = path.join(mediaDir, folderName)
      const photos = fs
        .readdirSync(folderPath)
        .filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
        .sort()
        .map(file => `/Media/${folderName}/${file}`)

      const title = folderName.replace(/^\d+_/, '')

      return { folderName, title, photos }
    })
    .filter(project => project.photos.length > 0)
    .sort((a, b) => a.folderName.localeCompare(b.folderName))
}

export default function MediaPage() {
  const projects = getMediaProjects()

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 md:py-16 px-4">
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

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {projects.length === 0 && (
          <p className="text-gray-500 text-center">No photos have been added yet.</p>
        )}

        {projects.map(project => (
          <div key={project.folderName}>
            <h2 className="text-2xl font-bold text-white mb-1 border-l-4 border-red-700 pl-4">
              {project.title}
            </h2>
            {PROJECT_BLURBS[project.title] && (
              <p className="text-gray-500 text-sm pl-4 mb-6">{PROJECT_BLURBS[project.title]}</p>
            )}
            <PhotoGallery photos={project.photos} alt={project.title} />
          </div>
        ))}

        <MediaGallerySupabase />
      </div>
    </div>
  )
}
