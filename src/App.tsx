import React from 'react'
import './App.css'
import { Field } from './components/field/Field'
import { createTeam } from './core/logic/field/createTeam'
import { TurnedUnits } from './core/logic/field/TurnedUnits'
import { Round } from './core/logic/field/Round'

function App() {
  const round = new Round()
  const turnedUnits = new TurnedUnits([])
  const { firstTeam, secondTeam } = createTeam()

  return (
    <>
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        roundTurnUnits={turnedUnits}
        round={round}
      />
    </>
  )
}

export default App
