import React, { useEffect, useRef } from 'react'

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

  // Real-time analog TV static noise generation with memory optimization & safety
  useEffect(() => {
    if (!staticEnabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let animationId: number
    const width = 160
    const height = 120
    canvas.width = width
    canvas.height = height

    let imgData: ImageData
    try {
      imgData = ctx.createImageData(width, height)
    } catch {
      return
    }

    const buffer = new Uint32Array(imgData.data.buffer)
    const len = buffer.length

    const renderNoise = () => {
      try {
        for (let i = 0; i < len; i++) {
          if (Math.random() > 0.88) {
            const lum = Math.floor(Math.random() * 80) + 100
            // Little-endian RGBA: byte 0=R(0), 1=G(lum), 2=B(0), 3=A(255)
            buffer[i] = (255 << 24) | (0 << 16) | (lum << 8) | 0
          } else {
            buffer[i] = 0
          }
        }
        ctx.putImageData(imgData, 0, 0)
        animationId = requestAnimationFrame(renderNoise)
      } catch {
        // Safe canvas fallback
      }
    }

    renderNoise()
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [staticEnabled])

  return (
    <div className="relative min-h-screen bg-[#020703] text-emerald-400 font-mono flex flex-col items-center justify-start overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Curved Cathode Glass Vignette & Phosphor Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-30 shadow-[inset_0_0_120px_rgba(0,0,0,0.95)]"
        style={{
          background: 'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Retro Cathode Scanline Raster (Togglable) */}
      {scanlinesEnabled && (
        <div className="fixed inset-0 pointer-events-none z-20 scanlines opacity-65" />
      )}

      {/* Analog TV Static Canvas Overlay (Togglable) */}
      {staticEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-20 opacity-12 mix-blend-screen"
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
