import { useKBar } from 'kbar'
import { useEffect, useState } from 'react'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function ShortcutHome() {
  const { query } = useKBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Toque para Iniciar →
        </ButtonPrimary>
      )
    } else if (isMac) {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Pressione <kbd>⌘</kbd> <kbd>K</kbd> para Iniciar →
        </ButtonPrimary>
      )
    } else {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Pressione <kbd>ctrl</kbd> <kbd>K</kbd> para Iniciar →
        </ButtonPrimary>
      )
    }
  }

  return <div />
}
