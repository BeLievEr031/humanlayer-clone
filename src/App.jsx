import React from 'react'
import HeroHumanLayer from './components/HeroHumanLayer'
import FeaturesTerminal from './components/FeaturesTerminal'
import ContextEngineeringSection from './components/ContextEngineeringSection'
import EnterpriseAndCareersSection from './components/EnterpriseAndCareersSection'

const App = () => {
  return (
    <div>
      <HeroHumanLayer />
      <FeaturesTerminal />
      <ContextEngineeringSection />
      <EnterpriseAndCareersSection />
    </div>
  )
}

export default App