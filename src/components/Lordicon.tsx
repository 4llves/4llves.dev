'use client'
import { useEffect, useRef, useState } from 'react'
import { Player } from '@lordicon/react'
import { cn } from '@/lib/utils'

type LordiconType = {
  icon: any
  className?: string | null
  size?: number | undefined
}

export function Lordicon({ icon, className, size = 64 }: LordiconType) {
  const [isHovered, setIsHovered] = useState(false)

  const playerRef = useRef<Player>(null)

  useEffect(() => {
    if (isHovered) {
      playerRef.current?.playFromBeginning()
    }
  }, [isHovered])

  return (
    <div
      className={cn('', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Player ref={playerRef} icon={icon} size={size} />
    </div>
  )
}
