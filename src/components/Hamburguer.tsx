'use client'
import clsx from 'clsx'
import { useState } from 'react'

export function Hamburguer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItemClassName = clsx('md:block md:text-lg text-4xl', {
    visible: mobileMenuOpen,
    hidden: !mobileMenuOpen,
  })

  return (
    <div>
      <header
        className={clsx(
          'bg-black text-white p-8 flex flex-col md:flex-row gap-6',
          {
            'h-screen': mobileMenuOpen,
          },
        )}
      >
        <a className={menuItemClassName}>Home</a>
        <a className={menuItemClassName}>Quem somos nós</a>
        <a className={menuItemClassName}>Serviços</a>
        <a className={menuItemClassName}>Contatos</a>

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
