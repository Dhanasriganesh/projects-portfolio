import { Link } from 'react-router-dom'
import logoSrc from '../../assets/grahmind-logo.png'

/**
 * Visible frame + oversized centered image (PNG has heavy padding around the lockup).
 */
const presets = {
  sm: {
    frame: 'block h-10 w-[140px] max-w-[42vw]',
    img: 'h-[200px]',
  },
  md: {
    frame: 'block h-11 w-[170px] max-w-[44vw] sm:h-12 sm:w-[200px]',
    img: 'h-[230px] sm:h-[260px]',
  },
  lg: {
    frame: 'block h-12 w-[200px] max-w-[48vw] sm:h-14 sm:w-[240px]',
    img: 'h-[260px] sm:h-[300px]',
  },
  header: {
    frame: 'block h-11 w-[min(200px,46vw)] sm:h-12 sm:w-[min(230px,38vw)] md:h-[3.25rem] md:w-[min(260px,28vw)]',
    img: 'h-[230px] sm:h-[270px] md:h-[310px]',
  },
  footer: {
    frame: 'block h-12 w-[min(220px,72vw)] sm:h-14 sm:w-[min(250px,55vw)]',
    img: 'h-[260px] sm:h-[300px]',
  },
}

/**
 * @param {{ to?: string, size?: keyof typeof presets, className?: string, onClick?: () => void }} props
 */
export default function GrahmindLogo({ to = '/', size = 'md', className = '', onClick }) {
  const { frame, img } = presets[size] ?? presets.md

  const mark = (
    <span className={`relative shrink-0 overflow-hidden ${frame} ${className}`}>
      <img
        src={logoSrc}
        alt="Grahmind Innovations"
        className={`pointer-events-none absolute left-1/2 top-1/2 w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain ${img}`}
        decoding="async"
        draggable={false}
      />
    </span>
  )

  if (to == null) return mark

  return (
    <Link to={to} data-cursor="hover" className="block max-w-full shrink-0" onClick={onClick}>
      {mark}
    </Link>
  )
}
