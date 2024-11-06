import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className={'flex w-full items-center justify-center py-4'}>
      <ul className="flex gap-2">
        <li className="relative flex gap-2 justify-center items-center w-28">
          <Link
            className="group flex items-center justify-center gap-2 text-base text-rose-600 hover:text-blue-400"
            href="https://github.com/4llves"
          >
            <span className="">Github</span>
            <FaGithubAlt className="h-5 w-5" />
          </Link>
        </li>
        <li className="relative flex gap-2 justify-center items-center w-28">
          <Link
            className="group flex items-center justify-center gap-2 text-base text-zinc-300 hover:text-orange-600"
            href="https://github.com/4llves"
          >
            <span className="">Instagram</span>
            <FaGithubAlt className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </footer>
  )
}
