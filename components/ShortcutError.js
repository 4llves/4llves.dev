import { useEffect, useState } from 'react'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function ShortcutError() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="a" href="/">
          Toque para ir para Home →
        </ButtonPrimary>
      )
    }

    return (
      <ButtonPrimary as="a" href="/">
        Pressione <kbd>G</kbd> <kbd>H</kbd> pra ir pra Home →
      </ButtonPrimary>
    )
  }

  return <div />
}
