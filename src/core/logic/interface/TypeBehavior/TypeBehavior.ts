import { Unit } from '../../../models/units/Unit'

export interface TypeBehavior {
  getAttakableUnits(unitCoordinations: Unit[][], turnUnit: Unit): Unit[]
}
