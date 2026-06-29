import fs from 'fs'
import path from 'path'
import MediaGallerySupabase from '@/components/MediaGallerySupabase'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']

const PROJECT_DESCRIPTIONS: Record<string, { date: string; text: string }> = {
  'Ezhu Thamila 2026': {
    date: '22.06.2026',
    text: `On 22 June 2026, Tamils from across Europe gathered in Brussels, Belgium, for the annual Urimaikkaha Ezhu Tamila protest. Youth, families, activists, and members of the public travelled from numerous countries to take part in a united call for justice for the Tamil genocide and the liberation of Tamileelam.

The day's events began with a march through the streets of Brussels. Accompanied by drums, slogans, and national flags, participants carried banners highlighting the ongoing realities faced by Tamils in their homeland. The march passed through key areas of the city and attracted the attention of members of the public, tourists, and international institutions based in Brussels.

Following the rally, participants gathered for the main event programme. The Common Flame of Remembrance (Pothu Chudar) was lit, followed by tributes to the martyrs and civilians who gave their lives during the Tamil national struggle. Floral tributes were placed and a moment of silence was observed in remembrance of all those who lost their lives.

Speakers from different countries reflected on the continued challenges facing the Tamil people seventeen years after the end of the armed conflict. They highlighted ongoing militarisation, land occupation, enforced disappearances, political repression, and the lack of meaningful international accountability. Speakers stressed that despite repeated calls for justice, the Tamil national question remains unresolved.

A recurring message throughout the day was the responsibility of the younger generation to continue raising the Tamil cause on international platforms. Youth representatives reaffirmed their commitment to ensuring that the history, rights, and aspirations of the Tamil nation are not forgotten.

The event also featured cultural performances and artistic presentations which reflected the resilience and determination of the Tamil people. The programme concluded with the reading of a declaration reaffirming the Tamil nation's demand for justice, self-determination, and a permanent political solution based on the recognition of the Tamil people's collective rights.

As the event came to a close, participants joined together in singing "Nambungal Tamileelam," bringing an emotional end to a day marked by remembrance, unity, and determination.

Urimaikkaha Ezhu Tamila 2026 was organised by the Tamil Youth Organization (TYO) in coordination with Anaithulaga Thodarpakam and with the support of the Tamil Coordinating Committee (TCC) and the International Council of Eelam Tamils (ICET).

The strong participation witnessed in Brussels once again demonstrated that the Tamil people's demand for justice, freedom, and self-determination continues to live on across generations and across borders.`,
  },
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

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {projects.length === 0 && (
          <p className="text-gray-500 text-center">No photos have been added yet.</p>
        )}

        {projects.map(project => {
          const description = PROJECT_DESCRIPTIONS[project.title]
          return (
          <div key={project.folderName}>
            <h2 className="text-2xl font-bold text-white mb-2 border-l-4 border-red-700 pl-4">
              {project.title}
            </h2>
            {description && (
              <div className="border-l-4 border-zinc-700 pl-4 mb-6">
                <p className="text-yellow-400 text-sm font-semibold mb-3">{description.date}</p>
                {description.text.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {project.photos.map(photo => (
                <img
                  key={photo}
                  src={`/Media/${project.folderName}/${photo}`}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:opacity-80 transition cursor-pointer"
                />
              ))}
            </div>
          </div>
          )
        })}

        <MediaGallerySupabase />
      </div>
    </div>
  )
}
