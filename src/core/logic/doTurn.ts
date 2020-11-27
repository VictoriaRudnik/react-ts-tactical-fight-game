import { Unit } from '../models/units/Unit'

export const doTurn = (
  turnUnit: Unit,
  unit: Unit[],
  attakableUnits: Unit[]
) => {
  turnUnit.doAction(unit, attakableUnits)
}
