/* eslint-disable camelcase */
'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Chakra_Petch } from 'next/font/google'
import { LinkDev } from './link-dev'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: '400',
})

export function Hamburguer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItemClassName = clsx(
    'md:block md:text-base text-xl group cursor-pointer',
    {
      visible: mobileMenuOpen,
      hidden: !mobileMenuOpen,
    },
  )

  return (
    <div className="">
      <header
        className={clsx(
          ` md:w-[720px] md:m-auto md:flex md:items-center md:justify-between text-green-titles p-8 md:p-5 flex flex-col md:flex-row gap-10 ${chakraPetch.className}`,
          {
            'h-screen': mobileMenuOpen,
          },
        )}
      >
        <a href="/" className={menuItemClassName}>
          <svg
            className="fill-white hover:fill-orange-500 transition duration-300 ease-in-out"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="25pt"
            viewBox="0 0 524.000000 724.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,724.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M2050 7119 c-14 -6 -36 -20 -48 -32 -45 -41 -55 -76 -59 -192 -5
                -143 -8 -152 -46 -176 -28 -17 -42 -19 -109 -13 -84 7 -124 -3 -166 -40 -35
                -31 -49 -64 -57 -131 -9 -73 -29 -110 -69 -127 -41 -17 -100 -14 -131 6 -48
                31 -60 63 -65 172 -6 114 -17 138 -81 182 -66 46 -176 15 -216 -61 -12 -22
                -19 -67 -23 -149 -6 -135 -16 -154 -101 -184 -62 -23 -94 -57 -110 -115 -11
                -42 -10 -50 10 -92 15 -31 44 -63 87 -97 36 -28 69 -62 74 -76 17 -43 12 -99
                -11 -128 -46 -59 -116 -71 -209 -35 -31 11 -80 20 -111 21 -97 0 -146 -40
                -175 -143 -21 -76 -43 -93 -139 -108 -68 -11 -81 -17 -114 -50 -58 -58 -64
                -142 -14 -209 31 -41 70 -59 145 -67 44 -5 64 -13 88 -35 29 -27 30 -30 30
                -124 0 -107 -15 -157 -51 -176 -12 -7 -63 -15 -113 -17 -62 -3 -101 -10 -128
                -24 -121 -62 -126 -246 -9 -320 43 -28 50 -29 163 -29 132 0 166 -9 211 -58
                36 -37 45 -94 24 -144 -23 -55 -53 -69 -161 -77 -150 -12 -206 -60 -206 -177
                0 -59 2 -64 43 -109 53 -58 86 -66 237 -59 104 5 118 4 147 -15 36 -23 73 -87
                73 -127 0 -45 -30 -94 -71 -114 -31 -17 -60 -20 -161 -21 -71 0 -138 -6 -157
                -13 -86 -31 -125 -147 -79 -236 44 -85 133 -108 307 -78 123 21 199 -23 209
                -121 4 -49 3 -53 -35 -88 -21 -21 -56 -51 -77 -67 -91 -68 -88 -194 6 -269 59
                -47 113 -47 222 -2 107 44 148 42 201 -11 59 -59 59 -127 0 -199 -42 -50 -67
                -117 -59 -154 23 -99 119 -169 216 -158 70 9 117 34 238 129 148 116 204 148
                257 148 86 0 143 -56 143 -140 0 -51 -17 -75 -95 -136 -160 -124 -432 -389
                -490 -477 -21 -33 -15 -42 58 -88 606 -381 1207 -936 1601 -1479 94 -130 136
                -170 178 -170 43 0 88 40 88 79 1 14 2 137 3 273 l2 248 173 173 172 173 -2
                284 -3 285 -80 40 c-45 22 -110 53 -145 69 -105 48 -351 165 -405 193 -206
                108 -332 252 -380 433 -21 79 -21 489 0 529 42 82 141 108 205 55 56 -48 60
                -65 60 -266 0 -198 10 -256 53 -331 30 -51 96 -114 158 -150 42 -25 350 -169
                529 -247 47 -21 189 -85 315 -142 351 -161 424 -182 541 -158 216 45 319 204
                270 418 -34 150 -13 223 80 268 70 34 95 63 101 117 6 46 -12 93 -49 134 l-20
                21 29 6 c40 9 103 63 119 102 27 65 13 124 -41 174 -56 52 -69 112 -39 177 25
                52 56 67 156 74 72 5 95 11 128 33 87 58 104 164 40 267 -231 374 -429 714
                -435 748 -5 30 1 60 25 132 40 117 37 148 -29 280 -106 208 -231 388 -369 529
                l-87 90 -222 0 c-122 0 -228 -3 -237 -6 -14 -5 -16 -29 -16 -163 0 -178 -13
                -241 -57 -283 -16 -15 -41 -32 -56 -37 -18 -7 -182 -11 -470 -11 -499 0 -491
                -1 -534 75 -28 49 -29 87 -3 139 35 73 21 70 450 76 l385 5 5 200 c6 226 9
                239 80 275 37 19 58 20 377 20 l338 0 61 -29 c116 -55 325 -279 472 -506 100
                -154 108 -163 154 -176 103 -27 214 38 234 139 16 80 -23 145 -116 192 -81 41
                -120 88 -120 146 0 62 21 98 73 123 24 12 48 21 53 21 22 0 93 72 104 106 16
                47 8 115 -18 151 -11 16 -42 39 -69 51 -90 43 -98 48 -120 81 -52 76 -16 150
                92 194 81 32 111 57 136 112 24 53 24 80 -5 140 -32 70 -64 89 -148 90 -59 0
                -70 -3 -105 -31 -30 -25 -43 -47 -63 -105 -23 -69 -28 -76 -70 -96 -53 -28
                -93 -29 -140 -5 -48 24 -80 75 -80 128 0 33 8 52 34 87 72 95 81 134 44 207
                -52 102 -206 125 -280 43 -10 -10 -30 -50 -45 -88 -25 -62 -33 -72 -73 -92
                -54 -28 -92 -29 -146 -4 -72 33 -105 122 -70 189 8 15 31 43 51 62 66 62 80
                122 45 197 -35 78 -110 103 -239 83 -143 -24 -197 5 -232 123 -34 114 -96 158
                -201 144 -70 -9 -102 -45 -156 -175 -15 -34 -80 -72 -126 -72 -35 0 -100 34
                -120 62 -9 12 -23 44 -32 70 -30 93 -109 137 -205 117 -57 -12 -99 -54 -125
                -124 -26 -73 -41 -91 -85 -109 -52 -21 -82 -20 -129 4 -45 23 -62 46 -85 110
                -27 77 -51 94 -170 116 -83 15 -170 17 -205 3z m253 -883 c18 -7 46 -28 61
                -47 28 -32 28 -35 24 -139 -5 -145 -32 -180 -139 -180 -42 0 -55 5 -87 34
                l-37 34 -3 105 c-4 125 7 154 70 186 50 25 67 26 111 7z m-689 -1321 c83 -55
                72 -199 -19 -245 -24 -12 -81 -16 -269 -18 -263 -3 -277 -1 -326 54 -53 61
                -49 142 11 200 l30 29 242 5 c258 5 288 3 331 -25z m2877 -593 c68 -41 69 -50
                69 -422 0 -282 -2 -337 -16 -365 -23 -50 -59 -69 -126 -69 -47 -1 -61 4 -83
                24 -53 49 -55 61 -55 313 0 205 -2 236 -16 241 -9 3 -354 6 -767 6 -713 0
                -754 1 -787 19 -47 25 -71 60 -77 113 -9 78 35 140 112 159 16 4 408 6 870 6
                l840 -2 36 -23z m-2126 -213 c124 -46 223 -125 297 -238 74 -114 90 -176 96
                -369 3 -136 1 -171 -13 -207 -21 -57 -65 -85 -133 -85 -57 0 -101 28 -120 77
                -6 16 -12 100 -14 188 -4 178 -13 211 -83 293 -179 208 -531 57 -512 -220 9
                -138 93 -254 239 -330 95 -49 118 -79 118 -155 0 -63 -32 -107 -90 -124 -46
                -14 -87 -7 -158 26 -174 81 -330 273 -378 465 -36 142 -4 323 79 452 64 100
                197 202 311 238 101 32 258 27 361 -11z m-49 -2060 c31 -15 48 -32 63 -63 20
                -39 21 -60 21 -301 0 -242 -1 -261 -21 -302 -25 -51 -61 -73 -123 -73 -52 0
                -100 34 -122 87 -20 47 -20 540 0 586 16 39 45 65 82 77 44 13 54 12 100 -11z"
              />
            </g>
          </svg>
        </a>
        <a href="/" className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent transition duration-600 ease-in-out">
            &lt;{' '}
          </strong>
          Home
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent transition duration-1000 ease-in-out">
            {' '}
            /&gt;
          </strong>
        </a>

        <a href="/about" className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Sobre
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>

        <a href="/project" className={menuItemClassName}>
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            &lt;{' '}
          </strong>
          Projetos
          <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent">
            {' '}
            /&gt;
          </strong>
        </a>
        <a href="/talks" className={menuItemClassName}>
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
