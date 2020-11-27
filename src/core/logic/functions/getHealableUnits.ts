import { Unit } from '../../models/units/Unit'

export const getHealableUnits = (
  isTurnUnitInFirstTeam: boolean,
  unitCoordinations: Unit[][],
  turnUnit: Unit
): Unit[] => {
  let healableUnits: Unit[] = []

  if (isTurnUnitInFirstTeam) {
    for (let i = 0; i < unitCoordinations.length / 2; i++) {
      for (let j = 0; j < unitCoordinations[i].length; j++) {
        if (
          unitCoordinations[i][j].healthPoints > 0 &&
          unitCoordinations[i][j] !== turnUnit
        ) {
          healableUnits.push(unitCoordinations[i][j])
        }
      }
    }
  } else {
    for (
      let i = unitCoordinations.length / 2;
      i < unitCoordinations.length;
      i++
    ) {
      for (let j = 0; j < unitCoordinations[i].length; j++) {
        if (
          unitCoordinations[i][j].healthPoints > 0 &&
          unitCoordinations[i][j] !== turnUnit
        ) {
          healableUnits.push(unitCoordinations[i][j])
        }
      }
    }
  }
  return healableUnits
}
