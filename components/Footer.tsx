import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="ICET Logo" width={60} height={60} className="rounded-full" />
              <div>
                <p className="text-yellow-400 text-xs">அனைத்துலக எழத்தமிழர் மக்களவை</p>
                <p className="text-white text-sm font-bold">International Council of Eelam Tamils</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs">Registration Number: 1018.804.460</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/media', 'Media'], ['/projects', 'Projects'], ['/peace-talks', 'Peace Talks'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-red-400 text-sm transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">Stay informed about our global Tamil advocacy work.</p>
            <Link href="/contact" className="bg-red-700 hover:bg-red-600 text-white text-sm px-5 py-2 font-semibold transition inline-block">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} International Council of Eelam Tamils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
