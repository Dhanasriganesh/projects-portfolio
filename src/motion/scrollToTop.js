let lenisRef = null

export function setLenisInstance(instance) {
  lenisRef = instance
}

/** Scroll to top on route change — works with Lenis or native scroll. */
export function scrollToTop() {
  if (lenisRef) {
    lenisRef.scrollTo(0, { immediate: true })
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}
