'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type Article = { id: string; title: string; content: string; image_url: string; category: string; published_at: string }
type Photo = { id: string; title: string; image_url: string; category: string }

export default function AdminPage() {
  const [session, setSession] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [tab, setTab] = useState<'articles' | 'photos'>('articles')

  const [articles, setArticles] = useState<Article[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])

  const [articleForm, setArticleForm] = useState({ title: '', content: '', image_url: '', category: '' })
  const [photoForm, setPhotoForm] = useState({ title: '', image_url: '', category: '' })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    supabase.auth.onAuthStateChange((_e, s) => setSession(s))
  }, [])

  useEffect(() => {
    if (session) {
      fetchData()
    }
  }, [session])

  async function fetchData() {
    const [{ data: a }, { data: p }] = await Promise.all([
      supabase.from('articles').select('*').order('published_at', { ascending: false }),
      supabase.from('photos').select('*').order('created_at', { ascending: false }),
    ])
    if (a) setArticles(a)
    if (p) setPhotos(p)
  }

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
  }

  async function logout() {
    await supabase.auth.signOut()
  }

  async function saveArticle(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { error } = await supabase.from('articles').insert({ ...articleForm, published_at: new Date().toISOString() })
    if (!error) {
      setMsg('Article saved!')
      setArticleForm({ title: '', content: '', image_url: '', category: '' })
      fetchData()
    }
    setSaving(false)
    setTimeout(() => setMsg(''), 3000)
  }

  async function deleteArticle(id: string) {
    if (!confirm('Delete this article?')) return
    await supabase.from('articles').delete().eq('id', id)
    fetchData()
  }

  async function savePhoto(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { error } = await supabase.from('photos').insert(photoForm)
    if (!error) {
      setMsg('Photo saved!')
      setPhotoForm({ title: '', image_url: '', category: '' })
      fetchData()
    }
    setSaving(false)
    setTimeout(() => setMsg(''), 3000)
  }

  async function deletePhoto(id: string) {
    if (!confirm('Delete this photo?')) return
    await supabase.from('photos').delete().eq('id', id)
    fetchData()
  }

  if (!session) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-bold mb-2 text-center">Admin Login</h1>
          <p className="text-gray-500 text-sm text-center mb-8">International Council of Eelam Tamils</p>
          <form onSubmit={login} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-red-700"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-red-700"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white py-3 font-semibold transition">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-4 flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">Admin Panel — ICET</h1>
        <button onClick={logout} className="text-gray-400 hover:text-white text-sm border border-zinc-700 px-4 py-1.5 transition">Logout</button>
      </div>

      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 flex">
          {(['articles', 'photos'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 text-sm font-semibold capitalize transition ${tab === t ? 'text-white border-b-2 border-red-700' : 'text-gray-500 hover:text-white'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {msg && <div className="bg-green-900 border border-green-700 text-green-300 px-4 py-2 mb-6 text-sm">{msg}</div>}

        {tab === 'articles' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-white font-bold mb-4">Add Article / News</h2>
              <form onSubmit={saveArticle} className="space-y-4">
                <input placeholder="Title *" value={articleForm.title} onChange={e => setArticleForm({ ...articleForm, title: e.target.value })} required className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <input placeholder="Category (e.g. Press Release, Conference 2026)" value={articleForm.category} onChange={e => setArticleForm({ ...articleForm, category: e.target.value })} className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <input placeholder="Image URL (optional)" value={articleForm.image_url} onChange={e => setArticleForm({ ...articleForm, image_url: e.target.value })} className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <textarea placeholder="Content *" value={articleForm.content} onChange={e => setArticleForm({ ...articleForm, content: e.target.value })} rows={6} required className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <button type="submit" disabled={saving} className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 font-semibold text-sm transition disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Article'}
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-white font-bold mb-4">Existing Articles ({articles.length})</h2>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {articles.map(a => (
                  <div key={a.id} className="border border-zinc-800 p-4 flex justify-between items-start gap-4">
                    <div>
                      <p className="text-white text-sm font-semibold">{a.title}</p>
                      {a.category && <p className="text-red-500 text-xs mt-1">{a.category}</p>}
                      <p className="text-gray-600 text-xs mt-1">{new Date(a.published_at).toLocaleDateString()}</p>
                    </div>
                    <button onClick={() => deleteArticle(a.id)} className="text-red-600 hover:text-red-400 text-xs shrink-0">Delete</button>
                  </div>
                ))}
                {articles.length === 0 && <p className="text-gray-600 text-sm">No articles yet.</p>}
              </div>
            </div>
          </div>
        )}

        {tab === 'photos' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-white font-bold mb-4">Add Photo</h2>
              <form onSubmit={savePhoto} className="space-y-4">
                <input placeholder="Title (optional)" value={photoForm.title} onChange={e => setPhotoForm({ ...photoForm, title: e.target.value })} className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <input placeholder="Category (e.g. Ezhu Thamila 2025)" value={photoForm.category} onChange={e => setPhotoForm({ ...photoForm, category: e.target.value })} className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                <input placeholder="Image URL *" value={photoForm.image_url} onChange={e => setPhotoForm({ ...photoForm, image_url: e.target.value })} required className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:border-red-700" />
                {photoForm.image_url && <img src={photoForm.image_url} alt="preview" className="w-full h-40 object-cover" />}
                <button type="submit" disabled={saving} className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 font-semibold text-sm transition disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Photo'}
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-white font-bold mb-4">Existing Photos ({photos.length})</h2>
              <div className="grid grid-cols-2 gap-2 max-h-[600px] overflow-y-auto">
                {photos.map(p => (
                  <div key={p.id} className="relative group">
                    <img src={p.image_url} alt={p.title} className="w-full h-28 object-cover" />
                    <button onClick={() => deletePhoto(p.id)} className="absolute top-1 right-1 bg-red-700 text-white text-xs px-2 py-0.5 opacity-0 group-hover:opacity-100 transition">
                      Delete
                    </button>
                  </div>
                ))}
                {photos.length === 0 && <p className="text-gray-600 text-sm col-span-2">No photos yet.</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
