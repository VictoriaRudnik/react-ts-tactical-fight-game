import { TypeBehavior } from './TypeBehavior'
import { Unit } from '../../../models/units/Unit'
import { checkTurnUnitInFirstTeam } from '../../functions/chekTurnUnitInFirstTeam'
import { getHealableUnits } from '../../functions/getHealableUnits'

export class HealerSingleTarget implements TypeBehavior {
  getAttakableUnits(unitsCoordinations: Unit[][], turnUnit: Unit): Unit[] {
    const isTurnUnitInFirstTeam = checkTurnUnitInFirstTeam(
      unitsCoordinations,
      turnUnit
    )

    const healableUnits: Unit[] = getHealableUnits(
      isTurnUnitInFirstTeam,
      unitsCoordinations,
      turnUnit
    )

    return healableUnits
  }
}
