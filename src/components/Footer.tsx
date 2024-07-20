// import { Quantico } from 'next/font/google'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa6'

// const quantico = Quantico({ weight: '400', preload: false })

export function Footer() {
  return (
    <footer className={`flex w-full items-center justify-center py-4 bg-black`}>
      <ul className="flex gap-5">
        <li className="relative flex gap-2 justify-center items-center w-28">
          <Link
            className="group flex items-center justify-center gap-2 text-base text-rose-600 hover:text-blue-400"
            href="https://github.com/4llves"
          >
            <FaGithubAlt className="h-5 w-5" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:relative group-hover:ml-2 transition-opacity duration-100">
              github
            </span>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
