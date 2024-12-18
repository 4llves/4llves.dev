import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'psicologamonique-img': "url('/psicologamonique.png')",
        'psicologamonique-gif':
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5zMzkwNWkxc2Zqc3huYTg1a3Z6bm1xZmQyaG5zeGV3NHd2OTg3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QQSNmsmuMi8wnzM8uI/giphy.gif')",
        'gporto-img': "url('/lpgporto.png')",
        'gporto-gif':
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDRocGtqZnlzdXRxMHAzajdnYWFybTQzZWhtNDVxOTVjYng3anl5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/spFknnFyEACXr2R16a/giphy.gif')",
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        move: 'move 5s linear infinite',
        shine: 'shine var(--duration) infinite linear',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translate(0,0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate(100px,50vh)' },
        },
        move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        shine: {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
    keyframes: {
      gradient: {
        to: {
          'background-position': '200% center',
        },
      },
      border: {
        to: { '--border-angle': '360deg' },
      },
    },
    animation: {
      gradient: 'gradient 8s linear infinite',
      border: 'border 4s linear infinite',
      'snow-fall': 'snow 4s ease-in-out infinite',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    nextui(),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ({ addUtilities }: { addUtilities: any }) => {
      addUtilities({
        '.bg-snow-globe-mobile': {
          'background-image': "url('/snow-globe.gif')",
          'background-position': '10% 95%',
          'background-repeat': 'no-repeat',
          'background-size': '35%',
        },
        '.bg-snow-globe': {
          'background-image': "url('/snow-globe.gif')",
          'background-position': '10% 95%',
          'background-repeat': 'no-repeat',
          'background-size': '15%',
        },
      })
    },
  ],
} satisfies Config
