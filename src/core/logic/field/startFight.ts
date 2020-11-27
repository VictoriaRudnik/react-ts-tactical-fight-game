import { UnDefended } from '../interface/DefendBehavior/UnDefended'
import { Unit } from '../../models/units/Unit'
import { getTurnUnit } from './getTurnUnit'
import { TurnedUnits } from './TurnedUnits'
import { Round } from './Round'

export interface StartFightProps {
  firstTeam: Unit[][]
  secondTeam: Unit[][]
  step: number
  roundTurnUnits: TurnedUnits
  round: Round
}

export const startFight = ({
  firstTeam,
  secondTeam,
  step,
  roundTurnUnits,
  round,
}: StartFightProps) => {
  // const { firstTeam, secondTeam, step, roundTurnUnits, round } = props

  let turnUnit: any

  const checkIsNeedAdditionalRound = (teamArray: Unit[][]) => {
    return teamArray.every((rowArray: Unit[]) => {
      return rowArray.every((unit) => {
        return (
          roundTurnUnits.roundTurnUnit.includes(unit) || unit.healthPoints <= 0
        )
      })
    })
  }

  const isNeedAdditionalRoundForFirstTeam = checkIsNeedAdditionalRound(
    firstTeam
  )
  const isNeedAdditionalRoundForSecondTeam = checkIsNeedAdditionalRound(
    secondTeam
  )

  if (isNeedAdditionalRoundForFirstTeam && isNeedAdditionalRoundForSecondTeam) {
    round.round = round.round + 1
    roundTurnUnits.roundTurnUnit = []
    const doUnitsUndepended = (team: Unit[][]) => {
      team.forEach((rowArray: Unit[]) => {
        rowArray.forEach((unit: Unit) => {
          unit.defendBehavior = new UnDefended()
        })
      })
    }

    doUnitsUndepended(firstTeam)
    doUnitsUndepended(secondTeam)
  }

  if (step % 2) {
    turnUnit = getTurnUnit(firstTeam, roundTurnUnits)
  } else {
    turnUnit = getTurnUnit(secondTeam, roundTurnUnits)
  }

  if (turnUnit) roundTurnUnits.roundTurnUnit.push(turnUnit)

  return turnUnit
}
