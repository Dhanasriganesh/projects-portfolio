import { useMemo } from 'react'
import HeroPortal from '../home/HeroPortal'
import RainbowMarquee from '../home/RainbowMarquee'
import StatsAuditorium from '../home/sections/StatsAuditorium'
import FeaturedProjects from '../home/sections/FeaturedProjects'
import CapabilitiesBento from '../home/sections/CapabilitiesBento'
import ProcessLineReveal from '../home/sections/ProcessLineReveal'
import TestimonialWordHaze from '../home/sections/TestimonialWordHaze'
import CTAFieldPulse from '../home/sections/CTAFieldPulse'
import { getCarouselProjects, marqueePhrases } from '../../config/site'

export default function Home() {
  const featured = useMemo(() => getCarouselProjects(), [])

  return (
    <>
      <HeroPortal />
      <RainbowMarquee items={marqueePhrases} />
      <StatsAuditorium />
      <FeaturedProjects projects={featured} />
      <CapabilitiesBento />
      <ProcessLineReveal />
      <TestimonialWordHaze />
      <CTAFieldPulse />
    </>
  )
}
