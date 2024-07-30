'use client'
import { routesLinks } from '@/enums/route-enums'
// import { Quantico } from 'next/font/google'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu'

// const quantico = Quantico({
//   subsets: ['latin'],
//   weight: '400',
// })

const routesLinksArray = Object.values(routesLinks)

export function NavBar() {
  return (
    <div
      className={`flex mx-2 md:mx-14 items-center justify-between space-x-16 m-7 box-border`}
      // className={`${quantico.className} flex mx-14 items-center justify-between space-x-16 m-7 box-border`}
    >
      <Link href={routesLinks.home} className="flex items-center h-5 w-4">
        <p className="text-3xl font-bold">4</p>
      </Link>

      <NavigationMenu className="flex justify-between max-w-lg">
        {routesLinksArray.slice(1).map((route, i) => (
          <NavigationMenuItem
            key={i}
            className="flex relative capitalize justify-between"
          >
            <span className="group text-green-titles">
              <strong className="group-hover:text-green-titles text-transparent">
                &lt;{' '}
              </strong>
              <Link href={route} legacyBehavior passHref>
                {route}
              </Link>
              <strong className="group-hover:text-green-titles text-transparent">
                {' '}
                /&gt;
              </strong>
            </span>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
    </div>
  )
}
