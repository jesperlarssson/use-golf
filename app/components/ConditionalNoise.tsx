'use client'

import { usePathname } from 'next/navigation'
import Noise from '@/components/ui/Noise'

export default function ConditionalNoise() {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return null
  }

  return (
    <Noise
      patternSize={30}
      patternScaleX={0.5}
      patternScaleY={0.5}
      patternRefreshInterval={10}
      patternAlpha={15}
    />
  )
}

