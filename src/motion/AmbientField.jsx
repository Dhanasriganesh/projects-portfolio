import { useEffect, useRef } from 'react'
import { ensureGsapPlugins, gsap } from './ensureGsap'

const orbs = [
  { className: 'left-[6%] top-[18%] h-[min(52vw,520px)] w-[min(52vw,520px)] bg-red-400/25', delay: 0 },
  { className: 'right-[4%] top-[12%] h-[min(44vw,440px)] w-[min(44vw,440px)] bg-violet-500/20', delay: 0.4 },
  { className: 'left-[22%] bottom-[6%] h-[min(48vw,480px)] w-[min(48vw,480px)] bg-sky-400/22', delay: 0.8 },
  { className: 'right-[18%] bottom-[14%] h-[min(36vw,360px)] w-[min(36vw,360px)] bg-emerald-400/20', delay: 1.2 },
]

export default function AmbientField({ reduced }) {
  const root = useRef(null)

  useEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const blobs = root.current.querySelectorAll('[data-ambient-orb]')
    const ctx = gsap.context(() => {
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          xPercent: gsap.utils.random(-8, 8),
          yPercent: gsap.utils.random(-6, 6),
          scale: gsap.utils.random(0.95, 1.08),
          duration: gsap.utils.random(10, 16),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: orbs[i]?.delay ?? 0,
        })
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <div
      ref={root}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.04),_transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22160%22%20height=%22160%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/%3E%3C/svg%3E')]" />
      {orbs.map((o, i) => (
        <div
          key={i}
          data-ambient-orb
          className={`absolute rounded-full blur-3xl will-change-transform ${o.className}`}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.92)_78%,#ffffff)]" />
    </div>
  )
}
