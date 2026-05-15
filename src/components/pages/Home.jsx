import { useMemo } from 'react'
import HeroPortal from '../home/HeroPortal'
import RainbowMarquee from '../home/RainbowMarquee'
import FallingLettersShowcase from '../home/FallingLettersShowcase'
import StatsAuditorium from '../home/sections/StatsAuditorium'
import CapabilitiesClipDeck from '../home/sections/CapabilitiesClipDeck'
import WorkParallaxShowcase from '../home/sections/WorkParallaxShowcase'
import ProcessLineReveal from '../home/sections/ProcessLineReveal'
import TestimonialWordHaze from '../home/sections/TestimonialWordHaze'
import CTAFieldPulse from '../home/sections/CTAFieldPulse'
import { getFeaturedProjects } from '../../config/site'

export default function Home() {
  const featured = useMemo(() => getFeaturedProjects(), [])

  return (
    <div>
      <HeroPortal />
      <RainbowMarquee />
      <FallingLettersShowcase text="MINDSET OVER TEMPLATES" />
      <StatsAuditorium />
      <CapabilitiesClipDeck />
      <WorkParallaxShowcase projects={featured} />
      <ProcessLineReveal />
      <TestimonialWordHaze />
      <CTAFieldPulse />
    </div>
  )
}
