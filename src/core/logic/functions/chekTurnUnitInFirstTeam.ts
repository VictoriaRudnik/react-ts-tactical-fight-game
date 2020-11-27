import { Unit } from '../../models/units/Unit'

export const checkTurnUnitInFirstTeam = (
  unitCoordinations: Unit[][],
  turnUnit: Unit
): boolean => {
  let isUnitInFirstTeam: boolean = false
  for (let i = 0; i < unitCoordinations.length / 2; i++) {
    for (let j = 0; j < unitCoordinations[i].length; j++) {
      if (unitCoordinations[i][j] === turnUnit) {
        isUnitInFirstTeam = true
      }
    }
  }
  return isUnitInFirstTeam
}
