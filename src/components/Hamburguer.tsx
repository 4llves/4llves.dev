'use client'
import clsx from 'clsx'
import { useState } from 'react'
import Logo from '../assets/sliceLogo.svg'
import Image from 'next/image'
import { Quantico } from 'next/font/google'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '700',
})

export function Hamburguer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItemClassName = clsx('md:block md:text-xl text-xl group', {
    visible: mobileMenuOpen,
    hidden: !mobileMenuOpen,
  })

  return (
    <div>
      <header
        className={clsx(
          `bg-black md:flex md:items-center md:justify-center text-green-titles p-8 flex flex-col md:flex-row gap-10 cursor-pointer ${quantico.className}`,
          {
            'h-screen': mobileMenuOpen,
          },
        )}
      >
        <a className={menuItemClassName}>
          <Image src={Logo} alt="" width={30} height={30}></Image>
        </a>
        <a className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Home
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>
        <a className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Sobre
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>
        <a className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Projetos
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>
        <a className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Talks
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>

        <button
          className="md:hidden absolute right-4 top-6"
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          <div
            className={clsx(
              'w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out ',
              {
                'rotate-45 translate-y-2': mobileMenuOpen,
              },
            )}
          ></div>
          <div
            className={clsx('w-10 h-1 bg-white mb-1', {
              hidden: mobileMenuOpen,
            })}
          ></div>
          <div
            className={clsx(
              'w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out',
              {
                '-rotate-45': mobileMenuOpen,
              },
            )}
          ></div>
        </button>
      </header>
    </div>
  )
}
