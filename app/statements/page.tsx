import fs from 'fs'
import path from 'path'

function getStatements() {
  const dir = path.join(process.cwd(), 'public', 'Statementes')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.pdf'))
    .sort()
    .map(filename => {
      const title = filename
        .replace(/^\d+_/, '')
        .replace(/\.\.\.pdf$/, '')
        .replace(/\.pdf$/, '')
        .trim()
      return { filename, title, path: `/Statementes/${filename}` }
    })
}

export default function StatementsPage() {
  const statements = getStatements()

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-red-700" />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Statements</h1>
          </div>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Official statements and communications from the International Council of Eelam Tamils.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {statements.map((statement, i) => (
          <div key={statement.filename}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white border-l-4 border-red-700 pl-4">
                {statement.title}
              </h2>
              <a
                href={statement.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 text-xs font-semibold border border-red-700 px-3 py-1 transition shrink-0 ml-4"
              >
                Open PDF ↗
              </a>
            </div>
            <iframe
              src={statement.path}
              className="w-full border border-zinc-800"
              style={{ height: '85vh' }}
              title={statement.title}
            />
          </div>
        ))}

        {statements.length === 0 && (
          <p className="text-gray-500 text-center py-20">No statements yet.</p>
        )}
      </div>
    </div>
  )
}
