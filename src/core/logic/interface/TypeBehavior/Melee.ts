import { TypeBehavior } from './TypeBehavior'
import { Unit } from '../../../models/units/Unit'
import { getUnitCoordinarion } from '../../functions/getUnitCoordination'
import { checkTurnUnitInFirstTeam } from '../../functions/chekTurnUnitInFirstTeam'
import { getAttakableUnitsForMelee } from '../../functions/getAttakableUnitsForMelee'

export class Melee implements TypeBehavior {
  getAttakableUnits(unitsCoordinations: Unit[][], turnUnit: Unit): Unit[] {
    const turnUnitCoordination = getUnitCoordinarion(
      unitsCoordinations,
      turnUnit
    )
    const isTurnUnitInFirstTeam = checkTurnUnitInFirstTeam(
      unitsCoordinations,
      turnUnit
    )

    const attakableUnits: Unit[] = getAttakableUnitsForMelee(
      turnUnitCoordination,
      unitsCoordinations,
      isTurnUnitInFirstTeam
    )

    return attakableUnits
  }
}
