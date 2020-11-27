import { Unit } from '../../models/units/Unit'

export const getAttalableUnits = (
  isTurnUnitInFirstTeam: boolean,
  unitsCoordinations: Unit[][]
): Unit[] => {
  let attakableUnits: Unit[] = []
  if (isTurnUnitInFirstTeam) {
    for (
      let i = unitsCoordinations.length / 2;
      i < unitsCoordinations.length;
      i++
    ) {
      for (let j = 0; j < unitsCoordinations[i].length; j++) {
        if (unitsCoordinations[i][j].healthPoints > 0) {
          attakableUnits.push(unitsCoordinations[i][j])
        }
      }
    }
  } else {
    for (let i = 0; i < unitsCoordinations.length / 2; i++) {
      for (let j = 0; j < unitsCoordinations[i].length; j++) {
        if (unitsCoordinations[i][j].healthPoints > 0) {
          attakableUnits.push(unitsCoordinations[i][j])
        }
      }
    }
  }
  return attakableUnits
}
