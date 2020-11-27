import { Unit } from '../../models/units/Unit'
import { TurnedUnits } from './TurnedUnits'

export const getTurnUnit = (
  arrayTeam: Unit[][],
  roundTurnUnits: TurnedUnits
) => {
  let roundTurnUnit = roundTurnUnits.roundTurnUnit

  let maxIniative = 0
  arrayTeam.forEach((rowArray: Unit[]) => {
    rowArray.forEach((unit: Unit) => {
      if (
        unit.iniative > maxIniative &&
        unit.healthPoints > 0 &&
        !roundTurnUnit.includes(unit)
      ) {
        maxIniative = unit.iniative
      }
    })
  })

  let arrayUnits: Unit[] = []

  for (let arr of arrayTeam) {
    for (let item of arr) {
      if (
        item.iniative === maxIniative &&
        item.healthPoints > 0 &&
        !roundTurnUnit.includes(item)
      ) {
        arrayUnits.push(item)
      }
    }
  }

  const numberRamdom = Math.floor(Math.random() * arrayUnits.length)

  return arrayUnits.length > 0 ? arrayUnits[numberRamdom] : null
}
