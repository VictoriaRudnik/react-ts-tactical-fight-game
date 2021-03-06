import { getAttalableUnits } from '../../functions/getAttakableUnits'
import { TypeBehavior } from './TypeBehavior'
import { Unit } from '../../../models/units/Unit'
import { checkTurnUnitInFirstTeam } from '../../functions/chekTurnUnitInFirstTeam'

export class Range implements TypeBehavior {
  getAttakableUnits(unitsCoordinations: Unit[][], turnUnit: Unit): Unit[] {
    const isTurnUnitInFirstTeam = checkTurnUnitInFirstTeam(
      unitsCoordinations,
      turnUnit
    )
    
    const attakableUnits: Unit[] = getAttalableUnits(
      isTurnUnitInFirstTeam,
      unitsCoordinations
    )
    return attakableUnits
  }
}
