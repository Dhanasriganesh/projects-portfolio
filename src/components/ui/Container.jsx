/** Site-wide horizontal bounds — wider max + tighter gutters to reduce side empty space */
export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[min(100%,90rem)] px-3 sm:px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  )
}
