import React, { useState, useEffect } from 'react'
import './style.css'
import { startFight } from '../../core/logic/field/startFight'
import { Unit } from '../../core/models/units/Unit'
import { doTurn } from '../../core/logic/doTurn'
import { ReducedHalfDamage } from '../../core/logic/interface/DefendBehavior/ReduceHalfDamage'
import { Team } from '../team/Team'
import { TurnedUnits } from '../../core/logic/field/TurnedUnits'
import { Round } from '../../core/logic/field/Round'

export interface FieldProps {
  firstTeam: Unit[][]
  secondTeam: Unit[][]
  roundTurnUnits: TurnedUnits
  round: Round
}

export const Field = ({
  firstTeam,
  secondTeam,
  roundTurnUnits,
  round,
}: FieldProps) => {
  const [step, setStep] = useState(0)
  const [turnOrder, setTurnOrder] = useState(1)
  const [turnUnit, setTurnUnit] = useState<any>({})
  const [attakableUnits, setAttakableUnits] = useState<any>([])

  useEffect(() => {
    const turnUnit = startFight({
      firstTeam,
      secondTeam,
      step,
      roundTurnUnits,
      round,
    })
    if (turnUnit) {
      if (!turnUnit.isParalyzed) {
        setTurnUnit(turnUnit)
        setAttakableUnits(turnUnit.getAttacableUnits(twoTeams, turnUnit))
      } else {
        turnUnit.isParalyzed = false
        setStep(step + 1)
      }
    } else {
      setStep(step + 1)
    }
  }, [step])

  useEffect(() => {
    setTurnOrder(1)
  }, [round.round])

  const renderCard = (team: Unit[][]) => {
    const cardsElements: Unit[] = []
    team.forEach((rowArray: Unit[]) => {
      rowArray.forEach((item) => {
        cardsElements.push(item)
      })
    })
    return cardsElements
  }

  const unitsFirstTeam = renderCard(firstTeam)
  const unitsSecondTeam = renderCard(secondTeam)
  const twoTeams = firstTeam.concat(secondTeam)

  const handleAction = (turnUnit: Unit, unit: Unit) => {
    if (attakableUnits.includes(unit)) {
      doTurn(turnUnit, [unit], attakableUnits)
      setStep(step + 1)
      setTurnOrder(turnOrder + 1)
    }
  }

  const handleDefence = () => {
    turnUnit.defendBehavior = new ReducedHalfDamage()
    setStep(step + 1)
    setTurnOrder(turnOrder + 1)
  }

  return (
    <div className="field_container">
      <Team
        turnUnit={turnUnit}
        unitsTeam={unitsFirstTeam}
        handleAction={handleAction}
        round={round.round}
        numberTeam={1}
        handleDefence={handleDefence}
        className="field_container-team-one"
        attakableUnits={attakableUnits}
        turnOrder={turnOrder}
      />
      <div className="field_line-between-team"></div>
      <Team
        turnUnit={turnUnit}
        unitsTeam={unitsSecondTeam}
        handleAction={handleAction}
        round={round.round}
        numberTeam={2}
        handleDefence={handleDefence}
        className="field_container-team-two"
        attakableUnits={attakableUnits}
        turnOrder={turnOrder}
      />
    </div>
  )
}
