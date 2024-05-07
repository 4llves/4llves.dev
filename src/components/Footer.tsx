import { Quantico } from 'next/font/google'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa6'

const quantico = Quantico({ weight: '400', preload: false })

export function Footer() {
  return (
    <footer
      className={`${quantico.className} flex w-full items-center justify-center py-4 bg-black`}
    >
      <ul className="flex gap-5">
        <li className="flex gap-2 justify-center items-center">
          <Link href="https://github.com/4llves">github</Link>
          <FaGithubAlt />
        </li>

        <li className="flex gap-2 justify-center items-center">
          <Link href="https://github.com/4llves">github</Link>
          <FaGithubAlt />
        </li>

        <li className="flex gap-2 justify-center items-center">
          <Link href="https://github.com/4llves">github</Link>
          <FaGithubAlt />
        </li>

        <li className="flex gap-2 justify-center items-center">
          <Link href="https://github.com/4llves">github</Link>
          <FaGithubAlt />
        </li>
      </ul>
    </footer>
  )
}
