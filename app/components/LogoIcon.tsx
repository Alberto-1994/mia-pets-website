"use client"

import Image from 'next/image'

interface LogoIconProps {
  className?: string
  width?: number
  height?: number
}

const LogoIcon = ({ className = "h-8 w-8", width, height }: LogoIconProps) => {
  // Extract dimensions from className if width/height not provided
  const getSize = () => {
    if (width && height) return { width, height }
    
    // Parse className for size (e.g., "h-8 w-8" -> 32px)
    const sizeMatch = className.match(/h-(\d+)/)
    if (sizeMatch) {
      const size = parseInt(sizeMatch[1]) * 4 // Tailwind: h-8 = 32px
      return { width: size, height: size }
    }
    
    return { width: 32, height: 32 } // default
  }

  const { width: imgWidth, height: imgHeight } = getSize()

  return (
    <Image
      src="/images/logo.webp"
      alt="MIA PETS Logo"
      width={imgWidth}
      height={imgHeight}
      className={className}
      priority
    />
  )
}

export default LogoIcon
