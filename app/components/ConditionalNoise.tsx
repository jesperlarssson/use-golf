'use client'

import { usePathname } from 'next/navigation'
import Noise from '@/components/ui/Noise'

const GRAIN_ENABLED = false

export default function ConditionalNoise() {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (!GRAIN_ENABLED || isStudio) {
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
