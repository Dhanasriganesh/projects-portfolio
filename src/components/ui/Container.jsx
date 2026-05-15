/** Site-wide horizontal bounds */
export default function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-[min(100%,82rem)] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
