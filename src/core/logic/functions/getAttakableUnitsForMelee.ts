import { checkTurnUnitInFirstTeam } from './chekTurnUnitInFirstTeam'
import { Unit } from '../../models/units/Unit'

export const getAttakableUnitsForMelee = (
  turnUnitCoordination: any,
  unitsCoordinations: Unit[][],
  isTurnUnitInFirstTeam: boolean
): Unit[] => {
  let attakableUnits: Unit[] = []
  const indexColumn = turnUnitCoordination.indexColumn

  for (
    let i = isTurnUnitInFirstTeam
      ? turnUnitCoordination.indexRow + 1
      : turnUnitCoordination.indexRow - 1;
    isTurnUnitInFirstTeam ? i < unitsCoordinations.length : i >= 0;
    isTurnUnitInFirstTeam ? i++ : i--
  ) {
    let deadUnits = true
    for (let j = 0; j < unitsCoordinations[i].length; j++) {
      if (indexColumn + j < unitsCoordinations[i].length) {
        let isUnitInFirstTeam = checkTurnUnitInFirstTeam(
          unitsCoordinations,
          unitsCoordinations[i][indexColumn + j]
        )
        isUnitInFirstTeam = isTurnUnitInFirstTeam
          ? !isUnitInFirstTeam
          : isUnitInFirstTeam
        if (
          unitsCoordinations[i][indexColumn + j].healthPoints > 0 &&
          isUnitInFirstTeam
        ) {
          const unit = unitsCoordinations[i][indexColumn + j]
          if (!attakableUnits.includes(unit)) attakableUnits.push(unit)
          deadUnits = false
        }
        if (unitsCoordinations[i][indexColumn + j].healthPoints > 0) {
          deadUnits = false
        }
      }
      if (indexColumn - j >= 0) {
        let isUnitInFirstTeam = checkTurnUnitInFirstTeam(
          unitsCoordinations,
          unitsCoordinations[i][indexColumn - j]
        )
        isUnitInFirstTeam = isTurnUnitInFirstTeam
          ? !isUnitInFirstTeam
          : isUnitInFirstTeam
        if (
          unitsCoordinations[i][indexColumn - j].healthPoints > 0 &&
          isUnitInFirstTeam
        ) {
          const unit = unitsCoordinations[i][indexColumn - j]
          if (!attakableUnits.includes(unit)) attakableUnits.push(unit)
          deadUnits = false
        }
        if (unitsCoordinations[i][indexColumn - j].healthPoints > 0) {
          deadUnits = false
        }
      }
      if (!deadUnits && j !== 0) {
        break
      }
    }
    if (!deadUnits) break
  }
  return attakableUnits
}
