import React, { useEffect, useRef, useState } from 'react'

interface CrtScreenWrapperProps {
  children: React.ReactNode
  scanlinesEnabled: boolean
  staticEnabled: boolean
}

export const CrtScreenWrapper: React.FC<CrtScreenWrapperProps> = ({
  children,
  scanlinesEnabled,
  staticEnabled,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Real-time analog TV static noise generation
  useEffect(() => {
    if (!staticEnabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const width = 160
    const height = 120
    canvas.width = width
    canvas.height = height

    const renderNoise = () => {
      const imgData = ctx.createImageData(width, height)
      const buffer = new Uint32Array(imgData.data.buffer)
      const len = buffer.length

      for (let i = 0; i < len; i++) {
        // Subtle phosphor green TV fuzz noise
        if (Math.random() > 0.88) {
          const lum = Math.floor(Math.random() * 80) + 100
          buffer[i] = (255 << 24) | (0 << 16) | (lum << 8) | 0
        } else {
          buffer[i] = 0 // transparent
        }
      }

      ctx.putImageData(imgData, 0, 0)
      animationId = requestAnimationFrame(renderNoise)
    }

    renderNoise()
    return () => cancelAnimationFrame(animationId)
  }, [staticEnabled])

  return (
    <div className="relative min-h-screen bg-[#020703] text-emerald-400 font-mono flex flex-col items-center justify-start overflow-x-hidden crt-container selection:bg-emerald-500 selection:text-black">
      {/* Curved Cathode Glass Vignette & Phosphor Glow */}
      <div className="fixed inset-0 pointer-events-none z-30 shadow-[inset_0_0_120px_rgba(0,0,0,0.95)]" />
      <div className="fixed inset-0 pointer-events-none z-30 bg-gradient-radial from-transparent via-transparent to-black/80" />

      {/* Retro Cathode Scanline Raster (Togglable) */}
      {scanlinesEnabled && (
        <div className="fixed inset-0 pointer-events-none z-20 scanlines opacity-65" />
      )}

      {/* Analog TV Static Canvas Overlay (Togglable) */}
      {staticEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-25 opacity-12 mix-blend-screen"
        />
      )}

      {/* Subtle CRT Flicker Beam */}
      <div className="fixed inset-0 pointer-events-none z-10 crt-beam opacity-30" />

      {/* Main Content inside the Telescreen Tube */}
      <div className="relative z-10 w-full max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col flex-1">
        {children}
      </div>
    </div>
  )
}
