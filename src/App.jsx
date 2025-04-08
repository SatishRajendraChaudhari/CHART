import React from 'react'
import DashboardContent from './components/DashboardContent'
// import ChurnRateAnalysis from './components/ChurnRateAnalysis'
import CarWashChart from './components/CarWashChart'
const App = () => {
  return (
    <div>
      <DashboardContent/>
      {/* <ChurnRateAnalysis timeRange='weekly' selectedLocation={5}/> */}
      <CarWashChart/>
    </div>
  )
}

export default App